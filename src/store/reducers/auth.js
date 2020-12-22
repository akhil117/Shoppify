import * as actions from '../actions/actionTypes';
const initialState = {
  isLogin: false,
  userId: null,
  token: null,
  tokenExpiration: null
};


const reducer = (state=initialState, action) =>{
  console.log(action.type);
  switch(action.type){
    case actions.IS_LOGIN: return {...state,isLogin: !state.isLogin}
    case actions.AUTH_SUCCESS: return {...state, userId: action.userId, token: action.token, tokenExpiration: action.tokenExpiration}
    case actions.AUTH_LOGOUT: return {...initialState}
    default:
      return state;
  }
};

export default reducer;