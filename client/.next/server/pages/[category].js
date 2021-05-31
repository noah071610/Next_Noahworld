module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dHh9");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "B9PA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./@reducers/user.ts
var user = __webpack_require__("N61D");

// EXTERNAL MODULE: ./@reducers/post.ts
var post = __webpack_require__("SDl8");

// EXTERNAL MODULE: ./@reducers/blog.ts
var blog = __webpack_require__("ZX5X");

// CONCATENATED MODULE: ./@reducers/index.ts






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          post: post["ub" /* default */],
          blog: blog["s" /* default */],
          user: user["R" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ var _reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./@saga/blog.ts




function addQuizAPI(data) {
  return external_axios_default.a.post(`/api/quiz`, data);
}

function* addQuiz(action) {
  try {
    yield Object(effects_["call"])(addQuizAPI, action.data);
    yield Object(effects_["put"])({
      type: blog["d" /* ADD_QUIZ_SUCCESS */]
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["a" /* ADD_QUIZ_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: blog["b" /* ADD_QUIZ_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["a" /* ADD_QUIZ_CLEAR */]
    });
  }
}

function searchKeywordAPI(data) {
  return external_axios_default.a.post(`/api/search/`, data);
}

function* searchKeyword(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(searchKeywordAPI, action.data);
    yield Object(effects_["put"])({
      type: blog["r" /* SEARCH_KEYWORD_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["o" /* SEARCH_KEYWORD_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: blog["p" /* SEARCH_KEYWORD_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["o" /* SEARCH_KEYWORD_CLEAR */]
    });
  }
}

function searchHashtagAPI(data) {
  return external_axios_default.a.post(`/api/search/hashtag`, data);
}

function* searchHashtag(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(searchHashtagAPI, action.data);
    yield Object(effects_["put"])({
      type: blog["n" /* SEARCH_HASH_TAG_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["k" /* SEARCH_HASH_TAG_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: blog["l" /* SEARCH_HASH_TAG_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: blog["k" /* SEARCH_HASH_TAG_CLEAR */]
    });
  }
}

function* watchAddQuiz() {
  yield Object(effects_["takeLatest"])(blog["c" /* ADD_QUIZ_REQUEST */], addQuiz);
}

function* watchSearchKeyword() {
  yield Object(effects_["takeLatest"])(blog["q" /* SEARCH_KEYWORD_REQUEST */], searchKeyword);
}

function* watchSearchHashtag() {
  yield Object(effects_["takeLatest"])(blog["m" /* SEARCH_HASH_TAG_REQUEST */], searchHashtag);
}

function* blogSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddQuiz), Object(effects_["fork"])(watchSearchKeyword), Object(effects_["fork"])(watchSearchHashtag)]);
}
// CONCATENATED MODULE: ./@saga/post.ts




function addPostAPI(data) {
  return external_axios_default.a.post("/api/post", data);
}

function* addPost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["h" /* ADD_POST_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["e" /* ADD_POST_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostsAPI() {
  return external_axios_default.a.get(`/api/post`);
}

function* loadPosts() {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadPostsAPI);
    yield Object(effects_["put"])({
      type: post["P" /* LOAD_POSTS_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["N" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadCategoryPostsAPI(data) {
  return external_axios_default.a.get(`/api/post/category/${data}`);
}

function* loadCategoryPosts(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadCategoryPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["G" /* LOAD_CATEGORY_POSTS_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["E" /* LOAD_CATEGORY_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadMorePostsAPI(data) {
  return external_axios_default.a.get(`/api/post/morepost/${data.category}?lastId=${data.LastId}`);
}

function* loadMorePosts(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadMorePostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["M" /* LOAD_MORE_POSTS_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["K" /* LOAD_MORE_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadClassPostsAPI() {
  return external_axios_default.a.get(`/api/post/class`);
}

function* loadClassPosts() {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadClassPostsAPI);
    yield Object(effects_["put"])({
      type: post["J" /* LOAD_CLASS_POSTS_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["H" /* LOAD_CLASS_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/api/post/onePost/${data.postId}/${data.UserId}/${data.category}`);
}

function* loadPost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["S" /* LOAD_POST_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["Q" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadRecentPostsAPI(data) {
  return external_axios_default.a.post(`/api/post/recent`, data);
}

function* loadRecentPosts(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadRecentPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["V" /* LOAD_RECENT_POSTS_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["T" /* LOAD_RECENT_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return external_axios_default.a.patch(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* likePost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["D" /* LIKE_POST_SUCCESS */],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["B" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* unlikePost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["lb" /* UNLIKE_POST_SUCCESS */],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["jb" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post("/api/post/images", data);
}

function* uploadImages(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["pb" /* UPLOAD_IMAGES_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["mb" /* UPLOAD_IMAGES_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["nb" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadPostImageAPI(data) {
  return external_axios_default.a.post("/api/post/image", data);
}

function* uploadPostImage(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(uploadPostImageAPI, action.data);
    yield Object(effects_["put"])({
      type: post["tb" /* UPLOAD_POST_IMAGE_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["qb" /* UPLOAD_POST_IMAGE_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["rb" /* UPLOAD_POST_IMAGE_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["qb" /* UPLOAD_POST_IMAGE_CLEAR */]
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.post(`api/post/delete`, data);
}

function* removePost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["cb" /* REMOVE_POST_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["Z" /* REMOVE_POST_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["ab" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function editPostAPI(data) {
  return external_axios_default.a.post(`api/post/edit`, data);
}

function* editPost(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(editPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["t" /* EDIT_POST_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["q" /* EDIT_POST_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["r" /* EDIT_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["g" /* ADD_POST_REQUEST */], addPost);
}

function* watchLoadPosts() {
  yield Object(effects_["takeLatest"])(post["O" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchloadCategoryPosts() {
  yield Object(effects_["takeLatest"])(post["F" /* LOAD_CATEGORY_POSTS_REQUEST */], loadCategoryPosts);
}

function* watchloadMorePosts() {
  yield Object(effects_["takeLatest"])(post["L" /* LOAD_MORE_POSTS_REQUEST */], loadMorePosts);
}

function* watchLoadRecentPosts() {
  yield Object(effects_["takeLatest"])(post["U" /* LOAD_RECENT_POSTS_REQUEST */], loadRecentPosts);
}

function* watchloadClassPosts() {
  yield Object(effects_["takeLatest"])(post["I" /* LOAD_CLASS_POSTS_REQUEST */], loadClassPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["R" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["C" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["kb" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["bb" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchEditPost() {
  yield Object(effects_["takeLatest"])(post["s" /* EDIT_POST_REQUEST */], editPost);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["ob" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchUploadPostImage() {
  yield Object(effects_["takeLatest"])(post["sb" /* UPLOAD_POST_IMAGE_REQUEST */], uploadPostImage);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchloadCategoryPosts), Object(effects_["fork"])(watchloadMorePosts), Object(effects_["fork"])(watchloadClassPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadRecentPosts), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchUploadPostImage), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchEditPost)]);
}
// CONCATENATED MODULE: ./@saga/user.ts




function logInAPI(data) {
  return external_axios_default.a.post("/api/user/logIn", data);
}

function* logIn(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: user["A" /* LOG_IN_SUCCESS */],
      data: data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["t" /* LOG_IN_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["u" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["t" /* LOG_IN_CLEAR */]
    });
  }
}

function logInGoogleAPI() {
  return external_axios_default.a.get("/auth/google");
}

function* logInGoogle() {
  try {
    yield Object(effects_["call"])(logInGoogleAPI);
    yield Object(effects_["put"])({
      type: user["y" /* LOG_IN_GOOGLE_SUCCESS */]
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["v" /* LOG_IN_GOOGLE_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["w" /* LOG_IN_GOOGLE_FAILURE */],
      error: err.response
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["t" /* LOG_IN_CLEAR */]
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post("/api/user/logOut");
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["E" /* LOG_OUT_SUCCESS */]
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["B" /* LOG_OUT_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["C" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["B" /* LOG_OUT_CLEAR */]
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post("/api/user/signUp", data);
}

function* signUp(action) {
  try {
    yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: user["M" /* SIGN_UP_SUCCESS */]
    });
    yield Object(effects_["delay"])(5000);
    yield Object(effects_["put"])({
      type: user["J" /* SIGN_UP_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["K" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function addIconAPI(data) {
  return external_axios_default.a.post("/api/user/icon", data);
}

function* addIcon(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(addIconAPI, action.data);
    yield Object(effects_["put"])({
      type: user["d" /* ADD_ICON_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["a" /* ADD_ICON_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["b" /* ADD_ICON_FAILURE */],
      error: err.response.data
    });
  }
}

function removeIconAPI(data) {
  return external_axios_default.a.delete(`/api/user/icon/${data}`);
}

function* removeIcon(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(removeIconAPI, action.data);
    yield Object(effects_["put"])({
      type: user["I" /* REMOVE_ICON_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["F" /* REMOVE_ICON_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["G" /* REMOVE_ICON_FAILURE */],
      error: err.response.data
    });
  }
}

function loadInfoAPI() {
  return external_axios_default.a.get("/api/user");
}

function* loadInfo() {
  try {
    const {
      data
    } = yield Object(effects_["call"])(loadInfoAPI);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_INFO_SUCCESS */],
      data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["q" /* LOAD_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function confirmPasswordAPI(data) {
  return external_axios_default.a.post(`api/user/confirm`, data);
}

function* confirmPassword(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(confirmPasswordAPI, action.data);
    yield Object(effects_["put"])({
      type: user["p" /* CONFIRM_PASSWORD_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["m" /* CONFIRM_PASSWORD_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["n" /* CONFIRM_PASSWORD_FAILURE */],
      error: err.response.data
    });
  }
}

