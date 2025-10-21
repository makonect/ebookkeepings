import React from 'react';
import ZipSearchForm from '../components/ZipSearchForm';

const Home = () => {
  return (
    <div className="page home">
      <div className="container">
        <div className="hero-section">
          <h1>Find Professional Bookkeepers Near You</h1>
          <p className="hero-subtitle">
            Connect with certified bookkeepers in your area. Search by zip code to find the perfect match for your business needs.
          </p>
          <ZipSearchForm />
        </div>
        
        <div className="features-section">
          <div className="feature">
            <h3>Easy Search</h3>
            <p>Find bookkeepers by zip code in seconds</p>
          </div>
          <div className="feature">
            <h3>Verified Professionals</h3>
            <p>All bookkeepers are registered and verified</p>
          </div>
          <div className="feature">
            <h3>Free Listing</h3>
            <p>Bookkeepers can register for free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;