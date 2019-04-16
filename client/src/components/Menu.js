import React, { Component } from 'react';
import API from "../utils/API";

class Menu extends Component {
  state = {
    Menu: []
  };
  componentDidMount() {
    this.getMenu();
    // console.log("getevents triggerred here");
  }

  getMenu = () => {
    API.getAllMenu()
      .then(({ data }) => {
        this.setState({ Menu: data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Menu">


        <div>
          <div className="container" id="menudiv">



          </div>
        </div>



      </div>
    );
  }
}

export default Menu;
