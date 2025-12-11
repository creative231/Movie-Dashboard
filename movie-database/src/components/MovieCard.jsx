// components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie, onSelect }) => {
  return (
    <div
      className="bg-white shadow rounded overflow-hidden cursor-pointer hover:shadow-lg"
      onClick={() => onSelect(movie)}
    >
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h2 className="font-bold text-lg">{movie.title}</h2>
        <p className="text-gray-600">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
