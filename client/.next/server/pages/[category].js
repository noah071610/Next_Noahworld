module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/[category]": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[category]/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./@reducers/blog.ts":
/*!***************************!*\
  !*** ./@reducers/blog.ts ***!
  \***************************/
/*! exports provided: MODE_CHANGE, SWITCH_ABOUT, ON_ABOUT, OFF_ABOUT, ON_SIGN_UP_PAGE, REMOVE_IMAGE, POST_EDIT_ON, POST_EDIT_OFF, CLICK_HASH_TAG, ON_SLIDE_MENU, ON_HEADER_TITLE, SEARCH_KEYWORD_REQUEST, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE, SEARCH_KEYWORD_CLEAR, SEARCH_HASH_TAG_REQUEST, SEARCH_HASH_TAG_SUCCESS, SEARCH_HASH_TAG_FAILURE, SEARCH_HASH_TAG_CLEAR, ADD_QUIZ_REQUEST, ADD_QUIZ_SUCCESS, ADD_QUIZ_FAILURE, ADD_QUIZ_CLEAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_CHANGE", function() { return MODE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_ABOUT", function() { return SWITCH_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_ABOUT", function() { return ON_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_ABOUT", function() { return OFF_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SIGN_UP_PAGE", function() { return ON_SIGN_UP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_EDIT_ON", function() { return POST_EDIT_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_EDIT_OFF", function() { return POST_EDIT_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_HASH_TAG", function() { return CLICK_HASH_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SLIDE_MENU", function() { return ON_SLIDE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_HEADER_TITLE", function() { return ON_HEADER_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_REQUEST", function() { return SEARCH_KEYWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_SUCCESS", function() { return SEARCH_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_FAILURE", function() { return SEARCH_KEYWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_KEYWORD_CLEAR", function() { return SEARCH_KEYWORD_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HASH_TAG_REQUEST", function() { return SEARCH_HASH_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HASH_TAG_SUCCESS", function() { return SEARCH_HASH_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HASH_TAG_FAILURE", function() { return SEARCH_HASH_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HASH_TAG_CLEAR", function() { return SEARCH_HASH_TAG_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUIZ_REQUEST", function() { return ADD_QUIZ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUIZ_SUCCESS", function() { return ADD_QUIZ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUIZ_FAILURE", function() { return ADD_QUIZ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUIZ_CLEAR", function() { return ADD_QUIZ_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./@reducers/index.ts":
/*!****************************!*\
  !*** ./@reducers/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./@reducers/user.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./@reducers/post.ts");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog */ "./@reducers/blog.ts");






const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"],
          blog: _blog__WEBPACK_IMPORTED_MODULE_4__["default"],
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./@reducers/post.ts":
/*!***************************!*\
  !*** ./@reducers/post.ts ***!
  \***************************/
/*! exports provided: UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_CLEAR, UPLOAD_POST_IMAGE_REQUEST, UPLOAD_POST_IMAGE_SUCCESS, UPLOAD_POST_IMAGE_FAILURE, UPLOAD_POST_IMAGE_CLEAR, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_CLEAR, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RECENT_POSTS_REQUEST, LOAD_RECENT_POSTS_SUCCESS, LOAD_RECENT_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_CATEGORY_POSTS_REQUEST, LOAD_CATEGORY_POSTS_SUCCESS, LOAD_CATEGORY_POSTS_FAILURE, LOAD_MORE_POSTS_REQUEST, LOAD_MORE_POSTS_SUCCESS, LOAD_MORE_POSTS_FAILURE, LOAD_CLASS_POSTS_REQUEST, LOAD_CLASS_POSTS_SUCCESS, LOAD_CLASS_POSTS_FAILURE, EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE, EDIT_POST_CLEAR, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_CLEAR, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LIKE_COMMENT_REQUEST, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAILURE, UNLIKE_COMMENT_REQUEST, UNLIKE_COMMENT_SUCCESS, UNLIKE_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_COMMENT_CLEAR, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, EDIT_COMMENT_REQUEST, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE, EDIT_COMMENT_CLEAR, ADD_SUB_COMMENT_REQUEST, ADD_SUB_COMMENT_SUCCESS, ADD_SUB_COMMENT_FAILURE, ADD_SUB_COMMENT_CLEAR, REMOVE_SUB_COMMENT_REQUEST, REMOVE_SUB_COMMENT_SUCCESS, REMOVE_SUB_COMMENT_FAILURE, EDIT_SUB_COMMENT_REQUEST, EDIT_SUB_COMMENT_SUCCESS, EDIT_SUB_COMMENT_FAILURE, EDIT_SUB_COMMENT_CLEAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_CLEAR", function() { return UPLOAD_IMAGES_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_POST_IMAGE_REQUEST", function() { return UPLOAD_POST_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_POST_IMAGE_SUCCESS", function() { return UPLOAD_POST_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_POST_IMAGE_FAILURE", function() { return UPLOAD_POST_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_POST_IMAGE_CLEAR", function() { return UPLOAD_POST_IMAGE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_CLEAR", function() { return ADD_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECENT_POSTS_REQUEST", function() { return LOAD_RECENT_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECENT_POSTS_SUCCESS", function() { return LOAD_RECENT_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RECENT_POSTS_FAILURE", function() { return LOAD_RECENT_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CATEGORY_POSTS_REQUEST", function() { return LOAD_CATEGORY_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CATEGORY_POSTS_SUCCESS", function() { return LOAD_CATEGORY_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CATEGORY_POSTS_FAILURE", function() { return LOAD_CATEGORY_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_POSTS_REQUEST", function() { return LOAD_MORE_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_POSTS_SUCCESS", function() { return LOAD_MORE_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_POSTS_FAILURE", function() { return LOAD_MORE_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CLASS_POSTS_REQUEST", function() { return LOAD_CLASS_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CLASS_POSTS_SUCCESS", function() { return LOAD_CLASS_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CLASS_POSTS_FAILURE", function() { return LOAD_CLASS_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_REQUEST", function() { return EDIT_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_SUCCESS", function() { return EDIT_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_FAILURE", function() { return EDIT_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_CLEAR", function() { return EDIT_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_CLEAR", function() { return REMOVE_POST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_REQUEST", function() { return LIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_SUCCESS", function() { return LIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COMMENT_FAILURE", function() { return LIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_REQUEST", function() { return UNLIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_SUCCESS", function() { return UNLIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_COMMENT_FAILURE", function() { return UNLIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_CLEAR", function() { return ADD_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_COMMENT_REQUEST", function() { return EDIT_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_COMMENT_SUCCESS", function() { return EDIT_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_COMMENT_FAILURE", function() { return EDIT_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_COMMENT_CLEAR", function() { return EDIT_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_COMMENT_REQUEST", function() { return ADD_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_COMMENT_SUCCESS", function() { return ADD_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_COMMENT_FAILURE", function() { return ADD_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUB_COMMENT_CLEAR", function() { return ADD_SUB_COMMENT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUB_COMMENT_REQUEST", function() { return REMOVE_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUB_COMMENT_SUCCESS", function() { return REMOVE_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUB_COMMENT_FAILURE", function() { return REMOVE_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUB_COMMENT_REQUEST", function() { return EDIT_SUB_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUB_COMMENT_SUCCESS", function() { return EDIT_SUB_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUB_COMMENT_FAILURE", function() { return EDIT_SUB_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUB_COMMENT_CLEAR", function() { return EDIT_SUB_COMMENT_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./@reducers/user.ts":
/*!***************************!*\
  !*** ./@reducers/user.ts ***!
  \***************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_CLEAR, LOG_IN_GOOGLE_REQUEST, LOG_IN_GOOGLE_SUCCESS, LOG_IN_GOOGLE_FAILURE, LOG_IN_GOOGLE_CLEAR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_CLEAR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_CLEAR, LOAD_INFO_REQUEST, LOAD_INFO_SUCCESS, LOAD_INFO_FAILURE, ADD_ICON_REQUEST, ADD_ICON_SUCCESS, ADD_ICON_FAILURE, ADD_ICON_CLEAR, REMOVE_ICON_REQUEST, REMOVE_ICON_SUCCESS, REMOVE_ICON_FAILURE, REMOVE_ICON_CLEAR, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_CLEAR, CHANGE_NAME_REQUEST, CHANGE_NAME_SUCCESS, CHANGE_NAME_FAILURE, CHANGE_NAME_CLEAR, WITHDRWAL_REQUEST, WITHDRWAL_SUCCESS, WITHDRWAL_FAILURE, WITHDRWAL_CLEAR, CONFIRM_PASSWORD_REQUEST, CONFIRM_PASSWORD_SUCCESS, CONFIRM_PASSWORD_FAILURE, CONFIRM_PASSWORD_CLEAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_CLEAR", function() { return LOG_IN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_GOOGLE_REQUEST", function() { return LOG_IN_GOOGLE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_GOOGLE_SUCCESS", function() { return LOG_IN_GOOGLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_GOOGLE_FAILURE", function() { return LOG_IN_GOOGLE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_GOOGLE_CLEAR", function() { return LOG_IN_GOOGLE_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_CLEAR", function() { return LOG_OUT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_CLEAR", function() { return SIGN_UP_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INFO_REQUEST", function() { return LOAD_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INFO_SUCCESS", function() { return LOAD_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INFO_FAILURE", function() { return LOAD_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ICON_REQUEST", function() { return ADD_ICON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ICON_SUCCESS", function() { return ADD_ICON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ICON_FAILURE", function() { return ADD_ICON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ICON_CLEAR", function() { return ADD_ICON_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ICON_REQUEST", function() { return REMOVE_ICON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ICON_SUCCESS", function() { return REMOVE_ICON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ICON_FAILURE", function() { return REMOVE_ICON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ICON_CLEAR", function() { return REMOVE_ICON_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_REQUEST", function() { return CHANGE_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_SUCCESS", function() { return CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_FAILURE", function() { return CHANGE_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_CLEAR", function() { return CHANGE_PASSWORD_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NAME_REQUEST", function() { return CHANGE_NAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NAME_SUCCESS", function() { return CHANGE_NAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NAME_FAILURE", function() { return CHANGE_NAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NAME_CLEAR", function() { return CHANGE_NAME_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITHDRWAL_REQUEST", function() { return WITHDRWAL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITHDRWAL_SUCCESS", function() { return WITHDRWAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITHDRWAL_FAILURE", function() { return WITHDRWAL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WITHDRWAL_CLEAR", function() { return WITHDRWAL_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PASSWORD_REQUEST", function() { return CONFIRM_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PASSWORD_SUCCESS", function() { return CONFIRM_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PASSWORD_FAILURE", function() { return CONFIRM_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_PASSWORD_CLEAR", function() { return CONFIRM_PASSWORD_CLEAR; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./@saga/blog.ts":
/*!***********************!*\
  !*** ./@saga/blog.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@reducers/blog */ "./@reducers/blog.ts");




function addQuizAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/quiz`, data);
}

function* addQuiz(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addQuizAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ADD_QUIZ_SUCCESS"]
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ADD_QUIZ_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ADD_QUIZ_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ADD_QUIZ_CLEAR"]
    });
  }
}

function searchKeywordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/search/`, data);
}

function* searchKeyword(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchKeywordAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_CLEAR"]
    });
  }
}

function searchHashtagAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/search/hashtag`, data);
}

function* searchHashtag(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchHashtagAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HASH_TAG_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HASH_TAG_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HASH_TAG_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HASH_TAG_CLEAR"]
    });
  }
}

function* watchAddQuiz() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ADD_QUIZ_REQUEST"], addQuiz);
}

function* watchSearchKeyword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_KEYWORD_REQUEST"], searchKeyword);
}

function* watchSearchHashtag() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_blog__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HASH_TAG_REQUEST"], searchHashtag);
}

function* blogSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddQuiz), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchKeyword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchHashtag)]);
}

/***/ }),

/***/ "./@saga/comment.ts":
/*!**************************!*\
  !*** ./@saga/comment.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return commentSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@reducers/post */ "./@reducers/post.ts");




function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/comment/${data.postId}`, data);
}

function* addComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_CLEAR"]
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/comment/${data}`);
}

function* removeComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"],
      data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function editCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/comment/edit/${data.CommentId}/`, data);
}

function* editComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(editCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_COMMENT_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_COMMENT_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function likeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/api/comment/like/${data.UserId}/${data.CommentId}`);
}

function* likeComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likeCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_SUCCESS"],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/comment/unlike/${data.UserId}/${data.CommentId}`);
}

function* unlikeComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikeCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_SUCCESS"],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function addSubCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/comment/sub/${data.CommentId}`, data);
}

function* addSubComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addSubCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_SUB_COMMENT_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_SUB_COMMENT_CLEAR"]
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_SUB_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function removeSubCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/comment/sub/${data.CommentId}/${data.SubCommentId}`);
}

function* removeSubComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeSubCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_COMMENT_SUCCESS"],
      data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function editSubCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/comment/sub/edit/${data.CommentId}/${data.SubCommentId}`, data);
}

function* editSubComment(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(editSubCommentAPI, action.data);
    console.log(data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUB_COMMENT_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUB_COMMENT_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUB_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemoveComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);
}

function* watchEditComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_COMMENT_REQUEST"], editComment);
}

function* watchLikeComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_COMMENT_REQUEST"], likeComment);
}

function* watchUnlikeComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_COMMENT_REQUEST"], unlikeComment);
}

function* watchAddSubComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_SUB_COMMENT_REQUEST"], addSubComment);
}

function* watchRemoveSubComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_COMMENT_REQUEST"], removeSubComment);
}

function* watchEditSubComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_SUB_COMMENT_REQUEST"], editSubComment);
}

function* commentSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikeComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikeComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddSubComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveSubComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditSubComment)]);
}

/***/ }),

/***/ "./@saga/index.ts":
/*!************************!*\
  !*** ./@saga/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog */ "./@saga/blog.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./@saga/post.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./@saga/user.ts");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment */ "./@saga/comment.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.ts");







axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = true ? "http://localhost:5000" : undefined;
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_comment__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_blog__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./@saga/post.ts":
/*!***********************!*\
  !*** ./@saga/post.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@reducers/post */ "./@reducers/post.ts");




function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post", data);
}

function* addPost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/post`);
}

function* loadPosts() {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadCategoryPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/post/category/${data}`);
}

function* loadCategoryPosts(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadCategoryPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CATEGORY_POSTS_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CATEGORY_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMorePostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/post/morepost/${data.category}?lastId=${data.LastId}`);
}

function* loadMorePosts(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMorePostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_POSTS_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadClassPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/post/class`);
}

function* loadClassPosts() {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadClassPostsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CLASS_POSTS_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CLASS_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/post/onePost/${data.postId}/${data.UserId}/${data.category}`);
}

function* loadPost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadRecentPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/post/recent`, data);
}

function* loadRecentPosts(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadRecentPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECENT_POSTS_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECENT_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* likePost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/post/like/${data.PostId}/${data.UserId}`);
}

function* unlikePost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post/images", data);
}

function* uploadImages(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadPostImageAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/post/image", data);
}

function* uploadPostImage(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadPostImageAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_POST_IMAGE_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_POST_IMAGE_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_POST_IMAGE_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_POST_IMAGE_CLEAR"]
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/post/delete`, data);
}

function* removePost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function editPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/post/edit`, data);
}

function* editPost(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(editPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchloadCategoryPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CATEGORY_POSTS_REQUEST"], loadCategoryPosts);
}

function* watchloadMorePosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_POSTS_REQUEST"], loadMorePosts);
}

function* watchLoadRecentPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RECENT_POSTS_REQUEST"], loadRecentPosts);
}

function* watchloadClassPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CLASS_POSTS_REQUEST"], loadClassPosts);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchEditPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["EDIT_POST_REQUEST"], editPost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchUploadPostImage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_POST_IMAGE_REQUEST"], uploadPostImage);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadCategoryPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadMorePosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadClassPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRecentPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadPostImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditPost)]);
}

/***/ }),

/***/ "./@saga/user.ts":
/*!***********************!*\
  !*** ./@saga/user.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@reducers/user */ "./@reducers/user.ts");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/user/logIn", data);
}

function* logIn(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_CLEAR"]
    });
  }
}

function logInGoogleAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/auth/google");
}

function* logInGoogle() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInGoogleAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_GOOGLE_SUCCESS"]
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_GOOGLE_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_GOOGLE_FAILURE"],
      error: err.response
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_CLEAR"]
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/user/logOut");
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_CLEAR"]
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/user/signUp", data);
}

function* signUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(5000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function addIconAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/user/icon", data);
}

function* addIcon(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addIconAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_ICON_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_ICON_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_ICON_FAILURE"],
      error: err.response.data
    });
  }
}

function removeIconAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/api/user/icon/${data}`);
}

function* removeIcon(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeIconAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ICON_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ICON_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ICON_FAILURE"],
      error: err.response.data
    });
  }
}

function loadInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/user");
}

function* loadInfo() {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_INFO_SUCCESS"],
      data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function confirmPasswordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/user/confirm`, data);
}

function* confirmPassword(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(confirmPasswordAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_PASSWORD_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_PASSWORD_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_PASSWORD_FAILURE"],
      error: err.response.data
    });
  }
}

function changePasswordAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/user/password`, data);
}

function* changePassword(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changePasswordAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PASSWORD_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PASSWORD_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PASSWORD_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`api/user/name`, data);
}

function* changeName(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NAME_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NAME_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NAME_FAILURE"],
      error: err.response.data
    });
  }
}

function withdrawalAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`api/user/${data}`);
}

function* withdrawal(action) {
  try {
    const {
      data
    } = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(withdrawalAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["WITHDRWAL_SUCCESS"],
      data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(3000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["WITHDRWAL_CLEAR"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["WITHDRWAL_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogInGoogle() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_GOOGLE_REQUEST"], logInGoogle);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchAddIcon() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_ICON_REQUEST"], addIcon);
}

function* watchRemoveIcon() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ICON_REQUEST"], removeIcon);
}

function* watchLoadInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_INFO_REQUEST"], loadInfo);
}

function* watchConfirmPassword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CONFIRM_PASSWORD_REQUEST"], confirmPassword);
}

function* watchChangePassword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PASSWORD_REQUEST"], changePassword);
}

function* watchChangeName() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NAME_REQUEST"], changeName);
}

function* watchWithdrawal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["WITHDRWAL_REQUEST"], withdrawal);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogInGoogle), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddIcon), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveIcon), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchConfirmPassword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangePassword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeName), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchWithdrawal)]);
}

/***/ }),

/***/ "./@store/configureStore.ts":
/*!**********************************!*\
  !*** ./@store/configureStore.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@reducers */ "./@reducers/index.ts");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@saga */ "./@saga/index.ts");







const configureStore = initialState => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: BACKEND_URL, BLUE_COLOR, MAIN_COLOR, SUB_COLOR, GRAY_COLOR, BG_COLOR, RED_COLOR, dataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_COLOR", function() { return BLUE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_COLOR", function() { return MAIN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_COLOR", function() { return SUB_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAY_COLOR", function() { return GRAY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BG_COLOR", function() { return BG_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_COLOR", function() { return RED_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSource", function() { return dataSource; });
// Config
const BACKEND_URL = "https://api.noahworld.site"; // Color

const BLUE_COLOR = "#1187cf";
const MAIN_COLOR = "#D5F7E6";
const SUB_COLOR = "#5AE4A8";
const GRAY_COLOR = "rgba(0, 0, 0, 0.2)";
const BG_COLOR = "rgb(247, 247, 247)";
const RED_COLOR = "#f15b6c";
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
  name: "일본어 통역안내사 자격증",
  date: 2019,
  summary: "한국사1급에 준하며 일본어 통번역 능력을 입증하는 국가전문자격증",
  score: "Pass"
}, {
  key: "6",
  name: "영어 통역안내사 자격증",
  date: 2020,
  summary: "한국사1급에 준하며 영어 통번역 능력을 입증하는 국가전문자격증",
  score: "Pass"
}, {
  key: "7",
  name: "정보처리기사",
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

/***/ }),

/***/ "./pages/[category]/index.tsx":
/*!************************************!*\
  !*** ./pages/[category]/index.tsx ***!
  \************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/configureStore */ "./@store/configureStore.ts");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\pages\\[category]\\index.tsx";













