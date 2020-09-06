import React, { Component } from 'react'
import CatInfo from './CatInfo'

export default class ViewDetails extends Component {
    state ={
        on:false
    }
    toggle=()=>{
      this.setState({
          on:!this.state.on
      })
    }
    
    
    render() {

        const {
         
            roomName,
       
            categories,
          
        } = this.props
       
       
        return (
           
            <div className="rooms">
                <p onClick={this.toggle}>{roomName}</p>
           {
               this.state.on && (
                <div className="room-info">
                {
                      categories.map(ele=>(<div>  
                         <h3>{ele.categoryID}</h3>
                         
                          <CatInfo name= {ele.itemsList} />
                     </div> ))
                  }
                  
                </div>
               )
           }
                
                 
            </div>
        )
    }
}
