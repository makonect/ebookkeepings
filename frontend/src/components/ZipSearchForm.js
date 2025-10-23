import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ZipSearchForm = ({ initialZip = '' }) => {
  const [zipCode, setZipCode] = useState(initialZip);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.trim().length === 5) {
      navigate(`/listing?zip=${zipCode}`);
    } else {
      alert('Please enter a valid 5-digit zip code');
    }
  };

  return (
    <form className="zip-search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
          placeholder="Enter your zip code"
          className="zip-input"
          maxLength="5"
          pattern="[0-9]{5}"
          title="5-digit zip code"
          required
        />
      </div>
      <button type="submit" className="search-btn">
          Find Bookkeepers
        </button>
    </form>
  );
};

export default ZipSearchForm;