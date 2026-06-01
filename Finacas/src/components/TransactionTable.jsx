import { useFinance } from '../contexts/FinanceContext';
import { formatCurrency, formatDate } from '../utils/formatters';

export function TransactionTable() {
  // 1. Pegamos a lista e a função de deletar do contexto global
  const { transactions, deleteTransaction } = useFinance();

  // 2. Se não houver transações, exibe uma mensagem amigável
  if (transactions.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 bg-slate-800 rounded-xl border border-slate-700">
        <p className="text-lg font-medium">Nenhuma transação cadastrada ainda.</p>
        <p className="text-sm text-slate-500 mt-1">Use o formulário ao lado para começar!</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-xl font-bold text-white">Histórico de Transações</h3>
      </div>

      {/* Container com scroll horizontal para telas muito pequenas */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-700/50 text-slate-300 text-sm font-semibold uppercase tracking-wider">
              <th className="px-6 py-4">Descrição</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4 text-center">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700 text-slate-200">
            {transactions.map((transaction) => {
              const isIncome = transaction.type === 'income';

              return (
                <tr 
                  key={transaction.id} 
                  className="hover:bg-slate-700/30 transition duration-150 ease-in-out"
                >
                  {/* Descrição */}
                  <td className="px-6 py-4 font-medium text-white">
                    {transaction.description}
                  </td>

                  {/* Valor (Verde se for entrada, Vermelho se for saída) */}
                  <td className={`px-6 py-4 font-bold ${isIncome ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isIncome ? '+ ' : '- '}
                    {formatCurrency(transaction.amount)}
                  </td>

                  {/* Data formatada */}
                  <td className="px-6 py-4 text-slate-400 text-sm">
                    {formatDate(transaction.date)}
                  </td>

                  {/* Botão de Excluir */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-700 transition"
                      title="Excluir transação"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}