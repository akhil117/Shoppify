import * as actionTypes from './actionTypes';



export const auth = (email, password, isLogin) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isLogin: isLogin
  }
};


export const authSuccess = (token, userId,tokenExpiration) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    tokenExpiration
  }
}

export const authCheckState=() => {
  return {
    type: 'AUTH_CHECK_STATE'
  }
}

export const logout = () => {
  // localStorage.removeItem('token');
  // localStorage.removeItem('expirationDate');
  // localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
