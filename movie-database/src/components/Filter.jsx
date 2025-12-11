// components/Filter.jsx
import React from "react";

const Filter = ({ filters, onChange }) => {
  const handleGenreChange = (e) => {
    onChange({ ...filters, genre: e.target.value });
  };

  const handleRatingChange = (e) => {
    onChange({ ...filters, rating: Number(e.target.value) });
  };

  return (
    <div className="p-4 flex gap-4">
      <select value={filters.genre} onChange={handleGenreChange} className="p-2 border rounded">
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>

      <select value={filters.rating} onChange={handleRatingChange} className="p-2 border rounded">
        <option value="">All Ratings</option>
        <option value={5}>5+</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
      </select>
    </div>
  );
};

export default Filter;