function changePasswordAPI(data) {
  return external_axios_default.a.post(`api/user/password`, data);
}

function* changePassword(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(changePasswordAPI, action.data);
    yield Object(effects_["put"])({
      type: user["l" /* CHANGE_PASSWORD_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["i" /* CHANGE_PASSWORD_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["j" /* CHANGE_PASSWORD_FAILURE */],
      error: err.response.data
    });
  }
}

function changeNameAPI(data) {
  return external_axios_default.a.post(`api/user/name`, data);
}

function* changeName(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(changeNameAPI, action.data);
    yield Object(effects_["put"])({
      type: user["h" /* CHANGE_NAME_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["e" /* CHANGE_NAME_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["f" /* CHANGE_NAME_FAILURE */],
      error: err.response.data
    });
  }
}

function withdrawalAPI(data) {
  return external_axios_default.a.delete(`api/user/${data}`);
}

function* withdrawal(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(withdrawalAPI, action.data);
    yield Object(effects_["put"])({
      type: user["Q" /* WITHDRWAL_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: user["N" /* WITHDRWAL_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["O" /* WITHDRWAL_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["z" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogInGoogle() {
  yield Object(effects_["takeLatest"])(user["x" /* LOG_IN_GOOGLE_REQUEST */], logInGoogle);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["D" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["L" /* SIGN_UP_REQUEST */], signUp);
}

function* watchAddIcon() {
  yield Object(effects_["takeLatest"])(user["c" /* ADD_ICON_REQUEST */], addIcon);
}

function* watchRemoveIcon() {
  yield Object(effects_["takeLatest"])(user["H" /* REMOVE_ICON_REQUEST */], removeIcon);
}

function* watchLoadInfo() {
  yield Object(effects_["takeLatest"])(user["r" /* LOAD_INFO_REQUEST */], loadInfo);
}

function* watchConfirmPassword() {
  yield Object(effects_["takeLatest"])(user["o" /* CONFIRM_PASSWORD_REQUEST */], confirmPassword);
}

function* watchChangePassword() {
  yield Object(effects_["takeLatest"])(user["k" /* CHANGE_PASSWORD_REQUEST */], changePassword);
}

function* watchChangeName() {
  yield Object(effects_["takeLatest"])(user["g" /* CHANGE_NAME_REQUEST */], changeName);
}

function* watchWithdrawal() {
  yield Object(effects_["takeLatest"])(user["P" /* WITHDRWAL_REQUEST */], withdrawal);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogInGoogle), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchAddIcon), Object(effects_["fork"])(watchRemoveIcon), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadInfo), Object(effects_["fork"])(watchConfirmPassword), Object(effects_["fork"])(watchChangePassword), Object(effects_["fork"])(watchChangeName), Object(effects_["fork"])(watchWithdrawal)]);
}
// CONCATENATED MODULE: ./@saga/comment.ts




function addCommentAPI(data) {
  return external_axios_default.a.post(`/api/comment/${data.postId}`, data);
}

function* addComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_COMMENT_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_CLEAR */]
    });
  } catch (err) {
    console.log(err);
    yield Object(effects_["put"])({
      type: post["b" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function removeCommentAPI(data) {
  return external_axios_default.a.delete(`/api/comment/${data}`);
}

function* removeComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(removeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["Y" /* REMOVE_COMMENT_SUCCESS */],
      data
    });
  } catch (err) {
    console.log(err);
    yield Object(effects_["put"])({
      type: post["W" /* REMOVE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function editCommentAPI(data) {
  return external_axios_default.a.post(`api/comment/edit/${data.CommentId}/`, data);
}

function* editComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(editCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["p" /* EDIT_COMMENT_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["m" /* EDIT_COMMENT_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["n" /* EDIT_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function likeCommentAPI(data) {
  return external_axios_default.a.patch(`/api/comment/like/${data.UserId}/${data.CommentId}`);
}

function* likeComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(likeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["A" /* LIKE_COMMENT_SUCCESS */],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["y" /* LIKE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function unlikeCommentAPI(data) {
  return external_axios_default.a.delete(`/api/comment/unlike/${data.UserId}/${data.CommentId}`);
}

function* unlikeComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(unlikeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["ib" /* UNLIKE_COMMENT_SUCCESS */],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["gb" /* UNLIKE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function addSubCommentAPI(data) {
  return external_axios_default.a.post(`/api/comment/sub/${data.CommentId}`, data);
}

function* addSubComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(addSubCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* ADD_SUB_COMMENT_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["i" /* ADD_SUB_COMMENT_CLEAR */]
    });
  } catch (err) {
    console.log(err);
    yield Object(effects_["put"])({
      type: post["j" /* ADD_SUB_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function removeSubCommentAPI(data) {
  return external_axios_default.a.delete(`/api/comment/sub/${data.CommentId}/${data.SubCommentId}`);
}

function* removeSubComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(removeSubCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["fb" /* REMOVE_SUB_COMMENT_SUCCESS */],
      data
    });
  } catch (err) {
    console.log(err);
    yield Object(effects_["put"])({
      type: post["db" /* REMOVE_SUB_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function editSubCommentAPI(data) {
  return external_axios_default.a.post(`api/comment/sub/edit/${data.CommentId}/${data.SubCommentId}`, data);
}

function* editSubComment(action) {
  try {
    const {
      data
    } = yield Object(effects_["call"])(editSubCommentAPI, action.data);
    console.log(data);
    yield Object(effects_["put"])({
      type: post["x" /* EDIT_SUB_COMMENT_SUCCESS */],
      data
    });
    yield Object(effects_["delay"])(3000);
    yield Object(effects_["put"])({
      type: post["u" /* EDIT_SUB_COMMENT_CLEAR */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["v" /* EDIT_SUB_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["c" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(post["X" /* REMOVE_COMMENT_REQUEST */], removeComment);
}

function* watchEditComment() {
  yield Object(effects_["takeLatest"])(post["o" /* EDIT_COMMENT_REQUEST */], editComment);
}

function* watchLikeComment() {
  yield Object(effects_["takeLatest"])(post["z" /* LIKE_COMMENT_REQUEST */], likeComment);
}

function* watchUnlikeComment() {
  yield Object(effects_["takeLatest"])(post["hb" /* UNLIKE_COMMENT_REQUEST */], unlikeComment);
}

function* watchAddSubComment() {
  yield Object(effects_["takeLatest"])(post["k" /* ADD_SUB_COMMENT_REQUEST */], addSubComment);
}

function* watchRemoveSubComment() {
  yield Object(effects_["takeLatest"])(post["eb" /* REMOVE_SUB_COMMENT_REQUEST */], removeSubComment);
}

function* watchEditSubComment() {
  yield Object(effects_["takeLatest"])(post["w" /* EDIT_SUB_COMMENT_REQUEST */], editSubComment);
}

function* commentSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemoveComment), Object(effects_["fork"])(watchEditComment), Object(effects_["fork"])(watchLikeComment), Object(effects_["fork"])(watchUnlikeComment), Object(effects_["fork"])(watchAddSubComment), Object(effects_["fork"])(watchRemoveSubComment), Object(effects_["fork"])(watchEditSubComment)]);
}
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./@saga/index.ts







