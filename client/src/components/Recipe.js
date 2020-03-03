import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../actions/userActions';
import uuid from 'uuid';
import IngredientsModal from './IngredientsModal';
import NutrientsModal from './NutrientsModal';

export default function Recipe({
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
  nutrients
}) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const recipe = {
      label,
      image,
      source,
      url,
      ingredients,
      dietLabels,
      healthLabels,
      cautions,
      calories,
      totalTime,
      nutrients
    };
    dispatch(addFavorite(recipe));
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
          <a href={url} rel='noreferrer noopener' target='_blank'>
            Source: {source}
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
              {cautions.length !== 0 ? (
                <>
                  <p className='lead'>Cautions</p>
                  {cautions.map(name => {
                    return <p key={uuid()}>{name}</p>;
                  })}
                </>
              ) : (
                ''
              )}
              <p className='lead'>Diet Type</p>
              {dietLabels.map(name => {
                return <p key={uuid()}>{name}</p>;
              })}
            </Col>
          </Row>
        </Col>
      </Row>
      <Button onClick={handleSubmit} className='mt-3' variant='success'>
        Add Recipe
      </Button>
    </div>
  );
}
