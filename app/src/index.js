import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route , Link , Switch , BrowserRouter , browserHistory, IndexRoute ,
  HashRouter , Router} from 'react-router-dom';


  ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
      < App />
  </HashRouter>
      ,document.getElementById('root'));

reportWebVitals();
