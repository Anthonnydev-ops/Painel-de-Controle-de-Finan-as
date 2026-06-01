import { FinanceProvider } from './contexts/FinanceContext';
// Importaremos a página do Dashboard aqui no próximo passo

function App() {
  return (
    <FinanceProvider>
      {/* Por enquanto vamos deixar um texto para testar */}
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Meu App de Finanças</h1>
        <p>O contexto já está configurado e pronto para rodar!</p>
      </div>
    </FinanceProvider>
  );
}

export default App;