import { useEffect } from "react";

// API from http://www.omdbapi.com/
const API_URL = "http://www.omdbapi.com?apikey=d0a01edd";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
