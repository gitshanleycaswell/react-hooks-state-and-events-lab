import React from "react";
import { useState } from "react"

function Item({ name, category }) {
const [emptyCart, setCart] = useState(true)
function handleClick(){
  setCart((emptyCart) => !emptyCart)
}

  const itemClass = emptyCart ? "" : "in-cart"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{emptyCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
