import * as actions from '../actions/actionTypes';
const initialState = {
  isLogin: false,
  userId: '',
  token: ''
};


const reducer = (state=initialState, action) =>{
  console.log(action.type);
  switch(action.type){
    case actions.IS_LOGIN: return {...state,isLogin: !state.isLogin}
    case actions.AUTH_SUCCESS: return {...state, userId: action.userId, token: action.token}
    default:
      return state;
  }
};

export default reducer;