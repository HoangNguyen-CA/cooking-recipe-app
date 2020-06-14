import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink/NavLink';
import NavLabel from './NavLink/NavLabel';

const StyledNavLinks = styled.div`
  display: flex;
`;

const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const NavLinks = (props) => {
  let navLinks;
  if (props.isAuthenticated) {
    navLinks = (
      <StyledNavLinks>
        <NavLabel>
          Logged in as{' '}
          <Emphasis>{props.user ? props.user.name : null}</Emphasis>{' '}
        </NavLabel>
        <NavLink onClick={props.handleToFavorites}>Favorites</NavLink>
        <NavLink onClick={props.handleToSearch}>Search</NavLink>
        <NavLink onClick={props.handleToRecipes}>Recipes</NavLink>
        <NavLink onClick={props.logout}>Logout</NavLink>
      </StyledNavLinks>
    );
  } else {
    navLinks = (
      <StyledNavLinks>
        <NavLink onClick={props.handleToSearch}>Search</NavLink>
        <NavLink onClick={props.handleToRecipes}>Recipes</NavLink>

        <NavLink onClick={props.handleLoginOpen}>Login</NavLink>
        <NavLink onClick={props.handleRegisterOpen}>Register</NavLink>
      </StyledNavLinks>
    );
  }
  return <>{navLinks}</>;
};

export default NavLinks;
