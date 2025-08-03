// src/services/githubService.js
import axios from 'axios';

export const fetchUserRepos = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data; // contains avatar_url, login, etc.
};
