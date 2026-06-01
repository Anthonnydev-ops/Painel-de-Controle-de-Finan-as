import { useFinance } from '../contexts/FinanceContext';
import { formatCurrency } from '../utils/formatters';

export function SummaryCards() {
  // 1. Buscamos os valores globais do nosso Contexto
  const { income, expense, totalBalance } = useFinance();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      
      {/* Card de Entradas */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 border-b-4 border-b-emerald-500 shadow-lg">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Entradas</h3>
        <p className="text-2xl md:text-3xl font-bold text-emerald-400 mt-2">
          {formatCurrency(income)}
        </p>
      </div>

      {/* Card de Saídas */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 border-b-4 border-b-rose-500 shadow-lg">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Saídas</h3>
        <p className="text-2xl md:text-3xl font-bold text-rose-400 mt-2">
          {formatCurrency(expense)}
        </p>
      </div>

      {/* Card de Saldo Total */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 border-b-4 border-b-indigo-500 shadow-lg">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Saldo Total</h3>
        <p className="text-2xl md:text-3xl font-bold text-white mt-2">
          {formatCurrency(totalBalance)}
        </p>
      </div>

    </div>
  );
}