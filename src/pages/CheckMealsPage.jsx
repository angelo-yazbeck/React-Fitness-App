import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/CheckMealsPage.css';

const CheckMealsPage = () => {
  const meals = [
    { id: 1, description: 'Chicken Salad' },
    { id: 2, description: 'Pasta with Tomato Sauce' },
    { id: 3, description: 'Grilled Salmon' },
  ]; // Sample meal data

  return (
    <div className="check-meals-container">
      <Navbar />
      <div className="meal-list">
        <h2>All Meals</h2>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>{meal.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckMealsPage;
