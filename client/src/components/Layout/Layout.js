import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const centerChildren = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
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

const InnerContainer = styled.div`
  width: 80%;
  max-width: ${(props) => props.maxWidth || '800px'};
  margin: 4em 0;
  border-radius: ${({ theme }) => theme.radius.medium};

  background-color: ${({ theme }) => theme.colors.light};
`;

const PaddingContainer = styled.div`
  padding: 2em 10%;
  ${(props) => (props.center ? centerChildren : '')}
`;

const Layout = ({ center, children, maxWidth }) => {
  return (
    <>
      <FakedFullContainer></FakedFullContainer>
      <Navbar></Navbar>
      <OutterContainer>
        <InnerContainer maxWidth={maxWidth}>
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
