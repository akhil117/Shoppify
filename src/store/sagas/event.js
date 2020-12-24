import { put, call } from "redux-saga/effects";
import * as actions from '../actions/index';
import axios from "axios";
import { select } from 'redux-saga/effects'

export function* createEvent(action) {
  const { title, description, price, datetime } = action;
  const { token } = yield select(state => state.auth)

  let requestBody = {
    query: `mutation { 
      createEvent(event: {
        title: "${title}", 
        description: "${description}",
         price: ${price}, 
         date: "${datetime}"
        }) { 
          title, 
          description,
          price,
          date 
        }}`
  };

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

    yield put(actions.eventSuccess(title, price, datetime, description));
  } catch (err) {
    console.log("Error", err);
  }

}

export function* fetchEvent(action) {
  let requestBody = {
    query: `query {
      events {
        title
        description
        price
        date
        creator {
          email
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
        'Accept': 'application/json'
      }
    });
    console.log("Result", res);

    yield put(actions.eventsSuccess(res.data.data.events));
  } catch (err) {
    console.log("Error", err);
  }


}