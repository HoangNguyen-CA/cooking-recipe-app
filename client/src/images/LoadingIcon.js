import React from 'react';
import styled from 'styled-components';

const Animated = styled.svg`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: relative;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingIcon() {
  return (
    <Animated
      width='100%'
      height='15rem'
      viewBox='0 0 188 188'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M80.7602 162.737C118.722 170.049 155.424 145.202 162.737 107.24C170.049 69.2777 145.202 32.5756 107.24 25.2635C69.2777 17.9514 32.5756 42.7981 25.2635 80.7602C17.9514 118.722 42.7981 155.424 80.7602 162.737Z'
        stroke='#E15B64'
        strokeWidth='20'
        strokeDasharray='329.87 113.96'
      />
    </Animated>
  );
}
