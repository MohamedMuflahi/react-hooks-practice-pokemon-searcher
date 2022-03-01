import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({itemsToDisplay}) {
  function handleRender(){
    return itemsToDisplay.map(item=>{
      return <PokemonCard key={item.id} item={item}></PokemonCard>
    })
  }
  return (
    <Card.Group itemsPerRow={6}>
      {handleRender()}
    </Card.Group>
  );
}

export default PokemonCollection;
