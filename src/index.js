import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from './config/materialConfig';
import {initialState,reducer} from './Reducer/reducer';
import {ProductProvider} from './globalContext/ProductsContext';
import {AuthState} from './globalContext/AuthContext'

ReactDOM.render(
  <>
  <CssBaseline />
  <AuthState >
  <ProductProvider initialState={initialState} reducer={reducer}>
  <App />
  </ProductProvider>
  </AuthState>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
