import React from "react";

const Filter = ({ selectedFilter, setSelectedFilter, movies }) => {
  // Use Genre if exists, fallback to Type
  const filterOptions = [
    ...new Set(movies.map((movie) => movie.Genre || movie.Type || "Unknown")),
  ];

  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="filter">Filter: </label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
      >
        <option value="">All</option>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
