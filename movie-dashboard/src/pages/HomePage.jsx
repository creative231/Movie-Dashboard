import React, { useEffect, useState } from 'react';
import { getTrending } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function HomePage(){
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(()=>{
    let mounted = true;
    setLoading(true);
    getTrending()
      .then(data => { if(mounted) setTrending(data.results || []) })
      .catch(e => { if(mounted) setErr(e.message) })
      .finally(()=> { if(mounted) setLoading(false) });
    return ()=> mounted=false;
  },[]);

  if(loading) return <LoadingSkeleton />;
  if(err) return <div className="text-red-400">Error: {err}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl text-white mb-4">Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trending.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
