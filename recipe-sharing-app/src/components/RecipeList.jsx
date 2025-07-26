import React from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (recipes.length === 0) return <p>No recipes yet. Add one!</p>

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
