import React, { useEffect } from 'react';
import MainNavbar from './components/MainNavbar';
import SearchBar from './components/SearchBar';
import RecipesDisplay from './components/RecipesDisplay';
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
      <RecipesDisplay></RecipesDisplay>
      <h1>TEST</h1>
    </>
  );
}

export default App;
