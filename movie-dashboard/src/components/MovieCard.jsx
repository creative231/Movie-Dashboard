import { Link } from 'react-router-dom';
import { imgUrl } from '../api/tmdb';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="block transform transition hover:scale-105">
      <div className="rounded-2xl overflow-hidden bg-gray-800">
        <img src={movie.poster_path ? imgUrl(movie.poster_path) : '/placeholder.jpg'} alt={movie.title}
             className="w-full h-72 object-cover"/>
        <div className="p-3">
          <h3 className="text-white font-semibold">{movie.title}</h3>
          <div className="text-sm text-gray-400">{movie.vote_average} ★</div>
        </div>
      </div>
    </Link>
  );
}
