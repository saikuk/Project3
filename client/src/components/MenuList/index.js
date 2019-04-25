import React from "react";
import API from "../../utils/API";
// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item

const addOrder = (price, item, updateOrder, e) => {
  API.addOrder(price, item)
  .then (user => { updateOrder(user.data.item, user.data.price)
  })
}

export function MenuList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function MenuListItem({
  image,
  itemName,
  itemType,
  price,
  updateOrder

})
{
  return (
      <div className="row">
          <div className="col-2">
            <img src={image}></img>
          </div>
          <div className="col-10">
          <li className="list-group-item">
            <h4>{itemName}</h4>
            <p>{itemType}</p>
            <p>Price:$  {price}</p>
            <button onClick={addOrder.bind( this, price, itemName, updateOrder)} >Add to order</button>
          </li>
          </div>

      </div>
  );
}

