import React from 'react';
//use state for changing the name
import {usestate} from 'react';


export default class Props_class extends React.Component{

   constructor(){
       super();
       this.state={name:"Props_class Component"}
   }
   render(){
    return(
       <div>
          <h3>Hi, {this.state.name}</h3>
         <button onClick={() => this.setState({name:"Updated Name"})}>change name</button>
       </div>
    );
   }
}
