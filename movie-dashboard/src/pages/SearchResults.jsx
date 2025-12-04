import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { searchMovies } from "../api/tmdb";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("q");
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function run() {
      const res = await searchMovies(query);
      setResults(res.results);
    }
    run();
  }, [query]);

  if (!results) return <LoadingSkeleton />;

  return (
    <div className="p-6">
      <h2 className="text-white text-xl mb-4">Search results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((m) => <MovieCard movie={m} key={m.id} />)}
      </div>
    </div>
  );
}
