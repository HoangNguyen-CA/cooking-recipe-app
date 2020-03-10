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
  margin: 0 0 0.2rem 0;
`;

const Lead = styled.p`
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
`;
const Header = styled.h1`
  font-size: 2rem;
  font-family: Poppins;
`;

const Image = styled.img`
  display: cover;
  width: 80%;
  height: auto;
`;

const Link = styled.a`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const buttonStyle = {
  margin: '0.3rem 0 0.5rem 0',
  display: 'block'
};

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
    <div className='my-3 p-3 text-light bg-dark'>
      <Row>
        <Col xs={12} className='mb-2'>
          <Header className=''>{label}</Header>
        </Col>
        <Col xs={3}>
          <Image src={image} alt={label}></Image>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={4}>
              <Link href={url} rel='noreferrer noopener' target='_blank'>
                Source: {source}
              </Link>
              <Para>Calories: {Math.round(calories)}</Para>
              <Para style={{ marginBottom: 0 }}>Time to cook: {totalTime}</Para>
              <IngredientsModal
                custom={buttonStyle}
                ingredients={ingredients}
              ></IngredientsModal>

              <NutrientsModal
                nutrients={nutrients}
                custom={buttonStyle}
              ></NutrientsModal>
            </Col>
            <Col xs={4}>
              <Lead>Health Types</Lead>
              {healthLabels.map(name => {
                return <Para key={uuid()}>{name}</Para>;
              })}
            </Col>
            <Col xs={4}>
              {cautions.length === 0 ? <Para>None</Para> : ''}
              {cautions.map(name => {
                return <Para key={uuid()}>{name}</Para>;
              })}
              <Lead>Diet Type</Lead>
              {dietLabels.length === 0 ? <Para>None</Para> : ''}
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
