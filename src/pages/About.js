import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>About Ravi Box Industries</h1>
        <p>Trusted Packaging Manufacturers since 1996</p>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Company Overview</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            We, <strong>Ravi Box Industries</strong>, are the most important Manufacturer, Supplier and
            Service Provider established in <strong>1996</strong>, at Delhi, India. We are the biggest
            name in the market offering best quality array of <strong>Storage Boxes,
            Printed Boxes, High BF Kraft Paper</strong> and <strong>Printing Job Work</strong>.
          </p>
          <p className="section-text">
            Ravi Box Industries in New Delhi is a top player in the category of Box Manufacturers.
            Also known for Corrugated Box Manufacturing, Packaging Box Manufacturing, Carton Manufacturing,
            Packaging Material Manufacturing and Wholesaling, Printed Corrugated Box Manufacturing, and much more.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Our Story</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            Established in the year 1996, Ravi Box Industries has made a name for itself in the list of
            top suppliers of Packaging Boxes and Corrugated Packaging Boxes in India. Over the course of
            its journey, this business has established a firm foothold in the industry.
          </p>
          <p className="section-text">
            The belief that customer satisfaction is as important as our products and services has helped
            us garner a vast base of customers, which continues to grow by the day. This well-known
            establishment acts as a one-stop destination servicing customers both local and from other
            parts of Delhi.
          </p>
          <p className="section-text">
            In the near future, we aim to expand our line of products and services and cater to a larger
            client base, continuing our tradition of excellence and reliability.
          </p>
        </div>
      </section>

      {/* Products & Quality */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Our Products &amp; Quality</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            Our collections are best in class and fabricated by our engineers with the use of best quality
            machines, raw fabrics and tools. They are available in the form of papers and boxes. These
            collections are highly appreciated for industrial purposes and even in households.
          </p>
          <p className="section-text">
            Available in many sizes and designs, our products are made from the best fiber materials.
            They are highly appreciated for their design, compact finish, and lightweight construction.
            All products are produced with the utilization of cutting-edge technology and best expertise
            to keep them as per customers' expectations.
          </p>
          <div className="highlight-cards">
            <div className="highlight-card">
              <i className="fas fa-box-open"></i>
              <h3>Storage Boxes</h3>
            </div>
            <div className="highlight-card">
              <i className="fas fa-boxes-stacked"></i>
              <h3>Corrugated Boxes</h3>
            </div>
            <div className="highlight-card">
              <i className="fas fa-print"></i>
              <h3>Printed Boxes</h3>
            </div>
            <div className="highlight-card">
              <i className="fas fa-scroll"></i>
              <h3>High BF Kraft Paper</h3>
            </div>
            <div className="highlight-card">
              <i className="fas fa-cogs"></i>
              <h3>Printing Job Work</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Our Infrastructure</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            In order to manufacture our array of fiber-based products, we have created a huge and modern
            infrastructure unit that consists of a large manufacturing facility and corporate office.
          </p>
          <p className="section-text">
            From our initial stage of procurement of raw materials till the delivery, all processes are
            divided into well-organized sub-departments including <strong>Manufacturing</strong>,{' '}
            <strong>Quality Control</strong>, and <strong>Delivery</strong>. All these processes work in
            the best manner and are handled by our most talented managers.
          </p>
          <p className="section-text">
            All materials are tested alongside many quality norms to keep them at the highest standard of
            excellence. Products are delivered with the use of waterproof packaging options to ensure
            customer satisfaction.
          </p>
          <div className="facility-gallery">
            <div className="facility-img facility-img-wide">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/8.jpg" />
                <img src="/optimized-images/desktop/8.jpg" alt="Manufacturing facility overview" loading="lazy" />
              </picture>
            </div>
            <div className="facility-img">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/5.jpg" />
                <img src="/optimized-images/desktop/5.jpg" alt="Production line" loading="lazy" />
              </picture>
            </div>
            <div className="facility-img">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/6.jpg" />
                <img src="/optimized-images/desktop/6.jpg" alt="Quality control process" loading="lazy" />
              </picture>
            </div>
            <div className="facility-img facility-img-wide">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized-images/mobile/9.jpg" />
                <img src="/optimized-images/desktop/9.jpg" alt="Warehouse and storage facility" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Online Presence */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Easy Buying Experience</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            We are present online with our best e-brochure featuring all our products, detailing, and
            costing that helps our customers to buy in very easy terms. With easy buying, we also offer
            safe payment options including <strong>debit cards, credit cards, EMI, and net banking</strong>{' '}
            that make our customers happy and delighted.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Leadership</h2>
          <div className="section-divider"></div>
          <div className="leadership-content">
            <div className="leader-info">
              <div className="leader-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Ravinder Singh Verma</h3>
              <p className="leader-title">Proprietor</p>
              <p className="section-text">
                From our establishment, we are working under the headship of <strong>Ravinder Singh
                Verma</strong> (Proprietor). He is our mentor and guide. His deep market sincerity
                helps us to offer best quality fiber products at very cost-effective rates, keeping
                our customers happy and delighted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Our Approach</h2>
          <div className="section-divider"></div>
          <p className="section-text">
            This business employs individuals that are dedicated towards their respective roles and put
            in a lot of effort to achieve the common vision and larger goals of the company. We work very
            hard in order to keep our customers happy and delighted by adopting a{' '}
            <strong>customer-centric approach</strong> all the time.
          </p>
          <div className="approach-grid">
            <div className="approach-item">
              <i className="fas fa-handshake"></i>
              <span>Customer Satisfaction First</span>
            </div>
            <div className="approach-item">
              <i className="fas fa-check-circle"></i>
              <span>Quality Tested Products</span>
            </div>
            <div className="approach-item">
              <i className="fas fa-shield-alt"></i>
              <span>Waterproof Packaging</span>
            </div>
            <div className="approach-item">
              <i className="fas fa-money-bill-wave"></i>
              <span>Cost-Effective Rates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
