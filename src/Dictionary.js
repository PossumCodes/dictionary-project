import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword}`);

    //handling response from api and logging api response
    function handleResponse(response) {
      console.log(response.data[0]);
      setResults(response.data[0]);
    }

    //documentation: https://dictionaryapi.dev/ making api call
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //event listener tracking change in typing input in search bar
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //dictionary search form
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
