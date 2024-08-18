import React, { useState } from 'react';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  return (
    <div className="contact-page">
      <div className="contact-details">
        <h2>Guidelines</h2>
        <ul>
          <li>Be clear and concise in your message.</li>
          <li>Provide valid contact information.</li>
          <li>Avoid including sensitive information.</li>
          <li>Check your message for errors before submitting.</li>
          <li>Your IP address may be logged for security purposes and to prevent spam. This information helps us manage and protect the integrity of the contact form.</li>
          <li>We value your privacy and handle all data with confidentiality.</li>
        </ul>
      </div>
      <div className="contact-form-wrapper">
        <h2 className="contact-form-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={handleChange}
            className="honeypot"
          />
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
