import styled from 'styled-components';

const StyledTextInput = styled.input`
  width: 100%;
  padding: 0.5em 0.7em;
  border-radius: 3px;
  border: 1.5px solid #ccc;
  font-size: 1.1rem;

  &:focus {
    border: 1.5px solid #333;
  }
`;

export default StyledTextInput;
