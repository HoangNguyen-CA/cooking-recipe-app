import React from 'react';
import styled from 'styled-components';
import Label from '../../Forms/Label';
import Button from '../../UI/Button/Button';

import ExcludedItem from './ExcludedItem/ExcludedItem';

const ExcludeButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  display: block;
`;

const ItemsContainer = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  height: auto;
  background-color: ${(props) => props.theme.colors.light};
  min-height: 3.2em;
`;

const ExcludeIngredients = (props) => {
  const excludedArr = [...props.excludedItems];
  return (
    <>
      <ExcludeButton onClick={props.handleAddExcluded}>Exclude</ExcludeButton>

      <Label fontSize='1.1rem'>Ingredients Excluded:</Label>
      <ItemsContainer>
        {excludedArr.map((name, index) => (
          <ExcludedItem
            key={index}
            onClick={() => props.handleRemoveExcluded(name)}
          >
            {name}
          </ExcludedItem>
        ))}
      </ItemsContainer>
    </>
  );
};

export default ExcludeIngredients;
