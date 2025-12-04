import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, imgUrl } from "../api/tmdb";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <LoadingSkeleton />;

  const trailer = movie.videos.results.find(v => v.type === "Trailer");

  return (
    <div className="p-6 text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imgUrl(movie.poster_path)}
          className="w-64 rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-3 text-gray-300">{movie.overview}</p>

          <p className="mt-2">⭐ {movie.vote_average}</p>
          <p className="mt-1">⏳ {movie.runtime} min</p>
        </div>
      </div>

      {trailer && (
        <div className="mt-8">
          <h2 className="text-xl mb-2">Trailer</h2>
          <iframe
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            className="rounded-xl"
          ></iframe>
        </div>
      )}
    </div>
  );
}
