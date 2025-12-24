import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Movie from "./data/Movie";
import Navbar from './components/Navbar';
import Poster from './components/Poster';

function App() {
  return (
    <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/movies" element={<Movie />} />
                <Route path="/about" element={<About />} />
               <Route path="/home" element={<Poster />} /> 
                <Route path="/" element={<Home />} /> {/* Default route */}
            </Routes>
        

      <Footer />
    </>
  );
}

export default App;
