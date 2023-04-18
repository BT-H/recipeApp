import React from 'react'
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id: 1, 
    name: 'Plain Chicken',
    servings: 3, 
    cookTime: '1:45', 
    instructions: 'eat chicken after cooking enjoy'
  },
  {
    id: 2, 
    name: 'Spicy Chicken',
    servings: 2, 
    cookTime: '0:45', 
    instructions: 'eat chicken after cooking enjoy'
  },
]
export default App;
