import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import MenuPage from "./pages/MenuPage";
import Checkout from "./pages/Checkout";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Delivery from './pages/Delivery'
import CarryOut from './pages/CarryOut'


 class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <body >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/carryout" component={CarryOut} />
          <Route exact path="/delivery" component={Delivery} />
          <Route component={NoMatch} />
          
        </Switch>
        <Footer />
        </body>
      </div>
    </Router>
    );
  }
}

export default App;
