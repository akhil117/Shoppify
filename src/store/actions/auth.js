import * as actionTypes from './actionTypes';



export const auth = (email, password, isLogin) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isLogin: isLogin
  }
};

export const oAuth = (email,isLogin,token,expiresOn,userAgentApplication) => {
  return {
    type: actionTypes.OAUTH_USER,
    email,
    isLogin,
    token,
    expiresOn,
    userAgentApplication
  }
}


export const authSuccess = (token, userId,tokenExpiration,userAgentApplication) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    tokenExpiration,
    userAgentApplication
  }
}

export const authCheckState=() => {
  return {
    type: 'AUTH_CHECK_STATE'
  }
}

export const logout = () => {

  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
