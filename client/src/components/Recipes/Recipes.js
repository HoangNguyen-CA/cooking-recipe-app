import React from 'react';
import RecipeTemplate from './Recipe/RecipeTemplate';
import styled from 'styled-components';
import Spinner from '../UI/Spinner/Spinner';

import Button from '../UI/Button/Button';

const AddFavButton = styled(Button)`
  display: block;
  margin-top: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

const Recipes = (props) => {
  const handleAddFavorites = (el) => {
    let FAV = {};

    FAV.label = el.recipe.label;
    FAV.image = el.recipe.image;
    FAV.source = el.recipe.source;
    FAV.url = el.recipe.url;
    FAV.dietLabels = el.recipe.dietLabels;
    FAV.healthLabels = el.recipe.healthLabels;
    FAV.cautions = el.recipe.cautions;
    FAV.ingredients = el.recipe.ingredientLines;
    FAV.calories = el.recipe.calories;
    FAV.totalTime = el.recipe.totalTime;
    FAV.nutrients = el.recipe.digest;
    props.addFavorite(FAV);
  };
  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          {props.recipes.map((el) => {
            return (
              <RecipeTemplate
                key={el.recipe.url}
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
                nutrients={el.recipe.digest}
              >
                {props.isAuthenticated ? (
                  <AddFavButton onClick={() => handleAddFavorites(el)}>
                    Add To Favorites
                  </AddFavButton>
                ) : null}
              </RecipeTemplate>
            );
          })}
        </>
      )}
    </>
  );
};

export default Recipes;
