import React from "react";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg p-6 w-11/12 md:w-1/2 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-700 dark:text-gray-300 hover:text-red-500"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-full h-80 object-cover rounded mb-4"
        />
        <p className="text-gray-700 dark:text-gray-300">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
