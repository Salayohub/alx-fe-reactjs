import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Sample Recipe", description: "Try editing or deleting me!" }
  ],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),
}))

export default useRecipeStore
