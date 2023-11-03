import React, { Component } from 'react'
import "./Tour.css"

export default class Tours extends Component {
  
   constructor(props){
      super()

      this.state = {
         Tours: [],
         DataisLoaded: false,
      }
   }
     
   componentDidMount(){
        fetch('https://course-api.com/react-tours-project')
        .then((res) => res.json())
        .then((data) =>{
             this.setState({
                 Tours:data,
                 DataisLoaded:true,
             })
        })
   }

   handleDelete = (id) => {
      // Filter out the tour with the given ID and update the state
      const updatedTours = this.state.Tours.filter((tour) => tour.id !== id);
      this.setState({
        Tours: updatedTours,
      });
    };


render(){
 
    const {DataisLoaded , Tours} = this.state
      console.log(Tours)
      
    if(!DataisLoaded){
         return (
            <div>
                 <h1>Please wait some time...</h1>
            </div>
         )
    }

    if (Tours.length == 0) {
      return (
        <div className='title'>
          <h2>No tours left</h2>
          <button onClick={() => this.componentDidMount()} className='btn'>Refresh Tours </button>
        </div>
      )
    }


      return (
        <div className='tourr'>
           {Tours.map((tour) =>(
              <div key={tour.id} className='single-tour'>
                <img src={tour.image} alt={tour.name}/>
                 <div className='footer'>
                  <div className='tour-info'>
                  <h4>{tour.name}</h4>
                   <h4 className='tour-price'>${tour.price}</h4>
                    
                  </div>
                  <p>{tour.info}</p>
                  <button onClick={() => this.handleDelete(tour.id)}>Delete</button>
         
                 </div>
              </div>
           ))}
        </div>
    )
  }
}
