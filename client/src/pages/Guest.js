import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import lock from '../images/lock.png'
import unlocked from '../images/unlocked.png'

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
          <h2> Log In / Sign Up to recieve points on your order or continue as a guest.</h2>
          <hr/>
          <div className="row">
          
            <div className="col-sm-4" id="carryout">
              <a className="carryout" href="/login" id="carryout">Login</a>
              <div><img src={unlocked} alt="pizzaimg" id="icon"/></div>
            </div>

            <div className="col-sm-4" id="homedelivery">
              <a className="homedelivery" href="/signup" id="homedelivery">Sign-Up</a>
              <div><img src={lock} alt="pizzaimg" id="icon"/></div>

            </div>
            <div className="col-sm-4" id="carryout">
              <a className="carryout" href="/checkout" id="carryout">Guest Checkout</a>
              <div><img src={unlocked} alt="pizzaimg" id="icon"/></div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;