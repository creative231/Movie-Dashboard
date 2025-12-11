import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelect }) => {
  if (!movies.length)
    return <p className="text-center p-6">No movies found.</p>;

  return (
    <div className="grid p-4 gap-6 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default MovieList;
