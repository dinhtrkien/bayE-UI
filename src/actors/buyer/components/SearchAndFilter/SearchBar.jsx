import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search by keywords"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="absolute top-3 right-4 text-gray-500"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
