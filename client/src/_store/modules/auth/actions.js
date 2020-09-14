import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

} from "./types";

import authService from '../../../_services/auth.service'

let msgBody = null;


const signupAction = (signupData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await authService.signup(signupData);
    console.log(data);
    dispatch({ type: REGISTER_SUCCESS });
  }
  catch (error) {
    msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
    dispatch({ type: REGISTER_FAIL });
  }
}





export {
  signupAction, 
};