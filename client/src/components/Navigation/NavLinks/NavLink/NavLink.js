import styled from 'styled-components';

const NavLink = styled.a`
  cursor: pointer;

  padding: 1em 0;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkerLight};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 0.7em;
    padding: 0;

    width: auto;
    font-weight: 500;

    &:hover {
      background-color: transparent;
    }
  }
`;

export default NavLink;
