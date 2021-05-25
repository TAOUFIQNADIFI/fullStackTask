import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main1 from './components/Main1';

ReactDOM.render(
  <React.StrictMode>
    
<Header/>
<Main1/>
<div id="main"></div> 
<Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
