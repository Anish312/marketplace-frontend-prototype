// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/mp', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  }
});
export const getAllUsers = async () => {
    try {
      const response = await api.get("users");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };