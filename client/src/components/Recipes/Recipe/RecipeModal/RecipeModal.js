import React from 'react';
import Modal from '../../../UI/Modal/Modal';
import styled from 'styled-components';
import ModalHeader from '../../../UI/Modal/ModalHeader/ModalHeader';

const StyledModal = styled(Modal)`
  max-width: 600px;
  padding: 1em 3em;
`;

const List = styled.ul`
  font-size: 1.1rem;
  margin-bottom: 1em;
`;

const ListHeader = styled.h6`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

const ListElement = styled.li`
  margin-bottom: 0.2em;
  margin-left: 1em;
`;

const RecipeModal = (props) => {
  return (
    <StyledModal show={props.open} clickedBackdrop={props.handleClose}>
      <ModalHeader>{props.label}</ModalHeader>
      <List>
        <ListHeader>Ingredients:</ListHeader>
        {props.ingredients.map((el, index) => (
          <ListElement key={index}>{el}</ListElement>
        ))}
      </List>
      <List>
        <ListHeader>Nutrients:</ListHeader>
        {props.nutrients.map((el, index) => (
          <ListElement key={index}>
            {el.label}: {el.total.toFixed(2)} {el.unit} ({Math.round(el.daily)}%
            daily)
          </ListElement>
        ))}
      </List>
    </StyledModal>
  );
};

export default RecipeModal;
