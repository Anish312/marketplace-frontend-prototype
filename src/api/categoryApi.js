// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/mp', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  }
});

export const postCategory= async ( data) => {
  console.log(data);
  try {
    const response = await api.post("category", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
    try {
      const response = await api.get("categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

 export const getCategoryById = async (data) => {
    try {
      const categoryId= data.id
      const response = await api.get(`category/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };


  export const postCategoryProductAssignment = async (data) => {
    try {
      console.log(data);
      const response = await api.put("categories/productassigments", data);
      return response.data;
    } catch (error) {
      console.error("Error posting category product assignment:", error);
      throw error;
    }
  };