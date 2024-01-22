import React from "react";
import styled from "styled-components";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.jpg";

const ServicesContainer = styled.section`
  padding: 100px 0;
  background-color: #f8f9fa;

  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px; /* Increased the gap between cards */
  }

  .col-lg-4 {
    margin-bottom: 30px;
    flex: 0 0 30%;
    max-width: 30%;

    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #4285f4;
    color: #fff;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    .card-body {
      padding: 20px;

      h5 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  }
`;

const Projects = () => {
  return (
    <ServicesContainer id="Projects" className="Projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-lg-4">
            <div className="card">
              <img src={Project1} alt="Project 1 Preview" />
              <div className="card-body">
                <a
                  href="https://manshalfitlab.netlify.app/"
                  className="card-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>ManshalFitLab(Clone)</h5>
                </a>
                <p className="card-text">
                  This is a Healthfy website that deals with gyms exercises and health maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-4">
            <div className="card">
              <img src={Project2} alt="Project 2 Preview" />
              <div className="card-body">
                <a
                  href="https://github.com/manshal01/InfersyncPDFcompare/blob/main/README.md"
                  className="card-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Infersync PDF Compare</h5>
                </a>
                <p className="card-text">
                  This project involves the comparison of input PDFs and identifies similarities, generating a resultant PDF.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-4">
            <div className="card">
              <img src={Project3} alt="Project 3 Preview" />
              <div className="card-body">
                <a
                  href="https://github.com/manshal01/Fish-detection"
                  className="card-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Fish Detection </h5>
                </a>
                <p className="card-text">
                  It is a machine learning python project that predicts the species of an input image.
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-lg-4">
            <div className="card">
              <img src={Project4} alt="Project 4 Preview" />
              <div className="card-body">
                <a
                  href="https://github.com/manshal01/OIBSIP-Calculator"
                  className="card-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>OIBSIP-Calculator</h5>
                </a>
                <p className="card-text">This Contains a simple java scripts calculator was done for Oasis intership.</p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-lg-4">
            <div className="card">
              <img src={Project5} alt="Project 5 Preview" />
              <div className="card-body">
                <a
                  href="https://github.com/manshal01"
                  className="card-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Here is my more of Projects</h5>
                </a>
                <p className="card-text">Description of your project 2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Projects;
