const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-11/12 md:w-1/2 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-bold"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <img
          src={movie.poster_path}
          className="w-full h-80 object-cover rounded-md mb-4"
        />

        <p className="mb-2">{movie.overview}</p>
        <p><strong>Release:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
