const KEY = "movie_favorites";

export const loadFavs = () =>
  JSON.parse(localStorage.getItem(KEY) || "[]");

export const saveFavs = (arr) =>
  localStorage.setItem(KEY, JSON.stringify(arr));
