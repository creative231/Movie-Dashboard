import React from 'react';
import MoviePoster from './MoviePoster'; // Ensure correct path
import './Home.css'; // Ensure you have the CSS file for styles

const Home = () => {
    const handlePlay = () => {
        console.log("Playing the movie...");
        // Add functionality to play the movie
    };

    const handleInfo = () => {
        console.log("Showing movie info...");
        // Add functionality to show movie info
    };

    return (
        <div className="home-container">
            <MoviePoster 
                title="Mayor of Kingstown"
                description="The McLusky family are power brokers tackling themes of systemic racism, corruption and inequality in Kingstown, Michigan, where the business of incarceration is the only thriving industry."
                onPlay={handlePlay}
                onInfo={handleInfo}
                backgroundImage="https://m.media-amazon.com/images/M/MV5BOGZhODE5ZmEtMmE2OC00M2YzLWFjODMtYzI3ZTI0Mzk0MmY1XkEyXkFqcGc@._V1_SX300.jpg" // Replace with your image path
            />
        </div>
    );
};

export default Home;
