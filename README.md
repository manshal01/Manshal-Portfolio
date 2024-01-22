# Personal-portfolio  
Welcome to my personal portfolio website! I am thrilled to present my journey as a passionate and innovative I.T engineer . This website showcases a collection of my work, experiences, and achievements, providing a glimpse into my skills and personality.
Deploy Link: manshal-bhagat-portfolio.netlify.app
Here's an example of a responsive modern portfolio website using React.js with Vite and Bootstrap. This code includes the navbar, hero section, about section, services, contact, and footer.


![Screenshot (20)](https://github.com/manshal01/Personal-Portfolio-website/assets/93897590/e04240d0-790e-4a42-b825-361cbf180a8f)



To get started, make sure you have Node.js installed on your computer. Then, create a new directory for your project and navigate to it in your terminal. Run the following commands to set up the project:


![image](https://github.com/manshal01/Personal-Portfolio-website/assets/93897590/a5747c5d-dcfd-4b8d-9d25-a369fa6ad389)


Next, replace the content of the src/Main.js file with the following code:

Install all depencies:



![image](https://github.com/manshal01/Personal-Portfolio-website/assets/93897590/29cfa3e1-2936-490d-9e8a-1dc5d345a6f9)



Let's go through the code line by line to understand its structure and functionality:

jsx
Copy code
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
The code starts by importing the necessary modules. React is imported from the 'react' library, which is required to create React components. The second import statement imports the Bootstrap CSS stylesheet.
jsx
Copy code
function App() {
  return (
    <div>
      {/* ... */}
    </div>
  );
}
The code defines a functional component named App. Functional components are one of the ways to create React components. This component returns JSX, which is a syntax extension of JavaScript used to describe the UI elements.
jsx
Copy code
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">Portfolio</a>
    {/* ... */}
  </div>
</nav>
This part of the code defines the navigation bar using Bootstrap's CSS classes. The navigation bar includes a brand name ("Portfolio") and a responsive button for toggling the navigation links on smaller screens.
jsx
Copy code
<header className="hero-section">
  <div className="container">
    <h1>Welcome to My Portfolio</h1>
    <p>A showcase of my work and skills</p>
  </div>
</header>
The header section is defined with the class hero-section. It contains a title ("Welcome to My Portfolio") and a short description.
jsx
Copy code
<section id="about" className="about-section">
  <div className="container">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis justo in lectus vehicula cursus.</p>
  </div>
</section>
The "About Me" section is defined with the class about-section. It contains a title and a paragraph describing the person's background or skills.
jsx
Copy code
<section id="services" className="services-section">
  <div className="container">
    <h2>Services</h2>
    {/* ... */}
  </div>
</section>

![image](https://github.com/manshal01/Personal-Portfolio-website/assets/93897590/7bbeb6bb-014b-4e17-8fae-5ddae5297586)


The "Services" section is defined with the class services-section. It contains a title and a grid layout of cards representing different services (Web Design, Web Development, Graphic Design).
jsx
Copy code
<section id="contact" className="contact-section">
  <div className="container">
    <h2>Contact Me</h2>
    {/* ... */}
  </div>
</section>
The "Contact Me" section is defined with the class contact-section. It contains a title and a contact form (Name, Email, Message) along with contact information (Email, Phone, Address) displayed in a two-column layout.
jsx
Copy code

![image](https://github.com/manshal01/Personal-Portfolio-website/assets/93897590/380722c9-514e-45bd-aca6-2af72da8500f)


<footer className="footer-section">
  <div className="container">
    <p>&copy; 2023 My Portfolio. All rights reserved.</p>
  </div>
</footer>
The footer section is defined with the class footer-section. It includes a copyright notice.
jsx
Copy code
export default App;
The App component is exported as the default export, which means it can be imported and used in other parts of the application.
Overall, this code represents a basic portfolio website structure with navigation, header, about, services, contact, and footer sections. The actual content and functionality (e.g., links, form submission, routing) would need to be added separately depending on the requirements of the specific portfolio website.
