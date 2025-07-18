import React, { useContext } from 'react'; // ✅ React and useContext
import UserContext from '../UserContext'; // ✅ Your context file

function UserProfile() {
  const userData = useContext(UserContext); // ✅ Getting data from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
