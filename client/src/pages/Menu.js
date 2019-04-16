import React, { Component } from 'react';
import pizzatype from "../components/pizzatype";
const img = require.context('../images', true);

class Menu extends Component {
  render() {
    console.log(pizzatype);
    return (
      <div className="Menu">


        <div>
          <div className="container" id="menudiv">
            <h2>Start ordering from the menu! </h2>
            <hr />


            <div className="pizzasection">
              {pizzatype.map(data => {
                const { id, name, image, price } = data;
                const imgStyle = {
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                  width: "200px"
                }
                return (
                  <div className = "pepproni">
                    
                    <div style={imgStyle}></div>
                    <p>{name}</p>
                    <p>{price}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>



      </div>
    );
  }
}

export default Menu;
