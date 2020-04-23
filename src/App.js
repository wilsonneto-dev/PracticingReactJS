import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes.js';

import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';

import './styles/globals.scss';

export default () => (
  <>
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  </>
);
