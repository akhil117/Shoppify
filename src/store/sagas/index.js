import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';
import { authUserSaga, authCheckStateSaga, logoutSaga } from './auth';
import { createEvent, fetchEvent, bookEvent } from './event';
import { fetchBooking } from './booking'




export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
  ]);
}


export function* watchEvent() {
  yield all(
    [
      takeEvery(actionTypes.EVENT_INITIATE, createEvent),
      takeEvery(actionTypes.EVENTS_INITIATE, fetchEvent)
    ]
  )
}


export function* watchBooking() {
  yield all(
    [
      takeEvery(actionTypes.BOOK_EVENT_INITIATE, bookEvent),
      takeEvery(actionTypes.BOOKINGS_INITIATE, fetchBooking)
    ]
  )
}