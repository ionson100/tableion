import React from 'react';
import ReactDOM from 'react-dom';
import App from './tableion/index';

import reportWebVitals from './reportWebVitals';
const head1=['первый','второй','третий']
ReactDOM.render(
  <React.StrictMode>
    <App head={head1} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
