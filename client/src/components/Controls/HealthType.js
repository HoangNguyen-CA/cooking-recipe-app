import React from 'react';
import CheckBox from '../Forms/CheckBox';

import { Header, BoxGroup, SideLabel, Container } from './SharedStyles';

import PropTypes from 'prop-types';

const HealthType = ({ healthFields, handleCheck }) => {
  const healthElements = [];

  for (const health in healthFields) {
    const id = health; // DO NOT CHANGE

    healthElements.push(
      <BoxGroup key={id}>
        <CheckBox
          id={id}
          checked={healthFields[health]}
          onChange={handleCheck}
        ></CheckBox>
        <SideLabel htmlFor={id}>{health}</SideLabel>
      </BoxGroup>
    );
  }
  return (
    <Container>
      <Header>Health Type:</Header>
      {healthElements}
    </Container>
  );
};

HealthType.propTypes = {
  healthFields: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default HealthType;
