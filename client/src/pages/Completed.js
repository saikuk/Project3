import React, { Component } from "react";
import Countdown from '../components/countdown';
import "../App.css"


class Completed extends Component {

    componentWillMount(){
        localStorage.removeItem('isLogged')
        localStorage.removeItem('name')
        localStorage.removeItem('address')
        localStorage.removeItem('email')
        localStorage.removeItem('phone')
        
      }

    render() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth()<10?'0':'') + (currentDate.getMonth() +1) ;
        const day = (currentDate.getDay()<10?'0':'') + (currentDate.getDay() -2);
        const mins = ((currentDate.getMinutes() + 15)> 60?((currentDate.getMinutes() + 15) -60):(currentDate.getMinutes() + 15)) ;
        const hour = (currentDate.getHours()<10?'0':'') + (currentDate.getHours()+1);
        // const month = currentDate.getMonth();
        // const day = currentDate.getDay();

        return (
            <div>
                <div>
                    <div>
                        <div className="container" >
                            <h2> Your Order will be ready in</h2>

                            <Countdown date={`${year}-${month}-${day}T${hour}:${mins}:00`} />
                            <hr />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};




export default Completed;