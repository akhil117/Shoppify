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
    const expirationDate = yield new Date(
      new Date().getTime() + 3600 * 1000 
    );
    console.log("Result", res);
    yield localStorage.setItem("token", res.data.data.login.token);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", res.data.data.login.userId);
    yield put(actions.authSuccess(res.data.data.login.token, res.data.data.login.userId,res.data.data.login.tokenExpiration));
  } catch (err) {

  }
}


export function* authCheckStateSaga(){
  const token = yield localStorage.getItem("token");
  if(!token){
    yield put(actions.logout());
  }else{
    const userId = yield localStorage.getItem("userId");
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    }
    else{
    yield put(actions.authSuccess(token,userId,expirationDate));
    }
  }
}

export function* logoutSaga(){
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userId");
  yield put(actions.logoutSucceed());
}