import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import DashboardPage from '../pages/DashboardPage';
import MealDescriptionPage from '../pages/MealDescriptionPage';
import CheckMealsPage from '../pages/CheckMealsPage';
import ChangeWeightPage from '../pages/ChangeWeightPage';
import TrackExercisesPage from '../pages/TrackExercisesPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/meal-description" element={<MealDescriptionPage />} />
        <Route path="/check-meals" element={<CheckMealsPage />} />
        <Route path="/change-weight" element={<ChangeWeightPage />} />
        <Route path="/track-exercises" element={<TrackExercisesPage />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
