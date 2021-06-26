import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeModal from './RecipeModal/RecipeModal';
import Button from '../../UI/Button/Button';
import LabelSection from './LabelSection/LabelSection';
import PropTypes from 'prop-types';

const Display = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 2em 0;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.medium};
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
  border-radius: ${({ theme }) => theme.radius.medium};
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

const StyledButton = styled(Button)`
  margin-top: 1em;
`;

const LabelsContainer = styled.div`
  margin-top: 0.5em;
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
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Display>
      <RecipeModal
        open={modalOpen}
        handleClose={handleModalClose}
        label={label}
        ingredients={ingredients}
        nutrients={nutrients}
      ></RecipeModal>
      <Header> {label} </Header>
      <Source>
        Source: <Url href={url}>{source}</Url>
      </Source>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Info>Calories: {calories}</Info>
      <Info>Time to make: {totalTime} minutes</Info>

      <LabelsContainer>
        <LabelSection header='Diet Types:' labels={dietLabels}></LabelSection>
        <LabelSection
          header='Health Types:'
          labels={healthLabels}
        ></LabelSection>
        <LabelSection header='Cautions:' labels={cautions}></LabelSection>
      </LabelsContainer>

      <StyledButton primary onClick={handleModalOpen}>
        Ingredients & Nutrients
      </StyledButton>
      {children}
    </Display>
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
  children: PropTypes.node,
};

export default RecipeTemplate;
