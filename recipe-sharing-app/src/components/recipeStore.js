import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Spaghetti', description: 'Classic Italian pasta.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy breakfast treat.' },
    // Add more sample recipes here
  ],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term })
    get().filterRecipes()
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe]
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      }
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id)
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      }
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      }
    }),
}))

export default useRecipeStore
