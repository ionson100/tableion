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



export default class Tableion extends Component{
     constructor(props) {
         super(props);
         this.head=props.head;
         this.rows=props.rows;

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
     renderRows(){
         let ii=0;
         const res=[]
         Array.from(this.rows).map((e)=>{
             const tempRow=e.getArrayTemplateRow();
             tempRow.map((r)=>{
                 ii++;
                 console.log("div",r.content)
                 res.push(<div key={ii} style={r.getStyleObject()}>{r.content}</div>);

             })

         })
         return (res);
     }
     render() {
         this.renderGridTemplateColumns(gh)
         return (
             <div style={gh}>
                 {this.renderHead()}
                 {this.renderRows()}
                 {/*<div style={gg}>1</div>*/}
                 {/*<div style={gg}>2</div>*/}
                 {/*<div style={gg}>3</div>*/}
                 {/*<div style={gg}>4</div>*/}
                 {/*<div style={gg}>5</div>*/}
                 {/*<div style={gg}>6</div>*/}
                 {/*<div style={gg}>7</div>*/}
                 {/*<div style={gg}>8</div>*/}
                 {/*<div style={gg}>9</div>*/}
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

export class TemplateRow{
    constructor(content,uuid) {
        this.content=content;
        this.uuid=uuid;
        this.textAlign='center';
        this.background= '#e7dede';
        this. padding= '.1em';
        this.fontSize= '1vw';
    }
    getStyleObject(){
        return {

            fontSize: this.fontSize,
            padding: this.padding,
            background: this.background,
            textAlign: this.textAlign
        }
    }

}
