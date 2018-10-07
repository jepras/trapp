// For this demo, we are using the UMD build of react-router-dom
import React, { Component } from 'react';

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

class App extends Component {
  render() {
    return ( 
    <div>
      <Header />
      <Main />
    </div>)
  }
}

export default App;

