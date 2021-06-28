import React from 'react';
import RecipeTemplate, {
  WrapperContainer,
  StyledButton,
} from './Recipe/RecipeTemplate';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import PropTypes from 'prop-types';

const Recipes = ({ loading, recipes, isAuthenticated, addFavorite }) => {
  const handleAddFavorites = (el) => {
    const recipe = el.recipe;
    let newFavorite = {
      label: recipe.label,
      image: recipe.image,
      source: recipe.source,
      url: recipe.url,
      dietLabels: recipe.dietLabels,
      healthLabels: recipe.healthLabels,
      cautions: recipe.cautions,
      ingredients: recipe.ingredientLines,
      calories: recipe.calories,
      totalTime: recipe.totalTime,
      nutrients: recipe.digest,
    };
    addFavorite(newFavorite);
  };

  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      <WrapperContainer>
        {recipes.map((el) => {
          const recipe = el.recipe;

          return (
            <RecipeTemplate
              key={recipe}
              label={recipe.label}
              image={recipe.image}
              source={recipe.source}
              url={recipe.url}
              dietLabels={recipe.dietLabels}
              healthLabels={recipe.healthLabels}
              cautions={recipe.cautions}
              ingredients={recipe.ingredientLines}
              calories={recipe.calories}
              totalTime={recipe.totalTime}
              nutrients={recipe.digest}
              button={
                isAuthenticated ? (
                  <StyledButton primary onClick={() => handleAddFavorites(el)}>
                    Add To Favorites
                  </StyledButton>
                ) : null
              }
            />
          );
        })}
      </WrapperContainer>
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
