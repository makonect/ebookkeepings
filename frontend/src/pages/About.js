import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>About ebookkeepings</h1>
              <p className="hero-subtitle">
                Connecting businesses with professional bookkeepers across the United States
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Professional Bookkeepers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">States Covered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Businesses Served</div>
                </div>
              </div>
            </div>
            <div className="about-hero-image">
              <div className="image-placeholder">
                <img src="/images/about.jpg" className="hero-image" alt="About" loading="lazy" />
                {/* <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#f8f9fa" rx="12"/>
                  <circle cx="200" cy="120" r="60" fill="#62b58f" opacity="0.2"/>
                  <rect x="150" y="80" width="100" height="160" fill="#373334" opacity="0.8" rx="8"/>
                  <rect x="170" y="100" width="60" height="40" fill="#62b58f" opacity="0.6" rx="4"/>
                  <rect x="170" y="150" width="60" height="20" fill="#62b58f" opacity="0.4" rx="4"/>
                  <rect x="170" y="180" width="60" height="20" fill="#62b58f" opacity="0.4" rx="4"/>
                  <circle cx="120" cy="200" r="30" fill="#62b58f" opacity="0.3"/>
                  <circle cx="280" cy="200" r="30" fill="#62b58f" opacity="0.3"/>
                </svg> */}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L14.55 13.47L16.18 20L12 16.77L7.82 20L9.45 13.47L4 9L10.91 8.26L12 2Z" fill="#62b58f"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To make it easy for businesses to find qualified bookkeepers in their local area, 
                while providing bookkeepers with a platform to showcase their services to potential clients.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6C12 4.34 10.66 3 9 3C7.34 3 6 4.34 6 6C6 7.66 7.34 9 9 9C10.66 9 12 7.66 12 6ZM9 17C5.69 17 3 14.31 3 11H1C1 15.42 4.58 19 9 19V17ZM17 9C18.66 9 20 7.66 20 6C20 4.34 18.66 3 17 3C15.34 3 14 4.34 14 6C14 7.66 15.34 9 17 9ZM21 11H19C19 14.31 16.31 17 13 17V19C17.42 19 21 15.42 21 11Z" fill="#373334"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted platform for bookkeeping services, empowering businesses 
                to achieve financial clarity and success through professional financial management.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#62b58f" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Accuracy</h4>
              <p>Precision and attention to detail in every financial record</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#62b58f" strokeWidth="2"/>
                  <path d="M12 7V13" stroke="#62b58f" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Reliability</h4>
              <p>Consistent and dependable service you can count on</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#62b58f" strokeWidth="2"/>
                  <path d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21" stroke="#62b58f" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Trust</h4>
              <p>Building long-term relationships based on integrity</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#62b58f" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Leveraging technology to streamline bookkeeping processes</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Why Choose ebookkeepings?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-image">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="30" width="120" height="60" rx="8" fill="#62b58f" opacity="0.1"/>
                  <rect x="60" y="40" width="80" height="10" rx="4" fill="#62b58f" opacity="0.6"/>
                  <rect x="60" y="55" width="60" height="8" rx="4" fill="#62b58f" opacity="0.4"/>
                  <rect x="60" y="68" width="70" height="8" rx="4" fill="#62b58f" opacity="0.4"/>
                </svg>
              </div>
              <h4>Vetted Professionals</h4>
              <p>Every bookkeeper on our platform is thoroughly screened and verified</p>
            </div>
            <div className="feature-item">
              <div className="feature-image">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="60" r="40" fill="#62b58f" opacity="0.1"/>
                  <path d="M70 60L90 80L130 40" stroke="#62b58f" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Easy Matching</h4>
              <p>Find the perfect bookkeeper for your specific business needs</p>
            </div>
            <div className="feature-item">
              <div className="feature-image">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="30" width="100" height="60" rx="8" fill="#62b58f" opacity="0.1"/>
                  <circle cx="100" cy="50" r="15" fill="#62b58f" opacity="0.6"/>
                  <rect x="70" y="70" width="60" height="8" rx="4" fill="#62b58f" opacity="0.4"/>
                  <rect x="80" y="82" width="40" height="6" rx="3" fill="#62b58f" opacity="0.4"/>
                </svg>
              </div>
              <h4>Local Expertise</h4>
              <p>Connect with bookkeepers who understand your local market</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Bookkeeper?</h2>
            <p>Join thousands of businesses that trust ebookkeepings for their financial management needs</p>
            <div className="cta-buttons">
              {/* <button className="cta-button primary">Find a Bookkeeper</button>
              <button className="cta-button secondary">Become a Partner</button> */}
              <Link to="/listing" className="cta-button primary">Find a Bookkeeper</Link>
              <Link to="/register" className="cta-button secondary">Become a Partner</Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--light-bg) 0%, var(--white) 100%);
          border-radius: 12px;
          margin-bottom: 3rem;
        }

        .about-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-hero h1 {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--gray);
          font-size: 0.9rem;
        }

        .about-hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 100%;
          max-width: 400px;
        }

        .mission-vision {
          padding: 4rem 0;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .mission-card, .vision-card {
          padding: 2.5rem;
          background: var(--white);
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          text-align: center;
          border-top: 4px solid var(--accent);
        }

        .vision-card {
          border-top-color: var(--primary);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--light-bg);
          border-radius: 50%;
        }

        .mission-card h3, .vision-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .mission-card p, .vision-card p {
          color: var(--gray);
          line-height: 1.6;
        }

        .values-section {
          padding: 4rem 0;
          background: var(--light-bg);
          border-radius: 12px;
          margin: 2rem 0;
        }

        .values-section h2 {
          text-align: center;
          color: var(--primary);
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-item {
          text-align: center;
          padding: 2rem;
        }

        .value-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--white);
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .value-item h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .value-item p {
          color: var(--gray);
          line-height: 1.6;
        }

        .team-section {
          padding: 4rem 0;
        }

        .team-section h2 {
          text-align: center;
          color: var(--primary);
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
        }

        .feature-image {
          width: 100%;
          max-width: 200px;
          margin: 0 auto 1.5rem;
        }

        .feature-item h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .feature-item p {
          color: var(--gray);
          line-height: 1.6;
        }

        .about-cta {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--accent) 0%, #4a9c7a 100%);
          border-radius: 12px;
          text-align: center;
          color: var(--white);
        }

        .cta-content h2 {
          color: var(--white);
          margin-bottom: 1rem;
          font-size: 2.2rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: var(--white);
          color: var(--accent);
        }

        .cta-button.secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .about-hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-hero h1 {
            font-size: 2.2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .values-grid, .features-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;