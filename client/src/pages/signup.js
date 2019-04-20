import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class signup extends Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  makeRequest = e =>{
    e.preventDefault();
    // console.log('something')
    var formData = new FormData();
    formData.append("firstName", this.state.firstName)
    formData.append("lastName", this.state.lastName)
    formData.append("email", this.state.email)
    formData.append("password", this.state.password)

    fetch("/api/signup", {
      method: "POST",
      body: formData
  })
      console.log(formData)
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
        <div id="checkoutpage">
        <Navbar />
        <div className="container" >

        <form onSubmit={this.makeRequest}>
          <div><h1>Sign-Up</h1></div>
          <input 
            name ='firstName'
            type ="text"
            value = {this.state.firstName} 
            onChange = {this.onChange}
            placeholder ="First Name"
          />
          <br />
          <input 
            name = 'lastName'
            type ="text"
            value = {this.state.lastName} 
            onChange = {this.onChange} 
            placeholder ="Last Name"
          />
          <br />
          <input 
            name = 'email'
            type ="email"
            value = {this.state.email} 
            onChange = {this.onChange} 
            placeholder ="Email"
          />
          <br />
          <input 
            name = 'password'
            type ="password"
            value = {this.state.password} 
            onChange = {this.onChange} 
            placeholder ="Password"
          />
          <br />
          <button>Sign Up</button> 
        </form>
        </div>
        </div>
      );
    }
}
  export default signup;