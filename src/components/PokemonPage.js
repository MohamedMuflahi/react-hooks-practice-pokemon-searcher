import React,{useEffect,useState}from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(data=>{
      //console.log(data);
      setPokemonData(data);
    })
  }, [])
  const itemsToDisplay = pokemonData.filter(pokemon=> pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
  //console.log(itemsToDisplay);
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonData={pokemonData} setPokemonData={setPokemonData}/>
      <br />
      <Search setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection itemsToDisplay={itemsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
