import React, { useState, useEffect } from 'react'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Initialize form fields when `recipe` is available
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim() || !description.trim()) {
      alert('Title and description cannot be empty.')
      return
    }

    updateRecipe({ ...recipe, title, description })
  }

  if (!recipe) {
    return <p>No recipe to edit.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  )
}

export default EditRecipeForm