// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../useAuth'


// Fake authentication check
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}

export default function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
