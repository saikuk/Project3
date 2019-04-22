import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Menu from '../components/menu';
import "../App.css"

class MenuPage extends Component {
    render() {
        return (
            <div>
                <div className="landing">

                    <Navbar />
                    {/* <Jumbotron /> */}
                    <Menu />
                    {/*<Checkout /> */}


                </div>
            </div>

        );
    }
};



export default MenuPage;