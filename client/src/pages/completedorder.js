import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Order from '../components/orderComplete';
import "../App.css"
import API from "../utils/API";

class Completedorder extends Component {


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
        }, () => this.getOrder())

    }


    updateRemoveOrder = () => {
        this.getOrder()
    }



    render() {

        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const phone = localStorage.getItem("phone");
        const address = localStorage.getItem("address");


        return (
            address === null ?
            <div className="Completedorder">
                <br />
                <br />
                <br />
                <div className="text-center">
                    <div className="container" id="completedorderpage">
                        <h2> Please review the order and submit.</h2>
                        <hr />
                        <h2 >Your information</h2>
                        <hr />
                        <p>Name: {name}</p>
                        <p>E-mail: {email} </p>
                        <p>Phone: {phone} </p> 
                        <hr />
                        <h2 >Your order</h2>

                        <Order order={this.state.Order} updateRemoveOrder={this.updateRemoveOrder} />


                        <button className="btn btn-danger">Submit order</button>
                    </div>

                </div>
            </div>
        :
        <div className="Completedorder">
                <br />
                <br />
                <br />
                <div className="text-center">
                    <div className="container" id="completedorderpage">
                        <h2> Please review the order and submit.</h2>
                        <hr />
                        <h2 >Your information</h2>
                        <hr />
                        <p>Name: {name}</p>
                        <p>Address: {address} </p>
                        <p>E-mail: {email} </p>
                        <p>Phone: {phone} </p> 
                        <hr />
                        <h2 >Your order</h2>

                        <Order order={this.state.Order} updateRemoveOrder={this.updateRemoveOrder} />


                        <button className="btn btn-danger">Submit order</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Completedorder;