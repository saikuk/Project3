import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import carryoutimg from '../images/carryout.png';
import { Link } from 'react-router-dom';

class CarryOut extends Component {
  state ={
    name: '',
    email: '',
    phone: ''
  }

  onChange = e =>{
    const value = e.target.value;
    const nameAttr = e.target.name;
    this.setState({
      [nameAttr]: value
    });
  }
  
  render() {
    return (
      <div id ="CarryOut">
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="carryoutform">
          <div className ="text-center">
            <div><h3>Please complete the form for carryout</h3></div>
            <div><img src={carryoutimg} alt="pizzaimg" id="icon"/></div>
            <form action="/carryout" method ="post">
              <hr/>
              <input 
                name ="name" 
                type ="text" 
                value = {this.state.name} 
                onChange ={this.onChange} 
                placeholder ="Name"
                required
              />
              <br/>
              <br/>
              <input 
                name = "email" 
                type ="email"
                value = {this.state.email} 
                onChange ={this.onChange}  
                placeholder ="Email"
                required
              />
              <br/>
              <br/>
              <input 
                name = "phone"
                type="tel" 
                value = {this.state.phone} 
                onChange ={this.onChange} 
                placeholder="123-4567-8901"
                required
              />
              <br/>
              <br/>
              <input 
              type="submit" 
              value="Check Out" 
              className="btn btn-danger"
              />
              <br/>
              <br/>
              <br/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CarryOut;