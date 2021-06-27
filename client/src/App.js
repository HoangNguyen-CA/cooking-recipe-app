import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Controls from './containers/Controls/Controls';
import RecipesDisplay from './containers/RecipesDisplay/RecipesDisplay';
import FavoritesDisplay from './containers/FavoritesDisplay/FavoritesDisplay';

import Layout from './components/Layout/Layout';
import ErrorDisplay from './containers/ErrorDisplay/ErrorDisplay';

import { loadUser } from './store/slices/authSlice';
import { setUserOpen } from './store/slices/userSlice';

import GlobalStyle from './GlobalStyle';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div onClick={this.props.closeUser}>
        <ErrorDisplay></ErrorDisplay>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path='/'>
            <Layout maxWidth='600px'>
              <Controls></Controls>
            </Layout>
          </Route>
          <Route exact path='/recipes'>
            <Layout center>
              <RecipesDisplay> </RecipesDisplay>
            </Layout>
          </Route>
          <Route exact path='/favorites'>
            <Layout center>
              <FavoritesDisplay></FavoritesDisplay>
            </Layout>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
    closeUser: () => dispatch(setUserOpen(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
