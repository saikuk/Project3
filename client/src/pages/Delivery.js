import React, { Component } from 'react';
import deliveryimg from '../images/delivery.png'
import Navbar from '../components/Navbar';

class Delivery extends Component {
    state ={
      name: '',
      address: '',
      email: '',
      phone: ''
    }
    // makeRequest = e =>{
    //   e.preventDefault();

    //   var formData = new FormData();
    //   formData.append("name", this.state.name)
    //   formData.append("address", this.state.address)
    //   formData.append("email", this.state.email)
    //   formData.append("phone", this.state.phone)

    //   fetch('/delivery', {
    //       method: "POST",
    //       body: formData
    //   })
    //   console.log(formData)
    // }

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
          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="container" id="deliveryform">
            <div className="text-center">
              <div><h3>Please complete the form for home delivery </h3></div>
              <div><img src={deliveryimg} alt="pizzaimg" id="icon"/></div>
              {/* <form onSubmit={this.makeRequest}> */}
              <form action="/delivery" method="post">
                <input 
                  name = 'name' 
                  type ='text' 
                  value = {this.state.name}  
                  onChange ={this.onChange} 
                  placeholder ='Name'
                />
                <br/>
                <br/>
                <input
                  name = 'address' 
                  type ='text'
                  value = {this.state.address} 
                  onChange ={this.onChange} 
                  placeholder ='Address'
                />
                <br/>
                <br/>
                <input 
                  name = 'email' 
                  type ='email' 
                  value = {this.state.email} 
                  onChange ={this.onChange} 
                  placeholder ='Email'
                />
                <br/>
                <br/>
                <input 
                  name = 'phone' 
                  type="tel" 
                  value = {this.state.phone} 
                  onChange ={this.onChange} 
                  placeholder="123-4567-8901"
                />
                <br/>
                <br/>
                <input 
                type="submit" 
                value="Log In" 
                className="btn btn-danger"
                />
                {/* <button className="btn btn-danger">Send data!</button> */}
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

  export default Delivery;
