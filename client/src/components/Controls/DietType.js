import React from 'react';
import styled from 'styled-components';
import Label from '../Forms/Label';
import RadioBox from '../Forms/RadioBox';

const SideLabel = styled(Label)`
  margin: 0 0 0 0.3em;
`;

const Container = styled.div`
  margin: 0.8em 0;
`;

const BoxGroup = styled.div`
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 0.3em;
`;

const nameAtr = 'hello';

const HealthType = (props) => {
  return (
    <Container>
      <BoxGroup>
        <RadioBox
          name={nameAtr}
          id='balanced'
          onChange={props.handleRadio}
          checked={props.dietField === 'balanced'}
        ></RadioBox>
        <SideLabel htmlFor='balanced'>Balanced</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <RadioBox
          name={nameAtr}
          id='highProtein'
          onChange={props.handleRadio}
          checked={props.dietField === 'highProtein'}
        ></RadioBox>
        <SideLabel htmlFor='highProtein'>High-Protein</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <RadioBox
          name={nameAtr}
          id='lowCarb'
          onChange={props.handleRadio}
          checked={props.dietField === 'lowCarb'}
        ></RadioBox>
        <SideLabel htmlFor='lowCarb'>Low-Carb</SideLabel>
      </BoxGroup>
      <BoxGroup>
        <RadioBox
          name={nameAtr}
          id='lowFat'
          onChange={props.handleRadio}
          checked={props.dietField === 'lowFat'}
        ></RadioBox>
        <SideLabel htmlFor='lowtFat'>Low-Fat</SideLabel>
      </BoxGroup>
    </Container>
  );
};

export default HealthType;
