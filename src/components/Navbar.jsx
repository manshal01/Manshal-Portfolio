import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: linear-gradient(to right, #667eea, #764ba2);
  padding: 20px;

  .navbar-brand {
    font-weight: bold;
    font-size: 24px;
    color: #fff;
  }

  .navbar-nav {
    display: flex;
    align-items: center;

    .nav-item {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }
    }

    .nav-link {
      color: #fff;
      font-weight: 500;
      font-size: 18px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #000;
        text-decoration: none;
      }
    }

    .btn-download-resume {
      background-color: #4285f4;
      border-color: #4285f4;
      font-weight: 500;

      &:hover {
        background-color: #357ae8;
        border-color: #357ae8;
      }
    }
  }

  @media (max-width: 768px) {
    .navbar-nav {
      flex-direction: column;

      .nav-item {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Manshal Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="Manshal Bhagat Resume.pdf"
                download="Manshal Bhagat Resume.pdf"
                className="btn btn-primary btn-download-resume"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
