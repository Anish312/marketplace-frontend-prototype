import {
    MP_USER_LOAD_FAIL,
    MP_USER_LOAD_REQUEST,
    MP_USER_LOAD_SUCCESS,
    MP_USER_LOGIN_FAIL,
    MP_USER_LOGIN_REQUEST,
    MP_USER_LOGIN_SUCCESS,
    MP_USER_LOGOUT_FAIL,
    MP_USER_LOGOUT_SUCCESS,
    MP_USER_REGISTER_FAIL,
    MP_USER_REGISTER_REQUEST,
    MP_USER_REGISTER_SUCCESS
  } from "../constants/mpUserConstant"; // Update the import path as needed
import { CLEAR_ERRORS } from "../constants/usersConstants";
  
  export const mpUserReducer = (state = { mpUser: {} }, action) => {
    switch (action.type) {
      case MP_USER_LOGIN_REQUEST:
      case MP_USER_REGISTER_REQUEST:
      case MP_USER_LOAD_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case MP_USER_LOGIN_SUCCESS:
      case MP_USER_REGISTER_SUCCESS:
      case MP_USER_LOAD_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          mpUser: action.payload, // Updated `buyer` to `user` to match the state property
        };
  
      case MP_USER_LOGOUT_SUCCESS:
        return {
          loading: false,
          mpUser: null,
          isAuthenticated: false,
        };
      case MP_USER_LOGIN_FAIL:
      case MP_USER_REGISTER_FAIL: // Corrected the typo from `BUYER_REGISTER_FLIL` to `BUYER_REGISTER_FAIL`
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          mpUser: null,
          error: action.payload,
        };
  
      case MP_USER_LOAD_FAIL:
        return {
          loading: false,
          isAuthenticated: false,
          mpUser: null,
          error: action.payload,
        };
  
      case MP_USER_LOGOUT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  