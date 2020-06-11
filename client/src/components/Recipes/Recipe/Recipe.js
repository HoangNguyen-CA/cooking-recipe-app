import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  width: 100%;
  margin: 2em 0;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  padding: 1.5em;
`;

const Header = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

const Source = styled.p`
  font-size: 1.3rem;
`;

const Url = styled.a.attrs(() => ({ target: '_blank' }))`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue};
`;

const ImageContainer = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  margin: 1em 0;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;

const Info = styled.p`
  font-size: 1.2rem;
  margin-top: 0.2em;
`;

const Recipe = ({
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
  totalNutrients,
}) => {
  return (
    <Display>
      <Header> {label}</Header>
      <Source>
        Source: <Url href={url}>{source}</Url>
      </Source>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Info>Calories: {calories}</Info>
      <Info>Time to make: {totalTime} minutes</Info>
    </Display>
  );
};

export default Recipe;
