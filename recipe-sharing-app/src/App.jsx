import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import EditRecipeForm from './components/EditRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
