import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipes from '../../components/Recipes/Recipes';

import { addFavorite } from '../../store/slices/userSlice';

import { EmptyMessage } from '../../components/Layout/Layout';

export class RecipesDisplay extends Component {
  render() {
    return (
      <>
        {this.props.recipes.length > 0 || this.props.loading ? (
          <Recipes
            recipes={this.props.recipes}
            favorites={this.props.favorites}
            loading={this.props.loading}
            addFavorite={this.props.addFavorite}
            isAuthenticated={this.props.isAuthenticated}
          ></Recipes>
        ) : (
          <EmptyMessage>No Recipes Found</EmptyMessage>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
  favorites: state.user.favorites,
  loading: state.recipe.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (recipe) => {
    dispatch(addFavorite(recipe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesDisplay);
