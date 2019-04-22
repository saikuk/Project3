import React, { Component } from 'react';
import API from "../utils/API";
import { MenuListItem, MenuList } from "../components/MenuList";

class menu extends Component {
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
            <h1>Pizza</h1>
            <MenuList>
              {this.state.Menu.map(menu => { 
              
                return   (  
                  menu.itemType === 'Pizza' ?

                  <MenuListItem
                    image={menu.image}
                    itemName={menu.itemName}
                    price={(menu.price).toFixed(2)}
                    />:
                  false
                );
              })}
            </MenuList>
            <h1>Pasta</h1>
            <MenuList>
              {this.state.Menu.map(menu => { 
              
                return   (  
                  menu.itemType === 'Pasta' ?

                  <MenuListItem
                    image={menu.image}
                    itemName={menu.itemName}
                    price={(menu.price).toFixed(2)}
                    />:
                  false
                );
              })}
            </MenuList>
            <h1>Drinks</h1>
            <MenuList>
              {this.state.Menu.map(menu => { 
              
                return   (  
                  menu.itemType === 'Drinks' ?

                  <MenuListItem
                    image={menu.image}
                    itemName={menu.itemName}
                    price={(menu.price).toFixed(2)}
                    />:
                  false
                );
              })}
            </MenuList>
            
          
          </div>
        </div>



      </div>
    );
  }
}

export default menu;
