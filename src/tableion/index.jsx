import {Component} from "react";

export default class Tableion extends Component{
     constructor(props) {
         super(props);
         this.head=props.head;
         this.body=props.body;

     }
     render() {
         return(<h1>dis-di udusidu {this.body} == {this.head}</h1>);
     }

}