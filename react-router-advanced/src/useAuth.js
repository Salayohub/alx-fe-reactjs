// src/hooks/useAuth.js
import { useState, useEffect } from 'react'

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // Fake authentication check using localStorage
    const authStatus = localStorage.getItem('auth') === 'true'
    setAuthenticated(authStatus)
  }, [])

  return authenticated
}
