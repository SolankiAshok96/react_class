import React, { Component } from 'react'

export default class Basic extends Component {
  
    constructor(props){
         super(props);
           
         this.state = {
             count :0
           }

            
        //    this.increment = this.increment.bind(this)
        //    this.decrement = this.decrement.bind(this)
    }
      
    //   increment(){
       //        this.setState({count:this.state.count + 1});
        //  }     
      
    //     decrement(){
    //         this.setState({count:this.state.count - 1});

    //     } 

            increment = () =>{
              this.setState({count:this.state.count +1})
            }

            reset = () =>{
              this.setState({count:0})
            }

    render() {
    return (
        <div>
             <h2>{this.state.count}</h2>
             <button onClick={this.increment}>increment</button>
             <button onClick={this.reset}>decrement</button>
              <h1>hello i am {this.props.sweet}</h1>
        </div>
    )
  }
}
