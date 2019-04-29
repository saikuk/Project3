import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class signup extends Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
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
      <div id="Signup">
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" >
          <div className="text-center">
            <form action="/signup" method ="post">
              <div><h1>Sign-Up</h1></div>
              <hr/>
              <input 
                name ='firstName'
                type ="text"
                value = {this.state.firstName} 
                onChange = {this.onChange}
                placeholder ="First Name"
                required
              />
              <br/>
              <br/>
              <input 
                name = 'lastName'
                type ="text"
                value = {this.state.lastName} 
                onChange = {this.onChange} 
                placeholder ="Last Name"
                required
              />
              <br/>
              <br/>
              <input 
                name = 'email'
                type ="email"
                value = {this.state.email} 
                onChange = {this.onChange} 
                placeholder ="Email"
                required
              />
              <br/>
              <br/>
              <input 
                name = 'password'
                type ="password"
                value = {this.state.password} 
                onChange = {this.onChange} 
                placeholder ="Password"
                required
              />
              <br/>
              <br/>
              <input 
              type="submit" 
              value="Log In" 
              className="btn btn-danger"
              />
              <br/>
              <br/> 
            </form>
          </div>
        </div>
      </div>   
    );
  }
}
  export default signup;