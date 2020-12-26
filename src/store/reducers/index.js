import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import booking from './booking'


const RootReducer = combineReducers({
  auth,
  event,
  booking
});

export default RootReducer;