import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/MealDescriptionPage.css';

const MealDescriptionPage = () => {
  return (
    <div className="meal-description-container">
      <Navbar /> {/* Navbar added here */}
      <div className="meal-content">
        <h1 className="meal-title">Enter Meal Description</h1>
        <textarea
          className="meal-input"
          placeholder="Describe your meal here..."
        ></textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default MealDescriptionPage;
