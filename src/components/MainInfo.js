import React, { Component } from 'react'
import ViewDetails from './ViewDetails';
import './style.css'
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class MainInfo extends Component {
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
   
        estimate_id,
        moving_from,
        moving_to,
        moving_on,
        distance,
        property_size,
        
        total_items,
     
        move_date_flexible,
} = this.props;
const { rooms , custom } =this.props.items

        return (
            <section className="page">
            <div className="journey">
                <div>
                    <h3>From</h3>
                    <p>{moving_from}</p> 
                </div>
                <div className="text-center">
                    <ArrowForwardIcon/>
                </div>
               <div>
               <h3>To</h3>
                   <p>{moving_to}</p>
               </div>
                <div className="text-center">
                    <h3>Request</h3>
                    <p>#{estimate_id}</p>
                </div>
            </div>
          
               <div className="iconfont">


                  <div>
                  <HomeIcon/>
        <p>{property_size}</p>
                  </div>

       <div>
           
               <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-inboxes-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z"/>
</svg>
<p>{total_items}</p>
</div>
<div>
               
<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
</svg>

<p>{distance}</p>
</div>
<div>
<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-date-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
</svg>

<p>{moving_on}</p>
</div>
<div>
<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
  <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg>
<p>{move_date_flexible}</p>
</div>
<button onClick={this.toggle}>View Move Deatails</button>
<button id="btn">Quoto Awaiting</button>
               </div>
     
          {this.state.on &&(
                   <div>
                       <h2>Inventory Details</h2>
             
             {rooms.map((ele)=>(
                 <ViewDetails
                 key={ele.id}
                 
                
                 roomName={ele.roomName}
                
                 categories={ele.categories}
                 
                 
                 
                 />
             ))}
                   </div>
          )}
            </section>
        )
    }
}
