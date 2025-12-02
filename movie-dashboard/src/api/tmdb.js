const BASE = 'https://api.themoviedb.org/3';
const KEY = import.meta.env.VITE_TMDB_KEY;

export const imgUrl = (path, size='w500') => `https://image.tmdb.org/t/p/${size}${path}`;

export async function getTrending() {
  const res = await fetch(`${BASE}/trending/movie/week?api_key=${KEY}`);
  if (!res.ok) throw new Error('Failed fetching trending');
  return res.json();
}

export async function getPopular(page=1) {
  const res = await fetch(`${BASE}/movie/popular?api_key=${KEY}&page=${page}`);
  if (!res.ok) throw new Error('Failed fetching popular');
  return res.json();
}

export async function getTopRated(page=1) {
  const res = await fetch(`${BASE}/movie/top_rated?api_key=${KEY}&page=${page}`);
  if (!res.ok) throw new Error('Failed fetching top rated');
  return res.json();
}

export async function searchMovies(query, page=1) {
  const res = await fetch(`${BASE}/search/movie?api_key=${KEY}&query=${encodeURIComponent(query)}&page=${page}`);
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${KEY}&append_to_response=videos,credits,recommendations`);
  if (!res.ok) throw new Error('Details failed');
  return res.json();
}
