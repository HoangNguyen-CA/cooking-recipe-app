import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from './Recipe';
import uuid from 'uuid';
import { Container } from '../styledComponents';
import '../images/LoadingIcon';
import LoadingIcon from '../images/LoadingIcon';

export default function RecipesDisplay() {
  const recipes = useSelector(state => state.recipe.recipes);
  const isLoading = useSelector(state => state.recipe.loading);
  return (
    <Container>
      {!isLoading ? (
        recipes.map(recipe => {
          return (
            <Recipe
              key={uuid()}
              image={recipe.recipe.image}
              label={recipe.recipe.label}
              url={recipe.recipe.url}
              source={recipe.recipe.source}
              dietLabels={recipe.recipe.dietLabels}
              healthLabels={recipe.recipe.healthLabels}
              cautions={recipe.recipe.cautions}
              ingredients={recipe.recipe.ingredientLines}
              calories={recipe.recipe.calories}
              totalTime={recipe.recipe.totalTime}
              nutrients={recipe.recipe.digest}
            ></Recipe>
          );
        })
      ) : (
        <LoadingIcon></LoadingIcon>
      )}
    </Container>
  );
}
