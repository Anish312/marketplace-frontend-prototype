// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/mp', // Replace with your actual API base URL
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
      const categoryId= data.categoryId
      const productId= data.productId

      const product = await api.get(`product/${productId}`);




      const response = await api.get(`category/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };