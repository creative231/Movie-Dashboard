import React, { useState } from "react";
import SearchBar from "./searchBar";
import Filter from "./Filter";
import MovieList from "./MovieList";
import moviesData from "../data/movies.json";

const Homepage = () => {
  const [movies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
    const filterKey = movie.Genre || movie.Type || "";
    const matchesFilter = selectedFilter ? filterKey === selectedFilter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Local Movies Dashboard</h2>
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
