import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return pug`
      .App
        header.App-header
          img.App-logo(src=${ logo } alt="logo")
          h1.App-title Welcome to React
        p.App-intro To get started, edit <code>src/App.js</code> and save to reload.
    `
  }
}

export default App;
