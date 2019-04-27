import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { debug } from 'util';

class login extends Component {
  render() {
    return (
      <div id="loginpg">
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container" id="loginpage">
          <div className="text-center">
            <form action="/login" method="post">
              <div><h1>Log-In</h1></div>
              <hr/>
              <input 
                type="text" 
                name="email"
                placeholder="Email"
              />
              <br/>
              <br/>
              <input 
                type="password" 
                name="password"
                placeholder="Password"
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

export default login;

