import React from "react";

const Filter = ({ selectedFilter, setSelectedFilter, movies }) => {
  const filterOptions = [...new Set(movies.map((movie) => movie.Genre || movie.Type || "Unknown"))];

  return (
    <div className="mb-6 flex items-center gap-2">
      <label htmlFor="filter" className="font-medium text-gray-700 dark:text-gray-300">Filter:</label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="">All</option>
        {filterOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
