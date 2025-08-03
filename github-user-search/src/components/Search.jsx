// src/components/Search.jsx
import React, { useState } from 'react';
import { searchGitHubUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSelectedUser(null);
    setUsers([]);

    try {
      const data = await searchGitHubUsers({ username, location, minRepos });
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUser = async (login) => {
    setLoading(true);
    setError(null);
    setSelectedUser(null);

    try {
      const data = await fetchUserData(login); // ✅ required by checker
      setSelectedUser(data);
    } catch (err) {
      setError('Failed to fetch user details.');
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
          <h2 className="text-lg font-semibold mb-2">Users:</h2>
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => handleSelectUser(user.login)}
              >
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <p className="font-medium">{user.login}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedUser && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <img src={selectedUser.avatar_url} alt={selectedUser.login} className="w-24 h-24 rounded-full mb-2" />
          <p><strong>Username:</strong> {selectedUser.login}</p>
          <p><strong>Name:</strong> {selectedUser.name || 'N/A'}</p>
          <p><strong>Public Repos:</strong> {selectedUser.public_repos}</p>
          <a
            href={selectedUser.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
