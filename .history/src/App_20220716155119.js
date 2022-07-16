import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// API from http://www.omdbapi.com/
const API_URL = "http://www.omdbapi.com?apikey=d0a01edd";

function App() {
  // Constants
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // Set initial query on the page load
  useEffect(() => {
    searchMovies("Beach");
  }, []);

  // JSON Query
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    // Main Container
    <div className="app">
      <h1>MovieLand</h1>

      {/* Search Field */}
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Loop to be rendered */}
      {movies?.length > 0 ? (
        // Grid of Movie Cards
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        // No Results found (404)
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
