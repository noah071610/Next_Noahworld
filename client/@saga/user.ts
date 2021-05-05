import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_ICON_CLEAR,
  ADD_ICON_FAILURE,
  ADD_ICON_REQUEST,
  ADD_ICON_SUCCESS,
  CHANGE_PASSWORD_CLEAR,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_NAME_CLEAR,
  CHANGE_NAME_FAILURE,
  CHANGE_NAME_REQUEST,
  CHANGE_NAME_SUCCESS,
  CONFIRM_PASSWORD_CLEAR,
  CONFIRM_PASSWORD_FAILURE,
  CONFIRM_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_SUCCESS,
  LOAD_INFO_FAILURE,
  LOAD_INFO_REQUEST,
  LOAD_INFO_SUCCESS,
  LOG_IN_CLEAR,
  LOG_IN_FAILURE,
  LOG_IN_GOOGLE_CLEAR,
  LOG_IN_GOOGLE_FAILURE,
  LOG_IN_GOOGLE_REQUEST,
  LOG_IN_GOOGLE_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_CLEAR,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_ICON_CLEAR,
  REMOVE_ICON_FAILURE,
  REMOVE_ICON_REQUEST,
  REMOVE_ICON_SUCCESS,
  SIGN_UP_CLEAR,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  WITHDRWAL_CLEAR,
  WITHDRWAL_FAILURE,
  WITHDRWAL_REQUEST,
  WITHDRWAL_SUCCESS,
} from "../@reducers/user";
import {
  UserData,
  LogInInter,
  SignUpInter,
  AddIconData,
  AddIconInter,
  RemoveIconInter,
  ComfirmPasswordInter,
  ComfirmPasswordData,
  ChangePasswordData,
  ChangePasswordInter,
  WithdrwalInter,
  ChangeNameData,
  ChangeNameInter,
} from "./@sagaTypes";

function logInAPI(data: UserData) {
  return axios.post("/api/user/logIn", data);
}

function* logIn(action: LogInInter) {
  try {
    const { data } = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: data,
    });
    yield delay(3000);
    yield put({
      type: LOG_IN_CLEAR,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: LOG_IN_CLEAR,
    });
  }
}

function logInGoogleAPI() {
  return axios.get("/auth/google");
}

function* logInGoogle() {
  try {
    yield call(logInGoogleAPI);
    yield put({
      type: LOG_IN_GOOGLE_SUCCESS,
    });
    yield delay(3000);
    yield put({
      type: LOG_IN_GOOGLE_CLEAR,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_GOOGLE_FAILURE,
      error: err.response,
    });
    yield delay(3000);
    yield put({
      type: LOG_IN_CLEAR,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/user/logOut");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
    yield delay(3000);
    yield put({
      type: LOG_OUT_CLEAR,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: LOG_OUT_CLEAR,
    });
  }
}

function signUpAPI(data: UserData) {
  return axios.post("/api/user/signUp", data);
}

function* signUp(action: SignUpInter) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
    yield delay(5000);
    yield put({
      type: SIGN_UP_CLEAR,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function addIconAPI(data: AddIconData) {
  return axios.post("/api/user/icon", data);
}

function* addIcon(action: AddIconInter) {
  try {
    const { data } = yield call(addIconAPI, action.data);
    yield put({
      type: ADD_ICON_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: ADD_ICON_CLEAR,
    });
  } catch (err) {
    yield put({
      type: ADD_ICON_FAILURE,
      error: err.response.data,
    });
  }
}

function removeIconAPI(data: number) {
  return axios.delete(`/api/user/icon/${data}`);
}

function* removeIcon(action: RemoveIconInter) {
  try {
    const { data } = yield call(removeIconAPI, action.data);
    yield put({
      type: REMOVE_ICON_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: REMOVE_ICON_CLEAR,
    });
  } catch (err) {
    yield put({
      type: REMOVE_ICON_FAILURE,
      error: err.response.data,
    });
  }
}

function loadInfoAPI() {
  return axios.get("/api/user");
}

function* loadInfo() {
  try {
    const { data } = yield call(loadInfoAPI);
    yield put({
      type: LOAD_INFO_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function confirmPasswordAPI(data: ComfirmPasswordData) {
  return axios.post(`api/user/confirm`, data);
}

function* confirmPassword(action: ComfirmPasswordInter) {
  try {
    const { data } = yield call(confirmPasswordAPI, action.data);
    yield put({
      type: CONFIRM_PASSWORD_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: CONFIRM_PASSWORD_CLEAR,
    });
  } catch (err) {
    yield put({
      type: CONFIRM_PASSWORD_FAILURE,
      error: err.response.data,
    });
  }
}

function changePasswordAPI(data: ChangePasswordData) {
  return axios.post(`api/user/password`, data);
}

function* changePassword(action: ChangePasswordInter) {
  try {
    const { data } = yield call(changePasswordAPI, action.data);
    yield put({
      type: CHANGE_PASSWORD_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: CHANGE_PASSWORD_CLEAR,
    });
  } catch (err) {
    yield put({
      type: CHANGE_PASSWORD_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNameAPI(data: ChangeNameData) {
  return axios.post(`api/user/name`, data);
}

function* changeName(action: ChangeNameInter) {
  try {
    const { data } = yield call(changeNameAPI, action.data);
    yield put({
      type: CHANGE_NAME_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: CHANGE_NAME_CLEAR,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NAME_FAILURE,
      error: err.response.data,
    });
  }
}

function withdrawalAPI(data: number) {
  return axios.delete(`api/user/${data}`);
}

function* withdrawal(action: WithdrwalInter) {
  try {
    const { data } = yield call(withdrawalAPI, action.data);
    yield put({
      type: WITHDRWAL_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: WITHDRWAL_CLEAR,
    });
  } catch (err) {
    yield put({
      type: WITHDRWAL_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogInGoogle() {
  yield takeLatest(LOG_IN_GOOGLE_REQUEST, logInGoogle);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchAddIcon() {
  yield takeLatest(ADD_ICON_REQUEST, addIcon);
}
function* watchRemoveIcon() {
  yield takeLatest(REMOVE_ICON_REQUEST, removeIcon);
}
function* watchLoadInfo() {
  yield takeLatest(LOAD_INFO_REQUEST, loadInfo);
}
function* watchConfirmPassword() {
  yield takeLatest(CONFIRM_PASSWORD_REQUEST, confirmPassword);
}
function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}
function* watchChangeName() {
  yield takeLatest(CHANGE_NAME_REQUEST, changeName);
}
function* watchWithdrawal() {
  yield takeLatest(WITHDRWAL_REQUEST, withdrawal);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogInGoogle),
    fork(watchSignUp),
    fork(watchAddIcon),
    fork(watchRemoveIcon),
    fork(watchLogOut),
    fork(watchLoadInfo),
    fork(watchConfirmPassword),
    fork(watchChangePassword),
    fork(watchChangeName),
    fork(watchWithdrawal),
  ]);
}
