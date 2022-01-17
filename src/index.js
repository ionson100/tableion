import React from 'react';
import ReactDOM from 'react-dom';
import App from './tableion/index';

import reportWebVitals from './reportWebVitals';

import {TemplateHead} from "./tableion/index";

const head1=['первый','второй','третий']
function content(){
    return(<div>first</div>)
}
const th=new TemplateHead(content());
th.background='#34c9c0';
th.width='.5fr';
const templatesHed=[th,new TemplateHead('second'),new TemplateHead('third')]
ReactDOM.render(
  <React.StrictMode>
    <App head={templatesHed} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
