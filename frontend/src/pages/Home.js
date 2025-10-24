import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ZipSearchForm from '../components/ZipSearchForm';
import ZipSearchForm from '../components/StateZipSearchForm';
import '../styles/main.css';

const Home = () => {
  const [faqOpen, setFaqOpen] = useState({}); // For FAQ accordion

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="home-page">
      {/* Hero Section - Refined with centered content and stronger CTA */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Discover Local Bookkeepers in Your Area</h1>
            <p>Find verified, reliable bookkeepers by US zip code. Simple registration for professionals—join our directory today!</p>
            {/* <img src="/images/bookkeeper-hero.webp" alt="Professional bookkeeper working" className="hero-image" loading="lazy" /> */}
            <ZipSearchForm />
          </div>
        </div>
      </section>

      {/* Services Section - Grid with icons for better visual appeal */}
      <section className="services">
        <div className="container">
          <h2>Popular Bookkeeping Services</h2>
          <div className="grid">
            <div className="service-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6h2V9h4v2h-2c-1.1 0-2 .9-2 2v2h4v-2h-2v-2h2v4z"/>
              </svg>
              <h3>QuickBooks Cleanup</h3>
            </div>
            <div className="service-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6h2V9h4v2h-2c-1.1 0-2 .9-2 2v2h4v-2h-2v-2h2v4z"/>
              </svg>
              <h3>Catch-Up Bookkeeping</h3>
            </div>
            <div className="service-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6h2V9h4v2h-2c-1.1 0-2 .9-2 2v2h4v-2h-2v-2h2v4z"/>
              </svg>
              <h3>Small Business Bookkeeping</h3>
            </div>
            <div className="service-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6h2V9h4v2h-2c-1.1 0-2 .9-2 2v2h4v-2h-2v-2h2v4z"/>
              </svg>
              <h3>Enterprise Accounting</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Updated with more items and icons */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose eBookKeepings</h2>
          <div className="why-grid">
            <div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Dedicated Experts</h3>
              <p>Experienced bookkeepers ready to handle your needs.</p>
            </div>
            <div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Monthly Reviews</h3>
              <p>Regular check-ins to keep your books accurate.</p>
            </div>
            <div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Secure Data</h3>
              <p>Industry-standard security for your financial info.</p>
            </div>
            <div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Affordable Pricing</h3>
              <p>Competitive rates with no hidden fees.</p>
            </div><div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Third Party Platform configured</h3>
              <p>Any books platform such as QuickBooks, Xero, FreshBook, Netsuite, or Wave included & configured</p>
            </div>
            <div className="why-item">
              <svg fill="#62b58f" width="48" height="48" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>No Contract</h3>
              <p>You can cancel at any time without any penalty fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Numbered steps with descriptions */}
      <section className="how-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span>1</span>
              <h3>Search by Zip Code</h3>
              <p>Enter your US zip code to find nearby bookkeepers.</p>
            </div>
            <div className="step">
              <span>2</span>
              <h3>Select & Contact</h3>
              <p>Browse profiles and reach out via email or phone.</p>
            </div>
            <div className="step">
              <span>3</span>
              <h3>Get Started</h3>
              <p>Begin your bookkeeping services with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel-like with multiple quotes */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonial-grid">
            <div className="quote">"Excellent platform for finding local bookkeepers!" - Jane Smith</div>
            <div className="quote">"Easy registration and great visibility for my services." - Mike Johnson</div>
            <div className="quote">"Found the perfect bookkeeper in my area quickly." - Sarah Lee</div>
          </div>
        </div>
      </section>

      {/* FAQ - Expanded accordion with real questions */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item" onClick={() => toggleFaq(0)}>
            <h3>How do I register as a bookkeeper?</h3>
            {faqOpen[0] && <p>Go to the Register page and fill in your details: full name, phone, email, address, zip code, preferred contact method, and optional company info.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(1)}>
            <h3>How does the zip code search work?</h3>
            {faqOpen[1] && <p>Enter a US zip code to see listed bookkeepers in that area, including their name and contact info.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(2)}>
            <h3>Is registration free?</h3>
            {faqOpen[2] && <p>Yes, it's completely free for bookkeepers to register and list their services.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(3)}>
            <h3>Do I need to manage the bookkeeping software?</h3>
            {faqOpen[3] && <p>Not at all. We handle the software for you, so you can focus on running your business.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(4)}>
            <h3>Is outsourcing cheaper than in-house?</h3>
            {faqOpen[4] && <p>Outsourcing avoids salary, benefits, and training costs while providing CPA-reviewed accuracy at a flat monthly rate.</p>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(5)}>
            <h3>Can I add payroll or sales-tax later?</h3>
            {faqOpen[5] && <p>Yes. Start with bookkeeping and add payroll or sales-tax filing any time.</p>}
          </div>
        </div>
      </section>

      {/* Comparison Table - More rows for value */}
      <section className="comparison">
        <div className="container">
          <h2>How We Compare to Others</h2>
          <table>
            <thead>
              <tr><th>Feature</th><th>eBookKeepings</th><th>Others</th></tr>
            </thead>
            <tbody>
              <tr><td>Pricing</td><td>Free Listing</td><td>Paid Subscriptions</td></tr>
              <tr><td>Search by Zip</td><td>Yes</td><td>Limited</td></tr>
              <tr><td>Verified Profiles</td><td>Yes</td><td>Varies</td></tr>
              <tr><td>Easy Contact</td><td>Email/Phone</td><td>Form Only</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Integrations - More logos */}
      <section className="integrations">
        <div className="container">
          <h2>We Integrate With Leading Tools</h2>
          <div className="logo-grid">
            <img src="/images/quickbooks.png" className="partner-logo" alt="QuickBooks" loading="lazy" />
            <img src="/images/xero.png" className="partner-logo" alt="Xero" loading="lazy" />
            <img src="/images/freshbooks.png" className="partner-logo" alt="FreshBooks" loading="lazy" />
            <img src="/images/netsuite.png" className="partner-logo" alt="NetSuite" loading="lazy" />
            <img src="/images/wave.png" className="partner-logo" alt="Wave" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Trust Signals - More badges */}
      <section className="trust">
        <div className="container">
          <h2>Trusted By Thousands</h2>
          <div className="badge-grid">
            <img src="/images/bbb-badge.png" className="partner-logo" alt="BBB Accredited" loading="lazy" />
            <img src="/images/trustpilot-badge.png" className="partner-logo" alt="Trustpilot Excellent" loading="lazy" />
            <img src="/images/ssl-secure-badge.png" className="partner-logo" alt="SSL Secure" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Final CTA - Stronger with button */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Find or List Bookkeeping Services?</h2>
          <p>Join our community today—free for 30 days!</p>
          <Link to="/register" className="cta-button">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;