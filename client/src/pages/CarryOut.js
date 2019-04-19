import React, { Component } from 'react';
class CarryOut extends Component {
  state ={
    name: '',
    email: '',
    phone: ''
  }
  makeRequest = e =>{
    e.preventDefault();
    console.log('something')

    var formData = new FormData();
    formData.append("name", this.state.name)
    formData.append("email", this.state.email)
    formData.append("phone", this.state.phone)

          fetch("/api/carryout", {
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
        <form onSubmit={this.handleSubmit}>
            <input 
              name ="name" 
              type ="text" 
              value = {this.state.name} 
              onChange ={this.onChange} 
              placeholder ="Name"
            />
             <br />
             <input 
              name = "email" 
              type ="email"
              value = {this.state.email} 
              onChange ={this.onChange}  
              placeholder ="Email"
              />
             <br />
             <input 
             name = "phone"
              type="tel" 
              value = {this.state.phone} 
              onChange ={this.onChange} 
              placeholder="123-4567-8901"
             />
             <br />
          <button>Send data!</button>
        </form>
      );
    }
  }
export default CarryOut;