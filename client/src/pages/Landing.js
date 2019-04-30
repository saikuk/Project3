import React, { Component } from "react";
import Navbar from '../components/Navbar';
import "../App.css"
import brownieimg from '../images/brownie.jpg'
import handcraftedimg from '../images/handcrafted.jpg'
import comboimg from '../images/combo.jpg'

class Landing extends Component {
    componentWillMount(){
        localStorage.removeItem('isLogged')
      }
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="Home">
                        <div className="container" id="Home">
                            <h2> Coming Soon!</h2>
                            <hr />
                            <div className="row">

                                <div className="col-sm-6" id="party">
                                    <div className="text-center">
                                        <h4>Plan your party with Mickey's Pizza!</h4>
                                        <div><img src={comboimg} alt="party" id="icon" /></div>
                                        <h5>Contact your local store for details!</h5>
                                    </div>
                                </div>

                                <div className="col-sm-6" id="dessert" id="dessert">
                                    <div className="text-center">
                                        <h4>Complete your meal with a dessert you love!</h4>
                                        <div><img src={brownieimg} alt="brownieimg" id="icon" /></div>
                                    </div>
                                </div>
                            </div>
                        <hr />
                            <div className="row">

                                <div className="col-sm-12" id="new">
                                    <div className="text-center">
                                        <h4>Handcrafted speciality pan pizzas!</h4>
                                        <div><img src={handcraftedimg} alt="panpizzaimg" id="icon" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};




export default Landing;