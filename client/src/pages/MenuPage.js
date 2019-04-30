import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Menu from '../components/menu';
import Order from '../components/order';
import "../App.css"
import API from "../utils/API";

class MenuPage extends Component {
    state = {
        Order: []
    }
    componentDidMount() {
        this.getOrder();
        // console.log("getevents triggerred here");
    }

    getOrder = () => {
        API.getAllOrder()
            .then(({ data }) => {
                this.setState({ Order: data });
            })
            .catch(err => console.log(err));
    };

    updateOrder = (price, item) => {
        this.setState({
            Order: [...this.state.Order, {
                price,
                item
            }]
        },() => this.getOrder())
        
    }

    updateRemoveOrder = () => {
        this.getOrder()
    }


    render() {
        return (
            <div>
                <div className="landing">

                    {/* <Jumbotron /> */}

                    <div className="row">
                        <div className="col-9">
                            <Menu updateOrder={this.updateOrder} />
                        </div>
                        <div className="col-3">
                            <Order order={this.state.Order} updateRemoveOrder={this.updateRemoveOrder}/>
                        </div>
                    </div>
                    {/*<Checkout /> */}


                </div>
            </div>

        );
    }
};



export default MenuPage;