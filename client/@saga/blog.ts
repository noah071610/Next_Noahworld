import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  SEARCH_KEYWORD_CLEAR,
  SEARCH_KEYWORD_FAILURE,
  SEARCH_KEYWORD_REQUEST,
  SEARCH_KEYWORD_SUCCESS,
} from "../@reducers/blog";
import { SearchKeywordData, SearchKeywordInter } from "./@sagaTypes";

function searchKeywordAPI(data: SearchKeywordData) {
  return axios.post(`/api/post/search`, data);
}

function* searchKeyword(action: SearchKeywordInter) {
  try {
    const { data } = yield call(searchKeywordAPI, action.data);
    yield put({
      type: SEARCH_KEYWORD_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_KEYWORD_CLEAR,
    });
  } catch (err) {
    yield put({
      type: SEARCH_KEYWORD_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_KEYWORD_CLEAR,
    });
  }
}

function* watchSearchKeyword() {
  yield takeLatest(SEARCH_KEYWORD_REQUEST, searchKeyword);
}

export default function* blogSaga() {
  yield all([fork(watchSearchKeyword)]);
}
