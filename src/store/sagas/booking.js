import { put, call } from "redux-saga/effects";
import * as actions from '../actions/index';
import axios from "axios";
import { select } from 'redux-saga/effects'


export function* fetchBooking() {
  const { token } = yield select(state => state.auth)
  let requestBody = {
    query: `query{
      bookings{
        _id
        updatedAt
        event{
          title
          description
          price
          _id
        }
      }
    }`
  }

  try {
    const res = yield axios.post('http://localhost:3200/graphql', {
      ...requestBody
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Result", res);

    yield put(actions.fetchBookingSuccess(res.data.data.bookings));
  } catch (err) {
    console.log("Error", err);
  }
}

export function* bookEvent(action) {
  const { token } = yield select(state => state.auth)

  let requestBody = {
    query: `mutation{
      createBooking(eventId:"${action.eventId}"){
        _id
        createdAt
        updatedAt
      }
    }`
  }
  try {
    const res = yield axios.post('http://localhost:3200/graphql', {
      ...requestBody
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Bookings", res);
  } catch (err) {
    console.log("Error", err);
  }
}