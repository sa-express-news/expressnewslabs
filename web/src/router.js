import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import App from './components/App/App';

export default (
  <BrowserRouter>
    <Route component={App} path="/"></Route>
  </BrowserRouter>
);