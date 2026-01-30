import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';

// 🔐 EMAILJS KEYS (HARDCODED – WORKING)
const SERVICE_ID = 'service_egvzgzz';
const TEMPLATE_ID = 'template_r4o4tao';
const PUBLIC_KEY = 'CQCzkKj00ozw8ps7E';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="divider"></div>

        <div className="contact-wrapper">
          {/* LEFT: FORM */}
          <div className="contact-form-section">
            <h3>Send me a message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="6"
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="contact-info">
            <h3>Other ways to reach me</h3>

            <div className="contact-details">
              <div className="detail-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:charlotte.cirilo@urios.edu.ph">
                    charlotte.cirilo@urios.edu.ph
                  </a>
                </p>
              </div>

              <div className="detail-item">
                <h4>Location</h4>
                <p>Regatta East Village, Ampayon, Butuan City</p>
              </div>

              <div className="detail-item">
                <h4>Response Time</h4>
                <p>Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
