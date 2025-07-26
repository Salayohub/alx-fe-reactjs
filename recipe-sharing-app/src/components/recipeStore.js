import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Spaghetti', description: 'Classic Italian pasta.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy breakfast treat.' },
    // Add more sample recipes here
  ],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendation: [],

 // Search + filter
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

    // Recipe CRUD
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
        favorites: state.favorites.filter((r) => r.id !==id),
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

    // Favorites
  addFavorite: (recipe) =>
    set((state) => {
      if (state.favorites.some((r) => r.id === recipe.id)) return {}
      const updatedFavorites = [...state.favorites, recipe]
      return {
        favorites: updatedFavorites,
        recommendations: get().generateRecommendations(updatedFavorites),
      }
    }),

  removeFavorite: (id) =>
    set((state) => {
      const updatedFavorites = state.favorites.filter((r) => r.id !== id)
      return {
        favorites: updatedFavorites,
        recommendations: get().generateRecommendations(updatedFavorites),
      }
    }),

  // Recommendation logic (naive)
  generateRecommendations: (favorites) => {
    const favoriteWords = favorites.flatMap((fav) =>
      fav.title.toLowerCase().split(' ')
    )

    const uniqueWords = [...new Set(favoriteWords)]

    return get().recipes.filter((recipe) => {
      return (
        !favorites.some((fav) => fav.id === recipe.id) &&
        uniqueWords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        )
      )
    })
  },
}))


export default useRecipeStore
