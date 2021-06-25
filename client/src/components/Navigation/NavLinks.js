import React from 'react';
import styled, { css } from 'styled-components';

import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const Burger = styled.div`
  cursor: pointer;
  display: block;

  & div {
    height: 2px;
    width: 25px;
    margin: 6px 0;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.light};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;

  top: ${({ theme }) => theme.navbarHeight};
  right: 0;
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  width: 100%;

  background-color: ${(props) => props.theme.colors.darkLight};

  overflow: auto;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: 0.2s transform ease-out;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: static;
    flex-direction: row;
    height: 100%;
    align-items: center;
    width: auto;
    background-color: transparent;
    transform: translateX(0%);
    transition: none;
  }
`;

const hoveredLink = css`
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light};
`;
const activeLink = css`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${(props) => props.theme.colors.dark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 400;

  cursor: pointer;
  padding: 1.5em 1em;

  color: ${({ theme }) => theme.colors.lightDark};

  &:hover {
    ${hoveredLink}
  }

  &:active {
    ${activeLink}
  }

  ${(props) => (props.active ? activeLink : '')}

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5em;
    position: relative;
    height: 100%;

    width: auto;
  }
`;

const NavLinks = ({
  isAuthenticated,
  handleToSearch,
  handleToFavorites,
  handleToRecipes,
  handleLoginOpen,
  handleRegisterOpen,
  logout,
  open,
  toggleOpen,
}) => {
  let location = useLocation();

  const searchActive = location.pathname === '/';
  const recipesActive = location.pathname === '/recipes';
  const favoritesActive = location.pathname === '/favorites';

  let navLinks;
  if (isAuthenticated) {
    navLinks = (
      <>
        <Container open={open}>
          <NavLink onClick={handleToSearch} active={searchActive}>
            Search
          </NavLink>
          <NavLink onClick={handleToRecipes} active={recipesActive}>
            Recipes
          </NavLink>
          <NavLink onClick={handleToFavorites} active={favoritesActive}>
            Favorites
          </NavLink>
          <NavLink onClick={logout}>Logout</NavLink>
        </Container>
      </>
    );
  } else {
    navLinks = (
      <>
        <Container open={open}>
          <NavLink onClick={handleToSearch} active={searchActive}>
            Search
          </NavLink>
          <NavLink onClick={handleToRecipes} active={recipesActive}>
            Recipes
          </NavLink>

          <NavLink onClick={handleLoginOpen}>Login</NavLink>
          <NavLink onClick={handleRegisterOpen}>Register</NavLink>
        </Container>
      </>
    );
  }
  return (
    <>
      {navLinks}
      <Burger onClick={toggleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </>
  );
};

NavLinks.propTypes = {
  isAuthenticated: PropTypes.bool,
  handleToSearch: PropTypes.func.isRequired,
  handleToFavorites: PropTypes.func.isRequired,
  handleToRecipes: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  handleRegisterOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default NavLinks;
