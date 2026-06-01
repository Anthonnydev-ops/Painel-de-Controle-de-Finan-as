import { SummaryCards } from '../components/SummaryCards';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionTable } from '../components/TransactionTable'; // Importado aqui!

export function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight">
            Controle Financeiro
          </h1>
          <p className="text-slate-400 mt-2">Seu dashboard de finanças pessoais inteligente.</p>
        </header>

        {/* Seção dos Cards de Resumo */}
        <div className="mb-10">
          <SummaryCards />
        </div>

        {/* Grid Principal Layout Responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Formulário (Esquerda no desktop) */}
          <div className="lg:col-span-1 lg:sticky lg:top-8">
            <TransactionForm />
          </div>

          {/* Tabela de Histórico (Direita no desktop) */}
          <div className="lg:col-span-2">
            <TransactionTable />
          </div>

        </div>

      </div>
    </main>
  );
}