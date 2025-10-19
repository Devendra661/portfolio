import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = () => {
  const circles = Array.from({ length: 100 }, (_, i) => {
    const r = (i * 0.007).toFixed(3); // radius
    const begin = -(i * 0.007).toFixed(3) + 's'; // animation delay
    const color = `#ff${(i * 2).toString(16).padStart(2, '0')}00`; // gradient color

    return (
      <circle key={i} r={r} fill={color}>
        <animateMotion
          dur="5s"
          begin={begin}
          repeatCount="indefinite"
          path="M 23.8 0.5 C 17.5 -1.4 1.4 20.9 9.9 27.3 C 14.2 30.5 21.9 22.9 23.8 17.8 C 28 7 2.1 3.3 0.4 11.6 C -0.4 15.9 10 18.3 12.6 18.7 C 25.2 20.5 31.5 2.9 23.8 0.5 Z"
        />
      </circle>
    );
  });

  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 32 32" height={150} width={150}>
        {circles}
      </svg>
    </StyledWrapper>
  );
};

export default Loader;
