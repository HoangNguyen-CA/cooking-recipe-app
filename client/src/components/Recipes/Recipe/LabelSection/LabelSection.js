import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const LabelContainer = styled.div`
  margin: 0.3em 0;
`;

const LabelHeader = styled.h6`
  font-size: 1.2rem;
`;

const LabelItem = styled.p`
  display: inline-block;
  padding: 0.3em 0.7em;
  margin: 0.2em;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
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
