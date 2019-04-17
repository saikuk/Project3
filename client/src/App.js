import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import pizzaimg from './images/pizza.png'
// import carryoutimg from './images/carryout.png'
// import deliveryimg from './images/delivery.png'
// import brownieimg from './images/brownie.jpg'
// import handcraftedimg from './images/handcrafted.jpg'
// import comboimg from './images/combo.jpg'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import NoMatch from './pages/NoMatch'
import Delivery from './pages/Delivery'
import CarryOut from './pages/CarryOut'
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <Jumbotron />


          <Navbar />
          <br />

          <div className="head-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/carryout" component={CarryOut} />
              <Route exact path="/delivery" component={Delivery} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <br/>

          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
