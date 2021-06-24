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

/*

 <BoxGroup>
        <CheckBox
          id='vegan'
          checked={props.healthFields.vegan}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='vegan'>Vegan</SideLabel>
      </BoxGroup>

      <BoxGroup>
        <CheckBox
          id='vegetarian'
          checked={props.healthFields.vegetarian}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='vegetarian'>Vegetarian</SideLabel>
      </BoxGroup>

      <BoxGroup>
        <CheckBox
          id='sugarConscious'
          checked={props.healthFields.sugarConscious}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='sugarConscious'>Sugar-Conscious</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <CheckBox
          id='peanutFree'
          checked={props.healthFields.peatnutFree}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='peanutFree'>Peanut-Free</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <CheckBox
          id='treeNutFree'
          checked={props.healthFields.treeNutFree}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='treeNutFree'>Tree-Nut-Free</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <CheckBox
          id='alcoholFree'
          checked={props.healthFields.alcoholFree}
          onChange={props.handleCheck}
        ></CheckBox>
        <SideLabel htmlFor='alcoholFree'>Alcohol-Free</SideLabel>
      </BoxGroup>
      */
