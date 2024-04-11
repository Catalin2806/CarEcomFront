import React, { useState } from 'react';
import Header from "@/components/Header";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data is: ', formData);
  };
  const style = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    formHeader: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px', 
    },
    textarea: {
      width: '100%',
      height: '150px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    buttonContainer: {
      textAlign: 'right',
      marginTop: '20px', 
    },
    submitButton: {
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }
  };

  return (
    <>
    <Header/>
    <div style={style.container}>
      <h1 style={style.formHeader}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={style.formGroup}>
          <label style={style.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            style={style.input}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div style={style.formGroup}>
          <label style={style.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            style={style.input}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={style.formGroup}>
          <label style={style.label} htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            style={style.textarea}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div style={style.buttonContainer}>
          <button type="submit" style={style.submitButton}>
            Send Message
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactPage;