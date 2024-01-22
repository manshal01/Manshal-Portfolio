import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 100px 0;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px; /* Increased the grid gap for better spacing */
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  .title {
    font-size: 28px; /* Increased font size */
    margin-bottom: 20px; /* Increased margin */
    color: #333;
  }

  .details {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px; /* Increased margin */
    color: #555;
  }
`;

const SkillContent = styled.div`
  .title {
    font-size: 28px; /* Increased font size */
    margin-bottom: 31px;
    color: #333;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px; /* Increased grid gap for better spacing */
    font-size: 18px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .skills__skill {
    padding: 15px; /* Increased padding */
    background-color: #4285f4;
    border-radius: 6px; /* Increased border radius */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #fff;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about" className="about-section">
      <Container>
        <h2>About Me</h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <MainContent>
          <AboutContent>
            <h3 className="title">Get to know me!</h3>
            <div className="details">
              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to
              the success of the overall product. Check out some of my work in the Projects section.

              I also like sharing content related to the stuff that I have learned over the years in Web
              Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development and Programming

              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity
              that matches my skills and experience then don't hesitate to contact me.
            </div>
          </AboutContent>
          <SkillContent>
            <h3 className="title">Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Java</div>
              <div className="skills__skill">Basic Python</div>
              <div className="skills__skill">React.js</div>
              <div className="skills__skill">SQL</div>
            </div>
          </SkillContent>
        </MainContent>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
