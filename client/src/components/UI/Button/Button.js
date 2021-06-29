import styled, { css } from 'styled-components';

const dangerStyles = css`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.light};
`;

const primaryStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const darkStyles = css`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const disabledStyles = css`
  background-color: ${({ theme }) => theme.colors.lightDark};
`;

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  text-align: center;
  cursor: pointer;
  padding: 0.9em 1.5em;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: 1.05rem;
  border: none;
  outline: none;
  background-color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 0 0);

  text-transform: capitalize;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  ${(props) => (props.danger ? dangerStyles : '')}
  ${(props) => (props.primary ? primaryStyles : '')}
  ${(props) => (props.dark ? darkStyles : '')}
  ${(props) => (props.disabled ? disabledStyles : '')}
`;

export default Button;
