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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");







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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXEJsb2dIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QyIsImZpbGUiOiJDOlxcVXNlcnNcXE5vYWhcXERlc2t0b3BcXFByb2plY3RcXE5vYWh3b3JsZFxcY2xpZW50XFxjb21wb25lbnRzXFxCbG9nXFxIZWFkZXJzXFxCbG9nSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvYmxvZ1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB3aWR0aDogMzAlO1xyXG4gIHotaW5kZXg6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEJsb2dIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2tleXdvcmQsIG9uQ2hhbmdlS2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBvblNlYXJjaENvbnRlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoa2V5d29yZC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJLZXl3b3JkIGlzIHJlcXVpcmVkIHRvIGhhdmUgbW9yZSB0aGVuIDEgbGV0dGVyXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsga2V5d29yZCB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoa2V5d29yZC5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZC5zbGljZSgxKX1gKTtcclxuICAgICAgc2V0S2V5d29yZChcIlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkfWApO1xyXG4gICAgc2V0S2V5d29yZChcIlwiKTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfdWxcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRtZVwiPlxyXG4gICAgICAgICAgICA8YT5BYm91dCBtZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWNoXCI+XHJcbiAgICAgICAgICAgIDxhPkluZm8gVGVjaDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYWlseVwiPlxyXG4gICAgICAgICAgICA8YT5EYWlseTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jbGFzc1wiPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICBLb3JlYW4gQ2xhc3MgZm9yICZuYnNwO1xyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEuNXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJqYXBhbl9mbGFnXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvNDgvMDAwMDAwL2phcGFuLnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxTZWFyY2hJbnB1dCB2YWx1ZT17a2V5d29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlS2V5d29yZH0gb25TZWFyY2g9e29uU2VhcmNoQ29udGVudH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhCbG9nSGVhZGVyKTtcclxuIl19 */",
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
    href: "/aboutme",
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
  }, "About me"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/tech",
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
  }, "Info Tech"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/daily",
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
  }, "Daily"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", {
    className: "blog_header_li",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Korean Class for \xA0", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
    style: {
      width: "1.5rem"
    },
    alt: "japan_flag",
    src: "https://img.icons8.com/color/48/000000/japan.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(SearchInput, {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNoVGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaFRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const HeaderLogo = false ? undefined : {
  name: "wgqnbc-HeaderLogo",
  styles: "display:flex;align-items:center;height:70px;.logo_span{color:black;margin-left:0.5rem;font-weight:bold;font-size:1.3rem;};label:HeaderLogo;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNoVGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaFRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const TitleArrow = false ? undefined : {
  name: "16ux2xo-TitleArrow",
  styles: "display:flex;align-items:center;width:100%;height:70px;label:TitleArrow;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcQmxvZ1NtYWxsSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNoVGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaFRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiJdfQ== */",
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
        tags: post === null || post === void 0 ? void 0 : post.HashTags
      }
    });
  }, [dispatch, password, post === null || post === void 0 ? void 0 : post.HashTags, post === null || post === void 0 ? void 0 : post.id]);
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQjRCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVNZW51LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IG1hcmdpbkNTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlTWVudVByb3BzIHtcclxuICBvbkNsaWNrU2VhcmNoRm9ybTogKCkgPT4gdm9pZDtcclxuICB1c2VyOiBVc2VySW50ZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlTWVudVdyYXBwZXIgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIHVsOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVNZW51OiBGQzxTbGlkZU1lbnVQcm9wcz4gPSBtZW1vKCh7IG9uQ2xpY2tTZWFyY2hGb3JtLCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25DbGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtTbGlkZU1lbnVXcmFwcGVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxoMiBjc3M9e21hcmdpbkNTUygwLCAwLCBcIjFyZW1cIiwgMCl9PkJsb2c8L2gyPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPi0gSG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi90ZWNoXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIEluZm8gVGVjaDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9kYWlseVwifT5cclxuICAgICAgICAgICAgPGE+LSBEYWlseTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2VfbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPi0gS29yZWFuIENsYXNzIGZvciAmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNoRm9ybX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgLSBTZWFyY2ggPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19IGljb249e2ZhU2VhcmNofSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8aDIgY3NzPXttYXJnaW5DU1MoMCwgMCwgXCIxcmVtXCIsIDApfT5EaXJlY3QgTGluazwvaDI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fib3V0bWVcIn0+XHJcbiAgICAgICAgICAgIDxhPi0gQWJvdXQgbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgb25DbGljaz17b25DbGlja01lbnV9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9ydGZvbGlvXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIFBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NhbG1vbmNob2JhYi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIC0gSW5zdGFncmFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIC0gR2l0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xvZ091dH0+XHJcbiAgICAgICAgICAgICAgLSBMb2cgb3V0IDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25PdXRBbHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja01lbnV9PlxyXG4gICAgICAgICAgICAgICAgLSBMb2cgSW4gJiBTaWduIFVwe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuM3JlbVwiIH19IGljb249e2ZhU2lnbkluQWx0fSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNsaWRlTWVudSk7XHJcbiJdfQ== */",
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
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/aboutme",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "- About me"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
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
  }, "- Portfolio"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    href: "https://github.com/noah071610",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "- Git")), user ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    onClick: onClickLogOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 25
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    onClick: onClickMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 132,
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEhlYWRlcnNcXFNtYWxsSGVhZGVyc1xcU2xpZGVSZW1vdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCc0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcY29tcG9uZW50c1xcQmxvZ1xcSGVhZGVyc1xcU21hbGxIZWFkZXJzXFxTbGlkZVJlbW90ZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERvdWJsZUxlZnRPdXRsaW5lZCxcclxuICBEb3VibGVSaWdodE91dGxpbmVkLFxyXG4gIEVkaXRGaWxsZWQsXHJcbiAgSG9tZUZpbGxlZCxcclxuICBSb2xsYmFja091dGxpbmVkLFxyXG4gIFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZhVHJhc2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUG9zdEludGVyLCBVc2VySW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuaW1wb3J0IHsgUE9TVF9FRElUX09OIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVSZW1vdGVQcm9wcyB7XHJcbiAgc2hvd01vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIHBvc3Q6IFBvc3RJbnRlcjtcclxuICBwcmV2UG9zdDogUG9zdEludGVyW107XHJcbiAgbmV4dFBvc3Q6IFBvc3RJbnRlcltdO1xyXG4gIHVzZXI6IFVzZXJJbnRlcjtcclxufVxyXG5cclxuY29uc3QgbWFyZ2luWmVybyA9IGNzc2BcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5jb25zdCBTbGlkZVJlbW90ZTogRkM8U2xpZGVSZW1vdGVQcm9wcz4gPSBtZW1vKCh7IHNob3dNb2RhbCwgcG9zdCwgcHJldlBvc3QsIG5leHRQb3N0LCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25DbGlja0xpbmsgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJzbGlkZV90aXRsZVwiPlxyXG4gICAgICA8bGkgY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEhvbWVGaWxsZWQgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Py5jYXRlZ29yeSA9PT0gXCJjdWx0dXJlXCIgPyBcImNsYXNzXCIgOiBwb3N0Py5jYXRlZ29yeX1gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8Um9sbGJhY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIHtuZXh0UG9zdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7bmV4dFBvc3RbMF0/LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPERvdWJsZUxlZnRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIiB9fSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlua30gY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICB7cHJldlBvc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Py5jYXRlZ29yeX0vcG9zdC8ke3ByZXZQb3N0WzBdPy5pZH1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPERvdWJsZVJpZ2h0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIiB9fSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfT5cclxuICAgICAgICAgIDxWZXJ0aWNhbEFsaWduVG9wT3V0bGluZWQgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIHt1c2VyPy5hZG1pbiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8bGkgY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRURJVF9PTixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW5cIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxFZGl0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNofSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2xpZGVSZW1vdGUpO1xyXG4iXX0= */",
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
      top: 0,
      behavior: "smooth"
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYVNpZ25PdXRBbHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tIFwiLi4vQHJlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgQmxvZ0hlYWRlciBmcm9tIFwiLi9CbG9nL0hlYWRlcnMvQmxvZ0hlYWRlclwiO1xyXG5pbXBvcnQgQmxvZ1NtYWxsSGVhZGVyIGZyb20gXCIuL0Jsb2cvSGVhZGVycy9TbWFsbEhlYWRlcnMvQmxvZ1NtYWxsSGVhZGVyXCI7XHJcbmltcG9ydCB7IG5hdkNvbnRlbnRzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUG9ydGZvbGlvSGVhZGVyIH0gZnJvbSBcIi4vQmxvZy9IZWFkZXJzL1BvcnRmb2xpb0hlYWRlclwiO1xyXG5jb25zdCBMb2dvTWFpbiA9IHN0eWxlZC5pbWdgXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMC41cztcclxuICAgIGFuaW1hdGlvbjogcHVsc2UgMC41cztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW0ZpeGVkTmF2YmFyLCBzZXRGaXhlZE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBoZWFkZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5ibG9nKTtcclxuICBjb25zdCB7IHVzZXIsIGxvZ091dERvbmUsIGxvZ091dEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNjcm9sbENhbGxCYWNrKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMjc1KSB7XHJcbiAgICAgICAgc2V0Rml4ZWROYXZiYXIodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Rml4ZWROYXZiYXIoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dPdXREb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkxvZyBvdXQgaXMgZG9uZSwgVGhhbmsgeW91IGZvciB2aXNpdGluZy5cIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2dPdXRFcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiVW5leHBlY3RlZCBFcm9yciEgcGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbbG9nT3V0RG9uZSwgbG9nT3V0RXJyb3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2Vfc21hbGxfb25cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9sb2dvXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxMb2dvTWFpbiBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2ltYWdlcy9ibG9nL2xvZ29fbWFpbi5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xvZ2lub3V0XCIgb25DbGljaz17b25DbGlja0xvZ091dH0+XHJcbiAgICAgICAgICAgIExvZyBvdXQgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuM3JlbVwiIH19IGljb249e2ZhU2lnbk91dEFsdH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xvZ2lub3V0XCI+XHJcbiAgICAgICAgICAgICAgTG9nIEluICYgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC4zcmVtXCIgfX0gaWNvbj17ZmFTaWduSW5BbHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e0ZpeGVkTmF2YmFyID8gXCJibG9nX2hlYWRlcl9uYXYgZml4ZWRcIiA6IFwiYmxvZ19oZWFkZXJfbmF2IHN0YXRpY1wifT5cclxuICAgICAgICB7aGVhZGVyID09PSBcImJsb2dcIiA/IDxCbG9nSGVhZGVyIC8+IDogPFBvcnRmb2xpb0hlYWRlciBuYXZDb250ZW50cz17bmF2Q29udGVudHN9IC8+fVxyXG4gICAgICA8L25hdj5cclxuICAgICAgPEJsb2dTbWFsbEhlYWRlciAvPlxyXG4gICAgICB7Rml4ZWROYXZiYXIgPyA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI3MHB4XCIgfX0gLz4gOiBudWxsfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlYWRlcik7XHJcbiJdfQ== */",
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
    className: "blog_header_loginout",
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
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    className: "blog_header_loginout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Log In & Sign Up", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignInAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("nav", {
    className: FixedNavbar ? "blog_header_nav fixed" : "blog_header_nav static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, header === "blog" ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_BlogHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 30
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_PortfolioHeader__WEBPACK_IMPORTED_MODULE_12__["PortfolioHeader"], {
    navContents: _config__WEBPACK_IMPORTED_MODULE_10__["navContents"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 47
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Blog_Headers_SmallHeaders_BlogSmallHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), FixedNavbar ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    style: {
      height: "70px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 22
    }
  }) : null);
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Header));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: BACKEND_URL, BLUE_COLOR, MAIN_COLOR, SUB_COLOR, GRAY_COLOR, BG_COLOR, RED_COLOR, CARD_DESC_PS, CARD_DESC_COMU, CARD_DESC_COOP, CardContents, navContents, skills, sub_skills, eng_desc, jap_desc, languages, dataSource, columns, portfolios */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eng_desc", function() { return eng_desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jap_desc", function() { return jap_desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSource", function() { return dataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolios", function() { return portfolios; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\config.js";

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
const eng_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 3
  }
}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 5
  }
}, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }
}, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: TOEIC 925\uC810(2018\uB144 \uCDE8\uB4DD)"));
const jap_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 3
  }
}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }
}, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 5
  }
}, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: JLPT1\uAE09(2019\uB144 \uCDE8\uB4DD)"));
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
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\pages\\_app.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

















