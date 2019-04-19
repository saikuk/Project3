import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class signup extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('/api/delivery', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <div id="checkoutpage">
        <Navbar />
        <div className="container" >
        <form onSubmit={this.handleSubmit}>
          <div><h1>Sign-Up</h1></div>
          <input type ="text" placeholder ="First Name"/>
          <br />
          <input type ="text" placeholder ="Last Name"/>
          <br />
          <input type ="email" placeholder ="Email"/>
          <br />
          <input type ="password" placeholder ="Password"/>
          <br />
          <button>Sign Up</button> 
        </form>
        </div>
        </div>
      );
    }
  }
  export default signup;