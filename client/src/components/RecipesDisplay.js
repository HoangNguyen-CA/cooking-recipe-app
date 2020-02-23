import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from './Recipe';

export default function RecipesDisplay() {
  const recipes = useSelector(state => state.recipe.recipes);
  return (
    <div className='bg-light'>
      {recipes.map(recipe => {
        return (
          <Recipe
            image={recipe.recipe.image}
            label={recipe.recipe.label}
            url={recipe.recipe.url}
            source={recipe.recipe.source}
          ></Recipe>
        );
      })}
    </div>
  );
}
