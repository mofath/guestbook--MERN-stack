import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './_store/store'
import './index.css';


const app = <BrowserRouter>
  <Provider store={store} >
    <App />
  </Provider>
</BrowserRouter>;


ReactDOM.render(app, document.getElementById('root'));
