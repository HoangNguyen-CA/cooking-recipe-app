import React from 'react';
import styled from 'styled-components';
import Label from '../Forms/Label';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

import PropTypes from 'prop-types';

import FormInputs from '../Forms/FormInputs';

const ExcludeButton = styled(Button)`
  margin: 0.5em 0;
  display: block;
  width: 100%;
`;

const ExcludedItem = styled(Button)`
  margin-top: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContainer = styled.div`
  width: 250px;
  max-width: 90vw;
`;

const ExcludeIngredients = ({
  show,
  toggleShow,
  handleRemoveExcluded,
  excludedItems,
  handleAddExcluded,
  controls,
  handleControlsChange,
}) => {
  const excludedElements = excludedItems.map((name, index) => (
    <ExcludedItem
      primary
      key={index}
      onClick={() => handleRemoveExcluded(name)}
    >
      {name}
    </ExcludedItem>
  ));
  return (
    <Modal show={show} clickedBackdrop={toggleShow}>
      <MainContainer>
        <FormInputs
          controls={controls}
          handleInputChanged={handleControlsChange}
        ></FormInputs>
        <ExcludeButton danger onClick={handleAddExcluded}>
          Add to excluded
        </ExcludeButton>
        <Label>Ingredients Excluded:</Label>
        <ItemsContainer>{excludedElements}</ItemsContainer>
      </MainContainer>
    </Modal>
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

  show: PropTypes.bool,
  toggleShow: PropTypes.func.isRequired,
};
export default ExcludeIngredients;
