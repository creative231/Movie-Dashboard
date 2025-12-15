const MovieDetails = ({ movie, onClose }) => (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white
                    rounded-lg p-6 w-11/12 md:w-1/2 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-xl"
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
      <img src={movie.poster_path} className="w-full h-80 object-cover rounded mb-4" />
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default MovieDetails;
