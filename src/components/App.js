import React, {useEffect, useState} from "react";
//import { useState } from "react/cjs/react.production.min";
//import { useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaLivesHere, setPizzaList] = useState([])
  const [clickedInfo, setClickedInfo] = useState([])
  //console.log(clickedInfo)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then((data) => data.json())
    .then((pizzaData) => setPizzaList(pizzaData))
  },[])
  return (
    <>
      <Header />
      <PizzaForm clickedInfo={clickedInfo}/>
      <PizzaList pizzaLivesHere={pizzaLivesHere} setClickedInfo={setClickedInfo} clickedInfo={clickedInfo}/>
    </>
  );
}

export default App;
