import React, { useState, useEffect } from 'react';
import '../Styles/ContactForm.scss'; // Adjust path as necessary

// import "./SocialMedia.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers or special symbols';
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.length > 300) {
      newErrors.message = 'Message cannot exceed 300 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  useEffect(() => {
    validate();
  }, [formData]);

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      alert('Spam detected');
      return;
    }
    if (validate()) {
      setIsSubmitting(true);
      // Add the code to send data to your backend here
      // Example:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({
        name: false,
        email: false,
        message: false
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'honeypot') setHoneypot(value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    return formData.name && formData.email && !errors.name && !errors.email && !errors.message;
  };


  const socialMediaLinks = [
    { link: "https://github.com/macb72", title: 'GitHub', logo: '/github.png' },
    { link: "https://www.linkedin.com/in/mohamed-arfat-shaikh-a21602151/", title: 'LinkedIn', logo: '/linkedin.png' },
    { link: "mailto:shaikharafad72@gmail.com", title: 'Email', logo: '/email.png' },
  ]

  return (
    <div className="contact-page">
      <div className="contact-details">
        <h2>Guidelines</h2>
        <ul>
          <li>Avoid including sensitive information.</li>
          <li>Your IP address may be logged for security purposes and to prevent spam. This information helps us manage and protect the integrity of the contact form.</li>
          <li>We value your privacy and handle all data with confidentiality.</li>
        </ul>

        <div className="social-media">
          <p>Feel free to reach me:</p>
          {socialMediaLinks.map((item, idx) => (
            <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.logo} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="contact-form-wrapper">
        <h2 className="contact-form-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${touched.name && errors.name ? 'error' : ''}`}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {touched.name && errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className={`form-group ${touched.email && errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className={`form-group ${touched.message && errors.message ? 'error' : ''}`}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {touched.message && errors.message && <p className="error-text">{errors.message}</p>}
          </div>
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={handleChange}
            className="honeypot"
          />
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className="submit-button"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div >
  );
};

export default ContactForm;
