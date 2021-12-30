import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import BottomNavigationBar from './components/bottom_navigation_bar';
import Home from './screens/home';

const Wrapper = styled(Container)({
  marginTop: '20px',
  marginBottom: '80px'
});

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Home />
      </Wrapper>
      <BottomNavigationBar />
    </QueryClientProvider>
  );
}

export default App;
