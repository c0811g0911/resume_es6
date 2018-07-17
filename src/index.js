import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';
import App from './components/App';
 // load resume file
 const json = require('./resume.json');

ReactDOM.render(<App jsonObj={json}/>, document.getElementById('root'));
