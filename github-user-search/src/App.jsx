import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';
import Paragraph from './components/paragraph';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
      setRepos(data);
      setError(null);
    } catch (err) {
      setError('User not found or error fetching data');
      setRepos([]);
    }
  };

  return (
    <div>
      <h1>GitHub Repo Finder</h1>
      <Search onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>

     <div className="">
      <div className="">
        <h1 className="text-2xl font-bold mb-4 ">Welcome to My Tailwind App</h1>
        <Paragraph />
      </div>
    </div>
      
    </div>
  );
};

export default App;
