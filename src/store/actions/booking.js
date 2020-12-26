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

export const DeleteBooking = (event) => {
  return{
    type: actionTypes.BOOKING_DELETE,
    bookEventId:event
  }
}

export const DeleteBookingSuccess = (event) => {
  return {
    type: actionTypes.BOOKING_DELETE_SUCCESS,
    event: event
  }
}