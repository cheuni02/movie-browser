import React, { useEffect, useState } from "react";
import SearchItem from "../search.svg";
import MovieCard from "./MovieCard";
import BeforeMessage from "./BeforeMessage";

const SearchBox = ({ apiUrl }: { apiUrl: string }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (searchItem: string) => {
    const response = await (await fetch(`${apiUrl}&s=${searchItem}`)).json();
    setMovies(response.Search);
  };
    useEffect(() => {
      searchMovies("");
    }, []);
  return (
    <>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
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
            <BeforeMessage />
        </div>
      )}
    </>
  );
};

export default SearchBox;
