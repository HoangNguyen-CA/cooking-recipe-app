import React from 'react';
import RecipeTemplate from './Recipe/RecipeTemplate';
import styled from 'styled-components';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import Button from '../UI/Button/Button';

import PropTypes from 'prop-types';

const AddFavButton = styled(Button)`
  display: block;
  margin-top: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

const Recipes = ({ loading, recipes, isAuthenticated, addFavorite }) => {
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
    addFavorite(FAV);
  };
  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      {recipes.map((el) => {
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
            {isAuthenticated ? (
              <AddFavButton onClick={() => handleAddFavorites(el)}>
                Add To Favorites
              </AddFavButton>
            ) : null}
          </RecipeTemplate>
        );
      })}
    </>
  );
};

Recipes.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  recipes: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

export default Recipes;
