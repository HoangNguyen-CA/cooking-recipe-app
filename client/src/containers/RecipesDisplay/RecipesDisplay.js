import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Recipes from '../../components/Recipes/Recipes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export class RecipesDisplay extends Component {
  render() {
    return (
      <Container>
        <Recipes
          recipes={this.props.recipes}
          loading={this.props.loading}
        ></Recipes>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
  loading: state.recipe.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesDisplay);
