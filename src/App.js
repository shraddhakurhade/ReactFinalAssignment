import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import GKForm from '../src/components/GKForm';
import Footer from '../src/components/Footer';


export default class App extends Component  {
  render() {
    return (
      <div className="App">
        <div className="container">
        <GKForm/>
        </div>
      </div>
    );
  }
}

//export default App;
