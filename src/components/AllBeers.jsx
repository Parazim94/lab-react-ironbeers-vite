import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  console.log(query);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div>
      <Navbar />
      <input type="text" value={query} onChange={handleInputChange} />
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
