// src/components/Search.jsx
import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await searchGitHubUsers({
        username,
        location,
        minRepos,
      });

      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos (optional)"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Results:</h2>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium">{user.login}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
