import React, { Component } from 'react';
import deliveryimg from '../images/delivery.png'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Delivery extends Component {
  state ={
    name: '',
    address: '',
    email: '',
    phone: ''
  }
  formSubmit(){
    axios.post('/delivery', {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone
    }).then(data =>{
        this.props.history.push({
          pathname: '/completedorder',
          state: {message: 'is signed up'}
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
      <div id ="deliver">
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="deliveryform">
          <div className="text-center">
            <div><h3>Please complete the form for home delivery </h3></div>
            <div><img src={deliveryimg} alt="pizzaimg" id="icon"/></div>
            <div>
              <input 
                name = 'name' 
                type ='text' 
                value = {this.state.name}  
                onChange ={this.onChange} 
                placeholder ='Name'
                required
              />
              <br/>
              <br/>
              <input
                name = 'address' 
                type ='text'
                value = {this.state.address} 
                onChange ={this.onChange} 
                placeholder ='Address'
                required
              />
              <br/>
              <br/>
              <input 
                name = 'email' 
                type ='email' 
                value = {this.state.email} 
                onChange ={this.onChange} 
                placeholder ='Email'
                required
              />
              <br/>
              <br/>
              <input 
                name = 'phone' 
                type="tel" 
                value = {this.state.phone} 
                onChange ={this.onChange} 
                placeholder="123-4567-8901"
                required
              />
              <br/>
              <br/>
              <button onClick={this.formSubmit.bind(this)}>Log-In</button>
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


export default Delivery;
