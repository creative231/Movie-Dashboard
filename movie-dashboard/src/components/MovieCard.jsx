import { Link } from "react-router-dom";
import { imgUrl } from "../api/tmdb";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
    >
      <img
        src={movie.poster_path ? imgUrl(movie.poster_path) : "/placeholder.jpg"}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold line-clamp-1">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.vote_average} ★</p>
      </div>
    </Link>
  );
}
