import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import carryoutimg from '../images/carryout.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CarryOut extends Component {
  state ={
    name: '',
    email: '',
    phone: ''
  }
  formSubmit(){
    axios.post('/carryout', {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    }).then(data =>{
        localStorage.setItem('name', this.state.name)
        localStorage.setItem('email', this.state.email)
        localStorage.setItem('phone', this.state.phone)

        this.props.history.push({
          pathname: '/completedorder',
          state: {message: 'carryout success'}
        })
    }).catch(err =>{

    })
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
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="carryoutform">
          <div className ="text-center">
            <div><h3>Please complete the form for carryout</h3></div>
            <div><img src={carryoutimg} alt="pizzaimg" id="icon"/></div>
            <div>
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
              <button class="btn btn-danger" onClick={this.formSubmit.bind(this)}>Checkout</button>              
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CarryOut;