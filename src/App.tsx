import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/Searchbox";


const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  return (
    <div className="app">
      <h1>Movie Browser</h1>
      <SearchBox apiUrl={API_URL} />
    </div>
  );
};

export default App;
