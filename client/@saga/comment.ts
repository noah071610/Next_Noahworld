import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LIKE_COMMENT_REQUEST,
  UNLIKE_COMMENT_REQUEST,
  ADD_SUB_COMMENT_REQUEST,
  REMOVE_SUB_COMMENT_REQUEST,
  EDIT_SUB_COMMENT_REQUEST,
  REMOVE_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_CLEAR,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_CLEAR,
  EDIT_COMMENT_FAILURE,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  UNLIKE_COMMENT_SUCCESS,
  UNLIKE_COMMENT_FAILURE,
  ADD_SUB_COMMENT_SUCCESS,
  ADD_SUB_COMMENT_CLEAR,
  ADD_SUB_COMMENT_FAILURE,
  REMOVE_SUB_COMMENT_SUCCESS,
  REMOVE_SUB_COMMENT_FAILURE,
  EDIT_SUB_COMMENT_SUCCESS,
  EDIT_SUB_COMMENT_CLEAR,
  EDIT_SUB_COMMENT_FAILURE,
} from "../@reducers/post";
import {
  AddCommentData,
  AddCommentInter,
  AddSubCommentData,
  AddSubCommentInter,
  EditCommentData,
  EditCommentInter,
  EditSubCommentInter,
  LikeCommentData,
  LikeCommentInter,
  RemoveCommentInter,
  RemoveSubCommentInter,
  SubCommentData,
  UnlikeCommentInter,
} from "./@sagaTypes";

function addCommentAPI(data: AddCommentData) {
  return axios.post(`/api/comment/${data.postId}`, data);
}

function* addComment(action: AddCommentInter) {
  try {
    const { data } = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: ADD_COMMENT_CLEAR,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function removeCommentAPI(data: number) {
  return axios.delete(`/api/comment/${data}`);
}

function* removeComment(action: RemoveCommentInter) {
  try {
    const { data } = yield call(removeCommentAPI, action.data);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function editCommentAPI(data: EditCommentData) {
  return axios.post(`api/comment/edit/${data.CommentId}/`, data);
}

function* editComment(action: EditCommentInter) {
  try {
    const { data } = yield call(editCommentAPI, action.data);
    yield put({
      type: EDIT_COMMENT_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: EDIT_COMMENT_CLEAR,
    });
  } catch (err) {
    yield put({
      type: EDIT_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}
function likeCommentAPI(data: LikeCommentData) {
  return axios.patch(`/api/comment/like/${data.UserId}/${data.CommentId}`);
}

function* likeComment(action: LikeCommentInter) {
  try {
    const { data } = yield call(likeCommentAPI, action.data);
    yield put({
      type: LIKE_COMMENT_SUCCESS,
      data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function unlikeCommentAPI(data: LikeCommentData) {
  return axios.delete(`/api/comment/unlike/${data.UserId}/${data.CommentId}`);
}

function* unlikeComment(action: UnlikeCommentInter) {
  try {
    const { data } = yield call(unlikeCommentAPI, action.data);
    yield put({
      type: UNLIKE_COMMENT_SUCCESS,
      data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function addSubCommentAPI(data: AddSubCommentData) {
  return axios.post(`/api/comment/sub/${data.CommentId}`, data);
}

function* addSubComment(action: AddSubCommentInter) {
  try {
    const { data } = yield call(addSubCommentAPI, action.data);
    yield put({
      type: ADD_SUB_COMMENT_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: ADD_SUB_COMMENT_CLEAR,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_SUB_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function removeSubCommentAPI(data: SubCommentData) {
  return axios.delete(`/api/comment/sub/${data.CommentId}/${data.SubCommentId}`);
}

function* removeSubComment(action: RemoveSubCommentInter) {
  try {
    const { data } = yield call(removeSubCommentAPI, action.data);
    yield put({
      type: REMOVE_SUB_COMMENT_SUCCESS,
      data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: REMOVE_SUB_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function editSubCommentAPI(data: SubCommentData) {
  return axios.post(`api/comment/sub/edit/${data.CommentId}/${data.SubCommentId}`, data);
}

function* editSubComment(action: EditSubCommentInter) {
  try {
    const { data } = yield call(editSubCommentAPI, action.data);
    console.log(data);
    yield put({
      type: EDIT_SUB_COMMENT_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: EDIT_SUB_COMMENT_CLEAR,
    });
  } catch (err) {
    yield put({
      type: EDIT_SUB_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}
function* watchEditComment() {
  yield takeLatest(EDIT_COMMENT_REQUEST, editComment);
}
function* watchLikeComment() {
  yield takeLatest(LIKE_COMMENT_REQUEST, likeComment);
}
function* watchUnlikeComment() {
  yield takeLatest(UNLIKE_COMMENT_REQUEST, unlikeComment);
}
function* watchAddSubComment() {
  yield takeLatest(ADD_SUB_COMMENT_REQUEST, addSubComment);
}
function* watchRemoveSubComment() {
  yield takeLatest(REMOVE_SUB_COMMENT_REQUEST, removeSubComment);
}
function* watchEditSubComment() {
  yield takeLatest(EDIT_SUB_COMMENT_REQUEST, editSubComment);
}

export default function* commentSaga() {
  yield all([
    fork(watchAddComment),
    fork(watchRemoveComment),
    fork(watchEditComment),
    fork(watchLikeComment),
    fork(watchUnlikeComment),
    fork(watchAddSubComment),
    fork(watchRemoveSubComment),
    fork(watchEditSubComment),
  ]);
}
