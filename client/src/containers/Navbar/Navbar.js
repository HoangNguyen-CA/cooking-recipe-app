import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Auth/RegisterModal';

import styled from 'styled-components';

import NavLinks from '../../components/Navigation/NavLinks';

import { setUserOpen } from '../../store/slices/userSlice';

import {
  login,
  logout,
  register,
  clearAuthErrors,
} from '../../store/slices/authSlice.js';

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.navbarHeight};
  background: ${({ theme }) => theme.colors.darkLight};
  @media ${({ theme }) => theme.breakpoints.tablet} {
  }
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  display: block;
  color: ${(props) => props.theme.colors.light};
`;

export class Navbar extends Component {
  state = {
    loginOpen: false,
    registerOpen: false,
    linksOpen: false,
  };

  handleLoginOpen = () => {
    this.props.clearAuthErrors();
    this.setState({ loginOpen: true });
    this.handleLinksClose();
  };
  handleLoginClose = () => this.setState({ loginOpen: false });

  handleRegisterOpen = () => {
    this.props.clearAuthErrors();
    this.setState({ registerOpen: true });
    this.handleLinksClose();
  };
  handleRegisterClose = () => this.setState({ registerOpen: false });

  handleToSearch = () => {
    this.props.history.push('/');
    this.handleLinksClose();
  };

  handleToRecipes = () => {
    this.props.history.push('/recipes');
    this.handleLinksClose();
  };

  handleToFavorites = () => {
    this.props.history.push('/favorites');
    this.handleLinksClose();
  };

  handleLogout = () => {
    this.props.logout();
    this.handleLinksClose();
  };

  handleLinksToggle = () => {
    this.setState((prevState) => {
      return { linksOpen: !prevState.linksOpen };
    });
  };

  handleLinksClose = () => {
    this.setState({ linksOpen: false });
  };

  static getDerivedStateFromProps(props) {
    if (props.isAuthenticated) {
      return { loginOpen: false, registerOpen: false };
    }
    return {};
  }
  render() {
    return (
      <>
        <LoginModal
          show={this.state.loginOpen}
          handleLoginClose={this.handleLoginClose}
          login={this.props.login}
        ></LoginModal>
        <RegisterModal
          show={this.state.registerOpen}
          handleRegisterClose={this.handleRegisterClose}
          register={this.props.register}
        ></RegisterModal>
        <Container>
          <Title>RecipeSearch</Title>
          <NavLinks
            open={this.state.linksOpen}
            toggleOpen={this.handleLinksToggle}
            handleLoginOpen={this.handleLoginOpen}
            handleRegisterOpen={this.handleRegisterOpen}
            isAuthenticated={this.props.isAuthenticated}
            logout={this.handleLogout}
            user={this.props.user}
            handleToSearch={this.handleToSearch}
            handleToRecipes={this.handleToRecipes}
            handleToFavorites={this.handleToFavorites}
            userOpen={this.props.userOpen}
            setUserOpen={this.props.setUserOpen}
          ></NavLinks>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userOpen: state.user.open,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserOpen: (open) => dispatch(setUserOpen(open)),

    login: (email, password) => dispatch(login({ email, password })),
    logout: () => dispatch(logout()),
    register: (username, email, password) =>
      dispatch(register({ name: username, email, password })),
    clearAuthErrors: () => dispatch(clearAuthErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
