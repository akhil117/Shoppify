import { put, call } from "redux-saga/effects";
import axios from "axios";
import * as actions from '../actions/index';

export function* authUserSaga(action) {
  const { email, password } = action
  let requestBody = {
    query: `mutation {
      createUser(user: {email: "${email}", password: "${password}"}) {
        email
      }
    }
    `
  };
  if (!action.isLogin) {
    requestBody = {
      query: `query{
        login(email:"${email}",password: "${password}"){
          userId,
          token,
          tokenExpiration
        }
      }`
    }
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
    yield put(actions.authSuccess(res.data.data.login.token, res.data.data.login.userId));
  } catch (err) {

  }
}