import React, { useState } from "react";

function PlantCard( { plant } ) {
  const [isSoldOut, setSoldOut] = useState(false)

  function button(){
    setSoldOut (!isSoldOut)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>{plant.price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={button}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
