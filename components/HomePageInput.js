import React, { useState } from 'react';
import { useRouter } from 'next/router';


const SearchComponent = () => {
  const [VIN, setVIN] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    setVIN(event.target.value.toUpperCase());
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (VIN.length === 17) {
      router.push(`/product/${VIN}`);
    } else {
      setError('VIN must be exactly 17 characters long.');
    }
  };

  return (
    <div className="search-container">
      <div className="vin-input-container">
        <input
          type="text"
          value={VIN}
          onChange={handleInputChange}
          placeholder="Introduceți seria de șasiu"
          className="vin-input"
        />
      
      </div>
      <button onClick={handleSubmit} className="search-button">
        Caută Mașina
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SearchComponent;
