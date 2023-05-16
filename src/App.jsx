import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AllBeers from "./pages/AllBeers";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer beers={beers} />} />
        <Route path="/beers/:beerId" element={<Details beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
