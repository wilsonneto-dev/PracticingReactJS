import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

export default () => (
  <div className="main-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id/:slug" component={Details} />

      <Route exact path="*" component={() => <NotFound />} />
    </Switch>
  </div>
);
