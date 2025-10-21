import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import StateZipSearchForm from '../components/StateZipSearchForm';
import BookkeeperCard from '../components/BookkeeperCard';

const Listing = () => {
  const [bookkeepers, setBookkeepers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const stateFromQuery = queryParams.get('state');
  const zipFromQuery = queryParams.get('zipCode');

  useEffect(() => {
    if (stateFromQuery) {
      fetchBookkeepers(stateFromQuery, zipFromQuery);
    }
  }, [stateFromQuery, zipFromQuery]);

  const fetchBookkeepers = async (state, zipCode) => {
    setLoading(true);
    setError('');
    try {
      let url = `/api/bookkeepers?state=${state}`;
      if (zipCode) {
        url += `&zipCode=${zipCode}`;
      }
      
      const response = await axios.get(url);
      setBookkeepers(response.data);
    } catch (error) {
      setError('Error fetching bookkeepers. Please try again.');
      console.error('Error fetching bookkeepers:', error);
    }
    setLoading(false);
  };

  // Group bookkeepers by zip code for display
  const groupByZipCode = (bookkeepers) => {
    const grouped = {};
    bookkeepers.forEach(bk => {
      if (!grouped[bk.zipCode]) {
        grouped[bk.zipCode] = [];
      }
      grouped[bk.zipCode].push(bk);
    });
    return grouped;
  };

  const groupedBookkeepers = groupByZipCode(bookkeepers);

  return (
    <div className="page listing">
      <div className="container">
        <h1>Find Bookkeepers</h1>
        <p>Select a state to find bookkeepers in your area</p>
        
        <StateZipSearchForm />
        
        {loading && <div className="loading">Loading bookkeepers...</div>}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {!loading && !error && stateFromQuery && (
          <div className="results-section">
            <h2>
              Bookkeepers in {stateFromQuery}
              {zipFromQuery && `, Zip Code ${zipFromQuery}`}
              {` (${bookkeepers.length} found)`}
            </h2>
            
            {bookkeepers.length === 0 ? (
              <div className="no-results">
                <p>No bookkeepers found for your search.</p>
                <p>Please try a different state or zip code.</p>
              </div>
            ) : (
              <div className="bookkeepers-list">
                {Object.keys(groupedBookkeepers).sort().map(zipCode => (
                  <div key={zipCode} className="zip-group">
                    <h3 className="zip-header">Zip Code: {zipCode}</h3>
                    <div className="bookkeepers-in-zip">
                      {groupedBookkeepers[zipCode].map((bookkeeper) => (
                        <BookkeeperCard 
                          key={bookkeeper._id} 
                          bookkeeper={bookkeeper} 
                        />
                      ))}
                    </div>
                  </div>
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