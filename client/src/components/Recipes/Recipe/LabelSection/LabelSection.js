import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  margin: 0.3em 0;
`;

const LabelHeader = styled.h6`
  font-size: 1.2rem;
`;

const LabelItem = styled.p`
  display: inline-block;
  padding: 0.2em 0.5em;
  margin: 0.2em;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-top: none;
  border-bottom: none;
`;

const LabelSection = (props) => {
  let Element;

  if (props.labels.length > 0) {
    Element = (
      <>
        <LabelHeader>{props.header}</LabelHeader>
        <LabelContainer>
          {props.labels.map((el) => (
            <LabelItem>{el}</LabelItem>
          ))}
        </LabelContainer>
      </>
    );
  } else {
    Element = null;
  }
  return <>{Element}</>;
};

export default LabelSection;
