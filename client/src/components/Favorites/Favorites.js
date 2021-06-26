import React from 'react';
import RecipeTemplate from '../Recipes/Recipe/RecipeTemplate';
import styled from 'styled-components';

import Button from '../UI/Button/Button';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

import PropTypes from 'prop-types';

const RemoveButton = styled(Button)`
  display: block;
  margin-top: 1em;
`;
const Favorites = ({ loading, deleteFavorite, favorites }) => {
  const handleDeleteFavorite = (el) => {
    deleteFavorite(el._id);
  };
  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      {favorites.map((el) => (
        <RecipeTemplate
          key={el.url}
          label={el.label}
          image={el.image}
          source={el.source}
          url={el.url}
          dietLabels={el.dietLabels}
          healthLabels={el.healthLabels}
          cautions={el.cautions}
          ingredients={el.ingredients}
          calories={el.calories}
          totalTime={el.totalTime}
          nutrients={el.nutrients}
        >
          <RemoveButton
            danger
            onClick={() => {
              handleDeleteFavorite(el);
            }}
          >
            Remove Favorite
          </RemoveButton>
        </RecipeTemplate>
      ))}
    </>
  );
};

Favorites.propTypes = {
  loading: PropTypes.bool,
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default Favorites;
