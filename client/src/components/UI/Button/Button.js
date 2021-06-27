import styled, { css } from 'styled-components';

const dangerStyles = css`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.light};
`;

const primaryStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  background-color: green;
  color: ${({ theme }) => theme.colors.light};
`;

const darkStyles = css`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  text-align: center;
  cursor: pointer;
  padding: 0.9em 1.5em;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: white;
  text-transform: capitalize;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow: 1px 1px, 5px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(2px);
  }

  ${(props) => (props.danger ? dangerStyles : '')}
  ${(props) => (props.primary ? primaryStyles : '')}
  ${(props) => (props.dark ? darkStyles : '')}
`;

export default Button;