external_axios_default.a.defaults.baseURL = false ? undefined : config["a" /* BACKEND_URL */];
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga), Object(effects_["fork"])(commentSaga), Object(effects_["fork"])(blogSaga)]);
}
// CONCATENATED MODULE: ./@store/configureStore.ts







const configureStore = initialState => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(_reducers, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var _store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Kps4":
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "N61D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_IN_GOOGLE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_IN_GOOGLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_IN_GOOGLE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_GOOGLE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LOG_OUT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SIGN_UP_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_ICON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_ICON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ICON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ICON_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return REMOVE_ICON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return REMOVE_ICON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REMOVE_ICON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return REMOVE_ICON_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CHANGE_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CHANGE_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHANGE_PASSWORD_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_NAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHANGE_NAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_NAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_NAME_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return WITHDRWAL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return WITHDRWAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return WITHDRWAL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return WITHDRWAL_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CONFIRM_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CONFIRM_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CONFIRM_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CONFIRM_PASSWORD_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  user: null,
  imagePath: null,
  confirmPassword: false,
  logInLoading: false,
  logInDone: false,
  logInError: false,
  logInGoogleLoading: false,
  logInGoogleDone: false,
  logInGoogleError: false,
  logOutLoading: false,
  logOutDone: false,
  logOutError: false,
  loadInfoLoading: false,
  loadInfoDone: false,
  loadInfoError: false,
  signUpLoading: false,
  signUpDone: false,
  signUpError: false,
  addIconLoading: false,
  addIconDone: false,
  addIconError: false,
  removeIconLoading: false,
  removeIconDone: false,
  removeIconError: false,
  confirmPasswordLoading: false,
  confirmPasswordDone: false,
  confirmPasswordError: false,
  withdrawalLoading: false,
  withdrawalDone: false,
  withdrawalError: false,
  changePasswordLoading: false,
  changePasswordDone: false,
  changePasswordError: false,
  changeNameLoading: false,
  changeNameDone: false,
  changeNameError: false
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_IN_CLEAR = "LOG_IN_CLEAR";
const LOG_IN_GOOGLE_REQUEST = "LOG_IN_GOOGLE_REQUEST";
const LOG_IN_GOOGLE_SUCCESS = "LOG_IN_GOOGLE_SUCCESS";
const LOG_IN_GOOGLE_FAILURE = "LOG_IN_GOOGLE_FAILURE";
const LOG_IN_GOOGLE_CLEAR = "LOG_IN_GOOGLE_CLEAR";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const LOG_OUT_CLEAR = "LOG_OUT_CLEAR";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const SIGN_UP_CLEAR = "SIGN_UP_CLEAR";
const LOAD_INFO_REQUEST = "LOAD_INFO_REQUEST";
const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE";
const ADD_ICON_REQUEST = "ADD_ICON_REQUEST";
const ADD_ICON_SUCCESS = "ADD_ICON_SUCCESS";
const ADD_ICON_FAILURE = "ADD_ICON_FAILURE";
const ADD_ICON_CLEAR = "ADD_ICON_CLEAR";
const REMOVE_ICON_REQUEST = "REMOVE_ICON_REQUEST";
const REMOVE_ICON_SUCCESS = "REMOVE_ICON_SUCCESS";
const REMOVE_ICON_FAILURE = "REMOVE_ICON_FAILURE";
const REMOVE_ICON_CLEAR = "REMOVE_ICON_CLEAR";
const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
const CHANGE_PASSWORD_CLEAR = "CHANGE_PASSWORD_CLEAR";
const CHANGE_NAME_REQUEST = "CHANGE_NAME_REQUEST";
const CHANGE_NAME_SUCCESS = "CHANGE_NAME_SUCCESS";
const CHANGE_NAME_FAILURE = "CHANGE_NAME_FAILURE";
const CHANGE_NAME_CLEAR = "CHANGE_NAME_CLEAR";
const WITHDRWAL_REQUEST = "WITHDRWAL_REQUEST";
const WITHDRWAL_SUCCESS = "WITHDRWAL_SUCCESS";
const WITHDRWAL_FAILURE = "WITHDRWAL_FAILURE";
const WITHDRWAL_CLEAR = "WITHDRWAL_CLEAR";
const CONFIRM_PASSWORD_REQUEST = "CONFIRM_PASSWORD_REQUEST";
const CONFIRM_PASSWORD_SUCCESS = "CONFIRM_PASSWORD_SUCCESS";
const CONFIRM_PASSWORD_FAILURE = "CONFIRM_PASSWORD_FAILURE";
const CONFIRM_PASSWORD_CLEAR = "CONFIRM_PASSWORD_CLEAR";

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = false;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.user = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_IN_CLEAR:
      draft.logInError = false;
      draft.logInDone = false;
      break;

    case LOG_IN_GOOGLE_REQUEST:
      draft.logInGoogleLoading = true;
      draft.logInGoogleError = false;
      draft.logInGoogleDone = false;
      break;

    case LOG_IN_GOOGLE_SUCCESS:
      draft.logInGoogleLoading = false;
      draft.logInGoogleDone = true;
      draft.user = action.data.data;
      break;

    case LOG_IN_GOOGLE_FAILURE:
      draft.logInGoogleLoading = false;
      draft.logInGoogleError = action.error;
      break;

    case LOG_IN_GOOGLE_CLEAR:
      draft.logInGoogleError = false;
      draft.logInGoogleDone = false;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = false;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.user = false;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case LOG_OUT_CLEAR:
      draft.logOutError = false;
      draft.logOutDone = false;
      break;

    case LOAD_INFO_REQUEST:
      draft.loadInfoLoading = true;
      draft.loadInfoDone = false;
      draft.loadInfoError = false;
      break;

    case LOAD_INFO_SUCCESS:
      draft.loadInfoLoading = false;
      draft.loadInfoDone = true;
      draft.user = action.data;
      break;

    case LOAD_INFO_FAILURE:
      draft.loadInfoLoading = false;
      draft.loadInfoError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = false;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      draft.onSignUpPage = false;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case SIGN_UP_CLEAR:
      draft.signUpError = false;
      draft.signUpDone = false;
      break;

    case ADD_ICON_REQUEST:
      draft.addIconLoading = true;
      draft.addIconError = false;
      draft.addIconDone = false;
      break;

    case ADD_ICON_SUCCESS:
      draft.addIconLoading = false;
      draft.addIconDone = true;
      draft.user.icon = action.data;
      break;

    case ADD_ICON_FAILURE:
      draft.addIconLoading = false;
      draft.addIconError = action.error;
      break;

    case ADD_ICON_CLEAR:
      draft.addIconLoading = false;
      draft.addIconDone = false;
      draft.addIconError = false;
      break;

    case REMOVE_ICON_REQUEST:
      draft.removeIconLoading = true;
      draft.removeIconError = false;
      draft.removeIconDone = false;
      break;

    case REMOVE_ICON_SUCCESS:
      draft.removeIconLoading = false;
      draft.removeIconDone = true;
      draft.user.icon = "/images/blog/default-user.png";
      break;

    case REMOVE_ICON_FAILURE:
      draft.removeIconLoading = false;
      draft.removeIconError = action.error;
      break;

    case REMOVE_ICON_CLEAR:
      draft.removeIconLoading = false;
      draft.removeIconDone = false;
      draft.removeIconError = false;
      break;

    case CONFIRM_PASSWORD_REQUEST:
      draft.confirmPasswordLoading = true;
      draft.confirmPasswordError = false;
      draft.confirmPasswordDone = false;
      break;

    case CONFIRM_PASSWORD_SUCCESS:
      draft.confirmPasswordLoading = false;
      draft.confirmPasswordDone = true;
      draft.confirmPassword = true;
      break;

    case CONFIRM_PASSWORD_FAILURE:
      draft.confirmPasswordLoading = false;
      draft.confirmPasswordError = action.error;
      break;

    case CONFIRM_PASSWORD_CLEAR:
      draft.confirmPasswordLoading = false;
      draft.confirmPasswordError = false;
      draft.confirmPasswordDone = false;
      break;

    case CHANGE_PASSWORD_REQUEST:
      draft.changePasswordLoading = true;
      draft.changePasswordError = false;
      draft.changePasswordDone = false;
      break;

    case CHANGE_PASSWORD_SUCCESS:
      draft.changePasswordLoading = false;
      draft.changePasswordDone = true;
      break;

    case CHANGE_PASSWORD_FAILURE:
      draft.changePasswordLoading = false;
      draft.changePasswordError = action.error;
      break;

    case CHANGE_PASSWORD_CLEAR:
      draft.changePasswordLoading = false;
      draft.changePasswordDone = false;
      draft.changePasswordError = false;
      break;

    case CHANGE_NAME_REQUEST:
      draft.changeNameLoading = true;
      draft.changeNameError = false;
      draft.changeNameDone = false;
      break;

    case CHANGE_NAME_SUCCESS:
      draft.changeNameLoading = false;
      draft.changeNameDone = true;
      draft.user.name = action.data.newName;
      break;

    case CHANGE_NAME_FAILURE:
      draft.changeNameLoading = false;
      draft.changeNameError = action.error;
      break;

    case CHANGE_NAME_CLEAR:
      draft.changeNameLoading = false;
      draft.changeNameDone = false;
      draft.changeNameError = false;
      break;

    case WITHDRWAL_REQUEST:
      draft.withdrawalLoading = true;
      draft.withdrawalError = false;
      draft.withdrawalDone = false;
      break;

    case WITHDRWAL_SUCCESS:
      draft.withdrawalLoading = false;
      draft.withdrawalDone = true;
      break;

    case WITHDRWAL_FAILURE:
      draft.withdrawalLoading = false;
      draft.withdrawalError = action.error;
      break;

    case WITHDRWAL_CLEAR:
      draft.withdrawalLoading = false;
      draft.withdrawalError = false;
      draft.withdrawalDone = false;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["R"] = (reducer);

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SDl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return UPLOAD_IMAGES_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return UPLOAD_POST_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return UPLOAD_POST_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return UPLOAD_POST_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return UPLOAD_POST_IMAGE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return LOAD_RECENT_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return LOAD_RECENT_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return LOAD_RECENT_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return LOAD_CATEGORY_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return LOAD_CATEGORY_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return LOAD_CATEGORY_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LOAD_MORE_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return LOAD_MORE_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return LOAD_MORE_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return LOAD_CLASS_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return LOAD_CLASS_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return LOAD_CLASS_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return EDIT_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return EDIT_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return EDIT_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return EDIT_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return REMOVE_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return UNLIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return UNLIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return UNLIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return EDIT_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return EDIT_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return EDIT_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return EDIT_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ADD_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ADD_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ADD_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_SUB_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return REMOVE_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return REMOVE_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return REMOVE_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return EDIT_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return EDIT_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return EDIT_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return EDIT_SUB_COMMENT_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  techPosts: [],
  dailyPosts: [],
  classPosts: [],
  culturePosts: [],
  quizzes: [],
  words: [],
  hashtags: [],
  mostLikedPost: null,
  mostViewedPost: null,
  mostCommentedPost: null,
  post: null,
  prevPost: [],
  nextPost: [],
  countPosts: [],
  imagePath: null,
  postImagePath: null,
  recentViewPost: null,
  recentCommentPost: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: false,
  uploadPostImageLoading: false,
  uploadPostImageDone: false,
  uploadPostImageError: false,
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  editPostLoading: false,
  editPostDone: false,
  editPostError: false,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,
  loadRecentPostsLoading: false,
  loadRecentPostsDone: false,
  loadRecentPostsError: false,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: false,
  loadCategoryPostsLoading: false,
  loadCategoryPostsDone: false,
  loadCategoryPostsError: false,
  loadMorePostsLoading: false,
  loadMorePostsDone: false,
  loadMorePostsError: false,
  loadClassPostsLoading: false,
  loadClassPostsDone: false,
  loadClassPostsError: false,
  likePostLoading: false,
  likePostDone: false,
  likePostError: false,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,
  editCommentLoading: false,
  editCommentDone: false,
  editCommentError: false,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: false,
  likeCommentLoading: false,
  likeCommentDone: false,
  likeCommentError: false,
  unlikeCommentLoading: false,
  unlikeCommentDone: false,
  unlikeCommentError: false,
  addSubCommentLoading: false,
  addSubCommentDone: false,
  addSubCommentError: false,
  editSubCommentLoading: false,
  editSubCommentDone: false,
  editSubCommentError: false,
  removeSubCommentLoading: false,
  removeSubCommentDone: false,
  removeSubCommentError: false,
  hasMorePosts: false
};
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const UPLOAD_IMAGES_CLEAR = "UPLOAD_IMAGES_CLEAR";
const UPLOAD_POST_IMAGE_REQUEST = "UPLOAD_POST_IMAGE_REQUEST";
const UPLOAD_POST_IMAGE_SUCCESS = "UPLOAD_POST_IMAGE_SUCCESS";
const UPLOAD_POST_IMAGE_FAILURE = "UPLOAD_POST_IMAGE_FAILURE";
const UPLOAD_POST_IMAGE_CLEAR = "UPLOAD_POST_IMAGE_CLEAR";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const ADD_POST_CLEAR = "ADD_POST_CLEAR";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_RECENT_POSTS_REQUEST = "LOAD_RECENT_POSTS_REQUEST";
const LOAD_RECENT_POSTS_SUCCESS = "LOAD_RECENT_POSTS_SUCCESS";
const LOAD_RECENT_POSTS_FAILURE = "LOAD_RECENT_POSTS_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_CATEGORY_POSTS_REQUEST = "LOAD_CATEGORY_POSTS_REQUEST";
const LOAD_CATEGORY_POSTS_SUCCESS = "LOAD_CATEGORY_POSTS_SUCCESS";
const LOAD_CATEGORY_POSTS_FAILURE = "LOAD_CATEGORY_POSTS_FAILURE";
const LOAD_MORE_POSTS_REQUEST = "LOAD_MORE_POSTS_REQUEST";
const LOAD_MORE_POSTS_SUCCESS = "LOAD_MORE_POSTS_SUCCESS";
const LOAD_MORE_POSTS_FAILURE = "LOAD_MORE_POSTS_FAILURE";
const LOAD_CLASS_POSTS_REQUEST = "LOAD_CLASS_POSTS_REQUEST";
const LOAD_CLASS_POSTS_SUCCESS = "LOAD_CLASS_POSTS_SUCCESS";
const LOAD_CLASS_POSTS_FAILURE = "LOAD_CLASS_POSTS_FAILURE";
const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";
const EDIT_POST_CLEAR = "EDIT_POST_CLEAR";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const REMOVE_POST_CLEAR = "REMOVE_POST_CLEAR";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LIKE_COMMENT_REQUEST = "LIKE_COMMENT_REQUEST";
const LIKE_COMMENT_SUCCESS = "LIKE_COMMENT_SUCCESS";
const LIKE_COMMENT_FAILURE = "LIKE_COMMENT_FAILURE";
const UNLIKE_COMMENT_REQUEST = "UNLIKE_COMMENT_REQUEST";
const UNLIKE_COMMENT_SUCCESS = "UNLIKE_COMMENT_SUCCESS";
const UNLIKE_COMMENT_FAILURE = "UNLIKE_COMMENT_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const ADD_COMMENT_CLEAR = "ADD_COMMENT_CLEAR";
const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST";
const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS";
const REMOVE_COMMENT_FAILURE = "REMOVE_COMMENT_FAILURE";
const EDIT_COMMENT_REQUEST = "EDIT_COMMENT_REQUEST";
const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";
const EDIT_COMMENT_FAILURE = "EDIT_COMMENT_FAILURE";
const EDIT_COMMENT_CLEAR = "EDIT_COMMENT_CLEAR";
const ADD_SUB_COMMENT_REQUEST = "ADD_SUB_COMMENT_REQUEST";
const ADD_SUB_COMMENT_SUCCESS = "ADD_SUB_COMMENT_SUCCESS";
const ADD_SUB_COMMENT_FAILURE = "ADD_SUB_COMMENT_FAILURE";
const ADD_SUB_COMMENT_CLEAR = "ADD_SUB_COMMENT_CLEAR";
const REMOVE_SUB_COMMENT_REQUEST = "REMOVE_SUB_COMMENT_REQUEST";
const REMOVE_SUB_COMMENT_SUCCESS = "REMOVE_SUB_COMMENT_SUCCESS";
const REMOVE_SUB_COMMENT_FAILURE = "REMOVE_SUB_COMMENT_FAILURE";
const EDIT_SUB_COMMENT_REQUEST = "EDIT_SUB_COMMENT_REQUEST";
const EDIT_SUB_COMMENT_SUCCESS = "EDIT_SUB_COMMENT_SUCCESS";
const EDIT_SUB_COMMENT_FAILURE = "EDIT_SUB_COMMENT_FAILURE";
const EDIT_SUB_COMMENT_CLEAR = "EDIT_SUB_COMMENT_CLEAR";

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostError = false;
      draft.addPostDone = false;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      action.data.category === "tech" && draft.techPosts.unshift(action.data);
      action.data.category === "daily" && draft.dailyPosts.unshift(action.data);
      action.data.category === "class" && draft.classPosts.unshift(action.data);
      action.data.category === "culture" && draft.culturePosts.unshift(action.data);
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case ADD_POST_CLEAR:
      draft.addPostDone = false;
      draft.addPostError = false;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = false;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.techPosts = action.data.techPosts;
      draft.dailyPosts = action.data.dailyPosts;
      draft.hashtags = action.data.hashtags;
      draft.mostViewedPost = action.data.mostViewedPost;
      draft.mostLikedPost = action.data.mostLikedPost;
      draft.mostCommentedPost = action.data.mostCommentedPost;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case LOAD_POST_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = false;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.post = action.data.post;
      draft.prevPost = action.data.prevPost;
      draft.nextPost = action.data.nextPost;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case LOAD_CATEGORY_POSTS_REQUEST:
      draft.loadCategoryPostsLoading = true;
      draft.loadCategoryPostsDone = false;
      draft.loadCategoryPostsError = false;
      break;

    case LOAD_CATEGORY_POSTS_SUCCESS:
      draft.loadCategoryPostsLoading = false;
      draft.loadCategoryPostsDone = true;
      draft.techPosts = action.data.category === "tech" ? action.data.posts : false;
      draft.dailyPosts = action.data.category === "daily" ? action.data.posts : false;
      draft.countPosts = action.data.countPosts;
      draft.hasMorePosts = action.data.posts.length > 6;
      break;

    case LOAD_CATEGORY_POSTS_FAILURE:
      draft.loadCategoryPostsLoading = false;
      draft.loadCategoryPostsError = action.error;
      break;

    case LOAD_MORE_POSTS_REQUEST:
      draft.loadMorePostsLoading = true;
      draft.loadMorePostsDone = false;
      draft.loadMorePostsError = false;
      break;

    case LOAD_MORE_POSTS_SUCCESS:
      draft.loadMorePostsLoading = false;
      draft.loadMorePostsDone = true; //카테고리에 맞는 포스트를 넣어준다.

      const moreTechPosts = action.data.category === "tech" && draft.techPosts.concat(action.data.morePosts);
      const moreDailyPosts = action.data.category === "daily" && draft.dailyPosts.concat(action.data.morePosts);
      draft.techPosts = moreTechPosts;
      draft.dailyPosts = moreDailyPosts; //불러온 포스트가 limit값인 6개라는것은 불러온 포스트가 더 있다는 의미이다.
      //만약 갯수가 딱 맞아서 다음 값이 없다고 해도 그 요청은 0개임으로 false가 된다.

      draft.hasMorePosts = action.data.morePosts.length === 6;
      break;

    case LOAD_MORE_POSTS_FAILURE:
      draft.loadMorePostsLoading = false;
      draft.loadMorePostsError = action.error;
      draft.hasMorePosts = false;
      break;

    case LOAD_CLASS_POSTS_REQUEST:
      draft.loadClassPostsLoading = true;
      draft.loadClassPostsDone = false;
      draft.loadClassPostsError = false;
      break;

    case LOAD_CLASS_POSTS_SUCCESS:
      draft.loadClassPostsLoading = false;
      draft.loadClassPostsDone = true;
      draft.classPosts = action.data.classPosts_class;
      draft.culturePosts = action.data.culturePosts_class;
      draft.quizzes = action.data.quizzes;
      draft.words = action.data.words;
      break;

    case LOAD_CLASS_POSTS_FAILURE:
      draft.loadClassPostsLoading = false;
      draft.loadClassPostsError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = false;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        var _draft$post, _draft$post$Comments;

        (_draft$post = draft.post) === null || _draft$post === void 0 ? void 0 : (_draft$post$Comments = _draft$post.Comments) === null || _draft$post$Comments === void 0 ? void 0 : _draft$post$Comments.push(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case ADD_COMMENT_CLEAR:
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = false;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = false;
      break;

    case LIKE_POST_SUCCESS:
      {
        var _draft$post2, _draft$post2$PostLike;

        (_draft$post2 = draft.post) === null || _draft$post2 === void 0 ? void 0 : (_draft$post2$PostLike = _draft$post2.PostLikers) === null || _draft$post2$PostLike === void 0 ? void 0 : _draft$post2$PostLike.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = false;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        var _draft$post3, _draft$post3$PostLike;

        (_draft$post3 = draft.post) === null || _draft$post3 === void 0 ? void 0 : (_draft$post3$PostLike = _draft$post3.PostLikers) === null || _draft$post3$PostLike === void 0 ? void 0 : _draft$post3$PostLike.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case EDIT_POST_REQUEST:
      draft.editPostLoading = true;
      draft.editPostDone = false;
      draft.editPostError = false;
      break;

    case EDIT_POST_SUCCESS:
      draft.editPostLoading = false;
      draft.editPostDone = true;
      break;

    case EDIT_POST_FAILURE:
      draft.editPostLoading = false;
      draft.editPostError = action.error;
      break;

    case EDIT_POST_CLEAR:
      draft.editPostLoading = false;
      draft.editPostDone = false;
      draft.editPostError = false;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = false;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_CLEAR:
      draft.removePostLoading = false;
      draft.removePostDone = false;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case EDIT_COMMENT_REQUEST:
      draft.editCommentLoading = true;
      draft.editCommentDone = false;
      draft.editCommentError = false;
      break;

    case EDIT_COMMENT_SUCCESS:
      {
        draft.post.Comments.find(v => {
          return v.id === action.data.CommentId;
        }).content = action.data.newComment;
        draft.editCommentLoading = false;
        draft.editCommentDone = true;
        break;
      }

    case EDIT_COMMENT_FAILURE:
      draft.editCommentLoading = false;
      draft.editCommentError = action.error;
      break;

    case EDIT_COMMENT_CLEAR:
      draft.editCommentLoading = false;
      draft.editCommentDone = false;
      draft.editCommentError = false;
      break;

    case REMOVE_COMMENT_REQUEST:
      draft.removeCommentLoading = true;
      draft.removeCommentDone = false;
      draft.removeCommentError = false;
      break;

    case REMOVE_COMMENT_SUCCESS:
      {
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;
      }

    case REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false;
      draft.removeCommentError = action.error;
      break;

    case LIKE_COMMENT_REQUEST:
      draft.likeCommentLoading = true;
      draft.likeCommentDone = false;
      draft.likeCommentError = false;
      break;

    case LIKE_COMMENT_SUCCESS:
      {
        var _draft$post4, _draft$post4$Comments;

        (_draft$post4 = draft.post) === null || _draft$post4 === void 0 ? void 0 : (_draft$post4$Comments = _draft$post4.Comments) === null || _draft$post4$Comments === void 0 ? void 0 : _draft$post4$Comments.find(v => v.id === action.data.CommentId).CommentLikers.push({
          id: action.data.UserId
        });
        draft.likeCommentLoading = false;
        draft.likeCommentDone = true;
        break;
      }

    case LIKE_COMMENT_FAILURE:
      draft.likeCommentLoading = false;
      draft.likeCommentError = action.error;
      break;

    case UNLIKE_COMMENT_REQUEST:
      //REQUEST , SUCCESS , FAILURE 로 Reducer를 쪼개서 오류관리를 보다 쉽게 했습니다.
      draft.unlikeCommentLoading = true;
      draft.unlikeCommentDone = false;
      draft.unlikeCommentError = false;
      break;

    case UNLIKE_COMMENT_SUCCESS:
      {
        var _draft$post5, _draft$post5$Comments;

        //immer 적용으로 불변성을 안지켜도 됨.
        let CommentsWithoutDeleted = (_draft$post5 = draft.post) === null || _draft$post5 === void 0 ? void 0 : (_draft$post5$Comments = _draft$post5.Comments) === null || _draft$post5$Comments === void 0 ? void 0 : _draft$post5$Comments.find(v => v.id === action.data.CommentId).CommentLikers.filter(v => v.id !== action.data.UserId);
        draft.post.Comments.find(v => v.id === action.data.CommentId).CommentLikers = CommentsWithoutDeleted;
        draft.unlikeCommentLoading = false;
        draft.unlikeCommentDone = true;
        break;
      }

    case UNLIKE_COMMENT_FAILURE:
      draft.unlikeCommentLoading = false;
      draft.unlikeCommentError = action.error;
      break;

    case ADD_SUB_COMMENT_SUCCESS:
      {
        var _draft$post6, _draft$post6$Comments;

        (_draft$post6 = draft.post) === null || _draft$post6 === void 0 ? void 0 : (_draft$post6$Comments = _draft$post6.Comments) === null || _draft$post6$Comments === void 0 ? void 0 : _draft$post6$Comments.find(v => v.id === action.data.CommentId).SubComments.push(action.data.fullSubComment);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_SUB_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case ADD_SUB_COMMENT_CLEAR:
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = false;
      break;

    case EDIT_SUB_COMMENT_REQUEST:
      draft.editSubCommentLoading = true;
      draft.editSubCommentDone = false;
      draft.editSubCommentError = false;
      break;

    case EDIT_SUB_COMMENT_SUCCESS:
      {
        draft.post.Comments.find(v => {
          return v.id === action.data.CommentId;
        }).SubComments.find(v => {
          return v.id === action.data.SubCommentId;
        }).content = action.data.content;
        draft.editSubCommentLoading = false;
        draft.editSubCommentDone = true;
        break;
      }

    case EDIT_SUB_COMMENT_FAILURE:
      draft.editSubCommentLoading = false;
      draft.editSubCommentError = action.error;
      break;

    case EDIT_SUB_COMMENT_CLEAR:
      draft.editSubCommentLoading = false;
      draft.editSubCommentDone = false;
      draft.editSubCommentError = false;
      break;

    case REMOVE_SUB_COMMENT_REQUEST:
      draft.removeSubCommentLoading = true;
      draft.removeSubCommentDone = false;
      draft.removeSubCommentError = false;
      break;

    case REMOVE_SUB_COMMENT_SUCCESS:
      {
        draft.removeSubCommentLoading = false;
        draft.removeSubCommentDone = true;
        break;
      }

    case REMOVE_SUB_COMMENT_FAILURE:
      draft.removeSubCommentLoading = false;
      draft.removeSubCommentError = action.error;
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = false;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePath = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case UPLOAD_IMAGES_CLEAR:
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = false;
      break;

    case UPLOAD_POST_IMAGE_REQUEST:
      draft.uploadPostImageLoading = true;
      draft.uploadPostImageDone = false;
      draft.uploadPostImageError = false;
      break;

    case UPLOAD_POST_IMAGE_SUCCESS:
      {
        draft.postImagePath = action.data;
        draft.uploadPostImageLoading = false;
        draft.uploadPostImageDone = true;
        break;
      }

    case UPLOAD_POST_IMAGE_FAILURE:
      draft.uploadPostImageLoading = false;
      draft.uploadPostImageError = action.error;
      break;

    case UPLOAD_POST_IMAGE_CLEAR:
      draft.uploadPostImageLoading = false;
      draft.uploadPostImageDone = false;
      break;

    case LOAD_RECENT_POSTS_REQUEST:
      draft.loadRecentPostsLoading = true;
      draft.loadRecentPostsDone = false;
      draft.loadRecentPostsError = false;
      break;

    case LOAD_RECENT_POSTS_SUCCESS:
      draft.loadRecentPostsLoading = false;
      draft.loadRecentPostsDone = true;
      draft.recentViewPost = action.data.recentViewPost;
      draft.recentCommentPost = action.data.recentCommentPost;
      break;

    case LOAD_RECENT_POSTS_FAILURE:
      draft.loadRecentPostsLoading = false;
      draft.loadRecentPostsError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["ub"] = (reducer);

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "ZX5X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MODE_CHANGE */
/* unused harmony export LOAD_PORTFOLIOS */
/* unused harmony export LOAD_PORTFOLIO */
/* unused harmony export LOAD_PREPORTFOLIO */
/* unused harmony export LOAD_POSTPORTFOLIO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHAGE_HEADER; });
/* unused harmony export SWITCH_ABOUT */
/* unused harmony export ON_ABOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OFF_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ON_SIGN_UP_PAGE; });
/* unused harmony export REMOVE_IMAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return POST_EDIT_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return POST_EDIT_OFF; });
/* unused harmony export CLICK_HASH_TAG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_SLIDE_MENU; });
/* unused harmony export ON_HEADER_TITLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SEARCH_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SEARCH_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SEARCH_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SEARCH_KEYWORD_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SEARCH_HASH_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SEARCH_HASH_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SEARCH_HASH_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SEARCH_HASH_TAG_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_QUIZ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_QUIZ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_QUIZ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_QUIZ_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  theme: "light",
  header: "blog",
  prePortfolio: [],
  postPortfolio: [],
  posts: [],
  onAbout: false,
  onSignUpPage: false,
  postEditOn: false,
  searchPosts: [],
  hashtagPosts: [],
  onSlideMenu: false,
  onHeaderTitle: false,
  searchedKeyword: null,
  searchKeywordLoading: false,
  searchKeywordDone: false,
  searchKeywordError: false,
  searchHashTagLoading: false,
  searchHashTagDone: false,
  searchHashTagError: false,
  addQuizLoading: false,
  addQuizDone: false,
  addQuizError: false
};
const MODE_CHANGE = "MODE_CHANGE";
const LOAD_PORTFOLIOS = "LOAD_PORTFOLIOS";
const LOAD_PORTFOLIO = "LOAD_PORTFOLIO";
const LOAD_PREPORTFOLIO = "LOAD_PREPORTFOLIO";
const LOAD_POSTPORTFOLIO = "LOAD_PSTPORTFOLIO";
const CHAGE_HEADER = "CHAGE_HEADER";
const SWITCH_ABOUT = "SWITCH_ABOUT";
const ON_ABOUT = "ON_ABOUT";
const OFF_ABOUT = "OFF_ABOUT";
const ON_SIGN_UP_PAGE = "ON_SIGN_UP_PAGE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const POST_EDIT_ON = "POST_EDIT_ON";
const POST_EDIT_OFF = "POST_EDIT_OFF";
const CLICK_HASH_TAG = "CLICK_HASH_TAG";
const ON_SLIDE_MENU = "ON_SLIDE_MENU";
const ON_HEADER_TITLE = "ON_HEADER_TITLE";
const SEARCH_KEYWORD_REQUEST = "SEARCH_KEYWORD_REQUEST";
const SEARCH_KEYWORD_SUCCESS = "SEARCH_KEYWORD_SUCCESS";
const SEARCH_KEYWORD_FAILURE = "SEARCH_KEYWORD_FAILURE";
const SEARCH_KEYWORD_CLEAR = "SEARCH_KEYWORD_CLEAR";
const SEARCH_HASH_TAG_REQUEST = "SEARCH_HASH_TAG_REQUEST";
const SEARCH_HASH_TAG_SUCCESS = "SEARCH_HASH_TAG_SUCCESS";
const SEARCH_HASH_TAG_FAILURE = "SEARCH_HASH_TAG_FAILURE";
const SEARCH_HASH_TAG_CLEAR = "SEARCH_HASH_TAG_CLEAR";
const ADD_QUIZ_REQUEST = "ADD_QUIZ_REQUEST";
const ADD_QUIZ_SUCCESS = "ADD_QUIZ_SUCCESS";
const ADD_QUIZ_FAILURE = "ADD_QUIZ_FAILURE";
const ADD_QUIZ_CLEAR = "ADD_QUIZ_CLEAR";

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case MODE_CHANGE:
      draft.theme = action.data;
      break;

    case CHAGE_HEADER:
      draft.header = action.header;
      break;

    case SWITCH_ABOUT:
      draft.onAbout = !draft.onAbout;
      break;

    case ON_ABOUT:
      draft.onAbout = true;
      break;

    case OFF_ABOUT:
      draft.onAbout = false;
      break;

    case ON_SIGN_UP_PAGE:
      draft.onSignUpPage = action.data;
      break;

    case POST_EDIT_ON:
      draft.postEditOn = !draft.postEditOn;
      break;

    case ON_SLIDE_MENU:
      draft.onSlideMenu = !draft.onSlideMenu;
      break;

    case ON_HEADER_TITLE:
      draft.onHeaderTitle = action.data;
      break;

    case POST_EDIT_OFF:
      draft.postEditOn = false;
      break;

    case SEARCH_KEYWORD_REQUEST:
      draft.searchKeywordLoading = true;
      draft.searchKeywordDone = false;
      draft.searchKeywordError = false;
      break;

    case SEARCH_KEYWORD_SUCCESS:
      {
        draft.searchPosts = action.data.searchPosts;
        draft.searchKeywordLoading = false;
        draft.searchKeywordDone = true;
        draft.searchedKeyword = action.data.searchedKeyword;
        break;
      }

    case SEARCH_KEYWORD_FAILURE:
      draft.searchKeywordLoading = false;
      draft.searchKeywordError = action.error;
      break;

    case SEARCH_KEYWORD_CLEAR:
      draft.searchKeywordLoading = false;
      draft.searchKeywordDone = false;
      draft.searchKeywordError = false;
      break;

    case SEARCH_HASH_TAG_REQUEST:
      draft.searchHashTagLoading = true;
      draft.searchHashTagDone = false;
      draft.searchHashTagError = false;
      break;

    case SEARCH_HASH_TAG_SUCCESS:
      {
        draft.searchHashTagLoading = false;
        draft.searchHashTagDone = true;
        draft.hashtagPosts = action.data.hashtagPosts;
        break;
      }

    case SEARCH_HASH_TAG_FAILURE:
      draft.searchHashTagLoading = false;
      draft.searchHashTagError = action.error;
      break;

    case SEARCH_HASH_TAG_CLEAR:
      draft.searchHashTagLoading = false;
      draft.searchHashTagDone = false;
      draft.searchHashTagError = false;
      break;

    case ADD_QUIZ_REQUEST:
      draft.addQuizLoading = true;
      draft.addQuizDone = false;
      draft.addQuizError = false;
      break;

    case ADD_QUIZ_SUCCESS:
      draft.addQuizLoading = false;
      draft.addQuizDone = true;
      break;

    case ADD_QUIZ_FAILURE:
      draft.addQuizLoading = false;
      draft.addQuizError = action.error;
      break;

    case ADD_QUIZ_CLEAR:
      draft.addQuizLoading = false;
      draft.addQuizDone = false;
      draft.addQuizError = false;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["s"] = (reducer);

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dHh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SDl8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NHP8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("B9PA");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nUeB");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_11__);












const UserProfile = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "KOAa")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("KOAa")],
    modules: ["[category]\\index.tsx -> " + "../../components/Blog/Profile/UserProfile"]
  }
});
const ArticleRow = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "Blc5")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Blc5")],
    modules: ["[category]\\index.tsx -> " + "../../components/Blog/Articles/ArticleRow"]
  }
});
const ArticleColumn = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "QLkm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("QLkm")],
    modules: ["[category]\\index.tsx -> " + "../../components/Blog/Articles/ArticleColumn"]
  }
});
const BlogCategoryPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const category = router.query.category;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    techPosts,
    dailyPosts,
    hasMorePosts,
    loadMorePostsLoading,
    countPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    function onScroll() {
      if ( //Y축 스크롤 값과 화면에 보이는 페이지 길이
      window.scrollY + document.documentElement.clientHeight > //전체 페이지의 길이
      document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadMorePostsLoading && (techPosts || dailyPosts.length > 7)) {
          //포스트가 더 있고 , 포스트를 로딩중이 아니고 , 포스트가 7개 초과이면 ( )
          const LastId = (techPosts || dailyPosts) && (techPosts || dailyPosts)[(techPosts || dailyPosts).length - 1].id; // 이미 불러온 포스트들(배열)에 마지막값의 아이디를 가져온다.

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* LOAD_MORE_POSTS_REQUEST */ "L"],
            data: {
              LastId,
              category
            }
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      //메모리릭을 방지하기위해 unmount시 removeEventListner
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("title", null, "Noah world | ", category)), user && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(UserProfile, null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("h2", {
    className: "blog_category_header"
  }, category.toUpperCase() + " POSTS", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("br", {
    className: "br_category"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("span", {
    className: "blog_category_count"
  }, "+\xA0", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_countup__WEBPACK_IMPORTED_MODULE_4___default.a, {
    duration: 4,
    start: 0,
    end: countPosts === null || countPosts === void 0 ? void 0 : countPosts.length
  }), "\xA0posts.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    className: "blog_category_big"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(ArticleRow, {
    article: dailyPosts[0] || techPosts[0]
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], null)), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
    className: "blog_category_medium"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(ArticleColumn, {
    article: dailyPosts[0] || techPosts[0]
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    className: "blog_category_small"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, (techPosts || dailyPosts).slice(1).map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    key: i,
    xs: 24,
    sm: 12,
    lg: 8
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(ArticleColumn, {
    article: v
  }))))));
});
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = cookie;
  }

  let {
    category
  } = context.query;

  if (category === "tech" || category === "daily" || category === "culture") {
    context.store.dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* LOAD_CATEGORY_POSTS_REQUEST */ "F"],
      data: category
    });
  } else {
    return {
      redirect: {
        destination: "/404"
      }
    };
  }

  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_9__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(BlogCategoryPage));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i1JB":
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "mL3h":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "nUeB":
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BLUE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MAIN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SUB_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GRAY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BG_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RED_COLOR; });
/* unused harmony export CARD_DESC_PS */
/* unused harmony export CARD_DESC_COMU */
/* unused harmony export CARD_DESC_COOP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CardContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return navContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sub_skills; });
/* unused harmony export eng_desc */
/* unused harmony export jap_desc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return portfolios; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);

 // Config


const BACKEND_URL = "https://api.noahworld.site"; // Color

const BLUE_COLOR = "#1187cf";
const MAIN_COLOR = "#D5F7E6";
const SUB_COLOR = "#5AE4A8";
const GRAY_COLOR = "rgba(0, 0, 0, 0.2)";
const BG_COLOR = "rgb(247, 247, 247)";
const RED_COLOR = "#f15b6c"; // Mainpage Desc

const CARD_DESC_PS = "새로운 기술을 배우기전 항상 자신의 기본기를 점검합니다. 또한 문제를 정확하게 인식하고 배우고 기록합니다.";
const CARD_DESC_COMU = "팀워크를 최우선으로 여기며 소통을 중심으로 매순간 신뢰의 기반을 다집니다.";
const CARD_DESC_COOP = "코딩 자체를 즐기며 매순간 열정을 가지고 고비를 넘으며 담담하게 도전합니다.";
const CardContents = [{
  squareTitle: "ProblemSolve",
  title: "문제해결능력을 위한 기본기",
  desc: CARD_DESC_PS,
  src: "/images/ProblemSolve.png"
}, {
  squareTitle: "Cooperation",
  title: "신뢰에서 오는 진정한 소통",
  desc: CARD_DESC_COMU,
  src: "/images/Cooperation.png"
}, {
  squareTitle: "Passion",
  title: "열정 그리고 도전",
  desc: CARD_DESC_COOP,
  src: "/images/Passion.png"
}]; // Nav Contents

const navContents = [{
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAddressCard"],
  explain: "About me",
  name: "aboutme"
}, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLaptop"],
  explain: "Skills",
  name: "skills"
}, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faImages"],
  explain: "Portfolio",
  name: "portfolio"
}, {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"],
  explain: "Contact",
  name: "contact"
}]; // Skill page

const skills = [{
  name: "Html & CSS",
  src: "./images/HtmlCss.png",
  desc: "웹표준 , DOM-tree , 반응형웹과 브라우저 렌딩 특성을 파악하며 CSS의 다채로운 애니메이션과 더불어 전치리기 사용이 가능합니다.",
  level: true
}, {
  name: "TypeScript",
  src: "https://img.icons8.com/color/144/000000/typescript.png",
  desc: "ES6 최신문법과 실행컨텍스트,클로저,이벤트루프등 독특한 JS특성을 폭넓게 이해하며, 대세인 타입스크립트를 적극 활용합니다.",
  level: true
}, {
  name: "React",
  src: "https://img.icons8.com/color/144/000000/react-native.png",
  desc: "Hooks 문법, Router적용, Redux와 비동기를 위한 saga, thunk 외 여러 라이브러리를 응용하며 렌더링최소화 및 생명주기같은 React의 SPA 특성을 이해합니다.",
  level: true
}, {
  name: "Next.js",
  src: "https://docs.microsoft.com/ko-kr/windows/images/nextjs-logo.png",
  desc: "사용자 만족도와 검색엔진 효율성을 높아는 서버사이드렌더링의 특성을 이해하며 Next.js를 React에 적용합니다.",
  level: true
}, {
  name: "Mysql",
  src: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
  desc: "시퀄라이즈 & 워크벤치를 사용하며, 스키마 정의와 콘솔명령어, 그리고 데이터베이스 관계도를 이해해 데이터를 효율있게 관리합니다.",
  level: true
}, {
  name: "Git",
  src: "https://img.icons8.com/nolan/128/github.png",
  desc: "형상관리의 기본원리와 버전관리,브랜치,백업등을 적극 활용합니다.",
  level: true
}];
const sub_skills = [{
  name: "Axios",
  src: "https://media-exp1.licdn.com/dms/image/C4E0BAQGlN3RJvKmwEg/company-logo_200_200/0/1571253448818?e=2159024400&v=beta&t=VYfrSozq3kSw5_404tR4xYFMH0uFQNmQNrweQcJkbGw",
  level: true
}, {
  name: "Express",
  src: "https://www.mementotech.in/assets/images/icons/express.png",
  level: true
}, {
  name: "Antd",
  src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  level: true
}, {
  name: "Styled-components",
  src: "https://avatars.githubusercontent.com/u/20658825?s=280&v=4",
  level: true
}, {
  name: "Emotion.js",
  src: "https://cdn-images-1.medium.com/max/1600/1*gGzRmUKNOC_X7klFjTk8EA.png",
  level: true
}, {
  name: "AWS",
  src: "https://images.squarespace-cdn.com/content/v1/52ca3b73e4b04a45ef2c5cb6/1551884861331-C9U2RHJQLOPL9F332X5O/ke17ZwdGBToddI8pDm48kK6x8IOhzX_rTtQGKY1qp-hZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XaGPskfQtVutuSA2B-JW6wkqqV024XP-059DP6wRYqYVUGMzsBxTo2UlkZq10GTrg/AWS_blog_01.PNG",
  level: true
}, {
  name: "Passport.js",
  src: "https://leolanchas.com/wp-content/uploads/2013/07/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"
}, {
  name: "Babel",
  src: "https://cdn.imgbin.com/8/4/22/imgbin-source-to-source-compiler-javascript-ecmascript-node-js-that-s-Kft9K4nE9YHrMp6sdq0BQ09cK.jpg"
}, {
  name: "Webpack",
  src: "https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25"
}, {
  name: "Postman",
  src: "https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
}];
const eng_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", null, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", null, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: TOEIC 925\uC810(2018\uB144 \uCDE8\uB4DD)"));
const jap_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", null, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", null, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: JLPT1\uAE09(2019\uB144 \uCDE8\uB4DD)"));
const languages = [{
  name: "English",
  src: "https://img.icons8.com/color/96/000000/usa-circular.png",
  popup: true,
  licenseKor: "2020년 영어",
  content: eng_desc
}, {
  name: "Japanese",
  src: "https://img.icons8.com/color/96/000000/japan-circular.png",
  popup: true,
  licenseKor: "2019년 일본어",
  content: jap_desc
}];
const dataSource = [{
  key: "1",
  name: "토익",
  date: 2018,
  summary: "영어 자격증 (기간만료)",
  score: "925"
}, {
  key: "2",
  name: "매일경제테스트",
  date: 2018,
  summary: "경제,경영관련 자격증",
  score: "Pass"
}, {
  key: "3",
  name: "국외여행인솔자 자격증",
  date: 2019,
  summary: "해외에서 인정하는 한국관광협회의 국외 인솔자  자격증",
  score: "Pass"
}, {
  key: "4",
  name: "JLPT",
  date: 2019,
  summary: "일본어 자격증",
  score: "1급"
}, {
  key: "5",
  name: "일본어 통역안내사 자격증 (국가전문자격)",
  date: 2019,
  summary: "한국사1급에 준하며 일본어 통번역 능력을 입증하는 국가전문자격증",
  score: "Pass"
}, {
  key: "6",
  name: "영어 통역안내사 자격증 (국가전문자격)",
  date: 2020,
  summary: "한국사1급에 준하며 영어 통번역 능력을 입증하는 국가전문자격증",
  score: "Pass"
}, {
  key: "7",
  name: "정보처리기사 (국가기술자격)",
  date: 2021,
  summary: "IT관련 소양을 입증하는 국가기술자격증",
  score: "Pass"
}, {
  key: "8",
  name: "학점은행제 경영학사",
  date: 2021,
  summary: "2021년 6월 졸업예정",
  score: "학사"
}];
const columns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "Date",
  dataIndex: "date",
  key: "date"
}, {
  title: "Summary",
  dataIndex: "summary",
  key: "summary"
}, {
  title: "Score",
  dataIndex: "score",
  key: "score"
}]; //Portfolio

const portfolios = [{
  id: 1,
  name: "My Seoul Guide",
  date: "2021/4~ 2021/5",
  tags: ["#TypeScript", "#React", "#Emotion", "#GraphQL"],
  src: "https://user-images.githubusercontent.com/74864925/120121315-b4316000-c1dd-11eb-9f9b-08c45229c7e8.png",
  git: "https://github.com/noah071610/My-Seoul-Guide"
}, {
  id: 2,
  name: "Noah world Blog",
  date: "2021/2~ 2021/4",
  tags: ["#TypeScript", "#React", "#Next.js", "#Mysql", "#AWS"],
  src: "https://user-images.githubusercontent.com/74864925/120121316-b5628d00-c1dd-11eb-87f2-da099956c725.png",
  git: "https://github.com/noah071610/Next_NoahWorld"
}, {
  id: 3,
  name: "Movie App (Clone Coding)",
  date: "2020/12~ 2021/1",
  tags: ["#Javascript", "#React", "#Node.js", "#MongoDB"],
  src: "/images/portfolio/portfolio_movie.jpg",
  git: "https://github.com/noah071610/React_Movie-App"
}, {
  id: 4,
  name: "Portfolio",
  date: "2021/1~ 2021/2",
  tags: ["#HTML", "#CSS", "#Javascript", "#React", "#Atnd"],
  src: "https://user-images.githubusercontent.com/74864925/120121704-ea6fdf00-c1df-11eb-92f5-5f74e81e249d.png"
}];

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "w8No":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });