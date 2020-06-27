import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import ErrorDisplay from '../../containers/ErrorDisplay/ErrorDisplay';

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <ErrorDisplay></ErrorDisplay>
      {props.children}
    </>
  );
};

export default Layout;
