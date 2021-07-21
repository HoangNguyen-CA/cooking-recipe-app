import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 4em 0;
`;

const FakedFullContainer = styled(OutterContainer)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -100;
`;

const Layout = ({ center, children, maxWidth }) => {
  return (
    <>
      <FakedFullContainer></FakedFullContainer>
      <Navbar></Navbar>
      <OutterContainer>{children}</OutterContainer>
    </>
  );
};

export const Header = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0.8em;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.light};

  text-align: center;
`;

export const EmptyMessage = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.danger};
  text-transform: uppercase;
  text-align: center;
`;

Layout.propTypes = {
  center: PropTypes.bool,
};

export default Layout;
