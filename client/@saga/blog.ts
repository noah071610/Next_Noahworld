import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_QUIZ_CLEAR,
  ADD_QUIZ_FAILURE,
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_SUCCESS,
  SEARCH_HASH_TAG_CLEAR,
  SEARCH_HASH_TAG_FAILURE,
  SEARCH_HASH_TAG_REQUEST,
  SEARCH_HASH_TAG_SUCCESS,
  SEARCH_KEYWORD_CLEAR,
  SEARCH_KEYWORD_FAILURE,
  SEARCH_KEYWORD_REQUEST,
  SEARCH_KEYWORD_SUCCESS,
} from "../@reducers/blog";
import {
  AddQuizData,
  AddQuizInter,
  SearchHashtagData,
  SearchHashtagInter,
  SearchKeywordData,
  SearchKeywordInter,
} from "./@sagaTypes";

function addQuizAPI(data: AddQuizData) {
  return axios.post(`/api/quiz`, data);
}

function* addQuiz(action: AddQuizInter) {
  try {
    yield call(addQuizAPI, action.data);
    yield put({
      type: ADD_QUIZ_SUCCESS,
    });
    yield delay(3000);
    yield put({
      type: ADD_QUIZ_CLEAR,
    });
  } catch (err) {
    yield put({
      type: ADD_QUIZ_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: ADD_QUIZ_CLEAR,
    });
  }
}

function searchKeywordAPI(data: SearchKeywordData) {
  return axios.post(`/api/search/`, data);
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

function searchHashtagAPI(data: SearchHashtagData) {
  return axios.post(`/api/search/hashtag`, data);
}

function* searchHashtag(action: SearchHashtagInter) {
  try {
    const { data } = yield call(searchHashtagAPI, action.data);

    yield put({
      type: SEARCH_HASH_TAG_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_HASH_TAG_CLEAR,
    });
  } catch (err) {
    yield put({
      type: SEARCH_HASH_TAG_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_HASH_TAG_CLEAR,
    });
  }
}

function* watchAddQuiz() {
  yield takeLatest(ADD_QUIZ_REQUEST, addQuiz);
}
function* watchSearchKeyword() {
  yield takeLatest(SEARCH_KEYWORD_REQUEST, searchKeyword);
}
function* watchSearchHashtag() {
  yield takeLatest(SEARCH_HASH_TAG_REQUEST, searchHashtag);
}

export default function* blogSaga() {
  yield all([fork(watchAddQuiz), fork(watchSearchKeyword), fork(watchSearchHashtag)]);
}
