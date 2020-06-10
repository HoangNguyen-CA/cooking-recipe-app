import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUser } from './store/actions/authActions';

import Controls from './containers/Controls/Controls';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <Controls></Controls>
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
