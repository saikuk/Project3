import React, { Component } from 'react';


import { OrderListItem, OrderList } from "../components/OrderList";



function order(props) {
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

            <button >Submit</button>

          </div>
        </div>



      </div>
    );
  }

export default order;
