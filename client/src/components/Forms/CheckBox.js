import React from 'react';
import styled from 'styled-components';

const Check = styled.input``;

const CheckBox = (props) => {
  return <Check {...props} type='checkbox'></Check>;
};

export default CheckBox;
