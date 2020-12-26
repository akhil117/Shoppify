import * as actions from '../actions/actionTypes';

const initialState = {
  bookings :[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BOOKINGS_SUCCESS:
      return { ...state, bookings: action.bookings }
    default:
      return state;
  }
};
export default reducer;


