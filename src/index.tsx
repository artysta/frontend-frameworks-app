import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Reset } from "styled-reset";
import { TopNav } from './components/TopNav/TopNav';
import { MainWrapper } from './components/MainWrapper/MainWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <TopNav />
    <MainWrapper />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
