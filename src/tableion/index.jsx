import {Component} from "react";


const gh={
    background: '#737272',
    display: 'grid',
    gridTemplateRows: 'none',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '.11vw'
}
const gg={
    fontSize: '1vw',
    padding: '.1em',
    background: '#f2ebeb',
    textAlign: 'center'
}
const hh={
    fontSize: '1vw',
    padding: '.1em',
    background: '#ccb6b6',
    textAlign: 'center'
}


export default class Tableion extends Component{
     constructor(props) {
         super(props);
         this.head=props.head;
         this.body=props.body;

     }

     renderGridTemplateColumns(o){
         let w='';
         this.head.map((e,i)=>{
             w=w+' '+e.Width;
         })
         o.gridTemplateColumns=w;
         console.log("width",o.gridTemplateColumns)
     }

     renderHead(){
         return(
             this.head.map((e,i)=>{
                 return (<div key={i} style={e.getStyleObject()}>{e.content}</div>);
             })
         )
     }
     render() {
         console.log("e",this.head)
         this.renderGridTemplateColumns(gh)
         return (
             <div style={gh}>
                 {this.renderHead()}
                 <div style={gg}>1</div>
                 <div style={gg}>2</div>
                 <div style={gg}>3</div>
                 <div style={gg}>4</div>
                 <div style={gg}>5</div>
                 <div style={gg}>6</div>
                 <div style={gg}>7</div>
                 <div style={gg}>8</div>
                 <div style={gg}>9</div>
             </div>
         );
     }

}
 export class TemplateHead{
    constructor(content) {
        this.content=content;
        this.textAlign='center';
        this.background= '#ccb6b6';
        this. padding= '.1em';
        this.fontSize= '1vw';
        this.width='1fr';
    }
    getStyleObject(){
        return {

            fontSize: this.fontSize,
            padding: this.padding,
            background: this.background,
            textAlign: this.textAlign
        }
    }
    get Width(){
        return this.width;
    }
}
