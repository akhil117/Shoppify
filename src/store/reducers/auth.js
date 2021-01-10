import * as actions from '../actions/actionTypes';
const initialState = {
  isLogin: false,
  userId: null,
  token: null,
  tokenExpiration: null,
  userAgentApplication: null
};


const reducer = (state=initialState, action) =>{
  switch(action.type){
    case actions.IS_LOGIN: return {...state,isLogin: !state.isLogin}
    case actions.AUTH_SUCCESS: return {...state, ...action}
    case actions.AUTH_LOGOUT: return {...initialState}
    default:
      return state;
  }
};

export default reducer;