import React from "react";

const MovieList = ({ movies = [], onSelect }) => {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 dark:text-gray-400">
        No movies found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onSelect?.(movie)}
        >
          <img
            src={movie.Poster}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold dark:text-white">{movie.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
