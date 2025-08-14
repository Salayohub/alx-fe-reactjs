import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div className="text-center mt-10 text-red-500">Recipe not found</div>;
  }

  // Get local image from assets folder
  const getImage = (imageName) => {
    return require(`../assets/${imageName}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Recipes</Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={getImage(recipe.image)}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>

          {/* Instructions Section */}
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-600">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;