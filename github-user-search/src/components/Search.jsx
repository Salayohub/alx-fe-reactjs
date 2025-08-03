// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ preventDefault
    if (username.trim()) {
      onSearch(username); // Call parent function
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* ✅ form and onSubmit */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // ✅ target.value
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button> {/* ✅ button */}
    </form>
  );
};

export default Search;
