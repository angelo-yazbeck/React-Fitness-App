import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/TrackExercisesPage.css';

const TrackExercisesPage = () => {
  const [exercise, setExercise] = useState('');

  const handleInputChange = (e) => {
    setExercise(e.target.value);
  };

  const handleSubmit = () => {
    // Handle exercise tracking logic
    console.log('Exercise Submitted:', exercise);
  };

  return (
    <div className="track-exercises-container">
      <Navbar />
      <div className="exercise-content">
        <h2>Track Exercises</h2>
        <textarea
          value={exercise}
          onChange={handleInputChange}
          placeholder="Describe your exercise here..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TrackExercisesPage;
