import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Controls from './containers/Controls/Controls';
import RecipesDisplay from './containers/RecipesDisplay/RecipesDisplay';
import FavoritesDisplay from './containers/FavoritesDisplay/FavoritesDisplay';

import Layout from './components/Layout/Layout';

import { loadUser } from './store/slices/authSlice';

import GlobalStyle from './GlobalStyle';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path='/'>
            <Layout>
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
