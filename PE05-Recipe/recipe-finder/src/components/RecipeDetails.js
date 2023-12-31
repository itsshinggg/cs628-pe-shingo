import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();

  const recipe = recipes.find((r) => r._id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <div className="recipe-info">
        <div className="recipe-ingredients">
          <h3>Ingredients</h3>
          <p>{recipe.ingredients}</p>
        </div>
        <div className="recipe-instructions">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

