import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { OrderListItem, OrderList } from "../components/OrderList";

const totalCost = { margin: '5px'};



function order(props) {
  
  let total = 0;

  props.order.forEach(cost => { 
    total += cost.price
  });


    return (
      <div className="Order">

        <div>
          <div className="container" id="menudiv">
            <h2 >Your order</h2>  
            <OrderList>
              {props.order.map(order => { 
                return   (    

                  <OrderListItem
                    id={order._id}
                    item={order.item}
                    price={(order.price).toFixed(2)}
                    updateRemoveOrder = {props.updateRemoveOrder}
                    />

                );
              })}
            </OrderList>

            <div style={totalCost}>
            <li className="list-group-item">
            <h4>Order Total: ${(total).toFixed(2)}</h4>
            </li>
            </div>
            <div className="text-center">
            <Link to="/guest">

           <button className="btn btn-danger"  >Check-out</button>
           </Link>
           </div>

          </div>
        </div>



      </div>
    );
  }

export default order;
