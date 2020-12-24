import { combineReducers } from 'redux';
import auth from './auth'
import event from './event'

const RootReducer = combineReducers({
  auth,
  event
});

export default RootReducer;