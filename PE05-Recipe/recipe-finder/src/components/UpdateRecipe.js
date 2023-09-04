import React, { useState } from 'react';

const UpdateRecipe = ({ recipe, onUpdate, onDelete }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    onUpdate(updatedRecipe);
    setIsEditing(false);
  };

  return (
    <div className="update-recipe">
      <h2>Update Recipe</h2>
      {isEditing ? (
        <div>
          <label>
            Recipe Name:
            <input
              type="text"
              name="name"
              value={updatedRecipe.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ingredients:
            <textarea
              name="ingredients"
              value={updatedRecipe.ingredients}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Instructions:
            <textarea
              name="instructions"
              value={updatedRecipe.instructions}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{updatedRecipe.name}</h3>
          <p>Ingredients: {updatedRecipe.ingredients}</p>
          <p>Instructions: {updatedRecipe.instructions}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(updatedRecipe.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UpdateRecipe;