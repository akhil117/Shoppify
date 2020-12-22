import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';
import { authUserSaga,authCheckStateSaga,logoutSaga } from './auth';



export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT,logoutSaga)
  ]);
}