const reset = false ? undefined : {
  name: "7sxpf6-reset",
  styles: ".ant-row{margin-right:0!important;margin-left:0!important;}.ant-table-pagination{display:none!important;}p{margin:0.5rem auto;}h1,h2,h3{margin-top:0.5rem;margin-bottom:0.5rem;font-weight:600;}h2{font-size:1.1rem;}a{color:black;text-decoration:none;}blockquote{border-color:#1187cf!important;}.ant-divider{background-color:rgba(0, 0, 0, 0.1);}.ant-divider-with-text{background-color:rgba(0, 0, 0, 0);&::before,&::after{border-top:1px solid rgba(0, 0, 0, 0.1)!important;}};label:reset;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxfYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBb3MgZnJvbSBcImFvc1wiO1xuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBcImhpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLmNzc1wiO1xuaW1wb3J0IFwiY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5jc3NcIjtcbmltcG9ydCBcIkB0b2FzdC11aS9lZGl0b3IvZGlzdC90b2FzdHVpLWVkaXRvci5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vQHN0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgeyBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gIC5hbnQtcm93IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtdGFibGUtcGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIH1cbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1jb2xvcjogIzExODdjZiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbnQtZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5hbnQtZGl2aWRlci13aXRoLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgYVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgYVNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBhU2NyaXB0LnNyYyA9IFwiIGh0dHBzOi8vanMuc3RyaXBlLmNvbS92My9cIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGFTY3JpcHQpO1xuICAgIGFTY3JpcHQub25sb2FkID0gKCkgPT4ge307XG4gICAgQW9zLmluaXQoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgPEFwcExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function App({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src = " https://js.stripe.com/v3/";
    document.head.appendChild(aScript);

    aScript.onload = () => {};

    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Noah world")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["Global"], {
    styles: reset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }))));
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9Ac2FnYS9jb21tZW50LnRzIiwid2VicGFjazovLy8uL0BzYWdhL2luZGV4LnRzIiwid2VicGFjazovLy8uL0BzYWdhL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9Ac3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9BZG1pbi9BZG1pbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVycy9CbG9nSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVycy9Qb3J0Zm9saW9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9CbG9nU21hbGxIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9TbGlkZU1lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9TbGlkZVJlbW90ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9nL1Byb2ZpbGUvSW5mb01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2Vtb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi91dGlsL3VzZVRvZ2dsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0aGVtZSIsImhlYWRlciIsInByZVBvcnRmb2xpbyIsInBvc3RQb3J0Zm9saW8iLCJwb3N0cyIsIm9uQWJvdXQiLCJvblNpZ25VcFBhZ2UiLCJwb3N0RWRpdE9uIiwic2VhcmNoUG9zdHMiLCJoYXNodGFnUG9zdHMiLCJvblNsaWRlTWVudSIsIm9uSGVhZGVyVGl0bGUiLCJzZWFyY2hlZEtleXdvcmQiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmREb25lIiwic2VhcmNoS2V5d29yZEVycm9yIiwic2VhcmNoSGFzaFRhZ0xvYWRpbmciLCJzZWFyY2hIYXNoVGFnRG9uZSIsInNlYXJjaEhhc2hUYWdFcnJvciIsImFkZFF1aXpMb2FkaW5nIiwiYWRkUXVpekRvbmUiLCJhZGRRdWl6RXJyb3IiLCJNT0RFX0NIQU5HRSIsIkxPQURfUE9SVEZPTElPUyIsIkxPQURfUE9SVEZPTElPIiwiTE9BRF9QUkVQT1JURk9MSU8iLCJMT0FEX1BPU1RQT1JURk9MSU8iLCJDSEFHRV9IRUFERVIiLCJTV0lUQ0hfQUJPVVQiLCJPTl9BQk9VVCIsIk9GRl9BQk9VVCIsIk9OX1NJR05fVVBfUEFHRSIsIlJFTU9WRV9JTUFHRSIsIlBPU1RfRURJVF9PTiIsIlBPU1RfRURJVF9PRkYiLCJDTElDS19IQVNIX1RBRyIsIk9OX1NMSURFX01FTlUiLCJPTl9IRUFERVJfVElUTEUiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyIsIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUiLCJTRUFSQ0hfS0VZV09SRF9DTEVBUiIsIlNFQVJDSF9IQVNIX1RBR19SRVFVRVNUIiwiU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MiLCJTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSIsIlNFQVJDSF9IQVNIX1RBR19DTEVBUiIsIkFERF9RVUlaX1JFUVVFU1QiLCJBRERfUVVJWl9TVUNDRVNTIiwiQUREX1FVSVpfRkFJTFVSRSIsIkFERF9RVUlaX0NMRUFSIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwiYmxvZyIsInVzZXIiLCJ0ZWNoUG9zdHMiLCJkYWlseVBvc3RzIiwiY2xhc3NQb3N0cyIsImN1bHR1cmVQb3N0cyIsInF1aXp6ZXMiLCJ3b3JkcyIsImhhc2h0YWdzIiwibW9zdExpa2VkUG9zdCIsIm1vc3RWaWV3ZWRQb3N0IiwibW9zdENvbW1lbnRlZFBvc3QiLCJwcmV2UG9zdCIsIm5leHRQb3N0IiwiY291bnRQb3N0cyIsImltYWdlUGF0aCIsInBvc3RJbWFnZVBhdGgiLCJyZWNlbnRWaWV3UG9zdCIsInJlY2VudENvbW1lbnRQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nIiwidXBsb2FkUG9zdEltYWdlRG9uZSIsInVwbG9hZFBvc3RJbWFnZUVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImVkaXRQb3N0TG9hZGluZyIsImVkaXRQb3N0RG9uZSIsImVkaXRQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFJlY2VudFBvc3RzTG9hZGluZyIsImxvYWRSZWNlbnRQb3N0c0RvbmUiLCJsb2FkUmVjZW50UG9zdHNFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmciLCJsb2FkQ2F0ZWdvcnlQb3N0c0RvbmUiLCJsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yIiwibG9hZE1vcmVQb3N0c0xvYWRpbmciLCJsb2FkTW9yZVBvc3RzRG9uZSIsImxvYWRNb3JlUG9zdHNFcnJvciIsImxvYWRDbGFzc1Bvc3RzTG9hZGluZyIsImxvYWRDbGFzc1Bvc3RzRG9uZSIsImxvYWRDbGFzc1Bvc3RzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJlZGl0Q29tbWVudExvYWRpbmciLCJlZGl0Q29tbWVudERvbmUiLCJlZGl0Q29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VDb21tZW50TG9hZGluZyIsImxpa2VDb21tZW50RG9uZSIsImxpa2VDb21tZW50RXJyb3IiLCJ1bmxpa2VDb21tZW50TG9hZGluZyIsInVubGlrZUNvbW1lbnREb25lIiwidW5saWtlQ29tbWVudEVycm9yIiwiYWRkU3ViQ29tbWVudExvYWRpbmciLCJhZGRTdWJDb21tZW50RG9uZSIsImFkZFN1YkNvbW1lbnRFcnJvciIsImVkaXRTdWJDb21tZW50TG9hZGluZyIsImVkaXRTdWJDb21tZW50RG9uZSIsImVkaXRTdWJDb21tZW50RXJyb3IiLCJyZW1vdmVTdWJDb21tZW50TG9hZGluZyIsInJlbW92ZVN1YkNvbW1lbnREb25lIiwicmVtb3ZlU3ViQ29tbWVudEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19DTEVBUiIsIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSIsIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfQ0xFQVIiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUIiwiTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCIsIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTIiwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUiLCJFRElUX1BPU1RfUkVRVUVTVCIsIkVESVRfUE9TVF9TVUNDRVNTIiwiRURJVF9QT1NUX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ0xFQVIiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9DTEVBUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxJS0VfQ09NTUVOVF9SRVFVRVNUIiwiTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJMSUtFX0NPTU1FTlRfRkFJTFVSRSIsIlVOTElLRV9DT01NRU5UX1JFUVVFU1QiLCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTIiwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX1JFUVVFU1QiLCJFRElUX0NPTU1FTlRfU1VDQ0VTUyIsIkVESVRfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX0NMRUFSIiwiQUREX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1NVQl9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUIiwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUiIsImNhdGVnb3J5IiwidW5zaGlmdCIsImxlbmd0aCIsIm1vcmVUZWNoUG9zdHMiLCJjb25jYXQiLCJtb3JlUG9zdHMiLCJtb3JlRGFpbHlQb3N0cyIsImNsYXNzUG9zdHNfY2xhc3MiLCJjdWx0dXJlUG9zdHNfY2xhc3MiLCJDb21tZW50cyIsInB1c2giLCJQb3N0TGlrZXJzIiwiaWQiLCJVc2VySWQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIkNvbW1lbnRJZCIsImNvbnRlbnQiLCJuZXdDb21tZW50IiwiQ29tbWVudExpa2VycyIsIkNvbW1lbnRzV2l0aG91dERlbGV0ZWQiLCJTdWJDb21tZW50cyIsImZ1bGxTdWJDb21tZW50IiwiU3ViQ29tbWVudElkIiwiY29uZmlybVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ0luR29vZ2xlTG9hZGluZyIsImxvZ0luR29vZ2xlRG9uZSIsImxvZ0luR29vZ2xlRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibG9hZEluZm9Mb2FkaW5nIiwibG9hZEluZm9Eb25lIiwibG9hZEluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJhZGRJY29uTG9hZGluZyIsImFkZEljb25Eb25lIiwiYWRkSWNvbkVycm9yIiwicmVtb3ZlSWNvbkxvYWRpbmciLCJyZW1vdmVJY29uRG9uZSIsInJlbW92ZUljb25FcnJvciIsImNvbmZpcm1QYXNzd29yZExvYWRpbmciLCJjb25maXJtUGFzc3dvcmREb25lIiwiY29uZmlybVBhc3N3b3JkRXJyb3IiLCJ3aXRoZHJhd2FsTG9hZGluZyIsIndpdGhkcmF3YWxEb25lIiwid2l0aGRyYXdhbEVycm9yIiwiY2hhbmdlUGFzc3dvcmRMb2FkaW5nIiwiY2hhbmdlUGFzc3dvcmREb25lIiwiY2hhbmdlUGFzc3dvcmRFcnJvciIsImNoYW5nZU5hbWVMb2FkaW5nIiwiY2hhbmdlTmFtZURvbmUiLCJjaGFuZ2VOYW1lRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfSU5fQ0xFQVIiLCJMT0dfSU5fR09PR0xFX1JFUVVFU1QiLCJMT0dfSU5fR09PR0xFX1NVQ0NFU1MiLCJMT0dfSU5fR09PR0xFX0ZBSUxVUkUiLCJMT0dfSU5fR09PR0xFX0NMRUFSIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9DTEVBUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfQ0xFQVIiLCJMT0FEX0lORk9fUkVRVUVTVCIsIkxPQURfSU5GT19TVUNDRVNTIiwiTE9BRF9JTkZPX0ZBSUxVUkUiLCJBRERfSUNPTl9SRVFVRVNUIiwiQUREX0lDT05fU1VDQ0VTUyIsIkFERF9JQ09OX0ZBSUxVUkUiLCJBRERfSUNPTl9DTEVBUiIsIlJFTU9WRV9JQ09OX1JFUVVFU1QiLCJSRU1PVkVfSUNPTl9TVUNDRVNTIiwiUkVNT1ZFX0lDT05fRkFJTFVSRSIsIlJFTU9WRV9JQ09OX0NMRUFSIiwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QiLCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyIsIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFIiwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSIiwiQ0hBTkdFX05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05BTUVfQ0xFQVIiLCJXSVRIRFJXQUxfUkVRVUVTVCIsIldJVEhEUldBTF9TVUNDRVNTIiwiV0lUSERSV0FMX0ZBSUxVUkUiLCJXSVRIRFJXQUxfQ0xFQVIiLCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QiLCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MiLCJDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUiLCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSIiwiaWNvbiIsIm5hbWUiLCJuZXdOYW1lIiwiYWRkUXVpekFQSSIsImF4aW9zIiwiYWRkUXVpeiIsImNhbGwiLCJwdXQiLCJkZWxheSIsImVyciIsInJlc3BvbnNlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJzZWFyY2hIYXNodGFnQVBJIiwic2VhcmNoSGFzaHRhZyIsIndhdGNoQWRkUXVpeiIsInRha2VMYXRlc3QiLCJ3YXRjaFNlYXJjaEtleXdvcmQiLCJ3YXRjaFNlYXJjaEhhc2h0YWciLCJibG9nU2FnYSIsImFsbCIsImZvcmsiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21tZW50QVBJIiwiZGVsZXRlIiwicmVtb3ZlQ29tbWVudCIsImVkaXRDb21tZW50QVBJIiwiZWRpdENvbW1lbnQiLCJsaWtlQ29tbWVudEFQSSIsInBhdGNoIiwibGlrZUNvbW1lbnQiLCJ1bmxpa2VDb21tZW50QVBJIiwidW5saWtlQ29tbWVudCIsImFkZFN1YkNvbW1lbnRBUEkiLCJhZGRTdWJDb21tZW50IiwicmVtb3ZlU3ViQ29tbWVudEFQSSIsInJlbW92ZVN1YkNvbW1lbnQiLCJlZGl0U3ViQ29tbWVudEFQSSIsImVkaXRTdWJDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21tZW50Iiwid2F0Y2hFZGl0Q29tbWVudCIsIndhdGNoTGlrZUNvbW1lbnQiLCJ3YXRjaFVubGlrZUNvbW1lbnQiLCJ3YXRjaEFkZFN1YkNvbW1lbnQiLCJ3YXRjaFJlbW92ZVN1YkNvbW1lbnQiLCJ3YXRjaEVkaXRTdWJDb21tZW50IiwiY29tbWVudFNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJCQUNLRU5EX1VSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwibG9hZENhdGVnb3J5UG9zdHNBUEkiLCJsb2FkQ2F0ZWdvcnlQb3N0cyIsImxvYWRNb3JlUG9zdHNBUEkiLCJMYXN0SWQiLCJsb2FkTW9yZVBvc3RzIiwibG9hZENsYXNzUG9zdHNBUEkiLCJsb2FkQ2xhc3NQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJsb2FkUmVjZW50UG9zdHNBUEkiLCJsb2FkUmVjZW50UG9zdHMiLCJsaWtlUG9zdEFQSSIsIlBvc3RJZCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJ1cGxvYWRQb3N0SW1hZ2VBUEkiLCJ1cGxvYWRQb3N0SW1hZ2UiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImVkaXRQb3N0QVBJIiwiZWRpdFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNobG9hZENhdGVnb3J5UG9zdHMiLCJ3YXRjaGxvYWRNb3JlUG9zdHMiLCJ3YXRjaExvYWRSZWNlbnRQb3N0cyIsIndhdGNobG9hZENsYXNzUG9zdHMiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoRWRpdFBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoVXBsb2FkUG9zdEltYWdlIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ0luR29vZ2xlQVBJIiwibG9nSW5Hb29nbGUiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhZGRJY29uQVBJIiwiYWRkSWNvbiIsInJlbW92ZUljb25BUEkiLCJyZW1vdmVJY29uIiwibG9hZEluZm9BUEkiLCJsb2FkSW5mbyIsImNvbmZpcm1QYXNzd29yZEFQSSIsImNoYW5nZVBhc3N3b3JkQVBJIiwiY2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VOYW1lQVBJIiwiY2hhbmdlTmFtZSIsIndpdGhkcmF3YWxBUEkiLCJ3aXRoZHJhd2FsIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nSW5Hb29nbGUiLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hBZGRJY29uIiwid2F0Y2hSZW1vdmVJY29uIiwid2F0Y2hMb2FkSW5mbyIsIndhdGNoQ29uZmlybVBhc3N3b3JkIiwid2F0Y2hDaGFuZ2VQYXNzd29yZCIsIndhdGNoQ2hhbmdlTmFtZSIsIndhdGNoV2l0aGRyYXdhbCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJzY3JvbGxFZmZlY3QiLCJrZXlmcmFtZXMiLCJTY3JvbGwiLCJBcHBMYXlvdXQiLCJtZW1vIiwiY2hpbGRyZW4iLCJzY3JvbGxUb1RvcCIsInVzZUNhbGxiYWNrIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIkFkbWluTW9kYWwiLCJpc01vZGFsVmlzaWJsZSIsImhhbmRsZU9rIiwiaGFuZGxlQ2FuY2VsIiwib25DaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwiU2VhcmNoSW5wdXQiLCJJbnB1dCIsIlNlYXJjaCIsIkJsb2dIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwia2V5d29yZCIsIm9uQ2hhbmdlS2V5d29yZCIsInNldEtleXdvcmQiLCJ1c2VJbnB1dCIsIm9uU2VhcmNoQ29udGVudCIsIm1lc3NhZ2UiLCJjaGFyQXQiLCJzbGljZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJQb3J0Zm9saW9IZWFkZXIiLCJuYXZDb250ZW50cyIsIm1hcmdpblJpZ2h0IiwiZmFIb21lIiwibWFwIiwiaSIsInRyYW5zaXRpb24iLCJtYXJnaW5MZWZ0IiwiZXhwbGFpbiIsIlBvc3RUaXRsZSIsIkhlYWRlckxvZ28iLCJUaXRsZUFycm93IiwiQmxvZ1NtYWxsSGVhZGVyIiwidXNlU2VsZWN0b3IiLCJzZXRJc01vZGFsVmlzaWJsZSIsInVzZVN0YXRlIiwib25TZWFyY2hGb3JtIiwib25DbGlja1NlYXJjaEZvcm0iLCJ1c2VUb2dnbGUiLCJvblNsaWRlQXJyb3ciLCJvbkNsaWNrb25TbGlkZUFycm93Iiwic2V0b25TbGlkZUFycm93IiwiaGVhZGVyVGl0bGUiLCJzZXRIZWFkZXJUaXRsZSIsInVzZUVmZmVjdCIsInNjcm9sbENhbGxCYWNrIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInNwbGl0Iiwic2Nyb2xsWSIsImlzTmFOIiwicGFyc2VJbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3dNb2RhbCIsInRhZ3MiLCJIYXNoVGFncyIsIm9uQ2xpY2tTbGlkZSIsInN1Y2Nlc3MiLCJTTV9IZWFkZXJfTWVudSIsIlNNX0hlYWRlcl9UaXRsZSIsInRpdGxlIiwidHJhbnNmb3JtIiwiZmFDaGV2cm9uRG93biIsImZvbnRTaXplIiwiZmFUaW1lcyIsImZhQmFycyIsIlNNX0hlYWRlcl9TZWFjaEZvcm0iLCJTTV9IZWFkZXJfSW5wdXQiLCJTbGlkZU1lbnVXcmFwcGVyIiwiU2xpZGVNZW51Iiwib25DbGlja01lbnUiLCJvbkNsaWNrTG9nT3V0IiwibWFyZ2luQ1NTIiwiZmFTZWFyY2giLCJmYVNpZ25PdXRBbHQiLCJmYVNpZ25JbkFsdCIsIm1hcmdpblplcm8iLCJTbGlkZVJlbW90ZSIsIm9uQ2xpY2tMaW5rIiwiY29sb3IiLCJhZG1pbiIsImZhVHJhc2giLCJJbmZvTW9kYWwiLCJzZXRDaGFuZ2VQYXNzd29yZCIsInNldENoYW5nZU5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUiLCJ1c2VyTmFtZSIsIm5ld1Bhc3N3b3JkIiwib25DaGFuZ2VOZXdQYXNzd29yZCIsIm9uQ2hhbmdlTmV3TmFtZSIsImdvb2dsZUlkIiwib25TdWJtaXRDaGFuZ2VQYXNzd29yZCIsIm9uc3VibWl0Q2hhbmdlTmFtZSIsIm9uU3VibWl0V2l0aGRyYXdhbCIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwiXyIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsIkZvb3RlckRpdmlkZXIiLCJEaXZpZGVyIiwiRm9vdGVyIiwib25DbGlja0xpc3QiLCJvbkNsaWNrTmlja25hbWVCdG4iLCJzb2NpYWxfY29udGVudCIsImluZm9fY29udGVudCIsInF1aWNrdmlld19jb250ZW50IiwiTG9nb01haW4iLCJIZWFkZXIiLCJGaXhlZE5hdmJhciIsInNldEZpeGVkTmF2YmFyIiwiaGVpZ2h0IiwiQkxVRV9DT0xPUiIsIk1BSU5fQ09MT1IiLCJTVUJfQ09MT1IiLCJHUkFZX0NPTE9SIiwiQkdfQ09MT1IiLCJSRURfQ09MT1IiLCJDQVJEX0RFU0NfUFMiLCJDQVJEX0RFU0NfQ09NVSIsIkNBUkRfREVTQ19DT09QIiwiQ2FyZENvbnRlbnRzIiwic3F1YXJlVGl0bGUiLCJkZXNjIiwic3JjIiwiZmFBZGRyZXNzQ2FyZCIsImZhTGFwdG9wIiwiZmFJbWFnZXMiLCJmYUVudmVsb3BlIiwic2tpbGxzIiwibGV2ZWwiLCJzdWJfc2tpbGxzIiwiZW5nX2Rlc2MiLCJqYXBfZGVzYyIsImxhbmd1YWdlcyIsInBvcHVwIiwibGljZW5zZUtvciIsImRhdGFTb3VyY2UiLCJrZXkiLCJkYXRlIiwic3VtbWFyeSIsInNjb3JlIiwiY29sdW1ucyIsImRhdGFJbmRleCIsInBvcnRmb2xpb3MiLCJnaXQiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsInByb20iLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImxpbmsiLCJkb2N1bWVudCIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwicmVzZXQiLCJhU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsIkFvcyIsImluaXQiLCJ3aXRoUmVkdXgiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWRkaW5nQ1NTIiwibm9TZWFyY2hQb3N0Q1NTIiwib25TZWFyY2giLCJvbk1lbnUiLCJvblNsaWRlIiwib25UaXRsZSIsIlRpdGxlUHJvZmlsZSIsIk5vUG9zdFByb2ZpbGUiLCJQcm9maWxlUG9pbnRUaXRsZSIsIkRlbGV0ZUNvbW1lbnQiLCJyZW1vdmVNb2RhbCIsImluaXRpYWxWYWx1ZSIsIlZhbHVlIiwic2V0VmFsdWUiLCJwcmV2Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxPQURZO0FBRW5CQyxRQUFNLEVBQUUsTUFGVztBQUduQkMsY0FBWSxFQUFFLEVBSEs7QUFJbkJDLGVBQWEsRUFBRSxFQUpJO0FBS25CQyxPQUFLLEVBQUUsRUFMWTtBQU1uQkMsU0FBTyxFQUFFLEtBTlU7QUFPbkJDLGNBQVksRUFBRSxLQVBLO0FBUW5CQyxZQUFVLEVBQUUsS0FSTztBQVNuQkMsYUFBVyxFQUFFLEVBVE07QUFVbkJDLGNBQVksRUFBRSxFQVZLO0FBV25CQyxhQUFXLEVBQUUsS0FYTTtBQVluQkMsZUFBYSxFQUFFLEtBWkk7QUFjbkJDLGlCQUFlLEVBQUUsSUFkRTtBQWdCbkJDLHNCQUFvQixFQUFFLEtBaEJIO0FBaUJuQkMsbUJBQWlCLEVBQUUsS0FqQkE7QUFrQm5CQyxvQkFBa0IsRUFBRSxLQWxCRDtBQW9CbkJDLHNCQUFvQixFQUFFLEtBcEJIO0FBcUJuQkMsbUJBQWlCLEVBQUUsS0FyQkE7QUFzQm5CQyxvQkFBa0IsRUFBRSxLQXRCRDtBQXdCbkJDLGdCQUFjLEVBQUUsS0F4Qkc7QUF5Qm5CQyxhQUFXLEVBQUUsS0F6Qk07QUEwQm5CQyxjQUFZLEVBQUU7QUExQkssQ0FBckI7QUE2Qk8sTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxtQkFBM0I7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCOztBQUVQLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFnQixHQUFHcEQsWUFBcEIsRUFBa0NxRCxNQUFsQyxLQUNkQyw0Q0FBTyxDQUFDRixLQUFELEVBQVNHLEtBQUQsSUFBVztBQUN4QixVQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLakMsV0FBTDtBQUNFZ0MsV0FBSyxDQUFDdEQsS0FBTixHQUFjb0QsTUFBTSxDQUFDSSxJQUFyQjtBQUNBOztBQUNGLFNBQUs3QixZQUFMO0FBQ0UyQixXQUFLLENBQUNyRCxNQUFOLEdBQWVtRCxNQUFNLENBQUNuRCxNQUF0QjtBQUNBOztBQUNGLFNBQUsyQixZQUFMO0FBQ0UwQixXQUFLLENBQUNqRCxPQUFOLEdBQWdCLENBQUNpRCxLQUFLLENBQUNqRCxPQUF2QjtBQUNBOztBQUNGLFNBQUt3QixRQUFMO0FBQ0V5QixXQUFLLENBQUNqRCxPQUFOLEdBQWdCLElBQWhCO0FBQ0E7O0FBQ0YsU0FBS3lCLFNBQUw7QUFDRXdCLFdBQUssQ0FBQ2pELE9BQU4sR0FBZ0IsS0FBaEI7QUFDQTs7QUFDRixTQUFLMEIsZUFBTDtBQUNFdUIsV0FBSyxDQUFDaEQsWUFBTixHQUFxQjhDLE1BQU0sQ0FBQ0ksSUFBNUI7QUFDQTs7QUFDRixTQUFLdkIsWUFBTDtBQUNFcUIsV0FBSyxDQUFDL0MsVUFBTixHQUFtQixDQUFDK0MsS0FBSyxDQUFDL0MsVUFBMUI7QUFDQTs7QUFDRixTQUFLNkIsYUFBTDtBQUNFa0IsV0FBSyxDQUFDNUMsV0FBTixHQUFvQixDQUFDNEMsS0FBSyxDQUFDNUMsV0FBM0I7QUFDQTs7QUFDRixTQUFLMkIsZUFBTDtBQUNFaUIsV0FBSyxDQUFDM0MsYUFBTixHQUFzQnlDLE1BQU0sQ0FBQ0ksSUFBN0I7QUFDQTs7QUFDRixTQUFLdEIsYUFBTDtBQUNFb0IsV0FBSyxDQUFDL0MsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFNBQUsrQixzQkFBTDtBQUNFZ0IsV0FBSyxDQUFDekMsb0JBQU4sR0FBNkIsSUFBN0I7QUFDQXlDLFdBQUssQ0FBQ3hDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F3QyxXQUFLLENBQUN2QyxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUNGLFNBQUt3QixzQkFBTDtBQUE2QjtBQUMzQmUsYUFBSyxDQUFDOUMsV0FBTixHQUFvQjRDLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZaEQsV0FBaEM7QUFDQThDLGFBQUssQ0FBQ3pDLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0F5QyxhQUFLLENBQUN4QyxpQkFBTixHQUEwQixJQUExQjtBQUNBd0MsYUFBSyxDQUFDMUMsZUFBTixHQUF3QndDLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZNUMsZUFBcEM7QUFDQTtBQUNEOztBQUNELFNBQUs0QixzQkFBTDtBQUNFYyxXQUFLLENBQUN6QyxvQkFBTixHQUE2QixLQUE3QjtBQUNBeUMsV0FBSyxDQUFDdkMsa0JBQU4sR0FBMkJxQyxNQUFNLENBQUNLLEtBQWxDO0FBQ0E7O0FBQ0YsU0FBS2hCLG9CQUFMO0FBQ0VhLFdBQUssQ0FBQ3pDLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0F5QyxXQUFLLENBQUN4QyxpQkFBTixHQUEwQixLQUExQjtBQUNBd0MsV0FBSyxDQUFDdkMsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTs7QUFDRixTQUFLMkIsdUJBQUw7QUFDRVksV0FBSyxDQUFDdEMsb0JBQU4sR0FBNkIsSUFBN0I7QUFDQXNDLFdBQUssQ0FBQ3JDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FxQyxXQUFLLENBQUNwQyxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUNGLFNBQUt5Qix1QkFBTDtBQUE4QjtBQUM1QlcsYUFBSyxDQUFDdEMsb0JBQU4sR0FBNkIsS0FBN0I7QUFDQXNDLGFBQUssQ0FBQ3JDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FxQyxhQUFLLENBQUM3QyxZQUFOLEdBQXFCMkMsTUFBTSxDQUFDSSxJQUFQLENBQVkvQyxZQUFqQztBQUNBO0FBQ0Q7O0FBQ0QsU0FBS21DLHVCQUFMO0FBQ0VVLFdBQUssQ0FBQ3RDLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0FzQyxXQUFLLENBQUNwQyxrQkFBTixHQUEyQmtDLE1BQU0sQ0FBQ0ssS0FBbEM7QUFDQTs7QUFDRixTQUFLWixxQkFBTDtBQUNFUyxXQUFLLENBQUN0QyxvQkFBTixHQUE2QixLQUE3QjtBQUNBc0MsV0FBSyxDQUFDckMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXFDLFdBQUssQ0FBQ3BDLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7O0FBQ0YsU0FBSzRCLGdCQUFMO0FBQ0VRLFdBQUssQ0FBQ25DLGNBQU4sR0FBdUIsSUFBdkI7QUFDQW1DLFdBQUssQ0FBQ2xDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQWtDLFdBQUssQ0FBQ2pDLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFDRixTQUFLMEIsZ0JBQUw7QUFDRU8sV0FBSyxDQUFDbkMsY0FBTixHQUF1QixLQUF2QjtBQUNBbUMsV0FBSyxDQUFDbEMsV0FBTixHQUFvQixJQUFwQjtBQUNBOztBQUNGLFNBQUs0QixnQkFBTDtBQUNFTSxXQUFLLENBQUNuQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FtQyxXQUFLLENBQUNqQyxZQUFOLEdBQXFCK0IsTUFBTSxDQUFDSyxLQUE1QjtBQUNBOztBQUNGLFNBQUtSLGNBQUw7QUFDRUssV0FBSyxDQUFDbkMsY0FBTixHQUF1QixLQUF2QjtBQUNBbUMsV0FBSyxDQUFDbEMsV0FBTixHQUFvQixLQUFwQjtBQUNBa0MsV0FBSyxDQUFDakMsWUFBTixHQUFxQixLQUFyQjtBQUNBOztBQUNGO0FBQ0U7QUEzRko7QUE2RkQsQ0E5Rk0sQ0FEVDs7QUFpR2U2QixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTVEsV0FBVyxHQUFHLENBQUNQLEtBQUQsRUFBbUJDLE1BQW5CLEtBQW1DO0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUtJLDBEQUFMO0FBQ0UsYUFBT1AsTUFBTSxDQUFDUSxPQUFkOztBQUNGO0FBQVM7QUFDUCxjQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdENDLDZEQURzQztBQUV0Q0MsNkRBRnNDO0FBR3RDQyw2REFBSUE7QUFIa0MsU0FBRCxDQUF2QztBQUtBLGVBQU9KLGVBQWUsQ0FBQ1YsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0Q7QUFWSDtBQVlELENBYkQ7O0FBZWVNLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLE1BQU0zRCxZQUFZLEdBQUc7QUFDbkJtRSxXQUFTLEVBQUUsRUFEUTtBQUVuQkMsWUFBVSxFQUFFLEVBRk87QUFHbkJDLFlBQVUsRUFBRSxFQUhPO0FBSW5CQyxjQUFZLEVBQUUsRUFKSztBQUtuQkMsU0FBTyxFQUFFLEVBTFU7QUFNbkJDLE9BQUssRUFBRSxFQU5ZO0FBT25CQyxVQUFRLEVBQUUsRUFQUztBQVFuQkMsZUFBYSxFQUFFLElBUkk7QUFTbkJDLGdCQUFjLEVBQUUsSUFURztBQVVuQkMsbUJBQWlCLEVBQUUsSUFWQTtBQVduQlosTUFBSSxFQUFFLElBWGE7QUFZbkJhLFVBQVEsRUFBRSxFQVpTO0FBYW5CQyxVQUFRLEVBQUUsRUFiUztBQWNuQkMsWUFBVSxFQUFFLEVBZE87QUFlbkJDLFdBQVMsRUFBRSxJQWZRO0FBZ0JuQkMsZUFBYSxFQUFFLElBaEJJO0FBaUJuQkMsZ0JBQWMsRUFBRSxJQWpCRztBQWtCbkJDLG1CQUFpQixFQUFFLElBbEJBO0FBb0JuQkMsZ0JBQWMsRUFBRSxLQXBCRztBQXFCbkJDLGFBQVcsRUFBRSxLQXJCTTtBQXNCbkJDLGNBQVksRUFBRSxLQXRCSztBQXdCbkJDLHFCQUFtQixFQUFFLEtBeEJGO0FBeUJuQkMsa0JBQWdCLEVBQUUsS0F6QkM7QUEwQm5CQyxtQkFBaUIsRUFBRSxLQTFCQTtBQTRCbkJDLHdCQUFzQixFQUFFLEtBNUJMO0FBNkJuQkMscUJBQW1CLEVBQUUsS0E3QkY7QUE4Qm5CQyxzQkFBb0IsRUFBRSxLQTlCSDtBQWdDbkJDLG1CQUFpQixFQUFFLEtBaENBO0FBaUNuQkMsZ0JBQWMsRUFBRSxLQWpDRztBQWtDbkJDLGlCQUFlLEVBQUUsS0FsQ0U7QUFvQ25CQyxpQkFBZSxFQUFFLEtBcENFO0FBcUNuQkMsY0FBWSxFQUFFLEtBckNLO0FBc0NuQkMsZUFBYSxFQUFFLEtBdENJO0FBd0NuQkMsaUJBQWUsRUFBRSxLQXhDRTtBQXlDbkJDLGNBQVksRUFBRSxLQXpDSztBQTBDbkJDLGVBQWEsRUFBRSxLQTFDSTtBQTRDbkJDLHdCQUFzQixFQUFFLEtBNUNMO0FBNkNuQkMscUJBQW1CLEVBQUUsS0E3Q0Y7QUE4Q25CQyxzQkFBb0IsRUFBRSxLQTlDSDtBQWdEbkJDLGtCQUFnQixFQUFFLEtBaERDO0FBaURuQkMsZUFBYSxFQUFFLEtBakRJO0FBa0RuQkMsZ0JBQWMsRUFBRSxLQWxERztBQW9EbkJDLDBCQUF3QixFQUFFLEtBcERQO0FBcURuQkMsdUJBQXFCLEVBQUUsS0FyREo7QUFzRG5CQyx3QkFBc0IsRUFBRSxLQXRETDtBQXdEbkJDLHNCQUFvQixFQUFFLEtBeERIO0FBeURuQkMsbUJBQWlCLEVBQUUsS0F6REE7QUEwRG5CQyxvQkFBa0IsRUFBRSxLQTFERDtBQTREbkJDLHVCQUFxQixFQUFFLEtBNURKO0FBNkRuQkMsb0JBQWtCLEVBQUUsS0E3REQ7QUE4RG5CQyxxQkFBbUIsRUFBRSxLQTlERjtBQWdFbkJDLGlCQUFlLEVBQUUsS0FoRUU7QUFpRW5CQyxjQUFZLEVBQUUsS0FqRUs7QUFrRW5CQyxlQUFhLEVBQUUsS0FsRUk7QUFvRW5CQyxtQkFBaUIsRUFBRSxLQXBFQTtBQXFFbkJDLGdCQUFjLEVBQUUsS0FyRUc7QUFzRW5CQyxpQkFBZSxFQUFFLEtBdEVFO0FBd0VuQkMsbUJBQWlCLEVBQUUsS0F4RUE7QUF5RW5CQyxnQkFBYyxFQUFFLEtBekVHO0FBMEVuQkMsaUJBQWUsRUFBRSxLQTFFRTtBQTRFbkJDLG9CQUFrQixFQUFFLEtBNUVEO0FBNkVuQkMsaUJBQWUsRUFBRSxLQTdFRTtBQThFbkJDLGtCQUFnQixFQUFFLEtBOUVDO0FBZ0ZuQkMsc0JBQW9CLEVBQUUsS0FoRkg7QUFpRm5CQyxtQkFBaUIsRUFBRSxLQWpGQTtBQWtGbkJDLG9CQUFrQixFQUFFLEtBbEZEO0FBb0ZuQkMsb0JBQWtCLEVBQUUsS0FwRkQ7QUFxRm5CQyxpQkFBZSxFQUFFLEtBckZFO0FBc0ZuQkMsa0JBQWdCLEVBQUUsS0F0RkM7QUF3Rm5CQyxzQkFBb0IsRUFBRSxLQXhGSDtBQXlGbkJDLG1CQUFpQixFQUFFLEtBekZBO0FBMEZuQkMsb0JBQWtCLEVBQUUsS0ExRkQ7QUE0Rm5CQyxzQkFBb0IsRUFBRSxLQTVGSDtBQTZGbkJDLG1CQUFpQixFQUFFLEtBN0ZBO0FBOEZuQkMsb0JBQWtCLEVBQUUsS0E5RkQ7QUFnR25CQyx1QkFBcUIsRUFBRSxLQWhHSjtBQWlHbkJDLG9CQUFrQixFQUFFLEtBakdEO0FBa0duQkMscUJBQW1CLEVBQUUsS0FsR0Y7QUFvR25CQyx5QkFBdUIsRUFBRSxLQXBHTjtBQXFHbkJDLHNCQUFvQixFQUFFLEtBckdIO0FBc0duQkMsdUJBQXFCLEVBQUUsS0F0R0o7QUF3R25CQyxjQUFZLEVBQUU7QUF4R0ssQ0FBckI7QUEyR08sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQywwQkFBMEIsR0FB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QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBCbG9nU3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdGhlbWU6IFwibGlnaHRcIixcclxuICBoZWFkZXI6IFwiYmxvZ1wiLFxyXG4gIHByZVBvcnRmb2xpbzogW10sXHJcbiAgcG9zdFBvcnRmb2xpbzogW10sXHJcbiAgcG9zdHM6IFtdLFxyXG4gIG9uQWJvdXQ6IGZhbHNlLFxyXG4gIG9uU2lnblVwUGFnZTogZmFsc2UsXHJcbiAgcG9zdEVkaXRPbjogZmFsc2UsXHJcbiAgc2VhcmNoUG9zdHM6IFtdLFxyXG4gIGhhc2h0YWdQb3N0czogW10sXHJcbiAgb25TbGlkZU1lbnU6IGZhbHNlLFxyXG4gIG9uSGVhZGVyVGl0bGU6IGZhbHNlLFxyXG5cclxuICBzZWFyY2hlZEtleXdvcmQ6IG51bGwsXHJcblxyXG4gIHNlYXJjaEtleXdvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRG9uZTogZmFsc2UsXHJcbiAgc2VhcmNoS2V5d29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgc2VhcmNoSGFzaFRhZ0xvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaEhhc2hUYWdEb25lOiBmYWxzZSxcclxuICBzZWFyY2hIYXNoVGFnRXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRRdWl6TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUXVpekRvbmU6IGZhbHNlLFxyXG4gIGFkZFF1aXpFcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9ERV9DSEFOR0UgPSBcIk1PREVfQ0hBTkdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPUlRGT0xJT1MgPSBcIkxPQURfUE9SVEZPTElPU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1JURk9MSU8gPSBcIkxPQURfUE9SVEZPTElPXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BSRVBPUlRGT0xJTyA9IFwiTE9BRF9QUkVQT1JURk9MSU9cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFBPUlRGT0xJTyA9IFwiTE9BRF9QU1RQT1JURk9MSU9cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQUdFX0hFQURFUiA9IFwiQ0hBR0VfSEVBREVSXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfQUJPVVQgPSBcIlNXSVRDSF9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fQUJPVVQgPSBcIk9OX0FCT1VUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPRkZfQUJPVVQgPSBcIk9GRl9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fU0lHTl9VUF9QQUdFID0gXCJPTl9TSUdOX1VQX1BBR0VcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBQT1NUX0VESVRfT04gPSBcIlBPU1RfRURJVF9PTlwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUE9TVF9FRElUX09GRiA9IFwiUE9TVF9FRElUX09GRlwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0xJQ0tfSEFTSF9UQUcgPSBcIkNMSUNLX0hBU0hfVEFHXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9TTElERV9NRU5VID0gXCJPTl9TTElERV9NRU5VXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9IRUFERVJfVElUTEUgPSBcIk9OX0hFQURFUl9USVRMRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgPSBcIlNFQVJDSF9LRVlXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MgPSBcIlNFQVJDSF9LRVlXT1JEX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUgPSBcIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0NMRUFSID0gXCJTRUFSQ0hfS0VZV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19SRVFVRVNUID0gXCJTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MgPSBcIlNFQVJDSF9IQVNIX1RBR19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSA9IFwiU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19DTEVBUiA9IFwiU0VBUkNIX0hBU0hfVEFHX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfUkVRVUVTVCA9IFwiQUREX1FVSVpfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfU1VDQ0VTUyA9IFwiQUREX1FVSVpfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfRkFJTFVSRSA9IFwiQUREX1FVSVpfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfQ0xFQVIgPSBcIkFERF9RVUlaX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBCbG9nU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIE1PREVfQ0hBTkdFOlxyXG4gICAgICAgIGRyYWZ0LnRoZW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBR0VfSEVBREVSOlxyXG4gICAgICAgIGRyYWZ0LmhlYWRlciA9IGFjdGlvbi5oZWFkZXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1dJVENIX0FCT1VUOlxyXG4gICAgICAgIGRyYWZ0Lm9uQWJvdXQgPSAhZHJhZnQub25BYm91dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9BQk9VVDpcclxuICAgICAgICBkcmFmdC5vbkFib3V0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPRkZfQUJPVVQ6XHJcbiAgICAgICAgZHJhZnQub25BYm91dCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX1NJR05fVVBfUEFHRTpcclxuICAgICAgICBkcmFmdC5vblNpZ25VcFBhZ2UgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQT1NUX0VESVRfT046XHJcbiAgICAgICAgZHJhZnQucG9zdEVkaXRPbiA9ICFkcmFmdC5wb3N0RWRpdE9uO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX1NMSURFX01FTlU6XHJcbiAgICAgICAgZHJhZnQub25TbGlkZU1lbnUgPSAhZHJhZnQub25TbGlkZU1lbnU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fSEVBREVSX1RJVExFOlxyXG4gICAgICAgIGRyYWZ0Lm9uSGVhZGVyVGl0bGUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQT1NUX0VESVRfT0ZGOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RFZGl0T24gPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0cyA9IGFjdGlvbi5kYXRhLnNlYXJjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaGVkS2V5d29yZCA9IGFjdGlvbi5kYXRhLnNlYXJjaGVkS2V5d29yZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzaHRhZ1Bvc3RzID0gYWN0aW9uLmRhdGEuaGFzaHRhZ1Bvc3RzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCBibG9nIGZyb20gXCIuL2Jsb2dcIjtcclxuaW1wb3J0IHsgQmxvZ1N0YXRlLCBQb3N0U3RhdGUsIFVzZXJTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9vdFN0YXRlIHtcclxuICBibG9nOiBCbG9nU3RhdGU7XHJcbiAgdXNlcjogVXNlclN0YXRlO1xyXG4gIHBvc3Q6IFBvc3RTdGF0ZTtcclxufVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGU6IFJvb3RTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICBwb3N0LFxyXG4gICAgICAgIGJsb2csXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBDb21tZW50c0ludGVyLCBQb3N0U3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdGVjaFBvc3RzOiBbXSxcclxuICBkYWlseVBvc3RzOiBbXSxcclxuICBjbGFzc1Bvc3RzOiBbXSxcclxuICBjdWx0dXJlUG9zdHM6IFtdLFxyXG4gIHF1aXp6ZXM6IFtdLFxyXG4gIHdvcmRzOiBbXSxcclxuICBoYXNodGFnczogW10sXHJcbiAgbW9zdExpa2VkUG9zdDogbnVsbCxcclxuICBtb3N0Vmlld2VkUG9zdDogbnVsbCxcclxuICBtb3N0Q29tbWVudGVkUG9zdDogbnVsbCxcclxuICBwb3N0OiBudWxsLFxyXG4gIHByZXZQb3N0OiBbXSxcclxuICBuZXh0UG9zdDogW10sXHJcbiAgY291bnRQb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoOiBudWxsLFxyXG4gIHBvc3RJbWFnZVBhdGg6IG51bGwsXHJcbiAgcmVjZW50Vmlld1Bvc3Q6IG51bGwsXHJcbiAgcmVjZW50Q29tbWVudFBvc3Q6IG51bGwsXHJcblxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IGZhbHNlLFxyXG5cclxuICB1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRQb3N0SW1hZ2VEb25lOiBmYWxzZSxcclxuICB1cGxvYWRQb3N0SW1hZ2VFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgZWRpdFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBlZGl0UG9zdERvbmU6IGZhbHNlLFxyXG4gIGVkaXRQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRSZWNlbnRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRSZWNlbnRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRSZWNlbnRQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRDYXRlZ29yeVBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZENhdGVnb3J5UG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRNb3JlUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTW9yZVBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZE1vcmVQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZENsYXNzUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkQ2xhc3NQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRDbGFzc1Bvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0Q29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgZWRpdENvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbGlrZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGxpa2VDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICB1bmxpa2VDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZUNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGFkZFN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkU3ViQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgZWRpdFN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBlZGl0U3ViQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGVkaXRTdWJDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVTdWJDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlU3ViQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVN1YkNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGhhc01vcmVQb3N0czogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19DTEVBUiA9IFwiVVBMT0FEX0lNQUdFU19DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSID0gXCJVUExPQURfUE9TVF9JTUFHRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0NMRUFSID0gXCJBRERfUE9TVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFID0gXCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9QT1NUU19TVUNDRVNTID0gXCJMT0FEX01PUkVfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfTU9SRV9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9SRVFVRVNUID0gXCJFRElUX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX1NVQ0NFU1MgPSBcIkVESVRfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfRkFJTFVSRSA9IFwiRURJVF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DTEVBUiA9IFwiRURJVF9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfQ0xFQVIgPSBcIlJFTU9WRV9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX0NPTU1FTlRfUkVRVUVTVCA9IFwiTElLRV9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfQ09NTUVOVF9TVUNDRVNTID0gXCJMSUtFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX0ZBSUxVUkUgPSBcIkxJS0VfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCA9IFwiVU5MSUtFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiVU5MSUtFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSA9IFwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0NMRUFSID0gXCJBRERfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSBcIlJFTU9WRV9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSBcIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSBcIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfUkVRVUVTVCA9IFwiRURJVF9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9TVUNDRVNTID0gXCJFRElUX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX0ZBSUxVUkUgPSBcIkVESVRfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfQ0xFQVIgPSBcIkVESVRfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfU1VCX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9TVUJfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX1NVQl9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9DTEVBUiA9IFwiQUREX1NVQl9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QgPSBcIlJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCA9IFwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MgPSBcIkVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIgPSBcIkVESVRfU1VCX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFBvc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0OiBhbnkpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwidGVjaFwiICYmIGRyYWZ0LnRlY2hQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiICYmIGRyYWZ0LmRhaWx5UG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiY2xhc3NcIiAmJiBkcmFmdC5jbGFzc1Bvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiAmJiBkcmFmdC5jdWx0dXJlUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnRlY2hQb3N0cyA9IGFjdGlvbi5kYXRhLnRlY2hQb3N0cztcclxuICAgICAgICBkcmFmdC5kYWlseVBvc3RzID0gYWN0aW9uLmRhdGEuZGFpbHlQb3N0cztcclxuICAgICAgICBkcmFmdC5oYXNodGFncyA9IGFjdGlvbi5kYXRhLmhhc2h0YWdzO1xyXG4gICAgICAgIGRyYWZ0Lm1vc3RWaWV3ZWRQb3N0ID0gYWN0aW9uLmRhdGEubW9zdFZpZXdlZFBvc3Q7XHJcbiAgICAgICAgZHJhZnQubW9zdExpa2VkUG9zdCA9IGFjdGlvbi5kYXRhLm1vc3RMaWtlZFBvc3Q7XHJcbiAgICAgICAgZHJhZnQubW9zdENvbW1lbnRlZFBvc3QgPSBhY3Rpb24uZGF0YS5tb3N0Q29tbWVudGVkUG9zdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5wb3N0ID0gYWN0aW9uLmRhdGEucG9zdDtcclxuICAgICAgICBkcmFmdC5wcmV2UG9zdCA9IGFjdGlvbi5kYXRhLnByZXZQb3N0O1xyXG4gICAgICAgIGRyYWZ0Lm5leHRQb3N0ID0gYWN0aW9uLmRhdGEubmV4dFBvc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC50ZWNoUG9zdHMgPSBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgPyBhY3Rpb24uZGF0YS5wb3N0cyA6IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiID8gYWN0aW9uLmRhdGEucG9zdHMgOiBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb3VudFBvc3RzID0gYWN0aW9uLmRhdGEuY291bnRQb3N0cztcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5wb3N0cy5sZW5ndGggPiA2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8v7Lm07YWM6rOg66as7JeQIOunnuuKlCDtj6zsiqTtirjrpbwg64Sj7Ja07KSA64ukLlxyXG4gICAgICAgIGNvbnN0IG1vcmVUZWNoUG9zdHMgPVxyXG4gICAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwidGVjaFwiICYmIGRyYWZ0LnRlY2hQb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEubW9yZVBvc3RzKTtcclxuICAgICAgICBjb25zdCBtb3JlRGFpbHlQb3N0cyA9XHJcbiAgICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiICYmIGRyYWZ0LmRhaWx5UG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLm1vcmVQb3N0cyk7XHJcbiAgICAgICAgZHJhZnQudGVjaFBvc3RzID0gbW9yZVRlY2hQb3N0cztcclxuICAgICAgICBkcmFmdC5kYWlseVBvc3RzID0gbW9yZURhaWx5UG9zdHM7XHJcbiAgICAgICAgLy/rtojrn6zsmKgg7Y+s7Iqk7Yq46rCAIGxpbWl06rCS7J24IDbqsJzrnbzripTqsoPsnYAg67aI65+s7JioIO2PrOyKpO2KuOqwgCDrjZQg7J6I64uk64qUIOydmOuvuOydtOuLpC5cclxuICAgICAgICAvL+unjOyVvSDqsK/siJjqsIAg65SxIOunnuyVhOyEnCDri6TsnYwg6rCS7J20IOyXhuuLpOqzoCDtlbTrj4Qg6re4IOyalOyyreydgCAw6rCc7J6E7Jy866GcIGZhbHNl6rCAIOuQnOuLpC5cclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5tb3JlUG9zdHMubGVuZ3RoID09PSA2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jbGFzc1Bvc3RzID0gYWN0aW9uLmRhdGEuY2xhc3NQb3N0c19jbGFzcztcclxuICAgICAgICBkcmFmdC5jdWx0dXJlUG9zdHMgPSBhY3Rpb24uZGF0YS5jdWx0dXJlUG9zdHNfY2xhc3M7XHJcbiAgICAgICAgZHJhZnQucXVpenplcyA9IGFjdGlvbi5kYXRhLnF1aXp6ZXM7XHJcbiAgICAgICAgZHJhZnQud29yZHMgPSBhY3Rpb24uZGF0YS53b3JkcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Db21tZW50cz8ucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Qb3N0TGlrZXJzPy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Qb3N0TGlrZXJzPy5maWx0ZXIoKHY6IGFueSkgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdC5Db21tZW50cy5maW5kKCh2OiBDb21tZW50c0ludGVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkO1xyXG4gICAgICAgIH0pLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5uZXdDb21tZW50O1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBFRElUX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoKHY6IGFueSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKS5Db21tZW50TGlrZXJzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIC8vUkVRVUVTVCAsIFNVQ0NFU1MgLCBGQUlMVVJFIOuhnCBSZWR1Y2Vy66W8IOyqvOqwnOyEnCDsmKTrpZjqtIDrpqzrpbwg67O064ukIOyJveqyjCDtlojsirXri4jri6QuXHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vaW1tZXIg7KCB7Jqp7Jy866GcIOu2iOuzgOyEseydhCDslYjsp4DsvJzrj4Qg65CoLlxyXG4gICAgICAgIGxldCBDb21tZW50c1dpdGhvdXREZWxldGVkID0gZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoXHJcbiAgICAgICAgICAodjogQ29tbWVudHNJbnRlcikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkXHJcbiAgICAgICAgKS5Db21tZW50TGlrZXJzLmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnBvc3QuQ29tbWVudHMuZmluZChcclxuICAgICAgICAgICh2OiBDb21tZW50c0ludGVyKSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWRcclxuICAgICAgICApLkNvbW1lbnRMaWtlcnMgPSBDb21tZW50c1dpdGhvdXREZWxldGVkO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5maW5kKCh2OiBhbnkpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCkuU3ViQ29tbWVudHMucHVzaChcclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmZ1bGxTdWJDb21tZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0LkNvbW1lbnRzLmZpbmQoKHY6IENvbW1lbnRzSW50ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQ7XHJcbiAgICAgICAgfSkuU3ViQ29tbWVudHMuZmluZCgodjogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuU3ViQ29tbWVudElkO1xyXG4gICAgICAgIH0pLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19DTEVBUjpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3RJbWFnZVBhdGggPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVjZW50Vmlld1Bvc3QgPSBhY3Rpb24uZGF0YS5yZWNlbnRWaWV3UG9zdDtcclxuICAgICAgICBkcmFmdC5yZWNlbnRDb21tZW50UG9zdCA9IGFjdGlvbi5kYXRhLnJlY2VudENvbW1lbnRQb3N0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG4gIGltYWdlUGF0aDogbnVsbCxcclxuICBjb25maXJtUGFzc3dvcmQ6IGZhbHNlLFxyXG5cclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvZ0luR29vZ2xlTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Hb29nbGVEb25lOiBmYWxzZSxcclxuICBsb2dJbkdvb2dsZUVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkSW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZEluZm9FcnJvcjogZmFsc2UsXHJcblxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkSWNvbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZEljb25Eb25lOiBmYWxzZSxcclxuICBhZGRJY29uRXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVJY29uTG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlSWNvbkRvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUljb25FcnJvcjogZmFsc2UsXHJcblxyXG4gIGNvbmZpcm1QYXNzd29yZExvYWRpbmc6IGZhbHNlLFxyXG4gIGNvbmZpcm1QYXNzd29yZERvbmU6IGZhbHNlLFxyXG4gIGNvbmZpcm1QYXNzd29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgd2l0aGRyYXdhbExvYWRpbmc6IGZhbHNlLFxyXG4gIHdpdGhkcmF3YWxEb25lOiBmYWxzZSxcclxuICB3aXRoZHJhd2FsRXJyb3I6IGZhbHNlLFxyXG5cclxuICBjaGFuZ2VQYXNzd29yZExvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZVBhc3N3b3JkRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlUGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGNoYW5nZU5hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmFtZUVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fQ0xFQVIgPSBcIkxPR19JTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfUkVRVUVTVCA9IFwiTE9HX0lOX0dPT0dMRV9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX1NVQ0NFU1MgPSBcIkxPR19JTl9HT09HTEVfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9GQUlMVVJFID0gXCJMT0dfSU5fR09PR0xFX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfQ0xFQVIgPSBcIkxPR19JTl9HT09HTEVfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0NMRUFSID0gXCJMT0dfT1VUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9DTEVBUiA9IFwiU0lHTl9VUF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19SRVFVRVNUID0gXCJMT0FEX0lORk9fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfSU5GT19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9JTkZPX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9SRVFVRVNUID0gXCJBRERfSUNPTl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9TVUNDRVNTID0gXCJBRERfSUNPTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9GQUlMVVJFID0gXCJBRERfSUNPTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9DTEVBUiA9IFwiQUREX0lDT05fQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9SRVFVRVNUID0gXCJSRU1PVkVfSUNPTl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9TVUNDRVNTID0gXCJSRU1PVkVfSUNPTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9GQUlMVVJFID0gXCJSRU1PVkVfSUNPTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9DTEVBUiA9IFwiUkVNT1ZFX0lDT05fQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCA9IFwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9TVUNDRVNTID0gXCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkUgPSBcIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfQ0xFQVIgPSBcIkNIQU5HRV9QQVNTV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OQU1FX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OQU1FX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OQU1FX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX0NMRUFSID0gXCJDSEFOR0VfTkFNRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9SRVFVRVNUID0gXCJXSVRIRFJXQUxfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX1NVQ0NFU1MgPSBcIldJVEhEUldBTF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfRkFJTFVSRSA9IFwiV0lUSERSV0FMX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9DTEVBUiA9IFwiV0lUSERSV0FMX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9SRVFVRVNUID0gXCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyA9IFwiQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUgPSBcIkNPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9DTEVBUiA9IFwiQ09ORklSTV9QQVNTV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogVXNlclN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQ6IGFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm9uU2lnblVwUGFnZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5pY29uID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIuaWNvbiA9IFwiL2ltYWdlcy9ibG9nL2RlZmF1bHQtdXNlci5wbmdcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIubmFtZSA9IGFjdGlvbi5kYXRhLm5ld05hbWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9RVUlaX0NMRUFSLFxyXG4gIEFERF9RVUlaX0ZBSUxVUkUsXHJcbiAgQUREX1FVSVpfUkVRVUVTVCxcclxuICBBRERfUVVJWl9TVUNDRVNTLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19DTEVBUixcclxuICBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSxcclxuICBTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCxcclxuICBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyxcclxuICBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHtcclxuICBBZGRRdWl6RGF0YSxcclxuICBBZGRRdWl6SW50ZXIsXHJcbiAgU2VhcmNoSGFzaHRhZ0RhdGEsXHJcbiAgU2VhcmNoSGFzaHRhZ0ludGVyLFxyXG4gIFNlYXJjaEtleXdvcmREYXRhLFxyXG4gIFNlYXJjaEtleXdvcmRJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRRdWl6QVBJKGRhdGE6IEFkZFF1aXpEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcXVpemAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUXVpeihhY3Rpb246IEFkZFF1aXpJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGFkZFF1aXpBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoS2V5d29yZEFQSShkYXRhOiBTZWFyY2hLZXl3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3NlYXJjaC9gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaEtleXdvcmQoYWN0aW9uOiBTZWFyY2hLZXl3b3JkSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHNlYXJjaEtleXdvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoSGFzaHRhZ0FQSShkYXRhOiBTZWFyY2hIYXNodGFnRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3NlYXJjaC9oYXNodGFnYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hIYXNodGFnKGFjdGlvbjogU2VhcmNoSGFzaHRhZ0ludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChzZWFyY2hIYXNodGFnQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUXVpeigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9RVUlaX1JFUVVFU1QsIGFkZFF1aXopO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEtleXdvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfS0VZV09SRF9SRVFVRVNULCBzZWFyY2hLZXl3b3JkKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hIYXNodGFnKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1QsIHNlYXJjaEhhc2h0YWcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYmxvZ1NhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUXVpeiksIGZvcmsod2F0Y2hTZWFyY2hLZXl3b3JkKSwgZm9yayh3YXRjaFNlYXJjaEhhc2h0YWcpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgTElLRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBFRElUX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX0NPTU1FTlRfQ0xFQVIsXHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgRURJVF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgRURJVF9DT01NRU5UX0NMRUFSLFxyXG4gIEVESVRfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIExJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkZENvbW1lbnREYXRhLFxyXG4gIEFkZENvbW1lbnRJbnRlcixcclxuICBBZGRTdWJDb21tZW50RGF0YSxcclxuICBBZGRTdWJDb21tZW50SW50ZXIsXHJcbiAgRWRpdENvbW1lbnREYXRhLFxyXG4gIEVkaXRDb21tZW50SW50ZXIsXHJcbiAgRWRpdFN1YkNvbW1lbnRJbnRlcixcclxuICBMaWtlQ29tbWVudERhdGEsXHJcbiAgTGlrZUNvbW1lbnRJbnRlcixcclxuICBSZW1vdmVDb21tZW50SW50ZXIsXHJcbiAgUmVtb3ZlU3ViQ29tbWVudEludGVyLFxyXG4gIFN1YkNvbW1lbnREYXRhLFxyXG4gIFVubGlrZUNvbW1lbnRJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGE6IEFkZENvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudC8ke2RhdGEucG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb246IEFkZENvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb246IFJlbW92ZUNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdENvbW1lbnRBUEkoZGF0YTogRWRpdENvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9jb21tZW50L2VkaXQvJHtkYXRhLkNvbW1lbnRJZH0vYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0Q29tbWVudChhY3Rpb246IEVkaXRDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGVkaXRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbGlrZUNvbW1lbnRBUEkoZGF0YTogTGlrZUNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL2NvbW1lbnQvbGlrZS8ke2RhdGEuVXNlcklkfS8ke2RhdGEuQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZUNvbW1lbnQoYWN0aW9uOiBMaWtlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsaWtlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZUNvbW1lbnRBUEkoZGF0YTogTGlrZUNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9jb21tZW50L3VubGlrZS8ke2RhdGEuVXNlcklkfS8ke2RhdGEuQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlQ29tbWVudChhY3Rpb246IFVubGlrZUNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodW5saWtlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdWJDb21tZW50QVBJKGRhdGE6IEFkZFN1YkNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudC9zdWIvJHtkYXRhLkNvbW1lbnRJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFN1YkNvbW1lbnQoYWN0aW9uOiBBZGRTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZFN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN1YkNvbW1lbnRBUEkoZGF0YTogU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvc3ViLyR7ZGF0YS5Db21tZW50SWR9LyR7ZGF0YS5TdWJDb21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVTdWJDb21tZW50KGFjdGlvbjogUmVtb3ZlU3ViQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVTdWJDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTdWJDb21tZW50QVBJKGRhdGE6IFN1YkNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9jb21tZW50L3N1Yi9lZGl0LyR7ZGF0YS5Db21tZW50SWR9LyR7ZGF0YS5TdWJDb21tZW50SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0U3ViQ29tbWVudChhY3Rpb246IEVkaXRTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGVkaXRTdWJDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0Q29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfQ09NTUVOVF9SRVFVRVNULCBlZGl0Q29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX0NPTU1FTlRfUkVRVUVTVCwgbGlrZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfQ09NTUVOVF9SRVFVRVNULCB1bmxpa2VDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRTdWJDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1NVQl9DT01NRU5UX1JFUVVFU1QsIGFkZFN1YkNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlU3ViQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QsIGVkaXRTdWJDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbW1lbnRTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoRWRpdENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaExpa2VDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hBZGRTdWJDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVTdWJDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0U3ViQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBibG9nU2FnYSBmcm9tIFwiLi9ibG9nXCI7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBjb21tZW50U2FnYSBmcm9tIFwiLi9jb21tZW50XCI7XHJcbmltcG9ydCB7IEJBQ0tFTkRfVVJMIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIgOiBCQUNLRU5EX1VSTDtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKSwgZm9yayhjb21tZW50U2FnYSksIGZvcmsoYmxvZ1NhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFLFxyXG4gIEVESVRfUE9TVF9SRVFVRVNULFxyXG4gIEVESVRfUE9TVF9GQUlMVVJFLFxyXG4gIEVESVRfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX0NMRUFSLFxyXG4gIExPQURfTU9SRV9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTU9SRV9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTU9SRV9QT1NUU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBBRERfUE9TVF9DTEVBUixcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfQ0xFQVIsXHJcbiAgTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCxcclxuICBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTLFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSLFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX0NMRUFSLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkZFBvc3RJbnRlcixcclxuICBFZGl0UG9zdEludGVyLFxyXG4gIExpa2VQb3N0RGF0YSxcclxuICBMaWtlUG9zdEludGVyLFxyXG4gIExvYWRDYXRlZ29yeUludGVyLFxyXG4gIExvYWRNb3JlUG9zdHNEYXRhLFxyXG4gIExvYWRNb3JlUG9zdHNJbnRlcixcclxuICBMb2FkUG9zdERhdGEsXHJcbiAgTG9hZFBvc3RJbnRlcixcclxuICBMb2FkUmVjZW50UG9zdEludGVyLFxyXG4gIE5ld1Bvc3REYXRhLFxyXG4gIFJlbW92ZVBvc3REYXRhLFxyXG4gIFJlbW92ZVBvc3RJbnRlcixcclxuICBVcGxvYWRJbWFnZURhdGEsXHJcbiAgVXBsb2FkSW1hZ2VJbnRlcixcclxuICBVcGxvYWRQb3N0SW1hZ2VJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcbmltcG9ydCB7IFVzZXJJbnRlciB9IGZyb20gXCIuLi9AcmVkdWNlcnMvQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhOiBOZXdQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb246IEFkZFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENhdGVnb3J5UG9zdHNBUEkoZGF0YTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L2NhdGVnb3J5LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDYXRlZ29yeVBvc3RzKGFjdGlvbjogTG9hZENhdGVnb3J5SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRDYXRlZ29yeVBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTW9yZVBvc3RzQVBJKGRhdGE6IExvYWRNb3JlUG9zdHNEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L21vcmVwb3N0LyR7ZGF0YS5jYXRlZ29yeX0/bGFzdElkPSR7ZGF0YS5MYXN0SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTW9yZVBvc3RzKGFjdGlvbjogTG9hZE1vcmVQb3N0c0ludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkTW9yZVBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01PUkVfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENsYXNzUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L2NsYXNzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ2xhc3NQb3N0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRDbGFzc1Bvc3RzQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGE6IExvYWRQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdC9vbmVQb3N0LyR7ZGF0YS5wb3N0SWR9LyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5jYXRlZ29yeX1gKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uOiBMb2FkUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFJlY2VudFBvc3RzQVBJKGRhdGE6IFVzZXJJbnRlcikge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvcmVjZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRSZWNlbnRQb3N0cyhhY3Rpb246IExvYWRSZWNlbnRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRSZWNlbnRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhOiBMaWtlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvcG9zdC9saWtlLyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Vc2VySWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb246IExpa2VQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhOiBMaWtlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL3Bvc3QvbGlrZS8ke2RhdGEuUG9zdElkfS8ke2RhdGEuVXNlcklkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb246IExpa2VQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGE6IFVwbG9hZEltYWdlRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0L2ltYWdlc1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb246IFVwbG9hZEltYWdlSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRQb3N0SW1hZ2VBUEkoZGF0YTogVXBsb2FkSW1hZ2VEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvaW1hZ2VcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRQb3N0SW1hZ2UoYWN0aW9uOiBVcGxvYWRQb3N0SW1hZ2VJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodXBsb2FkUG9zdEltYWdlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YTogUmVtb3ZlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3Bvc3QvZGVsZXRlYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbjogUmVtb3ZlUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQb3N0QVBJKGRhdGE6IE5ld1Bvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9wb3N0L2VkaXRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRQb3N0KGFjdGlvbjogRWRpdFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfUE9TVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkQ2F0ZWdvcnlQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCwgbG9hZENhdGVnb3J5UG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRNb3JlUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCwgbG9hZE1vcmVQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlY2VudFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVCwgbG9hZFJlY2VudFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkQ2xhc3NQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCwgbG9hZENsYXNzUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9QT1NUX1JFUVVFU1QsIGVkaXRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkUG9zdEltYWdlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCwgdXBsb2FkUG9zdEltYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkQ2F0ZWdvcnlQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNobG9hZE1vcmVQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNobG9hZENsYXNzUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUmVjZW50UG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZFBvc3RJbWFnZSksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoRWRpdFBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9JQ09OX0NMRUFSLFxyXG4gIEFERF9JQ09OX0ZBSUxVUkUsXHJcbiAgQUREX0lDT05fUkVRVUVTVCxcclxuICBBRERfSUNPTl9TVUNDRVNTLFxyXG4gIENIQU5HRV9QQVNTV09SRF9DTEVBUixcclxuICBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSxcclxuICBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyxcclxuICBDSEFOR0VfTkFNRV9DTEVBUixcclxuICBDSEFOR0VfTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05BTUVfU1VDQ0VTUyxcclxuICBDT05GSVJNX1BBU1NXT1JEX0NMRUFSLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSxcclxuICBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gIExPQURfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfSU5GT19SRVFVRVNULFxyXG4gIExPQURfSU5GT19TVUNDRVNTLFxyXG4gIExPR19JTl9DTEVBUixcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fR09PR0xFX0NMRUFSLFxyXG4gIExPR19JTl9HT09HTEVfRkFJTFVSRSxcclxuICBMT0dfSU5fR09PR0xFX1JFUVVFU1QsXHJcbiAgTE9HX0lOX0dPT0dMRV9TVUNDRVNTLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfQ0xFQVIsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0lDT05fQ0xFQVIsXHJcbiAgUkVNT1ZFX0lDT05fRkFJTFVSRSxcclxuICBSRU1PVkVfSUNPTl9SRVFVRVNULFxyXG4gIFJFTU9WRV9JQ09OX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9DTEVBUixcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBXSVRIRFJXQUxfQ0xFQVIsXHJcbiAgV0lUSERSV0FMX0ZBSUxVUkUsXHJcbiAgV0lUSERSV0FMX1JFUVVFU1QsXHJcbiAgV0lUSERSV0FMX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7XHJcbiAgVXNlckRhdGEsXHJcbiAgTG9nSW5JbnRlcixcclxuICBTaWduVXBJbnRlcixcclxuICBBZGRJY29uRGF0YSxcclxuICBBZGRJY29uSW50ZXIsXHJcbiAgUmVtb3ZlSWNvbkludGVyLFxyXG4gIENvbWZpcm1QYXNzd29yZEludGVyLFxyXG4gIENvbWZpcm1QYXNzd29yZERhdGEsXHJcbiAgQ2hhbmdlUGFzc3dvcmREYXRhLFxyXG4gIENoYW5nZVBhc3N3b3JkSW50ZXIsXHJcbiAgV2l0aGRyd2FsSW50ZXIsXHJcbiAgQ2hhbmdlTmFtZURhdGEsXHJcbiAgQ2hhbmdlTmFtZUludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGE6IFVzZXJEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvbG9nSW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb246IExvZ0luSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkdvb2dsZUFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvZ29vZ2xlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW5Hb29nbGUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nSW5Hb29nbGVBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9HT09HTEVfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9HT09HTEVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9sb2dPdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YTogVXNlckRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9zaWduVXBcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uOiBTaWduVXBJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSg1MDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJY29uQVBJKGRhdGE6IEFkZEljb25EYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvaWNvblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZEljb24oYWN0aW9uOiBBZGRJY29uSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZEljb25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9JQ09OX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9JQ09OX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSWNvbkFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL3VzZXIvaWNvbi8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVJY29uKGFjdGlvbjogUmVtb3ZlSWNvbkludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVJY29uQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSUNPTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSUNPTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXBpL3VzZXJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maXJtUGFzc3dvcmRBUEkoZGF0YTogQ29tZmlybVBhc3N3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvdXNlci9jb25maXJtYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjb25maXJtUGFzc3dvcmQoYWN0aW9uOiBDb21maXJtUGFzc3dvcmRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoY29uZmlybVBhc3N3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09ORklSTV9QQVNTV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkQVBJKGRhdGE6IENoYW5nZVBhc3N3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvdXNlci9wYXNzd29yZGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlUGFzc3dvcmQoYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChjaGFuZ2VQYXNzd29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BBU1NXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOYW1lQVBJKGRhdGE6IENoYW5nZU5hbWVEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL25hbWVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5hbWUoYWN0aW9uOiBDaGFuZ2VOYW1lSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGNoYW5nZU5hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2l0aGRyYXdhbEFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGBhcGkvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3aXRoZHJhd2FsKGFjdGlvbjogV2l0aGRyd2FsSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHdpdGhkcmF3YWxBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFdJVEhEUldBTF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFdJVEhEUldBTF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luR29vZ2xlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX0dPT0dMRV9SRVFVRVNULCBsb2dJbkdvb2dsZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRJY29uKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0lDT05fUkVRVUVTVCwgYWRkSWNvbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlSWNvbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9JQ09OX1JFUVVFU1QsIHJlbW92ZUljb24pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9JTkZPX1JFUVVFU1QsIGxvYWRJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QsIGNvbmZpcm1QYXNzd29yZCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCwgY2hhbmdlUGFzc3dvcmQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTkFNRV9SRVFVRVNULCBjaGFuZ2VOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hXaXRoZHJhd2FsKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoV0lUSERSV0FMX1JFUVVFU1QsIHdpdGhkcmF3YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW5Hb29nbGUpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoQWRkSWNvbiksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlSWNvbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSW5mbyksXHJcbiAgICBmb3JrKHdhdGNoQ29uZmlybVBhc3N3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VQYXNzd29yZCksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmFtZSksXHJcbiAgICBmb3JrKHdhdGNoV2l0aGRyYXdhbCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9Ac2FnYVwiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmU6IElTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCB7IERvdWJsZUxlZnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3Qgc2Nyb2xsRWZmZWN0ID0ga2V5ZnJhbWVzYFxyXG50byB7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbmA7XHJcbmNvbnN0IFNjcm9sbCA9IHN0eWxlZC5kaXZgXHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDAuNXJlbTtcclxuICByaWdodDogMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgei1pbmRleDogMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0aW9uOiAke3Njcm9sbEVmZmVjdH0gMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9IG1lbW8oKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogYW55IH0pID0+IHtcclxuICBjb25zdCBzY3JvbGxUb1RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VXcmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFNjcm9sbCBjbGFzc05hbWU9XCJzY3JvbGxcIj5cclxuICAgICAgICAgIDxEb3VibGVMZWZ0T3V0bGluZWQgb25DbGljaz17c2Nyb2xsVG9Ub3B9IHJvdGF0ZT17OTB9IC8+XHJcbiAgICAgICAgPC9TY3JvbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQXBwTGF5b3V0KTtcclxuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcImFudGQvbGliL21vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG4gIGhhbmRsZU9rOiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNhbmNlbDogKCkgPT4gdm9pZDtcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlUGFzc3dvcmQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEFkbWluTW9kYWw6IEZDPE1vZGFsUHJvcHM+ID0gKHtcclxuICBpc01vZGFsVmlzaWJsZSxcclxuICBoYW5kbGVPayxcclxuICBoYW5kbGVDYW5jZWwsXHJcbiAgb25DaGFuZ2VQYXNzd29yZCxcclxuICBwYXNzd29yZCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9XCJQbGVhc2UgRW50ZXIgQWRtaW4gcGFzc3dvcmRcIlxyXG4gICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICA+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoaXMgZnVjbnRpb24gaXMgZm9yIEFETUlOIG9ubHkuIElmIHlvdSBhcmUgbm90IGEgYWRtaW5pc3RyYXRvciwgcGxlYXNlIGdvIGJhY2sgYW5kIGZlZWRiYWNrXHJcbiAgICAgICAgdG8gdXMuIFRoYW5rIHlvdSBmb3IgeW91ciBjb29wZXJhdGF0aW9uLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIOydtCDquLDriqXsnYAg6rSA66as7J6QIOyghOyaqeyeheuLiOuLpC4g7JiI6riw7LmYIOuqu+2VmOqyjCDsmKTshajsnYTqsr3smrAg7ZS865Oc67CxIOyjvOyLnOuptCDsoJXrp5Ag6rCQ7IKs7ZWY6rKg7Iq164uI64ukLlxyXG4gICAgICAgIO2Ykeugpe2VtOyjvOyFlOyEnCDqsJDsgqztlanri4jri6QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAg44GT44Gu5qmf6IO944Gv566h55CG6ICF5bCC55So44Gn44GU44GW44GE44G+44GZ44CB5L2V44GM5ZWP6aGM44GM55m655Sf44GX44Gf5aC05ZCI44Gv566h55CG6ICF44Gr55u05o6l44GU6YCj57Wh44GX44Gm6aCC44GR44KM44Gw5bm444GE44Gg44Go5oCd44GE44G+44GZ44CCXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxJbnB1dC5QYXNzd29yZCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Nb2RhbDtcclxuIiwiaW1wb3J0IHsgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vLi4vLi4vdXRpbC91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxyXG4gIHdpZHRoOiAzMCU7XHJcbiAgei1pbmRleDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgQmxvZ0hlYWRlciA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChrZXl3b3JkLmxlbmd0aCA8IDIpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIktleXdvcmQgaXMgcmVxdWlyZWQgdG8gaGF2ZSBtb3JlIHRoZW4gMSBsZXR0ZXJcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaChgL3NlYXJjaC8ke2tleXdvcmR9YCk7XHJcbiAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gIH0sIFtkaXNwYXRjaCwgcm91dGVyLCBrZXl3b3JkLCBzZXRLZXl3b3JkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl91bFwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl9saVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dG1lXCI+XHJcbiAgICAgICAgICAgIDxhPkFib3V0IG1lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3RlY2hcIj5cclxuICAgICAgICAgICAgPGE+SW5mbyBUZWNoPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RhaWx5XCI+XHJcbiAgICAgICAgICAgIDxhPkRhaWx5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX2xpXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NsYXNzXCI+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIEtvcmVhbiBDbGFzcyBmb3IgJm5ic3A7XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPFNlYXJjaElucHV0IHZhbHVlPXtrZXl3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfSBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dIZWFkZXIpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSBcInJlYWN0LXNjcm9sbHNweVwiO1xyXG5pbXBvcnQgeyBOYXZJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvcnRmb2xpb0hlYWRlcjogRkM8TmF2SW50ZXI+ID0gbWVtbygoeyBuYXZDb250ZW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44cmVtXCIgfX0gaWNvbj17ZmFIb21lfSAvPlxyXG4gICAgICAgICAgQmxvZ1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8U2Nyb2xsc3B5XHJcbiAgICAgICAgaXRlbXM9e1tcImFib3V0bWVcIiwgXCJza2lsbHNcIiwgXCJwb3J0Zm9saW9cIiwgXCJjb250YWN0XCJdfVxyXG4gICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJpcy1jdXJyZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9nX2hlYWRlcl91bFwiXHJcbiAgICAgICAgb2Zmc2V0PXswfVxyXG4gICAgICA+XHJcbiAgICAgICAge25hdkNvbnRlbnRzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbGlcIiBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIgfX0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AjJHt2Lm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXt2Lmljb259IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxcmVtXCIgfX0+e3YuZXhwbGFpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5cclxuaW1wb3J0IHsgZmFCYXJzLCBmYUNoZXZyb25Eb3duLCBmYVRpbWVzLCBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IElucHV0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUsIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi8uLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSBcIi4vU2xpZGVNZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgU01fSGVhZGVyX0lucHV0LFxyXG4gIFNNX0hlYWRlcl9NZW51LFxyXG4gIFNNX0hlYWRlcl9TZWFjaEZvcm0sXHJcbiAgU01fSGVhZGVyX1RpdGxlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlUmVtb3RlIGZyb20gXCIuL1NsaWRlUmVtb3RlXCI7XHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJMb2dvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLmxvZ29fc3BhbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUFycm93ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nU21hbGxIZWFkZXIgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvblNsaWRlTWVudSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcmVtb3ZlUG9zdERvbmUsIHByZXZQb3N0LCBuZXh0UG9zdCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBba2V5d29yZCwgb25DaGFuZ2VLZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtvblNlYXJjaEZvcm0sIG9uQ2xpY2tTZWFyY2hGb3JtXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW29uU2xpZGVBcnJvdywgb25DbGlja29uU2xpZGVBcnJvdywgc2V0b25TbGlkZUFycm93XSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlclRpdGxlLCBzZXRIZWFkZXJUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgbGV0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwICYmIHBhdGhuYW1lWzJdID09PSBcInBvc3RcIikge1xyXG4gICAgICAgIHNldEhlYWRlclRpdGxlKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDAgJiYgcGF0aG5hbWVbMV0gPT09IFwicG9ydGZvbGlvXCIgJiYgIWlzTmFOKHBhcnNlSW50KHBhdGhuYW1lWzJdKSkpIHtcclxuICAgICAgICBzZXRIZWFkZXJUaXRsZSh0cnVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0SGVhZGVyVGl0bGUoZmFsc2UpO1xyXG4gICAgICBzZXRvblNsaWRlQXJyb3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoQ29udGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBrZXl3b3JkIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChrZXl3b3JkLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtrZXl3b3JkLnNsaWNlKDEpfWApO1xyXG4gICAgICBzZXRLZXl3b3JkKFwiXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7a2V5d29yZH1gKTtcclxuICAgIHNldEtleXdvcmQoXCJcIik7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwga2V5d29yZCwgc2V0S2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIHBhc3N3b3JkLCB0YWdzOiBwb3N0Py5IYXNoVGFncyB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBwYXNzd29yZCwgcG9zdD8uSGFzaFRhZ3MsIHBvc3Q/LmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0xJREVfTUVOVSxcclxuICAgIH0pO1xyXG4gICAgc2V0b25TbGlkZUFycm93KGZhbHNlKTtcclxuICB9LCBbZGlzcGF0Y2gsIHNldG9uU2xpZGVBcnJvd10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfc21hbGxcIj5cclxuICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9NZW51KG9uU2xpZGVNZW51IHx8IG9uU2xpZGVBcnJvdyl9IGNsYXNzTmFtZT1cImJsb2dfaGVhZGVyX3NtYWxsX25hdlwiPlxyXG4gICAgICAgIDxkaXYgY3NzPXtTTV9IZWFkZXJfVGl0bGUoaGVhZGVyVGl0bGUpfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY3NzPXtIZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1lbnVfbG9nb1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEuOXJlbVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9sb2dvX2ljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvX3NwYW5cIj5Ob2FoIFdvcmxkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrb25TbGlkZUFycm93fSBjc3M9e1RpdGxlQXJyb3d9PlxyXG4gICAgICAgICAgICA8UG9zdFRpdGxlPntwb3N0Py50aXRsZX08L1Bvc3RUaXRsZT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke29uU2xpZGVBcnJvdyA/IFwiMTgwZGVnXCIgOiBcIjBkZWdcIn0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja1NsaWRlfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIHtvblNsaWRlTWVudSA/IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7b25TbGlkZUFycm93ICYmIGhlYWRlclRpdGxlICYmIChcclxuICAgICAgICAgIDxTbGlkZVJlbW90ZVxyXG4gICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgcHJldlBvc3Q9e3ByZXZQb3N0fVxyXG4gICAgICAgICAgICBuZXh0UG9zdD17bmV4dFBvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e1NNX0hlYWRlcl9TZWFjaEZvcm0ob25TbGlkZU1lbnUpfSBjbGFzc05hbWU9XCJzbGlkZV9tZW51XCI+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgIGNzcz17U01fSGVhZGVyX0lucHV0KG9uU2VhcmNoRm9ybSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VLZXl3b3JkfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZU1lbnUgb25DbGlja1NlYXJjaEZvcm09e29uQ2xpY2tTZWFyY2hGb3JtfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFkbWluTW9kYWxcclxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgaGFuZGxlT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTbWFsbEhlYWRlcik7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckludGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCB7IE9OX1NMSURFX01FTlUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IG1hcmdpbkNTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvZW1vdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlTWVudVByb3BzIHtcclxuICBvbkNsaWNrU2VhcmNoRm9ybTogKCkgPT4gdm9pZDtcclxuICB1c2VyOiBVc2VySW50ZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlTWVudVdyYXBwZXIgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIHVsOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpZGVNZW51OiBGQzxTbGlkZU1lbnVQcm9wcz4gPSBtZW1vKCh7IG9uQ2xpY2tTZWFyY2hGb3JtLCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25DbGlja01lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE9OX1NMSURFX01FTlUsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtTbGlkZU1lbnVXcmFwcGVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxoMiBjc3M9e21hcmdpbkNTUygwLCAwLCBcIjFyZW1cIiwgMCl9PkJsb2c8L2gyPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhPi0gSG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi90ZWNoXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIEluZm8gVGVjaDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9kYWlseVwifT5cclxuICAgICAgICAgICAgPGE+LSBEYWlseTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTWVudX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW1hZ2VfbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPi0gS29yZWFuIENsYXNzIGZvciAmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImphcGFuX2ZsYWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci80OC8wMDAwMDAvamFwYW4ucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrU2VhcmNoRm9ybX0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgLSBTZWFyY2ggPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19IGljb249e2ZhU2VhcmNofSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8aDIgY3NzPXttYXJnaW5DU1MoMCwgMCwgXCIxcmVtXCIsIDApfT5EaXJlY3QgTGluazwvaDI+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tNZW51fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fib3V0bWVcIn0+XHJcbiAgICAgICAgICAgIDxhPi0gQWJvdXQgbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgb25DbGljaz17b25DbGlja01lbnV9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9ydGZvbGlvXCJ9PlxyXG4gICAgICAgICAgICA8YT4tIFBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NhbG1vbmNob2JhYi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIC0gSW5zdGFncmFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIC0gR2l0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xvZ091dH0+XHJcbiAgICAgICAgICAgICAgLSBMb2cgb3V0IDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25PdXRBbHR9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja01lbnV9PlxyXG4gICAgICAgICAgICAgICAgLSBMb2cgSW4gJiBTaWduIFVwe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuM3JlbVwiIH19IGljb249e2ZhU2lnbkluQWx0fSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNsaWRlTWVudSk7XHJcbiIsImltcG9ydCB7XHJcbiAgRG91YmxlTGVmdE91dGxpbmVkLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZWQsXHJcbiAgRWRpdEZpbGxlZCxcclxuICBIb21lRmlsbGVkLFxyXG4gIFJvbGxiYWNrT3V0bGluZWQsXHJcbiAgVmVydGljYWxBbGlnblRvcE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgZmFUcmFzaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQb3N0SW50ZXIsIFVzZXJJbnRlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9AcmVkdWNlcnMvQHJlZHVjZXJUeXBlc1wiO1xyXG5pbXBvcnQgeyBQT1NUX0VESVRfT04gfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuXHJcbmludGVyZmFjZSBTbGlkZVJlbW90ZVByb3BzIHtcclxuICBzaG93TW9kYWw6ICgpID0+IHZvaWQ7XHJcbiAgcG9zdDogUG9zdEludGVyO1xyXG4gIHByZXZQb3N0OiBQb3N0SW50ZXJbXTtcclxuICBuZXh0UG9zdDogUG9zdEludGVyW107XHJcbiAgdXNlcjogVXNlckludGVyO1xyXG59XHJcblxyXG5jb25zdCBtYXJnaW5aZXJvID0gY3NzYFxyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuXHJcbmNvbnN0IFNsaWRlUmVtb3RlOiBGQzxTbGlkZVJlbW90ZVByb3BzPiA9IG1lbW8oKHsgc2hvd01vZGFsLCBwb3N0LCBwcmV2UG9zdCwgbmV4dFBvc3QsIHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrTGluayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInNsaWRlX3RpdGxlXCI+XHJcbiAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SG9tZUZpbGxlZCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiA/IFwiY2xhc3NcIiA6IHBvc3Q/LmNhdGVnb3J5fWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja0xpbmt9IGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAge25leHRQb3N0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdD8uY2F0ZWdvcnl9L3Bvc3QvJHtuZXh0UG9zdFswXT8uaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxEb3VibGVMZWZ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaW5rfSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgIHtwcmV2UG9zdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7cHJldlBvc3RbMF0/LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEb3VibGVSaWdodE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgPGxpIGNzcz17bWFyZ2luWmVyb30+XHJcbiAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xpbmt9PlxyXG4gICAgICAgICAgPFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAge3VzZXI/LmFkbWluICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgIDxsaSBjc3M9e21hcmdpblplcm99PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FRElUX09OLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZG1pblwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8bGkgY3NzPXttYXJnaW5aZXJvfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17c2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTbGlkZVJlbW90ZSk7XHJcbiIsImltcG9ydCB7IElucHV0LCBtZXNzYWdlLCBGb3JtLCBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9QQVNTV09SRF9SRVFVRVNULFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIFdJVEhEUldBTF9SRVFVRVNULFxyXG59IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuXHJcbmludGVyZmFjZSBJbmZvTW9kYWwge1xyXG4gIHNldElzTW9kYWxWaXNpYmxlOiAoZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBzZXRDaGFuZ2VQYXNzd29yZDogKGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgc2V0Q2hhbmdlTmlja25hbWU6IChlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG4gIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xyXG4gIGNoYW5nZU5pY2tuYW1lOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBJbmZvTW9kYWw6IEZDPEluZm9Nb2RhbD4gPSBtZW1vKFxyXG4gICh7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSxcclxuICAgIHNldENoYW5nZVBhc3N3b3JkLFxyXG4gICAgc2V0Q2hhbmdlTmlja25hbWUsXHJcbiAgICBpc01vZGFsVmlzaWJsZSxcclxuICAgIGNoYW5nZVBhc3N3b3JkLFxyXG4gICAgY2hhbmdlTmlja25hbWUsXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBjb25maXJtUGFzc3dvcmQsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRG9uZSxcclxuICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIHdpdGhkcmF3YWxEb25lLFxyXG4gICAgICB3aXRoZHJhd2FsRXJyb3IsXHJcbiAgICAgIGNoYW5nZU5hbWVEb25lLFxyXG4gICAgICBjaGFuZ2VOYW1lRXJyb3IsXHJcbiAgICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gdXNlcj8ubmFtZTtcclxuXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3UGFzc3dvcmQsIG9uQ2hhbmdlTmV3UGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3TmFtZSwgb25DaGFuZ2VOZXdOYW1lXSA9IHVzZUlucHV0KHVzZXJOYW1lKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAodXNlcj8uZ29vZ2xlSWQpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoY2hhbmdlUGFzc3dvcmREb25lKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQ2hhbmdlIHlvdXIgcGFzc3dvcmQgd2VsbCFcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VOYW1lRG9uZSkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNoYW5nZSB5b3VyIG5pY2tuYW1lIHdlbGwhXCIpO1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VOaWNrbmFtZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aXRoZHJhd2FsRG9uZSkge1xyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJXaXRoZHJhd2VkLiBUaGFuayB5b3UgZm9yIHVzaW5nICEgc2VlIHlvdSBuZXh0IHRpbWUuXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZVBhc3N3b3JkRXJyb3IgfHwgY2hhbmdlTmFtZUVycm9yIHx8IHdpdGhkcmF3YWxFcnJvcikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmV4cGVjdGVkIEVycm9yISBwbGVhc2UgdHJ5IGFnYWluIG9yIGZlZWRiYWNrIHRvIHVzXCIpO1xyXG4gICAgICAgIHNldENoYW5nZVBhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgICBzZXRDaGFuZ2VOaWNrbmFtZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maXJtUGFzc3dvcmRFcnJvcikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJXcm9uZyBQYXNzd29yZCEgcGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW1xyXG4gICAgICBjaGFuZ2VQYXNzd29yZERvbmUsXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkRXJyb3IsXHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLFxyXG4gICAgICB3aXRoZHJhd2FsRG9uZSxcclxuICAgICAgd2l0aGRyYXdhbEVycm9yLFxyXG4gICAgICBjaGFuZ2VOYW1lRG9uZSxcclxuICAgICAgY2hhbmdlTmFtZUVycm9yLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBoYW5kbGVPayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7IHBhc3N3b3JkLCB1c2VyIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW3Bhc3N3b3JkLCB1c2VyXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHNldENoYW5nZVBhc3N3b3JkKGZhbHNlKTtcclxuICAgICAgc2V0Q2hhbmdlTmlja25hbWUoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Q2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7IG5ld1Bhc3N3b3JkLCB1c2VyIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtuZXdQYXNzd29yZCwgdXNlcl0pO1xyXG5cclxuICAgIGNvbnN0IG9uc3VibWl0Q2hhbmdlTmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENIQU5HRV9OQU1FX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogeyBuZXdOYW1lLCBVc2VySWQ6IHVzZXI/LmlkIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW25ld05hbWUsIHVzZXJdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdFdpdGhkcmF3YWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBXSVRIRFJXQUxfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB1c2VyPy5pZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlVzZXIgSW5mb21hdGlvblwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25Paz17XHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmRcclxuICAgICAgICAgICAgPyBjaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgICAgID8gb25TdWJtaXRDaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgICAgIDogY2hhbmdlTmlja25hbWVcclxuICAgICAgICAgICAgICA/IG9uc3VibWl0Q2hhbmdlTmFtZVxyXG4gICAgICAgICAgICAgIDogb25TdWJtaXRXaXRoZHJhd2FsXHJcbiAgICAgICAgICAgIDogaGFuZGxlT2tcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb25maXJtUGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICBjaGFuZ2VQYXNzd29yZCA/IChcclxuICAgICAgICAgICAgPEZvcm0gbmFtZT1cIm5lc3QtbWVzc2FnZXNcIiBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiBmYWxzZSB9fT5cclxuICAgICAgICAgICAgICA8cD5QbGVhc2Ugd3JpdGUgeW91ciBuZXcgcGFzc3dvcmQuPC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIlBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCB2YWx1ZT17bmV3UGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZU5ld1Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJDb25maXJtXCJcclxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY2llcz17W1wiUGFzc3dvcmRcIl19XHJcbiAgICAgICAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoXCJQYXNzd29yZFwiKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApIDogY2hhbmdlTmlja25hbWUgPyAoXHJcbiAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJuZXN0LW1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPHA+UGxlYXNlIHdyaXRlIHlvdXIgbmV3IG5pY2tuYW1lLjwvcD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJuYW1lXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17bmV3TmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmV3TmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGgyPldvdWxkIHlvdSByZWFsbHkgbGlrZSB0byB3aXRoZHJhdz8g8J+YvzwvaDI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPkNvbmZpcm0geW91ciBwYXNzd29yZC48L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oSW5mb01vZGFsKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCB7IERpdmlkZXIsIFBvcG92ZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgSW5mb01vZGFsIGZyb20gXCIuL0Jsb2cvUHJvZmlsZS9JbmZvTW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL0ByZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyRGl2aWRlciA9IHN0eWxlZChEaXZpZGVyKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlcjogRkMgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlUGFzc3dvcmQsIHNldENoYW5nZVBhc3N3b3JkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlTmlja25hbWUsIHNldENoYW5nZU5pY2tuYW1lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tOaWNrbmFtZUJ0biA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIGluLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2hvd01vZGFsKCk7XHJcbiAgICBzZXRDaGFuZ2VOaWNrbmFtZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNvY2lhbF9jb250ZW50ID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2NvbnRlbnRcIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxsaT4tIEdpdDwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FsbW9uY2hvYmFiL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICA8bGk+LSBJbnN0YWdyYW08L2xpPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgY29uc3QgaW5mb19jb250ZW50ID0gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2NvbnRlbnRcIj5cclxuICAgICAgPGFcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIk9ubHkgZm9yIHVzZXIgd2hvIHNpZ25lZCBpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmQoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bGk+LSBXaXRoZHJhd2FsPC9saT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiT25seSBmb3IgdXNlciB3aG8gc2lnbmVkIGluLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHVzZXIuZ29vZ2xlSWQpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIk9ubHkgZm9yIHVzZXIgd2hvIHNpZ25lZCB1cCB3aXRoIGhvbWUtcGFnZSBkaXJlY3RseS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgc2V0Q2hhbmdlUGFzc3dvcmQodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxsaT4tIENoYW5nZSBQYXNzd29yZDwvbGk+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgb25DbGljaz17b25DbGlja05pY2tuYW1lQnRufT5cclxuICAgICAgICA8bGk+LSBDaGFuZ2UgTmlja25hbWU8L2xpPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgY29uc3QgcXVpY2t2aWV3X2NvbnRlbnQgPSAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19mb290ZXJfY29udGVudFwiPlxyXG4gICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gSG9tZTwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e1wiL3RlY2hcIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gSW5mbyBUZWNoPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17XCIvZGFpbHlcIn0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9Pi0gRGFpbHk8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtcIi9jbGFzc1wifT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+LSBLb3JlYW4gQ2xhc3M8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJibG9nX2Zvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2PuKTkiAyMDIxLCBKYW5nIEh5dW4gU29vLiBBbGwgUmlnaHRzIFJlc3J2ZWQuPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfZm9vdGVyX2xpc3RcIj5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpb1wifT5cclxuICAgICAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8Rm9vdGVyRGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgPFBvcG92ZXIgY29udGVudD17cXVpY2t2aWV3X2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGE+UXVpY2sgdmlldzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgIDxGb290ZXJEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXtzb2NpYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YT5Tb2NpYWwgTWVkaWE8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICA8Rm9vdGVyRGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwidG9wUmlnaHRcIiBjb250ZW50PXtpbmZvX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGE+SW5mb21hdGlvbjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEluZm9Nb2RhbFxyXG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlPXtzZXRJc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBzZXRDaGFuZ2VQYXNzd29yZD17c2V0Q2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgc2V0Q2hhbmdlTmlja25hbWU9e3NldENoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBjaGFuZ2VQYXNzd29yZD17Y2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgY2hhbmdlTmlja25hbWU9e2NoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEZvb3Rlcik7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmFTaWduSW5BbHQsIGZhU2lnbk91dEFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gXCIuLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCBCbG9nSGVhZGVyIGZyb20gXCIuL0Jsb2cvSGVhZGVycy9CbG9nSGVhZGVyXCI7XHJcbmltcG9ydCBCbG9nU21hbGxIZWFkZXIgZnJvbSBcIi4vQmxvZy9IZWFkZXJzL1NtYWxsSGVhZGVycy9CbG9nU21hbGxIZWFkZXJcIjtcclxuaW1wb3J0IHsgbmF2Q29udGVudHMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQb3J0Zm9saW9IZWFkZXIgfSBmcm9tIFwiLi9CbG9nL0hlYWRlcnMvUG9ydGZvbGlvSGVhZGVyXCI7XHJcbmNvbnN0IExvZ29NYWluID0gc3R5bGVkLmltZ2BcclxuICAmOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbRml4ZWROYXZiYXIsIHNldEZpeGVkTmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGhlYWRlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIGNvbnN0IHsgdXNlciwgbG9nT3V0RG9uZSwgbG9nT3V0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc2Nyb2xsQ2FsbEJhY2soKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAyNzUpIHtcclxuICAgICAgICBzZXRGaXhlZE5hdmJhcih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRGaXhlZE5hdmJhcihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ091dERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiTG9nIG91dCBpcyBkb25lLCBUaGFuayB5b3UgZm9yIHZpc2l0aW5nLlwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ091dEVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmV4cGVjdGVkIEVyb3JyISBwbGVhc2UgdHJ5IGFnYWluIG9yIGZlZWRiYWNrIHRvIHVzXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtsb2dPdXREb25lLCBsb2dPdXRFcnJvcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZV9zbWFsbF9vblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX2xvZ29cIj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPExvZ29NYWluIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvaW1hZ2VzL2Jsb2cvbG9nb19tYWluLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbG9naW5vdXRcIiBvbkNsaWNrPXtvbkNsaWNrTG9nT3V0fT5cclxuICAgICAgICAgICAgTG9nIG91dCA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC4zcmVtXCIgfX0gaWNvbj17ZmFTaWduT3V0QWx0fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvZ19oZWFkZXJfbG9naW5vdXRcIj5cclxuICAgICAgICAgICAgICBMb2cgSW4gJiBTaWduIFVwe1wiIFwifVxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwLjNyZW1cIiB9fSBpY29uPXtmYVNpZ25JbkFsdH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Rml4ZWROYXZiYXIgPyBcImJsb2dfaGVhZGVyX25hdiBmaXhlZFwiIDogXCJibG9nX2hlYWRlcl9uYXYgc3RhdGljXCJ9PlxyXG4gICAgICAgIHtoZWFkZXIgPT09IFwiYmxvZ1wiID8gPEJsb2dIZWFkZXIgLz4gOiA8UG9ydGZvbGlvSGVhZGVyIG5hdkNvbnRlbnRzPXtuYXZDb250ZW50c30gLz59XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8QmxvZ1NtYWxsSGVhZGVyIC8+XHJcbiAgICAgIHtGaXhlZE5hdmJhciA/IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwcHhcIiB9fSAvPiA6IG51bGx9XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVhZGVyKTtcclxuIiwiaW1wb3J0IHsgZmFBZGRyZXNzQ2FyZCwgZmFFbnZlbG9wZSwgZmFJbWFnZXMsIGZhTGFwdG9wIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb25maWdcclxuZXhwb3J0IGNvbnN0IEJBQ0tFTkRfVVJMID0gXCJodHRwczovL2FwaS5ub2Fod29ybGQuc2l0ZVwiO1xyXG5cclxuLy8gQ29sb3JcclxuXHJcbmV4cG9ydCBjb25zdCBCTFVFX0NPTE9SID0gXCIjMTE4N2NmXCI7XHJcbmV4cG9ydCBjb25zdCBNQUlOX0NPTE9SID0gXCIjRDVGN0U2XCI7XHJcbmV4cG9ydCBjb25zdCBTVUJfQ09MT1IgPSBcIiM1QUU0QThcIjtcclxuZXhwb3J0IGNvbnN0IEdSQVlfQ09MT1IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xyXG5leHBvcnQgY29uc3QgQkdfQ09MT1IgPSBcInJnYigyNDcsIDI0NywgMjQ3KVwiO1xyXG5leHBvcnQgY29uc3QgUkVEX0NPTE9SID0gXCIjZjE1YjZjXCI7XHJcblxyXG4vLyBNYWlucGFnZSBEZXNjXHJcblxyXG5leHBvcnQgY29uc3QgQ0FSRF9ERVNDX1BTID1cclxuICBcIuyDiOuhnOyatCDquLDsiKDsnYQg67Cw7Jqw6riw7KCEIO2VreyDgSDsnpDsi6DsnZgg6riw67O46riw66W8IOygkOqygO2VqeuLiOuLpC4g65iQ7ZWcIOusuOygnOulvCDsoJXtmZXtlZjqsowg7J247Iud7ZWY6rOgIOuwsOyasOqzoCDquLDroZ3tlanri4jri6QuXCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0RFU0NfQ09NVSA9XHJcbiAgXCLtjIDsm4ztgazrpbwg7LWc7Jqw7ISg7Jy866GcIOyXrOq4sOupsCDshozthrXsnYQg7KSR7Ius7Jy866GcIOunpOyInOqwhCDsi6DrorDsnZgg6riw67CY7J2EIOuLpOynkeuLiOuLpC5cIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfREVTQ19DT09QID1cclxuICBcIuy9lOuUqSDsnpDssrTrpbwg7KaQ6riw66mwIOunpOyInOqwhCDsl7TsoJXsnYQg6rCA7KeA6rOgIOqzoOu5hOulvCDrhJjsnLzrqbAg64u064u07ZWY6rKMIOuPhOyghO2VqeuLiOuLpC5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudHMgPSBbXHJcbiAge1xyXG4gICAgc3F1YXJlVGl0bGU6IFwiUHJvYmxlbVNvbHZlXCIsXHJcbiAgICB0aXRsZTogXCLrrLjsoJztlbTqsrDriqXroKXsnYQg7JyE7ZWcIOq4sOuzuOq4sFwiLFxyXG4gICAgZGVzYzogQ0FSRF9ERVNDX1BTLFxyXG4gICAgc3JjOiBcIi9pbWFnZXMvUHJvYmxlbVNvbHZlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3F1YXJlVGl0bGU6IFwiQ29vcGVyYXRpb25cIixcclxuICAgIHRpdGxlOiBcIuyLoOuisOyXkOyEnCDsmKTripQg7KeE7KCV7ZWcIOyGjO2GtVwiLFxyXG4gICAgZGVzYzogQ0FSRF9ERVNDX0NPTVUsXHJcbiAgICBzcmM6IFwiL2ltYWdlcy9Db29wZXJhdGlvbi5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNxdWFyZVRpdGxlOiBcIlBhc3Npb25cIixcclxuICAgIHRpdGxlOiBcIuyXtOyglSDqt7jrpqzqs6Ag64+E7KCEXCIsXHJcbiAgICBkZXNjOiBDQVJEX0RFU0NfQ09PUCxcclxuICAgIHNyYzogXCIvaW1hZ2VzL1Bhc3Npb24ucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIE5hdiBDb250ZW50c1xyXG5leHBvcnQgY29uc3QgbmF2Q29udGVudHMgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogZmFBZGRyZXNzQ2FyZCxcclxuICAgIGV4cGxhaW46IFwiQWJvdXQgbWVcIixcclxuICAgIG5hbWU6IFwiYWJvdXRtZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogZmFMYXB0b3AsXHJcbiAgICBleHBsYWluOiBcIlNraWxsc1wiLFxyXG4gICAgbmFtZTogXCJza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IGZhSW1hZ2VzLFxyXG4gICAgZXhwbGFpbjogXCJQb3J0Zm9saW9cIixcclxuICAgIG5hbWU6IFwicG9ydGZvbGlvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBmYUVudmVsb3BlLFxyXG4gICAgZXhwbGFpbjogXCJDb250YWN0XCIsXHJcbiAgICBuYW1lOiBcImNvbnRhY3RcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gU2tpbGwgcGFnZVxyXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSHRtbCAmIENTU1wiLFxyXG4gICAgc3JjOiBcIi4vaW1hZ2VzL0h0bWxDc3MucG5nXCIsXHJcbiAgICBkZXNjOiBcIuybue2RnOykgCAsIERPTS10cmVlICwg67CY7J2R7ZiV7Ju56rO8IOu4jOudvOyasOyggCDroIzrlKkg7Yq57ISx7J2EIO2MjOyVhe2VmOupsCBDU1PsnZgg64uk7LGE66Gc7Jq0IOyVoOuLiOuplOydtOyFmOqzvCDrjZTrtojslrQg7KCE7LmY66as6riwIOyCrOyaqeydtCDqsIDriqXtlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC90eXBlc2NyaXB0LnBuZ1wiLFxyXG4gICAgZGVzYzogXCJFUzYg7LWc7Iug66y467KV6rO8IOyLpO2Wiey7qO2FjeyKpO2KuCztgbTroZzsoIAs7J2067Kk7Yq466Oo7ZSE65OxIOuPhe2Kue2VnCBKU+2KueyEseydhCDtj63rhJPqsowg7J207ZW07ZWY66mwLCDrjIDshLjsnbgg7YOA7J6F7Iqk7YGs66a97Yq466W8IOyggeq3uSDtmZzsmqntlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvcmVhY3QtbmF0aXZlLnBuZ1wiLFxyXG4gICAgZGVzYzogXCJIb29rcyDrrLjrspUsIFJvdXRlcuyggeyaqSwgUmVkdXjsmYAg67mE64+Z6riw66W8IOychO2VnCBzYWdhLCB0aHVuayDsmbgg7Jes65+sIOudvOydtOu4jOufrOumrOulvCDsnZHsmqntlZjrqbAg66CM642U66eB7LWc7IaM7ZmUIOuwjyDsg53rqoXso7zquLDqsJnsnYAgUmVhY3TsnZggU1BBIO2KueyEseydhCDsnbTtlbTtlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTmV4dC5qc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2tvLWtyL3dpbmRvd3MvaW1hZ2VzL25leHRqcy1sb2dvLnBuZ1wiLFxyXG4gICAgZGVzYzogXCLsgqzsmqnsnpAg66eM7KGx64+E7JmAIOqygOyDieyXlOynhCDtmqjsnKjshLHsnYQg64aS7JWE64qUIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydmCDtirnshLHsnYQg7J207ZW07ZWY66mwIE5leHQuanPrpbwgUmVhY3Tsl5Ag7KCB7Jqp7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk15c3FsXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzEwMC8wMDAwMDAvbXlzcWwtbG9nby5wbmdcIixcclxuICAgIGRlc2M6IFwi7Iuc7YCE65287J207KaIICYg7JuM7YGs67Kk7LmY66W8IOyCrOyaqe2VmOupsCwg7Iqk7YKk66eIIOygleydmOyZgCDsvZjshpTrqoXroLnslrQsIOq3uOumrOqzoCDrjbDsnbTthLDrsqDsnbTsiqQg6rSA6rOE64+E66W8IOydtO2VtO2VtCDrjbDsnbTthLDrpbwg7Zqo7Jyo7J6I6rKMIOq0gOumrO2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHaXRcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL25vbGFuLzEyOC9naXRodWIucG5nXCIsXHJcbiAgICBkZXNjOiBcIu2YleyDgeq0gOumrOydmCDquLDrs7jsm5DrpqzsmYAg67KE7KCE6rSA66asLOu4jOuenOy5mCzrsLHsl4Xrk7HsnYQg7KCB6re5IO2ZnOyaqe2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3ViX3NraWxscyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkF4aW9zXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzRFMEJBUUdsTjNSSnZLbXdFZy9jb21wYW55LWxvZ29fMjAwXzIwMC8wLzE1NzEyNTM0NDg4MTg/ZT0yMTU5MDI0NDAwJnY9YmV0YSZ0PVZZZnJTb3pxM2tTdzVfNDA0dFI0eFlGTUgwdUZRTm1RTnJ3ZVFjSmtiR3dcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJFeHByZXNzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly93d3cubWVtZW50b3RlY2guaW4vYXNzZXRzL2ltYWdlcy9pY29ucy9leHByZXNzLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFudGRcIixcclxuICAgIHNyYzogXCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS0RwZ3ZndU1wR2ZxYUhQamljUksuc3ZnXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3R5bGVkLWNvbXBvbmVudHNcIixcclxuICAgIHNyYzogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjA2NTg4MjU/cz0yODAmdj00XCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRW1vdGlvbi5qc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzE2MDAvMSpnR3pSbVVLTk9DX1g3a2xGalRrOEVBLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFXU1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81MmNhM2I3M2U0YjA0YTQ1ZWYyYzVjYjYvMTU1MTg4NDg2MTMzMS1DOVUyUkhKUUxPUEw5RjMzMlg1Ty9rZTE3WndkR0JUb2RkSThwRG00OGtLNng4SU9oelhfclR0UUdLWTFxcC1oWnctelBQZ2RuNGpVd1ZjSkUxWnZXaGN3aEV0V0pYb3NoTmRBOWYxcUQ3WGFHUHNrZlF0VnV0dVNBMkItSlc2d2txcVYwMjRYUC0wNTlEUDZ3UllxWVZVR016c0J4VG8yVWxrWnExMEdUcmcvQVdTX2Jsb2dfMDEuUE5HXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGFzc3BvcnQuanNcIixcclxuICAgIHNyYzogXCJodHRwczovL2xlb2xhbmNoYXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzA3LzBkMTg0ZWUzLWZkOGQtNGI5NC1hY2Y0LWI0ZTY4NmU1NzM3NS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFiZWxcIixcclxuICAgIHNyYzogXCJodHRwczovL2Nkbi5pbWdiaW4uY29tLzgvNC8yMi9pbWdiaW4tc291cmNlLXRvLXNvdXJjZS1jb21waWxlci1qYXZhc2NyaXB0LWVjbWFzY3JpcHQtbm9kZS1qcy10aGF0LXMtS2Z0OUs0bkU5WUhyTXA2c2RxMEJRMDljSy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV2VicGFja1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdDEuZGF1bWNkbi5uZXQvY2ZpbGUvdGlzdG9yeS85OTlBRjU0QjVCOTNENzhDMjVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUG9zdG1hblwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC81MTIvMSpmVkJMOW10TEptSElINllwVTdXdkhRLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZW5nX2Rlc2MgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxwPsK3IOqwnOyalDog66y47ZmU7LK07Jyh6rSA6rSR67aA7JeQ7IScIOyLpOyLnO2VmOuKlCDthrXsl63rtoTslbzsnZgg7Jyg7J287ZWcIOq1reqwgOqzteyduOyekOqyqeymnSjstpzsspg6US1OZXQpPC9wPlxyXG4gICAgPHA+wrcg7Leo65Od64u57IucIOyWtO2VmeygkOyImDogVE9FSUMgOTI17KCQKDIwMTjrhYQg7Leo65OdKTwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuZXhwb3J0IGNvbnN0IGphcF9kZXNjID0gKFxyXG4gIDxkaXY+XHJcbiAgICA8cD7CtyDqsJzsmpQ6IOusuO2ZlOyytOycoeq0gOq0keu2gOyXkOyEnCDsi6Tsi5ztlZjripQg7Ya17Jet67aE7JW87J2YIOycoOydvO2VnCDqta3qsIDqs7XsnbjsnpDqsqnspp0o7Lac7LKYOlEtTmV0KTwvcD5cclxuICAgIDxwPsK3IOy3qOuTneuLueyLnCDslrTtlZnsoJDsiJg6IEpMUFQx6riJKDIwMTnrhYQg7Leo65OdKTwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJFbmdsaXNoXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci85Ni8wMDAwMDAvdXNhLWNpcmN1bGFyLnBuZ1wiLFxyXG4gICAgcG9wdXA6IHRydWUsXHJcbiAgICBsaWNlbnNlS29yOiBcIjIwMjDrhYQg7JiB7Ja0XCIsXHJcbiAgICBjb250ZW50OiBlbmdfZGVzYyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSmFwYW5lc2VcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzk2LzAwMDAwMC9qYXBhbi1jaXJjdWxhci5wbmdcIixcclxuICAgIHBvcHVwOiB0cnVlLFxyXG4gICAgbGljZW5zZUtvcjogXCIyMDE564WEIOydvOuzuOyWtFwiLFxyXG4gICAgY29udGVudDogamFwX2Rlc2MsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU291cmNlID0gW1xyXG4gIHtcclxuICAgIGtleTogXCIxXCIsXHJcbiAgICBuYW1lOiBcIu2GoOydtVwiLFxyXG4gICAgZGF0ZTogMjAxOCxcclxuICAgIHN1bW1hcnk6IFwi7JiB7Ja0IOyekOqyqeymnSAo6riw6rCE66eM66OMKVwiLFxyXG4gICAgc2NvcmU6IFwiOTI1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiMlwiLFxyXG4gICAgbmFtZTogXCLrp6Tsnbzqsr3soJzthYzsiqTtirhcIixcclxuICAgIGRhdGU6IDIwMTgsXHJcbiAgICBzdW1tYXJ5OiBcIuqyveygnCzqsr3smIHqtIDroKgg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiM1wiLFxyXG4gICAgbmFtZTogXCLqta3smbjsl6ztlonsnbjshpTsnpAg7J6Q6rKp7KadXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLtlbTsmbjsl5DshJwg7J247KCV7ZWY64qUIO2VnOq1req0gOq0ke2Yke2ajOydmCDqta3smbgg7J247IaU7J6QICDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI0XCIsXHJcbiAgICBuYW1lOiBcIkpMUFRcIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIuydvOuzuOyWtCDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIjHquIlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI1XCIsXHJcbiAgICBuYW1lOiBcIuydvOuzuOyWtCDthrXsl63slYjrgrTsgqwg7J6Q6rKp7KadICjqta3qsIDsoITrrLjsnpDqsqkpXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLtlZzqta3sgqwx6riJ7JeQIOykgO2VmOupsCDsnbzrs7jslrQg7Ya167KI7JetIOuKpeugpeydhCDsnoXspp3tlZjripQg6rWt6rCA7KCE66y47J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNlwiLFxyXG4gICAgbmFtZTogXCLsmIHslrQg7Ya17Jet7JWI64K07IKsIOyekOqyqeymnSAo6rWt6rCA7KCE66y47J6Q6rKpKVwiLFxyXG4gICAgZGF0ZTogMjAyMCxcclxuICAgIHN1bW1hcnk6IFwi7ZWc6rWt7IKsMeq4ieyXkCDspIDtlZjrqbAg7JiB7Ja0IO2GteuyiOyXrSDriqXroKXsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOyghOusuOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjdcIixcclxuICAgIG5hbWU6IFwi7KCV67O07LKY66as6riw7IKsICjqta3qsIDquLDsiKDsnpDqsqkpXCIsXHJcbiAgICBkYXRlOiAyMDIxLFxyXG4gICAgc3VtbWFyeTogXCJJVOq0gOugqCDshozslpHsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOq4sOyIoOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjhcIixcclxuICAgIG5hbWU6IFwi7ZWZ7KCQ7J2A7ZaJ7KCcIOqyveyYge2VmeyCrFwiLFxyXG4gICAgZGF0ZTogMjAyMSxcclxuICAgIHN1bW1hcnk6IFwiMjAyMeuFhCA27JuUIOyhuOyXheyYiOyglVwiLFxyXG4gICAgc2NvcmU6IFwi7ZWZ7IKsXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXHJcbiAgICBrZXk6IFwibmFtZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRGF0ZVwiLFxyXG4gICAgZGF0YUluZGV4OiBcImRhdGVcIixcclxuICAgIGtleTogXCJkYXRlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTdW1tYXJ5XCIsXHJcbiAgICBkYXRhSW5kZXg6IFwic3VtbWFyeVwiLFxyXG4gICAga2V5OiBcInN1bW1hcnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNjb3JlXCIsXHJcbiAgICBkYXRhSW5kZXg6IFwic2NvcmVcIixcclxuICAgIGtleTogXCJzY29yZVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vL1BvcnRmb2xpb1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnRmb2xpb3MgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIk15IFNlb3VsIEd1aWRlXCIsXHJcbiAgICBkYXRlOiBcIjIwMjEvNH4gMjAyMS81XCIsXHJcbiAgICB0YWdzOiBbXCIjVHlwZVNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNFbW90aW9uXCIsIFwiI0dyYXBoUUxcIl0sXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzQ4NjQ5MjUvMTIwMTIxMzE1LWI0MzE2MDAwLWMxZGQtMTFlYi05ZjliLTA4YzQ1MjI5YzdlOC5wbmdcIixcclxuICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vbm9haDA3MTYxMC9NeS1TZW91bC1HdWlkZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIk5vYWggd29ybGQgQmxvZ1wiLFxyXG4gICAgZGF0ZTogXCIyMDIxLzJ+IDIwMjEvNFwiLFxyXG4gICAgdGFnczogW1wiI1R5cGVTY3JpcHRcIiwgXCIjUmVhY3RcIiwgXCIjTmV4dC5qc1wiLCBcIiNNeXNxbFwiLCBcIiNBV1NcIl0sXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzQ4NjQ5MjUvMTIwMTIxMzE2LWI1NjI4ZDAwLWMxZGQtMTFlYi04N2YyLWRhMDk5OTU2YzcyNS5wbmdcIixcclxuICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vbm9haDA3MTYxMC9OZXh0X05vYWhXb3JsZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIk1vdmllIEFwcCAoQ2xvbmUgQ29kaW5nKVwiLFxyXG4gICAgZGF0ZTogXCIyMDIwLzEyfiAyMDIxLzFcIixcclxuICAgIHRhZ3M6IFtcIiNKYXZhc2NyaXB0XCIsIFwiI1JlYWN0XCIsIFwiI05vZGUuanNcIiwgXCIjTW9uZ29EQlwiXSxcclxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW9fbW92aWUuanBnXCIsXHJcbiAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTAvUmVhY3RfTW92aWUtQXBwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICBkYXRlOiBcIjIwMjEvMX4gMjAyMS8yXCIsXHJcbiAgICB0YWdzOiBbXCIjSFRNTFwiLCBcIiNDU1NcIiwgXCIjSmF2YXNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNBdG5kXCJdLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzc0ODY0OTI1LzEyMDEyMTcwNC1lYTZmZGYwMC1jMWRmLTExZWItOTJmNS01Zjc0ZTgxZTI0OWQucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFvcyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBcImFuaW1hdGUuY3NzL2FuaW1hdGUuY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9naXRodWIuY3NzXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzc1wiO1xuaW1wb3J0IFwiQHRvYXN0LXVpL2VkaXRvci9kaXN0L3RvYXN0dWktZWRpdG9yLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuXG5jb25zdCByZXNldCA9IGNzc2BcbiAgLmFudC1yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC10YWJsZS1wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTE4N2NmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLmFudC1kaXZpZGVyLXdpdGgtdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBhU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBhU2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgIGFTY3JpcHQuc3JjID0gXCIgaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYVNjcmlwdCk7XG4gICAgYVNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7fTtcbiAgICBBb3MuaW5pdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Tm9haCB3b3JsZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17cmVzZXR9IC8+XG4gICAgICA8QXBwTGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmdpbkNTUyA9ICh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpID0+IGNzc2BcclxuICBtYXJnaW46ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkaW5nQ1NTID0gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkgPT4gY3NzYFxyXG4gIHBhZGRpbmc6ICR7dG9wfSAke3JpZ2h0fSAke2JvdHRvbX0gJHtsZWZ0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBub1NlYXJjaFBvc3RDU1MgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX0lucHV0ID0gKG9uU2VhcmNoOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNlYXJjaFxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgdHJhbnNpdGlvbjogYWxsIDAuM3M7IG1hcmdpbi1ib3R0b206IDFyZW1cIlxyXG4gICAgOiBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjNzOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDAgXCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX01lbnUgPSAob25NZW51OiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvbk1lbnVcclxuICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXItYm90dG9tOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDtcIlxyXG4gICAgOiBcImJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IG92ZXJmbG93OiBoaWRkZW47XCJ9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU01fSGVhZGVyX1NlYWNoRm9ybSA9IChvblNsaWRlOiBCb29sZWFuKSA9PiBjc3NgXHJcbiAgJHtvblNsaWRlID8gXCJkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlblwiIDogXCJkaXNwbGF5Om5vbmVcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTTV9IZWFkZXJfVGl0bGUgPSAob25UaXRsZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7b25UaXRsZVxyXG4gICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IHRyYW5zaXRpb246IGFsbCAwLjVzOyB3aWR0aDogNzAlO1wiXHJcbiAgICA6IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cztcIn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVByb2ZpbGUgPSBjc3NgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdFByb2ZpbGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQb2ludFRpdGxlID0gY3NzYFxyXG4gIGNvbG9yOiAke0JMVUVfQ09MT1J9O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQ29tbWVudCA9IChyZW1vdmVNb2RhbDogYm9vbGVhbikgPT4gY3NzYFxyXG4gIHZpc2liaWxpdHk6ICR7cmVtb3ZlTW9kYWwgPyBcImluaXRpYWxcIiA6IFwiaGlkZGVuXCJ9O1xyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVNb2RhbCA/IFwiMC41cyBmYWRlSW5cIiA6IFwibm9uZVwifTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSW5wdXQoaW5pdGlhbFZhbHVlOiBhbnkpIHtcclxuICBjb25zdCBbVmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW1ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUb2dnbGUoaW5pdGlhbFZhbHVlOiBCb29sZWFuKSB7XHJcbiAgY29uc3QgW1ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZSgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW1ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV0gYXMgY29uc3Q7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21vZGFsL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbHNweVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==