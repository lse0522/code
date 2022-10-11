import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

// fonts
import cookieBlack from './assets/fonts/CookieRun_Black.ttf'
import cookieBold from './assets/fonts/CookieRun_Bold.ttf'
import cookieRegular from './assets/fonts/CookieRun_Regular.ttf'
import Navigation from './components/Navigation';


const A = createGlobalStyle`
  ${reset}
  :root {
    --vh: 100%;
  }
  
  @font-face {
        font-family: 'cookieBlack';
        src: url(${cookieBlack}) format('truetype');
  }
  @font-face {
        font-family: 'cookieBold';
        src: url(${cookieBold}) format('truetype');
  }
  @font-face {
        font-family: 'cookieRegular';
        src: url(${cookieRegular}) format('truetype');
  }
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

