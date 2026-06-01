import { useState } from 'react';
import { useFinance } from '../contexts/FinanceContext';

export function TransactionForm() {
  // 1. Estados locais para controlar os inputs do formulário
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // 'income' por padrão

  // 2. Pegamos a função de adicionar do nosso contexto global
  const { addTransaction } = useFinance();

  // 3. Função acionada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede a página de recarregar

    // Validação básica
    if (!description || !amount || Number(amount) <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    // Cria o objeto da transação (seguindo o modelo do Passo 1)
    const newTransaction = {
      description,
      amount: Number(amount), // Garante que é um número
      type,
      date: new Date().toISOString().split('T')[0], // Data de hoje (AAAA-MM-DD)
      category: "Geral", // Pode ser evoluído depois
    };

    // Envia para o contexto global (que salva no localStorage)
    addTransaction(newTransaction);

    // Limpa o formulário após o envio
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-5">Adicionar Nova Transação</h3>

      <div className="space-y-4">
        {/* Campo Descrição */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
            Descrição
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Mercado Central"
            className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Campo Valor */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-slate-300 mb-1">
            Valor (R$)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0,00"
            step="0.01"
            className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Campo Tipo (Dropdown Customizado) */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-slate-300 mb-1">
            Tipo
          </label>
          <div className="relative">
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none"
            >
              <option value="income" className="text-emerald-400">🟢 Entrada</option>
              <option value="expense" className="text-rose-400">🔴 Saída</option>
            </select>
            {/* Ícone de seta do dropdown */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Botão de Submeter */}
        <button
          type="submit"
          className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-150 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Adicionar Transação
        </button>
      </div>
    </form>
  );
}