const UserProfile = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../components/Profile/UserProfile */ "./components/Profile/UserProfile.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/Profile/UserProfile */ "./components/Profile/UserProfile.tsx")],
    modules: ["[category]\\index.tsx -> " + "../../components/Profile/UserProfile"]
  }
});
const ArticleRow = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../components/Articles/ArticleRow */ "./components/Articles/ArticleRow.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/Articles/ArticleRow */ "./components/Articles/ArticleRow.tsx")],
    modules: ["[category]\\index.tsx -> " + "../../components/Articles/ArticleRow"]
  }
});
const ArticleColumn = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../components/Articles/ArticleColumn */ "./components/Articles/ArticleColumn.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/Articles/ArticleColumn */ "./components/Articles/ArticleColumn.tsx")],
    modules: ["[category]\\index.tsx -> " + "../../components/Articles/ArticleColumn"]
  }
});
const BlogCategoryPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_MORE_POSTS_REQUEST"],
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
  }, [hasMorePosts, techPosts, dailyPosts, loadMorePostsLoading]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Noah world | ", category)), user && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(UserProfile, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 16
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("h2", {
    className: "blog_category_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, category.toUpperCase() + " POSTS", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("br", {
    className: "br_category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("span", {
    className: "blog_category_count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "+\xA0", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_countup__WEBPACK_IMPORTED_MODULE_4___default.a, {
    duration: 4,
    start: 0,
    end: countPosts === null || countPosts === void 0 ? void 0 : countPosts.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), "\xA0posts.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    className: "blog_category_big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(ArticleRow, {
    article: dailyPosts[0] || techPosts[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    className: "blog_category_medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(ArticleColumn, {
    article: dailyPosts[0] || techPosts[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    className: "blog_category_small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(ArticleColumn, {
    article: dailyPosts[0] || techPosts[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, (techPosts || dailyPosts).slice(1).map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    key: i,
    xs: 24,
    sm: 12,
    lg: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(ArticleColumn, {
    article: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }))))));
});
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.headers.Cookie = cookie;
  }

  let {
    category
  } = context.query;

  if (category === "tech" || category === "daily" || category === "culture") {
    context.store.dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_CATEGORY_POSTS_REQUEST"],
      data: category
    });
  } else {
    return {
      redirect: {
        destination: "/404"
      }
    };
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOAD_INFO_REQUEST"]
  });
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_8__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(BlogCategoryPage));

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/modal/Modal":
/*!***************************************!*\
  !*** external "antd/lib/modal/Modal" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/relativeTime":
/*!********************************************!*\
  !*** external "dayjs/plugin/relativeTime" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-image-crop":
/*!***********************************!*\
  !*** external "react-image-crop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9Ac2FnYS9jb21tZW50LnRzIiwid2VicGFjazovLy8uL0BzYWdhL2luZGV4LnRzIiwid2VicGFjazovLy8uL0BzYWdhL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9Ac3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL1tjYXRlZ29yeV0vaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvdW50dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1jcm9wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicG9zdHMiLCJvbkFib3V0Iiwib25TaWduVXBQYWdlIiwicG9zdEVkaXRPbiIsInNlYXJjaFBvc3RzIiwiaGFzaHRhZ1Bvc3RzIiwib25TbGlkZU1lbnUiLCJvbkhlYWRlclRpdGxlIiwic2VhcmNoZWRLZXl3b3JkIiwic2VhcmNoS2V5d29yZExvYWRpbmciLCJzZWFyY2hLZXl3b3JkRG9uZSIsInNlYXJjaEtleXdvcmRFcnJvciIsInNlYXJjaEhhc2hUYWdMb2FkaW5nIiwic2VhcmNoSGFzaFRhZ0RvbmUiLCJzZWFyY2hIYXNoVGFnRXJyb3IiLCJhZGRRdWl6TG9hZGluZyIsImFkZFF1aXpEb25lIiwiYWRkUXVpekVycm9yIiwiTU9ERV9DSEFOR0UiLCJTV0lUQ0hfQUJPVVQiLCJPTl9BQk9VVCIsIk9GRl9BQk9VVCIsIk9OX1NJR05fVVBfUEFHRSIsIlJFTU9WRV9JTUFHRSIsIlBPU1RfRURJVF9PTiIsIlBPU1RfRURJVF9PRkYiLCJDTElDS19IQVNIX1RBRyIsIk9OX1NMSURFX01FTlUiLCJPTl9IRUFERVJfVElUTEUiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyIsIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUiLCJTRUFSQ0hfS0VZV09SRF9DTEVBUiIsIlNFQVJDSF9IQVNIX1RBR19SRVFVRVNUIiwiU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MiLCJTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSIsIlNFQVJDSF9IQVNIX1RBR19DTEVBUiIsIkFERF9RVUlaX1JFUVVFU1QiLCJBRERfUVVJWl9TVUNDRVNTIiwiQUREX1FVSVpfRkFJTFVSRSIsIkFERF9RVUlaX0NMRUFSIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwiYmxvZyIsInVzZXIiLCJ0ZWNoUG9zdHMiLCJkYWlseVBvc3RzIiwiY2xhc3NQb3N0cyIsImN1bHR1cmVQb3N0cyIsInF1aXp6ZXMiLCJ3b3JkcyIsImhhc2h0YWdzIiwibW9zdExpa2VkUG9zdCIsIm1vc3RWaWV3ZWRQb3N0IiwibW9zdENvbW1lbnRlZFBvc3QiLCJwcmV2UG9zdCIsIm5leHRQb3N0IiwiY291bnRQb3N0cyIsImltYWdlUGF0aCIsInBvc3RJbWFnZVBhdGgiLCJyZWNlbnRWaWV3UG9zdCIsInJlY2VudENvbW1lbnRQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nIiwidXBsb2FkUG9zdEltYWdlRG9uZSIsInVwbG9hZFBvc3RJbWFnZUVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImVkaXRQb3N0TG9hZGluZyIsImVkaXRQb3N0RG9uZSIsImVkaXRQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFJlY2VudFBvc3RzTG9hZGluZyIsImxvYWRSZWNlbnRQb3N0c0RvbmUiLCJsb2FkUmVjZW50UG9zdHNFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmciLCJsb2FkQ2F0ZWdvcnlQb3N0c0RvbmUiLCJsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yIiwibG9hZE1vcmVQb3N0c0xvYWRpbmciLCJsb2FkTW9yZVBvc3RzRG9uZSIsImxvYWRNb3JlUG9zdHNFcnJvciIsImxvYWRDbGFzc1Bvc3RzTG9hZGluZyIsImxvYWRDbGFzc1Bvc3RzRG9uZSIsImxvYWRDbGFzc1Bvc3RzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJlZGl0Q29tbWVudExvYWRpbmciLCJlZGl0Q29tbWVudERvbmUiLCJlZGl0Q29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VDb21tZW50TG9hZGluZyIsImxpa2VDb21tZW50RG9uZSIsImxpa2VDb21tZW50RXJyb3IiLCJ1bmxpa2VDb21tZW50TG9hZGluZyIsInVubGlrZUNvbW1lbnREb25lIiwidW5saWtlQ29tbWVudEVycm9yIiwiYWRkU3ViQ29tbWVudExvYWRpbmciLCJhZGRTdWJDb21tZW50RG9uZSIsImFkZFN1YkNvbW1lbnRFcnJvciIsImVkaXRTdWJDb21tZW50TG9hZGluZyIsImVkaXRTdWJDb21tZW50RG9uZSIsImVkaXRTdWJDb21tZW50RXJyb3IiLCJyZW1vdmVTdWJDb21tZW50TG9hZGluZyIsInJlbW92ZVN1YkNvbW1lbnREb25lIiwicmVtb3ZlU3ViQ29tbWVudEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19DTEVBUiIsIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSIsIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfQ0xFQVIiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUIiwiTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCIsIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTIiwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUiLCJFRElUX1BPU1RfUkVRVUVTVCIsIkVESVRfUE9TVF9TVUNDRVNTIiwiRURJVF9QT1NUX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ0xFQVIiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9DTEVBUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxJS0VfQ09NTUVOVF9SRVFVRVNUIiwiTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJMSUtFX0NPTU1FTlRfRkFJTFVSRSIsIlVOTElLRV9DT01NRU5UX1JFUVVFU1QiLCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTIiwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX1JFUVVFU1QiLCJFRElUX0NPTU1FTlRfU1VDQ0VTUyIsIkVESVRfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX0NMRUFSIiwiQUREX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1NVQl9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUIiwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUiIsImNhdGVnb3J5IiwidW5zaGlmdCIsImxlbmd0aCIsIm1vcmVUZWNoUG9zdHMiLCJjb25jYXQiLCJtb3JlUG9zdHMiLCJtb3JlRGFpbHlQb3N0cyIsImNsYXNzUG9zdHNfY2xhc3MiLCJjdWx0dXJlUG9zdHNfY2xhc3MiLCJDb21tZW50cyIsInB1c2giLCJQb3N0TGlrZXJzIiwiaWQiLCJVc2VySWQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIkNvbW1lbnRJZCIsImNvbnRlbnQiLCJuZXdDb21tZW50IiwiQ29tbWVudExpa2VycyIsIkNvbW1lbnRzV2l0aG91dERlbGV0ZWQiLCJTdWJDb21tZW50cyIsImZ1bGxTdWJDb21tZW50IiwiU3ViQ29tbWVudElkIiwiY29uZmlybVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ0luR29vZ2xlTG9hZGluZyIsImxvZ0luR29vZ2xlRG9uZSIsImxvZ0luR29vZ2xlRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibG9hZEluZm9Mb2FkaW5nIiwibG9hZEluZm9Eb25lIiwibG9hZEluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJhZGRJY29uTG9hZGluZyIsImFkZEljb25Eb25lIiwiYWRkSWNvbkVycm9yIiwicmVtb3ZlSWNvbkxvYWRpbmciLCJyZW1vdmVJY29uRG9uZSIsInJlbW92ZUljb25FcnJvciIsImNvbmZpcm1QYXNzd29yZExvYWRpbmciLCJjb25maXJtUGFzc3dvcmREb25lIiwiY29uZmlybVBhc3N3b3JkRXJyb3IiLCJ3aXRoZHJhd2FsTG9hZGluZyIsIndpdGhkcmF3YWxEb25lIiwid2l0aGRyYXdhbEVycm9yIiwiY2hhbmdlUGFzc3dvcmRMb2FkaW5nIiwiY2hhbmdlUGFzc3dvcmREb25lIiwiY2hhbmdlUGFzc3dvcmRFcnJvciIsImNoYW5nZU5hbWVMb2FkaW5nIiwiY2hhbmdlTmFtZURvbmUiLCJjaGFuZ2VOYW1lRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfSU5fQ0xFQVIiLCJMT0dfSU5fR09PR0xFX1JFUVVFU1QiLCJMT0dfSU5fR09PR0xFX1NVQ0NFU1MiLCJMT0dfSU5fR09PR0xFX0ZBSUxVUkUiLCJMT0dfSU5fR09PR0xFX0NMRUFSIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9DTEVBUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfQ0xFQVIiLCJMT0FEX0lORk9fUkVRVUVTVCIsIkxPQURfSU5GT19TVUNDRVNTIiwiTE9BRF9JTkZPX0ZBSUxVUkUiLCJBRERfSUNPTl9SRVFVRVNUIiwiQUREX0lDT05fU1VDQ0VTUyIsIkFERF9JQ09OX0ZBSUxVUkUiLCJBRERfSUNPTl9DTEVBUiIsIlJFTU9WRV9JQ09OX1JFUVVFU1QiLCJSRU1PVkVfSUNPTl9TVUNDRVNTIiwiUkVNT1ZFX0lDT05fRkFJTFVSRSIsIlJFTU9WRV9JQ09OX0NMRUFSIiwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QiLCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyIsIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFIiwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSIiwiQ0hBTkdFX05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05BTUVfQ0xFQVIiLCJXSVRIRFJXQUxfUkVRVUVTVCIsIldJVEhEUldBTF9TVUNDRVNTIiwiV0lUSERSV0FMX0ZBSUxVUkUiLCJXSVRIRFJXQUxfQ0xFQVIiLCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QiLCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MiLCJDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUiLCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSIiwiaWNvbiIsIm5hbWUiLCJuZXdOYW1lIiwiYWRkUXVpekFQSSIsImF4aW9zIiwiYWRkUXVpeiIsImNhbGwiLCJwdXQiLCJkZWxheSIsImVyciIsInJlc3BvbnNlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJzZWFyY2hIYXNodGFnQVBJIiwic2VhcmNoSGFzaHRhZyIsIndhdGNoQWRkUXVpeiIsInRha2VMYXRlc3QiLCJ3YXRjaFNlYXJjaEtleXdvcmQiLCJ3YXRjaFNlYXJjaEhhc2h0YWciLCJibG9nU2FnYSIsImFsbCIsImZvcmsiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21tZW50QVBJIiwiZGVsZXRlIiwicmVtb3ZlQ29tbWVudCIsImVkaXRDb21tZW50QVBJIiwiZWRpdENvbW1lbnQiLCJsaWtlQ29tbWVudEFQSSIsInBhdGNoIiwibGlrZUNvbW1lbnQiLCJ1bmxpa2VDb21tZW50QVBJIiwidW5saWtlQ29tbWVudCIsImFkZFN1YkNvbW1lbnRBUEkiLCJhZGRTdWJDb21tZW50IiwicmVtb3ZlU3ViQ29tbWVudEFQSSIsInJlbW92ZVN1YkNvbW1lbnQiLCJlZGl0U3ViQ29tbWVudEFQSSIsImVkaXRTdWJDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21tZW50Iiwid2F0Y2hFZGl0Q29tbWVudCIsIndhdGNoTGlrZUNvbW1lbnQiLCJ3YXRjaFVubGlrZUNvbW1lbnQiLCJ3YXRjaEFkZFN1YkNvbW1lbnQiLCJ3YXRjaFJlbW92ZVN1YkNvbW1lbnQiLCJ3YXRjaEVkaXRTdWJDb21tZW50IiwiY29tbWVudFNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJCQUNLRU5EX1VSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwibG9hZENhdGVnb3J5UG9zdHNBUEkiLCJsb2FkQ2F0ZWdvcnlQb3N0cyIsImxvYWRNb3JlUG9zdHNBUEkiLCJMYXN0SWQiLCJsb2FkTW9yZVBvc3RzIiwibG9hZENsYXNzUG9zdHNBUEkiLCJsb2FkQ2xhc3NQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJsb2FkUmVjZW50UG9zdHNBUEkiLCJsb2FkUmVjZW50UG9zdHMiLCJsaWtlUG9zdEFQSSIsIlBvc3RJZCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJ1cGxvYWRQb3N0SW1hZ2VBUEkiLCJ1cGxvYWRQb3N0SW1hZ2UiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImVkaXRQb3N0QVBJIiwiZWRpdFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNobG9hZENhdGVnb3J5UG9zdHMiLCJ3YXRjaGxvYWRNb3JlUG9zdHMiLCJ3YXRjaExvYWRSZWNlbnRQb3N0cyIsIndhdGNobG9hZENsYXNzUG9zdHMiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoRWRpdFBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoVXBsb2FkUG9zdEltYWdlIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ0luR29vZ2xlQVBJIiwibG9nSW5Hb29nbGUiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhZGRJY29uQVBJIiwiYWRkSWNvbiIsInJlbW92ZUljb25BUEkiLCJyZW1vdmVJY29uIiwibG9hZEluZm9BUEkiLCJsb2FkSW5mbyIsImNvbmZpcm1QYXNzd29yZEFQSSIsImNoYW5nZVBhc3N3b3JkQVBJIiwiY2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VOYW1lQVBJIiwiY2hhbmdlTmFtZSIsIndpdGhkcmF3YWxBUEkiLCJ3aXRoZHJhd2FsIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nSW5Hb29nbGUiLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hBZGRJY29uIiwid2F0Y2hSZW1vdmVJY29uIiwid2F0Y2hMb2FkSW5mbyIsIndhdGNoQ29uZmlybVBhc3N3b3JkIiwid2F0Y2hDaGFuZ2VQYXNzd29yZCIsIndhdGNoQ2hhbmdlTmFtZSIsIndhdGNoV2l0aGRyYXdhbCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJCTFVFX0NPTE9SIiwiTUFJTl9DT0xPUiIsIlNVQl9DT0xPUiIsIkdSQVlfQ09MT1IiLCJCR19DT0xPUiIsIlJFRF9DT0xPUiIsImRhdGFTb3VyY2UiLCJrZXkiLCJkYXRlIiwic3VtbWFyeSIsInNjb3JlIiwiVXNlclByb2ZpbGUiLCJkeW5hbWljIiwiQXJ0aWNsZVJvdyIsIkFydGljbGVDb2x1bW4iLCJCbG9nQ2F0ZWdvcnlQYWdlIiwibWVtbyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJtYXAiLCJpIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJDb29raWUiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwiRU5EIiwidG9Qcm9taXNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvW2NhdGVnb3J5XVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bY2F0ZWdvcnldL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgQmxvZ1N0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHBvc3RzOiBbXSxcclxuICBvbkFib3V0OiBmYWxzZSxcclxuICBvblNpZ25VcFBhZ2U6IGZhbHNlLFxyXG4gIHBvc3RFZGl0T246IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3RzOiBbXSxcclxuICBoYXNodGFnUG9zdHM6IFtdLFxyXG4gIG9uU2xpZGVNZW51OiBmYWxzZSxcclxuICBvbkhlYWRlclRpdGxlOiBmYWxzZSxcclxuXHJcbiAgc2VhcmNoZWRLZXl3b3JkOiBudWxsLFxyXG5cclxuICBzZWFyY2hLZXl3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoS2V5d29yZERvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHNlYXJjaEhhc2hUYWdMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hIYXNoVGFnRG9uZTogZmFsc2UsXHJcbiAgc2VhcmNoSGFzaFRhZ0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkUXVpekxvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFF1aXpEb25lOiBmYWxzZSxcclxuICBhZGRRdWl6RXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREVfQ0hBTkdFID0gXCJNT0RFX0NIQU5HRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0FCT1VUID0gXCJTV0lUQ0hfQUJPVVRcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX0FCT1VUID0gXCJPTl9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT0ZGX0FCT1VUID0gXCJPRkZfQUJPVVRcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX1NJR05fVVBfUEFHRSA9IFwiT05fU0lHTl9VUF9QQUdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUE9TVF9FRElUX09OID0gXCJQT1NUX0VESVRfT05cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFBPU1RfRURJVF9PRkYgPSBcIlBPU1RfRURJVF9PRkZcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENMSUNLX0hBU0hfVEFHID0gXCJDTElDS19IQVNIX1RBR1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fU0xJREVfTUVOVSA9IFwiT05fU0xJREVfTUVOVVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fSEVBREVSX1RJVExFID0gXCJPTl9IRUFERVJfVElUTEVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUID0gXCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTID0gXCJTRUFSQ0hfS0VZV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFID0gXCJTRUFSQ0hfS0VZV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9DTEVBUiA9IFwiU0VBUkNIX0tFWVdPUkRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCA9IFwiU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTID0gXCJTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkUgPSBcIlNFQVJDSF9IQVNIX1RBR19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIgPSBcIlNFQVJDSF9IQVNIX1RBR19DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX1JFUVVFU1QgPSBcIkFERF9RVUlaX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX1NVQ0NFU1MgPSBcIkFERF9RVUlaX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX0ZBSUxVUkUgPSBcIkFERF9RVUlaX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX0NMRUFSID0gXCJBRERfUVVJWl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogQmxvZ1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBTV0lUQ0hfQUJPVVQ6XHJcbiAgICAgICAgZHJhZnQub25BYm91dCA9ICFkcmFmdC5vbkFib3V0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX0FCT1VUOlxyXG4gICAgICAgIGRyYWZ0Lm9uQWJvdXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9GRl9BQk9VVDpcclxuICAgICAgICBkcmFmdC5vbkFib3V0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fU0lHTl9VUF9QQUdFOlxyXG4gICAgICAgIGRyYWZ0Lm9uU2lnblVwUGFnZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBPU1RfRURJVF9PTjpcclxuICAgICAgICBkcmFmdC5wb3N0RWRpdE9uID0gIWRyYWZ0LnBvc3RFZGl0T247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fU0xJREVfTUVOVTpcclxuICAgICAgICBkcmFmdC5vblNsaWRlTWVudSA9ICFkcmFmdC5vblNsaWRlTWVudTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9IRUFERVJfVElUTEU6XHJcbiAgICAgICAgZHJhZnQub25IZWFkZXJUaXRsZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBPU1RfRURJVF9PRkY6XHJcbiAgICAgICAgZHJhZnQucG9zdEVkaXRPbiA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzID0gYWN0aW9uLmRhdGEuc2VhcmNoUG9zdHM7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoZWRLZXl3b3JkID0gYWN0aW9uLmRhdGEuc2VhcmNoZWRLZXl3b3JkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5oYXNodGFnUG9zdHMgPSBhY3Rpb24uZGF0YS5oYXNodGFnUG9zdHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IGJsb2cgZnJvbSBcIi4vYmxvZ1wiO1xyXG5pbXBvcnQgeyBCbG9nU3RhdGUsIFBvc3RTdGF0ZSwgVXNlclN0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb290U3RhdGUge1xyXG4gIGJsb2c6IEJsb2dTdGF0ZTtcclxuICB1c2VyOiBVc2VyU3RhdGU7XHJcbiAgcG9zdDogUG9zdFN0YXRlO1xyXG59XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZTogUm9vdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgICAgYmxvZyxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnRzSW50ZXIsIFBvc3RTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0ZWNoUG9zdHM6IFtdLFxyXG4gIGRhaWx5UG9zdHM6IFtdLFxyXG4gIGNsYXNzUG9zdHM6IFtdLFxyXG4gIGN1bHR1cmVQb3N0czogW10sXHJcbiAgcXVpenplczogW10sXHJcbiAgd29yZHM6IFtdLFxyXG4gIGhhc2h0YWdzOiBbXSxcclxuICBtb3N0TGlrZWRQb3N0OiBudWxsLFxyXG4gIG1vc3RWaWV3ZWRQb3N0OiBudWxsLFxyXG4gIG1vc3RDb21tZW50ZWRQb3N0OiBudWxsLFxyXG4gIHBvc3Q6IG51bGwsXHJcbiAgcHJldlBvc3Q6IFtdLFxyXG4gIG5leHRQb3N0OiBbXSxcclxuICBjb3VudFBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGg6IG51bGwsXHJcbiAgcG9zdEltYWdlUGF0aDogbnVsbCxcclxuICByZWNlbnRWaWV3UG9zdDogbnVsbCxcclxuICByZWNlbnRDb21tZW50UG9zdDogbnVsbCxcclxuXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVwbG9hZFBvc3RJbWFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZFBvc3RJbWFnZURvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZFBvc3RJbWFnZUVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRQb3N0RG9uZTogZmFsc2UsXHJcbiAgZWRpdFBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZFJlY2VudFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFJlY2VudFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFJlY2VudFBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZENhdGVnb3J5UG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZE1vcmVQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNb3JlUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkTW9yZVBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkQ2xhc3NQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRDbGFzc1Bvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZENsYXNzUG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGVkaXRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgZWRpdENvbW1lbnREb25lOiBmYWxzZSxcclxuICBlZGl0Q29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsaWtlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgbGlrZUNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVubGlrZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkU3ViQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFN1YkNvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRTdWJDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0U3ViQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgZWRpdFN1YkNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlU3ViQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgaGFzTW9yZVBvc3RzOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0NMRUFSID0gXCJVUExPQURfSU1BR0VTX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUyA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfQ0xFQVIgPSBcIkFERF9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUID0gXCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9QT1NUU19SRVFVRVNUID0gXCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX1JFUVVFU1QgPSBcIkVESVRfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfU1VDQ0VTUyA9IFwiRURJVF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9GQUlMVVJFID0gXCJFRElUX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NMRUFSID0gXCJFRElUX1BPU1RfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9DTEVBUiA9IFwiUkVNT1ZFX1BPU1RfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfQ09NTUVOVF9SRVFVRVNUID0gXCJMSUtFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX1NVQ0NFU1MgPSBcIkxJS0VfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX0NPTU1FTlRfRkFJTFVSRSA9IFwiTElLRV9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9SRVFVRVNUID0gXCJVTkxJS0VfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTID0gXCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFID0gXCJVTkxJS0VfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfQ0xFQVIgPSBcIkFERF9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9IFwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9IFwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9SRVFVRVNUID0gXCJFRElUX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX1NVQ0NFU1MgPSBcIkVESVRfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfRkFJTFVSRSA9IFwiRURJVF9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9DTEVBUiA9IFwiRURJVF9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX1NVQl9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX0NMRUFSID0gXCJBRERfU1VCX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCA9IFwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTID0gXCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUgPSBcIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUID0gXCJFRElUX1NVQl9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUgPSBcIkVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9DTEVBUiA9IFwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogUG9zdFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQ6IGFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgJiYgZHJhZnQudGVjaFBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgJiYgZHJhZnQuZGFpbHlQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJjbGFzc1wiICYmIGRyYWZ0LmNsYXNzUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiY3VsdHVyZVwiICYmIGRyYWZ0LmN1bHR1cmVQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudGVjaFBvc3RzID0gYWN0aW9uLmRhdGEudGVjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBhY3Rpb24uZGF0YS5kYWlseVBvc3RzO1xyXG4gICAgICAgIGRyYWZ0Lmhhc2h0YWdzID0gYWN0aW9uLmRhdGEuaGFzaHRhZ3M7XHJcbiAgICAgICAgZHJhZnQubW9zdFZpZXdlZFBvc3QgPSBhY3Rpb24uZGF0YS5tb3N0Vmlld2VkUG9zdDtcclxuICAgICAgICBkcmFmdC5tb3N0TGlrZWRQb3N0ID0gYWN0aW9uLmRhdGEubW9zdExpa2VkUG9zdDtcclxuICAgICAgICBkcmFmdC5tb3N0Q29tbWVudGVkUG9zdCA9IGFjdGlvbi5kYXRhLm1vc3RDb21tZW50ZWRQb3N0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3QgPSBhY3Rpb24uZGF0YS5wb3N0O1xyXG4gICAgICAgIGRyYWZ0LnByZXZQb3N0ID0gYWN0aW9uLmRhdGEucHJldlBvc3Q7XHJcbiAgICAgICAgZHJhZnQubmV4dFBvc3QgPSBhY3Rpb24uZGF0YS5uZXh0UG9zdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnRlY2hQb3N0cyA9IGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcInRlY2hcIiA/IGFjdGlvbi5kYXRhLnBvc3RzIDogZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZGFpbHlQb3N0cyA9IGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgPyBhY3Rpb24uZGF0YS5wb3N0cyA6IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvdW50UG9zdHMgPSBhY3Rpb24uZGF0YS5jb3VudFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLnBvc3RzLmxlbmd0aCA+IDY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy/subTthYzqs6Drpqzsl5Ag66ee64qUIO2PrOyKpO2KuOulvCDrhKPslrTspIDri6QuXHJcbiAgICAgICAgY29uc3QgbW9yZVRlY2hQb3N0cyA9XHJcbiAgICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgJiYgZHJhZnQudGVjaFBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YS5tb3JlUG9zdHMpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVEYWlseVBvc3RzID1cclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgJiYgZHJhZnQuZGFpbHlQb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEubW9yZVBvc3RzKTtcclxuICAgICAgICBkcmFmdC50ZWNoUG9zdHMgPSBtb3JlVGVjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBtb3JlRGFpbHlQb3N0cztcclxuICAgICAgICAvL+u2iOufrOyYqCDtj6zsiqTtirjqsIAgbGltaXTqsJLsnbggNuqwnOudvOuKlOqyg+ydgCDrtojrn6zsmKgg7Y+s7Iqk7Yq46rCAIOuNlCDsnojri6TripQg7J2Y66+47J2064ukLlxyXG4gICAgICAgIC8v66eM7JW9IOqwr+yImOqwgCDrlLEg66ee7JWE7IScIOuLpOydjCDqsJLsnbQg7JeG64uk6rOgIO2VtOuPhCDqt7gg7JqU7LKt7J2AIDDqsJzsnoTsnLzroZwgZmFsc2XqsIAg65Cc64ukLlxyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLm1vcmVQb3N0cy5sZW5ndGggPT09IDY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNsYXNzUG9zdHMgPSBhY3Rpb24uZGF0YS5jbGFzc1Bvc3RzX2NsYXNzO1xyXG4gICAgICAgIGRyYWZ0LmN1bHR1cmVQb3N0cyA9IGFjdGlvbi5kYXRhLmN1bHR1cmVQb3N0c19jbGFzcztcclxuICAgICAgICBkcmFmdC5xdWl6emVzID0gYWN0aW9uLmRhdGEucXVpenplcztcclxuICAgICAgICBkcmFmdC53b3JkcyA9IGFjdGlvbi5kYXRhLndvcmRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LlBvc3RMaWtlcnM/LnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LlBvc3RMaWtlcnM/LmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0LkNvbW1lbnRzLmZpbmQoKHY6IENvbW1lbnRzSW50ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQ7XHJcbiAgICAgICAgfSkuY29udGVudCA9IGFjdGlvbi5kYXRhLm5ld0NvbW1lbnQ7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Db21tZW50cz8uZmluZCgodjogYW55KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQpLkNvbW1lbnRMaWtlcnMucHVzaCh7XHJcbiAgICAgICAgICBpZDogYWN0aW9uLmRhdGEuVXNlcklkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgLy9SRVFVRVNUICwgU1VDQ0VTUyAsIEZBSUxVUkUg66GcIFJlZHVjZXLrpbwg7Kq86rCc7IScIOyYpOulmOq0gOumrOulvCDrs7Tri6Qg7Im96rKMIO2WiOyKteuLiOuLpC5cclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy9pbW1lciDsoIHsmqnsnLzroZwg67aI67OA7ISx7J2EIOyViOyngOy8nOuPhCDrkKguXHJcbiAgICAgICAgbGV0IENvbW1lbnRzV2l0aG91dERlbGV0ZWQgPSBkcmFmdC5wb3N0Py5Db21tZW50cz8uZmluZChcclxuICAgICAgICAgICh2OiBDb21tZW50c0ludGVyKSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWRcclxuICAgICAgICApLkNvbW1lbnRMaWtlcnMuZmlsdGVyKCh2OiBhbnkpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQucG9zdC5Db21tZW50cy5maW5kKFxyXG4gICAgICAgICAgKHY6IENvbW1lbnRzSW50ZXIpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZFxyXG4gICAgICAgICkuQ29tbWVudExpa2VycyA9IENvbW1lbnRzV2l0aG91dERlbGV0ZWQ7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoKHY6IGFueSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKS5TdWJDb21tZW50cy5wdXNoKFxyXG4gICAgICAgICAgYWN0aW9uLmRhdGEuZnVsbFN1YkNvbW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1NVQl9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3QuQ29tbWVudHMuZmluZCgodjogQ29tbWVudHNJbnRlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZDtcclxuICAgICAgICB9KS5TdWJDb21tZW50cy5maW5kKCh2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5TdWJDb21tZW50SWQ7XHJcbiAgICAgICAgfSkuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdEltYWdlUGF0aCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZWNlbnRWaWV3UG9zdCA9IGFjdGlvbi5kYXRhLnJlY2VudFZpZXdQb3N0O1xyXG4gICAgICAgIGRyYWZ0LnJlY2VudENvbW1lbnRQb3N0ID0gYWN0aW9uLmRhdGEucmVjZW50Q29tbWVudFBvc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgVXNlclN0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IG51bGwsXHJcbiAgaW1hZ2VQYXRoOiBudWxsLFxyXG4gIGNvbmZpcm1QYXNzd29yZDogZmFsc2UsXHJcblxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9nSW5Hb29nbGVMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkdvb2dsZURvbmU6IGZhbHNlLFxyXG4gIGxvZ0luR29vZ2xlRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkSW5mb0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRJY29uTG9hZGluZzogZmFsc2UsXHJcbiAgYWRkSWNvbkRvbmU6IGZhbHNlLFxyXG4gIGFkZEljb25FcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZUljb25Mb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVJY29uRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlSWNvbkVycm9yOiBmYWxzZSxcclxuXHJcbiAgY29uZmlybVBhc3N3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgY29uZmlybVBhc3N3b3JkRG9uZTogZmFsc2UsXHJcbiAgY29uZmlybVBhc3N3b3JkRXJyb3I6IGZhbHNlLFxyXG5cclxuICB3aXRoZHJhd2FsTG9hZGluZzogZmFsc2UsXHJcbiAgd2l0aGRyYXdhbERvbmU6IGZhbHNlLFxyXG4gIHdpdGhkcmF3YWxFcnJvcjogZmFsc2UsXHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlUGFzc3dvcmREb25lOiBmYWxzZSxcclxuICBjaGFuZ2VQYXNzd29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgY2hhbmdlTmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOYW1lRXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9DTEVBUiA9IFwiTE9HX0lOX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9SRVFVRVNUID0gXCJMT0dfSU5fR09PR0xFX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfU1VDQ0VTUyA9IFwiTE9HX0lOX0dPT0dMRV9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX0ZBSUxVUkUgPSBcIkxPR19JTl9HT09HTEVfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9DTEVBUiA9IFwiTE9HX0lOX0dPT0dMRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfQ0xFQVIgPSBcIkxPR19PVVRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0NMRUFSID0gXCJTSUdOX1VQX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPX1JFUVVFU1QgPSBcIkxPQURfSU5GT19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9JTkZPX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19GQUlMVVJFID0gXCJMT0FEX0lORk9fRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX1JFUVVFU1QgPSBcIkFERF9JQ09OX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX1NVQ0NFU1MgPSBcIkFERF9JQ09OX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX0ZBSUxVUkUgPSBcIkFERF9JQ09OX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX0NMRUFSID0gXCJBRERfSUNPTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX1JFUVVFU1QgPSBcIlJFTU9WRV9JQ09OX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX1NVQ0NFU1MgPSBcIlJFTU9WRV9JQ09OX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX0ZBSUxVUkUgPSBcIlJFTU9WRV9JQ09OX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX0NMRUFSID0gXCJSRU1PVkVfSUNPTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9SRVFVRVNUID0gXCJDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1MgPSBcIkNIQU5HRV9QQVNTV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSA9IFwiQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9DTEVBUiA9IFwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05BTUVfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05BTUVfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05BTUVfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfQ0xFQVIgPSBcIkNIQU5HRV9OQU1FX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX1JFUVVFU1QgPSBcIldJVEhEUldBTF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfU1VDQ0VTUyA9IFwiV0lUSERSV0FMX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9GQUlMVVJFID0gXCJXSVRIRFJXQUxfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX0NMRUFSID0gXCJXSVRIRFJXQUxfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QgPSBcIkNPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTID0gXCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSA9IFwiQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX0NMRUFSID0gXCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBVc2VyU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdDogYW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9HT09HTEVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQub25TaWduVXBQYWdlID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyLmljb24gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5pY29uID0gXCIvaW1hZ2VzL2Jsb2cvZGVmYXVsdC11c2VyLnBuZ1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5uYW1lID0gYWN0aW9uLmRhdGEubmV3TmFtZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1FVSVpfQ0xFQVIsXHJcbiAgQUREX1FVSVpfRkFJTFVSRSxcclxuICBBRERfUVVJWl9SRVFVRVNULFxyXG4gIEFERF9RVUlaX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19SRVFVRVNULFxyXG4gIFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTLFxyXG4gIFNFQVJDSF9LRVlXT1JEX0NMRUFSLFxyXG4gIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvYmxvZ1wiO1xyXG5pbXBvcnQge1xyXG4gIEFkZFF1aXpEYXRhLFxyXG4gIEFkZFF1aXpJbnRlcixcclxuICBTZWFyY2hIYXNodGFnRGF0YSxcclxuICBTZWFyY2hIYXNodGFnSW50ZXIsXHJcbiAgU2VhcmNoS2V5d29yZERhdGEsXHJcbiAgU2VhcmNoS2V5d29yZEludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFF1aXpBUEkoZGF0YTogQWRkUXVpekRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9xdWl6YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRRdWl6KGFjdGlvbjogQWRkUXVpekludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoYWRkUXVpekFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hLZXl3b3JkQVBJKGRhdGE6IFNlYXJjaEtleXdvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvc2VhcmNoL2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoS2V5d29yZChhY3Rpb246IFNlYXJjaEtleXdvcmRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoc2VhcmNoS2V5d29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hIYXNodGFnQVBJKGRhdGE6IFNlYXJjaEhhc2h0YWdEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvc2VhcmNoL2hhc2h0YWdgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaEhhc2h0YWcoYWN0aW9uOiBTZWFyY2hIYXNodGFnSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHNlYXJjaEhhc2h0YWdBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRRdWl6KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1FVSVpfUkVRVUVTVCwgYWRkUXVpeik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsIHNlYXJjaEtleXdvcmQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEhhc2h0YWcoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCwgc2VhcmNoSGFzaHRhZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBibG9nU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRRdWl6KSwgZm9yayh3YXRjaFNlYXJjaEtleXdvcmQpLCBmb3JrKHdhdGNoU2VhcmNoSGFzaHRhZyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBMSUtFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBVTkxJS0VfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9TVUJfQ09NTUVOVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEVESVRfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9DTEVBUixcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBFRElUX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBFRElUX0NPTU1FTlRfQ0xFQVIsXHJcbiAgRURJVF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkQ29tbWVudERhdGEsXHJcbiAgQWRkQ29tbWVudEludGVyLFxyXG4gIEFkZFN1YkNvbW1lbnREYXRhLFxyXG4gIEFkZFN1YkNvbW1lbnRJbnRlcixcclxuICBFZGl0Q29tbWVudERhdGEsXHJcbiAgRWRpdENvbW1lbnRJbnRlcixcclxuICBFZGl0U3ViQ29tbWVudEludGVyLFxyXG4gIExpa2VDb21tZW50RGF0YSxcclxuICBMaWtlQ29tbWVudEludGVyLFxyXG4gIFJlbW92ZUNvbW1lbnRJbnRlcixcclxuICBSZW1vdmVTdWJDb21tZW50SW50ZXIsXHJcbiAgU3ViQ29tbWVudERhdGEsXHJcbiAgVW5saWtlQ29tbWVudEludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YTogQWRkQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9jb21tZW50LyR7ZGF0YS5wb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbjogQWRkQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvY29tbWVudC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbjogUmVtb3ZlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0Q29tbWVudEFQSShkYXRhOiBFZGl0Q29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL2NvbW1lbnQvZWRpdC8ke2RhdGEuQ29tbWVudElkfS9gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRDb21tZW50KGFjdGlvbjogRWRpdENvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlQ29tbWVudEFQSShkYXRhOiBMaWtlQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvY29tbWVudC9saWtlLyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlQ29tbWVudChhY3Rpb246IExpa2VDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxpa2VDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlQ29tbWVudEFQSShkYXRhOiBMaWtlQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvdW5saWtlLyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VDb21tZW50KGFjdGlvbjogVW5saWtlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1bmxpa2VDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN1YkNvbW1lbnRBUEkoZGF0YTogQWRkU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9jb21tZW50L3N1Yi8ke2RhdGEuQ29tbWVudElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkU3ViQ29tbWVudChhY3Rpb246IEFkZFN1YkNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkU3ViQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3ViQ29tbWVudEFQSShkYXRhOiBTdWJDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvY29tbWVudC9zdWIvJHtkYXRhLkNvbW1lbnRJZH0vJHtkYXRhLlN1YkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVN1YkNvbW1lbnQoYWN0aW9uOiBSZW1vdmVTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZVN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFN1YkNvbW1lbnRBUEkoZGF0YTogU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL2NvbW1lbnQvc3ViL2VkaXQvJHtkYXRhLkNvbW1lbnRJZH0vJHtkYXRhLlN1YkNvbW1lbnRJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRTdWJDb21tZW50KGFjdGlvbjogRWRpdFN1YkNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdFN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9DT01NRU5UX1JFUVVFU1QsIGVkaXRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfQ09NTUVOVF9SRVFVRVNULCBsaWtlQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9DT01NRU5UX1JFUVVFU1QsIHVubGlrZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCwgYWRkU3ViQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlU3ViQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVTdWJDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0U3ViQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCwgZWRpdFN1YkNvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY29tbWVudFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0Q29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoTGlrZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaEFkZFN1YkNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVN1YkNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaEVkaXRTdWJDb21tZW50KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJsb2dTYWdhIGZyb20gXCIuL2Jsb2dcIjtcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGNvbW1lbnRTYWdhIGZyb20gXCIuL2NvbW1lbnRcIjtcclxuaW1wb3J0IHsgQkFDS0VORF9VUkwgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIiA6IEJBQ0tFTkRfVVJMO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpLCBmb3JrKGNvbW1lbnRTYWdhKSwgZm9yayhibG9nU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX1JFUVVFU1QsXHJcbiAgRURJVF9QT1NUX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfQ0xFQVIsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIEFERF9QT1NUX0NMRUFSLFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19DTEVBUixcclxuICBMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSxcclxuICBVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNULFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSxcclxuICBFRElUX1BPU1RfQ0xFQVIsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkUG9zdEludGVyLFxyXG4gIEVkaXRQb3N0SW50ZXIsXHJcbiAgTGlrZVBvc3REYXRhLFxyXG4gIExpa2VQb3N0SW50ZXIsXHJcbiAgTG9hZENhdGVnb3J5SW50ZXIsXHJcbiAgTG9hZE1vcmVQb3N0c0RhdGEsXHJcbiAgTG9hZE1vcmVQb3N0c0ludGVyLFxyXG4gIExvYWRQb3N0RGF0YSxcclxuICBMb2FkUG9zdEludGVyLFxyXG4gIExvYWRSZWNlbnRQb3N0SW50ZXIsXHJcbiAgTmV3UG9zdERhdGEsXHJcbiAgUmVtb3ZlUG9zdERhdGEsXHJcbiAgUmVtb3ZlUG9zdEludGVyLFxyXG4gIFVwbG9hZEltYWdlRGF0YSxcclxuICBVcGxvYWRJbWFnZUludGVyLFxyXG4gIFVwbG9hZFBvc3RJbWFnZUludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGE6IE5ld1Bvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbjogQWRkUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3RgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ2F0ZWdvcnlQb3N0c0FQSShkYXRhOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvY2F0ZWdvcnkvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZENhdGVnb3J5UG9zdHMoYWN0aW9uOiBMb2FkQ2F0ZWdvcnlJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZENhdGVnb3J5UG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNb3JlUG9zdHNBUEkoZGF0YTogTG9hZE1vcmVQb3N0c0RhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvbW9yZXBvc3QvJHtkYXRhLmNhdGVnb3J5fT9sYXN0SWQ9JHtkYXRhLkxhc3RJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNb3JlUG9zdHMoYWN0aW9uOiBMb2FkTW9yZVBvc3RzSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRNb3JlUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTU9SRV9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ2xhc3NQb3N0c0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvY2xhc3NgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDbGFzc1Bvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZENsYXNzUG9zdHNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YTogTG9hZFBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L29uZVBvc3QvJHtkYXRhLnBvc3RJZH0vJHtkYXRhLlVzZXJJZH0vJHtkYXRhLmNhdGVnb3J5fWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb246IExvYWRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkUmVjZW50UG9zdHNBUEkoZGF0YTogVXNlckludGVyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC9yZWNlbnRgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFJlY2VudFBvc3RzKGFjdGlvbjogTG9hZFJlY2VudFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZFJlY2VudFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGE6IExpa2VQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS9wb3N0L2xpa2UvJHtkYXRhLlBvc3RJZH0vJHtkYXRhLlVzZXJJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbjogTGlrZVBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGE6IExpa2VQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvcG9zdC9saWtlLyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Vc2VySWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbjogTGlrZVBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YTogVXBsb2FkSW1hZ2VEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbjogVXBsb2FkSW1hZ2VJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZFBvc3RJbWFnZUFQSShkYXRhOiBVcGxvYWRJbWFnZURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdC9pbWFnZVwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZFBvc3RJbWFnZShhY3Rpb246IFVwbG9hZFBvc3RJbWFnZUludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1cGxvYWRQb3N0SW1hZ2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhOiBSZW1vdmVQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvcG9zdC9kZWxldGVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uOiBSZW1vdmVQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFBvc3RBUEkoZGF0YTogTmV3UG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3Bvc3QvZWRpdGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZWRpdFBvc3QoYWN0aW9uOiBFZGl0UG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChlZGl0UG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRDYXRlZ29yeVBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNULCBsb2FkQ2F0ZWdvcnlQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZE1vcmVQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTU9SRV9QT1NUU19SRVFVRVNULCBsb2FkTW9yZVBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVjZW50UG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNULCBsb2FkUmVjZW50UG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRDbGFzc1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DTEFTU19QT1NUU19SRVFVRVNULCBsb2FkQ2xhc3NQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX1BPU1RfUkVRVUVTVCwgZWRpdFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRQb3N0SW1hZ2UoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNULCB1cGxvYWRQb3N0SW1hZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaGxvYWRDYXRlZ29yeVBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkTW9yZVBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkQ2xhc3NQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWNlbnRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkUG9zdEltYWdlKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0UG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX0lDT05fQ0xFQVIsXHJcbiAgQUREX0lDT05fRkFJTFVSRSxcclxuICBBRERfSUNPTl9SRVFVRVNULFxyXG4gIEFERF9JQ09OX1NVQ0NFU1MsXHJcbiAgQ0hBTkdFX1BBU1NXT1JEX0NMRUFSLFxyXG4gIENIQU5HRV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gIENIQU5HRV9QQVNTV09SRF9SRVFVRVNULFxyXG4gIENIQU5HRV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gIENIQU5HRV9OQU1FX0NMRUFSLFxyXG4gIENIQU5HRV9OQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTkFNRV9TVUNDRVNTLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfQ0xFQVIsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgTE9BRF9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0NMRUFSLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9HT09HTEVfQ0xFQVIsXHJcbiAgTE9HX0lOX0dPT0dMRV9GQUlMVVJFLFxyXG4gIExPR19JTl9HT09HTEVfUkVRVUVTVCxcclxuICBMT0dfSU5fR09PR0xFX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9DTEVBUixcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBSRU1PVkVfSUNPTl9DTEVBUixcclxuICBSRU1PVkVfSUNPTl9GQUlMVVJFLFxyXG4gIFJFTU9WRV9JQ09OX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0lDT05fU1VDQ0VTUyxcclxuICBTSUdOX1VQX0NMRUFSLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFdJVEhEUldBTF9DTEVBUixcclxuICBXSVRIRFJXQUxfRkFJTFVSRSxcclxuICBXSVRIRFJXQUxfUkVRVUVTVCxcclxuICBXSVRIRFJXQUxfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHtcclxuICBVc2VyRGF0YSxcclxuICBMb2dJbkludGVyLFxyXG4gIFNpZ25VcEludGVyLFxyXG4gIEFkZEljb25EYXRhLFxyXG4gIEFkZEljb25JbnRlcixcclxuICBSZW1vdmVJY29uSW50ZXIsXHJcbiAgQ29tZmlybVBhc3N3b3JkSW50ZXIsXHJcbiAgQ29tZmlybVBhc3N3b3JkRGF0YSxcclxuICBDaGFuZ2VQYXNzd29yZERhdGEsXHJcbiAgQ2hhbmdlUGFzc3dvcmRJbnRlcixcclxuICBXaXRoZHJ3YWxJbnRlcixcclxuICBDaGFuZ2VOYW1lRGF0YSxcclxuICBDaGFuZ2VOYW1lSW50ZXIsXHJcbn0gZnJvbSBcIi4vQHNhZ2FUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YTogVXNlckRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9sb2dJblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbjogTG9nSW5JbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luR29vZ2xlQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9nb29nbGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbkdvb2dsZSgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dJbkdvb2dsZUFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fR09PR0xFX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL2xvZ091dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhOiBVc2VyRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL3NpZ25VcFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb246IFNpZ25VcEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDUwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEljb25BUEkoZGF0YTogQWRkSWNvbkRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9pY29uXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkSWNvbihhY3Rpb246IEFkZEljb25JbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkSWNvbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfSUNPTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJY29uQVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvdXNlci9pY29uLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUljb24oYWN0aW9uOiBSZW1vdmVJY29uSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZUljb25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lDT05fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hcGkvdXNlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZEluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpcm1QYXNzd29yZEFQSShkYXRhOiBDb21maXJtUGFzc3dvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL2NvbmZpcm1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNvbmZpcm1QYXNzd29yZChhY3Rpb246IENvbWZpcm1QYXNzd29yZEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChjb25maXJtUGFzc3dvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmRBUEkoZGF0YTogQ2hhbmdlUGFzc3dvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL3Bhc3N3b3JkYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VQYXNzd29yZChhY3Rpb246IENoYW5nZVBhc3N3b3JkSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGNoYW5nZVBhc3N3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5hbWVBUEkoZGF0YTogQ2hhbmdlTmFtZURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3VzZXIvbmFtZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmFtZShhY3Rpb246IENoYW5nZU5hbWVJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoY2hhbmdlTmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTkFNRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aXRoZHJhd2FsQVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYGFwaS91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdpdGhkcmF3YWwoYWN0aW9uOiBXaXRoZHJ3YWxJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwod2l0aGRyYXdhbEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBXSVRIRFJXQUxfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW5Hb29nbGUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fR09PR0xFX1JFUVVFU1QsIGxvZ0luR29vZ2xlKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEljb24oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfSUNPTl9SRVFVRVNULCBhZGRJY29uKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVJY29uKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0lDT05fUkVRVUVTVCwgcmVtb3ZlSWNvbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0lORk9fUkVRVUVTVCwgbG9hZEluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENvbmZpcm1QYXNzd29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCwgY29uZmlybVBhc3N3b3JkKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VQYXNzd29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9QQVNTV09SRF9SRVFVRVNULCBjaGFuZ2VQYXNzd29yZCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OQU1FX1JFUVVFU1QsIGNoYW5nZU5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFdpdGhkcmF3YWwoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChXSVRIRFJXQUxfUkVRVUVTVCwgd2l0aGRyYXdhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbkdvb2dsZSksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hBZGRJY29uKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVJY29uKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hDb25maXJtUGFzc3dvcmQpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZVBhc3N3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOYW1lKSxcclxuICAgIGZvcmsod2F0Y2hXaXRoZHJhd2FsKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL0BzYWdhXCI7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZTogSVN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwiLy8gQ29uZmlnXHJcbmV4cG9ydCBjb25zdCBCQUNLRU5EX1VSTCA9IFwiaHR0cHM6Ly9hcGkubm9haHdvcmxkLnNpdGVcIjtcclxuXHJcbi8vIENvbG9yXHJcblxyXG5leHBvcnQgY29uc3QgQkxVRV9DT0xPUiA9IFwiIzExODdjZlwiO1xyXG5leHBvcnQgY29uc3QgTUFJTl9DT0xPUiA9IFwiI0Q1RjdFNlwiO1xyXG5leHBvcnQgY29uc3QgU1VCX0NPTE9SID0gXCIjNUFFNEE4XCI7XHJcbmV4cG9ydCBjb25zdCBHUkFZX0NPTE9SID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcclxuZXhwb3J0IGNvbnN0IEJHX0NPTE9SID0gXCJyZ2IoMjQ3LCAyNDcsIDI0NylcIjtcclxuZXhwb3J0IGNvbnN0IFJFRF9DT0xPUiA9IFwiI2YxNWI2Y1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFTb3VyY2UgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcIjFcIixcclxuICAgIG5hbWU6IFwi7Yag7J21XCIsXHJcbiAgICBkYXRlOiAyMDE4LFxyXG4gICAgc3VtbWFyeTogXCLsmIHslrQg7J6Q6rKp7KadICjquLDqsITrp4zro4wpXCIsXHJcbiAgICBzY29yZTogXCI5MjVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCIyXCIsXHJcbiAgICBuYW1lOiBcIuunpOydvOqyveygnO2FjOyKpO2KuFwiLFxyXG4gICAgZGF0ZTogMjAxOCxcclxuICAgIHN1bW1hcnk6IFwi6rK97KCcLOqyveyYgeq0gOugqCDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCIzXCIsXHJcbiAgICBuYW1lOiBcIuq1reyZuOyXrO2WieyduOyGlOyekCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIu2VtOyZuOyXkOyEnCDsnbjsoJXtlZjripQg7ZWc6rWt6rSA6rSR7ZiR7ZqM7J2YIOq1reyZuCDsnbjshpTsnpAgIOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjRcIixcclxuICAgIG5hbWU6IFwiSkxQVFwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7J2867O47Ja0IOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiMeq4iVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjVcIixcclxuICAgIG5hbWU6IFwi7J2867O47Ja0IO2GteyXreyViOuCtOyCrCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIu2VnOq1reyCrDHquInsl5Ag7KSA7ZWY66mwIOydvOuzuOyWtCDthrXrsojsl60g64ql66Cl7J2EIOyeheymne2VmOuKlCDqta3qsIDsoITrrLjsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI2XCIsXHJcbiAgICBuYW1lOiBcIuyYgeyWtCDthrXsl63slYjrgrTsgqwg7J6Q6rKp7KadXCIsXHJcbiAgICBkYXRlOiAyMDIwLFxyXG4gICAgc3VtbWFyeTogXCLtlZzqta3sgqwx6riJ7JeQIOykgO2VmOupsCDsmIHslrQg7Ya167KI7JetIOuKpeugpeydhCDsnoXspp3tlZjripQg6rWt6rCA7KCE66y47J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiN1wiLFxyXG4gICAgbmFtZTogXCLsoJXrs7TsspjrpqzquLDsgqxcIixcclxuICAgIGRhdGU6IDIwMjEsXHJcbiAgICBzdW1tYXJ5OiBcIklU6rSA66CoIOyGjOyWkeydhCDsnoXspp3tlZjripQg6rWt6rCA6riw7Iig7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiOFwiLFxyXG4gICAgbmFtZTogXCLtlZnsoJDsnYDtlonsoJwg6rK97JiB7ZWZ7IKsXCIsXHJcbiAgICBkYXRlOiAyMDIxLFxyXG4gICAgc3VtbWFyeTogXCIyMDIx64WEIDbsm5Qg7KG47JeF7JiI7KCVXCIsXHJcbiAgICBzY29yZTogXCLtlZnsgqxcIixcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2wsIERpdmlkZXIsIFJvdyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCwgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vQHJlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IENvdW50VXAgZnJvbSBcInJlYWN0LWNvdW50dXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uLy4uL0BzdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IExPQURfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGUvVXNlclByb2ZpbGVcIikpO1xyXG5jb25zdCBBcnRpY2xlUm93ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0FydGljbGVzL0FydGljbGVSb3dcIikpO1xyXG5jb25zdCBBcnRpY2xlQ29sdW1uID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0FydGljbGVzL0FydGljbGVDb2x1bW5cIikpO1xyXG5cclxuY29uc3QgQmxvZ0NhdGVnb3J5UGFnZSA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5O1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHRlY2hQb3N0cywgZGFpbHlQb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkTW9yZVBvc3RzTG9hZGluZywgY291bnRQb3N0cyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIC8vWey2lSDsiqTtgazroaQg6rCS6rO8IO2ZlOuptOyXkCDrs7TsnbTripQg7Y6Y7J207KeAIOq4uOydtFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgLy/soITssrQg7Y6Y7J207KeA7J2YIOq4uOydtFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZE1vcmVQb3N0c0xvYWRpbmcgJiYgKHRlY2hQb3N0cyB8fCBkYWlseVBvc3RzLmxlbmd0aCA+IDcpKSB7XHJcbiAgICAgICAgICAvL+2PrOyKpO2KuOqwgCDrjZQg7J6I6rOgICwg7Y+s7Iqk7Yq466W8IOuhnOuUqeykkeydtCDslYTri4jqs6AgLCDtj6zsiqTtirjqsIAgN+qwnCDstIjqs7zsnbTrqbQgKCApXHJcbiAgICAgICAgICBjb25zdCBMYXN0SWQgPVxyXG4gICAgICAgICAgICAodGVjaFBvc3RzIHx8IGRhaWx5UG9zdHMpICYmXHJcbiAgICAgICAgICAgICh0ZWNoUG9zdHMgfHwgZGFpbHlQb3N0cylbKHRlY2hQb3N0cyB8fCBkYWlseVBvc3RzKS5sZW5ndGggLSAxXS5pZDtcclxuICAgICAgICAgIC8vIOydtOuvuCDrtojrn6zsmKgg7Y+s7Iqk7Yq465OkKOuwsOyXtCnsl5Ag66eI7KeA66eJ6rCS7J2YIOyVhOydtOuUlOulvCDqsIDsoLjsmKjri6QuXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTU9SRV9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgTGFzdElkLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvL+uplOuqqOumrOumreydhCDrsKnsp4DtlZjquLDsnITtlbQgdW5tb3VudOyLnCByZW1vdmVFdmVudExpc3RuZXJcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCB0ZWNoUG9zdHMsIGRhaWx5UG9zdHMsIGxvYWRNb3JlUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Tm9haCB3b3JsZCB8IHtjYXRlZ29yeX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHt1c2VyICYmIDxVc2VyUHJvZmlsZSAvPn1cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvZ19jYXRlZ29yeV9oZWFkZXJcIj5cclxuICAgICAgICAgIHsoY2F0ZWdvcnkgYXMgc3RyaW5nKS50b1VwcGVyQ2FzZSgpICsgXCIgUE9TVFNcIn1cclxuICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJicl9jYXRlZ29yeVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X2NvdW50XCI+XHJcbiAgICAgICAgICAgICsmbmJzcDtcclxuICAgICAgICAgICAgPENvdW50VXAgZHVyYXRpb249ezR9IHN0YXJ0PXswfSBlbmQ9e2NvdW50UG9zdHM/Lmxlbmd0aH0gLz5cclxuICAgICAgICAgICAgJm5ic3A7cG9zdHMuXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfY2F0ZWdvcnlfYmlnXCI+XHJcbiAgICAgICAgICA8QXJ0aWNsZVJvdyBhcnRpY2xlPXtkYWlseVBvc3RzWzBdIHx8IHRlY2hQb3N0c1swXX0gLz5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X21lZGl1bVwiPlxyXG4gICAgICAgICAgPEFydGljbGVDb2x1bW4gYXJ0aWNsZT17ZGFpbHlQb3N0c1swXSB8fCB0ZWNoUG9zdHNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X3NtYWxsXCI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEFydGljbGVDb2x1bW4gYXJ0aWNsZT17ZGFpbHlQb3N0c1swXSB8fCB0ZWNoUG9zdHNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIHsodGVjaFBvc3RzIHx8IGRhaWx5UG9zdHMpLnNsaWNlKDEpLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIGtleT17aX0geHM9ezI0fSBzbT17MTJ9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8QXJ0aWNsZUNvbHVtbiBhcnRpY2xlPXt2fSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6IFwiXCI7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBcIlwiO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBsZXQgeyBjYXRlZ29yeSB9ID0gY29udGV4dC5xdWVyeTtcclxuICBpZiAoY2F0ZWdvcnkgPT09IFwidGVjaFwiIHx8IGNhdGVnb3J5ID09PSBcImRhaWx5XCIgfHwgY2F0ZWdvcnkgPT09IFwiY3VsdHVyZVwiKSB7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBjYXRlZ29yeSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi80MDRcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9JTkZPX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IChjb250ZXh0LnN0b3JlIGFzIElTdG9yZSkuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhCbG9nQ2F0ZWdvcnlQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWltYWdlLWNyb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=