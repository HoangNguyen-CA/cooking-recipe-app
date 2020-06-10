import React from 'react';

import styled from 'styled-components';
import TextInput from './TextInput';

const StyledNumberInput = styled(TextInput)``;

const NumberInput = (props) => {
  return <StyledNumberInput {...props} type='number'></StyledNumberInput>;
};

export default NumberInput;
