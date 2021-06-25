import React from 'react';
import CheckBox from '../Forms/CheckBox';
import Label from '../Forms/Label';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const BoxGroup = styled.div`
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 0.3em;
`;

const SideLabel = styled(Label)`
  margin: 0 0 0 0.3em;
`;

const Container = styled.div`
  margin: 0.8em 0;
`;

const Header = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

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
