import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // import the context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap your app in the Provider and pass userData to it
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
