import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_CATEGORY_POSTS_REQUEST,
  LOAD_CATEGORY_POSTS_FAILURE,
  LOAD_CATEGORY_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  LOAD_CLASS_POSTS_REQUEST,
  LOAD_CLASS_POSTS_SUCCESS,
  LOAD_CLASS_POSTS_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_CLEAR,
  LOAD_MORE_POSTS_REQUEST,
  LOAD_MORE_POSTS_SUCCESS,
  LOAD_MORE_POSTS_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  ADD_POST_CLEAR,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_CLEAR,
  LOAD_RECENT_POSTS_REQUEST,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_FAILURE,
  UPLOAD_POST_IMAGE_REQUEST,
  UPLOAD_POST_IMAGE_SUCCESS,
  UPLOAD_POST_IMAGE_CLEAR,
  UPLOAD_POST_IMAGE_FAILURE,
  EDIT_POST_CLEAR,
} from "../@reducers/post";
import {
  AddPostInter,
  EditPostInter,
  LikePostData,
  LikePostInter,
  LoadCategoryInter,
  LoadMorePostsData,
  LoadMorePostsInter,
  LoadPostData,
  LoadPostInter,
  LoadRecentPostInter,
  NewPostData,
  RemovePostData,
  RemovePostInter,
  UploadImageData,
  UploadImageInter,
  UploadPostImageInter,
} from "./@sagaTypes";
import { UserInter } from "../@reducers/@reducerTypes";

function addPostAPI(data: NewPostData) {
  return axios.post("/api/post", data);
}

function* addPost(action: AddPostInter) {
  try {
    const { data } = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: ADD_POST_CLEAR,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostsAPI() {
  return axios.get(`/api/post`);
}

function* loadPosts() {
  try {
    const { data } = yield call(loadPostsAPI);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadCategoryPostsAPI(data: string) {
  return axios.get(`/api/post/category/${data}`);
}

function* loadCategoryPosts(action: LoadCategoryInter) {
  try {
    const { data } = yield call(loadCategoryPostsAPI, action.data);
    yield put({
      type: LOAD_CATEGORY_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CATEGORY_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMorePostsAPI(data: LoadMorePostsData) {
  return axios.get(`/api/post/morepost/${data.category}?lastId=${data.LastId}`);
}

function* loadMorePosts(action: LoadMorePostsInter) {
  try {
    const { data } = yield call(loadMorePostsAPI, action.data);
    yield put({
      type: LOAD_MORE_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MORE_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadClassPostsAPI() {
  return axios.get(`/api/post/class`);
}

function* loadClassPosts() {
  try {
    const { data } = yield call(loadClassPostsAPI);
    yield put({
      type: LOAD_CLASS_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CLASS_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data: LoadPostData) {
  return axios.get(`/api/post/onePost/${data.postId}/${data.UserId}/${data.category}`);
}
function* loadPost(action: LoadPostInter) {
  try {
    const { data } = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function loadRecentPostsAPI(data: UserInter) {
  return axios.post(`/api/post/recent`, data);
}
function* loadRecentPosts(action: LoadRecentPostInter) {
  try {
    const { data } = yield call(loadRecentPostsAPI, action.data);
    yield put({
      type: LOAD_RECENT_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_RECENT_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function likePostAPI(data: LikePostData) {
  return axios.patch(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* likePost(action: LikePostInter) {
  try {
    const { data } = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function unlikePostAPI(data: LikePostData) {
  return axios.delete(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* unlikePost(action: LikePostInter) {
  try {
    const { data } = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data: UploadImageData) {
  return axios.post("/api/post/images", data);
}

function* uploadImages(action: UploadImageInter) {
  try {
    const { data } = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: UPLOAD_IMAGES_CLEAR,
    });
  } catch (err) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadPostImageAPI(data: UploadImageData) {
  return axios.post("/api/post/image", data);
}

function* uploadPostImage(action: UploadPostImageInter) {
  try {
    const { data } = yield call(uploadPostImageAPI, action.data);
    yield put({
      type: UPLOAD_POST_IMAGE_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: UPLOAD_POST_IMAGE_CLEAR,
    });
  } catch (err) {
    yield put({
      type: UPLOAD_POST_IMAGE_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: UPLOAD_POST_IMAGE_CLEAR,
    });
  }
}

function removePostAPI(data: RemovePostData) {
  return axios.post(`api/post/delete`, data);
}

function* removePost(action: RemovePostInter) {
  try {
    const { data } = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: REMOVE_POST_CLEAR,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function editPostAPI(data: NewPostData) {
  return axios.post(`api/post/edit`, data);
}

function* editPost(action: EditPostInter) {
  try {
    const { data } = yield call(editPostAPI, action.data);
    yield put({
      type: EDIT_POST_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: EDIT_POST_CLEAR,
    });
  } catch (err) {
    yield put({
      type: EDIT_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchloadCategoryPosts() {
  yield takeLatest(LOAD_CATEGORY_POSTS_REQUEST, loadCategoryPosts);
}
function* watchloadMorePosts() {
  yield takeLatest(LOAD_MORE_POSTS_REQUEST, loadMorePosts);
}
function* watchLoadRecentPosts() {
  yield takeLatest(LOAD_RECENT_POSTS_REQUEST, loadRecentPosts);
}
function* watchloadClassPosts() {
  yield takeLatest(LOAD_CLASS_POSTS_REQUEST, loadClassPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchUploadPostImage() {
  yield takeLatest(UPLOAD_POST_IMAGE_REQUEST, uploadPostImage);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchloadCategoryPosts),
    fork(watchloadMorePosts),
    fork(watchloadClassPosts),
    fork(watchLoadPost),
    fork(watchLoadRecentPosts),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchUploadImages),
    fork(watchUploadPostImage),
    fork(watchRemovePost),
    fork(watchEditPost),
  ]);
}
