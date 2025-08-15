import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split("\n").filter(item => item.trim() !== "");
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please enter at least 2 ingredients.";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 100) + "...", // auto-generate summary
      ingredients: ingredients.split("\n").filter(item => item.trim() !== ""),
      instructions: steps.split("\n").filter(item => item.trim() !== ""),
      image: "default.jpg" // placeholder image name
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe);
    }

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.title ? "border-red-500" : "border-gray-300"}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>
          <textarea
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-[100px] ${errors.ingredients ? "border-red-500" : "border-gray-300"}`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter each ingredient on a new line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>
          <textarea
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-[120px] ${errors.steps ? "border-red-500" : "border-gray-300"}`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter each step on a new line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 w-full sm:w-auto"
          >
            Submit Recipe
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddRecipeForm;
