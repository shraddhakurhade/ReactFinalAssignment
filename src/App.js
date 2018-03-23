import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import L1Form from '../src/L1Form';
import GKForm from '../src/GKForm';
import Footer from '../src/components/Footer';
//import {Router, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6


export default class App extends Component  {
  render() {
    return (
   
      <div className="container">
    {/* <Router> 
        
          <Route exact path="/" component={App} />
            <Route path="../src/L1Form" component={L1Form} />
            <Route path="../src/L1Form" component={GKForm} />
       
    </Router>*/}
        <div className="columns">
          <div className="col-md-9 centered">
            <L1Form />
          </div>
        </div>
      </div>  
    );
  }
}

//export default App;
