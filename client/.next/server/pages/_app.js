module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/*! exports provided: MODE_CHANGE, LOAD_PORTFOLIOS, LOAD_PORTFOLIO, LOAD_PREPORTFOLIO, LOAD_POSTPORTFOLIO, CHAGE_HEADER, SWITCH_ABOUT, ON_ABOUT, OFF_ABOUT, ON_SIGN_UP_PAGE, REMOVE_IMAGE, POST_EDIT_ON, POST_EDIT_OFF, CLICK_HASH_TAG, ON_SLIDE_MENU, ON_HEADER_TITLE, SEARCH_KEYWORD_REQUEST, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE, SEARCH_KEYWORD_CLEAR, SEARCH_HASH_TAG_REQUEST, SEARCH_HASH_TAG_SUCCESS, SEARCH_HASH_TAG_FAILURE, SEARCH_HASH_TAG_CLEAR, ADD_QUIZ_REQUEST, ADD_QUIZ_SUCCESS, ADD_QUIZ_FAILURE, ADD_QUIZ_CLEAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE_CHANGE", function() { return MODE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PORTFOLIOS", function() { return LOAD_PORTFOLIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PORTFOLIO", function() { return LOAD_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PREPORTFOLIO", function() { return LOAD_PREPORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTPORTFOLIO", function() { return LOAD_POSTPORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAGE_HEADER", function() { return CHAGE_HEADER; });
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

/***/ "./components/AppLayout.tsx":
/*!**********************************!*\
  !*** ./components/AppLayout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\AppLayout.tsx";






const scrollEffect = _emotion_react__WEBPACK_IMPORTED_MODULE_5__["keyframes"]`
to {
  opacity: 0.2;
}
`;

const Scroll = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", false ? undefined : {
  target: "e1akl9kh0",
  label: "Scroll"
})("opacity:0.5;position:fixed;bottom:0.5rem;right:2rem;font-size:2rem;z-index:2;cursor:pointer;animation:", scrollEffect, " 1s linear infinite alternate;@media only screen and (max-width: 430px){display:none;}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFwcExheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFwcExheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb3VibGVMZWZ0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IHNjcm9sbEVmZmVjdCA9IGtleWZyYW1lc2BcclxudG8ge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG5gO1xyXG5jb25zdCBTY3JvbGwgPSBzdHlsZWQuZGl2YFxyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwLjVyZW07XHJcbiAgcmlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFuaW1hdGlvbjogJHtzY3JvbGxFZmZlY3R9IDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSBtZW1vKCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IGFueSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlV3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTY3JvbGwgY2xhc3NOYW1lPVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSByb3RhdGU9ezkwfSAvPlxyXG4gICAgICAgIDwvU2Nyb2xsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEFwcExheW91dCk7XHJcbiJdfQ== */"));

const AppLayout = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({
  children
}) => {
  const scrollToTop = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "pageWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), children), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Scroll, {
    className: "scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DoubleLeftOutlined"], {
    onClick: scrollToTop,
    rotate: 90,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(AppLayout));

/***/ }),

/***/ "./components/Blog/Admin/AdminModal.tsx":
/*!**********************************************!*\
  !*** ./components/Blog/Admin/AdminModal.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal/Modal */ "antd/lib/modal/Modal");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Admin\\AdminModal.tsx";





const AdminModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  onChangePassword,
  password
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Please Enter Admin password",
    visible: isModalVisible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "This fucntion is for ADMIN only. If you are not a administrator, please go back and feedback to us. Thank you for your cooperatation."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\uC774 \uAE30\uB2A5\uC740 \uAD00\uB9AC\uC790 \uC804\uC6A9\uC785\uB2C8\uB2E4. \uC608\uAE30\uCE58 \uBABB\uD558\uAC8C \uC624\uC168\uC744\uACBD\uC6B0 \uD53C\uB4DC\uBC31 \uC8FC\uC2DC\uBA74 \uC815\uB9D0 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD611\uB825\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "\u3053\u306E\u6A5F\u80FD\u306F\u7BA1\u7406\u8005\u5C02\u7528\u3067\u3054\u3056\u3044\u307E\u3059\u3001\u4F55\u304C\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u76F4\u63A5\u3054\u9023\u7D61\u3057\u3066\u9802\u3051\u308C\u3070\u5E78\u3044\u3060\u3068\u601D\u3044\u307E\u3059\u3002"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: password,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminModal);

/***/ }),

/***/ "./components/Blog/Headers/BlogHeader.tsx":
/*!************************************************!*\
  !*** ./components/Blog/Headers/BlogHeader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var _util_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/useInput */ "./util/useInput.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Headers\\BlogHeader.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const SearchInput = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, false ? undefined : {
  target: "e1u3yexk0",
  label: "SearchInput"
})(false ? undefined : {
  name: "u3u729",
  styles: "width:30%;z-index:auto;overflow:hidden",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXEJsb2dIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QyIsImZpbGUiOiJDOlxcVXNlcnNcXE5vYWhcXERlc2t0b3BcXFByb2plY3RcXE5vYWh3b3JsZFxcY2xpZW50XFxjb21wb25lbnRzXFxCbG9nXFxIZWFkZXJzXFxCbG9nSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvYmxvZ1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB3aWR0aDogMzAlO1xyXG4gIHotaW5kZXg6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEJsb2dIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2tleXdvcmQsIG9uQ2hhbmdlS2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBvblNlYXJjaENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoa2V5d29yZC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJLZXl3b3JkIGlzIHJlcXVpcmVkIHRvIGhhdmUgbW9yZSB0aGVuIDEgbGV0dGVyXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsga2V5d29yZCB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoa2V5d29yZC5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZC5zbGljZSgxKX1gKTtcclxuICAgICAgc2V0S2V5d29yZChcIlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkfWApO1xyXG4gICAgc2V0S2V5d29yZChcIlwiKTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfdWxcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVjaFwiPlxyXG4gICAgICAgICAgICA8YT5JbmZvIFRlY2g8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFpbHlcIj5cclxuICAgICAgICAgICAgPGE+RGFpbHk8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2xhc3NcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgS29yZWFuIENsYXNzIGZvciAmbmJzcDtcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxLjJyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiamFwYW5fZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9qYXBhbi5wbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgPGE+UG9ydGZvbGlvIOKtkDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8U2VhcmNoSW5wdXQgdmFsdWU9e2tleXdvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZUtleXdvcmR9IG9uU2VhcmNoPXtvblNlYXJjaENvbnRlbnR9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ0hlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const BlogHeader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const [keyword, onChangeKeyword, setKeyword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])("");
  const onSearchContent = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (keyword.length < 2) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Keyword is required to have more then 1 letter");
      return;
    }

    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_5__["SEARCH_KEYWORD_REQUEST"],
      data: {
        keyword
      }
    });

    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      return;
    }

    router.push(`/search/${keyword}`);
    setKeyword("");
  }, [dispatch, router, keyword, setKeyword]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", {
    className: "blog_header_ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Home"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/tech",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Info Tech"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/daily",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Daily"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Korean Class for \xA0", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
    style: {
      width: "1.2rem"
    },
    alt: "japan_flag",
    src: "https://img.icons8.com/color/48/000000/japan.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Portfolio \u2B50")))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(SearchInput, {
    value: keyword,
    onChange: onChangeKeyword,
    onSearch: onSearchContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(BlogHeader));

/***/ }),

/***/ "./components/Blog/Headers/PortfolioHeader.tsx":
/*!*****************************************************!*\
  !*** ./components/Blog/Headers/PortfolioHeader.tsx ***!
  \*****************************************************/
/*! exports provided: PortfolioHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioHeader", function() { return PortfolioHeader; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Headers\\PortfolioHeader.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */






