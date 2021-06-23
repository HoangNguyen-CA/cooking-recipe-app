import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Recipes from '../../components/Recipes/Recipes';

import { addFavorite } from '../../store/slices/userSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 0.3em;
`;

const Message = (styled.message = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.danger};
  text-transform: uppercase;
`);

export class RecipesDisplay extends Component {
  render() {
    return (
      <Container>
        <Header>Recipes</Header>
        {this.props.recipes.length > 0 || this.props.loading ? (
          <Recipes
            recipes={this.props.recipes}
            loading={this.props.loading}
            addFavorite={this.props.addFavorite}
            isAuthenticated={this.props.isAuthenticated}
          ></Recipes>
        ) : (
          <Message>No Recipes Found</Message>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
  loading: state.recipe.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (recipe) => {
    dispatch(addFavorite(recipe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesDisplay);
