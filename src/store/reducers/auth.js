import * as actions from '../actions/actionTypes';
const initialState = {
  isLogin: false,
  email: '',
  token: ''
};


const reducer = (state=initialState, action) =>{
  switch(action.type){
    case actions.IS_LOGIN: return {...initialState,isLogin: !state.isLogin}
    default:
      return state;
  }
};

export default reducer;