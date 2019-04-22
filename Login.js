import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class login extends Component {
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
          <div id="loginpg">
            <Navbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container" id="loginpage">
              <div className="text-center">
                <form onSubmit={this.handleSubmit}>
                <div><h1>Log-In</h1></div>
                  <hr/>
                  <input 
                    type ="email" 
                    placeholder ="Email"
                  />
                  <br/>
                  <br/>
                  <input 
                    type ="password" 
                    placeholder ="Password"
                  />
                  <br/>
                  <br/>
                  <button className="btn btn-danger">Log In</button>
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

