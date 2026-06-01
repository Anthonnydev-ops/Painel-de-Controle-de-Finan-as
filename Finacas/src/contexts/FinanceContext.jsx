import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 1. Criamos o contexto propriamente dito
const FinanceContext = createContext();

// 2. Criamos o Provedor (Provider) que vai envolver a nossa aplicação
export function FinanceProvider({ children }) {
  // Aqui usamos o nosso hook customizado! Ele começa com uma lista vazia []
  const [transactions, setTransactions] = useLocalStorage('my_finances_transactions', []);

  // Função para adicionar uma nova transação (respeitando o modelo do Passo 1)
  const addTransaction = (transaction) => {
    // Geramos um ID único baseado no tempo atual e mantemos o resto dos dados
    const newTransaction = {
      ...transaction,
      id: crypto.randomUUID(), // Função nativa do navegador para criar IDs únicos
    };

    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  // Função para deletar uma transação pelo ID
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => 
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  // --- CÁLCULOS DOS TOTAIS ---
  // Aqui somamos tudo que é 'income' (receita)
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  // Aqui somamos tudo que é 'expense' (despesa)
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  // O saldo total é a receita menos a despesa
  const totalBalance = income - expense;

  // Repassamos os dados e funções para que qualquer componente possa usar
  return (
    <FinanceContext.Provider value={{
      transactions,
      addTransaction,
      deleteTransaction,
      income,
      expense,
      totalBalance
    }}>
      {children}
    </FinanceContext.Provider>
  );
}

// 3. Criamos um hook customizado para facilitar o uso do contexto nos componentes
export function useFinance() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance deve ser usado dentro de um FinanceProvider');
  }
  return context;
}