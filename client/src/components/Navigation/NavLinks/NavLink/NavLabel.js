import styled from 'styled-components';

const NavLabel = styled.p`
  flex-shrink: 0;
  display: block;
  padding: 1em 0;
  text-align: center;

  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 0.7em;
    padding: 0;
  }
`;

export default NavLabel;
