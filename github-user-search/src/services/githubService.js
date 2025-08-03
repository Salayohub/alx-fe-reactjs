// src/services/githubService.js
import axios from 'axios'; // ✅ axios

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`; // or /users/${username}
  try {
    const response = await axios.get(url); // ✅ axios.get
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
};
