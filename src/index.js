import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodScreen from './screens/food';
import AdminScreen from './screens/admin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { PostProvider } from './contexts/post_context';
import Home from './screens/home';
import { styled } from '@mui/system';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#FFF'
    },
  },
});

const Wrapper = styled('div')({
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <PostProvider>
                  <Home />
                </PostProvider>
              } />
              <Route path="/food">
                <Route path=":postId" element={<FoodScreen />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <AdminScreen />
                }
              />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
