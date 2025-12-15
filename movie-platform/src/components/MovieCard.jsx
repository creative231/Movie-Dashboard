const MovieCard = ({ movie, onSelect }) => (
  <div
    onClick={() => onSelect(movie)}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden
               shadow hover:shadow-xl transform hover:scale-105
               transition duration-300 cursor-pointer"
  >
    <img
      src={movie.poster_path}
      alt={movie.title}
      className="w-full h-64 object-cover"
    />
    <div className="p-3 dark:text-white">
      <h3 className="font-bold">{movie.title}</h3>
      <p className="text-yellow-400"> {movie.vote_average}</p>
    </div>
  </div>
);

export default MovieCard;
