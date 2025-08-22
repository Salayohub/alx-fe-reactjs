// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('auth', 'true') // Fake login
    navigate('/profile')
  }

  return (
    <div className="p-4">
      <h1>Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Log In
      </button>
    </div>
  )
}
