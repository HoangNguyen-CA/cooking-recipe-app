import React from 'react';
import CheckBox from '../Forms/CheckBox';
import Label from '../Forms/Label';

import styled from 'styled-components';

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

const Header = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

const DietType = (props) => {
  return (
    <Container>
      <Header>Health Type:</Header>
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
    </Container>
  );
};

export default DietType;
