import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: ${(props) => props.fontSize};
  text-transform: capitalize;
  width: 100%;

  & > * {
    margin-top: 0.3em;
  }
`;

export default StyledLabel;
