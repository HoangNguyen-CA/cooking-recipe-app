import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 0.5em 0.5em;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: 1rem;
  border: none;
  outline: none;
  text-transform: uppercase;
`;

export default Button;
