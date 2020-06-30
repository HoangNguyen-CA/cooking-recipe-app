import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Controls from './containers/Controls/Controls';
import RecipesDisplay from './containers/RecipesDisplay/RecipesDisplay';
import FavoritesDisplay from './containers/FavoritesDisplay/FavoritesDisplay';

import Layout from './components/Layout/Layout';

import { loadUser } from './store/actions/authActions';

import GlobalStyle from './GlobalStyle';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <Layout>
          <GlobalStyle></GlobalStyle>
          <Switch>
            <Route exact path='/'>
              <Controls></Controls>
            </Route>
            <Route exact path='/recipes'>
              <RecipesDisplay> </RecipesDisplay>
            </Route>
            <Route exact path='/favorites'>
              <FavoritesDisplay></FavoritesDisplay>
            </Route>
          </Switch>
        </Layout>
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
