import React from "react";
import PlantCard from "./PlantCard";



function PlantList({plants}) {

  const plantsToDisplay = plants.map(plant =>
    <PlantCard
    key={plant.id}
    plant={plant.name}
    image={plant.image}
    price={plant.price}
    /> 
    )




  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
