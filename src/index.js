import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const A = createGlobalStyle`
  ${reset}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <A />
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

