import React, {useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

let url = 'http://localhost:6001/plants'

function App() {

  //aqui eu vou 'chamar' as plantas do meu arquivo json, para aparecer na minha pagina
  //atraves de um get
  const [plants, setPlants] = useState([])

  const handleFetch = async () =>{
    try{
           //fetch faz uma requisicao em um certo url, isso demora um tempo.
    //quando eu faco um await eu estou esperando essa resposta chegar
      const response = await fetch(url)
      const dataPlants = await response.json()
      console.log(dataPlants)
      //depois de salvar a minha data eu preciso colocar em useState
      setPlants(dataPlants)
    }catch(error){}
  }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
