import React from 'react'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  if (favorites.length === 0) return <p>No favorites yet.</p>

  return (
    <div>
      <h3>Your Favorite Recipes</h3>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
