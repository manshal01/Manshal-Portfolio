import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1e88e5;
  padding: 40px 20px; /* Increased vertical padding */
  text-align: center;

  p {
    font-size: 16px;
    color: #fff;
    margin: 0;
    margin-top: 20px; /* Added margin to the top */
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="footer-section">
      <div className="container">
        <p>&copy; 2023 Manshal Bhagat Portfolio | All rights reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
