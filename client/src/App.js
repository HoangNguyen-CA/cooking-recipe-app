import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUser } from './store/actions/authActions';

import Controls from './containers/Controls/Controls';
import RecipesDisplay from './containers/RecipesDisplay/RecipesDisplay';

import Layout from './components/Layout/Layout';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <Layout>
          <Controls></Controls>
          <RecipesDisplay></RecipesDisplay>
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
