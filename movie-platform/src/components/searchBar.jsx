import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    //   className="p-2 w-full border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    />
  );
};

export default SearchBar;
