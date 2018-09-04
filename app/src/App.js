import React, { Component } from 'react';
import Body from './comp1';
import Navbar from './navbar';
import Footer from './footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="header">Hello World!</h1>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
