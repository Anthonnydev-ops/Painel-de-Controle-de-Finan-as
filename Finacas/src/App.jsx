import { FinanceProvider } from './contexts/FinanceContext';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <FinanceProvider>
      {/* Renderiza diretamente o Dashboard, que já tem toda a estrutura e estilização */}
      <Dashboard />
    </FinanceProvider>
  );
}

export default App;