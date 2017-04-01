import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavWrapper from '../NavWrapper/NavWrapper';

import './App.scss';

export default function(props) {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavWrapper />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}