import React, { Component } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import LoginModal from '../Auth/LoginModal';
import RegisterModal from '../Auth/RegisterModal';

import NavLinks from '../../components/Navigation/NavLinks/NavLinks';

import { login, logout, register } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 0.7em;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  display: block;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

export class Navbar extends Component {
  state = {
    loginOpen: false,
    registerOpen: false,
  };

  handleLoginOpen = () => this.setState({ loginOpen: true });
  handleLoginClose = () => this.setState({ loginOpen: false });

  handleRegisterOpen = () => this.setState({ registerOpen: true });
  handleRegisterClose = () => this.setState({ registerOpen: false });

  handleToSearch = () => {
    this.props.history.push('/');
  };

  handleToRecipes = () => {
    this.props.history.push('/recipes');
  };

  handleToFavorites = () => {
    this.props.history.push('/favorites');
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

        <StyledNavbar>
          <Title>Recipe Search</Title>
          <NavLinks
            handleLoginOpen={this.handleLoginOpen}
            handleRegisterOpen={this.handleRegisterOpen}
            isAuthenticated={this.props.isAuthenticated}
            logout={this.props.logout}
            user={this.props.user}
            handleToSearch={this.handleToSearch}
            handleToRecipes={this.handleToRecipes}
            handleToFavorites={this.handleToFavorites}
          ></NavLinks>
        </StyledNavbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login({ email, password })),
    logout: () => dispatch(logout()),
    register: (username, email, password) =>
      dispatch(register({ name: username, email, password })),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
