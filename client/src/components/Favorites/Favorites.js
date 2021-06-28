import React from 'react';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import RecipeTemplate, {
  WrapperContainer,
  StyledButton,
} from '../Recipes/Recipe/RecipeTemplate';

import PropTypes from 'prop-types';

const Favorites = ({ loading, deleteFavorite, favorites }) => {
  const handleDeleteFavorite = (el) => {
    deleteFavorite(el._id);
  };
  return (
    <>
      <LoadingScreen show={loading}></LoadingScreen>
      <WrapperContainer>
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
            button={
              <StyledButton
                danger
                onClick={() => {
                  handleDeleteFavorite(el);
                }}
              >
                Remove Favorite
              </StyledButton>
            }
          />
        ))}
      </WrapperContainer>
    </>
  );
};

Favorites.propTypes = {
  loading: PropTypes.bool,
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default Favorites;
