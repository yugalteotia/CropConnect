import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue); // Call the passed in onSearch function
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-end mb-2 items-center">
  <input
    type="text"
    value={searchValue}
    onChange={handleChange}
    placeholder="Search here..."
    className="border rounded-lg px-3 py-1.5 w-1/2 h-10 mt-2" // Large width for search bar
  />
  <button type="submit"
    className="ml-1 px-2 py-1.5 bg-blue-500 text-white rounded-lg h-10 w-20" >
    Search
  </button> 
</form>

  );
};

export default SearchBar;
