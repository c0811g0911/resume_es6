import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
 // load resume file
 const json = require('./resume.json');

ReactDOM.render(<App jsonObj={json}/>, document.getElementById('root'));
