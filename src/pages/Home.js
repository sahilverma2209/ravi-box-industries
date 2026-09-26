import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section with Image Background */}
      <section className="hero-section hero-with-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/optimized-images/desktop/1.jpg)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Ravi Box Industries</h1>
          <p className="hero-tagline">
            Leading Corrugated Box &amp; Packaging Manufacturers since 1996
          </p>
          <p className="hero-subtitle">
            Manufacturer, Supplier &amp; Service Provider of Storage Boxes, Corrugated Boxes,
            Printed Boxes, High BF Kraft Paper &amp; more.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work Showcase - Right after hero */}
      <section className="section showcase-section">
        <div className="section-container">
          <h2 className="section-title">Our Work in Action</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            A glimpse at the quality packaging solutions we deliver to our clients every day.
          </p>
          <div className="showcase-grid">
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/3.jpg" />
                <img src="/optimized-images/desktop/3.jpg" alt="Custom packaging solutions" loading="lazy" />
              </picture>
            </div>
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/4.jpg" />
                <img src="/optimized-images/desktop/4.jpg" alt="Industrial storage boxes" loading="lazy" />
              </picture>
            </div>
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/5.jpg" />
                <img src="/optimized-images/desktop/5.jpg" alt="Premium packaging products" loading="lazy" />
              </picture>
            </div>
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/6.jpg" />
                <img src="/optimized-images/desktop/6.jpg" alt="Kraft paper products" loading="lazy" />
              </picture>
            </div>
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/7.jpg" />
                <img src="/optimized-images/desktop/7.jpg" alt="Packaging products" loading="lazy" />
              </picture>
            </div>
            <div className="showcase-item">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/10.jpg" />
                <img src="/optimized-images/desktop/10.jpg" alt="Quality packaging showcase" loading="lazy" />
              </picture>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/products" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section about-snippet">
        <div className="section-container">
          <h2 className="section-title">Who We Are</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            Established in <strong>1996</strong> in New Delhi, <strong>Ravi Box Industries</strong> is
            one of the leading businesses in Box Manufacturing. We are the most important Manufacturer,
            Supplier and Service Provider offering the best quality array of Storage Boxes,
            Printed Boxes, High BF Kraft Paper, and Printing Job Work. Over the course of our
            journey, we have established a firm foothold in the industry, servicing customers both local
            and from other parts of Delhi.
          </p>
          <Link to="/about" className="btn btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Services / What We Offer */}
      <section className="section services-section">
        <div className="section-container">
          <h2 className="section-title">What We Offer</h2>
          <div className="section-divider"></div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-box"></i>
              </div>
              <h3>Corrugated Boxes</h3>
              <p>
                Square, rectangular, and custom-sized corrugated boxes with excellent load-carrying
                and shock-absorbing capacity.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-print"></i>
              </div>
              <h3>Printed Boxes</h3>
              <p>
                High-quality printed corrugated boxes for branding and product presentation,
                available in brown and white board materials.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3>Storage Boxes</h3>
              <p>
                Durable storage solutions available in multiple sizes and designs, suitable for
                industrial and household purposes.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-boxes-stacked"></i>
              </div>
              <h3>Packaging Boxes</h3>
              <p>
                Comprehensive packaging solutions for various industries, manufactured with
                best quality materials and compact finish.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-scroll"></i>
              </div>
              <h3>High BF Kraft Paper</h3>
              <p>
                Superior quality kraft paper ideal for packaging applications, available
                in various grades and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-divider"></div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>28+ Years Experience</h3>
              <p>Established in 1996, we bring decades of expertise in packaging manufacturing.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality Assured</h3>
              <p>All materials are tested alongside quality norms to keep products excellent.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Modern Infrastructure</h3>
              <p>Huge and modern infrastructure with dedicated manufacturing and quality control units.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Customer-Centric</h3>
              <p>Customer satisfaction is as important as our products, driving our growing client base.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Safe Delivery</h3>
              <p>Waterproof packaging options ensure products reach you in perfect condition.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Easy Payments</h3>
              <p>Flexible payment options including debit cards, credit cards, EMI and net banking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Snippet */}
      <section className="section location-snippet">
        <div className="section-container">
          <div className="location-content">
            <div className="location-text">
              <h2 className="section-title">Visit Us</h2>
              <div className="section-divider"></div>
              <p>
                Located at <strong>Firni Road, Village Mundka, New Delhi – 110041</strong>, our establishment
                occupies a prominent location easily accessible by various modes of transport.
                We are a one-stop destination servicing customers both locally and from other parts of Delhi.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
