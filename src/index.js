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
import NavBar from './components/top_nav_bar';
import BottomNavigationBar from './components/bottom_navigation_bar/index';
import { ProfileProvider, RequireAuth } from './contexts/profile_context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
      light: '#DDD'
    },
    secondary: {
      main: '#EEE'
    },
  },
});

const Wrapper = styled('div')({
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <ProfileProvider>
          <Wrapper>
            <BrowserRouter>
              <NavBar />
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
                    <RequireAuth>
                      <AdminScreen />
                    </RequireAuth>
                  }
                />
              </Routes>
              <BottomNavigationBar />
            </BrowserRouter>
          </Wrapper>
        </ProfileProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
