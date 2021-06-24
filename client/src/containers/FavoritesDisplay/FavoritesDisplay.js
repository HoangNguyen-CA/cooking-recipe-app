import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites, deleteFavorite } from '../../store/slices/userSlice';

import Favorites from '../../components/Favorites/Favorites';

import { Redirect } from 'react-router-dom';
import { Header, EmptyMessage } from '../../components/Layout/Layout';

export class FavoritesDisplay extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }
  render() {
    return (
      <>
        <Header>Your Favorites</Header>
        {this.props.isAuthenticated ? null : <Redirect to='/'></Redirect>}

        {this.props.favorites.length > 0 || this.props.loading ? (
          <Favorites
            favorites={this.props.favorites}
            deleteFavorite={this.props.deleteFavorite}
            loading={this.props.loading}
          ></Favorites>
        ) : (
          <EmptyMessage>You Have No Favorites</EmptyMessage>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.user.favorites,
  loading: state.user.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: () => dispatch(getFavorites()),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesDisplay);
