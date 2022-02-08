import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";




function App() {

  const [plants, setPlants] = useState([])

       useEffect(() => {
         fetch("http://localhost:6001/plants")
         .then((response) => response.json())
         .then((r) => {
           console.log("here are the plants", r);
           setPlants(r);
         });
   }, []);
 
   

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
