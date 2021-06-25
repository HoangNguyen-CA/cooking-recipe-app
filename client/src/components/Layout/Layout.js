import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const centerChildren = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 4em 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

const PaddingContainer = styled.div`
  padding: 2em 10%;
  ${(props) => (props.center ? centerChildren : '')}
`;

const Layout = ({ center, children }) => {
  return (
    <>
      <Navbar></Navbar>
      <OutterContainer>
        <InnerContainer>
          <PaddingContainer center={center}>{children}</PaddingContainer>
        </InnerContainer>
      </OutterContainer>
    </>
  );
};

export const Header = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.3em;
`;

export const EmptyMessage = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.danger};
  text-transform: uppercase;
`;

Layout.propTypes = {
  center: PropTypes.bool,
};

export default Layout;
