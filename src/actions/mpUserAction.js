import axios from "axios";
import { MP_USER_LOGIN_FAIL, MP_USER_LOGIN_REQUEST, MP_USER_LOGIN_SUCCESS } from "../constants/mpUserConstant";


export const marketplaceUserLogin =  () => async (dispatch)  => {
    try {
        dispatch({ type: MP_USER_LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `http://localhost:8000/mp/login-anonymous/66e48d9cc3e6da17c380c913`,
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
