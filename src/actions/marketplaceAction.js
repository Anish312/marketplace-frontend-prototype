
import axios from 'axios';
import {ALL_MARKETPLACE_REQUEST , ALL_MARKETPLACE_FAIL ,ALL_MARKETPLACE_SUCCESS, MARKETPLACE_DETAILS_SUCCESS, MARKETPLACE_DETAILS_FAIL, MARKETPLACE_DETAILS_REQUEST} from '../constants/marketplaceConstants'
export const getAllMarketplace =() =>
async (dispatch) => {
  try {
    dispatch({ type: ALL_MARKETPLACE_REQUEST});
    const context_url  = "http://localhost:4000"
    let link = `${context_url}/api/v1/marketplaces`;

    const { data } = await axios.get(link , { withCredentials: true });
    dispatch({
      type: ALL_MARKETPLACE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MARKETPLACE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getMarketplaceDetails =(marketplaceId) =>
async (dispatch ) => {
  try {
    console.log(marketplaceId)
    dispatch({ type: MARKETPLACE_DETAILS_REQUEST});
    const context_url  = "http://localhost:4000"

    let link = `${context_url}/api/v1/marketplace/${marketplaceId}`;
    const { data } = await axios.get(link , { withCredentials: true });
    dispatch({
      type: MARKETPLACE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MARKETPLACE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};