const PortfolioHeader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({
  navContents
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    onClick: () => {
      window.scrollTo({
        top: 0
      });
    },
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    style: {
      marginRight: "0.8rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHome"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), "Blog")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, {
    items: ["aboutme", "skills", "portfolio", "contact"],
    currentClassName: "is-current",
    className: "blog_header_ul",
    offset: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, navContents.map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    key: i,
    className: "blog_header_li",
    style: {
      transition: "all 0.3s"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    href: `#${v.name}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: v.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    style: {
      marginLeft: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, v.explain))))));
});

/***/ }),

/***/ "./components/Blog/Headers/SmallHeaders/BlogSmallHeader.tsx":
/*!******************************************************************!*\
  !*** ./components/Blog/Headers/SmallHeaders/BlogSmallHeader.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var _util_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/useInput */ "./util/useInput.ts");
/* harmony import */ var _util_useToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/useToggle */ "./util/useToggle.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Admin/AdminModal */ "./components/Blog/Admin/AdminModal.tsx");
/* harmony import */ var _SlideMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SlideMenu */ "./components/Blog/Headers/SmallHeaders/SlideMenu.tsx");
/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../styles/emotion */ "./styles/emotion.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _SlideRemote__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SlideRemote */ "./components/Blog/Headers/SmallHeaders/SlideRemote.tsx");

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Headers\\SmallHeaders\\BlogSmallHeader.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */


















const PostTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h4", false ? undefined : {
  target: "egx4thb0",
  label: "PostTitle"
})(false ? undefined : {
  name: "61mznw",
  styles: "display:-webkit-box;word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNodGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaHRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const HeaderLogo = false ? undefined : {
  name: "wgqnbc-HeaderLogo",
  styles: "display:flex;align-items:center;height:70px;.logo_span{color:black;margin-left:0.5rem;font-weight:bold;font-size:1.3rem;};label:HeaderLogo;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNodGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaHRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const TitleArrow = false ? undefined : {
  name: "16ux2xo-TitleArrow",
  styles: "display:flex;align-items:center;width:100%;height:70px;label:TitleArrow;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNodGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaHRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const BlogSmallHeader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const {
    onSlideMenu
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.blog);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const {
    post,
    removePostDone,
    prevPost,
    nextPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post);
  const [password, onChangePassword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])("");
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [keyword, onChangeKeyword, setKeyword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])("");
  const [onSearchForm, onClickSearchForm] = Object(_util_useToggle__WEBPACK_IMPORTED_MODULE_10__["default"])(false);
  const [onSlideArrow, onClickonSlideArrow, setonSlideArrow] = Object(_util_useToggle__WEBPACK_IMPORTED_MODULE_10__["default"])(false);
  const {
    0: headerTitle,
    1: setHeaderTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    function scrollCallBack() {
      let pathname = window.location.pathname.split("/");

      if (window.scrollY > 200 && pathname[2] === "post") {
        setHeaderTitle(true);
        return;
      }

      if (window.scrollY > 200 && pathname[1] === "portfolio" && !isNaN(parseInt(pathname[2]))) {
        setHeaderTitle(true);
        return;
      }

      setHeaderTitle(false);
      setonSlideArrow(false);
    }

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSearchContent = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_7__["SEARCH_KEYWORD_REQUEST"],
      data: {
        keyword
      }
    });

    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      dispatch({
        type: _reducers_blog__WEBPACK_IMPORTED_MODULE_7__["ON_SLIDE_MENU"]
      });
      return;
    }

    router.push(`/search/${keyword}`);
    setKeyword("");
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_7__["ON_SLIDE_MENU"]
    });
  }, [dispatch, router, keyword, setKeyword]);
  const showModal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    setIsModalVisible(true);
  }, []);
  const handleOk = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    setIsModalVisible(false);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        password,
        tags: post === null || post === void 0 ? void 0 : post.Hashtags
      }
    });
  }, [dispatch, password, post === null || post === void 0 ? void 0 : post.Hashtags, post === null || post === void 0 ? void 0 : post.id]);
  const handleCancel = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    setIsModalVisible(false);
  }, []);
  const onClickSlide = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_7__["ON_SLIDE_MENU"]
    });
    setonSlideArrow(false);
  }, [dispatch, setonSlideArrow]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (removePostDone) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("nav", {
    className: "blog_header_small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_14__["SM_Header_Menu"])(onSlideMenu || onSlideArrow),
    className: "blog_header_small_nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_14__["SM_Header_Title"])(headerTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("a", {
    css: HeaderLogo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("img", {
    alt: "menu_logo",
    style: {
      width: "1.9rem"
    },
    src: "/images/blog/logo_icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("span", {
    className: "logo_span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Noah World"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("a", {
    onClick: onClickonSlideArrow,
    css: TitleArrow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(PostTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, post === null || post === void 0 ? void 0 : post.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      marginLeft: "1rem",
      transition: "all 0.3s",
      transform: `rotate(${onSlideArrow ? "180deg" : "0deg"})`
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("a", {
    onClick: onClickSlide,
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, onSlideMenu ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      fontSize: "1.5rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      fontSize: "1.5rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  })), onSlideArrow && headerTitle && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_SlideRemote__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showModal: showModal,
    post: post,
    prevPost: prevPost,
    nextPost: nextPost,
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_14__["SM_Header_SeachForm"])(onSlideMenu),
    className: "slide_menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_14__["SM_Header_Input"])(onSearchForm),
    value: keyword,
    onChange: onChangeKeyword,
    onSearch: onSearchContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_SlideMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClickSearchForm: onClickSearchForm,
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isModalVisible: isModalVisible,
    handleOk: handleOk,
    handleCancel: handleCancel,
    password: password,
    onChangePassword: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(BlogSmallHeader));

/***/ }),

/***/ "./components/Blog/Headers/SmallHeaders/SlideMenu.tsx":
/*!************************************************************!*\
  !*** ./components/Blog/Headers/SmallHeaders/SlideMenu.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/emotion */ "./styles/emotion.ts");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Headers\\SmallHeaders\\SlideMenu.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











const SlideMenuWrapper = false ? undefined : {
  name: "em1bx2-SlideMenuWrapper",
  styles: "display:flex;margin-top:1rem;ul:first-of-type{margin:0;width:50%;padding-right:1rem;}ul:last-child{margin:0;width:50%;padding-left:1rem;border-left:1px solid rgba(0, 0, 0, 0.1);}a{display:block;padding:1rem 0;&:hover{color:black;}}.image_list{display:flex;align-items:center;};label:SlideMenuWrapper;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjRCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVNZW51LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IG1hcmdpbkNTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlTWVudVByb3BzIHtcclxuICBvbkNsaWNrU2VhcmNoRm9ybTogKCkgPT4gdm9pZDtcclxuICB1c2VyOiBVc2VySW50ZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlTWVudVdyYXBwZXIgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIHVsOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVNZW51OiBGQzxTbGlkZU1lbnVQcm9wcz4gPSBtZW1vKCh7IG9uQ2xpY2tTZWFyY2hGb3JtLCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25DbGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtTbGlkZU1lbnVXcmFwcGVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxoMiBjc3M9e21hcmdpbkNTUygwLCAwLCBcIjFyZW1cIiwgMCl9PkJsb2c8L2gyPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPi0gSG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi90ZWNoXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIEluZm8gVGVjaDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9kYWlseVwifT5cclxuICAgICAgICAgICAgPGE+LSBEYWlseTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2VfbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPi0gS29yZWFuIENsYXNzIGZvciAmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNoRm9ybX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgLSBTZWFyY2ggPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19IGljb249e2ZhU2VhcmNofSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8aDIgY3NzPXttYXJnaW5DU1MoMCwgMCwgXCIxcmVtXCIsIDApfT5EaXJlY3QgTGluazwvaDI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAtIEdpdFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpb1wifT5cclxuICAgICAgICAgICAgPGE+LSBQb3J0Zm9saW8g4q2QPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FsbW9uY2hvYmFiL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgLSBJbnN0YWdyYW1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkubm9haHdvcmxkLnNpdGUvYXV0aC9nb29nbGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAtIEdvb2dsZSBMb2dpbntcIiBcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjAuOXJlbVwiLCBtYXJnaW5MZWZ0OiBcIjAuNHJlbVwiIH19XHJcbiAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlX2ljb25cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZmx1ZW50LzQ4LzAwMDAwMC9nb29nbGUtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tMb2dPdXR9PlxyXG4gICAgICAgICAgICAgIC0gTG9nIG91dCA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC4zcmVtXCIgfX0gaWNvbj17ZmFTaWduT3V0QWx0fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9PlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgICAgICAgIC0gTG9nIEluICYgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25JbkFsdH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTbGlkZU1lbnUpO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const SlideMenu = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(({
  onClickSearchForm,
  user
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const onClickMenu = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_6__["ON_SLIDE_MENU"]
    });
  }, []);
  const onClickLogOut = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOG_OUT_REQUEST"]
    });
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_6__["ON_SLIDE_MENU"]
    });
  }, [dispatch]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: SlideMenuWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_8__["marginCSS"])(0, 0, "1rem", 0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Blog"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "- Home"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/tech",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "- Info Tech"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/daily",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "- Daily"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: "image_list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "- Korean Class for \xA0"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    style: {
      width: "1.5rem"
    },
    alt: "japan_flag",
    src: "https://img.icons8.com/color/48/000000/japan.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    onClick: onClickSearchForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, " ", "- Search ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.5rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 22
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
    css: Object(_styles_emotion__WEBPACK_IMPORTED_MODULE_8__["marginCSS"])(0, 0, "1rem", 0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Direct Link"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    href: "https://github.com/noah071610",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "- Git")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "- Portfolio \u2B50"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    href: "https://www.instagram.com/salmonchobab/",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "- Instagram")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    href: "https://api.noahworld.site/auth/google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "- Google Login", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    style: {
      width: "0.9rem",
      marginLeft: "0.4rem"
    },
    alt: "google_icon",
    src: "https://img.icons8.com/fluent/48/000000/google-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }))), user ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    onClick: onClickLogOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "- Log out ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "- Log In & Sign Up", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignInAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }))))));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(SlideMenu));

/***/ }),

/***/ "./components/Blog/Headers/SmallHeaders/SlideRemote.tsx":
/*!**************************************************************!*\
  !*** ./components/Blog/Headers/SmallHeaders/SlideRemote.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@reducers/blog */ "./@reducers/blog.ts");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Headers\\SmallHeaders\\SlideRemote.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












const marginZero = false ? undefined : {
  name: "hc4ka5-marginZero",
  styles: "margin:0;label:marginZero;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVSZW1vdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcY29tcG9uZW50c1xcQmxvZ1xcSGVhZGVyc1xcU21hbGxIZWFkZXJzXFxTbGlkZVJlbW90ZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERvdWJsZUxlZnRPdXRsaW5lZCxcclxuICBEb3VibGVSaWdodE91dGxpbmVkLFxyXG4gIEVkaXRGaWxsZWQsXHJcbiAgSG9tZUZpbGxlZCxcclxuICBSb2xsYmFja091dGxpbmVkLFxyXG4gIFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZhVHJhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUG9zdEludGVyLCBVc2VySW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuaW1wb3J0IHsgUE9TVF9FRElUX09OIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVSZW1vdGVQcm9wcyB7XHJcbiAgc2hvd01vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIHBvc3Q6IFBvc3RJbnRlcjtcclxuICBwcmV2UG9zdDogUG9zdEludGVyW107XHJcbiAgbmV4dFBvc3Q6IFBvc3RJbnRlcltdO1xyXG4gIHVzZXI6IFVzZXJJbnRlcjtcclxufVxyXG5cclxuY29uc3QgbWFyZ2luWmVybyA9IGNzc2BcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5jb25zdCBTbGlkZVJlbW90ZTogRkM8U2xpZGVSZW1vdGVQcm9wcz4gPSBtZW1vKCh7IHNob3dNb2RhbCwgcG9zdCwgcHJldlBvc3QsIG5leHRQb3N0LCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25DbGlja0xpbmsgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInNsaWRlX3RpdGxlXCI+XHJcbiAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SG9tZUZpbGxlZCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiA/IFwiY2xhc3NcIiA6IHBvc3Q/LmNhdGVnb3J5fWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja0xpbmt9IGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAge25leHRQb3N0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdD8uY2F0ZWdvcnl9L3Bvc3QvJHtuZXh0UG9zdFswXT8uaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxEb3VibGVMZWZ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIHtwcmV2UG9zdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7cHJldlBvc3RbMF0/LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEb3VibGVSaWdodE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xpbmt9PlxyXG4gICAgICAgICAgPFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAge3VzZXI/LmFkbWluICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FRElUX09OLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZG1pblwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8bGkgY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17c2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTbGlkZVJlbW90ZSk7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const SlideRemote = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(({
  showModal,
  post,
  prevPost,
  nextPost,
  user
}) => {
  var _nextPost$, _prevPost$;

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const onClickLink = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    className: "slide_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HomeFilled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${(post === null || post === void 0 ? void 0 : post.category) === "culture" ? "class" : post === null || post === void 0 ? void 0 : post.category}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RollbackOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    onClick: onClickLink,
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, nextPost.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${(_nextPost$ = nextPost[0]) === null || _nextPost$ === void 0 ? void 0 : _nextPost$.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    onClick: onClickLink,
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, prevPost.length > 0 ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${(_prevPost$ = prevPost[0]) === null || _prevPost$ === void 0 ? void 0 : _prevPost$.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    onClick: onClickLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["VerticalAlignTopOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }))), (user === null || user === void 0 ? void 0 : user.admin) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    onClick: () => {
      dispatch({
        type: _reducers_blog__WEBPACK_IMPORTED_MODULE_9__["POST_EDIT_ON"]
      });
      router.push("/admin");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditFilled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    css: marginZero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    onClick: showModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(SlideRemote));

/***/ }),

/***/ "./components/Blog/Profile/InfoModal.tsx":
/*!***********************************************!*\
  !*** ./components/Blog/Profile/InfoModal.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var _util_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/useInput */ "./util/useInput.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Profile\\InfoModal.tsx";







const InfoModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({
  setIsModalVisible,
  setChangePassword,
  setChangeNickname,
  isModalVisible,
  changePassword,
  changeNickname
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    user,
    confirmPassword,
    changePasswordDone,
    confirmPasswordError,
    changePasswordError,
    withdrawalDone,
    withdrawalError,
    changeNameDone,
    changeNameError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const userName = user === null || user === void 0 ? void 0 : user.name;
  const [password, onChangePassword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])("");
  const [newPassword, onChangeNewPassword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])("");
  const [newName, onChangeNewName] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(userName);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (user !== null && user !== void 0 && user.googleId) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_PASSWORD_SUCCESS"]
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (changePasswordDone) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Change your password well!");
      router.push("/");
      setIsModalVisible(false);
      setChangePassword(false);
      return;
    }

    if (changeNameDone) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Change your nickname well!");
      setIsModalVisible(false);
      setChangeNickname(false);
      return;
    }

    if (withdrawalDone) {
      setIsModalVisible(false);
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Withdrawed. Thank you for using ! see you next time.");
      router.push("/");
      return;
    }

    if (changePasswordError || changeNameError || withdrawalError) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Unexpected Error! please try again or feedback to us");
      setChangePassword(false);
      setChangeNickname(false);
      return;
    }

    if (confirmPasswordError) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Wrong Password! please try again or feedback to us");
      return;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [changePasswordDone, changePasswordError, confirmPasswordError, withdrawalDone, withdrawalError, changeNameDone, changeNameError]);
  const handleOk = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_PASSWORD_REQUEST"],
      data: {
        password,
        user
      }
    });
  }, [password, user]);
  const handleCancel = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setIsModalVisible(false);
    setChangePassword(false);
    setChangeNickname(false);
  }, []);
  const onSubmitChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_PASSWORD_REQUEST"],
      data: {
        newPassword,
        user
      }
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, [newPassword, user]);
  const onsubmitChangeName = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NAME_REQUEST"],
      data: {
        newName,
        UserId: user === null || user === void 0 ? void 0 : user.id
      }
    });
  }, [newName, user]);
  const onSubmitWithdrawal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["WITHDRWAL_REQUEST"],
      data: user === null || user === void 0 ? void 0 : user.id
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, [user]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    title: "User Infomation",
    visible: isModalVisible,
    onOk: confirmPassword ? changePassword ? onSubmitChangePassword : changeNickname ? onsubmitChangeName : onSubmitWithdrawal : handleOk,
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, confirmPassword ? changePassword ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    name: "nest-messages",
    initialValues: {
      remember: false
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Please write your new password."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "Password",
    rules: [{
      required: true
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: newPassword,
    onChange: onChangeNewPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "Confirm",
    dependencies: ["Password"],
    hasFeedback: true,
    rules: [{
      required: true
    }, ({
      getFieldValue
    }) => ({
      validator(_, value) {
        if (!value || getFieldValue("Password") === value) {
          return Promise.resolve();
        }

        return Promise.reject(new Error("The two passwords that you entered do not match!"));
      }

    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }))) : changeNickname ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    name: "nest-messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, "Please write your new nickname."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "name",
    rules: [{
      required: true
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    value: newName,
    onChange: onChangeNewName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, "Would you really like to withdraw? \uD83D\uDE3F") : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "Confirm your password."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: password,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(InfoModal));

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Blog_Profile_InfoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blog/Profile/InfoModal */ "./components/Blog/Profile/InfoModal.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Footer.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */







const FooterDivider = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], false ? undefined : {
  target: "e1lffojk0",
  label: "FooterDivider"
})(false ? undefined : {
  name: "lte6q6",
  styles: "background-color:white;margin:0 1rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEZvb3Rlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3FDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEZvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IHsgRGl2aWRlciwgUG9wb3ZlciwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBJbmZvTW9kYWwgZnJvbSBcIi4vQmxvZy9Qcm9maWxlL0luZm9Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vQHJlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBGb290ZXJEaXZpZGVyID0gc3R5bGVkKERpdmlkZXIpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyOiBGQyA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VQYXNzd29yZCwgc2V0Q2hhbmdlUGFzc3dvcmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOaWNrbmFtZSwgc2V0Q2hhbmdlTmlja25hbWVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja05pY2tuYW1lQnRuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJPbmx5IGZvciB1c2VyIHdobyBzaWduZWQgaW4uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICAgIHNldENoYW5nZU5pY2tuYW1lKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc29jaWFsX2NvbnRlbnQgPSAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfY29udGVudFwiPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPGxpPi0gR2l0PC9saT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWxtb25jaG9iYWIvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxsaT4tIEluc3RhZ3JhbTwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuICBjb25zdCBpbmZvX2NvbnRlbnQgPSAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfY29udGVudFwiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIGluLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZChmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxsaT4tIFdpdGhkcmF3YWw8L2xpPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJPbmx5IGZvciB1c2VyIHdobyBzaWduZWQgaW4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodXNlci5nb29nbGVJZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIHVwIHdpdGggaG9tZS1wYWdlIGRpcmVjdGx5LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZCh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpPi0gQ2hhbmdlIFBhc3N3b3JkPC9saT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrTmlja25hbWVCdG59PlxyXG4gICAgICAgIDxsaT4tIENoYW5nZSBOaWNrbmFtZTwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuICBjb25zdCBxdWlja3ZpZXdfY29udGVudCA9IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJibG9nX2Zvb3Rlcl9jb250ZW50XCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+LSBIb21lPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17XCIvdGVjaFwifT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+LSBJbmZvIFRlY2g8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtcIi9kYWlseVwifT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+LSBEYWlseTwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL2NsYXNzXCJ9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaXN0fT4tIEtvcmVhbiBDbGFzczwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXY+4pOSIDIwMjEsIEphbmcgSHl1biBTb28uIEFsbCBSaWdodHMgUmVzcnZlZC48L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfbGlzdFwiPlxyXG4gICAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaXN0fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9ydGZvbGlvXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxGb290ZXJEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtxdWlja3ZpZXdfY29udGVudH0+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YT5RdWljayB2aWV3PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgPEZvb3RlckRpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9e3NvY2lhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhPlNvY2lhbCBNZWRpYTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgIDxGb290ZXJEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJ0b3BSaWdodFwiIGNvbnRlbnQ9e2luZm9fY29udGVudH0+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YT5JbmZvbWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5mb01vZGFsXHJcbiAgICAgICAgc2V0SXNNb2RhbFZpc2libGU9e3NldElzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIHNldENoYW5nZVBhc3N3b3JkPXtzZXRDaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICBzZXRDaGFuZ2VOaWNrbmFtZT17c2V0Q2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgaXNNb2RhbFZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkPXtjaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZT17Y2hhbmdlTmlja25hbWV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRm9vdGVyKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Footer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(() => {
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: changePassword,
    1: setChangePassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: changeNickname,
    1: setChangeNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const showModal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setIsModalVisible(true);
  }, []);
  const onClickList = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  const onClickNicknameBtn = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!user) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Only for user who signed in.");
      return;
    }

    showModal();
    setChangeNickname(true);
  }, []);

  const social_content = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "blog_footer_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    href: "https://github.com/noah071610",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "- Git")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    href: "https://www.instagram.com/salmonchobab/",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "- Instagram")));

  const info_content = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "blog_footer_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    onClick: () => {
      if (!user) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Only for user who signed in.");
        return;
      }

      showModal();
      setChangePassword(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "- Withdrawal")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    onClick: () => {
      if (!user) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Only for user who signed in.");
        return;
      }

      if (user.googleId) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Only for user who signed up with home-page directly.");
        return;
      }

      showModal();
      setChangePassword(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "- Change Password")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    onClick: onClickNicknameBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "- Change Nickname")));

  const quickview_content = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "blog_footer_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "- Home"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/tech",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "- Info Tech"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/daily",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "- Daily"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "- Korean Class"))));

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("footer", {
    className: "blog_footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_footer_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "\u24D2 2021, Jang Hyun Soo. All Rights Resrved."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    className: "blog_footer_list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Portfolio"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(FooterDivider, {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    content: quickview_content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Quick view"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(FooterDivider, {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    content: social_content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Social Media"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(FooterDivider, {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "topRight",
    content: info_content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Infomation"))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Blog_Profile_InfoModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setIsModalVisible: setIsModalVisible,
    setChangePassword: setChangePassword,
    setChangeNickname: setChangeNickname,
    isModalVisible: isModalVisible,
    changePassword: changePassword,
    changeNickname: changeNickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Footer));

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var _Blog_Headers_BlogHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Blog/Headers/BlogHeader */ "./components/Blog/Headers/BlogHeader.tsx");
/* harmony import */ var _Blog_Headers_SmallHeaders_BlogSmallHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Blog/Headers/SmallHeaders/BlogSmallHeader */ "./components/Blog/Headers/SmallHeaders/BlogSmallHeader.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Blog_Headers_PortfolioHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Blog/Headers/PortfolioHeader */ "./components/Blog/Headers/PortfolioHeader.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Header.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */














const LogoMain = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", false ? undefined : {
  target: "e1h1448s0",
  label: "LogoMain"
})(false ? undefined : {
  name: "hpzzuv",
  styles: "&:hover{-webkit-animation:pulse 0.5s;animation:pulse 0.5s;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYVNpZ25PdXRBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tIFwiLi4vQHJlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgQmxvZ0hlYWRlciBmcm9tIFwiLi9CbG9nL0hlYWRlcnMvQmxvZ0hlYWRlclwiO1xyXG5pbXBvcnQgQmxvZ1NtYWxsSGVhZGVyIGZyb20gXCIuL0Jsb2cvSGVhZGVycy9TbWFsbEhlYWRlcnMvQmxvZ1NtYWxsSGVhZGVyXCI7XHJcbmltcG9ydCB7IG5hdkNvbnRlbnRzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUG9ydGZvbGlvSGVhZGVyIH0gZnJvbSBcIi4vQmxvZy9IZWFkZXJzL1BvcnRmb2xpb0hlYWRlclwiO1xyXG5jb25zdCBMb2dvTWFpbiA9IHN0eWxlZC5pbWdgXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMC41cztcclxuICAgIGFuaW1hdGlvbjogcHVsc2UgMC41cztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW0ZpeGVkTmF2YmFyLCBzZXRGaXhlZE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBoZWFkZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5ibG9nKTtcclxuICBjb25zdCB7IHVzZXIsIGxvZ091dERvbmUsIGxvZ091dEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNjcm9sbENhbGxCYWNrKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjc1KSB7XHJcbiAgICAgICAgc2V0Rml4ZWROYXZiYXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Rml4ZWROYXZiYXIoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dPdXREb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkxvZyBvdXQgaXMgZG9uZSwgVGhhbmsgeW91IGZvciB2aXNpdGluZy5cIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2dPdXRFcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiVW5leHBlY3RlZCBFcm9yciEgcGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbbG9nT3V0RG9uZSwgbG9nT3V0RXJyb3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2Vfc21hbGxfb25cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9sb2dvXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxMb2dvTWFpbiBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2ltYWdlcy9ibG9nL2xvZ29fbWFpbi5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xvZ291dFwiIG9uQ2xpY2s9e29uQ2xpY2tMb2dPdXR9PlxyXG4gICAgICAgICAgICBMb2cgb3V0IDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25PdXRBbHR9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbG9naW5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuX2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dpbiAmIFNpZ24gVXB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC4zcmVtXCIgfX0gaWNvbj17ZmFTaWduSW5BbHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS5ub2Fod29ybGQuc2l0ZS9hdXRoL2dvb2dsZVwiIGNsYXNzTmFtZT1cImJ0bl9nb29nbGVcIj5cclxuICAgICAgICAgICAgICBHb29nbGUgTG9naW57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQvNDgvMDAwMDAwL2dvb2dsZS1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtGaXhlZE5hdmJhciA/IFwiYmxvZ19oZWFkZXJfbmF2IGZpeGVkXCIgOiBcImJsb2dfaGVhZGVyX25hdiBzdGF0aWNcIn0+XHJcbiAgICAgICAge2hlYWRlciA9PT0gXCJibG9nXCIgPyA8QmxvZ0hlYWRlciAvPiA6IDxQb3J0Zm9saW9IZWFkZXIgbmF2Q29udGVudHM9e25hdkNvbnRlbnRzfSAvPn1cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxCbG9nU21hbGxIZWFkZXIgLz5cclxuICAgICAge0ZpeGVkTmF2YmFyID8gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzBweFwiIH19IC8+IDogbnVsbH1cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZWFkZXIpO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Header = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const {
    0: FixedNavbar,
    1: setFixedNavbar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    header
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.blog);
  const {
    user,
    logOutDone,
    logOutError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const onClickLogOut = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOG_OUT_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    function scrollCallBack() {
      if (window.scrollY >= 275) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (logOutDone) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("Log out is done, Thank you for visiting.");
      router.push("/");
    }

    if (logOutError) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error("Unexpected Erorr! please try again or feedback to us");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [logOutDone, logOutError]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("header", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "space_small_on",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "header_logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(LogoMain, {
    className: "logo",
    src: "/images/blog/logo_main.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))), user ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    className: "blog_header_logout",
    onClick: onClickLogOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Log out ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "blog_header_login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    className: "btn_login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Login & Sign Up", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignInAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    href: "https://api.noahworld.site/auth/google",
    className: "btn_google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Google Login", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("img", {
    alt: "google_icon",
    src: "https://img.icons8.com/fluent/48/000000/google-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("nav", {
    className: FixedNavbar ? "blog_header_nav fixed" : "blog_header_nav static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, header === "blog" ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_BlogHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 30
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_PortfolioHeader__WEBPACK_IMPORTED_MODULE_12__["PortfolioHeader"], {
    navContents: _config__WEBPACK_IMPORTED_MODULE_10__["navContents"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 47
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_SmallHeaders_BlogSmallHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), FixedNavbar ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    style: {
      height: "70px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 22
    }
  }) : null);
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Header));

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: BACKEND_URL, BLUE_COLOR, MAIN_COLOR, SUB_COLOR, GRAY_COLOR, BG_COLOR, RED_COLOR, CARD_DESC_PS, CARD_DESC_COMU, CARD_DESC_COOP, CardContents, navContents, skills, sub_skills, dataSource, columns, portfolios */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_DESC_PS", function() { return CARD_DESC_PS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_DESC_COMU", function() { return CARD_DESC_COMU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_DESC_COOP", function() { return CARD_DESC_COOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContents", function() { return CardContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navContents", function() { return navContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub_skills", function() { return sub_skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSource", function() { return dataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolios", function() { return portfolios; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);

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
  desc: "Hooks 문법, Router적용, Redux와 비동기를 위한 saga, thunk 또는 MobX 등등 여러 라이브러리를 응용하며 렌더링최소화 및 생명주기같은 React의 SPA 특성을 이해합니다.",
  level: true
}, {
  name: "Next.js",
  src: "https://docs.microsoft.com/ko-kr/windows/images/nextjs-logo.png",
  desc: "SEO의 효율성을 높이는 Next.js의 SSR 특성을 이해하며, SPA 와 SSR 를 장단점과 특성을 파악하기 위해 노력합니다.",
  level: true
}, {
  name: "Mysql",
  src: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
  desc: "시퀄라이즈 & 워크벤치를 사용하며, 스키마 정의와 콘솔 명령어, 그리고 데이터베이스 관계도를 이해해 데이터를 효율있게 관리합니다.",
  level: true
}, {
  name: "Git",
  src: "https://img.icons8.com/nolan/128/github.png",
  desc: "형상관리의 기본원리와 버전관리,브랜치,백업등을 적극 활용합니다.",
  level: true
}];
const sub_skills = [{
  name: "SCSS",
  src: "https://img.icons8.com/color/144/000000/sass-avatar.png",
  level: true
}, {
  name: "Axios",
  src: "https://media-exp1.licdn.com/dms/image/C4E0BAQGlN3RJvKmwEg/company-logo_200_200/0/1571253448818?e=2159024400&v=beta&t=VYfrSozq3kSw5_404tR4xYFMH0uFQNmQNrweQcJkbGw",
  level: true
}, {
  name: "Express",
  src: "https://www.mementotech.in/assets/images/icons/express.png",
  level: true
}, {
  name: "GraphQL",
  src: "https://img.icons8.com/color/144/000000/graphql.png",
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
  name: "Nginx",
  src: "https://img.icons8.com/color/144/000000/nginx.png"
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@toast-ui/editor/dist/toastui-editor.css":
/*!***************************************************************!*\
  !*** ./node_modules/@toast-ui/editor/dist/toastui-editor.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/highlight.js/styles/github.css":
/*!*****************************************************!*\
  !*** ./node_modules/highlight.js/styles/github.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @toast-ui/editor/dist/toastui-editor.css */ "./node_modules/@toast-ui/editor/dist/toastui-editor.css");
/* harmony import */ var _toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_editor_dist_toastui_editor_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/configureStore */ "./@store/configureStore.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\pages\\_app.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


















const reset = false ? undefined : {
  name: "7sxpf6-reset",
  styles: ".ant-row{margin-right:0!important;margin-left:0!important;}.ant-table-pagination{display:none!important;}p{margin:0.5rem auto;}h1,h2,h3{margin-top:0.5rem;margin-bottom:0.5rem;font-weight:600;}h2{font-size:1.1rem;}a{color:black;text-decoration:none;}blockquote{border-color:#1187cf!important;}.ant-divider{background-color:rgba(0, 0, 0, 0.1);}.ant-divider-with-text{background-color:rgba(0, 0, 0, 0);&::before,&::after{border-top:1px solid rgba(0, 0, 0, 0.1)!important;}};label:reset;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3NcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCI7XG5pbXBvcnQgXCJAdG9hc3QtdWkvZWRpdG9yL2Rpc3QvdG9hc3R1aS1lZGl0b3IuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL0BzdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHsgY3NzLCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtdGFibGUtcGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExODdjZiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5hbnQtZGl2aWRlci13aXRoLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KHsgc3RhcnRFdmVudDogXCJsb2FkXCIgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydCk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ob2FoIHdvcmxkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNzcz17bG9hZGluZ1NjcmVlbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2VyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const loadingScreen = false ? undefined : {
  name: "1xras9a-loadingScreen",
  styles: "width:100%;height:100vh;display:flex;justify-content:center;align-items:center;label:loadingScreen;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RHlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3NcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCI7XG5pbXBvcnQgXCJAdG9hc3QtdWkvZWRpdG9yL2Rpc3QvdG9hc3R1aS1lZGl0b3IuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL0BzdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHsgY3NzLCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtdGFibGUtcGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExODdjZiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5hbnQtZGl2aWRlci13aXRoLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KHsgc3RhcnRFdmVudDogXCJsb2FkXCIgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydCk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ob2FoIHdvcmxkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNzcz17bG9hZGluZ1NjcmVlbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2VyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function App({
  Component,
  pageProps
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init({
      startEvent: "load"
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.on("routeChangeStart", start);
    next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.on("routeChangeComplete", end);
    next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.on("routeChangeError", end);
    return () => {
      next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.off("routeChangeStart", start);
      next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.off("routeChangeComplete", end);
      next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__["Router"].events.off("routeChangeError", end);
    };
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Noah world")), loading ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    css: loadingScreen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "bouncer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["Global"], {
    styles: reset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_12__["default"].withRedux(App));

/***/ }),

/***/ "./styles/emotion.ts":
/*!***************************!*\
  !*** ./styles/emotion.ts ***!
  \***************************/
/*! exports provided: marginCSS, paddingCSS, noSearchPostCSS, SM_Header_Input, SM_Header_Menu, SM_Header_SeachForm, SM_Header_Title, TitleProfile, NoPostProfile, ProfilePointTitle, DeleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginCSS", function() { return marginCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingCSS", function() { return paddingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noSearchPostCSS", function() { return noSearchPostCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SM_Header_Input", function() { return SM_Header_Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SM_Header_Menu", function() { return SM_Header_Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SM_Header_SeachForm", function() { return SM_Header_SeachForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SM_Header_Title", function() { return SM_Header_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleProfile", function() { return TitleProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPostProfile", function() { return NoPostProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePointTitle", function() { return ProfilePointTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComment", function() { return DeleteComment; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const marginCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:", top, " ", right, " ", bottom, " ", left, ";" + (false ? undefined : ";label:marginCSS;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcc3R5bGVzXFxlbW90aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFyZ2luQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIG1hcmdpbjogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZGRpbmdDU1MgPSAodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSA9PiBjc3NgXHJcbiAgcGFkZGluZzogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vU2VhcmNoUG9zdENTUyA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfSW5wdXQgPSAob25TZWFyY2g6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2VhcmNoXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC4zczsgbWFyZ2luLWJvdHRvbTogMXJlbVwiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMCBcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfTWVudSA9IChvbk1lbnU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uTWVudVxyXG4gICAgPyBcImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci1ib3R0b206IG5vbmU7IG92ZXJmbG93OiBpbmhlcml0O1wiXHJcbiAgICA6IFwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgb3ZlcmZsb3c6IGhpZGRlbjtcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfU2VhY2hGb3JtID0gKG9uU2xpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2xpZGUgPyBcImRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuXCIgOiBcImRpc3BsYXk6bm9uZVwifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNNX0hlYWRlcl9UaXRsZSA9IChvblRpdGxlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblRpdGxlXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuNXM7IHdpZHRoOiA3MCU7XCJcclxuICAgIDogXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IHRyYW5zaXRpb246IGFsbCAwLjVzO1wifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlUHJvZmlsZSA9IGNzc2BcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0UHJvZmlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBvaW50VGl0bGUgPSBjc3NgXHJcbiAgY29sb3I6ICR7QkxVRV9DT0xPUn07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKHJlbW92ZU1vZGFsOiBib29sZWFuKSA9PiBjc3NgXHJcbiAgdmlzaWJpbGl0eTogJHtyZW1vdmVNb2RhbCA/IFwiaW5pdGlhbFwiIDogXCJoaWRkZW5cIn07XHJcbiAgYW5pbWF0aW9uOiAke3JlbW92ZU1vZGFsID8gXCIwLjVzIGZhZGVJblwiIDogXCJub25lXCJ9O1xyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuYDtcclxuIl19 */", false ? undefined : ";label:marginCSS;");
const paddingCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:", top, " ", right, " ", bottom, " ", left, ";" + (false ? undefined : ";label:paddingCSS;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMkQiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcc3R5bGVzXFxlbW90aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFyZ2luQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIG1hcmdpbjogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZGRpbmdDU1MgPSAodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSA9PiBjc3NgXHJcbiAgcGFkZGluZzogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vU2VhcmNoUG9zdENTUyA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfSW5wdXQgPSAob25TZWFyY2g6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2VhcmNoXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC4zczsgbWFyZ2luLWJvdHRvbTogMXJlbVwiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMCBcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfTWVudSA9IChvbk1lbnU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uTWVudVxyXG4gICAgPyBcImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci1ib3R0b206IG5vbmU7IG92ZXJmbG93OiBpbmhlcml0O1wiXHJcbiAgICA6IFwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgb3ZlcmZsb3c6IGhpZGRlbjtcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfU2VhY2hGb3JtID0gKG9uU2xpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2xpZGUgPyBcImRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuXCIgOiBcImRpc3BsYXk6bm9uZVwifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNNX0hlYWRlcl9UaXRsZSA9IChvblRpdGxlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblRpdGxlXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuNXM7IHdpZHRoOiA3MCU7XCJcclxuICAgIDogXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IHRyYW5zaXRpb246IGFsbCAwLjVzO1wifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlUHJvZmlsZSA9IGNzc2BcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0UHJvZmlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBvaW50VGl0bGUgPSBjc3NgXHJcbiAgY29sb3I6ICR7QkxVRV9DT0xPUn07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKHJlbW92ZU1vZGFsOiBib29sZWFuKSA9PiBjc3NgXHJcbiAgdmlzaWJpbGl0eTogJHtyZW1vdmVNb2RhbCA/IFwiaW5pdGlhbFwiIDogXCJoaWRkZW5cIn07XHJcbiAgYW5pbWF0aW9uOiAke3JlbW92ZU1vZGFsID8gXCIwLjVzIGZhZGVJblwiIDogXCJub25lXCJ9O1xyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuYDtcclxuIl19 */", false ? undefined : ";label:paddingCSS;");
const noSearchPostCSS = false ? undefined : {
  name: "1fmoagh-noSearchPostCSS",
  styles: "width:100%;padding:1rem 0;border-bottom:1px solid rgba(0, 0, 0, 0.07);position:relative;display:flex;flex-direction:column;align-items:center;img{width:80px;opacity:0.3;}h3{text-align:center;};label:noSearchPostCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcc3R5bGVzXFxlbW90aW9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFyZ2luQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIG1hcmdpbjogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZGRpbmdDU1MgPSAodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSA9PiBjc3NgXHJcbiAgcGFkZGluZzogJHt0b3B9ICR7cmlnaHR9ICR7Ym90dG9tfSAke2xlZnR9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vU2VhcmNoUG9zdENTUyA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfSW5wdXQgPSAob25TZWFyY2g6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2VhcmNoXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC4zczsgbWFyZ2luLWJvdHRvbTogMXJlbVwiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMCBcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfTWVudSA9IChvbk1lbnU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uTWVudVxyXG4gICAgPyBcImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci1ib3R0b206IG5vbmU7IG92ZXJmbG93OiBpbmhlcml0O1wiXHJcbiAgICA6IFwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgb3ZlcmZsb3c6IGhpZGRlbjtcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfU2VhY2hGb3JtID0gKG9uU2xpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke29uU2xpZGUgPyBcImRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuXCIgOiBcImRpc3BsYXk6bm9uZVwifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNNX0hlYWRlcl9UaXRsZSA9IChvblRpdGxlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblRpdGxlXHJcbiAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgdHJhbnNpdGlvbjogYWxsIDAuNXM7IHdpZHRoOiA3MCU7XCJcclxuICAgIDogXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IHRyYW5zaXRpb246IGFsbCAwLjVzO1wifVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlUHJvZmlsZSA9IGNzc2BcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0UHJvZmlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBvaW50VGl0bGUgPSBjc3NgXHJcbiAgY29sb3I6ICR7QkxVRV9DT0xPUn07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKHJlbW92ZU1vZGFsOiBib29sZWFuKSA9PiBjc3NgXHJcbiAgdmlzaWJpbGl0eTogJHtyZW1vdmVNb2RhbCA/IFwiaW5pdGlhbFwiIDogXCJoaWRkZW5cIn07XHJcbiAgYW5pbWF0aW9uOiAke3JlbW92ZU1vZGFsID8gXCIwLjVzIGZhZGVJblwiIDogXCJub25lXCJ9O1xyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const SM_Header_Input = onSearch =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSearch ? "transform: translateY(0); transition: all 0.3s; margin-bottom: 1rem" : "transform: translateY(-200%); transition: all 0.3s; position: absolute; left: 0 ", ";" + (false ? undefined : ";label:SM_Header_Input;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QnlEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:SM_Header_Input;");
const SM_Header_Menu = onMenu =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onMenu ? "background-color: white; border: 1px solid rgba(0, 0, 0, 0.1); border-bottom: none; overflow: inherit;" : "border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden;", ";" + (false ? undefined : ";label:SM_Header_Menu;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3NEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:SM_Header_Menu;");
const SM_Header_SeachForm = onSlide =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSlide ? "display: block; overflow: hidden" : "display:none", ";" + (false ? undefined : ";label:SM_Header_SeachForm;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzREIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:SM_Header_SeachForm;");
const SM_Header_Title = onTitle =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onTitle ? "transform: translateY(-100%); transition: all 0.5s; width: 70%;" : "transform: translateY(0); transition: all 0.5s;", ";" + (false ? undefined : ";label:SM_Header_Title;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q3dEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:SM_Header_Title;");
const TitleProfile = false ? undefined : {
  name: "zhp9w9-TitleProfile",
  styles: "white-space:nowrap;display:inline-block;margin-left:0.5rem;width:100%;overflow:hidden;text-overflow:ellipsis;label:TitleProfile;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRCtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const NoPostProfile = false ? undefined : {
  name: "lop6k1-NoPostProfile",
  styles: "display:flex;align-items:center;flex-direction:column;opacity:0.3;img{width:100px;};label:NoPostProfile;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGdDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const ProfilePointTitle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _config__WEBPACK_IMPORTED_MODULE_1__["BLUE_COLOR"], ";margin-left:0.3rem;" + (false ? undefined : ";label:ProfilePointTitle;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRW9DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:ProfilePointTitle;");
const DeleteComment = removeModal =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("visibility:", removeModal ? "initial" : "hidden", ";animation:", removeModal ? "0.5s fadeIn" : "none", ";h2{text-align:center;color:white;}div{display:flex;justify-content:center;}" + (false ? undefined : ";label:DeleteComment;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRTBEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHN0eWxlc1xcZW1vdGlvbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiJdfQ== */", false ? undefined : ";label:DeleteComment;");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./util/useInput.ts":
/*!**************************!*\
  !*** ./util/useInput.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInput(initialValue) {
  const {
    0: Value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

/***/ "./util/useToggle.ts":
/*!***************************!*\
  !*** ./util/useToggle.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(initialValue) {
  const {
    0: Value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setValue(prev => !prev);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9Ac2FnYS9jb21tZW50LnRzIiwid2VicGFjazovLy8uL0BzYWdhL2luZGV4LnRzIiwid2VicGFjazovLy8uL0BzYWdhL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9Ac3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9BZG1pbi9BZG1pbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVycy9CbG9nSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVycy9Qb3J0Zm9saW9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9CbG9nU21hbGxIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9TbGlkZU1lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9TbGlkZVJlbW90ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9nL1Byb2ZpbGUvSW5mb01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2Vtb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi91dGlsL3VzZVRvZ2dsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0aGVtZSIsImhlYWRlciIsInByZVBvcnRmb2xpbyIsInBvc3RQb3J0Zm9saW8iLCJwb3N0cyIsIm9uQWJvdXQiLCJvblNpZ25VcFBhZ2UiLCJwb3N0RWRpdE9uIiwic2VhcmNoUG9zdHMiLCJoYXNodGFnUG9zdHMiLCJvblNsaWRlTWVudSIsIm9uSGVhZGVyVGl0bGUiLCJzZWFyY2hlZEtleXdvcmQiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmREb25lIiwic2VhcmNoS2V5d29yZEVycm9yIiwic2VhcmNoSGFzaFRhZ0xvYWRpbmciLCJzZWFyY2hIYXNoVGFnRG9uZSIsInNlYXJjaEhhc2hUYWdFcnJvciIsImFkZFF1aXpMb2FkaW5nIiwiYWRkUXVpekRvbmUiLCJhZGRRdWl6RXJyb3IiLCJNT0RFX0NIQU5HRSIsIkxPQURfUE9SVEZPTElPUyIsIkxPQURfUE9SVEZPTElPIiwiTE9BRF9QUkVQT1JURk9MSU8iLCJMT0FEX1BPU1RQT1JURk9MSU8iLCJDSEFHRV9IRUFERVIiLCJTV0lUQ0hfQUJPVVQiLCJPTl9BQk9VVCIsIk9GRl9BQk9VVCIsIk9OX1NJR05fVVBfUEFHRSIsIlJFTU9WRV9JTUFHRSIsIlBPU1RfRURJVF9PTiIsIlBPU1RfRURJVF9PRkYiLCJDTElDS19IQVNIX1RBRyIsIk9OX1NMSURFX01FTlUiLCJPTl9IRUFERVJfVElUTEUiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyIsIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUiLCJTRUFSQ0hfS0VZV09SRF9DTEVBUiIsIlNFQVJDSF9IQVNIX1RBR19SRVFVRVNUIiwiU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MiLCJTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSIsIlNFQVJDSF9IQVNIX1RBR19DTEVBUiIsIkFERF9RVUlaX1JFUVVFU1QiLCJBRERfUVVJWl9TVUNDRVNTIiwiQUREX1FVSVpfRkFJTFVSRSIsIkFERF9RVUlaX0NMRUFSIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwiYmxvZyIsInVzZXIiLCJ0ZWNoUG9zdHMiLCJkYWlseVBvc3RzIiwiY2xhc3NQb3N0cyIsImN1bHR1cmVQb3N0cyIsInF1aXp6ZXMiLCJ3b3JkcyIsImhhc2h0YWdzIiwibW9zdExpa2VkUG9zdCIsIm1vc3RWaWV3ZWRQb3N0IiwibW9zdENvbW1lbnRlZFBvc3QiLCJwcmV2UG9zdCIsIm5leHRQb3N0IiwiY291bnRQb3N0cyIsImltYWdlUGF0aCIsInBvc3RJbWFnZVBhdGgiLCJyZWNlbnRWaWV3UG9zdCIsInJlY2VudENvbW1lbnRQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nIiwidXBsb2FkUG9zdEltYWdlRG9uZSIsInVwbG9hZFBvc3RJbWFnZUVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImVkaXRQb3N0TG9hZGluZyIsImVkaXRQb3N0RG9uZSIsImVkaXRQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFJlY2VudFBvc3RzTG9hZGluZyIsImxvYWRSZWNlbnRQb3N0c0RvbmUiLCJsb2FkUmVjZW50UG9zdHNFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmciLCJsb2FkQ2F0ZWdvcnlQb3N0c0RvbmUiLCJsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yIiwibG9hZE1vcmVQb3N0c0xvYWRpbmciLCJsb2FkTW9yZVBvc3RzRG9uZSIsImxvYWRNb3JlUG9zdHNFcnJvciIsImxvYWRDbGFzc1Bvc3RzTG9hZGluZyIsImxvYWRDbGFzc1Bvc3RzRG9uZSIsImxvYWRDbGFzc1Bvc3RzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJlZGl0Q29tbWVudExvYWRpbmciLCJlZGl0Q29tbWVudERvbmUiLCJlZGl0Q29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VDb21tZW50TG9hZGluZyIsImxpa2VDb21tZW50RG9uZSIsImxpa2VDb21tZW50RXJyb3IiLCJ1bmxpa2VDb21tZW50TG9hZGluZyIsInVubGlrZUNvbW1lbnREb25lIiwidW5saWtlQ29tbWVudEVycm9yIiwiYWRkU3ViQ29tbWVudExvYWRpbmciLCJhZGRTdWJDb21tZW50RG9uZSIsImFkZFN1YkNvbW1lbnRFcnJvciIsImVkaXRTdWJDb21tZW50TG9hZGluZyIsImVkaXRTdWJDb21tZW50RG9uZSIsImVkaXRTdWJDb21tZW50RXJyb3IiLCJyZW1vdmVTdWJDb21tZW50TG9hZGluZyIsInJlbW92ZVN1YkNvbW1lbnREb25lIiwicmVtb3ZlU3ViQ29tbWVudEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19DTEVBUiIsIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSIsIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfQ0xFQVIiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUIiwiTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCIsIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTIiwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUiLCJFRElUX1BPU1RfUkVRVUVTVCIsIkVESVRfUE9TVF9TVUNDRVNTIiwiRURJVF9QT1NUX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ0xFQVIiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9DTEVBUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxJS0VfQ09NTUVOVF9SRVFVRVNUIiwiTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJMSUtFX0NPTU1FTlRfRkFJTFVSRSIsIlVOTElLRV9DT01NRU5UX1JFUVVFU1QiLCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTIiwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX1JFUVVFU1QiLCJFRElUX0NPTU1FTlRfU1VDQ0VTUyIsIkVESVRfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX0NMRUFSIiwiQUREX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1NVQl9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUIiwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUiIsImNhdGVnb3J5IiwidW5zaGlmdCIsImxlbmd0aCIsIm1vcmVUZWNoUG9zdHMiLCJjb25jYXQiLCJtb3JlUG9zdHMiLCJtb3JlRGFpbHlQb3N0cyIsImNsYXNzUG9zdHNfY2xhc3MiLCJjdWx0dXJlUG9zdHNfY2xhc3MiLCJDb21tZW50cyIsInB1c2giLCJQb3N0TGlrZXJzIiwiaWQiLCJVc2VySWQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIkNvbW1lbnRJZCIsImNvbnRlbnQiLCJuZXdDb21tZW50IiwiQ29tbWVudExpa2VycyIsIkNvbW1lbnRzV2l0aG91dERlbGV0ZWQiLCJTdWJDb21tZW50cyIsImZ1bGxTdWJDb21tZW50IiwiU3ViQ29tbWVudElkIiwiY29uZmlybVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ0luR29vZ2xlTG9hZGluZyIsImxvZ0luR29vZ2xlRG9uZSIsImxvZ0luR29vZ2xlRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibG9hZEluZm9Mb2FkaW5nIiwibG9hZEluZm9Eb25lIiwibG9hZEluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJhZGRJY29uTG9hZGluZyIsImFkZEljb25Eb25lIiwiYWRkSWNvbkVycm9yIiwicmVtb3ZlSWNvbkxvYWRpbmciLCJyZW1vdmVJY29uRG9uZSIsInJlbW92ZUljb25FcnJvciIsImNvbmZpcm1QYXNzd29yZExvYWRpbmciLCJjb25maXJtUGFzc3dvcmREb25lIiwiY29uZmlybVBhc3N3b3JkRXJyb3IiLCJ3aXRoZHJhd2FsTG9hZGluZyIsIndpdGhkcmF3YWxEb25lIiwid2l0aGRyYXdhbEVycm9yIiwiY2hhbmdlUGFzc3dvcmRMb2FkaW5nIiwiY2hhbmdlUGFzc3dvcmREb25lIiwiY2hhbmdlUGFzc3dvcmRFcnJvciIsImNoYW5nZU5hbWVMb2FkaW5nIiwiY2hhbmdlTmFtZURvbmUiLCJjaGFuZ2VOYW1lRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfSU5fQ0xFQVIiLCJMT0dfSU5fR09PR0xFX1JFUVVFU1QiLCJMT0dfSU5fR09PR0xFX1NVQ0NFU1MiLCJMT0dfSU5fR09PR0xFX0ZBSUxVUkUiLCJMT0dfSU5fR09PR0xFX0NMRUFSIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9DTEVBUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfQ0xFQVIiLCJMT0FEX0lORk9fUkVRVUVTVCIsIkxPQURfSU5GT19TVUNDRVNTIiwiTE9BRF9JTkZPX0ZBSUxVUkUiLCJBRERfSUNPTl9SRVFVRVNUIiwiQUREX0lDT05fU1VDQ0VTUyIsIkFERF9JQ09OX0ZBSUxVUkUiLCJBRERfSUNPTl9DTEVBUiIsIlJFTU9WRV9JQ09OX1JFUVVFU1QiLCJSRU1PVkVfSUNPTl9TVUNDRVNTIiwiUkVNT1ZFX0lDT05fRkFJTFVSRSIsIlJFTU9WRV9JQ09OX0NMRUFSIiwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QiLCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyIsIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFIiwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSIiwiQ0hBTkdFX05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05BTUVfQ0xFQVIiLCJXSVRIRFJXQUxfUkVRVUVTVCIsIldJVEhEUldBTF9TVUNDRVNTIiwiV0lUSERSV0FMX0ZBSUxVUkUiLCJXSVRIRFJXQUxfQ0xFQVIiLCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QiLCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MiLCJDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUiLCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSIiwiaWNvbiIsIm5hbWUiLCJuZXdOYW1lIiwiYWRkUXVpekFQSSIsImF4aW9zIiwiYWRkUXVpeiIsImNhbGwiLCJwdXQiLCJkZWxheSIsImVyciIsInJlc3BvbnNlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJzZWFyY2hIYXNodGFnQVBJIiwic2VhcmNoSGFzaHRhZyIsIndhdGNoQWRkUXVpeiIsInRha2VMYXRlc3QiLCJ3YXRjaFNlYXJjaEtleXdvcmQiLCJ3YXRjaFNlYXJjaEhhc2h0YWciLCJibG9nU2FnYSIsImFsbCIsImZvcmsiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21tZW50QVBJIiwiZGVsZXRlIiwicmVtb3ZlQ29tbWVudCIsImVkaXRDb21tZW50QVBJIiwiZWRpdENvbW1lbnQiLCJsaWtlQ29tbWVudEFQSSIsInBhdGNoIiwibGlrZUNvbW1lbnQiLCJ1bmxpa2VDb21tZW50QVBJIiwidW5saWtlQ29tbWVudCIsImFkZFN1YkNvbW1lbnRBUEkiLCJhZGRTdWJDb21tZW50IiwicmVtb3ZlU3ViQ29tbWVudEFQSSIsInJlbW92ZVN1YkNvbW1lbnQiLCJlZGl0U3ViQ29tbWVudEFQSSIsImVkaXRTdWJDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21tZW50Iiwid2F0Y2hFZGl0Q29tbWVudCIsIndhdGNoTGlrZUNvbW1lbnQiLCJ3YXRjaFVubGlrZUNvbW1lbnQiLCJ3YXRjaEFkZFN1YkNvbW1lbnQiLCJ3YXRjaFJlbW92ZVN1YkNvbW1lbnQiLCJ3YXRjaEVkaXRTdWJDb21tZW50IiwiY29tbWVudFNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJCQUNLRU5EX1VSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwibG9hZENhdGVnb3J5UG9zdHNBUEkiLCJsb2FkQ2F0ZWdvcnlQb3N0cyIsImxvYWRNb3JlUG9zdHNBUEkiLCJMYXN0SWQiLCJsb2FkTW9yZVBvc3RzIiwibG9hZENsYXNzUG9zdHNBUEkiLCJsb2FkQ2xhc3NQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJsb2FkUmVjZW50UG9zdHNBUEkiLCJsb2FkUmVjZW50UG9zdHMiLCJsaWtlUG9zdEFQSSIsIlBvc3RJZCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJ1cGxvYWRQb3N0SW1hZ2VBUEkiLCJ1cGxvYWRQb3N0SW1hZ2UiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImVkaXRQb3N0QVBJIiwiZWRpdFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNobG9hZENhdGVnb3J5UG9zdHMiLCJ3YXRjaGxvYWRNb3JlUG9zdHMiLCJ3YXRjaExvYWRSZWNlbnRQb3N0cyIsIndhdGNobG9hZENsYXNzUG9zdHMiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoRWRpdFBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoVXBsb2FkUG9zdEltYWdlIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ0luR29vZ2xlQVBJIiwibG9nSW5Hb29nbGUiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhZGRJY29uQVBJIiwiYWRkSWNvbiIsInJlbW92ZUljb25BUEkiLCJyZW1vdmVJY29uIiwibG9hZEluZm9BUEkiLCJsb2FkSW5mbyIsImNvbmZpcm1QYXNzd29yZEFQSSIsImNoYW5nZVBhc3N3b3JkQVBJIiwiY2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VOYW1lQVBJIiwiY2hhbmdlTmFtZSIsIndpdGhkcmF3YWxBUEkiLCJ3aXRoZHJhd2FsIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nSW5Hb29nbGUiLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hBZGRJY29uIiwid2F0Y2hSZW1vdmVJY29uIiwid2F0Y2hMb2FkSW5mbyIsIndhdGNoQ29uZmlybVBhc3N3b3JkIiwid2F0Y2hDaGFuZ2VQYXNzd29yZCIsIndhdGNoQ2hhbmdlTmFtZSIsIndhdGNoV2l0aGRyYXdhbCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJzY3JvbGxFZmZlY3QiLCJrZXlmcmFtZXMiLCJTY3JvbGwiLCJBcHBMYXlvdXQiLCJtZW1vIiwiY2hpbGRyZW4iLCJzY3JvbGxUb1RvcCIsInVzZUNhbGxiYWNrIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIkFkbWluTW9kYWwiLCJpc01vZGFsVmlzaWJsZSIsImhhbmRsZU9rIiwiaGFuZGxlQ2FuY2VsIiwib25DaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwiU2VhcmNoSW5wdXQiLCJJbnB1dCIsIlNlYXJjaCIsIkJsb2dIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwia2V5d29yZCIsIm9uQ2hhbmdlS2V5d29yZCIsInNldEtleXdvcmQiLCJ1c2VJbnB1dCIsIm9uU2VhcmNoQ29udGVudCIsIm1lc3NhZ2UiLCJjaGFyQXQiLCJzbGljZSIsIndpZHRoIiwiUG9ydGZvbGlvSGVhZGVyIiwibmF2Q29udGVudHMiLCJtYXJnaW5SaWdodCIsImZhSG9tZSIsIm1hcCIsImkiLCJ0cmFuc2l0aW9uIiwibWFyZ2luTGVmdCIsImV4cGxhaW4iLCJQb3N0VGl0bGUiLCJIZWFkZXJMb2dvIiwiVGl0bGVBcnJvdyIsIkJsb2dTbWFsbEhlYWRlciIsInVzZVNlbGVjdG9yIiwic2V0SXNNb2RhbFZpc2libGUiLCJ1c2VTdGF0ZSIsIm9uU2VhcmNoRm9ybSIsIm9uQ2xpY2tTZWFyY2hGb3JtIiwidXNlVG9nZ2xlIiwib25TbGlkZUFycm93Iiwib25DbGlja29uU2xpZGVBcnJvdyIsInNldG9uU2xpZGVBcnJvdyIsImhlYWRlclRpdGxlIiwic2V0SGVhZGVyVGl0bGUiLCJ1c2VFZmZlY3QiLCJzY3JvbGxDYWxsQmFjayIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJzcGxpdCIsInNjcm9sbFkiLCJpc05hTiIsInBhcnNlSW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93TW9kYWwiLCJ0YWdzIiwiSGFzaHRhZ3MiLCJvbkNsaWNrU2xpZGUiLCJzdWNjZXNzIiwiU01fSGVhZGVyX01lbnUiLCJTTV9IZWFkZXJfVGl0bGUiLCJ0aXRsZSIsInRyYW5zZm9ybSIsImZhQ2hldnJvbkRvd24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZmFUaW1lcyIsImZhQmFycyIsIlNNX0hlYWRlcl9TZWFjaEZvcm0iLCJTTV9IZWFkZXJfSW5wdXQiLCJTbGlkZU1lbnVXcmFwcGVyIiwiU2xpZGVNZW51Iiwib25DbGlja01lbnUiLCJvbkNsaWNrTG9nT3V0IiwibWFyZ2luQ1NTIiwiZmFTZWFyY2giLCJmYVNpZ25PdXRBbHQiLCJmYVNpZ25JbkFsdCIsIm1hcmdpblplcm8iLCJTbGlkZVJlbW90ZSIsIm9uQ2xpY2tMaW5rIiwiY29sb3IiLCJhZG1pbiIsImZhVHJhc2giLCJJbmZvTW9kYWwiLCJzZXRDaGFuZ2VQYXNzd29yZCIsInNldENoYW5nZU5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUiLCJ1c2VyTmFtZSIsIm5ld1Bhc3N3b3JkIiwib25DaGFuZ2VOZXdQYXNzd29yZCIsIm9uQ2hhbmdlTmV3TmFtZSIsImdvb2dsZUlkIiwib25TdWJtaXRDaGFuZ2VQYXNzd29yZCIsIm9uc3VibWl0Q2hhbmdlTmFtZSIsIm9uU3VibWl0V2l0aGRyYXdhbCIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwiXyIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIkZvb3RlckRpdmlkZXIiLCJEaXZpZGVyIiwiRm9vdGVyIiwib25DbGlja0xpc3QiLCJvbkNsaWNrTmlja25hbWVCdG4iLCJzb2NpYWxfY29udGVudCIsImluZm9fY29udGVudCIsInF1aWNrdmlld19jb250ZW50IiwiTG9nb01haW4iLCJIZWFkZXIiLCJGaXhlZE5hdmJhciIsInNldEZpeGVkTmF2YmFyIiwiaGVpZ2h0IiwiQkxVRV9DT0xPUiIsIk1BSU5fQ09MT1IiLCJTVUJfQ09MT1IiLCJHUkFZX0NPTE9SIiwiQkdfQ09MT1IiLCJSRURfQ09MT1IiLCJDQVJEX0RFU0NfUFMiLCJDQVJEX0RFU0NfQ09NVSIsIkNBUkRfREVTQ19DT09QIiwiQ2FyZENvbnRlbnRzIiwic3F1YXJlVGl0bGUiLCJkZXNjIiwic3JjIiwiZmFBZGRyZXNzQ2FyZCIsImZhTGFwdG9wIiwiZmFJbWFnZXMiLCJmYUVudmVsb3BlIiwic2tpbGxzIiwibGV2ZWwiLCJzdWJfc2tpbGxzIiwiZGF0YVNvdXJjZSIsImtleSIsImRhdGUiLCJzdW1tYXJ5Iiwic2NvcmUiLCJjb2x1bW5zIiwiZGF0YUluZGV4IiwicG9ydGZvbGlvcyIsImdpdCIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwicHJvbSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImRvY3VtZW50IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJyZXNldCIsImxvYWRpbmdTY3JlZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkFPUyIsImluaXQiLCJzdGFydEV2ZW50IiwiZW5kIiwid2l0aFJlZHV4IiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZ0NTUyIsIm5vU2VhcmNoUG9zdENTUyIsIm9uU2VhcmNoIiwib25NZW51Iiwib25TbGlkZSIsIm9uVGl0bGUiLCJUaXRsZVByb2ZpbGUiLCJOb1Bvc3RQcm9maWxlIiwiUHJvZmlsZVBvaW50VGl0bGUiLCJEZWxldGVDb21tZW50IiwicmVtb3ZlTW9kYWwiLCJpbml0aWFsVmFsdWUiLCJWYWx1ZSIsInNldFZhbHVlIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVB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QWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJB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QVEsQ0FBQzFXLENBQUMsQ0FBQ0QsTUFBRixDQUFTcEQsS0FBVixDQUFSO0FBQ0QsR0FGMEIsRUFFeEIsRUFGd0IsQ0FBM0I7QUFHQSxTQUFPLENBQUM4WixLQUFELEVBQVF2TixPQUFSLEVBQWlCd04sUUFBakIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTL2QsU0FBVCxDQUFtQjZkLFlBQW5CLEVBQTBDO0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQmxlLHNEQUFRLENBQUNnZSxZQUFELENBQWxDO0FBQ0EsUUFBTXROLE9BQU8sR0FBR3JULHlEQUFXLENBQUMsTUFBTTtBQUNoQzZnQixZQUFRLENBQUVDLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQVI7QUFDRCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjtBQUdBLFNBQU8sQ0FBQ0YsS0FBRCxFQUFRdk4sT0FBUixFQUFpQndOLFFBQWpCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JELDhDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IEJsb2dTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0aGVtZTogXCJsaWdodFwiLFxyXG4gIGhlYWRlcjogXCJibG9nXCIsXHJcbiAgcHJlUG9ydGZvbGlvOiBbXSxcclxuICBwb3N0UG9ydGZvbGlvOiBbXSxcclxuICBwb3N0czogW10sXHJcbiAgb25BYm91dDogZmFsc2UsXHJcbiAgb25TaWduVXBQYWdlOiBmYWxzZSxcclxuICBwb3N0RWRpdE9uOiBmYWxzZSxcclxuICBzZWFyY2hQb3N0czogW10sXHJcbiAgaGFzaHRhZ1Bvc3RzOiBbXSxcclxuICBvblNsaWRlTWVudTogZmFsc2UsXHJcbiAgb25IZWFkZXJUaXRsZTogZmFsc2UsXHJcblxyXG4gIHNlYXJjaGVkS2V5d29yZDogbnVsbCxcclxuXHJcbiAgc2VhcmNoS2V5d29yZExvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmREb25lOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRXJyb3I6IGZhbHNlLFxyXG5cclxuICBzZWFyY2hIYXNoVGFnTG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoSGFzaFRhZ0RvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEhhc2hUYWdFcnJvcjogZmFsc2UsXHJcblxyXG4gIGFkZFF1aXpMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRRdWl6RG9uZTogZmFsc2UsXHJcbiAgYWRkUXVpekVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RFX0NIQU5HRSA9IFwiTU9ERV9DSEFOR0VcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9SVEZPTElPUyA9IFwiTE9BRF9QT1JURk9MSU9TXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPUlRGT0xJTyA9IFwiTE9BRF9QT1JURk9MSU9cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUFJFUE9SVEZPTElPID0gXCJMT0FEX1BSRVBPUlRGT0xJT1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUUE9SVEZPTElPID0gXCJMT0FEX1BTVFBPUlRGT0xJT1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBR0VfSEVBREVSID0gXCJDSEFHRV9IRUFERVJcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNXSVRDSF9BQk9VVCA9IFwiU1dJVENIX0FCT1VUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9BQk9VVCA9IFwiT05fQUJPVVRcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9GRl9BQk9VVCA9IFwiT0ZGX0FCT1VUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9TSUdOX1VQX1BBR0UgPSBcIk9OX1NJR05fVVBfUEFHRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFBPU1RfRURJVF9PTiA9IFwiUE9TVF9FRElUX09OXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBQT1NUX0VESVRfT0ZGID0gXCJQT1NUX0VESVRfT0ZGXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDTElDS19IQVNIX1RBRyA9IFwiQ0xJQ0tfSEFTSF9UQUdcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX1NMSURFX01FTlUgPSBcIk9OX1NMSURFX01FTlVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX0hFQURFUl9USVRMRSA9IFwiT05fSEVBREVSX1RJVExFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCA9IFwiU0VBUkNIX0tFWVdPUkRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyA9IFwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSA9IFwiU0VBUkNIX0tFWVdPUkRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0tFWVdPUkRfQ0xFQVIgPSBcIlNFQVJDSF9LRVlXT1JEX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1QgPSBcIlNFQVJDSF9IQVNIX1RBR19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyA9IFwiU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFID0gXCJTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX0NMRUFSID0gXCJTRUFSQ0hfSEFTSF9UQUdfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUVVJWl9SRVFVRVNUID0gXCJBRERfUVVJWl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVJWl9TVUNDRVNTID0gXCJBRERfUVVJWl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVJWl9GQUlMVVJFID0gXCJBRERfUVVJWl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVJWl9DTEVBUiA9IFwiQUREX1FVSVpfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IEJsb2dTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTU9ERV9DSEFOR0U6XHJcbiAgICAgICAgZHJhZnQudGhlbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFHRV9IRUFERVI6XHJcbiAgICAgICAgZHJhZnQuaGVhZGVyID0gYWN0aW9uLmhlYWRlcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTV0lUQ0hfQUJPVVQ6XHJcbiAgICAgICAgZHJhZnQub25BYm91dCA9ICFkcmFmdC5vbkFib3V0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX0FCT1VUOlxyXG4gICAgICAgIGRyYWZ0Lm9uQWJvdXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9GRl9BQk9VVDpcclxuICAgICAgICBkcmFmdC5vbkFib3V0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fU0lHTl9VUF9QQUdFOlxyXG4gICAgICAgIGRyYWZ0Lm9uU2lnblVwUGFnZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBPU1RfRURJVF9PTjpcclxuICAgICAgICBkcmFmdC5wb3N0RWRpdE9uID0gIWRyYWZ0LnBvc3RFZGl0T247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fU0xJREVfTUVOVTpcclxuICAgICAgICBkcmFmdC5vblNsaWRlTWVudSA9ICFkcmFmdC5vblNsaWRlTWVudTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9IRUFERVJfVElUTEU6XHJcbiAgICAgICAgZHJhZnQub25IZWFkZXJUaXRsZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBPU1RfRURJVF9PRkY6XHJcbiAgICAgICAgZHJhZnQucG9zdEVkaXRPbiA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzID0gYWN0aW9uLmRhdGEuc2VhcmNoUG9zdHM7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoZWRLZXl3b3JkID0gYWN0aW9uLmRhdGEuc2VhcmNoZWRLZXl3b3JkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5oYXNodGFnUG9zdHMgPSBhY3Rpb24uZGF0YS5oYXNodGFnUG9zdHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IGJsb2cgZnJvbSBcIi4vYmxvZ1wiO1xyXG5pbXBvcnQgeyBCbG9nU3RhdGUsIFBvc3RTdGF0ZSwgVXNlclN0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb290U3RhdGUge1xyXG4gIGJsb2c6IEJsb2dTdGF0ZTtcclxuICB1c2VyOiBVc2VyU3RhdGU7XHJcbiAgcG9zdDogUG9zdFN0YXRlO1xyXG59XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZTogUm9vdFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgICAgYmxvZyxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnRzSW50ZXIsIFBvc3RTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0ZWNoUG9zdHM6IFtdLFxyXG4gIGRhaWx5UG9zdHM6IFtdLFxyXG4gIGNsYXNzUG9zdHM6IFtdLFxyXG4gIGN1bHR1cmVQb3N0czogW10sXHJcbiAgcXVpenplczogW10sXHJcbiAgd29yZHM6IFtdLFxyXG4gIGhhc2h0YWdzOiBbXSxcclxuICBtb3N0TGlrZWRQb3N0OiBudWxsLFxyXG4gIG1vc3RWaWV3ZWRQb3N0OiBudWxsLFxyXG4gIG1vc3RDb21tZW50ZWRQb3N0OiBudWxsLFxyXG4gIHBvc3Q6IG51bGwsXHJcbiAgcHJldlBvc3Q6IFtdLFxyXG4gIG5leHRQb3N0OiBbXSxcclxuICBjb3VudFBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGg6IG51bGwsXHJcbiAgcG9zdEltYWdlUGF0aDogbnVsbCxcclxuICByZWNlbnRWaWV3UG9zdDogbnVsbCxcclxuICByZWNlbnRDb21tZW50UG9zdDogbnVsbCxcclxuXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVwbG9hZFBvc3RJbWFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZFBvc3RJbWFnZURvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZFBvc3RJbWFnZUVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRQb3N0RG9uZTogZmFsc2UsXHJcbiAgZWRpdFBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZFJlY2VudFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFJlY2VudFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFJlY2VudFBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZENhdGVnb3J5UG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZE1vcmVQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNb3JlUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkTW9yZVBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkQ2xhc3NQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRDbGFzc1Bvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZENsYXNzUG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGVkaXRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgZWRpdENvbW1lbnREb25lOiBmYWxzZSxcclxuICBlZGl0Q29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsaWtlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgbGlrZUNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVubGlrZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkU3ViQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFN1YkNvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRTdWJDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0U3ViQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgZWRpdFN1YkNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlU3ViQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgaGFzTW9yZVBvc3RzOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0NMRUFSID0gXCJVUExPQURfSU1BR0VTX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUyA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfQ0xFQVIgPSBcIkFERF9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUID0gXCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9QT1NUU19SRVFVRVNUID0gXCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX1JFUVVFU1QgPSBcIkVESVRfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfU1VDQ0VTUyA9IFwiRURJVF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9GQUlMVVJFID0gXCJFRElUX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NMRUFSID0gXCJFRElUX1BPU1RfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9DTEVBUiA9IFwiUkVNT1ZFX1BPU1RfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfQ09NTUVOVF9SRVFVRVNUID0gXCJMSUtFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX1NVQ0NFU1MgPSBcIkxJS0VfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX0NPTU1FTlRfRkFJTFVSRSA9IFwiTElLRV9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9SRVFVRVNUID0gXCJVTkxJS0VfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTID0gXCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFID0gXCJVTkxJS0VfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfQ0xFQVIgPSBcIkFERF9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9IFwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9IFwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9SRVFVRVNUID0gXCJFRElUX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX1NVQ0NFU1MgPSBcIkVESVRfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfRkFJTFVSRSA9IFwiRURJVF9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9DTEVBUiA9IFwiRURJVF9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX1NVQl9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX0NMRUFSID0gXCJBRERfU1VCX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCA9IFwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTID0gXCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUgPSBcIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUID0gXCJFRElUX1NVQl9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUgPSBcIkVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9DTEVBUiA9IFwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogUG9zdFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQ6IGFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgJiYgZHJhZnQudGVjaFBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgJiYgZHJhZnQuZGFpbHlQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJjbGFzc1wiICYmIGRyYWZ0LmNsYXNzUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiY3VsdHVyZVwiICYmIGRyYWZ0LmN1bHR1cmVQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudGVjaFBvc3RzID0gYWN0aW9uLmRhdGEudGVjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBhY3Rpb24uZGF0YS5kYWlseVBvc3RzO1xyXG4gICAgICAgIGRyYWZ0Lmhhc2h0YWdzID0gYWN0aW9uLmRhdGEuaGFzaHRhZ3M7XHJcbiAgICAgICAgZHJhZnQubW9zdFZpZXdlZFBvc3QgPSBhY3Rpb24uZGF0YS5tb3N0Vmlld2VkUG9zdDtcclxuICAgICAgICBkcmFmdC5tb3N0TGlrZWRQb3N0ID0gYWN0aW9uLmRhdGEubW9zdExpa2VkUG9zdDtcclxuICAgICAgICBkcmFmdC5tb3N0Q29tbWVudGVkUG9zdCA9IGFjdGlvbi5kYXRhLm1vc3RDb21tZW50ZWRQb3N0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3QgPSBhY3Rpb24uZGF0YS5wb3N0O1xyXG4gICAgICAgIGRyYWZ0LnByZXZQb3N0ID0gYWN0aW9uLmRhdGEucHJldlBvc3Q7XHJcbiAgICAgICAgZHJhZnQubmV4dFBvc3QgPSBhY3Rpb24uZGF0YS5uZXh0UG9zdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnRlY2hQb3N0cyA9IGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcInRlY2hcIiA/IGFjdGlvbi5kYXRhLnBvc3RzIDogZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZGFpbHlQb3N0cyA9IGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgPyBhY3Rpb24uZGF0YS5wb3N0cyA6IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvdW50UG9zdHMgPSBhY3Rpb24uZGF0YS5jb3VudFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLnBvc3RzLmxlbmd0aCA+IDY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy/subTthYzqs6Drpqzsl5Ag66ee64qUIO2PrOyKpO2KuOulvCDrhKPslrTspIDri6QuXHJcbiAgICAgICAgY29uc3QgbW9yZVRlY2hQb3N0cyA9XHJcbiAgICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgJiYgZHJhZnQudGVjaFBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YS5tb3JlUG9zdHMpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVEYWlseVBvc3RzID1cclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImRhaWx5XCIgJiYgZHJhZnQuZGFpbHlQb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEubW9yZVBvc3RzKTtcclxuICAgICAgICBkcmFmdC50ZWNoUG9zdHMgPSBtb3JlVGVjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBtb3JlRGFpbHlQb3N0cztcclxuICAgICAgICAvL+u2iOufrOyYqCDtj6zsiqTtirjqsIAgbGltaXTqsJLsnbggNuqwnOudvOuKlOqyg+ydgCDrtojrn6zsmKgg7Y+s7Iqk7Yq46rCAIOuNlCDsnojri6TripQg7J2Y66+47J2064ukLlxyXG4gICAgICAgIC8v66eM7JW9IOqwr+yImOqwgCDrlLEg66ee7JWE7IScIOuLpOydjCDqsJLsnbQg7JeG64uk6rOgIO2VtOuPhCDqt7gg7JqU7LKt7J2AIDDqsJzsnoTsnLzroZwgZmFsc2XqsIAg65Cc64ukLlxyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLm1vcmVQb3N0cy5sZW5ndGggPT09IDY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNsYXNzUG9zdHMgPSBhY3Rpb24uZGF0YS5jbGFzc1Bvc3RzX2NsYXNzO1xyXG4gICAgICAgIGRyYWZ0LmN1bHR1cmVQb3N0cyA9IGFjdGlvbi5kYXRhLmN1bHR1cmVQb3N0c19jbGFzcztcclxuICAgICAgICBkcmFmdC5xdWl6emVzID0gYWN0aW9uLmRhdGEucXVpenplcztcclxuICAgICAgICBkcmFmdC53b3JkcyA9IGFjdGlvbi5kYXRhLndvcmRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LlBvc3RMaWtlcnM/LnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LlBvc3RMaWtlcnM/LmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0LkNvbW1lbnRzLmZpbmQoKHY6IENvbW1lbnRzSW50ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQ7XHJcbiAgICAgICAgfSkuY29udGVudCA9IGFjdGlvbi5kYXRhLm5ld0NvbW1lbnQ7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Db21tZW50cz8uZmluZCgodjogYW55KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQpLkNvbW1lbnRMaWtlcnMucHVzaCh7XHJcbiAgICAgICAgICBpZDogYWN0aW9uLmRhdGEuVXNlcklkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgLy9SRVFVRVNUICwgU1VDQ0VTUyAsIEZBSUxVUkUg66GcIFJlZHVjZXLrpbwg7Kq86rCc7IScIOyYpOulmOq0gOumrOulvCDrs7Tri6Qg7Im96rKMIO2WiOyKteuLiOuLpC5cclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy9pbW1lciDsoIHsmqnsnLzroZwg67aI67OA7ISx7J2EIOyViOyngOy8nOuPhCDrkKguXHJcbiAgICAgICAgbGV0IENvbW1lbnRzV2l0aG91dERlbGV0ZWQgPSBkcmFmdC5wb3N0Py5Db21tZW50cz8uZmluZChcclxuICAgICAgICAgICh2OiBDb21tZW50c0ludGVyKSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWRcclxuICAgICAgICApLkNvbW1lbnRMaWtlcnMuZmlsdGVyKCh2OiBhbnkpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQucG9zdC5Db21tZW50cy5maW5kKFxyXG4gICAgICAgICAgKHY6IENvbW1lbnRzSW50ZXIpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZFxyXG4gICAgICAgICkuQ29tbWVudExpa2VycyA9IENvbW1lbnRzV2l0aG91dERlbGV0ZWQ7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoKHY6IGFueSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKS5TdWJDb21tZW50cy5wdXNoKFxyXG4gICAgICAgICAgYWN0aW9uLmRhdGEuZnVsbFN1YkNvbW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1NVQl9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3QuQ29tbWVudHMuZmluZCgodjogQ29tbWVudHNJbnRlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZDtcclxuICAgICAgICB9KS5TdWJDb21tZW50cy5maW5kKCh2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5TdWJDb21tZW50SWQ7XHJcbiAgICAgICAgfSkuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRoID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdEltYWdlUGF0aCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZWNlbnRWaWV3UG9zdCA9IGFjdGlvbi5kYXRhLnJlY2VudFZpZXdQb3N0O1xyXG4gICAgICAgIGRyYWZ0LnJlY2VudENvbW1lbnRQb3N0ID0gYWN0aW9uLmRhdGEucmVjZW50Q29tbWVudFBvc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgVXNlclN0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IG51bGwsXHJcbiAgaW1hZ2VQYXRoOiBudWxsLFxyXG4gIGNvbmZpcm1QYXNzd29yZDogZmFsc2UsXHJcblxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9nSW5Hb29nbGVMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkdvb2dsZURvbmU6IGZhbHNlLFxyXG4gIGxvZ0luR29vZ2xlRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkSW5mb0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRJY29uTG9hZGluZzogZmFsc2UsXHJcbiAgYWRkSWNvbkRvbmU6IGZhbHNlLFxyXG4gIGFkZEljb25FcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZUljb25Mb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVJY29uRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlSWNvbkVycm9yOiBmYWxzZSxcclxuXHJcbiAgY29uZmlybVBhc3N3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgY29uZmlybVBhc3N3b3JkRG9uZTogZmFsc2UsXHJcbiAgY29uZmlybVBhc3N3b3JkRXJyb3I6IGZhbHNlLFxyXG5cclxuICB3aXRoZHJhd2FsTG9hZGluZzogZmFsc2UsXHJcbiAgd2l0aGRyYXdhbERvbmU6IGZhbHNlLFxyXG4gIHdpdGhkcmF3YWxFcnJvcjogZmFsc2UsXHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlUGFzc3dvcmREb25lOiBmYWxzZSxcclxuICBjaGFuZ2VQYXNzd29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgY2hhbmdlTmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOYW1lRXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9DTEVBUiA9IFwiTE9HX0lOX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9SRVFVRVNUID0gXCJMT0dfSU5fR09PR0xFX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfU1VDQ0VTUyA9IFwiTE9HX0lOX0dPT0dMRV9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX0ZBSUxVUkUgPSBcIkxPR19JTl9HT09HTEVfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9DTEVBUiA9IFwiTE9HX0lOX0dPT0dMRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfQ0xFQVIgPSBcIkxPR19PVVRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0NMRUFSID0gXCJTSUdOX1VQX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPX1JFUVVFU1QgPSBcIkxPQURfSU5GT19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9JTkZPX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19GQUlMVVJFID0gXCJMT0FEX0lORk9fRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX1JFUVVFU1QgPSBcIkFERF9JQ09OX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX1NVQ0NFU1MgPSBcIkFERF9JQ09OX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX0ZBSUxVUkUgPSBcIkFERF9JQ09OX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9JQ09OX0NMRUFSID0gXCJBRERfSUNPTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX1JFUVVFU1QgPSBcIlJFTU9WRV9JQ09OX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX1NVQ0NFU1MgPSBcIlJFTU9WRV9JQ09OX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX0ZBSUxVUkUgPSBcIlJFTU9WRV9JQ09OX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JQ09OX0NMRUFSID0gXCJSRU1PVkVfSUNPTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9SRVFVRVNUID0gXCJDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1MgPSBcIkNIQU5HRV9QQVNTV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSA9IFwiQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9DTEVBUiA9IFwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05BTUVfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05BTUVfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05BTUVfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05BTUVfQ0xFQVIgPSBcIkNIQU5HRV9OQU1FX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX1JFUVVFU1QgPSBcIldJVEhEUldBTF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfU1VDQ0VTUyA9IFwiV0lUSERSV0FMX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9GQUlMVVJFID0gXCJXSVRIRFJXQUxfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX0NMRUFSID0gXCJXSVRIRFJXQUxfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QgPSBcIkNPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTID0gXCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSA9IFwiQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX0NMRUFSID0gXCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBVc2VyU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdDogYW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9HT09HTEVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGEuZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQub25TaWduVXBQYWdlID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyLmljb24gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5pY29uID0gXCIvaW1hZ2VzL2Jsb2cvZGVmYXVsdC11c2VyLnBuZ1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5uYW1lID0gYWN0aW9uLmRhdGEubmV3TmFtZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBXSVRIRFJXQUxfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1FVSVpfQ0xFQVIsXHJcbiAgQUREX1FVSVpfRkFJTFVSRSxcclxuICBBRERfUVVJWl9SRVFVRVNULFxyXG4gIEFERF9RVUlaX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19SRVFVRVNULFxyXG4gIFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTLFxyXG4gIFNFQVJDSF9LRVlXT1JEX0NMRUFSLFxyXG4gIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvYmxvZ1wiO1xyXG5pbXBvcnQge1xyXG4gIEFkZFF1aXpEYXRhLFxyXG4gIEFkZFF1aXpJbnRlcixcclxuICBTZWFyY2hIYXNodGFnRGF0YSxcclxuICBTZWFyY2hIYXNodGFnSW50ZXIsXHJcbiAgU2VhcmNoS2V5d29yZERhdGEsXHJcbiAgU2VhcmNoS2V5d29yZEludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFF1aXpBUEkoZGF0YTogQWRkUXVpekRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9xdWl6YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRRdWl6KGFjdGlvbjogQWRkUXVpekludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoYWRkUXVpekFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hLZXl3b3JkQVBJKGRhdGE6IFNlYXJjaEtleXdvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvc2VhcmNoL2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoS2V5d29yZChhY3Rpb246IFNlYXJjaEtleXdvcmRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoc2VhcmNoS2V5d29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hIYXNodGFnQVBJKGRhdGE6IFNlYXJjaEhhc2h0YWdEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvc2VhcmNoL2hhc2h0YWdgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaEhhc2h0YWcoYWN0aW9uOiBTZWFyY2hIYXNodGFnSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHNlYXJjaEhhc2h0YWdBUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRRdWl6KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1FVSVpfUkVRVUVTVCwgYWRkUXVpeik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoS2V5d29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsIHNlYXJjaEtleXdvcmQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEhhc2h0YWcoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCwgc2VhcmNoSGFzaHRhZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBibG9nU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRRdWl6KSwgZm9yayh3YXRjaFNlYXJjaEtleXdvcmQpLCBmb3JrKHdhdGNoU2VhcmNoSGFzaHRhZyldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBMSUtFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBVTkxJS0VfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9TVUJfQ09NTUVOVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEVESVRfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9DTEVBUixcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBFRElUX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBFRElUX0NPTU1FTlRfQ0xFQVIsXHJcbiAgRURJVF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkQ29tbWVudERhdGEsXHJcbiAgQWRkQ29tbWVudEludGVyLFxyXG4gIEFkZFN1YkNvbW1lbnREYXRhLFxyXG4gIEFkZFN1YkNvbW1lbnRJbnRlcixcclxuICBFZGl0Q29tbWVudERhdGEsXHJcbiAgRWRpdENvbW1lbnRJbnRlcixcclxuICBFZGl0U3ViQ29tbWVudEludGVyLFxyXG4gIExpa2VDb21tZW50RGF0YSxcclxuICBMaWtlQ29tbWVudEludGVyLFxyXG4gIFJlbW92ZUNvbW1lbnRJbnRlcixcclxuICBSZW1vdmVTdWJDb21tZW50SW50ZXIsXHJcbiAgU3ViQ29tbWVudERhdGEsXHJcbiAgVW5saWtlQ29tbWVudEludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YTogQWRkQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9jb21tZW50LyR7ZGF0YS5wb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbjogQWRkQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvY29tbWVudC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbjogUmVtb3ZlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0Q29tbWVudEFQSShkYXRhOiBFZGl0Q29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL2NvbW1lbnQvZWRpdC8ke2RhdGEuQ29tbWVudElkfS9gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRDb21tZW50KGFjdGlvbjogRWRpdENvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlQ29tbWVudEFQSShkYXRhOiBMaWtlQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvY29tbWVudC9saWtlLyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlQ29tbWVudChhY3Rpb246IExpa2VDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxpa2VDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlQ29tbWVudEFQSShkYXRhOiBMaWtlQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvdW5saWtlLyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VDb21tZW50KGFjdGlvbjogVW5saWtlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1bmxpa2VDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN1YkNvbW1lbnRBUEkoZGF0YTogQWRkU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9jb21tZW50L3N1Yi8ke2RhdGEuQ29tbWVudElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkU3ViQ29tbWVudChhY3Rpb246IEFkZFN1YkNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkU3ViQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3ViQ29tbWVudEFQSShkYXRhOiBTdWJDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvY29tbWVudC9zdWIvJHtkYXRhLkNvbW1lbnRJZH0vJHtkYXRhLlN1YkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVN1YkNvbW1lbnQoYWN0aW9uOiBSZW1vdmVTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZVN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFN1YkNvbW1lbnRBUEkoZGF0YTogU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL2NvbW1lbnQvc3ViL2VkaXQvJHtkYXRhLkNvbW1lbnRJZH0vJHtkYXRhLlN1YkNvbW1lbnRJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRTdWJDb21tZW50KGFjdGlvbjogRWRpdFN1YkNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdFN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9DT01NRU5UX1JFUVVFU1QsIGVkaXRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfQ09NTUVOVF9SRVFVRVNULCBsaWtlQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9DT01NRU5UX1JFUVVFU1QsIHVubGlrZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCwgYWRkU3ViQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlU3ViQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVTdWJDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0U3ViQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCwgZWRpdFN1YkNvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY29tbWVudFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0Q29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoTGlrZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaEFkZFN1YkNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVN1YkNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaEVkaXRTdWJDb21tZW50KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJsb2dTYWdhIGZyb20gXCIuL2Jsb2dcIjtcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGNvbW1lbnRTYWdhIGZyb20gXCIuL2NvbW1lbnRcIjtcclxuaW1wb3J0IHsgQkFDS0VORF9VUkwgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIiA6IEJBQ0tFTkRfVVJMO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpLCBmb3JrKGNvbW1lbnRTYWdhKSwgZm9yayhibG9nU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX1JFUVVFU1QsXHJcbiAgRURJVF9QT1NUX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfQ0xFQVIsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIEFERF9QT1NUX0NMRUFSLFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19DTEVBUixcclxuICBMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSxcclxuICBVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNULFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSxcclxuICBFRElUX1BPU1RfQ0xFQVIsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkUG9zdEludGVyLFxyXG4gIEVkaXRQb3N0SW50ZXIsXHJcbiAgTGlrZVBvc3REYXRhLFxyXG4gIExpa2VQb3N0SW50ZXIsXHJcbiAgTG9hZENhdGVnb3J5SW50ZXIsXHJcbiAgTG9hZE1vcmVQb3N0c0RhdGEsXHJcbiAgTG9hZE1vcmVQb3N0c0ludGVyLFxyXG4gIExvYWRQb3N0RGF0YSxcclxuICBMb2FkUG9zdEludGVyLFxyXG4gIExvYWRSZWNlbnRQb3N0SW50ZXIsXHJcbiAgTmV3UG9zdERhdGEsXHJcbiAgUmVtb3ZlUG9zdERhdGEsXHJcbiAgUmVtb3ZlUG9zdEludGVyLFxyXG4gIFVwbG9hZEltYWdlRGF0YSxcclxuICBVcGxvYWRJbWFnZUludGVyLFxyXG4gIFVwbG9hZFBvc3RJbWFnZUludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGE6IE5ld1Bvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbjogQWRkUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3RgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ2F0ZWdvcnlQb3N0c0FQSShkYXRhOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvY2F0ZWdvcnkvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZENhdGVnb3J5UG9zdHMoYWN0aW9uOiBMb2FkQ2F0ZWdvcnlJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZENhdGVnb3J5UG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNb3JlUG9zdHNBUEkoZGF0YTogTG9hZE1vcmVQb3N0c0RhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvbW9yZXBvc3QvJHtkYXRhLmNhdGVnb3J5fT9sYXN0SWQ9JHtkYXRhLkxhc3RJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNb3JlUG9zdHMoYWN0aW9uOiBMb2FkTW9yZVBvc3RzSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRNb3JlUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTU9SRV9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ2xhc3NQb3N0c0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3QvY2xhc3NgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDbGFzc1Bvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZENsYXNzUG9zdHNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YTogTG9hZFBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L29uZVBvc3QvJHtkYXRhLnBvc3RJZH0vJHtkYXRhLlVzZXJJZH0vJHtkYXRhLmNhdGVnb3J5fWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb246IExvYWRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkUmVjZW50UG9zdHNBUEkoZGF0YTogVXNlckludGVyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC9yZWNlbnRgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFJlY2VudFBvc3RzKGFjdGlvbjogTG9hZFJlY2VudFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZFJlY2VudFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGE6IExpa2VQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS9wb3N0L2xpa2UvJHtkYXRhLlBvc3RJZH0vJHtkYXRhLlVzZXJJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbjogTGlrZVBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGE6IExpa2VQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvcG9zdC9saWtlLyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Vc2VySWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbjogTGlrZVBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YTogVXBsb2FkSW1hZ2VEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbjogVXBsb2FkSW1hZ2VJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZFBvc3RJbWFnZUFQSShkYXRhOiBVcGxvYWRJbWFnZURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdC9pbWFnZVwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZFBvc3RJbWFnZShhY3Rpb246IFVwbG9hZFBvc3RJbWFnZUludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1cGxvYWRQb3N0SW1hZ2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhOiBSZW1vdmVQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvcG9zdC9kZWxldGVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uOiBSZW1vdmVQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFBvc3RBUEkoZGF0YTogTmV3UG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3Bvc3QvZWRpdGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZWRpdFBvc3QoYWN0aW9uOiBFZGl0UG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChlZGl0UG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRDYXRlZ29yeVBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNULCBsb2FkQ2F0ZWdvcnlQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZE1vcmVQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTU9SRV9QT1NUU19SRVFVRVNULCBsb2FkTW9yZVBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVjZW50UG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNULCBsb2FkUmVjZW50UG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRDbGFzc1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DTEFTU19QT1NUU19SRVFVRVNULCBsb2FkQ2xhc3NQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX1BPU1RfUkVRVUVTVCwgZWRpdFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRQb3N0SW1hZ2UoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNULCB1cGxvYWRQb3N0SW1hZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaGxvYWRDYXRlZ29yeVBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkTW9yZVBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkQ2xhc3NQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWNlbnRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkUG9zdEltYWdlKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0UG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX0lDT05fQ0xFQVIsXHJcbiAgQUREX0lDT05fRkFJTFVSRSxcclxuICBBRERfSUNPTl9SRVFVRVNULFxyXG4gIEFERF9JQ09OX1NVQ0NFU1MsXHJcbiAgQ0hBTkdFX1BBU1NXT1JEX0NMRUFSLFxyXG4gIENIQU5HRV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gIENIQU5HRV9QQVNTV09SRF9SRVFVRVNULFxyXG4gIENIQU5HRV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gIENIQU5HRV9OQU1FX0NMRUFSLFxyXG4gIENIQU5HRV9OQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTkFNRV9TVUNDRVNTLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfQ0xFQVIsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgTE9BRF9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0NMRUFSLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9HT09HTEVfQ0xFQVIsXHJcbiAgTE9HX0lOX0dPT0dMRV9GQUlMVVJFLFxyXG4gIExPR19JTl9HT09HTEVfUkVRVUVTVCxcclxuICBMT0dfSU5fR09PR0xFX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9DTEVBUixcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBSRU1PVkVfSUNPTl9DTEVBUixcclxuICBSRU1PVkVfSUNPTl9GQUlMVVJFLFxyXG4gIFJFTU9WRV9JQ09OX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0lDT05fU1VDQ0VTUyxcclxuICBTSUdOX1VQX0NMRUFSLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFdJVEhEUldBTF9DTEVBUixcclxuICBXSVRIRFJXQUxfRkFJTFVSRSxcclxuICBXSVRIRFJXQUxfUkVRVUVTVCxcclxuICBXSVRIRFJXQUxfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHtcclxuICBVc2VyRGF0YSxcclxuICBMb2dJbkludGVyLFxyXG4gIFNpZ25VcEludGVyLFxyXG4gIEFkZEljb25EYXRhLFxyXG4gIEFkZEljb25JbnRlcixcclxuICBSZW1vdmVJY29uSW50ZXIsXHJcbiAgQ29tZmlybVBhc3N3b3JkSW50ZXIsXHJcbiAgQ29tZmlybVBhc3N3b3JkRGF0YSxcclxuICBDaGFuZ2VQYXNzd29yZERhdGEsXHJcbiAgQ2hhbmdlUGFzc3dvcmRJbnRlcixcclxuICBXaXRoZHJ3YWxJbnRlcixcclxuICBDaGFuZ2VOYW1lRGF0YSxcclxuICBDaGFuZ2VOYW1lSW50ZXIsXHJcbn0gZnJvbSBcIi4vQHNhZ2FUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YTogVXNlckRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9sb2dJblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbjogTG9nSW5JbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luR29vZ2xlQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXV0aC9nb29nbGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbkdvb2dsZSgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dJbkdvb2dsZUFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fR09PR0xFX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL2xvZ091dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhOiBVc2VyRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL3NpZ25VcFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb246IFNpZ25VcEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDUwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEljb25BUEkoZGF0YTogQWRkSWNvbkRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9pY29uXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkSWNvbihhY3Rpb246IEFkZEljb25JbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkSWNvbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfSUNPTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJY29uQVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvdXNlci9pY29uLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUljb24oYWN0aW9uOiBSZW1vdmVJY29uSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZUljb25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lDT05fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hcGkvdXNlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZEluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpcm1QYXNzd29yZEFQSShkYXRhOiBDb21maXJtUGFzc3dvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL2NvbmZpcm1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNvbmZpcm1QYXNzd29yZChhY3Rpb246IENvbWZpcm1QYXNzd29yZEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChjb25maXJtUGFzc3dvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmRBUEkoZGF0YTogQ2hhbmdlUGFzc3dvcmREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL3Bhc3N3b3JkYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VQYXNzd29yZChhY3Rpb246IENoYW5nZVBhc3N3b3JkSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGNoYW5nZVBhc3N3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5hbWVBUEkoZGF0YTogQ2hhbmdlTmFtZURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3VzZXIvbmFtZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmFtZShhY3Rpb246IENoYW5nZU5hbWVJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoY2hhbmdlTmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTkFNRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aXRoZHJhd2FsQVBJKGRhdGE6IG51bWJlcikge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYGFwaS91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdpdGhkcmF3YWwoYWN0aW9uOiBXaXRoZHJ3YWxJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwod2l0aGRyYXdhbEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBXSVRIRFJXQUxfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW5Hb29nbGUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fR09PR0xFX1JFUVVFU1QsIGxvZ0luR29vZ2xlKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEljb24oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfSUNPTl9SRVFVRVNULCBhZGRJY29uKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVJY29uKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0lDT05fUkVRVUVTVCwgcmVtb3ZlSWNvbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0lORk9fUkVRVUVTVCwgbG9hZEluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENvbmZpcm1QYXNzd29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCwgY29uZmlybVBhc3N3b3JkKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VQYXNzd29yZCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9QQVNTV09SRF9SRVFVRVNULCBjaGFuZ2VQYXNzd29yZCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OQU1FX1JFUVVFU1QsIGNoYW5nZU5hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFdpdGhkcmF3YWwoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChXSVRIRFJXQUxfUkVRVUVTVCwgd2l0aGRyYXdhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbkdvb2dsZSksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hBZGRJY29uKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVJY29uKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hDb25maXJtUGFzc3dvcmQpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZVBhc3N3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOYW1lKSxcclxuICAgIGZvcmsod2F0Y2hXaXRoZHJhd2FsKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL0BzYWdhXCI7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZTogSVN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwiaW1wb3J0IHsgRG91YmxlTGVmdE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcblxyXG5jb25zdCBzY3JvbGxFZmZlY3QgPSBrZXlmcmFtZXNgXHJcbnRvIHtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuYDtcclxuY29uc3QgU2Nyb2xsID0gc3R5bGVkLmRpdmBcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMC41cmVtO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRpb246ICR7c2Nyb2xsRWZmZWN0fSAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gbWVtbygoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBhbnkgfSkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2Nyb2xsIGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgPERvdWJsZUxlZnRPdXRsaW5lZCBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gcm90YXRlPXs5MH0gLz5cclxuICAgICAgICA8L1Njcm9sbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhBcHBMYXlvdXQpO1xyXG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcbiAgaGFuZGxlT2s6ICgpID0+IHZvaWQ7XHJcbiAgaGFuZGxlQ2FuY2VsOiAoKSA9PiB2b2lkO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgb25DaGFuZ2VQYXNzd29yZDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQWRtaW5Nb2RhbDogRkM8TW9kYWxQcm9wcz4gPSAoe1xyXG4gIGlzTW9kYWxWaXNpYmxlLFxyXG4gIGhhbmRsZU9rLFxyXG4gIGhhbmRsZUNhbmNlbCxcclxuICBvbkNoYW5nZVBhc3N3b3JkLFxyXG4gIHBhc3N3b3JkLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0aXRsZT1cIlBsZWFzZSBFbnRlciBBZG1pbiBwYXNzd29yZFwiXHJcbiAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgID5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVGhpcyBmdWNudGlvbiBpcyBmb3IgQURNSU4gb25seS4gSWYgeW91IGFyZSBub3QgYSBhZG1pbmlzdHJhdG9yLCBwbGVhc2UgZ28gYmFjayBhbmQgZmVlZGJhY2tcclxuICAgICAgICB0byB1cy4gVGhhbmsgeW91IGZvciB5b3VyIGNvb3BlcmF0YXRpb24uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAg7J20IOq4sOuKpeydgCDqtIDrpqzsnpAg7KCE7Jqp7J6F64uI64ukLiDsmIjquLDsuZgg66q77ZWY6rKMIOyYpOyFqOydhOqyveyasCDtlLzrk5zrsLEg7KO87Iuc66m0IOygleunkCDqsJDsgqztlZjqsqDsirXri4jri6QuXHJcbiAgICAgICAg7ZiR66Cl7ZW07KO87IWU7IScIOqwkOyCrO2VqeuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICDjgZPjga7mqZ/og73jga/nrqHnkIbogIXlsILnlKjjgafjgZTjgZbjgYTjgb7jgZnjgIHkvZXjgYzllY/poYzjgYznmbrnlJ/jgZfjgZ/loLTlkIjjga/nrqHnkIbogIXjgavnm7TmjqXjgZTpgKPntaHjgZfjgabpoILjgZHjgozjgbDlubjjgYTjgaDjgajmgJ3jgYTjgb7jgZnjgIJcclxuICAgICAgPC9wPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPElucHV0LlBhc3N3b3JkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbk1vZGFsO1xyXG4iLCJpbXBvcnQgeyBJbnB1dCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXHJcbiAgd2lkdGg6IDMwJTtcclxuICB6LWluZGV4OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nSGVhZGVyID0gbWVtbygoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtrZXl3b3JkLCBvbkNoYW5nZUtleXdvcmQsIHNldEtleXdvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3Qgb25TZWFyY2hDb250ZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGtleXdvcmQubGVuZ3RoIDwgMikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiS2V5d29yZCBpcyByZXF1aXJlZCB0byBoYXZlIG1vcmUgdGhlbiAxIGxldHRlclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGtleXdvcmQgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGtleXdvcmQuY2hhckF0KDApID09PSBcIiNcIikge1xyXG4gICAgICByb3V0ZXIucHVzaChgL3NlYXJjaC8ke2tleXdvcmQuc2xpY2UoMSl9YCk7XHJcbiAgICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgfSwgW2Rpc3BhdGNoLCByb3V0ZXIsIGtleXdvcmQsIHNldEtleXdvcmRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3VsXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hcIj5cclxuICAgICAgICAgICAgPGE+SW5mbyBUZWNoPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RhaWx5XCI+XHJcbiAgICAgICAgICAgIDxhPkRhaWx5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NsYXNzXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIEtvcmVhbiBDbGFzcyBmb3IgJm5ic3A7XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS4ycmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICAgIDxhPlBvcnRmb2xpbyDirZA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPFNlYXJjaElucHV0IHZhbHVlPXtrZXl3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfSBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dIZWFkZXIpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSBcInJlYWN0LXNjcm9sbHNweVwiO1xyXG5pbXBvcnQgeyBOYXZJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvcnRmb2xpb0hlYWRlcjogRkM8TmF2SW50ZXI+ID0gbWVtbygoeyBuYXZDb250ZW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44cmVtXCIgfX0gaWNvbj17ZmFIb21lfSAvPlxyXG4gICAgICAgICAgQmxvZ1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8U2Nyb2xsc3B5XHJcbiAgICAgICAgaXRlbXM9e1tcImFib3V0bWVcIiwgXCJza2lsbHNcIiwgXCJwb3J0Zm9saW9cIiwgXCJjb250YWN0XCJdfVxyXG4gICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJpcy1jdXJyZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl91bFwiXHJcbiAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICA+XHJcbiAgICAgICAge25hdkNvbnRlbnRzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIiBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIgfX0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AjJHt2Lm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXt2Lmljb259IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxcmVtXCIgfX0+e3YuZXhwbGFpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNodGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaHRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IG1hcmdpbkNTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlTWVudVByb3BzIHtcclxuICBvbkNsaWNrU2VhcmNoRm9ybTogKCkgPT4gdm9pZDtcclxuICB1c2VyOiBVc2VySW50ZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlTWVudVdyYXBwZXIgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIHVsOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVNZW51OiBGQzxTbGlkZU1lbnVQcm9wcz4gPSBtZW1vKCh7IG9uQ2xpY2tTZWFyY2hGb3JtLCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25DbGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtTbGlkZU1lbnVXcmFwcGVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxoMiBjc3M9e21hcmdpbkNTUygwLCAwLCBcIjFyZW1cIiwgMCl9PkJsb2c8L2gyPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPi0gSG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi90ZWNoXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIEluZm8gVGVjaDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9kYWlseVwifT5cclxuICAgICAgICAgICAgPGE+LSBEYWlseTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2VfbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPi0gS29yZWFuIENsYXNzIGZvciAmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNoRm9ybX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgLSBTZWFyY2ggPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19IGljb249e2ZhU2VhcmNofSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8aDIgY3NzPXttYXJnaW5DU1MoMCwgMCwgXCIxcmVtXCIsIDApfT5EaXJlY3QgTGluazwvaDI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAtIEdpdFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpb1wifT5cclxuICAgICAgICAgICAgPGE+LSBQb3J0Zm9saW8g4q2QPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FsbW9uY2hvYmFiL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgLSBJbnN0YWdyYW1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkubm9haHdvcmxkLnNpdGUvYXV0aC9nb29nbGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAtIEdvb2dsZSBMb2dpbntcIiBcIn1cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjAuOXJlbVwiLCBtYXJnaW5MZWZ0OiBcIjAuNHJlbVwiIH19XHJcbiAgICAgICAgICAgICAgYWx0PVwiZ29vZ2xlX2ljb25cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZmx1ZW50LzQ4LzAwMDAwMC9nb29nbGUtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tMb2dPdXR9PlxyXG4gICAgICAgICAgICAgIC0gTG9nIG91dCA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC4zcmVtXCIgfX0gaWNvbj17ZmFTaWduT3V0QWx0fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9PlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgICAgICAgIC0gTG9nIEluICYgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25JbkFsdH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTbGlkZU1lbnUpO1xyXG4iLCJpbXBvcnQge1xyXG4gIERvdWJsZUxlZnRPdXRsaW5lZCxcclxuICBEb3VibGVSaWdodE91dGxpbmVkLFxyXG4gIEVkaXRGaWxsZWQsXHJcbiAgSG9tZUZpbGxlZCxcclxuICBSb2xsYmFja091dGxpbmVkLFxyXG4gIFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZhVHJhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUG9zdEludGVyLCBVc2VySW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuaW1wb3J0IHsgUE9TVF9FRElUX09OIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVSZW1vdGVQcm9wcyB7XHJcbiAgc2hvd01vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIHBvc3Q6IFBvc3RJbnRlcjtcclxuICBwcmV2UG9zdDogUG9zdEludGVyW107XHJcbiAgbmV4dFBvc3Q6IFBvc3RJbnRlcltdO1xyXG4gIHVzZXI6IFVzZXJJbnRlcjtcclxufVxyXG5cclxuY29uc3QgbWFyZ2luWmVybyA9IGNzc2BcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5jb25zdCBTbGlkZVJlbW90ZTogRkM8U2xpZGVSZW1vdGVQcm9wcz4gPSBtZW1vKCh7IHNob3dNb2RhbCwgcG9zdCwgcHJldlBvc3QsIG5leHRQb3N0LCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25DbGlja0xpbmsgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInNsaWRlX3RpdGxlXCI+XHJcbiAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SG9tZUZpbGxlZCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiA/IFwiY2xhc3NcIiA6IHBvc3Q/LmNhdGVnb3J5fWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja0xpbmt9IGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAge25leHRQb3N0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdD8uY2F0ZWdvcnl9L3Bvc3QvJHtuZXh0UG9zdFswXT8uaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxEb3VibGVMZWZ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIHtwcmV2UG9zdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7cHJldlBvc3RbMF0/LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEb3VibGVSaWdodE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xpbmt9PlxyXG4gICAgICAgICAgPFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAge3VzZXI/LmFkbWluICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FRElUX09OLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZG1pblwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8bGkgY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17c2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTbGlkZVJlbW90ZSk7XHJcbiIsImltcG9ydCB7IElucHV0LCBtZXNzYWdlLCBGb3JtLCBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9QQVNTV09SRF9SRVFVRVNULFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIFdJVEhEUldBTF9SRVFVRVNULFxyXG59IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuXHJcbmludGVyZmFjZSBJbmZvTW9kYWwge1xyXG4gIHNldElzTW9kYWxWaXNpYmxlOiAoZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzZXRDaGFuZ2VQYXNzd29yZDogKGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgc2V0Q2hhbmdlTmlja25hbWU6IChlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG4gIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xyXG4gIGNoYW5nZU5pY2tuYW1lOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBJbmZvTW9kYWw6IEZDPEluZm9Nb2RhbD4gPSBtZW1vKFxyXG4gICh7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSxcclxuICAgIHNldENoYW5nZVBhc3N3b3JkLFxyXG4gICAgc2V0Q2hhbmdlTmlja25hbWUsXHJcbiAgICBpc01vZGFsVmlzaWJsZSxcclxuICAgIGNoYW5nZVBhc3N3b3JkLFxyXG4gICAgY2hhbmdlTmlja25hbWUsXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBjb25maXJtUGFzc3dvcmQsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRG9uZSxcclxuICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIHdpdGhkcmF3YWxEb25lLFxyXG4gICAgICB3aXRoZHJhd2FsRXJyb3IsXHJcbiAgICAgIGNoYW5nZU5hbWVEb25lLFxyXG4gICAgICBjaGFuZ2VOYW1lRXJyb3IsXHJcbiAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gdXNlcj8ubmFtZTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3UGFzc3dvcmQsIG9uQ2hhbmdlTmV3UGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3TmFtZSwgb25DaGFuZ2VOZXdOYW1lXSA9IHVzZUlucHV0KHVzZXJOYW1lKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAodXNlcj8uZ29vZ2xlSWQpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoY2hhbmdlUGFzc3dvcmREb25lKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhbmdlIHlvdXIgcGFzc3dvcmQgd2VsbCFcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VOYW1lRG9uZSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYW5nZSB5b3VyIG5pY2tuYW1lIHdlbGwhXCIpO1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VOaWNrbmFtZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aXRoZHJhd2FsRG9uZSkge1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJXaXRoZHJhd2VkLiBUaGFuayB5b3UgZm9yIHVzaW5nICEgc2VlIHlvdSBuZXh0IHRpbWUuXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZVBhc3N3b3JkRXJyb3IgfHwgY2hhbmdlTmFtZUVycm9yIHx8IHdpdGhkcmF3YWxFcnJvcikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmV4cGVjdGVkIEVycm9yISBwbGVhc2UgdHJ5IGFnYWluIG9yIGZlZWRiYWNrIHRvIHVzXCIpO1xyXG4gICAgICAgIHNldENoYW5nZVBhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VOaWNrbmFtZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maXJtUGFzc3dvcmRFcnJvcikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJXcm9uZyBQYXNzd29yZCEgcGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW1xyXG4gICAgICBjaGFuZ2VQYXNzd29yZERvbmUsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLFxyXG4gICAgICB3aXRoZHJhd2FsRG9uZSxcclxuICAgICAgd2l0aGRyYXdhbEVycm9yLFxyXG4gICAgICBjaGFuZ2VOYW1lRG9uZSxcclxuICAgICAgY2hhbmdlTmFtZUVycm9yLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBoYW5kbGVPayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7IHBhc3N3b3JkLCB1c2VyIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW3Bhc3N3b3JkLCB1c2VyXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHNldENoYW5nZVBhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgc2V0Q2hhbmdlTmlja25hbWUoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Q2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7IG5ld1Bhc3N3b3JkLCB1c2VyIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtuZXdQYXNzd29yZCwgdXNlcl0pO1xyXG5cclxuICAgIGNvbnN0IG9uc3VibWl0Q2hhbmdlTmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENIQU5HRV9OQU1FX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogeyBuZXdOYW1lLCBVc2VySWQ6IHVzZXI/LmlkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW25ld05hbWUsIHVzZXJdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdFdpdGhkcmF3YWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBXSVRIRFJXQUxfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB1c2VyPy5pZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlVzZXIgSW5mb21hdGlvblwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25Paz17XHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmRcclxuICAgICAgICAgICAgPyBjaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgICAgID8gb25TdWJtaXRDaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgICAgIDogY2hhbmdlTmlja25hbWVcclxuICAgICAgICAgICAgICA/IG9uc3VibWl0Q2hhbmdlTmFtZVxyXG4gICAgICAgICAgICAgIDogb25TdWJtaXRXaXRoZHJhd2FsXHJcbiAgICAgICAgICAgIDogaGFuZGxlT2tcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb25maXJtUGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICBjaGFuZ2VQYXNzd29yZCA/IChcclxuICAgICAgICAgICAgPEZvcm0gbmFtZT1cIm5lc3QtbWVzc2FnZXNcIiBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiBmYWxzZSB9fT5cclxuICAgICAgICAgICAgICA8cD5QbGVhc2Ugd3JpdGUgeW91ciBuZXcgcGFzc3dvcmQuPC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIlBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCB2YWx1ZT17bmV3UGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZU5ld1Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJDb25maXJtXCJcclxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcz17W1wiUGFzc3dvcmRcIl19XHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoXCJQYXNzd29yZFwiKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApIDogY2hhbmdlTmlja25hbWUgPyAoXHJcbiAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJuZXN0LW1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPHA+UGxlYXNlIHdyaXRlIHlvdXIgbmV3IG5pY2tuYW1lLjwvcD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuYW1lXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17bmV3TmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmV3TmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGgyPldvdWxkIHlvdSByZWFsbHkgbGlrZSB0byB3aXRoZHJhdz8g8J+YvzwvaDI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPkNvbmZpcm0geW91ciBwYXNzd29yZC48L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oSW5mb01vZGFsKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCB7IERpdmlkZXIsIFBvcG92ZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgSW5mb01vZGFsIGZyb20gXCIuL0Jsb2cvUHJvZmlsZS9JbmZvTW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyRGl2aWRlciA9IHN0eWxlZChEaXZpZGVyKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlcjogRkMgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlUGFzc3dvcmQsIHNldENoYW5nZVBhc3N3b3JkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlTmlja25hbWUsIHNldENoYW5nZU5pY2tuYW1lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tOaWNrbmFtZUJ0biA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIGluLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2hvd01vZGFsKCk7XHJcbiAgICBzZXRDaGFuZ2VOaWNrbmFtZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNvY2lhbF9jb250ZW50ID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2NvbnRlbnRcIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxsaT4tIEdpdDwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FsbW9uY2hvYmFiL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICA8bGk+LSBJbnN0YWdyYW08L2xpPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgY29uc3QgaW5mb19jb250ZW50ID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2NvbnRlbnRcIj5cclxuICAgICAgPGFcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIk9ubHkgZm9yIHVzZXIgd2hvIHNpZ25lZCBpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmQoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bGk+LSBXaXRoZHJhd2FsPC9saT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIGluLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHVzZXIuZ29vZ2xlSWQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIk9ubHkgZm9yIHVzZXIgd2hvIHNpZ25lZCB1cCB3aXRoIGhvbWUtcGFnZSBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmQodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxsaT4tIENoYW5nZSBQYXNzd29yZDwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgb25DbGljaz17b25DbGlja05pY2tuYW1lQnRufT5cclxuICAgICAgICA8bGk+LSBDaGFuZ2UgTmlja25hbWU8L2xpPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgY29uc3QgcXVpY2t2aWV3X2NvbnRlbnQgPSAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfY29udGVudFwiPlxyXG4gICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gSG9tZTwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL3RlY2hcIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gSW5mbyBUZWNoPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17XCIvZGFpbHlcIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gRGFpbHk8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+LSBLb3JlYW4gQ2xhc3M8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJibG9nX2Zvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2PuKTkiAyMDIxLCBKYW5nIEh5dW4gU29vLiBBbGwgUmlnaHRzIFJlc3J2ZWQuPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2xpc3RcIj5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpb1wifT5cclxuICAgICAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8Rm9vdGVyRGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgPFBvcG92ZXIgY29udGVudD17cXVpY2t2aWV3X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGE+UXVpY2sgdmlldzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgIDxGb290ZXJEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtzb2NpYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YT5Tb2NpYWwgTWVkaWE8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICA8Rm9vdGVyRGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwidG9wUmlnaHRcIiBjb250ZW50PXtpbmZvX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGE+SW5mb21hdGlvbjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEluZm9Nb2RhbFxyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlPXtzZXRJc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZD17c2V0Q2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgc2V0Q2hhbmdlTmlja25hbWU9e3NldENoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBjaGFuZ2VQYXNzd29yZD17Y2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgY2hhbmdlTmlja25hbWU9e2NoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEZvb3Rlcik7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gXCIuLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCBCbG9nSGVhZGVyIGZyb20gXCIuL0Jsb2cvSGVhZGVycy9CbG9nSGVhZGVyXCI7XHJcbmltcG9ydCBCbG9nU21hbGxIZWFkZXIgZnJvbSBcIi4vQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9CbG9nU21hbGxIZWFkZXJcIjtcclxuaW1wb3J0IHsgbmF2Q29udGVudHMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQb3J0Zm9saW9IZWFkZXIgfSBmcm9tIFwiLi9CbG9nL0hlYWRlcnMvUG9ydGZvbGlvSGVhZGVyXCI7XHJcbmNvbnN0IExvZ29NYWluID0gc3R5bGVkLmltZ2BcclxuICAmOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbRml4ZWROYXZiYXIsIHNldEZpeGVkTmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGhlYWRlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciwgbG9nT3V0RG9uZSwgbG9nT3V0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ2FsbEJhY2soKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAyNzUpIHtcclxuICAgICAgICBzZXRGaXhlZE5hdmJhcih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRGaXhlZE5hdmJhcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ091dERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiTG9nIG91dCBpcyBkb25lLCBUaGFuayB5b3UgZm9yIHZpc2l0aW5nLlwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ091dEVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmV4cGVjdGVkIEVyb3JyISBwbGVhc2UgdHJ5IGFnYWluIG9yIGZlZWRiYWNrIHRvIHVzXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtsb2dPdXREb25lLCBsb2dPdXRFcnJvcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZV9zbWFsbF9vblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2xvZ29cIj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPExvZ29NYWluIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvaW1hZ2VzL2Jsb2cvbG9nb19tYWluLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbG9nb3V0XCIgb25DbGljaz17b25DbGlja0xvZ091dH0+XHJcbiAgICAgICAgICAgIExvZyBvdXQgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuM3JlbVwiIH19IGljb249e2ZhU2lnbk91dEFsdH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5fbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIExvZ2luICYgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25JbkFsdH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLm5vYWh3b3JsZC5zaXRlL2F1dGgvZ29vZ2xlXCIgY2xhc3NOYW1lPVwiYnRuX2dvb2dsZVwiPlxyXG4gICAgICAgICAgICAgIEdvb2dsZSBMb2dpbntcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJnb29nbGVfaWNvblwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2ZsdWVudC80OC8wMDAwMDAvZ29vZ2xlLWxvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e0ZpeGVkTmF2YmFyID8gXCJibG9nX2hlYWRlcl9uYXYgZml4ZWRcIiA6IFwiYmxvZ19oZWFkZXJfbmF2IHN0YXRpY1wifT5cclxuICAgICAgICB7aGVhZGVyID09PSBcImJsb2dcIiA/IDxCbG9nSGVhZGVyIC8+IDogPFBvcnRmb2xpb0hlYWRlciBuYXZDb250ZW50cz17bmF2Q29udGVudHN9IC8+fVxyXG4gICAgICA8L25hdj5cclxuICAgICAgPEJsb2dTbWFsbEhlYWRlciAvPlxyXG4gICAgICB7Rml4ZWROYXZiYXIgPyA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI3MHB4XCIgfX0gLz4gOiBudWxsfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlYWRlcik7XHJcbiIsImltcG9ydCB7IGZhQWRkcmVzc0NhcmQsIGZhRW52ZWxvcGUsIGZhSW1hZ2VzLCBmYUxhcHRvcCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEpTWEVsZW1lbnRDb25zdHJ1Y3RvciwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb25maWdcclxuZXhwb3J0IGNvbnN0IEJBQ0tFTkRfVVJMID0gXCJodHRwczovL2FwaS5ub2Fod29ybGQuc2l0ZVwiO1xyXG5cclxuLy8gQ29sb3JcclxuXHJcbmV4cG9ydCBjb25zdCBCTFVFX0NPTE9SID0gXCIjMTE4N2NmXCI7XHJcbmV4cG9ydCBjb25zdCBNQUlOX0NPTE9SID0gXCIjRDVGN0U2XCI7XHJcbmV4cG9ydCBjb25zdCBTVUJfQ09MT1IgPSBcIiM1QUU0QThcIjtcclxuZXhwb3J0IGNvbnN0IEdSQVlfQ09MT1IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xyXG5leHBvcnQgY29uc3QgQkdfQ09MT1IgPSBcInJnYigyNDcsIDI0NywgMjQ3KVwiO1xyXG5leHBvcnQgY29uc3QgUkVEX0NPTE9SID0gXCIjZjE1YjZjXCI7XHJcblxyXG4vLyBNYWlucGFnZSBEZXNjXHJcblxyXG5leHBvcnQgY29uc3QgQ0FSRF9ERVNDX1BTID1cclxuICBcIuyDiOuhnOyatCDquLDsiKDsnYQg67Cw7Jqw6riw7KCEIO2VreyDgSDsnpDsi6DsnZgg6riw67O46riw66W8IOygkOqygO2VqeuLiOuLpC4g65iQ7ZWcIOusuOygnOulvCDsoJXtmZXtlZjqsowg7J247Iud7ZWY6rOgIOuwsOyasOqzoCDquLDroZ3tlanri4jri6QuXCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0RFU0NfQ09NVSA9XHJcbiAgXCLtjIDsm4ztgazrpbwg7LWc7Jqw7ISg7Jy866GcIOyXrOq4sOupsCDshozthrXsnYQg7KSR7Ius7Jy866GcIOunpOyInOqwhCDsi6DrorDsnZgg6riw67CY7J2EIOuLpOynkeuLiOuLpC5cIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfREVTQ19DT09QID1cclxuICBcIuy9lOuUqSDsnpDssrTrpbwg7KaQ6riw66mwIOunpOyInOqwhCDsl7TsoJXsnYQg6rCA7KeA6rOgIOqzoOu5hOulvCDrhJjsnLzrqbAg64u064u07ZWY6rKMIOuPhOyghO2VqeuLiOuLpC5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudHMgPSBbXHJcbiAge1xyXG4gICAgc3F1YXJlVGl0bGU6IFwiUHJvYmxlbVNvbHZlXCIsXHJcbiAgICB0aXRsZTogXCLrrLjsoJztlbTqsrDriqXroKXsnYQg7JyE7ZWcIOq4sOuzuOq4sFwiLFxyXG4gICAgZGVzYzogQ0FSRF9ERVNDX1BTLFxyXG4gICAgc3JjOiBcIi9pbWFnZXMvUHJvYmxlbVNvbHZlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3F1YXJlVGl0bGU6IFwiQ29vcGVyYXRpb25cIixcclxuICAgIHRpdGxlOiBcIuyLoOuisOyXkOyEnCDsmKTripQg7KeE7KCV7ZWcIOyGjO2GtVwiLFxyXG4gICAgZGVzYzogQ0FSRF9ERVNDX0NPTVUsXHJcbiAgICBzcmM6IFwiL2ltYWdlcy9Db29wZXJhdGlvbi5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNxdWFyZVRpdGxlOiBcIlBhc3Npb25cIixcclxuICAgIHRpdGxlOiBcIuyXtOyglSDqt7jrpqzqs6Ag64+E7KCEXCIsXHJcbiAgICBkZXNjOiBDQVJEX0RFU0NfQ09PUCxcclxuICAgIHNyYzogXCIvaW1hZ2VzL1Bhc3Npb24ucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIE5hdiBDb250ZW50c1xyXG5leHBvcnQgY29uc3QgbmF2Q29udGVudHMgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogZmFBZGRyZXNzQ2FyZCxcclxuICAgIGV4cGxhaW46IFwiQWJvdXQgbWVcIixcclxuICAgIG5hbWU6IFwiYWJvdXRtZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogZmFMYXB0b3AsXHJcbiAgICBleHBsYWluOiBcIlNraWxsc1wiLFxyXG4gICAgbmFtZTogXCJza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IGZhSW1hZ2VzLFxyXG4gICAgZXhwbGFpbjogXCJQb3J0Zm9saW9cIixcclxuICAgIG5hbWU6IFwicG9ydGZvbGlvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBmYUVudmVsb3BlLFxyXG4gICAgZXhwbGFpbjogXCJDb250YWN0XCIsXHJcbiAgICBuYW1lOiBcImNvbnRhY3RcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gU2tpbGwgcGFnZVxyXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSHRtbCAmIENTU1wiLFxyXG4gICAgc3JjOiBcIi4vaW1hZ2VzL0h0bWxDc3MucG5nXCIsXHJcbiAgICBkZXNjOiBcIuybue2RnOykgCAsIERPTS10cmVlICwg67CY7J2R7ZiV7Ju56rO8IOu4jOudvOyasOyggCDroIzrlKkg7Yq57ISx7J2EIO2MjOyVhe2VmOupsCBDU1PsnZgg64uk7LGE66Gc7Jq0IOyVoOuLiOuplOydtOyFmOqzvCDrjZTrtojslrQg7KCE7LmY66as6riwIOyCrOyaqeydtCDqsIDriqXtlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC90eXBlc2NyaXB0LnBuZ1wiLFxyXG4gICAgZGVzYzogXCJFUzYg7LWc7Iug66y467KV6rO8IOyLpO2Wiey7qO2FjeyKpO2KuCztgbTroZzsoIAs7J2067Kk7Yq466Oo7ZSE65OxIOuPhe2Kue2VnCBKU+2KueyEseydhCDtj63rhJPqsowg7J207ZW07ZWY66mwLCDrjIDshLjsnbgg7YOA7J6F7Iqk7YGs66a97Yq466W8IOyggeq3uSDtmZzsmqntlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvcmVhY3QtbmF0aXZlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJIb29rcyDrrLjrspUsIFJvdXRlcuyggeyaqSwgUmVkdXjsmYAg67mE64+Z6riw66W8IOychO2VnCBzYWdhLCB0aHVuayDrmJDripQgTW9iWCDrk7Hrk7Eg7Jes65+sIOudvOydtOu4jOufrOumrOulvCDsnZHsmqntlZjrqbAg66CM642U66eB7LWc7IaM7ZmUIOuwjyDsg53rqoXso7zquLDqsJnsnYAgUmVhY3TsnZggU1BBIO2KueyEseydhCDsnbTtlbTtlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTmV4dC5qc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2tvLWtyL3dpbmRvd3MvaW1hZ2VzL25leHRqcy1sb2dvLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJTRU/snZgg7Zqo7Jyo7ISx7J2EIOuGkuydtOuKlCBOZXh0Lmpz7J2YIFNTUiDtirnshLHsnYQg7J207ZW07ZWY66mwLCBTUEEg7JmAIFNTUiDrpbwg7J6l64uo7KCQ6rO8IO2KueyEseydhCDtjIzslYXtlZjquLAg7JyE7ZW0IOuFuOugpe2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNeXNxbFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLWZpbGxlZC8xMDAvMDAwMDAwL215c3FsLWxvZ28ucG5nXCIsXHJcbiAgICBkZXNjOiBcIuyLnO2AhOudvOydtOymiCAmIOybjO2BrOuypOy5mOulvCDsgqzsmqntlZjrqbAsIOyKpO2CpOuniCDsoJXsnZjsmYAg7L2Y7IaUIOuqheugueyWtCwg6re466as6rOgIOuNsOydtO2EsOuyoOydtOyKpCDqtIDqs4Trj4Trpbwg7J207ZW07ZW0IOuNsOydtO2EsOulvCDtmqjsnKjsnojqsowg6rSA66as7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkdpdFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vbm9sYW4vMTI4L2dpdGh1Yi5wbmdcIixcclxuICAgIGRlc2M6IFwi7ZiV7IOB6rSA66as7J2YIOq4sOuzuOybkOumrOyZgCDrsoTsoITqtIDrpqws67iM656c7LmYLOuwseyXheuTseydhCDsoIHqt7kg7Zmc7Jqp7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJfc2tpbGxzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiU0NTU1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9zYXNzLWF2YXRhci5wbmdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBeGlvc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vbWVkaWEtZXhwMS5saWNkbi5jb20vZG1zL2ltYWdlL0M0RTBCQVFHbE4zUkp2S213RWcvY29tcGFueS1sb2dvXzIwMF8yMDAvMC8xNTcxMjUzNDQ4ODE4P2U9MjE1OTAyNDQwMCZ2PWJldGEmdD1WWWZyU296cTNrU3c1XzQwNHRSNHhZRk1IMHVGUU5tUU5yd2VRY0prYkd3XCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwcmVzc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vd3d3Lm1lbWVudG90ZWNoLmluL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZXhwcmVzcy5wbmdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHcmFwaFFMXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL2dyYXBocWwucG5nXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQW50ZFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LRHBndmd1TXBHZnFhSFBqaWNSSy5zdmdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTdHlsZWQtY29tcG9uZW50c1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMDY1ODgyNT9zPTI4MCZ2PTRcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJFbW90aW9uLmpzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMTYwMC8xKmdHelJtVUtOT0NfWDdrbEZqVGs4RUEucG5nXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQVdTXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzUyY2EzYjczZTRiMDRhNDVlZjJjNWNiNi8xNTUxODg0ODYxMzMxLUM5VTJSSEpRTE9QTDlGMzMyWDVPL2tlMTdad2RHQlRvZGRJOHBEbTQ4a0s2eDhJT2h6WF9yVHRRR0tZMXFwLWhady16UFBnZG40alV3VmNKRTFadldoY3doRXRXSlhvc2hOZEE5ZjFxRDdYYUdQc2tmUXRWdXR1U0EyQi1KVzZ3a3FxVjAyNFhQLTA1OURQNndSWXFZVlVHTXpzQnhUbzJVbGtacTEwR1RyZy9BV1NfYmxvZ18wMS5QTkdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQYXNzcG9ydC5qc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vbGVvbGFuY2hhcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDcvMGQxODRlZTMtZmQ4ZC00Yjk0LWFjZjQtYjRlNjg2ZTU3Mzc1LnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOZ2lueFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9uZ2lueC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFiZWxcIixcclxuICAgIHNyYzogXCJodHRwczovL2Nkbi5pbWdiaW4uY29tLzgvNC8yMi9pbWdiaW4tc291cmNlLXRvLXNvdXJjZS1jb21waWxlci1qYXZhc2NyaXB0LWVjbWFzY3JpcHQtbm9kZS1qcy10aGF0LXMtS2Z0OUs0bkU5WUhyTXA2c2RxMEJRMDljSy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV2VicGFja1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdDEuZGF1bWNkbi5uZXQvY2ZpbGUvdGlzdG9yeS85OTlBRjU0QjVCOTNENzhDMjVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUG9zdG1hblwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC81MTIvMSpmVkJMOW10TEptSElINllwVTdXdkhRLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuICB7XHJcbiAgICBrZXk6IFwiMVwiLFxyXG4gICAgbmFtZTogXCLthqDsnbVcIixcclxuICAgIGRhdGU6IDIwMTgsXHJcbiAgICBzdW1tYXJ5OiBcIuyYgeyWtCDsnpDqsqnspp0gKOq4sOqwhOunjOujjClcIixcclxuICAgIHNjb3JlOiBcIjkyNVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjJcIixcclxuICAgIG5hbWU6IFwi66ek7J286rK97KCc7YWM7Iqk7Yq4XCIsXHJcbiAgICBkYXRlOiAyMDE4LFxyXG4gICAgc3VtbWFyeTogXCLqsr3soJws6rK97JiB6rSA66CoIOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjNcIixcclxuICAgIG5hbWU6IFwi6rWt7Jm47Jes7ZaJ7J247IaU7J6QIOyekOqyqeymnVwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7ZW07Jm47JeQ7IScIOyduOygle2VmOuKlCDtlZzqta3qtIDqtJHtmJHtmozsnZgg6rWt7Jm4IOyduOyGlOyekCAg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNFwiLFxyXG4gICAgbmFtZTogXCJKTFBUXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLsnbzrs7jslrQg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCIx6riJXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNVwiLFxyXG4gICAgbmFtZTogXCLsnbzrs7jslrQg7Ya17Jet7JWI64K07IKsIOyekOqyqeymnVwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7ZWc6rWt7IKsMeq4ieyXkCDspIDtlZjrqbAg7J2867O47Ja0IO2GteuyiOyXrSDriqXroKXsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOyghOusuOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjZcIixcclxuICAgIG5hbWU6IFwi7JiB7Ja0IO2GteyXreyViOuCtOyCrCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMjAsXHJcbiAgICBzdW1tYXJ5OiBcIu2VnOq1reyCrDHquInsl5Ag7KSA7ZWY66mwIOyYgeyWtCDthrXrsojsl60g64ql66Cl7J2EIOyeheymne2VmOuKlCDqta3qsIDsoITrrLjsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI3XCIsXHJcbiAgICBuYW1lOiBcIuygleuztOyymOumrOq4sOyCrFwiLFxyXG4gICAgZGF0ZTogMjAyMSxcclxuICAgIHN1bW1hcnk6IFwiSVTqtIDroKgg7IaM7JaR7J2EIOyeheymne2VmOuKlCDqta3qsIDquLDsiKDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI4XCIsXHJcbiAgICBuYW1lOiBcIu2VmeygkOydgO2WieygnCDqsr3smIHtlZnsgqxcIixcclxuICAgIGRhdGU6IDIwMjEsXHJcbiAgICBzdW1tYXJ5OiBcIjIwMjHrhYQgNuyblCDsobjsl4XsmIjsoJVcIixcclxuICAgIHNjb3JlOiBcIu2VmeyCrFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJOYW1lXCIsXHJcbiAgICBkYXRhSW5kZXg6IFwibmFtZVwiLFxyXG4gICAga2V5OiBcIm5hbWVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRhdGVcIixcclxuICAgIGRhdGFJbmRleDogXCJkYXRlXCIsXHJcbiAgICBrZXk6IFwiZGF0ZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU3VtbWFyeVwiLFxyXG4gICAgZGF0YUluZGV4OiBcInN1bW1hcnlcIixcclxuICAgIGtleTogXCJzdW1tYXJ5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTY29yZVwiLFxyXG4gICAgZGF0YUluZGV4OiBcInNjb3JlXCIsXHJcbiAgICBrZXk6IFwic2NvcmVcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy9Qb3J0Zm9saW9cclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJNeSBTZW91bCBHdWlkZVwiLFxyXG4gICAgZGF0ZTogXCIyMDIxLzR+IDIwMjEvNVwiLFxyXG4gICAgdGFnczogW1wiI1R5cGVTY3JpcHRcIiwgXCIjUmVhY3RcIiwgXCIjRW1vdGlvblwiLCBcIiNHcmFwaFFMXCJdLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzc0ODY0OTI1LzEyMDEyMTMxNS1iNDMxNjAwMC1jMWRkLTExZWItOWY5Yi0wOGM0NTIyOWM3ZTgucG5nXCIsXHJcbiAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTAvTXktU2VvdWwtR3VpZGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJOb2FoIHdvcmxkIEJsb2dcIixcclxuICAgIGRhdGU6IFwiMjAyMS8yfiAyMDIxLzRcIixcclxuICAgIHRhZ3M6IFtcIiNUeXBlU2NyaXB0XCIsIFwiI1JlYWN0XCIsIFwiI05leHQuanNcIiwgXCIjTXlzcWxcIiwgXCIjQVdTXCJdLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzc0ODY0OTI1LzEyMDEyMTMxNi1iNTYyOGQwMC1jMWRkLTExZWItODdmMi1kYTA5OTk1NmM3MjUucG5nXCIsXHJcbiAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTAvTmV4dF9Ob2FoV29ybGRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJNb3ZpZSBBcHAgKENsb25lIENvZGluZylcIixcclxuICAgIGRhdGU6IFwiMjAyMC8xMn4gMjAyMS8xXCIsXHJcbiAgICB0YWdzOiBbXCIjSmF2YXNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNOb2RlLmpzXCIsIFwiI01vbmdvREJcIl0sXHJcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvX21vdmllLmpwZ1wiLFxyXG4gICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwL1JlYWN0X01vdmllLUFwcFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgZGF0ZTogXCIyMDIxLzF+IDIwMjEvMlwiLFxyXG4gICAgdGFnczogW1wiI0hUTUxcIiwgXCIjQ1NTXCIsIFwiI0phdmFzY3JpcHRcIiwgXCIjUmVhY3RcIiwgXCIjQXRuZFwiXSxcclxuICAgIHNyYzogXCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS83NDg2NDkyNS8xMjAxMjE3MDQtZWE2ZmRmMDAtYzFkZi0xMWViLTkyZjUtNWY3NGU4MWUyNDlkLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3NcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCI7XG5pbXBvcnQgXCJAdG9hc3QtdWkvZWRpdG9yL2Rpc3QvdG9hc3R1aS1lZGl0b3IuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL0BzdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHsgY3NzLCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtdGFibGUtcGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExODdjZiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5hbnQtZGl2aWRlci13aXRoLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KHsgc3RhcnRFdmVudDogXCJsb2FkXCIgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydCk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBlbmQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ob2FoIHdvcmxkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNzcz17bG9hZGluZ1NjcmVlbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2VyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSW5wdXQoaW5pdGlhbFZhbHVlOiBhbnkpIHtcclxuICBjb25zdCBbVmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW1ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUb2dnbGUoaW5pdGlhbFZhbHVlOiBCb29sZWFuKSB7XHJcbiAgY29uc3QgW1ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZSgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW1ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV0gYXMgY29uc3Q7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21vZGFsL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbHNweVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==