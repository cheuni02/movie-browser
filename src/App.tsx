import React, { useEffect } from "react";
import SearchItem from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";


const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const movieSample = {
  Title: "Spiderman in Cannes",
  Year: "2016",
  imdbID: "tt5978586",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (searchItem: string) => {
    const response = await (await fetch(`${API_URL}&s=${searchItem}`)).json();
    console.log(response.Search);
  };
  useEffect(() => {
    //  searchMovies('spiderman');
    console.log(`env: ${process.env.API_KEY}`);
  }, []);
  return (
    <div className="app">
      <h1>Movie Browser</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchItem} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie={movieSample} />
      </div>
    </div>
  );
};

export default App;
