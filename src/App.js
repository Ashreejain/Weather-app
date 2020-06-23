import React, { useEffect, useState } from "react";
import "./App.css";
import Country from "./country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCountry();
  }, [query]);
  const getCountry = async () => {
    let response;
    if (query === "") {
      response = await fetch("https://restcountries.eu/rest/v2/all");
    } else {
      response = await fetch("https://restcountries.eu/rest/v2/name/" + query);
    }
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };
  const updateState = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <div className="container">
        <div className="form">
          <form className="search" onSubmit={getSearch}>
            <input
              className="form-control"
              type="search"
              value={search}
              onChange={updateState}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className="grid">
          {countries.map(country => (
            <Country
              key={country.alpha2Code}
              name={country.name}
              population={country.population}
              region={country.region}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
      <footer>©copyrights shelcia 2020</footer>
    </div>
  );
};

export default App;

// const REQ = "https://restcountries.eu/rest/v2/all";
// useEffect(() => {
//   console.log("i am running bitch");
// }, []); //add an empty array to make it run only once you can also put in some arguments
// const [counter, setCounter] = useState(0);
