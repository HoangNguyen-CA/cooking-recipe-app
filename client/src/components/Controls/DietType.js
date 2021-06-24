import React from 'react';
import styled from 'styled-components';
import Label from '../Forms/Label';
import RadioBox from '../Forms/RadioBox';

import { kebabize } from '../../shared/util';

import PropTypes from 'prop-types';

const SideLabel = styled(Label)`
  margin: 0 0 0 0.3em;
`;

const Container = styled.div`
  margin-top: 0.8em;
`;

const BoxGroup = styled.div`
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 0.3em;
`;

const Header = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

const nameAtr = 'dietTypes';

const DietType = ({ dietField, handleRadio }) => {
  const dietElements = ['balanced', 'highProtein', 'lowCarb', 'lowFat'].map(
    (diet) => {
      const id = `dietTypes/${diet}`;
      return (
        <BoxGroup key={id}>
          <RadioBox
            name={nameAtr}
            id={id}
            onChange={handleRadio}
            checked={dietField === id}
          ></RadioBox>
          <SideLabel htmlFor={id}>{kebabize(diet)}</SideLabel>
        </BoxGroup>
      );
    }
  );
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
};

export default DietType;
