// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username); // calls API
      setUser(data); // expects full user object
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* ✅ Loading */}

      {error && <p>{error}</p>} {/* ✅ Error message */}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" /> {/* ✅ avatar_url, img */}
          <h2>{user.login}</h2> {/* ✅ login */}
        </div>
      )}
    </div>
  );
};

export default Search;
