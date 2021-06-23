import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites, deleteFavorite } from '../../store/slices/userSlice';
import styled from 'styled-components';

import Favorites from '../../components/Favorites/Favorites';

import { Redirect } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export class FavoritesDisplay extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }
  render() {
    return (
      <Container>
        <Header>Your Favorites</Header>
        {this.props.isAuthenticated ? null : <Redirect to='/'></Redirect>}

        {this.props.favorites.length > 0 || this.props.loading ? (
          <Favorites
            favorites={this.props.favorites}
            deleteFavorite={this.props.deleteFavorite}
            loading={this.props.loading}
          ></Favorites>
        ) : (
          <Message>You Have No Favorites</Message>
        )}
      </Container>
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
