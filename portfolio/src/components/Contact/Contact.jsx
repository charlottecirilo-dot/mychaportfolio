import React, { useState } from 'react';
import '../../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to backend)
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🔗' },
    { name: 'LinkedIn', url: '#', icon: '🔗' },
    { name: 'Twitter', url: '#', icon: '🔗' },
    { name: 'Email', url: 'mailto:john@example.com', icon: '📧' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="divider"></div>
        
        <div className="contact-wrapper">
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
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h3>Other ways to reach me</h3>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <h4>Email</h4>
                <p><a href="mailto:john@example.com">john@example.com</a></p>
              </div>
              
              <div className="detail-item">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
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
