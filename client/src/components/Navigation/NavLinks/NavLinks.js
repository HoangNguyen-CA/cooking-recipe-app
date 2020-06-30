import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink/NavLink';
import NavLabel from './NavLink/NavLabel';

const Burger = styled.div`
  cursor: pointer;
  display: block;

  & div {
    height: 0.25em;
    width: 1.7em;
    margin: 0.3em;
    background-color: black;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  min-height: auto;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.light};

  overflow: auto;

  font-size: 1.2rem;
  width: 12em;
  max-width: 50vw;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')};

  transition: 0.2s ease-out;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: static;
    flex-direction: row;
    font-size: 1rem;

    height: auto;
    max-height: none;

    width: auto;
    max-width: none;

    background-color: transparent;
    transform: translateX(0%);
    transition: none;
  }
`;

const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const NavLinks = (props) => {
  let navLinks;
  if (props.isAuthenticated) {
    navLinks = (
      <StyledNavLinks open={props.open}>
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
      <StyledNavLinks open={props.open}>
        <NavLink onClick={props.handleToSearch}>Search</NavLink>
        <NavLink onClick={props.handleToRecipes}>Recipes</NavLink>

        <NavLink onClick={props.handleLoginOpen}>Login</NavLink>
        <NavLink onClick={props.handleRegisterOpen}>Register</NavLink>
      </StyledNavLinks>
    );
  }
  return (
    <>
      {navLinks}
      <Burger onClick={props.toggleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </>
  );
};

export default NavLinks;
