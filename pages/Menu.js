import React, { Component } from "react";
import Navbar from '../components/Navbar';
import MenuList from '../components/menuList';
import "../App.css"

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="landing">

                    <Navbar />
                    {/* <Jumbotron /> */}
                    <MenuList />
                    {/*<Checkout /> */}


                </div>
            </div>

        );
    }
};



export default Menu;