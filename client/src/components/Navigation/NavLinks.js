import React from 'react';
import styled from 'styled-components';
import Backdrop from '../UI/Backdrop/Backdrop';

import PropTypes from 'prop-types';

const MobileBackdrop = styled(Backdrop)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const Burger = styled.div`
  cursor: pointer;
  display: block;

  & div {
    height: 3px;
    width: 25px;
    margin: 4px;
    border-radius: 100px;
    background-color: black;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;

  min-height: auto;
  height: 100vh;
  z-index: 500;

  background-color: ${(props) => props.theme.colors.light};

  overflow: auto;

  font-size: 1.2rem;
  width: 12em;
  max-width: 50vw;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')};

  transition: 0.2s transform ease-out;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: static;
    flex-direction: row;
    font-size: 1rem;
    z-index: 0;

    height: auto;
    max-height: none;
    max-width: none;

    width: auto;

    background-color: transparent;
    transform: translateX(0%);
    transition: none;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  padding: 1em 0;
  text-align: center;

  color: ${(props) => props.theme.colors.dark};
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkerLight};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 0.7em;

    width: auto;
    font-weight: 500;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
`;

const NavLabel = styled.p`
  display: block;
  padding: 1em 0;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};

  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 0.7em;
    padding: 0;
  }
`;

const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const NavLinks = ({
  isAuthenticated,
  user,
  handleToSearch,
  handleToFavorites,
  handleToRecipes,
  handleLoginOpen,
  handleRegisterOpen,
  logout,
  open,
  toggleOpen,
}) => {
  let navLinks;
  if (isAuthenticated) {
    navLinks = (
      <>
        <Container open={open}>
          <NavLabel>
            Logged in as <Emphasis>{user ? user.name : null}</Emphasis>{' '}
          </NavLabel>
          <NavLink onClick={handleToSearch}>Search</NavLink>
          <NavLink onClick={handleToRecipes}>Recipes</NavLink>
          <NavLink onClick={handleToFavorites}>Favorites</NavLink>
          <NavLink onClick={logout}>Logout</NavLink>
        </Container>
      </>
    );
  } else {
    navLinks = (
      <>
        <Container open={open}>
          <NavLink onClick={handleToSearch}>Search</NavLink>
          <NavLink onClick={handleToRecipes}>Recipes</NavLink>

          <NavLink onClick={handleLoginOpen}>Login</NavLink>
          <NavLink onClick={handleRegisterOpen}>Register</NavLink>
        </Container>
      </>
    );
  }
  return (
    <>
      <MobileBackdrop show={open} clicked={toggleOpen}></MobileBackdrop>
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
  user: PropTypes.object,
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
