import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import L1Form from '../src/components/L1Form';
import Footer from '../src/components/Footer';

export default class App extends Component  {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                 <Header/>
        </header>


        <L1Form/>
        <Footer/>
      </div>
    );
  }
}

//export default App;
