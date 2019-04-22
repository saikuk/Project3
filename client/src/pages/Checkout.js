import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import carryoutimg from '../images/carryout.png'
import deliveryimg from '../images/delivery.png'

 class Checkout extends Component {
  render() {
    return (

      <div className="Checkout">
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="checkoutpage">
          <h2> Please choose type of order.</h2>
          <hr/>
          <div className="row">
            <div className="col-sm-6" id="carryout">
              <a className="carryout" href="/CarryOut" id="carryout">Carry-Out</a>
              <div><img src={carryoutimg} alt="pizzaimg" id="icon"/></div>
            </div>

            <div className="col-sm-6" id="homedelivery">
              <a className="homedelivery" href="/Delivery" id="homedelivery">Home-Delivery</a>
              <div><img src={deliveryimg} alt="pizzaimg" id="icon"/></div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
