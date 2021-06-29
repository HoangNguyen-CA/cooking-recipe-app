import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const LabelContainer = styled.div`
  margin: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
`;

const LabelHeader = styled.h6`
  font-size: 1.3rem;
`;

const LabelItem = styled.p`
  display: inline-block;
  padding: 0.5em 0.8em;
  margin: 0.3em;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 2px solid ${(props) => props.theme.colors.lightDark};
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
