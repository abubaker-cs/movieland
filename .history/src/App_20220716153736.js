import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// API from http://www.omdbapi.com/
const API_URL = "http://www.omdbapi.com?apikey=d0a01edd";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
    </div>
  );
}

export default App;
