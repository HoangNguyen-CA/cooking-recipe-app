import React from 'react';
import RadioBox from '../Forms/RadioBox';
import { BoxGroup, SideLabel, Header, Container } from './SharedStyles';

import PropTypes from 'prop-types';

const nameAtr = 'dietTypes';

const DietType = ({ dietField, dietOptions, handleRadio }) => {
  const dietElements = dietOptions.map((diet) => {
    const id = diet; // DO NOT CHANGE
    return (
      <BoxGroup key={id}>
        <RadioBox
          name={nameAtr}
          id={id}
          onChange={handleRadio}
          checked={dietField === id}
        ></RadioBox>
        <SideLabel htmlFor={id}>{diet}</SideLabel>
      </BoxGroup>
    );
  });
  return (
    <Container>
      <Header>Diet Type: </Header>
      {dietElements}
    </Container>
  );
};

DietType.propTypes = {
  dietField: PropTypes.string.isRequired,
  handleRadio: PropTypes.func.isRequired,
  dietOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DietType;
