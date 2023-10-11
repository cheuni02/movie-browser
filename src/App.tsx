import React, { useEffect, useState } from "react";
import SearchItem from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";


const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (searchItem: string) => {
    const response = await (await fetch(`${API_URL}&s=${searchItem}`)).json();
    setMovies(response.Search);
  };
  useEffect(() => {
    searchMovies('');
  }, []);
  return (
    <div className="app">
      <h1>Movie Browser</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={SearchItem}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
