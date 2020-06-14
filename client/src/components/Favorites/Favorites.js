import React from 'react';
import RecipeTemplate from '../Recipes/Recipe/RecipeTemplate';
import styled from 'styled-components';

import Button from '../UI/Button/Button';

import LoadingIcon from '../../images/LoadingIcon';

const Container = styled.div`
  width: 80%;
  max-width: 500px;
`;

const RemoveButton = styled(Button)`
  display: block;
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  margin-top: 1em;
`;
const Favorites = (props) => {
  const handleDeleteFavorite = (el) => {
    props.deleteFavorite(el._id);
  };
  return (
    <>
      {props.loading ? (
        <LoadingIcon></LoadingIcon>
      ) : (
        <Container>
          {props.favorites.map((el) => (
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
                onClick={() => {
                  handleDeleteFavorite(el);
                }}
              >
                Remove Favorite
              </RemoveButton>
            </RecipeTemplate>
          ))}
        </Container>
      )}
    </>
  );
};

export default Favorites;
