import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MoviesPage = ({ onSelectMovie }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moviesPerPage = 8;

  useEffect(() => {
    fetch("/movies.json")
      .then(res => res.json())
      .then(setMovies);
  }, []);

  const topRated = movies.filter(m => m.vote_average >= 8.5);
  const latest = movies.slice().reverse();
  const paginated = movies.slice(
    (page - 1) * moviesPerPage,
    page * moviesPerPage
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Trending</h2>
      <MovieList movies={topRated} onSelect={onSelectMovie} />

      <h2 className="text-3xl font-bold my-6 dark:text-white">Latest</h2>
      <MovieList movies={latest} onSelect={onSelectMovie} />

      <h2 className="text-3xl font-bold my-6 dark:text-white">All Movies</h2>
      <MovieList movies={paginated} onSelect={onSelectMovie} />

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;
