import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import MovieDetails from "./components/MovieDetails";
import MoviesPage from "./components/MoviesPage";
import About from "./components/About";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onSelectMovie={setSelectedMovie} />} />
        <Route path="/movies" element={<MoviesPage onSelectMovie={setSelectedMovie} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}

export default App;
