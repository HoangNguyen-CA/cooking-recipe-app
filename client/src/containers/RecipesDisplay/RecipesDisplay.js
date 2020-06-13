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
        <Recipes recipes={this.props.recipes}></Recipes>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesDisplay);
