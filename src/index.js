import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
//import { DateTime } from 'react-datetime-bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
