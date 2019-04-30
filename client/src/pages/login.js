import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';


class login extends Component {
  state= {
    email: '',
    password: '',
    isLogged: false
  }
  formSubmit(){
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    }).then(data =>{
        this.setState({
          isLogged: true
        })
        localStorage.setItem('isLogged', 'true')
        this.props.history.push({
          pathname: '/completedorder',
          state: {message: 'is logged in'}
        })
    }).catch(err =>{
      alert('Incorrect Email or Password')
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
      <div id="loginpg">

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="loginpage">
          <div className="text-center">
            <div>
              <div><h1>Log-In</h1></div>
              <hr/>
              <input 
                onChange={this.onChange.bind(this)}
                value = {this.state.email} 
                type="text" 
                name="email"
                placeholder="Email"
              />
              <br/>
              <br/>
              <input 
                onChange={this.onChange.bind(this)}
                value = {this.state.password} 
                type="password" 
                name="password"
                placeholder="Password"
              />
              <br/>
              <br/>
              <button onClick={this.formSubmit.bind(this)}>Log-In</button>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;

