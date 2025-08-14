// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic recipe detail route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* Optional: fallback route for 404s */}
          <Route path="*" element={<h1 className="text-center text-red-500 p-10">Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
