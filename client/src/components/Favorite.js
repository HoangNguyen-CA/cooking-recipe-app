import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actions/userActions';
import uuid from 'uuid';

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
  return (
    <div className='bg-success m-3'>
      <p className='lead'>{label}</p>
      <img src={image} alt={label}></img>
      <a href={url} target='_blank'>
        source: {source}
      </a>
      <div className='bg-light'>
        {healthLabels.map(name => {
          return <p key={uuid()}>{name}</p>;
        })}
        <hr></hr>
        {cautions.map(name => {
          return <p key={uuid()}>{name}</p>;
        })}
        <hr></hr>
        {ingredients.map(name => {
          return <p key={uuid()}>{name}</p>;
        })}
        <hr></hr>
        {dietLabels.map(name => {
          return <p key={uuid()}>{name}</p>;
        })}

        <hr></hr>
        <p>calories: {calories}</p>
        <p>time to cook: {totalTime}</p>
      </div>
      <Button onClick={handleSubmit}>Remove</Button>
    </div>
  );
}
