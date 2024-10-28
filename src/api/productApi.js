// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/mp', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  }
});

// Example GET request to fetch data
export const getProduct = async () => {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example POST request to submit data
export const postProduct = async ( data) => {

  let updatedData = {
    name: data?.name,
    price: parseInt(data?.price),
    category: data?.category,
    description: data?.description,
    productId : data?.productId
  }
console.log(updatedData)
  try {
    const response = await api.post("/product", updatedData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Example GET request to fetch product by ID
export const getProductById = async (data) => {console.log(data.productId)

 const productId= data.productId
  try {
   
    const response = await api.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

// You can add more functions for other types of requests (PUT, DELETE, etc.)
