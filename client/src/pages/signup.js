import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

class signup extends Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  formSubmit(){
    axios.post('/signup', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }).then(data =>{
        this.props.history.push({
          pathname: '/login',
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
      <div id="Signup">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" >
          <div className="text-center">
            <div>
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
              <button class="btn btn-danger" onClick={this.formSubmit.bind(this)}>Log-In</button>
              <br/>
              <br/> 
            </div>
          </div>
        </div>
      </div>   
    );
  }
}
  export default signup;