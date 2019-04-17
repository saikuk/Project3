import React, { Component } from 'react';
class CarryOut extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('/api/carryOut', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type ="text" placeholder ="Name"/>
             <br />
             <input type ="email" placeholder ="Email"/>
             <br />
             <input type="tel" placeholder="123-4567-8901"/>
             <br />
          <button>Send data!</button>
        </form>
      );
    }
  }
  export default CarryOut;