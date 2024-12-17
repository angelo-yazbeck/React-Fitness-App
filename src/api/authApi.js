import axios from 'axios';

const BASE_URL = 'https://localhost:7044/api/User';

// Login API
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    return response.data; // Returns access token and other details
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

// Signup API
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error.response?.data || error.message);
    throw error;
  }
};
