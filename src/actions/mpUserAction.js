import axios from "axios";
import { MP_USER_LOGIN_FAIL, MP_USER_LOGIN_REQUEST, MP_USER_LOGIN_SUCCESS } from "../constants/mpUserConstant";


export const marketplaceUserLogin =  () => async (dispatch)  => {
    try {
        dispatch({ type: MP_USER_LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `http://localhost:4000/mp/login-anonymous/`,
            {},
            { withCredentials: true } // Make sure this is included
          ); 
          localStorage.setItem("token",data.token);

        dispatch({
            type: MP_USER_LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: MP_USER_LOGIN_FAIL,
            payload: error.response.data.message,
          });
    }
}

export const consoleUserLogin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: MP_USER_LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Ensure cookies are sent if needed
      };
  console.log(email, password )
      // Make a POST request to the login endpoint
      const { data } = await axios.post(
        "http://localhost:4000/mp/login",
        { email, password }, // The request body should include the email and password
        config
      );
  
      // Store the token in localStorage
      localStorage.setItem("token", data.token);
  
      dispatch({
        type: MP_USER_LOGIN_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: MP_USER_LOGIN_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };