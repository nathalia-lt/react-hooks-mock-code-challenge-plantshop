import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( { plants }) {
const [userSearchInput, setUserSearchInput] = useState("")


function handleSearch() {
  const filteredPlants = plants.filter((plant) =>{
    return plant.name.toLowerCase().includes(userSearchInput.toLowerCase())
  })
  return filteredPlants
} 

  return (
    <main>
      <NewPlantForm />
      <Search userSearchInput={userSearchInput} setUserSearchInput={setUserSearchInput}/>
      <PlantList plants={handleSearch()}/>
    </main>
  );
}

export default PlantPage;
