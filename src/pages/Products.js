import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Products() {
  const products = [
    {
      name: 'Corrugated Boxes',
      description:
        'Square and rectangular corrugated boxes with custom size options. Available in brown and white corrugated board material with excellent load-carrying and shock-absorbing capacity.',
      icon: 'fas fa-box',
      features: ['Custom Sizes', 'Brown & White Board', 'High Load Capacity'],
    },
    {
      name: 'Printed Corrugated Boxes',
      description:
        'High-quality printed boxes for branding and product presentation. Available with custom printing, accurate dimensions, and premium corrugated board material.',
      icon: 'fas fa-print',
      features: ['Custom Printing', 'Accurate Dimensions', 'Brand Enhancement'],
    },
    {
      name: 'Storage Boxes',
      description:
        'Durable and versatile storage boxes available in multiple sizes and designs. Suitable for industrial warehousing, office storage, and household organization.',
      icon: 'fas fa-warehouse',
      features: ['Multiple Sizes', 'Industrial Grade', 'Household Friendly'],
    },
    {
      name: 'Packaging Boxes',
      description:
        'Comprehensive packaging solutions designed for various industries. Manufactured with best quality raw materials ensuring compact finish and product safety.',
      icon: 'fas fa-boxes-stacked',
      features: ['Multi-Industry Use', 'Premium Quality', 'Compact Finish'],
    },
    {
      name: 'High BF Kraft Paper',
      description:
        'Superior quality kraft paper ideal for all packaging applications. Available in various grades and specifications to meet diverse industry requirements.',
      icon: 'fas fa-scroll',
      features: ['Various Grades', 'High Burst Factor', 'Versatile Use'],
    },
    {
      name: 'Cartons',
      description:
        'Sturdy cartons for shipping, storage, and product packaging. Custom manufactured to meet specific size, strength, and design requirements.',
      icon: 'fas fa-cube',
      features: ['Custom Sizes', 'Shipping Ready', 'Bulk Available'],
    },
  ];

  return (
    <div className="page products-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>Our Products</h1>
        <p>Quality Packaging Solutions for Every Need</p>
      </section>

      {/* Product Introduction */}
      <section className="section">
        <div className="section-container">
          <p className="section-text center-text">
            At <strong>Ravi Box Industries</strong>, we offer a comprehensive range of packaging products
            manufactured with best quality machines, raw materials, and cutting-edge technology. All our
            products are quality-tested and available in various sizes and designs to meet your specific requirements.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Product Range</h2>
          <div className="section-divider"></div>
          <div className="products-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-card-icon">
                  <i className={product.icon}></i>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, i) => (
                    <span className="feature-tag" key={i}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <div className="service-highlight">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="service-info">
              <h3>Printing Job Work</h3>
              <p>
                In addition to our product range, we provide professional printing job work services.
                Our state-of-the-art printing facility ensures high-quality output for custom branding,
                labeling, and packaging design requirements. Whether you need single-color prints or
                multi-color artwork on your packaging, our expert team delivers precision results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Product Gallery</h2>
          <div className="section-divider"></div>
          <div className="product-gallery-grid">
            {[
              { id: 1, alt: 'Corrugated box manufacturing', span: 'tall' },
              { id: 3, alt: 'Custom packaging solutions', span: '' },
              { id: 4, alt: 'Industrial storage boxes', span: 'tall' },
              { id: 5, alt: 'Premium packaging materials', span: '' },
              { id: 6, alt: 'Kraft paper products', span: '' },
              { id: 8, alt: 'Factory floor overview', span: 'wide' },
              { id: 7, alt: 'Packaging products', span: '' },
              { id: 9, alt: 'Warehouse and storage', span: 'wide' },
              { id: 10, alt: 'Quality packaging showcase', span: '' },
            ].map((item) => (
              <div className={`product-gallery-item ${item.span ? `product-gallery-${item.span}` : ''}`} key={item.id}>
                <picture>
                  <source media="(max-width: 600px)" srcSet={`/optimized-images/mobile/${item.id}.jpg`} />
                  <img
                    src={`/optimized-images/desktop/${item.id}.jpg`}
                    alt={item.alt}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="section-container center-text">
          <h2>Need Custom Packaging Solutions?</h2>
          <p>
            Contact us today to discuss your requirements. We offer competitive pricing,
            bulk orders, and custom manufacturing.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Products;
