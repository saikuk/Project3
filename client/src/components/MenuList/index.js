import React from "react";
// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function MenuList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function MenuListItem({
  image,
  itemName,
  itemType,
  price

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
            <button>Add to order</button>
          </li>
          </div>

      </div>
  );
}

