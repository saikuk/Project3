import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import carryoutimg from '../images/carryout.png'

class CarryOut extends Component {
  state ={
    name: '',
    email: '',
    phone: ''
  }
  // makeRequest = e =>{
  //   e.preventDefault();
  //   console.log('something')

  //   var formData = new FormData();
  //   formData.append("name", this.state.name)
  //   formData.append("email", this.state.email)
  //   formData.append("phone", this.state.phone)

  //         fetch("/api/carryout", {
  //           method: "POST",
  //           body: formData
  //         })
  //         console.log(formData)
  //       }
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
          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="container" id="carryoutform">
            <div className ="text-center">
            <div><h3>Please complete the form for carryout</h3></div>
              <div><img src={carryoutimg} alt="pizzaimg" id="icon"/></div>
              <form action="/carryout" method ="post">
                <hr/>
                <input 
                  name ="name" 
                  type ="text" 
                  value = {this.state.name} 
                  onChange ={this.onChange} 
                  placeholder ="Name"
                />
                <br/>
                <br/>
                <input 
                  name = "email" 
                  type ="email"
                  value = {this.state.email} 
                  onChange ={this.onChange}  
                  placeholder ="Email"
                />
                <br/>
                <br/>
                <input 
                  name = "phone"
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
export default CarryOut;