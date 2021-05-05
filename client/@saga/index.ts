import { all, fork } from "redux-saga/effects";
import axios from "axios";
import blogSaga from "./blog";
import postSaga from "./post";
import userSaga from "./user";
import commentSaga from "./comment";
import { BACKEND_URL } from "../config";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "http://localhost:5000" : BACKEND_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga), fork(commentSaga), fork(blogSaga)]);
}
