import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ZipSearchForm = () => {
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode && /^\d{5}$/.test(zipCode)) {
      // Navigate to listing page with zip code as query parameter
      navigate(`/listing?zipCode=${zipCode}`);
    }
  };

  return (
    <form className="zip-search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="zipCode">Enter Zip Code</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
          placeholder="E.g., 90210"
          className="zip-input"
          required
        />
        <button type="submit" className="submit-btn">
        Find Bookkeepers
      </button>
      </div>
      
    </form>
  );
};

export default ZipSearchForm;