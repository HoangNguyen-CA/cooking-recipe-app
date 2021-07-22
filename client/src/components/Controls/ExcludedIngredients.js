import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

import PropTypes from 'prop-types';

import FormInputs from '../Forms/FormInputs';

const ExcludeButton = styled(Button)`
  display: block;
  width: 100%;
`;

const ExcludedItem = styled(Button)`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

const MainContainer = styled.form`
  width: 100%;
  max-width: 300px;

  height: max-content;
  & > button + button {
    margin-top: 0.8em;
  }
`;

const StyledModal = styled(Modal)`
  width: 90%;
  max-width: max-content;
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
    <StyledModal show={show} clickedBackdrop={toggleShow}>
      <MainContainer onSubmit={handleAddExcluded}>
        <FormInputs
          controls={controls}
          handleInputChanged={handleControlsChange}
        ></FormInputs>
        <ExcludeButton danger submit>
          Add to excluded
        </ExcludeButton>
        {excludedElements}
      </MainContainer>
    </StyledModal>
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
      elementConfig: PropTypes.object,
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
