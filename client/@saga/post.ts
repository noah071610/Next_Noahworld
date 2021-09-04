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
  UPLOAD_POST_IMAGE_REQUEST,
  UPLOAD_POST_IMAGE_SUCCESS,
  UPLOAD_POST_IMAGE_CLEAR,
  UPLOAD_POST_IMAGE_FAILURE,
  EDIT_POST_CLEAR,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_CLEAR,
  SEARCH_POST_FAILURE,
  SEARCH_POST_REQUEST,
  LOAD_SIDE_POST_REQUEST,
  LOAD_SIDE_POST_SUCCESS,
  LOAD_SIDE_POST_FAILURE,
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
  LoadSidePostData,
  LoadSidePostInter,
  NewPostData,
  RemovePostData,
  RemovePostInter,
  SearchPostData,
  SearchPostInter,
  UploadImageData,
  UploadImageInter,
  UploadPostImageInter,
} from "./@sagaTypes";

function searchPostAPI(data: SearchPostData) {
  return axios.post(`/api/post/search`, data);
}

function* searchPost(action: SearchPostInter) {
  try {
    const { data } = yield call(searchPostAPI, action.data);
    yield put({
      type: SEARCH_POST_SUCCESS,
      data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_POST_CLEAR,
    });
  } catch (err) {
    yield put({
      type: SEARCH_POST_FAILURE,
      error: err.response.data,
    });
    yield delay(3000);
    yield put({
      type: SEARCH_POST_CLEAR,
    });
  }
}

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

function loadCategoryPostsAPI(data: any) {
  return axios.get(`/api/post/category/${data.category}/${encodeURIComponent(data.hashtag || "")}`);
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

function loadPostAPI(data: LoadPostData) {
  return axios.get(`/api/post/onePost/${data.postId}/${data.category}/${data.ssr}`);
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

function loadSidePostAPI(data: LoadSidePostData) {
  return axios.get(`/api/post/sidePost/${data.postId}/${data.category}`);
}
function* loadSidePost(action: LoadSidePostInter) {
  try {
    const { data } = yield call(loadSidePostAPI, action.data);
    yield put({
      type: LOAD_SIDE_POST_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: LOAD_SIDE_POST_FAILURE,
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

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLoadSidePost() {
  yield takeLatest(LOAD_SIDE_POST_REQUEST, loadSidePost);
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
function* watchSearchPost() {
  yield takeLatest(SEARCH_POST_REQUEST, searchPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchloadCategoryPosts),
    fork(watchloadMorePosts),
    fork(watchLoadPost),
    fork(watchLoadSidePost),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchUploadImages),
    fork(watchUploadPostImage),
    fork(watchRemovePost),
    fork(watchEditPost),
    fork(watchSearchPost),
  ]);
}
