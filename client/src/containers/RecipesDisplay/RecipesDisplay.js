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

const TEMP = [
  {
    recipe: {
      uri:
        'http://www.edamam.com/ontologies/edamam.owl#recipe_687b61a316de39be04b86911cff4dfe6',
      label: 'Pizza Margherita',
      image:
        'https://www.edamam.com/web-img/08a/08a7002b167ffad2ad2c675be162c170.jpg',
      source: 'LA Times',
      url:
        'http://www.latimes.com/features/food/la-fo-homepizzarec25b-2009mar25,0,5440766.story',
      shareAs:
        'http://www.edamam.com/recipe/pizza-margherita-687b61a316de39be04b86911cff4dfe6/pizza',
      yield: 10,
      dietLabels: [Array],
      healthLabels: [Array],
      cautions: [Array],
      ingredientLines: [Array],
      ingredients: [Array],
      calories: 2237.294625,
      totalWeight: 875.5515625,
      totalTime: 0,
      totalNutrients: [Object],
      totalDaily: [Object],
      digest: [Array],
    },
    bookmarked: false,
    bought: false,
  },
  {
    recipe: {
      uri:
        'http://www.edamam.com/ontologies/edamam.owl#recipe_687b61a316de39be04b86911cff4dfes6',
      label: 'Pizza Margherita',
      image:
        'https://www.edamam.com/web-img/08a/08a7002b167ffad2ad2c675be162c170.jpg',
      source: 'LA Times',
      url:
        'http://www.latimes.com/features/food/la-fo-homepizzarec25b-2009mar25,0,5440766.story',
      shareAs:
        'http://www.edamam.com/recipe/pizza-margherita-687b61a316de39be04b86911cff4dfe6/pizza',
      yield: 10,
      dietLabels: [Array],
      healthLabels: [Array],
      cautions: [Array],
      ingredientLines: [Array],
      ingredients: [Array],
      calories: 2237.294625,
      totalWeight: 875.5515625,
      totalTime: 0,
      totalNutrients: [Object],
      totalDaily: [Object],
      digest: [Array],
    },
    bookmarked: false,
    bought: false,
  },
];

export class RecipesDisplay extends Component {
  componentDidUpdate() {
    console.log(this.props.recipes);
  }
  render() {
    return (
      <Container>
        <Recipes recipes={TEMP}></Recipes>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesDisplay);
