import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeModal from './RecipeModal/RecipeModal';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

import placeholder from './placeholder.png';

const Container = styled.div`
  max-width: 330px;

  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  box-shadow: 7px 7px ${({ theme }) => theme.colors.darkLight};
`;

const InnerContainer = styled.div`
  flex-grow: 1;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.colors.darkLight};
  & > * + * {
    margin-top: 0.5em;
  }
`;

const Header = styled.h3`
  font-size: 1.7rem;
  display: inline;
  color: ${({ theme }) => theme.colors.dark};

  letter-spacing: 1px;
  font-weight: 400;
  line-height: 120%;
`;

const Source = styled.p`
  font-size: 1rem;
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
`;

const ButtonContainer = styled.div`
  display: flex;
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
        <Image
          src={image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholder;
          }}
        ></Image>
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
  width: 100%;
  max-width: 1980px;

  margin: -2em;
  & > * {
    margin: 2em;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  &:hover {
    transform: translateY(0);
  }
`;

export default RecipeTemplate;
