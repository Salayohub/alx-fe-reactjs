import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const handleAddRecipe = (newRecipe) => {
    console.log("New recipe submitted:", newRecipe);
  };
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">

         {/* Simple Nav */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <Link to="/" className="text-lg font-bold">Recipe Sharing</Link>
          <Link
            to="/add"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Recipe
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
          <Route path="*" element={<h1 className="text-center text-red-500 p-10">Page Not Found</h1>} />;
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
