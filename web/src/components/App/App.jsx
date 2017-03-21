import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';

export default function(props) {
  return (
    <MuiThemeProvider>
      <div className="App">
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}