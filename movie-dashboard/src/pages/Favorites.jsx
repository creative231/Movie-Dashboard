import { loadFavs } from "../utils/localStorage";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const favs = loadFavs();

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl mb-4">Your Favorites</h1>
      {favs.length === 0 ? (
        <p className="text-gray-300">No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favs.map((m) => <MovieCard movie={m} key={m.id} />)}
        </div>
      )}
    </div>
  );
}
