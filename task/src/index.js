import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Main3 from './components/Main3';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>

    
<Header/>
<Switch>
          <Route exact path="/main1">
            <Main1 />
          </Route>
          <Route path="/main2">
            <Main2 />
          </Route>
          <Route path="/main3">
            <Main3 />
          </Route>
        </Switch>
    </Router>
 
<Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
