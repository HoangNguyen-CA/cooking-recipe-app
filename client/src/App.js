import React, { useEffect } from 'react';
import MainNavbar from './components/MainNavbar';
import SearchBar from './components/SearchBar';
import RecipesDisplay from './components/RecipesDisplay';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authActions';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <MainNavbar></MainNavbar>
      <SearchBar></SearchBar>
      <RecipesDisplay></RecipesDisplay>
    </>
  );
}

export default App;
