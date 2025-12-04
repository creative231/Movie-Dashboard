import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { getTrending, getPopular, getTopRated } from "../api/tmdb";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function loadData() {
      const [trend, pop, top] = await Promise.all([
        getTrending(),
        getPopular(),
        getTopRated(),
      ]);

      setMovies({
        trending: trend.results,
        popular: pop.results,
        topRated: top.results,
      });
    }

    loadData();
  }, []);

  if (!movies) return <LoadingSkeleton />;

  return (
    <div className="p-6">
      <h2 className="text-white text-2xl mb-4">Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.trending.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>

      <h2 className="text-white text-2xl my-6">Popular</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.popular.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>

      <h2 className="text-white text-2xl my-6">Top Rated</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.topRated.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}
