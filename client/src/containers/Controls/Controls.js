import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes as GET_RECIPES } from '../../store/slices/recipeSlice';
import styled from 'styled-components';

import FormInputs, {
  handleControlChange,
} from '../../components/Forms/FormInputs';

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

const AdvancedButton = styled(Button)`
  display: block;
`;

const SearchButton = styled(Button)`
  display: block;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3em;
`;

export class Controls extends Component {
  state = {
    searchControls: {
      search: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        validation: {
          required: true,
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
    },
    advancedControls: {
      maxIngredients: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
      maxCalories: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
      maxTime: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
    },
    excludedControls: {
      excluded: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        validation: {
          required: true,
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
    },
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

  handleSearchControlsChange = (event, controlName) => {
    const updatedControls = handleControlChange(
      event,
      controlName,
      this.state.searchControls
    );

    this.setState({ searchControls: updatedControls });
  };

  handleAdvancedControlsChange = (event, controlName) => {
    const updatedControls = handleControlChange(
      event,
      controlName,
      this.state.advancedControls
    );
    this.setState({ advancedControls: updatedControls });
  };

  handleExcludedControlsChange = (event, controlName) => {
    const updatedControls = handleControlChange(
      event,
      controlName,
      this.state.excludedControls
    );
    this.setState({ excludedControls: updatedControls });
  };

  handleAddExcluded = () => {
    if (this.state.excludedControls.excluded.value === '') return;
    this.setState((prevState) => {
      const prevControls = prevState.excludedControls;
      const newSet = new Set(prevState.excludedItems);
      newSet.add(prevControls.excluded.value.toLowerCase());
      return {
        excludedItems: newSet,
        excludedControls: {
          ...prevControls,
          excluded: {
            ...prevControls.excluded,
            value: '',
          },
        },
      };
    });
  };

  handleRemoveExcluded = (item) => {
    this.setState((prevState) => {
      const newSet = new Set(prevState.excludedItems);
      newSet.delete(item);
      return { excludedItems: newSet };
    });
  };

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
      this.state.searchControls.search.value,
      this.state.advancedControls.maxIngredients.value,
      this.state.advancedControls.maxCalories.value,
      this.state.advancedControls.maxTime.value,
      this.state.dietField,
      health,
      excluded
    );
    this.props.history.push('/recipes');
  };

  render() {
    let advancedSearch = null;
    if (this.state.showAdvanced) {
      advancedSearch = (
        <>
          <FormInputs
            controls={this.state.advancedControls}
            handleInputChanged={this.handleAdvancedControlsChange}
          ></FormInputs>

          <HealthType
            healthFields={this.state.healthFields}
            handleCheck={this.handleCheck}
          />
          <DietType
            dietField={this.state.dietField}
            handleRadio={this.handleRadio}
          />
          <FormInputs
            controls={this.state.excludedControls}
            handleInputChanged={this.handleExcludedControlsChange}
          ></FormInputs>
          <ExcludedIngredients
            excludedItems={this.state.excludedItems}
            handleAddExcluded={this.handleAddExcluded}
            handleRemoveExcluded={this.handleRemoveExcluded}
          ></ExcludedIngredients>
        </>
      );
    }

    return (
      <StyledControls>
        <FormInputs
          controls={this.state.searchControls}
          handleInputChanged={this.handleSearchControlsChange}
        ></FormInputs>
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
