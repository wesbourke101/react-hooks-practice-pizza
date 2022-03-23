import React from "react";

function Pizza({pizza, id, topping, size, vegetarian, setClickedInfo}) {

  return (
    
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={() => setClickedInfo(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
