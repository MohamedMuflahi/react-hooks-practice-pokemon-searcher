import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokemonData,pokemonData}) {
  const [inputValues, setInputValues] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    }

  })
  function handleChange(e){
    if(e.target.name === 'front' || e.target.name === 'back'){
      setInputValues({
        ...inputValues,
        ['sprites']: {
          ...inputValues.sprites,
          [e.target.name]: e.target.value,
        },
      })
    }else{
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      })
    }
    
  }
  function handleSubmit(){
    fetch("http://localhost:3001/pokemon", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPokemonData([...pokemonData,data])
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
       onSubmit={handleSubmit}
       onChange={handleChange}
      >
        <Form.Group widths="equal" >
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
