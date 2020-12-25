import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import spinner from './spinner';

const RootReducer = combineReducers({
  auth,
  event
});

export default RootReducer;