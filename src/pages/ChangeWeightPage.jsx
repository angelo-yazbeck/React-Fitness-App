import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/ChangeWeightPage.css';

const ChangeWeightPage = () => {
  const [newWeight, setNewWeight] = useState('');

  const handleWeightChange = (e) => {
    setNewWeight(e.target.value);
  };

  const handleSubmit = () => {
    // Handle weight change logic
    console.log('New Weight Submitted:', newWeight);
  };

  return (
    <div className="change-weight-container">
      <Navbar />
      <div className="weight-change-content">
        <h2>Change Weight</h2>
        <input
          type="number"
          value={newWeight}
          onChange={handleWeightChange}
          placeholder="Enter your new weight"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ChangeWeightPage;
