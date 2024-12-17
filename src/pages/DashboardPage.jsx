import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Ensure the Navbar is imported correctly
import '../styles/DashboardPage.css'; // Add custom CSS for styling

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleMealDescription = () => {
    navigate('/meal-description'); // Navigate to meal description page
  };

  const handleCheckMeals = () => {
    navigate('/check-meals'); // Navigate to check meals page
  };

  const handleChangeWeight = () => {
    navigate('/change-weight'); // Navigate to change weight page
  };

  const handleTrackExercises = () => {
    navigate('/track-exercises'); // Navigate to track exercises page
  };

  return (
    <div className="dashboard-container">
      <Navbar /> {/* Add the Navbar here */}
      <div className="cards-container">
        <div className="card" onClick={handleMealDescription}>
          <h3>Enter Meal Description</h3>
          <p>Click here to log your meals</p>
        </div>
        <div className="card" onClick={handleCheckMeals}>
          <h3>Check All Meals</h3>
          <p>Click here to view your meals</p>
        </div>
        <div className="card" onClick={handleChangeWeight}>
          <h3>Change Weight</h3>
          <p>Click here to update your weight</p>
        </div>
        <div className="card" onClick={handleTrackExercises}>
          <h3>Track Exercises</h3>
          <p>Click here to log your exercises</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
