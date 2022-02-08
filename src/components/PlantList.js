import React from "react";
import PlantCard from "./PlantCard";




function PlantList({ plants }) {
  console.log("are these hte plants ", plants)
  return (
    <ul className="cards">  {plants.map((plant) => {
      return <PlantCard
      plant={plant} />

      }    
  )
    }
</ul>
)
    }


export default PlantList;
