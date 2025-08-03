// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserRepos } from '../services/githubService'; // new function

const Search = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRepos([]);

    try {
      const data = await fetchUserRepos(username); // fetch repos list
      setRepos(data); // data is an array
    } catch (err) {
      setError("Unable to fetch repositories for this user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {repos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Repositories:</h2>
          <ul className="list-disc pl-5">
            {repos.map((repo) => (
              <li key={repo.id} className="mb-1">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
