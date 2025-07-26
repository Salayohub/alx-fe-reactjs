import React from 'react'
import useRecipeStore from './recipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipe(id)
    navigate('/') // Go back to main list
  }

  return <button onClick={handleDelete}>Delete Recipe</button>
}

export default DeleteRecipeButton
