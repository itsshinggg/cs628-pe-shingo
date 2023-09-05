import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    if (id) {
      fetch(`https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // Check if data exists (recipe found)
          if (data) {
            setRecipe(data);
          } else {
            console.error('Recipe not found');
          }
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id]);

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

      const response = await fetch(`https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      if (response.ok) {
        console.log('Recipe updated successfully');
        navigate('/recipe-list');
      } else {
        console.error('Error updating the recipe');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="update-recipe">
      <h2>Update Recipe</h2>
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
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
