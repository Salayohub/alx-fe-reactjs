import { useState } from 'react'
import UserRepos from './components/UserRepos';

function App() {
  const [username, setUsername] = useState('');
  const [submittedUser, setSubmittedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUser(username);
  };
 

  return (
    <>
     <div className="App">
      <h1>GitHub Repo Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Fetch Repos</button>
      </form>

      {submittedUser && <UserRepos username={submittedUser} />}
    </div> 
    </>
  )
}

export default App
