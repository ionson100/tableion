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
         this.rows=props.rows;

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
         console.log("e",this.head)
         this.renderGridTemplateColumns(gh)
         return (
             <div style={gh}>
                 {this.renderHead()}
                 {this.renderRows()}
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
