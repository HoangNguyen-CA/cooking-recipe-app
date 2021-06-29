import React from 'react';
import RecipeTemplate, {
  WrapperContainer,
  StyledButton,
} from './Recipe/RecipeTemplate';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import PropTypes from 'prop-types';

const Recipes = ({
  loading,
  recipes,
  isAuthenticated,
  addFavorite,
  favorites,
}) => {
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

          const isFavorite = favorites.find(
            (item) => item.label === recipe.label
          );

          return (
            <RecipeTemplate
              key={recipe.label}
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
                  <StyledButton
                    primary
                    disabled={isFavorite}
                    onClick={() => handleAddFavorites(el)}
                  >
                    {isFavorite ? 'Favored' : 'Add To Favorites'}
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
  favorites: PropTypes.array.isRequired,
};

export default Recipes;
