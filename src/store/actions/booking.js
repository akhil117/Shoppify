import * as actionTypes from './actionTypes';

export const fetchBooking = () => {
  return {
    type: actionTypes.BOOKINGS_INITIATE
  }
}


export const fetchBookingSuccess = (bookings) => {
  return{
    type: actionTypes.BOOKINGS_SUCCESS,
    bookings
  }
}