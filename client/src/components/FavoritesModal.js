import React, { useState } from 'react';
import {
  Nav,
  Modal,
  Button,
  Form,
  FormControl,
  FormLabel,
  Alert
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../actions/errorActions';
import { getFavorites } from '../actions/userActions';
import uuid from 'uuid';
import Favorite from './Favorite';

export default function FavoritesModal() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.user.favorites);
  const isLoading = useSelector(state => state.user.loading);

  const handleOpen = () => {
    dispatch(getFavorites());
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <>
      <Nav.Link onClick={handleOpen}>Favorites</Nav.Link>

      <Modal show={modal} onHide={handleClose} animation={false} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isLoading ? (
            favorites.map(fav => {
              return (
                <Favorite
                  key={uuid()}
                  image={fav.image}
                  label={fav.label}
                  url={fav.url}
                  source={fav.source}
                  dietLabels={fav.dietLabels}
                  healthLabels={fav.healthLabels}
                  cautions={fav.cautions}
                  ingredients={fav.ingredients}
                  calories={fav.calories}
                  totalTime={fav.totalTime}
                  nutrients={fav.nutrients}
                  _id={fav._id}
                ></Favorite>
              );
            })
          ) : (
            <p className='lead'>Loading...</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
