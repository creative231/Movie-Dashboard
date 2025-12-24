import React from 'react';
import './Poster.css'; // Ensure this file exists and is correctly named

const Poster = () => {
    return (
        <div>
            <div className="poster">
                <h1>Mayor of Kingstown</h1>
            </div>
            <div className="poster-buttons">
                <p>There's a new warden in town</p>
                <button className="play-button">PLAY</button>
                <button className="info-button">INFO</button>
            </div>
        </div>
    );
};

export default Poster;