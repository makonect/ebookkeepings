import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookkeeperCard from '../components/BookkeeperCard';

const Listing = () => {
  const [bookkeepers, setBookkeepers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [zipInput, setZipInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const zipFromQuery = queryParams.get('zipCode');

  useEffect(() => {
    if (zipFromQuery) {
      setZipInput(zipFromQuery);
      fetchBookkeepers(zipFromQuery);
    }
  }, [zipFromQuery]);

  const fetchBookkeepers = async (zipCode) => {
    setLoading(true);
    setError('');
    try {
      const API_BASE = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000' 
        : '';
      
      // Use the main endpoint - simpler and more reliable
      const url = `${API_BASE}/api/bookkeepers?zipCode=${encodeURIComponent(zipCode)}`;
      
      console.log('Fetching from:', url);
      
      const response = await axios.get(url, {
        timeout: 10000,
      });
      
      if (response.data && Array.isArray(response.data)) {
        setBookkeepers(response.data);
      } else {
        setError('No bookkeepers found in this area');
      }
    } catch (error) {
      console.error('Error fetching bookkeepers:', error);
      
      if (error.response) {
        setError(error.response.data?.message || 'Server error. Please try again.');
      } else if (error.request) {
        setError('Cannot connect to server. Please make sure the backend is running.');
      } else {
        setError('Error searching for bookkeepers. Please try again.');
      }
    }
    setLoading(false);
  };

  const handleZipSearch = (e) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    
    if (!cleanZip) {
      setError('Please enter a zip code');
      return;
    }
    
    if (!/^\d{5}$/.test(cleanZip)) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }
    
    setError('');
    navigate(`/listing?zipCode=${cleanZip}`);
  };

  return (
    <div className="page listing">
      <div className="container">
        <div className="hero-section">
          <h1>Find Local Bookkeepers</h1>
          <p className="hero-subtitle">Enter your zip code to find professional bookkeepers in your area</p>
        </div>
        
        {/* Zip Code Search Form */}
        <div className="zip-search-form">
          <form onSubmit={handleZipSearch}>
            <div className="form-group">
              <label htmlFor="zipCode">Enter Your Zip Code</label>
              <div className="form-row">
                <input
                  type="text"
                  id="zipCode"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="e.g., 90210"
                  className="zip-input"
                  required
                />
                <button type="submit" className="submit-btn">
                  Search Bookkeepers
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {loading && (
          <div className="loading">
            <p>Searching for bookkeepers in your area...</p>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {!loading && !error && zipFromQuery && (
          <div className="results-section">
            <h2>
              Bookkeepers near {zipFromQuery}
              {bookkeepers.length > 0 && ` (${bookkeepers.length} found)`}
            </h2>
            
            {bookkeepers.length === 0 ? (
              <div className="no-results">
                <p>No bookkeepers found for zip code {zipFromQuery}.</p>
                <p>Please try a different zip code or check back later.</p>
              </div>
            ) : (
              <div className="bookkeepers-list">
                {bookkeepers.map((bookkeeper) => (
                  <BookkeeperCard 
                    key={bookkeeper._id} 
                    bookkeeper={bookkeeper} 
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;