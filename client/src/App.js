import React, { useEffect } from 'react';
import MainNavbar from './components/MainNavbar';
import SearchBar from './components/SearchBar';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <MainNavbar></MainNavbar>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
