import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes as GET_RECIPES } from '../../store/actions/recipeActions';
import styled from 'styled-components';

import Label from '../../components/Forms/Label';
import TextInput from '../../components/Forms/TextInput';
import NumberInput from '../../components/Forms/NumberInput';

import Button from '../../components/UI/Button/Button';

import HealthType from '../../components/Controls/HealthType';
import DietType from '../../components/Controls/DietType';
import ExcludedIngredients from '../../components/Controls/ExcludedIngredients/ExcludedIngredients';

import { withRouter } from 'react-router-dom';

const StyledControls = styled.div`
  padding: 2em;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchLabel = styled(Label)`
  font-weight: 600;
`;

const AdvancedButton = styled(Button)`
  display: block;
`;

const SearchButton = styled(Button)`
  display: block;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  margin-left: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1.3em;
`;

export class Controls extends Component {
  state = {
    search: '',
    maxIngredients: '',
    maxCalories: '',
    maxTime: '',
    excludedField: '',
    showAdvanced: false,
    healthFields: {
      vegan: false,
      vegetarian: false,
      sugarConscious: false,
      peanutFree: false,
      treeNutFree: false,
      alcoholFree: false,
    },
    dietField: '',
    excludedItems: new Set(),
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

  handleAddExcluded = () => {
    if (this.state.excludedField === '') return;
    this.setState((prevState) => {
      const newSet = new Set(prevState.excludedItems);
      newSet.add(prevState.excludedField.toLowerCase());
      return { excludedItems: newSet, excludedField: '' };
    });
  };

  handleRemoveExcluded = (item) => {
    this.setState((prevState) => {
      const newSet = new Set(prevState.excludedItems);
      newSet.delete(item);
      return { excludedItems: newSet };
    });
  };

  handleExcludedChange = (e) => {
    this.setState({ excludedField: e.target.value });
  };

  handleToggleAdvanced = () => {
    this.setState((prevState) => {
      return { showAdvanced: !prevState.showAdvanced };
    });
  };

  handleSubmit = () => {
    const health = [];
    for (let field in this.state.healthFields) {
      if (this.state.healthFields[field] === true) health.push(field);
    }
    let excluded = [...this.state.excludedItems];
    this.props.getRecipes(
      this.state.search,
      this.state.maxIngredients,
      this.state.maxCalories,
      this.state.maxTime,
      this.state.dietField,
      health,
      excluded
    );
    this.props.history.push('/recipes');
  };

  render() {
    let advancedSearch;

    if (this.state.showAdvanced) {
      advancedSearch = (
        <>
          <Label htmlFor='search-ingredients'>Max Ingredients:</Label>
          <NumberInput
            id='search-ingredients'
            type='number'
            value={this.state.maxIngredients}
            onChange={this.handleMaxIngredientsChange}
          ></NumberInput>

          <Label htmlFor='search-calories'>Max Calories: </Label>
          <NumberInput
            id='search-calories'
            value={this.state.maxCalories}
            onChange={this.handleMaxCaloriesChange}
          ></NumberInput>

          <Label htmlFor='search-cook'>Max Cooking Time (Mins):</Label>
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
          <ExcludedIngredients
            excludedField={this.state.excludedField}
            handleExcludedChange={this.handleExcludedChange}
            excludedItems={this.state.excludedItems}
            handleAddExcluded={this.handleAddExcluded}
            handleRemoveExcluded={this.handleRemoveExcluded}
          ></ExcludedIngredients>
        </>
      );
    } else {
      advancedSearch = null;
    }

    return (
      <StyledControls>
        <SearchLabel htmlFor='search-input' fontSize='1.2rem'>
          Search:
        </SearchLabel>
        <TextInput
          id='search-input'
          type='text'
          value={this.state.search}
          onChange={this.handleSearchChange}
        ></TextInput>
        {advancedSearch}
        <ButtonContainer>
          <AdvancedButton onClick={this.handleToggleAdvanced}>
            Advanced Search
          </AdvancedButton>
          <SearchButton onClick={this.handleSubmit}>Search</SearchButton>
        </ButtonContainer>
      </StyledControls>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipes: (
      search,
      ingredients,
      calories,
      time,
      diet,
      health,
      excluded
    ) => {
      dispatch(
        GET_RECIPES({
          search,
          ingredients,
          diet,
          health,
          calories,
          time,
          excluded,
        })
      );
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Controls)
);
