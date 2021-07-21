import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.3em;
  margin-top: 0.4em;
  font-size: ${(props) => props.fontSize};
  text-transform: capitalize;
  width: 100%;

  & > * {
    margin-top: 0.3em;
  }
`;

export default StyledLabel;
