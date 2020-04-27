import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../../assets/header-logo.png';
import icoCart from '../../../assets/header-icon-cart.png';

import './styles.scss';

export default () => (
  <>
    <header className="main-header">
      <div className="header-item logo-wrapper">
        <img src={imgLogo} alt="Movies" />
      </div>
      <nav className="header-item">
        <Link to="/">Filmes</Link>
      </nav>
      <div className="header-item cart">
        <Link to="/shopping-cart">
          <span>3 Itens</span>
          <img src={icoCart} alt="Cart Icon" />
        </Link>
      </div>
    </header>
  </>
);
