import React, { Component } from 'react'
import MainInfo from './components/MainInfo'
import Data from './Data'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import WidgetsIcon from '@material-ui/icons/Widgets';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';




export default class App extends Component {
  constructor() {
    super();
    this.state = {
      info: Data
    };
  }


  render() {
    const info = this.state.info;
    return (
        <div className="section">


        
            <div className="col sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="#">
                <LocalShippingIcon/>
           <h3>My Moves</h3>
                  
                  <span className="sr-only">(current)</span></a></li>
                <li><a href="#">
                <PersonIcon/><h3>My Profile</h3>
                </a></li>
                <li><a href="#">
                <WidgetsIcon/>
           <h3>Get Quoto</h3>
           </a></li>
                <li><a href="#">
                <ExitToAppIcon/><h3>Logout</h3>
                </a></li>
              </ul>
            </div>
           

          <div className="products-center">
      


     
       {     
            info.map(ele=>(<MainInfo 
              key={ele.estimate_id}
              estimate_id={ele.estimate_id}
              user_id={ele.user_id}
              moving_from={ele.moving_from}
              moving_to={ele.moving_to}
              moving_on={ele.moving_on}
              distance={ele.distance}
              property_size={ele.property_size}
              old_floor_no= {ele.old_floor_no}
              new_floor_no= {ele.new_floor_no}
              old_elevator_availability={ele.old_elevator_availability}
              new_elevator_availability={ele.new_elevator_availability}
              old_parking_distance={ele.old_parking_distance}
              new_parking_distance={ele.new_parking_distance}
              unpacking_service={ele.unpacking_service}
              packing_service={ele.packing_service}
              items={ele.items}
              total_items={ele.total_items}
              status={ele.status}
              order_date={ele.order_date}
              date_created={ele.date_created}
              custom_status= {ele.custom_status}
              old_house_additional_info={ele.old_house_additional_info}
              new_house_additional_info={ele.new_house_additional_info}
              date_of_complete={ele.date_of_complete}
              date_of_cancel={ele.date_of_cancel}
              estimate_status={ele.estimate_status}
              estimate_comparison={ele.estimate_comparison}
              estimateAmount={ele.estimateAmount}
              successfulPayments={ele.successfulPayments}
              order_reviewed={ele.order_reviewed}
              call_back={ele.call_back}
              move_date_flexible={ele.move_date_flexible}


            />))
          }
       </div>
       </div>
    

    
    )
  }

//   componentDidMount=()=>{
                    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
                    //     const url = "https://boxigo.in/sampleAPI_v1.php"; 
                    //     fetch(proxyurl + url) 
                    //     .then(response => response.json())
                    //     .then(contents => (
                    //       this.setState({
                    //         info : [...contents]
                    //       })

                    //     ))
                    //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

                    //  }

                  }
