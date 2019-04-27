import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class signup extends Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  // makeRequest = e =>{
  //   e.preventDefault();
  //   // console.log('something')
  //   var formData = new FormData();
  //   formData.append("firstName", this.state.firstName)
  //   formData.append("lastName", this.state.lastName)
  //   formData.append("email", this.state.email)
  //   formData.append("password", this.state.password)

  //   fetch("/signup", {
  //     method: "POST",
  //     body: formData
  // })
  //     console.log(formData)
  //   }
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
              {/* <form onSubmit={this.makeRequest}> */}
              <form action="/signup" method ="post">
                <div><h1>Sign-Up</h1></div>
                <hr/>
                <input 
                  name ='firstName'
                  type ="text"
                  value = {this.state.firstName} 
                  onChange = {this.onChange}
                  placeholder ="First Name"
                />
                <br/>
                <br/>
                <input 
                  name = 'lastName'
                  type ="text"
                  value = {this.state.lastName} 
                  onChange = {this.onChange} 
                  placeholder ="Last Name"
                />
                <br/>
                <br/>
                <input 
                  name = 'email'
                  type ="email"
                  value = {this.state.email} 
                  onChange = {this.onChange} 
                  placeholder ="Email"
                />
                <br/>
                <br/>
                <input 
                  name = 'password'
                  type ="password"
                  value = {this.state.password} 
                  onChange = {this.onChange} 
                  placeholder ="Password"
                />
                <br/>
                <br/>
                <input 
                type="submit" 
                value="Log In" 
                className="btn btn-danger"
                />
                {/* <button className="btn btn-danger">Sign Up</button> */}
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