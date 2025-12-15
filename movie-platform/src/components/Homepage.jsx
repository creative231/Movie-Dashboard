// 

import React, { useState } from "react";
import SearchBar from "./searchBar.jsx";
import Filter from "./Filter.jsx";
import MovieList from "./MovieList.jsx";

// Import local JSON
import moviesData from "../data/movies.json";

const Homepage = () => {
  const [movies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // Filter movies by search term and selected filter
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.Title.toLowerCase().includes(searchTerm.toLowerCase());

    // Use Type if Genre doesn't exist
    const filterKey = movie.Genre || movie.Type || "";
    const matchesFilter = selectedFilter ? filterKey === selectedFilter : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Local Movies Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        movies={movies}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Homepage;
