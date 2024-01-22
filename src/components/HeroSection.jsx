import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/background.jpg';

const HeroContainer = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 230px 0;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #555;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>A showcase of my work and skills</p>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
