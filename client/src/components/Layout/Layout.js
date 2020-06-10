import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
    </>
  );
};

export default Layout;
