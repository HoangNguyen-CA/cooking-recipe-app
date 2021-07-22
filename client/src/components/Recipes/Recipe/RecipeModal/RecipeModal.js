import React from 'react';
import Modal from '../../../UI/Modal/Modal';
import styled from 'styled-components';
import { ModalHeader } from '../../../UI/Modal/Modal';
import LabelSection from '../LabelSection/LabelSection';
import PropTypes from 'prop-types';

const StyledModal = styled(Modal)`
  max-width: 700px;
  padding: 3em;
  width: 90%;

  & > * + * {
    margin-top: 1em;
  }
`;

const List = styled.ul`
  font-size: 1.1rem;
`;

const ListHeader = styled.h6`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2em;
`;

const ListElement = styled.li`
  margin-bottom: 0.2em;
  margin-left: 1em;
`;

const RecipeModal = ({
  open,
  label,
  ingredients,
  nutrients,
  handleClose,
  dietLabels,
  healthLabels,
  cautions,
}) => {
  return (
    <StyledModal show={open} clickedBackdrop={handleClose}>
      <ModalHeader>{label}</ModalHeader>
      <LabelSection header='Diet:' labels={dietLabels}></LabelSection>
      <LabelSection header='Health:' labels={healthLabels}></LabelSection>
      <LabelSection header='Cautions:' labels={cautions}></LabelSection>
      <List>
        <ListHeader>Ingredients:</ListHeader>
        {ingredients.map((el, index) => (
          <ListElement key={index}>{el}</ListElement>
        ))}
      </List>
      <List>
        <ListHeader>Nutrients:</ListHeader>
        {nutrients.map((el, index) => (
          <ListElement key={index}>
            {el.label}: {el.total.toFixed(2)} {el.unit} ({Math.round(el.daily)}%
            daily)
          </ListElement>
        ))}
      </List>
    </StyledModal>
  );
};

RecipeModal.propTypes = {
  open: PropTypes.bool,
  label: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  nutrients: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClose: PropTypes.func.isRequired,
  dietLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  healthLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  cautions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeModal;
