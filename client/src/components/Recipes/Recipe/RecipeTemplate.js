import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeModal from './RecipeModal/RecipeModal';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

import placeholder from './placeholder.png';

const Container = styled.div`
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.light};
  margin: 10px;
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  flex-grow: 1;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 99%;
  margin-bottom: 0.1em;
`;

const Source = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5em;
`;

const Url = styled.a.attrs(() => ({ target: '_blank' }))`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Info = styled.p`
  font-size: 1rem;
  margin-bottom: 0.2em;
`;

const ButtonContainer = styled.div`
  display: flex;

  margin-top: auto;

  & *::first-child {
    margin-right: 10px;
  }
`;

const RecipeTemplate = ({
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
  button,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <RecipeModal
        open={modalOpen}
        handleClose={handleModalClose}
        label={label}
        ingredients={ingredients}
        nutrients={nutrients}
        dietLabels={dietLabels}
        healthLabels={healthLabels}
        cautions={cautions}
      ></RecipeModal>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <InnerContainer>
        <Header> {label} </Header>
        <Source>
          Source: <Url href={url}>{source}</Url>
        </Source>

        <Info>Calories: {Math.round(calories)}</Info>
        <Info>Time to make: {totalTime} minutes</Info>
      </InnerContainer>
      <ButtonContainer>
        <StyledButton primary onClick={handleModalOpen}>
          More Information
        </StyledButton>
        {button}
      </ButtonContainer>
    </Container>
  );
};

RecipeTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  dietLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  healthLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  cautions: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  calories: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  nutrients: PropTypes.arrayOf(PropTypes.object).isRequired,
  button: PropTypes.node,
};

export const WrapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  &:hover {
    transform: translateY(0);
  }
`;

export default RecipeTemplate;
