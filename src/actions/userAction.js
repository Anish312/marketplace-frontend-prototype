import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/usersConstants";
import axios from "axios";

export const clearErrors = () =>  async(dispatch) => {
   
    dispatch({type: CLEAR_ERRORS});

  
}



export const login =  (email , password) => async (dispatch)  => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
          `http://localhost:4000/api/v1/login`,
          { email, password },
          { withCredentials: true }
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
          });
    }
}


export const signUp = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      
      const { data } = await axios.post('http://localhost:4000//api/v1/register', userData);
   
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
      const { data } = await axios.get(`http://localhost:4000/api/v1/me`, { withCredentials: true });
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };
  

  export const logout = () => async (dispatch) => {
    try {
  
      const { data } = await axios.get(`http://localhost:4000//api/v1/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };
  