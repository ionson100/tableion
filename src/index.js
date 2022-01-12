import React from 'react';
import ReactDOM from 'react-dom';
import App from './tableion/index';

import reportWebVitals from './reportWebVitals';

import {TemplateHead} from "./tableion/index";
import{TemplateRow} from "./tableion/index";


const head1=['первый','второй','третий']
function content(){
    return(<div>first</div>)
}
const th=new TemplateHead(content());
th.background='#34c9c0';
th.width='.5fr';
const templatesHed=[th,new TemplateHead('second'),new TemplateHead('third')]

class MyRow{
    constructor( cell1,cell2,cell3,uuid) {
        this.cell1 = cell1;
        this.cell2 = cell2;
        this.cell3 = cell3;
        this.uuid = uuid;
    }
    getArrayTemplateRow(){
        const res=[];
        res.push(new TemplateRow(this.cell1,this.uuid))
        res.push(new TemplateRow(this.cell2,this.uuid))
        res.push(new TemplateRow(this.cell3,this.uuid))
        return res;

    }
}


const rows=[new MyRow("1","2","3",'b88105ae-ca91-4eec-b477-bec2a23450d5'),
    new MyRow("4","5","6",'ce27ee56-3d6a-4a01-85c5-6a0a9d6a4cf1'),
    new MyRow("7","8","9",'c70d0aaf-685f-43d2-b574-2100c351d41b'),
    new MyRow("10","11","12",'d2fc1f26-ac1c-45a4-ba31-9a40264119ef'),
    new MyRow("13","14","15",'1c823d36-300f-4cc5-8ff2-b31849460433')]




ReactDOM.render(
  <React.StrictMode>
    <App head={templatesHed} rows={rows} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

