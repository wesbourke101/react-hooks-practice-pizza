import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaLivesHere, setClickedInfo, clickedInfo}) {

  
const postPizzaList = pizzaLivesHere.map(pizza => {return (<Pizza key={pizza.id} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} pizza={pizza} setClickedInfo={setClickedInfo}/>)})  
  return (
    
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
         postPizzaList 
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
