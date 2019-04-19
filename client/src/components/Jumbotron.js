import React, { Component } from 'react';
import pizzaimg from '../images/pizza.png'

class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotron">
        <div className="jumbotron text-center bg-primary" id="jumbo">
          <h1 className="display-4">Welcome to Mickey's Pizza</h1>
          <img src={pizzaimg} alt="pizzaimg" id="icon" />

        </div>


      </div>
    );
  }
}

export default Jumbotron;
