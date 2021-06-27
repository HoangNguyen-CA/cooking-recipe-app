import React from 'react';
import styled, { css } from 'styled-components';

import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { FaRegUserCircle } from 'react-icons/fa';

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

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const ResponsiveContainer = styled.div`
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

const lightColor = css`
  color: ${({ theme }) => theme.colors.light};
`;

const activeNavLink = css`
  background-color: ${(props) => props.theme.colors.dark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary} !important;
  ${lightColor}
`;

const navLinkStyles = css`
  font-size: 1rem;
  font-weight: 400;

  cursor: pointer;

  display: flex;
  align-items: center;
  position: relative;

  width: auto;
  color: ${({ theme }) => theme.colors.lightDark};
`;

const ResponsiveNavLink = styled.a`
  ${navLinkStyles};
  padding: 1.5em 1em;
  height: auto;

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
    ${lightColor}
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 1em;
    height: 100%;
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.light};
    }
    &:active {
      ${activeNavLink}
    }
    ${(props) => (props.active ? activeNavLink : '')}
  }
`;

const UserLink = styled.div`
  ${navLinkStyles}
  height: 100%;

  padding: 0 1.4em;
  &:hover,
  &:active {
    ${lightColor}
  }

  ${(props) => (props.active ? lightColor : '')}
`;

const UserIcon = styled(FaRegUserCircle)`
  height: 25px;
  width: auto;
`;

const UserContent = styled.div`
  position: absolute;
  padding: 1em;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.medium};

  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.darkLight};
  top: calc(100% + 10px);
  right: 10px;
  width: auto;
`;

const UserContentLabel = styled.p`
  ${navLinkStyles}
  ${lightColor}
  justify-content: center;
  cursor: auto;
  text-align: center;
  width: 100%;
`;

const UserContentLink = styled.a`
  ${navLinkStyles}
  justify-content: center;

  margin-top: 1em;

  position: static;

  &:hover,
  &:active {
    ${lightColor}
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
  userOpen,
  setUserOpen,
  user,
}) => {
  let location = useLocation();

  const searchActive = location.pathname === '/';
  const recipesActive = location.pathname === '/recipes';
  const favoritesActive = location.pathname === '/favorites';

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleUserLinkClicked = (e) => {
    stopPropagation(e);
    setUserOpen(!userOpen);
  };

  let navLinks;
  if (isAuthenticated) {
    navLinks = (
      <>
        <ResponsiveContainer open={open}>
          <ResponsiveNavLink onClick={handleToSearch} active={searchActive}>
            Search
          </ResponsiveNavLink>
          <ResponsiveNavLink onClick={handleToRecipes} active={recipesActive}>
            Recipes
          </ResponsiveNavLink>
          <ResponsiveNavLink
            onClick={handleToFavorites}
            active={favoritesActive}
          >
            Favorites
          </ResponsiveNavLink>
        </ResponsiveContainer>

        <UserLink onClick={handleUserLinkClicked} active={userOpen}>
          <UserIcon />
        </UserLink>
        <UserContent show={userOpen} onClick={stopPropagation}>
          <UserContentLabel>{user.name}</UserContentLabel>
          <UserContentLabel>{user.email}</UserContentLabel>
          <UserContentLink onClick={logout}>Logout</UserContentLink>
        </UserContent>
      </>
    );
  } else {
    navLinks = (
      <>
        <ResponsiveContainer open={open}>
          <ResponsiveNavLink onClick={handleToSearch} active={searchActive}>
            Search
          </ResponsiveNavLink>
          <ResponsiveNavLink onClick={handleToRecipes} active={recipesActive}>
            Recipes
          </ResponsiveNavLink>
          <ResponsiveNavLink onClick={handleLoginOpen}>
            Sign In
          </ResponsiveNavLink>
          <ResponsiveNavLink onClick={handleRegisterOpen}>
            Register
          </ResponsiveNavLink>
        </ResponsiveContainer>
      </>
    );
  }
  return (
    <>
      <MainContainer>
        {navLinks}
        <Burger onClick={toggleOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
      </MainContainer>
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
  userOpen: PropTypes.bool.isRequired,
  setUserOpen: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default NavLinks;
