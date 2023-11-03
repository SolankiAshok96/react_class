import React, { Component } from 'react'

export default class State extends Component {
  
     constructor(props){
         super(props);
         
         this.state = {
              change: true
         }
     }
  
  
    render() {
     return (
      <div>
         <button onClick={() => {this.setState({change :!this.state.change})}}>
             Click here
         </button>
 
       {
         this.state.change ? (
             <h1>hi my name is ashok solanki</h1>
         ):(
             <h1>hi my name is rahul solanki</h1>
         )
       }
   

      </div>
    )
  }
}
