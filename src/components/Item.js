import React, { useState } from "react";

function Item({ name, category }) {

    const[inCart, setIncart] = useState(false)
    const addCart = inCart? "in-cart":""

    const onClickHandler = ()=>{
      setIncart(!inCart)
    }



  return (
    <li className="">
      <span>{name}</span>
      <span className={addCart}>{category}</span>
      <button className="add" onClick={onClickHandler}>Add to Cart</button>
    </li>
  );
}

export default Item;
