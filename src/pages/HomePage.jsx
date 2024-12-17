import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Button';
import Navbar from '../components/Navbar';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="homepage">
      <Navbar /> {/* Add a professional Navbar */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Achieve Your Fitness Goals</h1>
          <p className="hero-subtitle">
            Stay fit, stay healthy. Join us and start your fitness journey today.
          </p>
          <CustomButton text="Get Started" onClick={handleGetStarted} />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Fitness App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
