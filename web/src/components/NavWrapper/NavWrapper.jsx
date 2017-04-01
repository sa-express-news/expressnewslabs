import React, { Component } from 'react';
import _ from 'lodash';

import Nav from '../Nav/Nav';

class NavWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAtTop: true,
    }
  }

  componentDidMount() {
     window.addEventListener('scroll', () => this.setIsAtTop());
  }

  setIsAtTop() {
    const isAtTop = window.pageYOffset === 0;
    if (isAtTop !== this.state.isAtTop) {
      this.setState({ isAtTop });
    }
  }

  setBackground() {
    const { isAtTop } = this.state;
    return isAtTop ? 'linear-gradient(to bottom, rgba(51,51,51,0.65) 0%,rgba(51,51,51,0) 100%)' : '#333';
  }

  render() {
    const background = this.setBackground();
    console.log(background)

    return (
      <Nav background={background} />
    );
  }
}
export default NavWrapper
