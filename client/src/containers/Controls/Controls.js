import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes as GET_RECIPES } from '../../store/slices/recipeSlice';
import styled, { css } from 'styled-components';

import FormInputs, {
  handleControlChange,
} from '../../components/Forms/FormInputs';

import Button from '../../components/UI/Button/Button';

import HealthType from '../../components/Controls/HealthType';
import DietType from '../../components/Controls/DietType';
import ExcludedIngredients from '../../components/Controls/ExcludedIngredients';

import { withRouter } from 'react-router-dom';

const showAdvanced = css`
  max-height: 700px;
`;

const MainContainer = styled.div`
  width: 80%;
  max-width: 600px;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 10px 10px ${({ theme }) => theme.colors.darkLight};
`;

const FormContainer = styled.form`
  padding: 2em;
`;

const AdvancedSearchContainer = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  ${(props) => (props.show ? showAdvanced : '')}
`;

const AdvancedButton = styled(Button)`
  display: block;
`;

const SearchButton = styled(Button)`
  display: block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const maxIngredients = 'max number of ingredients';
const maxCalories = 'max calories';
const maxTime = 'max time to cook';
const excludedProp = 'excluded ingredient';

export class Controls extends Component {
  state = {
    searchControls: {
      search: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          autoFocus: true,
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
      [maxIngredients]: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
      [maxCalories]: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '',
        msg: '',
        valid: false,
        touched: false,
      },
      [maxTime]: {
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
      [excludedProp]: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          autoFocus: true,
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
    showExcluded: false,
    healthFields: {
      vegan: false,
      vegetarian: false,
      'sugar-conscious': false,
      'peanut-free': false,
      'tree-nut-free': false,
      'alcohol-free': false,
    },
    dietField: '',
    dietOptions: ['balanced', 'high-protein', 'low-carb', 'low-fat'],
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

  handleAddExcluded = (e) => {
    e.preventDefault();

    if (this.state.excludedControls[excludedProp].value === '') return;
    this.setState((prevState) => {
      const prevControls = prevState.excludedControls;
      const newSet = new Set(prevState.excludedItems);
      newSet.add(prevControls[excludedProp].value.toLowerCase());
      return {
        excludedItems: newSet,
        excludedControls: {
          ...prevControls,
          [excludedProp]: {
            ...prevControls[excludedProp],
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

  handleToggleExcluded = () => {
    this.setState((prevState) => {
      return { showExcluded: !prevState.showExcluded };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.showExcluded === true) return; // Don't submit form when excluded modal is open.

    const health = [];
    for (let field in this.state.healthFields) {
      if (this.state.healthFields[field] === true) health.push(field);
    }
    let excluded = [...this.state.excludedItems];

    this.props.getRecipes(
      this.state.searchControls.search.value,
      this.state.advancedControls[maxIngredients].value,
      this.state.advancedControls[maxCalories].value,
      this.state.advancedControls[maxTime].value,
      this.state.dietField,
      health,
      excluded
    );

    this.props.history.push('/recipes');
  };

  render() {
    const advancedSearch = (
      <AdvancedSearchContainer show={this.state.showAdvanced}>
        <FormInputs
          controls={this.state.advancedControls}
          handleInputChanged={this.handleAdvancedControlsChange}
        ></FormInputs>

        <HealthType
          healthFields={this.state.healthFields}
          handleCheck={this.handleCheck}
        />
        <DietType
          dietOptions={this.state.dietOptions}
          dietField={this.state.dietField}
          handleRadio={this.handleRadio}
        />

        <Button onClick={this.handleToggleExcluded} danger>
          Exclude Ingredients
        </Button>
      </AdvancedSearchContainer>
    );

    return (
      <MainContainer>
        <FormContainer onSubmit={this.handleSubmit}>
          <FormInputs
            controls={this.state.searchControls}
            handleInputChanged={this.handleSearchControlsChange}
          ></FormInputs>

          {advancedSearch}

          <ButtonContainer>
            <AdvancedButton dark onClick={this.handleToggleAdvanced}>
              Advanced Search
            </AdvancedButton>
            <SearchButton submit primary>
              Search
            </SearchButton>
          </ButtonContainer>
        </FormContainer>
        <ExcludedIngredients
          show={this.state.showExcluded}
          toggleShow={this.handleToggleExcluded}
          controls={this.state.excludedControls}
          handleControlsChange={this.handleExcludedControlsChange}
          excludedItems={[...this.state.excludedItems]}
          handleAddExcluded={this.handleAddExcluded}
          handleRemoveExcluded={this.handleRemoveExcluded}
        ></ExcludedIngredients>
      </MainContainer>
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
