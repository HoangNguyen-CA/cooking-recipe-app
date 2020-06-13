import React from 'react';
import Recipe from './Recipe/Recipe';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 500px;
`;

const Recipes = (props) => {
  return (
    <Container>
      {props.recipes.map((el) => {
        return (
          <Recipe
            key={el.recipe.uri}
            label={el.recipe.label}
            image={el.recipe.image}
            source={el.recipe.source}
            url={el.recipe.url}
            dietLabels={el.recipe.dietLabels}
            healthLabels={el.recipe.healthLabels}
            cautions={el.recipe.cautions}
            ingredients={el.recipe.ingredientLines}
            calories={el.recipe.calories}
            totalTime={el.recipe.totalTime}
            totalNutrients={el.recipe.digest}
          ></Recipe>
        );
      })}
    </Container>
  );
};

export default Recipes;
