import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({item}) {
  return (
    <Card>
      <div>
        <div className="image">
          <img src={item.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {item.hp} 
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
