import React from 'react';
import styled from 'styled-components';
import Label from '../Forms/Label';
import Button from '../UI/Button/Button';

import PropTypes from 'prop-types';

import FormInputs from '../Forms/FormInputs';

const ExcludeButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  display: block;
`;

const ExcludedItem = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  margin: 0.5em;
`;

const ItemsContainer = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  height: auto;
  background-color: ${(props) => props.theme.colors.light};
  min-height: 3.2em;
`;

const ExcludeIngredients = ({
  handleRemoveExcluded,
  excludedItems,
  handleAddExcluded,
  controls,
  handleControlsChange,
}) => {
  const excludedElements = excludedItems.map((name, index) => (
    <ExcludedItem key={index} onClick={() => handleRemoveExcluded(name)}>
      {name}
    </ExcludedItem>
  ));
  return (
    <>
      <FormInputs
        controls={controls}
        handleInputChanged={handleControlsChange}
      ></FormInputs>
      <ExcludeButton onClick={handleAddExcluded}>Exclude</ExcludeButton>
      <Label>Ingredients Excluded:</Label>
      <ItemsContainer>{excludedElements}</ItemsContainer>
    </>
  );
};

ExcludeIngredients.propTypes = {
  handleAddExcluded: PropTypes.func.isRequired,
  handleRemoveExcluded: PropTypes.func.isRequired,
  handleControlsChange: PropTypes.func.isRequired,
  excludedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  controls: PropTypes.objectOf(
    PropTypes.shape({
      elementType: PropTypes.string,
      elementConfig: PropTypes.objectOf(PropTypes.string),
      validation: PropTypes.object,
      value: PropTypes.string.isRequired,
      msg: PropTypes.string,
      valid: PropTypes.bool,
      touched: PropTypes.bool,
    })
  ).isRequired,
};
export default ExcludeIngredients;
