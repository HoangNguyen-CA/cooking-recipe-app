import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: -5px;

  & > * {
    margin: 5px;
  }
`;

const LabelHeader = styled.h6`
  font-size: 1.3rem;
  margin-bottom: 0.2em;
`;

const LabelItem = styled.p`
  display: inline-block;
  padding: 0.5em 0.8em;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  border: 2px solid ${(props) => props.theme.colors.dark};
`;

const LabelSection = ({ labels, header }) => {
  let Element;

  if (labels.length > 0) {
    Element = (
      <>
        <LabelHeader>{header}</LabelHeader>
        <LabelContainer>
          {labels.map((el, index) => (
            <LabelItem key={index}>{el}</LabelItem>
          ))}
        </LabelContainer>
      </>
    );
  } else {
    Element = null;
  }
  return <>{Element}</>;
};

LabelSection.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.string.isRequired,
};
export default LabelSection;
