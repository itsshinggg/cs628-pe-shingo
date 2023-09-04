import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <div className="recipe-info">
        <div className="recipe-ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
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


// import React from 'react';
// import { useParams } from 'react-router-dom';

// const RecipeDetails = ({ recipes }) => {
//   // Get the recipe id from the URL params
//   const { id } = useParams();

//   // Find the recipe with the matching id
//   const recipe = recipes.find((r) => r.id === id);

//   if (!recipe) {
//     return <div>Recipe not found</div>;
//   }

//   return (
//     <div className="recipe-details">
//       <h2>{recipe.name}</h2>
//       <div className="recipe-info">
//         <div className="recipe-ingredients">
//           <h3>Ingredients</h3>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="recipe-instructions">
//           <h3>Instructions</h3>
//           <p>{recipe.instructions}</p>
//         </div>
//         {/* Add more sections for other recipe details */}
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;

