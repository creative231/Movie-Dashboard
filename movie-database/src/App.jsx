import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ genre: "", rating: "" });

  // Load Movies
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("/movies.json");
    const data = await response.json();
    setMovies(data);
    setFilteredMovies(data);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterMovies(query, filters);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    filterMovies(searchQuery, newFilters);
  };

  const filterMovies = (query, filters) => {
    let filtered = movies.filter((m) =>
      m.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filters.genre) {
      filtered = filtered.filter((m) => m.genre?.includes(filters.genre));
    }

    if (filters.rating) {
      filtered = filtered.filter((m) => m.vote_average >= filters.rating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Filter filters={filters} onChange={handleFilter} />
      <MovieList movies={filteredMovies} onSelect={setSelectedMovie} />

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
