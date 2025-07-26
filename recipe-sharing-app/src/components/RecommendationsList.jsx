import React from 'react'
import useRecipeStore from './recipeStore'

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations)
  const addFavorite = useRecipeStore((state) => state.addFavorite)

  if (recommendations.length === 0) return <p>No recommendations yet.</p>

  return (
    <div>
      <h3>Recommended Recipes</h3>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  )
}

export default RecommendationsList