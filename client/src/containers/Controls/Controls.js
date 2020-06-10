import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Label from '../../components/Forms/Label';
import TextInput from '../../components/Forms/TextInput';
import NumberInput from '../../components/Forms/NumberInput';

import Button from '../../components/UI/Button/Button';

import HealthType from '../../components/Controls/HealthType';
import DietType from '../../components/Controls/DietType';

const StyledControls = styled.div`
  padding: 2em;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchLabel = styled(Label)`
  font-size: 1.1rem;
`;

const AdvancedButton = styled(Button)``;

const SearchButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
`;

export class Controls extends Component {
  state = {
    search: '',
    maxIngredients: '',
    maxCalories: '',
    maxTime: '',
    healthFields: {
      vegan: false,
      vegetarian: false,
      sugarConscious: false,
      peanutFree: false,
      treeNutFree: false,
      alcoholFree: false,
    },
    dietField: '',
  };

  handleSearchChange = (e) => this.setState({ search: e.target.value });

  handleMaxIngredientsChange = (e) =>
    this.setState({ maxIngredients: e.target.value });

  handleMaxCaloriesChange = (e) =>
    this.setState({ maxCalories: e.target.value });

  handleMaxTimeChange = (e) => this.setState({ maxTime: e.target.value });

  handleCheck = (e) => {
    let target = e.target;
    this.setState((prevState) => {
      let newFields = { ...prevState.healthFields };
      newFields[target.id] = target.checked;
      return { healthFields: newFields };
    });
  };

  handleRadio = (e) => {
    let target = e.target;
    this.setState({ dietField: target.id });
  };

  render() {
    return (
      <StyledControls>
        <SearchLabel htmlFor='search-input'>Search: </SearchLabel>
        <TextInput
          id='search-input'
          type='text'
          value={this.state.search}
          onChange={this.handleSearchChange}
        ></TextInput>

        <SearchLabel htmlFor='search-ingredients'>Max Ingredients:</SearchLabel>
        <NumberInput
          id='search-ingredients'
          type='number'
          value={this.state.maxIngredients}
          onChange={this.handleMaxIngredientsChange}
        ></NumberInput>

        <SearchLabel htmlFor='search-calories'>Max Calories: </SearchLabel>
        <NumberInput
          id='search-calories'
          value={this.state.maxCalories}
          onChange={this.handleMaxCaloriesChange}
        ></NumberInput>

        <SearchLabel htmlFor='search-cook'>
          Max Cooking Time (Mins):
        </SearchLabel>
        <NumberInput
          id='search-cook'
          value={this.state.maxTime}
          onChange={this.handleMaxTimeChange}
        ></NumberInput>

        <HealthType
          healthFields={this.state.healthFields}
          handleCheck={this.handleCheck}
        />
        <DietType
          handleRadio={this.handleRadio}
          dietField={this.state.dietField}
        />

        <AdvancedButton>Advanced Search</AdvancedButton>
        <SearchButton>Advanced Search</SearchButton>
      </StyledControls>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
