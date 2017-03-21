import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import App from './components/App/App';
import Homepage from './components/Homepage/Homepage';

export default (
  <BrowserRouter>
    <App>
        <Route exact={true} component={Homepage} path="/"></Route>
    </App>
  </BrowserRouter>
);