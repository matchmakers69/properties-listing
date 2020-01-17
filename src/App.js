import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './style.scss';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './layout/Layout';
import Header from './layout/Header/Header';
import { AccomodationProvider } from './context/AccomodationContext';

const App = () => (
  <AccomodationProvider>
    <BrowserRouter>
      <Header />
      <Layout>
        <GlobalStyle />
        <Routes />
      </Layout>
    </BrowserRouter>
  </AccomodationProvider>
);

export default App;
