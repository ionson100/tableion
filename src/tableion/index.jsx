import {Component} from "react";


const gh={
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2vw'
}
const gg={
    fontSize: '5vw',
    padding: '.5em',
    background: 'gold',
    textAlign: 'center'
}


export default class Tableion extends Component{
     constructor(props) {
         super(props);
         this.head=props.head;
         this.body=props.body;

     }
     render() {
         return (
             <div style={gh}>
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