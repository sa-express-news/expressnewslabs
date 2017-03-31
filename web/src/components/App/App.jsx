import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../Nav/Nav';

import './App.scss';

export default function(props) {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Nav />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}