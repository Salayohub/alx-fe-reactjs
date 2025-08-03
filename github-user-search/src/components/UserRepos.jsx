import React, { useEffect, useState } from 'react';
import { fetchUserRepos } from '../services/github';

const UserRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchUserRepos(username);
      setRepos(data);
      setLoading(false);
    };

    getRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Repositories for {username}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepos;
