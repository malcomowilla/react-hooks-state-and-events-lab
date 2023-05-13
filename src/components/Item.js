import React, { useState } from "react";

function Item({ name, category }) {

   const [isinCart, setisinCart] = useState(false)

function onClickHandler() {
  setisinCart(!isinCart)
}

const liClass = isinCart ? "in-cart" : ""
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button className="add" onClick={onClickHandler}>
              {isinCart ? "Remove from Cart" : "Add to Cart"}

      </button>
    </li>
  );
}

export default Item;


// const[inCart, setIncart] = useState(false)
//     const addCart = inCart? "in-cart":""

//     const onClickHandler = ()=>{
//       setIncart(!inCart)
//     }