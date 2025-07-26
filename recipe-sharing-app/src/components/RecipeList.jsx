import React from 'react'
import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const addFavorite = useRecipeStore((state) => state.addFavorite)


  if (filteredRecipes.length === 0)
    return <p>No recipes match your search. Try a different keyword.</p>

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <button onClick={() => addFavorite(recipe)}>❤️ Favorite</button>
          </Link>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </div>
  )
}

export default RecipeList