import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink/NavLink';

import { Link } from 'react-router-dom';

const RouterLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const StyledNavLinks = styled.div`
  display: flex;
`;

const NavLabel = styled.p``;

const NavLinks = (props) => {
  let navLinks;
  if (props.isAuthenticated) {
    navLinks = (
      <StyledNavLinks>
        <RouterLink to='/'>
          <NavLink>Search</NavLink>
        </RouterLink>
        <RouterLink to='/recipes'>
          <NavLink>Recipes</NavLink>
        </RouterLink>
        <NavLabel>Logged in as {props.user ? props.user.name : ''} </NavLabel>
        <NavLink onClick={props.logout}>Logout</NavLink>
      </StyledNavLinks>
    );
  } else {
    navLinks = (
      <StyledNavLinks>
        <RouterLink to='/'>
          <NavLink>Search</NavLink>
        </RouterLink>
        <RouterLink to='/recipes'>
          <NavLink>Recipes</NavLink>
        </RouterLink>

        <NavLink onClick={props.handleLoginOpen}>Login</NavLink>
        <NavLink onClick={props.handleRegisterOpen}>Register</NavLink>
      </StyledNavLinks>
    );
  }
  return <>{navLinks}</>;
};

export default NavLinks;
