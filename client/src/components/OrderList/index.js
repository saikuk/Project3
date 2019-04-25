import React from "react";
import API from "../../utils/API";

const removeOrder  = id =>{
  API.removeOrder(id)
  .then(res => this.componentDidMount())
  .catch(err => console.log(err))
}


export function OrderList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function OrderListItem({
  id,
  item,
  price
})
{
  return (
      <div className="row">

          <div className="col-10">
          <li className="list-group-item">
            <h4>{item}</h4>
            <p>Price:$  {price}</p>
            <button onClick = {() => {removeOrder(id)}}>Remove</button>
          </li>
          </div>

      </div>
      
  );
}

