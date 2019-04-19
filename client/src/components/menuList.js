import React, { Component } from 'react';
import API from "../utils/API";

class menuList extends Component {
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
          <h2 >This is the Menu</h2>
          {this.state.Menu.map(menu => {
            return (
               <div> 
               <ul>
                 <li>
                 <img src={menu.image}></img>
                 </li>
                <li>
                  {menu.itemName}
                </li>
                <li>
                  {menu.itemType}
               </li>
               <li>
                  {menu.price}
               </li>
               </ul>

               </div>
              )})
              }
          </div>
        </div>



      </div>
    );
  }
}

export default menuList;
