import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img src={beers} alt="beers" />
      <Link to="/beers">
        <h1>All Beers</h1>
      </Link>

      <img src={randomBeer} alt="random" />
      <Link to="/random-beer">
        <h1>Random Beer</h1>
      </Link>

      <img src={newBeer} alt="new" />
      <Link to="/new-beer">
        <h1>New Beer</h1>
      </Link>
    </div>
  );
}

export default HomePage;
