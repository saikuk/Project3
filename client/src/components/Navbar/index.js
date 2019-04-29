import React, { Component } from 'react';
import "./style.css";
import pizzaimg from '../../images/pizza.png'

 class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light" id="navlist">
          <a href="/"><img className="brand-logo" alt="logo" src={pizzaimg}></img><div className="brand" id="brand-logo1">Mickey's Pizza</div> </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" id="home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu" id="menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" id="login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup" id="chkout">Signup</a>
            </li>
          </ul>   
        </nav>     
      </div>
    );
  }
}

export default Navbar;