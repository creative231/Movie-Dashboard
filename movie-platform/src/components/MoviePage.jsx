import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MoviesPage = ({ onSelectMovie }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const moviesPerPage = 8;

  useEffect(() => {
    fetch("/movies.jsx")
      .then((res) => res.jsx())
      .then(setMovies);
  }, []);

  const topRated = movies.filter((m) => m.vote_average >= 8.5);
  const latest = movies.slice().reverse();
  const paginated = movies.slice((page - 1) * moviesPerPage, page * moviesPerPage);

  return (
    <div className>
      <h2 className>Trending</h2>
      <MovieList movies={topRated} onSelect={onSelectMovie} />

      <h2 className>Latest</h2>
      <MovieList movies={latest} onSelect={onSelectMovie} />

      <h2 className>All Movies</h2>
      <MovieList movies={paginated} onSelect={onSelectMovie} />

      {/* Pagination */}
      <div className>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;

