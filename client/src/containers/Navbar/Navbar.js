import React, { Component } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import LoginModal from '../Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';

import NavLinks from '../../components/Navigation/NavLinks/NavLinks';

import { login, logout, register } from '../../store/actions/authActions';

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

  render() {
    /*
    if (this.props.isAuthenticated) {
      navItems = (
        <>
          <Nav.Item className='navbar-text text-success mr-3'>
            Logged in as {user.name}
          </Nav.Item>
          <FavoritesModal></FavoritesModal>
          <LogoutModal className=''></LogoutModal>
        </>
      );
    }
    */
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
