import * as actions from '../actions/actionTypes';

const initialState = {
  bookings :[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BOOKINGS_SUCCESS:
      return { ...state, bookings: action.bookings }
    case actions.BOOKING_DELETE_SUCCESS:
      const filterBookings = state.bookings.filter(booking => booking.event._id!==action.event)
      return {...state,bookings: filterBookings}
    default:
      return state;
  }
};
export default reducer;


