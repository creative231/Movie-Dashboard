import React from "react";

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(movie)}
    //   className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md 
    //              hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={movie.poster_path || movie.Poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 dark:text-white">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-yellow-400 font-semibold mt-1"> {movie.vote_average}</p>
        {movie.Genre && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{movie.Genre}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
