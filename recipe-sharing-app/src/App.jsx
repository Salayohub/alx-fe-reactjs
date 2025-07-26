// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <p>hello welcome get your recipes</p>
            <RecipeList />
            <AddRecipeForm />
          </>
        }
      />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  )
}

export default App
