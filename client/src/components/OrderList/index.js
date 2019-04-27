import React from "react";
import API from "../../utils/API";

const removeOrder  = (id, updateRemoveOrder) =>{
  API.removeOrder(id)
  .then ( res=> {updateRemoveOrder()})
}

const orderList ={margin:'5px'
};


export function OrderList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function OrderListItem({
  id,
  item,
  price,
  updateRemoveOrder
})

{
  
  return (
      <div className="row">

          <div className="col-12">
          <li className="list-group-item" style={orderList}>
            <h4>{item}</h4>
            <p>Price:$  {price}</p>
            <button onClick = {() => removeOrder(id,updateRemoveOrder)} >Remove</button>
          </li>
          </div>

      </div>
      
  );
}

