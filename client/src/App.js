import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pizzaimg from './images/pizza.png'
import carryoutimg from './images/carryout.png'
import deliveryimg from './images/delivery.png'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Menu from './components/Menu'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

 class App extends Component {
  render() {
    return (
      <div className="App">

<Jumbotron/>
    
    <br/>


<Navbar/>
<br/>

<Menu/>
    <br/>


<Checkout/>

<br/>

<Footer/>



      </div>
    );
  }
}

export default App;
