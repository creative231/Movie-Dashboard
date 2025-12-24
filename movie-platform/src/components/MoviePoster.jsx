import React from 'react';
import './MoviePoster.css'; // Ensure you have the CSS file for styles

const MoviePoster = ({ title, description, onPlay, onInfo, backgroundImage }) => {
    return (
        <div className="movie-poster" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="movie-title">{title}</h1>
            <p className="movie-description">{description}</p>
            <div className="button-container">
                <button className="play-button" onClick={onPlay}>PLAY</button>
                <button className="info-button" onClick={onInfo}>INFO</button>
            </div>
        </div>
    );
};

export default MoviePoster;