import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actions/userActions';
import uuid from 'uuid';
import IngredientsModal from './IngredientsModal';
import NutrientsModal from './NutrientsModal';

export default function Favorite({
  label,
  image,
  source,
  url,
  dietLabels,
  healthLabels,
  cautions,
  ingredients,
  calories,
  totalTime,
  nutrients,
  _id
}) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(removeFavorite(_id));
  };

  const imageStyle = {
    display: 'cover',
    width: '100%',
    height: 'auto'
  };
  return (
    <div className='bg-dark m-3 p-3 text-light'>
      <Row>
        <Col xs={12} className='mb-3'>
          <h3 className=''>{label}</h3>
          <a href={url} target='_blank'>
            source: {source}
          </a>
        </Col>
        <Col xs={3}>
          <img src={image} alt={label} style={imageStyle}></img>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={4}>
              <p className='lead'>Calories: {Math.round(calories)}</p>
              <p className='lead'>Time to cook: {totalTime}</p>
              <IngredientsModal ingredients={ingredients}></IngredientsModal>
              <br></br>
              <br></br>
              <NutrientsModal nutrients={nutrients}></NutrientsModal>
            </Col>
            <Col xs={4}>
              <p className='lead'>Health Types</p>
              {healthLabels.map(name => {
                return <p key={uuid()}>{name}</p>;
              })}
            </Col>
            <Col xs={4}>
              <p className='lead'>Cautions</p>
              {cautions.map(name => {
                return <p key={uuid()}>{name}</p>;
              })}
              <p className='lead'>Diet Type</p>
              {dietLabels.map(name => {
                return <p key={uuid()}>{name}</p>;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
      <Button onClick={handleSubmit} className='mt-3'>
        Remove
      </Button>
    </div>
  );
}
