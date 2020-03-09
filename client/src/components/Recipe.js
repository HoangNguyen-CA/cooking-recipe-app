import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../actions/userActions';
import uuid from 'uuid';
import IngredientsModal from './IngredientsModal';
import NutrientsModal from './NutrientsModal';
import styled from 'styled-components';

const Para = styled.p`
  font-size: 1.1rem;
`;

const Lead = styled.p`
  font-size: 1.3rem;
`;
const Header = styled.h1`
  font-size: 2rem;
  font-family: Poppins;
`;

const Image = styled.img`
  display: cover;
  width: 100%;
  height: auto;
`;

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

  return (
    <div className='bg-dark m-3 p-3 text-light'>
      <Row>
        <Col xs={12} className='mb-3'>
          <Header className=''>{label}</Header>
          <a href={url} rel='noreferrer noopener' target='_blank'>
            Source: {source}
          </a>
        </Col>
        <Col xs={3}>
          <Image src={image} alt={label}></Image>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={4}>
              <Lead>Calories: {Math.round(calories)}</Lead>
              <Lead>Time to cook: {totalTime}</Lead>
              <IngredientsModal ingredients={ingredients}></IngredientsModal>
              <br></br>
              <br></br>
              <NutrientsModal nutrients={nutrients}></NutrientsModal>
            </Col>
            <Col xs={4}>
              <Lead>Health Types</Lead>
              {healthLabels.map(name => {
                return <Para key={uuid()}>{name}</Para>;
              })}
            </Col>
            <Col xs={4}>
              {cautions.length !== 0 ? (
                <>
                  <Lead>Cautions</Lead>
                  {cautions.map(name => {
                    return <Para key={uuid()}>{name}</Para>;
                  })}
                </>
              ) : (
                ''
              )}
              <Lead>Diet Type</Lead>
              {dietLabels.map(name => {
                return <Para key={uuid()}>{name}</Para>;
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
