// ContactSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Contact_back.jpg';
import { postFormData } from './api'; // Updated import statement

const ContactContainer = styled.section`
  padding: 120px 0;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 30px;
  }

  form {
    margin-bottom: 30px;

    .form-group {
      margin-bottom: 15px;

      label {
        font-size: 18px;
        color: #555;
        display: block;
      }

      input[type='text'],
      input[type='email'],
      input[type='phone'],
      textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      textarea {
        height: 150px;
      }
    }

    button[type='submit'] {
      font-size: 16px;
      font-weight: bold;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  ul {
    li {
      font-size: 16px;
      color: #555;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;

    h2 {
      font-size: 28px;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    form {
      .form-group {
        label {
          font-size: 16px;
        }

        input[type='text'],
        input[type='email'],
        input[type='phone'],
        textarea {
          font-size: 14px;
        }
      }

      button[type='submit'] {
        font-size: 14px;
        padding: 8px 16px;
      }
    }

    ul {
      li {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
`;

const StyledContactSection = styled.div`
  .contact-section {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 15px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .btn-primary {
    background-color: #ff6b6b;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li:before {
    content: "\2022";
    color: #ff6b6b;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post form data to the backend
      const result = await postFormData(formData);
      console.log('Form submitted successfully:', result);

      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <StyledContactSection>
      <ContactContainer id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Feel free to get in touch with me for any inquiries or project collaborations.</p>
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <p>Contact Information:</p>
              <ul>
                <li>Email: Manshalbhagat2@gmail.com</li>
                <li>Phone: +91-9850599680</li>
                <li>Address: Near Vasudev Metro station rajendra nagar, Nagpur,India</li>
              </ul>
            </div>
          </div>
        </div>
      </ContactContainer>
    </StyledContactSection>
  );
};

export default ContactSection;
