import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import Projects from './components/Projects.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
