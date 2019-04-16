import React, { Component } from 'react';
import './App.css';
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
