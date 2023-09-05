import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/Buttons.css';


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleRecipeDetails = (recipeId) => {
    setSelectedRecipe((prevSelected) => (prevSelected === recipeId ? null : recipeId));
  };

  const handleDeleteRecipe = (recipeId) => {
    const recipeObjectId = recipeId.toString();
  
    fetch(`https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes/${recipeObjectId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeId));
        } else {
          console.error('Error deleting recipe');
        }
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error);
      });
  };

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div className="recipe-item">
              <div onClick={() => toggleRecipeDetails(recipe._id)}>
                {recipe.name}
                {selectedRecipe === recipe._id && (
                  <div>
                    <h3>Ingredients:</h3>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{recipe.instructions}</p>
                  </div>
                )}
              </div>
              <div className="button-container">
                <Link to={`/recipe/${recipe._id}`}>View Details</Link>
                <div>
                  <Link to={`/update-recipe/${recipe._id}`}>Update</Link>
                  <button onClick={() => handleDeleteRecipe(recipe._id)}>Delete</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

