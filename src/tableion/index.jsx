import {Component} from "react";


const gh={
    background: '#737272',
    display: 'grid',
    gridTemplateRows: 'none',
    gridGap: '.11vw'
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
             w=w+' '+e.width;
         })
         o.gridTemplateColumns=w;
         console.log("width",o.gridTemplateColumns)
     }

     renderHead(){
         return(
             this.head.map((e,i)=>{
                 return (<div key={i} className={e.className} >{e.content}</div>);
             })
         )
     }
     render() {
         console.log("e",this.head)
         this.renderGridTemplateColumns(gh)
         return (
             <div style={gh}>
                 {this.renderHead()}
                 <div className="celldef">1</div>
                 <div className="celldef">2</div>
                 <div className="cellred">3</div>
                 <div className="celldef">4</div>
                 <div className="celldef">5</div>
                 <div className="cellred">6</div>
                 <div className="celldef">7</div>
                 <div className="celldef">8</div>
                 <div className="cellred">9</div>
             </div>
         );
     }

}
 export class TemplateHead{
    constructor({content,className,width}) {
        this.content=content;
        this.className = className;
        this.width=width===undefined?'1fr':width;
    }

}
