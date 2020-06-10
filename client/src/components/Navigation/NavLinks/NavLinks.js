import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink/NavLink';

const StyledNavLinks = styled.div`
  display: flex;
`;

const NavLinks = (props) => {
  let navLinks;
  if (props.isAuthenticated) {
    navLinks = (
      <StyledNavLinks>
        <NavLink></NavLink>
      </StyledNavLinks>
    );
  } else {
    navLinks = (
      <StyledNavLinks>
        <NavLink onClick={props.handleLoginOpen}>Login</NavLink>
        <NavLink onClick={props.handleRegisterOpen}>Register</NavLink>
      </StyledNavLinks>
    );
  }
  return <>{navLinks}</>;
};

export default NavLinks;
