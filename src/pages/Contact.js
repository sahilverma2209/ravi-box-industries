import React, { useState } from 'react';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const whatsappMessage = `📦 *New Inquiry from Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Subject:* ${encodeURIComponent(subject)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919811038123?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page contact-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in Touch with Ravi Box Industries</p>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="section-container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Address</h3>
              <p>Plot at Kh No. 434/1, Budh Bajar</p>
              <p>Firni Road, Village Mundka</p>
              <p>New Delhi – 110041</p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Phone</h3>
              <div className="contact-phone-entry">
                <span className="contact-name">Ravi Verma</span>
                <a href="tel:+919811038123" className="contact-number">+91 98110 38123</a>
              </div>
              <div className="contact-phone-entry">
                <span className="contact-name">Rajkumar Yadav</span>
                <a href="tel:+918920759356" className="contact-number">+91 89207 59356</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/919811038123" target="_blank" rel="noopener noreferrer">+91 98110 38123</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:rbi_ravi@yahoo.co.in">rbi_ravi@yahoo.co.in</a></p>
              <p><a href="mailto:rbi.ravindersingh@gmail.com">rbi.ravindersingh@gmail.com</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="business-details">
            <h2 className="section-title">Business Details</h2>
            <div className="section-divider"></div>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Company Name</span>
                <span className="detail-value">Ravi Box Industries</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Proprietor</span>
                <span className="detail-value">Ravinder Singh Verma</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Established</span>
                <span className="detail-value">1996</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Firni Road, Village Mundka, New Delhi – 110041</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Nature of Business</span>
                <span className="detail-value">Manufacturer, Supplier &amp; Service Provider</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Products</span>
                <span className="detail-value">
                  Corrugated Boxes, Packaging Boxes, Storage Boxes, Kraft Paper
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Send Us a Message</h2>
          <div className="section-divider"></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fab fa-whatsapp" style={{ marginRight: '0.5rem' }}></i>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Find Us on the Map</h2>
          <div className="section-divider"></div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1750!2d77.02908!3d28.685088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzA2LjMiTiA3N8KwMDEnNDQuNyJF!5e0!3m2!1sen!2sin!4v1695600000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ravi Box Industries Location"
            ></iframe>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              href="https://www.google.com/maps/place/28%C2%B041'06.3%22N+77%C2%B001'44.7%22E/@28.6853062,77.027951,18.44z/data=!4m13!1m8!3m7!1s0x390d05e99a2757a5:0x805b990cc78523f6!2sMundka,+Delhi,+India!3b1!8m2!3d28.6823144!4d77.034937!16zL20vMGY1cG1m!3m3!8m2!3d28.685088!4d77.02908"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-directions" style={{ marginRight: '0.5rem' }}></i>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
