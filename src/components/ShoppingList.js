import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {
  const [selectedCategory, setFilter] = useState("Filter by category")
  const catToDisplay = items.filter((item) =>{
    if(selectedCategory === "Filter by category"){
      return true;
    } else {
      return item.category === selectedCategory
    }
  })

  function handleFilterChange(event){
    setFilter(event.target.value)
  }
  const itemList = catToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
