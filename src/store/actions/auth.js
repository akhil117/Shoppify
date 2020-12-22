import * as actionTypes from './actionTypes';



export const auth = (email, password, isLogin) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isLogin: isLogin
  }
};


export const authSuccess = (token, userId) => {
  console.log("Entered auth success");
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  }
}