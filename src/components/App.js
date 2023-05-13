import React from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";
import { useState } from "react";
import Item from "./Item"

function App() {

  const[isDarkMode, setisDarkMode] = useState(false)
  function toggleDarkMode() {
    setisDarkMode(!isDarkMode)
  }

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
<Item name ={items.name} category={items.category}/>
<ShoppingList items={items}/>
    </div>
  );
}

export default App;


// replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

    // const[darkMode, setDarkMode] = useState(false)
    // const appClass = false ? "App dark" : "App light"

    // const clickHandler = ()=>{
    //   setDarkMode(!darkMode)
    // }