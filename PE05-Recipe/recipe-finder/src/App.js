import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import UpdateRecipe from './components/UpdateRecipe';


import './index.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://friendly-telegram-p575rv9wr4636rq-5050.app.github.dev/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-recipe">Add Recipe</Link>
            </li>
            <li>
              <Link to="/recipe-list">Recipe List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Let's Find A Meal! </h2>
              </div>
            }
          />
          <Route
            path="/recipe-list"
            element={
              <div>
                <h2>Recipe List</h2>
                <RecipeList recipes={recipes} />
              </div>
            }
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe />}
          />
<Route
  path="/update-recipe/:id"
  element={<UpdateRecipe recipes={recipes} />}
/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
