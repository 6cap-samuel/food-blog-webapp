import React from 'react';
import { Container, createTheme } from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './screens/home';
import { PostContext, PostProvider } from './contexts/post_context';

const Wrapper = styled(Container)({
  marginTop: '20px',
  marginBottom: '80px'
});

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      secondary: {
        main: '#FFF'
      },
    },
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <PostProvider>
            <Home />
          </PostProvider>
        </Wrapper>
        {/* <BottomNavigationBar /> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
