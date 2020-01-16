import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './style.scss';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './layout/Layout';
import { AccomodationProvider } from './context/AccomodationContext';

const App = () => (
  <AccomodationProvider>
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Routes />
      </Layout>
    </BrowserRouter>
  </AccomodationProvider>
);

export default App;
