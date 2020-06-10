import React, { Component } from 'react';
/*
import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';
import LogoutModal from '../../components/auth/LogoutModal';
import FavoritesModal from '../../components/FavoritesModal';
*/
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoginModal from '../../components/Navigation/Modals/LoginModal';
import RegisterModal from '../../components/Navigation/Modals/RegisterModal';

import NavLinks from '../../components/Navigation/NavLinks/NavLinks';

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
        ></LoginModal>
        <RegisterModal
          show={this.state.registerOpen}
          handleRegisterClose={this.handleRegisterClose}
        ></RegisterModal>

        <StyledNavbar>
          <Title>Recipe Search</Title>
          <NavLinks
            handleLoginOpen={this.handleLoginOpen}
            handleRegisterOpen={this.handleRegisterOpen}
          ></NavLinks>
        </StyledNavbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
