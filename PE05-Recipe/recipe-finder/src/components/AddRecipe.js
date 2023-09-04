import React, { useState } from 'react';
import './../styles/AddRecipe.css';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jsonData = JSON.stringify(recipe);

      const response = await fetch('https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (response.ok) {
        setRecipe({
          name: '',
          ingredients: '',
          instructions: '',
        });

      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="add-recipe">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Cooking Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            rows="6"
            required
          ></textarea>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;

