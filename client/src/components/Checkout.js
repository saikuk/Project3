import React, { Component } from 'react';
import carryoutimg from '../images/carryout.png'
import deliveryimg from '../images/delivery.png'

 class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">



    <div className="container" id="checkoutpage">
        <h2> Please choose type of order.</h2>

        <hr/>
        <div className="row">
            <div className="col-sm-6" id="carryout">Carry-Out
                <div><img src={carryoutimg} alt="pizzaimg" id="icon"/></div>
            </div>



            <div className="col-sm-6" id="homedelivery">Home-Delivery
                <div><img src={deliveryimg} alt="pizzaimg" id="icon"/></div>
            </div>
        </div>

        <div className="text-center">
            <button type="button" className="btn btn-danger " id="submit">Submit Order</button>
        </div>
    </div>


     
      </div>
    );
  }
}

export default Checkout;
