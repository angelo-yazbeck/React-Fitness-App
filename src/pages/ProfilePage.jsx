import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';  // Import Navbar component
import '../styles/ProfilePage.css';  // Import your custom CSS for the profile page

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    sex: '',
    age: '',
    height: '',
    currentWeight: '',
    weightGoal: '',
    activityLevel: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { age, height, currentWeight, weightGoal } = formData;
    if (!age || !height || !currentWeight || !weightGoal) {
      setError('Please fill out all fields.');
      return false;
    }
    if (isNaN(age) || isNaN(height) || isNaN(currentWeight) || isNaN(weightGoal)) {
      setError('Age, height, current weight, and weight goal must be numbers.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem('token');  // Get the JWT token from localStorage or session
      const response = await axios.post('https://localhost:7044/api/Profiles', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Profile Created:', response.data);
      navigate('/');  // Redirect to homepage or another page after successful submission
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="profile-page">
      <Navbar />  {/* Navbar should be outside the form */}
      <div className="form-container">
        <h2>Create Your Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Sex</label>
            <select name="sex" value={formData.sex} onChange={handleChange} required>
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              placeholder="Height in cm"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Current Weight (kg)</label>
            <input
              type="number"
              name="currentWeight"
              placeholder="Current Weight in kg"
              value={formData.currentWeight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Weight Goal (kg)</label>
            <input
              type="number"
              name="weightGoal"
              placeholder="Weight Goal in kg"
              value={formData.weightGoal}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Activity Level</label>
            <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} required>
              <option value="">Select Activity Level</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightly active">Lightly Active</option>
              <option value="moderately active">Moderately Active</option>
              <option value="very active">Very Active</option>
            </select>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
