import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './screens/home';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
