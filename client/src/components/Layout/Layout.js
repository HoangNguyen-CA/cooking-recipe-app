import React from 'react';
import Navbar from '../../containers/Controls/Navbar';

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
    </>
  );
};

export default Layout;
