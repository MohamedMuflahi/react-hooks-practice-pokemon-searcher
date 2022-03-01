import React from "react";

function Search({setSearchTerm}) {
  function handleChange(e){
    setSearchTerm(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
