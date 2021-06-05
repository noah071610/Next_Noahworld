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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.tsx");
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

/***/ "./components/Blog/Login/BlogLoginSection.tsx":
/*!****************************************************!*\
  !*** ./components/Blog/Login/BlogLoginSection.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.ts");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Login\\BlogLoginSection.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const GoogleBtn = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", false ? undefined : {
  target: "escb6z70",
  label: "GoogleBtn"
})("box-sizing:border-box;outline:none;width:100%;background-color:white;box-shadow:2px 2px 5px 1px rgba(0, 0, 0, 0.15);border:none;cursor:pointer;div{width:360px;display:flex;margin:0 auto;justify-content:center;align-items:center;padding:0.5rem 0;h3{transition:all 0.3s;}img{width:30px;}}&:hover{h3{color:", _config__WEBPACK_IMPORTED_MODULE_4__["BLUE_COLOR"], ";}}@media only screen and (max-width: 576px){div{width:200px;img{width:20px;}h3{font-size:0.8rem;}}}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXExvZ2luXFxCbG9nTG9naW5TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxOb2FoXFxEZXNrdG9wXFxQcm9qZWN0XFxOb2Fod29ybGRcXGNsaWVudFxcY29tcG9uZW50c1xcQmxvZ1xcTG9naW5cXEJsb2dMb2dpblNlY3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3QgR29vZ2xlQnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBoMyB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogJHtCTFVFX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdvb2dsZUxvZ2luID0gY3NzYFxyXG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5gO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXHJcbmNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XHJcbiAgcmVxdWlyZWQ6IFwiJHtuYW1lfSBpcyByZXF1aXJlZCFcIixcclxuICB0eXBlczoge1xyXG4gICAgZW1haWw6IFwiVGhpcyBpcyBub3QgYSB2YWxpZCAke25hbWV9IVwiLFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICByYW5nZTogXCIke25hbWV9IG11c3QgYmUgdXBwZXIgdGhlICR7bWlufSBzdHJpbmdzXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmludGVyZmFjZSBMb2dpblByb3BzIHtcclxuICBvbkNsaWNrU2lnblVwOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9naW5Gb3JtIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJsb2dMb2dpblNlY3Rpb246IEZDPExvZ2luUHJvcHM+ID0gKHsgb25DbGlja1NpZ25VcCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbG9nSW5FcnJvciwgbG9nSW5Eb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlQ2FsbGJhY2soKHZhbHVlczogTG9naW5Gb3JtKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGVtYWlsOiB2YWx1ZXMuZW1haWwsIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiVW5leHBlY3RlZCBFcm9yciEgcGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGxvZ0luRXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5Eb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkxvZyBJbiBTdWNjZXNzISBIYXZlIGEgbmljZSBkYXkg8J+YmVwiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2dJbkRvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fdGl0bGVcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBMb2dpbiBub3che1wiIFwifVxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJsb2dpbl9pY29uXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNjQvMDAwMDAwL2xvZ2luLXJvdW5kZWQtcmlnaHQucG5nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDM+QXJlIHlvdSByZWFkeSBmb3IganVtcGluZyB0byBteSB3b3JsZD88L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzPXt2YWxpZGF0ZU1lc3NhZ2VzfVxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgID5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5FLW1haWw8L0RpdmlkZXI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZW1haWxcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19PlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+UGFzc3dvcmQ8L0RpdmlkZXI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicGFzc3dvcmRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1pbjogOSB9XX0+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiLCBtYXJnaW5Ub3A6IFwiMS41cmVtXCIgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrU2lnblVwfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPEdvb2dsZUJ0bj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkubm9haHdvcmxkLnNpdGUvYXV0aC9nb29nbGVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiZ29vZ2xlXCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL2dvb2dsZS1sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxoMyBjc3M9e0dvb2dsZUxvZ2lufT5TaWduIGluIHdpdGggR29vZ2xlPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9Hb29nbGVCdG4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xvZ2luU2VjdGlvbjtcclxuIl19 */"));

const GoogleLogin = false ? undefined : {
  name: "bhxn6s-GoogleLogin",
  styles: "margin:0 0 0 1rem;font-weight:normal;label:GoogleLogin;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXExvZ2luXFxCbG9nTG9naW5TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXExvZ2luXFxCbG9nTG9naW5TZWN0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBEaXZpZGVyLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEdvb2dsZUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgaDMge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICR7QkxVRV9DT0xPUn07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHb29nbGVMb2dpbiA9IGNzc2BcclxuICBtYXJnaW46IDAgMCAwIDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuYDtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xyXG5jb25zdCB2YWxpZGF0ZU1lc3NhZ2VzID0ge1xyXG4gIHJlcXVpcmVkOiBcIiR7bmFtZX0gaXMgcmVxdWlyZWQhXCIsXHJcbiAgdHlwZXM6IHtcclxuICAgIGVtYWlsOiBcIlRoaXMgaXMgbm90IGEgdmFsaWQgJHtuYW1lfSFcIixcclxuICB9LFxyXG4gIG51bWJlcjoge1xyXG4gICAgcmFuZ2U6IFwiJHtuYW1lfSBtdXN0IGJlIHVwcGVyIHRoZSAke21pbn0gc3RyaW5nc1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7XHJcbiAgb25DbGlja1NpZ25VcDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCbG9nTG9naW5TZWN0aW9uOiBGQzxMb2dpblByb3BzPiA9ICh7IG9uQ2xpY2tTaWduVXAgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGxvZ0luRXJyb3IsIGxvZ0luRG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IExvZ2luRm9ybSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBlbWFpbDogdmFsdWVzLmVtYWlsLCBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlVuZXhwZWN0ZWQgRXJvcnIhIHBsZWFzZSB0cnkgYWdhaW4gb3IgZmVlZGJhY2sgdG8gdXNcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRG9uZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJMb2cgSW4gU3VjY2VzcyEgSGF2ZSBhIG5pY2UgZGF5IPCfmJlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5Eb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX3RpdGxlXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgTG9naW4gbm93IXtcIiBcIn1cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwibG9naW5faWNvblwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzY0LzAwMDAwMC9sb2dpbi1yb3VuZGVkLXJpZ2h0LnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgzPkFyZSB5b3UgcmVhZHkgZm9yIGp1bXBpbmcgdG8gbXkgd29ybGQ/PC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlcz17dmFsaWRhdGVNZXNzYWdlc31cclxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+RS1tYWlsPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtYWlsXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlBhc3N3b3JkPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtaW46IDkgfV19PlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEuNXJlbVwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja1NpZ25VcH0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX0+XHJcbiAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxHb29nbGVCdG4+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLm5vYWh3b3JsZC5zaXRlL2F1dGgvZ29vZ2xlXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImdvb2dsZVwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9nb29nbGUtbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8aDMgY3NzPXtHb29nbGVMb2dpbn0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvR29vZ2xlQnRuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dMb2dpblNlY3Rpb247XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "This is not a valid ${name}!"
  },
  number: {
    range: "${name} must be upper the ${min} strings"
  }
};

const BlogLoginSection = ({
  onClickSignUp
}) => {
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    logInError,
    logInDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const onFinish = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(values => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_IN_REQUEST"],
      data: {
        email: values.email,
        password: values.password
      }
    });
  }, []);
  const onFinishFailed = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Unexpected Erorr! please try again or feedback to us");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (logInError) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(logInError);
    }
  }, [logInError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (logInDone) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Log In Success! Have a nice day 😙");
      router.push("/");
    }
  }, [logInDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    className: "login_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Login now!", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
    alt: "login_icon",
    src: "https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Are you ready for jumping to my world?")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    validateMessages: validateMessages,
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "E-mail"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "email",
    rules: [{
      required: true
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Password"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      min: 9
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      width: "50%",
      marginTop: "1.5rem"
    },
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "Login"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClickSignUp,
    style: {
      width: "50%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "Sign up"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(GoogleBtn, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    href: "https://api.noahworld.site/auth/google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
    alt: "google",
    src: "https://img.icons8.com/color/144/000000/google-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h3", {
    css: GoogleLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Sign in with Google")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogLoginSection);

/***/ }),

/***/ "./components/Blog/Login/BlogSingUpSection.tsx":
/*!*****************************************************!*\
  !*** ./components/Blog/Login/BlogSingUpSection.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Login\\BlogSingUpSection.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const SignUpTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", false ? undefined : {
  target: "e1gmfdya0",
  label: "SignUpTitle"
})(false ? undefined : {
  name: "1gy2ser",
  styles: "margin:3rem 0;h1{display:flex;align-items:center;margin-bottom:1rem;img{margin-left:1rem;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXExvZ2luXFxCbG9nU2luZ1VwU2VjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUThCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXExvZ2luXFxCbG9nU2luZ1VwU2VjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgRGl2aWRlciwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNJR05fVVBfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBPTl9TSUdOX1VQX1BBR0UgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5jb25zdCBTaWduVXBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgaDEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXHJcbmNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XHJcbiAgcmVxdWlyZWQ6IFwiJHtuYW1lfSBpcyByZXF1aXJlZCFcIixcclxuICB0eXBlczoge1xyXG4gICAgZW1haWw6IFwiVGhpcyBpcyBub3QgYSB2YWxpZCAke25hbWV9IVwiLFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICByYW5nZTogXCIke25hbWV9IG11c3QgYmUgdW5kZXIgdGhlICR7bWlufSBzdHJpbmdzXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmludGVyZmFjZSBTaWduVXBQcm9wcyB7XHJcbiAgb25DbGlja0xvZ2luOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgTmFtZTogc3RyaW5nO1xyXG4gIEVtYWlsOiBzdHJpbmc7XHJcbiAgUGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQmxvZ1NpZ25VcFNlY3Rpb246IEZDPFNpZ25VcFByb3BzPiA9IG1lbW8oKHsgb25DbGlja0xvZ2luIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBzaWduVXBFcnJvciwgc2lnblVwRG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IFNpZ25VcEZvcm0pID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGVtYWlsOiB2YWx1ZXMuRW1haWwsIG5hbWU6IHZhbHVlcy5OYW1lLCBwYXNzd29yZDogdmFsdWVzLlBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlVuZXhwZWN0ZWQgRXJvcnIhIFBsZWFzZSB0cnkgYWdhaW4gb3IgZmVlZGJhY2sgdG8gdXNcIik7XHJcbiAgICB9XHJcbiAgfSwgW3NpZ25VcEVycm9yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRG9uZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJMb2cgSW4gU3VjY2VzcyEgRW5qb3kgeW91ciB0aW1lLlwiKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IE9OX1NJR05fVVBfUEFHRSxcclxuICAgICAgICBkYXRhOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoLCBzaWduVXBEb25lXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTaWduVXBUaXRsZSBjbGFzc05hbWU9XCJsb2dpbl90aXRsZVwiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIFNpZ24gVXAgbm93IXtcIiBcIn1cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwic2lnbnVwX2ljb25cIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2J1YmJsZXMvMTAwLzAwMDAwMC9hZGQtdXNlci1tYWxlLnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgzPkVuam95IHZhcmlvdXMgQ29udGVudHMgZm9yIGZyZWUhPC9oMz5cclxuICAgICAgPC9TaWduVXBUaXRsZT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzPXt2YWxpZGF0ZU1lc3NhZ2VzfVxyXG4gICAgICAgIG5hbWU9XCJuZXN0LW1lc3NhZ2VzXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiBmYWxzZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgPlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPkUtbWFpbDwvRGl2aWRlcj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJFbWFpbFwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgdHlwZTogXCJlbWFpbFwiIH1dfT5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlVzZXIgbmFtZTwvRGl2aWRlcj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJOYW1lXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtYXg6IDE1IH1dfT5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT1cImRkZFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+UGFzc3dvcmQ8L0RpdmlkZXI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiUGFzc3dvcmRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1pbjogOSB9XX0+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5Db25maXJtIFBhc3N3b3JkPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJDb25maXJtXCJcclxuICAgICAgICAgIGRlcGVuZGVuY2llcz17W1wiUGFzc3dvcmRcIl19XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoXCJQYXNzd29yZFwiKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCFcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIG1hcmdpblRvcDogXCIxLjVyZW1cIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0xvZ2lufSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAgR28gYmFjayBsb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhCbG9nU2lnblVwU2VjdGlvbik7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
/* eslint-disable no-template-curly-in-string */


const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "This is not a valid ${name}!"
  },
  number: {
    range: "${name} must be under the ${min} strings"
  }
};
const BlogSignUpSection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  onClickLogin
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    signUpError,
    signUpDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const onFinish = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(values => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"],
      data: {
        email: values.Email,
        name: values.Name,
        password: values.Password
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (signUpError) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Unexpected Erorr! Please try again or feedback to us");
    }
  }, [signUpError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (signUpDone) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Log In Success! Enjoy your time.");
      dispatch({
        type: _reducers_blog__WEBPACK_IMPORTED_MODULE_5__["ON_SIGN_UP_PAGE"],
        data: false
      });
    }
  }, [dispatch, signUpDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(SignUpTitle, {
    className: "login_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Sign Up now!", " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    alt: "signup_icon",
    src: "https://img.icons8.com/bubbles/100/000000/add-user-male.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Enjoy various Contents for free!")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    validateMessages: validateMessages,
    name: "nest-messages",
    initialValues: {
      remember: false
    },
    onFinish: onFinish,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "E-mail"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "Email",
    rules: [{
      required: true,
      type: "email"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "User name"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "Name",
    rules: [{
      required: true,
      max: 15
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: "ddd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Password"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "Password",
    rules: [{
      required: true,
      min: 9
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Confirm Password"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
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
      lineNumber: 99,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      width: "50%",
      marginTop: "1.5rem"
    },
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Sign up"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClickLogin,
    style: {
      width: "50%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Go back login"))));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(BlogSignUpSection));

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

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Blog_Login_BlogSingUpSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Blog/Login/BlogSingUpSection */ "./components/Blog/Login/BlogSingUpSection.tsx");
/* harmony import */ var _components_Blog_Login_BlogLoginSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Blog/Login/BlogLoginSection */ "./components/Blog/Login/BlogLoginSection.tsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@store/configureStore */ "./@store/configureStore.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\pages\\login.tsx";











const BlogLoginPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    onSignUpPage
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.blog);

  const onClickSignUp = () => {
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ON_SIGN_UP_PAGE"],
      data: true
    });
  };

  const onClickLogin = () => {
    dispatch({
      type: _reducers_blog__WEBPACK_IMPORTED_MODULE_2__["ON_SIGN_UP_PAGE"],
      data: false
    });
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Noah world | Login")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    className: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    className: "login_form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, onSignUpPage ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_Blog_Login_BlogSingUpSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClickLogin: onClickLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_Blog_Login_BlogLoginSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClickSignUp: onClickSignUp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    className: "login_image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("img", {
    alt: "login_main_poster",
    style: {
      width: "100%"
    },
    src: "/images/blog/signup.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }))));
});
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_INFO_REQUEST"]
  });
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_9__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(BlogLoginPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9Ac2FnYS9jb21tZW50LnRzIiwid2VicGFjazovLy8uL0BzYWdhL2luZGV4LnRzIiwid2VicGFjazovLy8uL0BzYWdhL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9Ac3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9nL0xvZ2luL0Jsb2dMb2dpblNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9Mb2dpbi9CbG9nU2luZ1VwU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInRoZW1lIiwiaGVhZGVyIiwicHJlUG9ydGZvbGlvIiwicG9zdFBvcnRmb2xpbyIsInBvc3RzIiwib25BYm91dCIsIm9uU2lnblVwUGFnZSIsInBvc3RFZGl0T24iLCJzZWFyY2hQb3N0cyIsImhhc2h0YWdQb3N0cyIsIm9uU2xpZGVNZW51Iiwib25IZWFkZXJUaXRsZSIsInNlYXJjaGVkS2V5d29yZCIsInNlYXJjaEtleXdvcmRMb2FkaW5nIiwic2VhcmNoS2V5d29yZERvbmUiLCJzZWFyY2hLZXl3b3JkRXJyb3IiLCJzZWFyY2hIYXNoVGFnTG9hZGluZyIsInNlYXJjaEhhc2hUYWdEb25lIiwic2VhcmNoSGFzaFRhZ0Vycm9yIiwiYWRkUXVpekxvYWRpbmciLCJhZGRRdWl6RG9uZSIsImFkZFF1aXpFcnJvciIsIk1PREVfQ0hBTkdFIiwiTE9BRF9QT1JURk9MSU9TIiwiTE9BRF9QT1JURk9MSU8iLCJMT0FEX1BSRVBPUlRGT0xJTyIsIkxPQURfUE9TVFBPUlRGT0xJTyIsIkNIQUdFX0hFQURFUiIsIlNXSVRDSF9BQk9VVCIsIk9OX0FCT1VUIiwiT0ZGX0FCT1VUIiwiT05fU0lHTl9VUF9QQUdFIiwiUkVNT1ZFX0lNQUdFIiwiUE9TVF9FRElUX09OIiwiUE9TVF9FRElUX09GRiIsIkNMSUNLX0hBU0hfVEFHIiwiT05fU0xJREVfTUVOVSIsIk9OX0hFQURFUl9USVRMRSIsIlNFQVJDSF9LRVlXT1JEX1JFUVVFU1QiLCJTRUFSQ0hfS0VZV09SRF9TVUNDRVNTIiwiU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSIsIlNFQVJDSF9LRVlXT1JEX0NMRUFSIiwiU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1QiLCJTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyIsIlNFQVJDSF9IQVNIX1RBR19GQUlMVVJFIiwiU0VBUkNIX0hBU0hfVEFHX0NMRUFSIiwiQUREX1FVSVpfUkVRVUVTVCIsIkFERF9RVUlaX1NVQ0NFU1MiLCJBRERfUVVJWl9GQUlMVVJFIiwiQUREX1FVSVpfQ0xFQVIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwiZGF0YSIsImVycm9yIiwicm9vdFJlZHVjZXIiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInBvc3QiLCJibG9nIiwidXNlciIsInRlY2hQb3N0cyIsImRhaWx5UG9zdHMiLCJjbGFzc1Bvc3RzIiwiY3VsdHVyZVBvc3RzIiwicXVpenplcyIsIndvcmRzIiwiaGFzaHRhZ3MiLCJtb3N0TGlrZWRQb3N0IiwibW9zdFZpZXdlZFBvc3QiLCJtb3N0Q29tbWVudGVkUG9zdCIsInByZXZQb3N0IiwibmV4dFBvc3QiLCJjb3VudFBvc3RzIiwiaW1hZ2VQYXRoIiwicG9zdEltYWdlUGF0aCIsInJlY2VudFZpZXdQb3N0IiwicmVjZW50Q29tbWVudFBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInVwbG9hZFBvc3RJbWFnZUxvYWRpbmciLCJ1cGxvYWRQb3N0SW1hZ2VEb25lIiwidXBsb2FkUG9zdEltYWdlRXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiZWRpdFBvc3RMb2FkaW5nIiwiZWRpdFBvc3REb25lIiwiZWRpdFBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUmVjZW50UG9zdHNMb2FkaW5nIiwibG9hZFJlY2VudFBvc3RzRG9uZSIsImxvYWRSZWNlbnRQb3N0c0Vycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyIsImxvYWRDYXRlZ29yeVBvc3RzRG9uZSIsImxvYWRDYXRlZ29yeVBvc3RzRXJyb3IiLCJsb2FkTW9yZVBvc3RzTG9hZGluZyIsImxvYWRNb3JlUG9zdHNEb25lIiwibG9hZE1vcmVQb3N0c0Vycm9yIiwibG9hZENsYXNzUG9zdHNMb2FkaW5nIiwibG9hZENsYXNzUG9zdHNEb25lIiwibG9hZENsYXNzUG9zdHNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImVkaXRDb21tZW50TG9hZGluZyIsImVkaXRDb21tZW50RG9uZSIsImVkaXRDb21tZW50RXJyb3IiLCJyZW1vdmVDb21tZW50TG9hZGluZyIsInJlbW92ZUNvbW1lbnREb25lIiwicmVtb3ZlQ29tbWVudEVycm9yIiwibGlrZUNvbW1lbnRMb2FkaW5nIiwibGlrZUNvbW1lbnREb25lIiwibGlrZUNvbW1lbnRFcnJvciIsInVubGlrZUNvbW1lbnRMb2FkaW5nIiwidW5saWtlQ29tbWVudERvbmUiLCJ1bmxpa2VDb21tZW50RXJyb3IiLCJhZGRTdWJDb21tZW50TG9hZGluZyIsImFkZFN1YkNvbW1lbnREb25lIiwiYWRkU3ViQ29tbWVudEVycm9yIiwiZWRpdFN1YkNvbW1lbnRMb2FkaW5nIiwiZWRpdFN1YkNvbW1lbnREb25lIiwiZWRpdFN1YkNvbW1lbnRFcnJvciIsInJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlU3ViQ29tbWVudERvbmUiLCJyZW1vdmVTdWJDb21tZW50RXJyb3IiLCJoYXNNb3JlUG9zdHMiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX0NMRUFSIiwiVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCIsIlVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MiLCJVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFIiwiVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9DTEVBUiIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCIsIkxPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyIsIkxPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSIsIkxPQURfTU9SRV9QT1NUU19SRVFVRVNUIiwiTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSIsIkxPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCIsIkxPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyIsIkxPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRSIsIkVESVRfUE9TVF9SRVFVRVNUIiwiRURJVF9QT1NUX1NVQ0NFU1MiLCJFRElUX1BPU1RfRkFJTFVSRSIsIkVESVRfUE9TVF9DTEVBUiIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX0NMRUFSIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTElLRV9DT01NRU5UX1JFUVVFU1QiLCJMSUtFX0NPTU1FTlRfU1VDQ0VTUyIsIkxJS0VfQ09NTUVOVF9GQUlMVVJFIiwiVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCIsIlVOTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJVTkxJS0VfQ09NTUVOVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfQ0xFQVIiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFRElUX0NPTU1FTlRfUkVRVUVTVCIsIkVESVRfQ09NTUVOVF9TVUNDRVNTIiwiRURJVF9DT01NRU5UX0ZBSUxVUkUiLCJFRElUX0NPTU1FTlRfQ0xFQVIiLCJBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUiLCJBRERfU1VCX0NPTU1FTlRfQ0xFQVIiLCJSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUiLCJFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MiLCJFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUiLCJFRElUX1NVQl9DT01NRU5UX0NMRUFSIiwiY2F0ZWdvcnkiLCJ1bnNoaWZ0IiwibGVuZ3RoIiwibW9yZVRlY2hQb3N0cyIsImNvbmNhdCIsIm1vcmVQb3N0cyIsIm1vcmVEYWlseVBvc3RzIiwiY2xhc3NQb3N0c19jbGFzcyIsImN1bHR1cmVQb3N0c19jbGFzcyIsIkNvbW1lbnRzIiwicHVzaCIsIlBvc3RMaWtlcnMiLCJpZCIsIlVzZXJJZCIsImZpbHRlciIsInYiLCJmaW5kIiwiQ29tbWVudElkIiwiY29udGVudCIsIm5ld0NvbW1lbnQiLCJDb21tZW50TGlrZXJzIiwiQ29tbWVudHNXaXRob3V0RGVsZXRlZCIsIlN1YkNvbW1lbnRzIiwiZnVsbFN1YkNvbW1lbnQiLCJTdWJDb21tZW50SWQiLCJjb25maXJtUGFzc3dvcmQiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nSW5Hb29nbGVMb2FkaW5nIiwibG9nSW5Hb29nbGVEb25lIiwibG9nSW5Hb29nbGVFcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJsb2FkSW5mb0xvYWRpbmciLCJsb2FkSW5mb0RvbmUiLCJsb2FkSW5mb0Vycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImFkZEljb25Mb2FkaW5nIiwiYWRkSWNvbkRvbmUiLCJhZGRJY29uRXJyb3IiLCJyZW1vdmVJY29uTG9hZGluZyIsInJlbW92ZUljb25Eb25lIiwicmVtb3ZlSWNvbkVycm9yIiwiY29uZmlybVBhc3N3b3JkTG9hZGluZyIsImNvbmZpcm1QYXNzd29yZERvbmUiLCJjb25maXJtUGFzc3dvcmRFcnJvciIsIndpdGhkcmF3YWxMb2FkaW5nIiwid2l0aGRyYXdhbERvbmUiLCJ3aXRoZHJhd2FsRXJyb3IiLCJjaGFuZ2VQYXNzd29yZExvYWRpbmciLCJjaGFuZ2VQYXNzd29yZERvbmUiLCJjaGFuZ2VQYXNzd29yZEVycm9yIiwiY2hhbmdlTmFtZUxvYWRpbmciLCJjaGFuZ2VOYW1lRG9uZSIsImNoYW5nZU5hbWVFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19JTl9DTEVBUiIsIkxPR19JTl9HT09HTEVfUkVRVUVTVCIsIkxPR19JTl9HT09HTEVfU1VDQ0VTUyIsIkxPR19JTl9HT09HTEVfRkFJTFVSRSIsIkxPR19JTl9HT09HTEVfQ0xFQVIiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX0NMRUFSIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9DTEVBUiIsIkxPQURfSU5GT19SRVFVRVNUIiwiTE9BRF9JTkZPX1NVQ0NFU1MiLCJMT0FEX0lORk9fRkFJTFVSRSIsIkFERF9JQ09OX1JFUVVFU1QiLCJBRERfSUNPTl9TVUNDRVNTIiwiQUREX0lDT05fRkFJTFVSRSIsIkFERF9JQ09OX0NMRUFSIiwiUkVNT1ZFX0lDT05fUkVRVUVTVCIsIlJFTU9WRV9JQ09OX1NVQ0NFU1MiLCJSRU1PVkVfSUNPTl9GQUlMVVJFIiwiUkVNT1ZFX0lDT05fQ0xFQVIiLCJDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCIsIkNIQU5HRV9QQVNTV09SRF9TVUNDRVNTIiwiQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkUiLCJDSEFOR0VfUEFTU1dPUkRfQ0xFQVIiLCJDSEFOR0VfTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OQU1FX0ZBSUxVUkUiLCJDSEFOR0VfTkFNRV9DTEVBUiIsIldJVEhEUldBTF9SRVFVRVNUIiwiV0lUSERSV0FMX1NVQ0NFU1MiLCJXSVRIRFJXQUxfRkFJTFVSRSIsIldJVEhEUldBTF9DTEVBUiIsIkNPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCIsIkNPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyIsIkNPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSIsIkNPTkZJUk1fUEFTU1dPUkRfQ0xFQVIiLCJpY29uIiwibmFtZSIsIm5ld05hbWUiLCJhZGRRdWl6QVBJIiwiYXhpb3MiLCJhZGRRdWl6IiwiY2FsbCIsInB1dCIsImRlbGF5IiwiZXJyIiwicmVzcG9uc2UiLCJzZWFyY2hLZXl3b3JkQVBJIiwic2VhcmNoS2V5d29yZCIsInNlYXJjaEhhc2h0YWdBUEkiLCJzZWFyY2hIYXNodGFnIiwid2F0Y2hBZGRRdWl6IiwidGFrZUxhdGVzdCIsIndhdGNoU2VhcmNoS2V5d29yZCIsIndhdGNoU2VhcmNoSGFzaHRhZyIsImJsb2dTYWdhIiwiYWxsIiwiZm9yayIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxldGUiLCJyZW1vdmVDb21tZW50IiwiZWRpdENvbW1lbnRBUEkiLCJlZGl0Q29tbWVudCIsImxpa2VDb21tZW50QVBJIiwicGF0Y2giLCJsaWtlQ29tbWVudCIsInVubGlrZUNvbW1lbnRBUEkiLCJ1bmxpa2VDb21tZW50IiwiYWRkU3ViQ29tbWVudEFQSSIsImFkZFN1YkNvbW1lbnQiLCJyZW1vdmVTdWJDb21tZW50QVBJIiwicmVtb3ZlU3ViQ29tbWVudCIsImVkaXRTdWJDb21tZW50QVBJIiwiZWRpdFN1YkNvbW1lbnQiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJ3YXRjaEVkaXRDb21tZW50Iiwid2F0Y2hMaWtlQ29tbWVudCIsIndhdGNoVW5saWtlQ29tbWVudCIsIndhdGNoQWRkU3ViQ29tbWVudCIsIndhdGNoUmVtb3ZlU3ViQ29tbWVudCIsIndhdGNoRWRpdFN1YkNvbW1lbnQiLCJjb21tZW50U2FnYSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIkJBQ0tFTkRfVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJsb2FkQ2F0ZWdvcnlQb3N0c0FQSSIsImxvYWRDYXRlZ29yeVBvc3RzIiwibG9hZE1vcmVQb3N0c0FQSSIsIkxhc3RJZCIsImxvYWRNb3JlUG9zdHMiLCJsb2FkQ2xhc3NQb3N0c0FQSSIsImxvYWRDbGFzc1Bvc3RzIiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsImxvYWRSZWNlbnRQb3N0c0FQSSIsImxvYWRSZWNlbnRQb3N0cyIsImxpa2VQb3N0QVBJIiwiUG9zdElkIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsInVwbG9hZFBvc3RJbWFnZUFQSSIsInVwbG9hZFBvc3RJbWFnZSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiZWRpdFBvc3RBUEkiLCJlZGl0UG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hsb2FkQ2F0ZWdvcnlQb3N0cyIsIndhdGNobG9hZE1vcmVQb3N0cyIsIndhdGNoTG9hZFJlY2VudFBvc3RzIiwid2F0Y2hsb2FkQ2xhc3NQb3N0cyIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hFZGl0UG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hVcGxvYWRQb3N0SW1hZ2UiLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nSW5Hb29nbGVBUEkiLCJsb2dJbkdvb2dsZSIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImFkZEljb25BUEkiLCJhZGRJY29uIiwicmVtb3ZlSWNvbkFQSSIsInJlbW92ZUljb24iLCJsb2FkSW5mb0FQSSIsImxvYWRJbmZvIiwiY29uZmlybVBhc3N3b3JkQVBJIiwiY2hhbmdlUGFzc3dvcmRBUEkiLCJjaGFuZ2VQYXNzd29yZCIsImNoYW5nZU5hbWVBUEkiLCJjaGFuZ2VOYW1lIiwid2l0aGRyYXdhbEFQSSIsIndpdGhkcmF3YWwiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dJbkdvb2dsZSIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEFkZEljb24iLCJ3YXRjaFJlbW92ZUljb24iLCJ3YXRjaExvYWRJbmZvIiwid2F0Y2hDb25maXJtUGFzc3dvcmQiLCJ3YXRjaENoYW5nZVBhc3N3b3JkIiwid2F0Y2hDaGFuZ2VOYW1lIiwid2F0Y2hXaXRoZHJhd2FsIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsIkdvb2dsZUJ0biIsIkJMVUVfQ09MT1IiLCJHb29nbGVMb2dpbiIsInZhbGlkYXRlTWVzc2FnZXMiLCJyZXF1aXJlZCIsInR5cGVzIiwiZW1haWwiLCJudW1iZXIiLCJyYW5nZSIsIkJsb2dMb2dpblNlY3Rpb24iLCJvbkNsaWNrU2lnblVwIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwib25GaW5pc2giLCJ1c2VDYWxsYmFjayIsInZhbHVlcyIsInBhc3N3b3JkIiwib25GaW5pc2hGYWlsZWQiLCJtZXNzYWdlIiwidXNlRWZmZWN0Iiwic3VjY2VzcyIsInJlbWVtYmVyIiwibWluIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJTaWduVXBUaXRsZSIsIkJsb2dTaWduVXBTZWN0aW9uIiwibWVtbyIsIm9uQ2xpY2tMb2dpbiIsIkVtYWlsIiwiTmFtZSIsIlBhc3N3b3JkIiwibWF4IiwiZ2V0RmllbGRWYWx1ZSIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJNQUlOX0NPTE9SIiwiU1VCX0NPTE9SIiwiR1JBWV9DT0xPUiIsIkJHX0NPTE9SIiwiUkVEX0NPTE9SIiwiQ0FSRF9ERVNDX1BTIiwiQ0FSRF9ERVNDX0NPTVUiLCJDQVJEX0RFU0NfQ09PUCIsIkNhcmRDb250ZW50cyIsInNxdWFyZVRpdGxlIiwidGl0bGUiLCJkZXNjIiwic3JjIiwibmF2Q29udGVudHMiLCJmYUFkZHJlc3NDYXJkIiwiZXhwbGFpbiIsImZhTGFwdG9wIiwiZmFJbWFnZXMiLCJmYUVudmVsb3BlIiwic2tpbGxzIiwibGV2ZWwiLCJzdWJfc2tpbGxzIiwiZGF0YVNvdXJjZSIsImtleSIsImRhdGUiLCJzdW1tYXJ5Iiwic2NvcmUiLCJjb2x1bW5zIiwiZGF0YUluZGV4IiwicG9ydGZvbGlvcyIsInRhZ3MiLCJnaXQiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwicHJvbSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsImhyZWYiLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiT2JqZWN0Iiwic2NyaXB0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJwcmVmZXRjaCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJlYWN0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJwYXRobmFtZSIsImxvY2FsZXMiLCJsb2NhbGUiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInJlc29sdmVkQXMiLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsImUiLCJzaGFsbG93Iiwib3B0aW9ucyIsImluaXRpYWwiLCJwcm9wcyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwicmVwbGFjZSIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJ0YXJnZXQiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQmxvZ0xvZ2luUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiQ29va2llIiwiRU5EIiwidG9Qcm9taXNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFB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R0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFDQSxNQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFDQSxNQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7O0FBRVAsTUFBTXhLLE9BQU8s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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBCbG9nU3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdGhlbWU6IFwibGlnaHRcIixcclxuICBoZWFkZXI6IFwiYmxvZ1wiLFxyXG4gIHByZVBvcnRmb2xpbzogW10sXHJcbiAgcG9zdFBvcnRmb2xpbzogW10sXHJcbiAgcG9zdHM6IFtdLFxyXG4gIG9uQWJvdXQ6IGZhbHNlLFxyXG4gIG9uU2lnblVwUGFnZTogZmFsc2UsXHJcbiAgcG9zdEVkaXRPbjogZmFsc2UsXHJcbiAgc2VhcmNoUG9zdHM6IFtdLFxyXG4gIGhhc2h0YWdQb3N0czogW10sXHJcbiAgb25TbGlkZU1lbnU6IGZhbHNlLFxyXG4gIG9uSGVhZGVyVGl0bGU6IGZhbHNlLFxyXG5cclxuICBzZWFyY2hlZEtleXdvcmQ6IG51bGwsXHJcblxyXG4gIHNlYXJjaEtleXdvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hLZXl3b3JkRG9uZTogZmFsc2UsXHJcbiAgc2VhcmNoS2V5d29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgc2VhcmNoSGFzaFRhZ0xvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaEhhc2hUYWdEb25lOiBmYWxzZSxcclxuICBzZWFyY2hIYXNoVGFnRXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRRdWl6TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUXVpekRvbmU6IGZhbHNlLFxyXG4gIGFkZFF1aXpFcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9ERV9DSEFOR0UgPSBcIk1PREVfQ0hBTkdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPUlRGT0xJT1MgPSBcIkxPQURfUE9SVEZPTElPU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1JURk9MSU8gPSBcIkxPQURfUE9SVEZPTElPXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BSRVBPUlRGT0xJTyA9IFwiTE9BRF9QUkVQT1JURk9MSU9cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFBPUlRGT0xJTyA9IFwiTE9BRF9QU1RQT1JURk9MSU9cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQUdFX0hFQURFUiA9IFwiQ0hBR0VfSEVBREVSXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfQUJPVVQgPSBcIlNXSVRDSF9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fQUJPVVQgPSBcIk9OX0FCT1VUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPRkZfQUJPVVQgPSBcIk9GRl9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fU0lHTl9VUF9QQUdFID0gXCJPTl9TSUdOX1VQX1BBR0VcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBQT1NUX0VESVRfT04gPSBcIlBPU1RfRURJVF9PTlwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUE9TVF9FRElUX09GRiA9IFwiUE9TVF9FRElUX09GRlwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0xJQ0tfSEFTSF9UQUcgPSBcIkNMSUNLX0hBU0hfVEFHXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9TTElERV9NRU5VID0gXCJPTl9TTElERV9NRU5VXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBPTl9IRUFERVJfVElUTEUgPSBcIk9OX0hFQURFUl9USVRMRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QgPSBcIlNFQVJDSF9LRVlXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MgPSBcIlNFQVJDSF9LRVlXT1JEX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUgPSBcIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9LRVlXT1JEX0NMRUFSID0gXCJTRUFSQ0hfS0VZV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19SRVFVRVNUID0gXCJTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MgPSBcIlNFQVJDSF9IQVNIX1RBR19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSA9IFwiU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19DTEVBUiA9IFwiU0VBUkNIX0hBU0hfVEFHX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfUkVRVUVTVCA9IFwiQUREX1FVSVpfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfU1VDQ0VTUyA9IFwiQUREX1FVSVpfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfRkFJTFVSRSA9IFwiQUREX1FVSVpfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1FVSVpfQ0xFQVIgPSBcIkFERF9RVUlaX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBCbG9nU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIE1PREVfQ0hBTkdFOlxyXG4gICAgICAgIGRyYWZ0LnRoZW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBR0VfSEVBREVSOlxyXG4gICAgICAgIGRyYWZ0LmhlYWRlciA9IGFjdGlvbi5oZWFkZXI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1dJVENIX0FCT1VUOlxyXG4gICAgICAgIGRyYWZ0Lm9uQWJvdXQgPSAhZHJhZnQub25BYm91dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9BQk9VVDpcclxuICAgICAgICBkcmFmdC5vbkFib3V0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPRkZfQUJPVVQ6XHJcbiAgICAgICAgZHJhZnQub25BYm91dCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX1NJR05fVVBfUEFHRTpcclxuICAgICAgICBkcmFmdC5vblNpZ25VcFBhZ2UgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQT1NUX0VESVRfT046XHJcbiAgICAgICAgZHJhZnQucG9zdEVkaXRPbiA9ICFkcmFmdC5wb3N0RWRpdE9uO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX1NMSURFX01FTlU6XHJcbiAgICAgICAgZHJhZnQub25TbGlkZU1lbnUgPSAhZHJhZnQub25TbGlkZU1lbnU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fSEVBREVSX1RJVExFOlxyXG4gICAgICAgIGRyYWZ0Lm9uSGVhZGVyVGl0bGUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQT1NUX0VESVRfT0ZGOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RFZGl0T24gPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0cyA9IGFjdGlvbi5kYXRhLnNlYXJjaFBvc3RzO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaGVkS2V5d29yZCA9IGFjdGlvbi5kYXRhLnNlYXJjaGVkS2V5d29yZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzaHRhZ1Bvc3RzID0gYWN0aW9uLmRhdGEuaGFzaHRhZ1Bvc3RzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0hBU0hfVEFHX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCBibG9nIGZyb20gXCIuL2Jsb2dcIjtcclxuaW1wb3J0IHsgQmxvZ1N0YXRlLCBQb3N0U3RhdGUsIFVzZXJTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9vdFN0YXRlIHtcclxuICBibG9nOiBCbG9nU3RhdGU7XHJcbiAgdXNlcjogVXNlclN0YXRlO1xyXG4gIHBvc3Q6IFBvc3RTdGF0ZTtcclxufVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGU6IFJvb3RTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICBwb3N0LFxyXG4gICAgICAgIGJsb2csXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBDb21tZW50c0ludGVyLCBQb3N0U3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdGVjaFBvc3RzOiBbXSxcclxuICBkYWlseVBvc3RzOiBbXSxcclxuICBjbGFzc1Bvc3RzOiBbXSxcclxuICBjdWx0dXJlUG9zdHM6IFtdLFxyXG4gIHF1aXp6ZXM6IFtdLFxyXG4gIHdvcmRzOiBbXSxcclxuICBoYXNodGFnczogW10sXHJcbiAgbW9zdExpa2VkUG9zdDogbnVsbCxcclxuICBtb3N0Vmlld2VkUG9zdDogbnVsbCxcclxuICBtb3N0Q29tbWVudGVkUG9zdDogbnVsbCxcclxuICBwb3N0OiBudWxsLFxyXG4gIHByZXZQb3N0OiBbXSxcclxuICBuZXh0UG9zdDogW10sXHJcbiAgY291bnRQb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoOiBudWxsLFxyXG4gIHBvc3RJbWFnZVBhdGg6IG51bGwsXHJcbiAgcmVjZW50Vmlld1Bvc3Q6IG51bGwsXHJcbiAgcmVjZW50Q29tbWVudFBvc3Q6IG51bGwsXHJcblxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IGZhbHNlLFxyXG5cclxuICB1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRQb3N0SW1hZ2VEb25lOiBmYWxzZSxcclxuICB1cGxvYWRQb3N0SW1hZ2VFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgZWRpdFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBlZGl0UG9zdERvbmU6IGZhbHNlLFxyXG4gIGVkaXRQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRSZWNlbnRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRSZWNlbnRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRSZWNlbnRQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRDYXRlZ29yeVBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZENhdGVnb3J5UG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRNb3JlUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTW9yZVBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZE1vcmVQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZENsYXNzUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkQ2xhc3NQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRDbGFzc1Bvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBlZGl0Q29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGVkaXRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgZWRpdENvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbGlrZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGxpa2VDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICB1bmxpa2VDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZUNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGFkZFN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRTdWJDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkU3ViQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgZWRpdFN1YkNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBlZGl0U3ViQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGVkaXRTdWJDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVTdWJDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlU3ViQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVN1YkNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGhhc01vcmVQb3N0czogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19DTEVBUiA9IFwiVVBMT0FEX0lNQUdFU19DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1MgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUgPSBcIlVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSID0gXCJVUExPQURfUE9TVF9JTUFHRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0NMRUFSID0gXCJBRERfUE9TVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9DQVRFR09SWV9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFID0gXCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9QT1NUU19TVUNDRVNTID0gXCJMT0FEX01PUkVfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfTU9SRV9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DTEFTU19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9SRVFVRVNUID0gXCJFRElUX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX1NVQ0NFU1MgPSBcIkVESVRfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfRkFJTFVSRSA9IFwiRURJVF9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DTEVBUiA9IFwiRURJVF9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfQ0xFQVIgPSBcIlJFTU9WRV9QT1NUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX0NPTU1FTlRfUkVRVUVTVCA9IFwiTElLRV9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfQ09NTUVOVF9TVUNDRVNTID0gXCJMSUtFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX0ZBSUxVUkUgPSBcIkxJS0VfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCA9IFwiVU5MSUtFX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiVU5MSUtFX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSA9IFwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0NMRUFSID0gXCJBRERfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSBcIlJFTU9WRV9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSBcIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSBcIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfUkVRVUVTVCA9IFwiRURJVF9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9TVUNDRVNTID0gXCJFRElUX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX0ZBSUxVUkUgPSBcIkVESVRfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfQ0xFQVIgPSBcIkVESVRfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfU1VCX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9TVUJfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX1NVQl9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9DTEVBUiA9IFwiQUREX1NVQl9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QgPSBcIlJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyA9IFwiUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVCA9IFwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MgPSBcIkVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFID0gXCJFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIgPSBcIkVESVRfU1VCX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFBvc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0OiBhbnkpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwidGVjaFwiICYmIGRyYWZ0LnRlY2hQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiICYmIGRyYWZ0LmRhaWx5UG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiY2xhc3NcIiAmJiBkcmFmdC5jbGFzc1Bvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiAmJiBkcmFmdC5jdWx0dXJlUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnRlY2hQb3N0cyA9IGFjdGlvbi5kYXRhLnRlY2hQb3N0cztcclxuICAgICAgICBkcmFmdC5kYWlseVBvc3RzID0gYWN0aW9uLmRhdGEuZGFpbHlQb3N0cztcclxuICAgICAgICBkcmFmdC5oYXNodGFncyA9IGFjdGlvbi5kYXRhLmhhc2h0YWdzO1xyXG4gICAgICAgIGRyYWZ0Lm1vc3RWaWV3ZWRQb3N0ID0gYWN0aW9uLmRhdGEubW9zdFZpZXdlZFBvc3Q7XHJcbiAgICAgICAgZHJhZnQubW9zdExpa2VkUG9zdCA9IGFjdGlvbi5kYXRhLm1vc3RMaWtlZFBvc3Q7XHJcbiAgICAgICAgZHJhZnQubW9zdENvbW1lbnRlZFBvc3QgPSBhY3Rpb24uZGF0YS5tb3N0Q29tbWVudGVkUG9zdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5wb3N0ID0gYWN0aW9uLmRhdGEucG9zdDtcclxuICAgICAgICBkcmFmdC5wcmV2UG9zdCA9IGFjdGlvbi5kYXRhLnByZXZQb3N0O1xyXG4gICAgICAgIGRyYWZ0Lm5leHRQb3N0ID0gYWN0aW9uLmRhdGEubmV4dFBvc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC50ZWNoUG9zdHMgPSBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJ0ZWNoXCIgPyBhY3Rpb24uZGF0YS5wb3N0cyA6IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmRhaWx5UG9zdHMgPSBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiID8gYWN0aW9uLmRhdGEucG9zdHMgOiBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb3VudFBvc3RzID0gYWN0aW9uLmRhdGEuY291bnRQb3N0cztcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5wb3N0cy5sZW5ndGggPiA2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8v7Lm07YWM6rOg66as7JeQIOunnuuKlCDtj6zsiqTtirjrpbwg64Sj7Ja07KSA64ukLlxyXG4gICAgICAgIGNvbnN0IG1vcmVUZWNoUG9zdHMgPVxyXG4gICAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwidGVjaFwiICYmIGRyYWZ0LnRlY2hQb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEubW9yZVBvc3RzKTtcclxuICAgICAgICBjb25zdCBtb3JlRGFpbHlQb3N0cyA9XHJcbiAgICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJkYWlseVwiICYmIGRyYWZ0LmRhaWx5UG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLm1vcmVQb3N0cyk7XHJcbiAgICAgICAgZHJhZnQudGVjaFBvc3RzID0gbW9yZVRlY2hQb3N0cztcclxuICAgICAgICBkcmFmdC5kYWlseVBvc3RzID0gbW9yZURhaWx5UG9zdHM7XHJcbiAgICAgICAgLy/rtojrn6zsmKgg7Y+s7Iqk7Yq46rCAIGxpbWl06rCS7J24IDbqsJzrnbzripTqsoPsnYAg67aI65+s7JioIO2PrOyKpO2KuOqwgCDrjZQg7J6I64uk64qUIOydmOuvuOydtOuLpC5cclxuICAgICAgICAvL+unjOyVvSDqsK/siJjqsIAg65SxIOunnuyVhOyEnCDri6TsnYwg6rCS7J20IOyXhuuLpOqzoCDtlbTrj4Qg6re4IOyalOyyreydgCAw6rCc7J6E7Jy866GcIGZhbHNl6rCAIOuQnOuLpC5cclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5tb3JlUG9zdHMubGVuZ3RoID09PSA2O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTU9SRV9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jbGFzc1Bvc3RzID0gYWN0aW9uLmRhdGEuY2xhc3NQb3N0c19jbGFzcztcclxuICAgICAgICBkcmFmdC5jdWx0dXJlUG9zdHMgPSBhY3Rpb24uZGF0YS5jdWx0dXJlUG9zdHNfY2xhc3M7XHJcbiAgICAgICAgZHJhZnQucXVpenplcyA9IGFjdGlvbi5kYXRhLnF1aXp6ZXM7XHJcbiAgICAgICAgZHJhZnQud29yZHMgPSBhY3Rpb24uZGF0YS53b3JkcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Db21tZW50cz8ucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Qb3N0TGlrZXJzPy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Qb3N0TGlrZXJzPy5maWx0ZXIoKHY6IGFueSkgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0UG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdC5Db21tZW50cy5maW5kKCh2OiBDb21tZW50c0ludGVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkO1xyXG4gICAgICAgIH0pLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5uZXdDb21tZW50O1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBFRElUX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoKHY6IGFueSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKS5Db21tZW50TGlrZXJzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIC8vUkVRVUVTVCAsIFNVQ0NFU1MgLCBGQUlMVVJFIOuhnCBSZWR1Y2Vy66W8IOyqvOqwnOyEnCDsmKTrpZjqtIDrpqzrpbwg67O064ukIOyJveqyjCDtlojsirXri4jri6QuXHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vaW1tZXIg7KCB7Jqp7Jy866GcIOu2iOuzgOyEseydhCDslYjsp4DsvJzrj4Qg65CoLlxyXG4gICAgICAgIGxldCBDb21tZW50c1dpdGhvdXREZWxldGVkID0gZHJhZnQucG9zdD8uQ29tbWVudHM/LmZpbmQoXHJcbiAgICAgICAgICAodjogQ29tbWVudHNJbnRlcikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkXHJcbiAgICAgICAgKS5Db21tZW50TGlrZXJzLmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnBvc3QuQ29tbWVudHMuZmluZChcclxuICAgICAgICAgICh2OiBDb21tZW50c0ludGVyKSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWRcclxuICAgICAgICApLkNvbW1lbnRMaWtlcnMgPSBDb21tZW50c1dpdGhvdXREZWxldGVkO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5maW5kKCh2OiBhbnkpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCkuU3ViQ29tbWVudHMucHVzaChcclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmZ1bGxTdWJDb21tZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9TVUJfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0LkNvbW1lbnRzLmZpbmQoKHY6IENvbW1lbnRzSW50ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQ7XHJcbiAgICAgICAgfSkuU3ViQ29tbWVudHMuZmluZCgodjogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuU3ViQ29tbWVudElkO1xyXG4gICAgICAgIH0pLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19DTEVBUjpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3RJbWFnZVBhdGggPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVjZW50Vmlld1Bvc3QgPSBhY3Rpb24uZGF0YS5yZWNlbnRWaWV3UG9zdDtcclxuICAgICAgICBkcmFmdC5yZWNlbnRDb21tZW50UG9zdCA9IGFjdGlvbi5kYXRhLnJlY2VudENvbW1lbnRQb3N0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG4gIGltYWdlUGF0aDogbnVsbCxcclxuICBjb25maXJtUGFzc3dvcmQ6IGZhbHNlLFxyXG5cclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvZ0luR29vZ2xlTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Hb29nbGVEb25lOiBmYWxzZSxcclxuICBsb2dJbkdvb2dsZUVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkSW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZEluZm9FcnJvcjogZmFsc2UsXHJcblxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkSWNvbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZEljb25Eb25lOiBmYWxzZSxcclxuICBhZGRJY29uRXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVJY29uTG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlSWNvbkRvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUljb25FcnJvcjogZmFsc2UsXHJcblxyXG4gIGNvbmZpcm1QYXNzd29yZExvYWRpbmc6IGZhbHNlLFxyXG4gIGNvbmZpcm1QYXNzd29yZERvbmU6IGZhbHNlLFxyXG4gIGNvbmZpcm1QYXNzd29yZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgd2l0aGRyYXdhbExvYWRpbmc6IGZhbHNlLFxyXG4gIHdpdGhkcmF3YWxEb25lOiBmYWxzZSxcclxuICB3aXRoZHJhd2FsRXJyb3I6IGZhbHNlLFxyXG5cclxuICBjaGFuZ2VQYXNzd29yZExvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZVBhc3N3b3JkRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlUGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGNoYW5nZU5hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmFtZUVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fQ0xFQVIgPSBcIkxPR19JTl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfUkVRVUVTVCA9IFwiTE9HX0lOX0dPT0dMRV9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX1NVQ0NFU1MgPSBcIkxPR19JTl9HT09HTEVfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9GQUlMVVJFID0gXCJMT0dfSU5fR09PR0xFX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfQ0xFQVIgPSBcIkxPR19JTl9HT09HTEVfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0NMRUFSID0gXCJMT0dfT1VUX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9DTEVBUiA9IFwiU0lHTl9VUF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19SRVFVRVNUID0gXCJMT0FEX0lORk9fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfSU5GT19TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9JTkZPX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9SRVFVRVNUID0gXCJBRERfSUNPTl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9TVUNDRVNTID0gXCJBRERfSUNPTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9GQUlMVVJFID0gXCJBRERfSUNPTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfSUNPTl9DTEVBUiA9IFwiQUREX0lDT05fQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9SRVFVRVNUID0gXCJSRU1PVkVfSUNPTl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9TVUNDRVNTID0gXCJSRU1PVkVfSUNPTl9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9GQUlMVVJFID0gXCJSRU1PVkVfSUNPTl9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSUNPTl9DTEVBUiA9IFwiUkVNT1ZFX0lDT05fQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCA9IFwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9TVUNDRVNTID0gXCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkUgPSBcIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfQ0xFQVIgPSBcIkNIQU5HRV9QQVNTV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OQU1FX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OQU1FX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OQU1FX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FX0NMRUFSID0gXCJDSEFOR0VfTkFNRV9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9SRVFVRVNUID0gXCJXSVRIRFJXQUxfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX1NVQ0NFU1MgPSBcIldJVEhEUldBTF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfRkFJTFVSRSA9IFwiV0lUSERSV0FMX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9DTEVBUiA9IFwiV0lUSERSV0FMX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9SRVFVRVNUID0gXCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyA9IFwiQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUgPSBcIkNPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9DTEVBUiA9IFwiQ09ORklSTV9QQVNTV09SRF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogVXNlclN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQ6IGFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fR09PR0xFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRJbmZvRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lORk9fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm9uU2lnblVwUGFnZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXNlci5pY29uID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIuaWNvbiA9IFwiL2ltYWdlcy9ibG9nL2RlZmF1bHQtdXNlci5wbmdcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIubmFtZSA9IGFjdGlvbi5kYXRhLm5ld05hbWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTkFNRV9DTEVBUjpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgV0lUSERSV0FMX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9RVUlaX0NMRUFSLFxyXG4gIEFERF9RVUlaX0ZBSUxVUkUsXHJcbiAgQUREX1FVSVpfUkVRVUVTVCxcclxuICBBRERfUVVJWl9TVUNDRVNTLFxyXG4gIFNFQVJDSF9IQVNIX1RBR19DTEVBUixcclxuICBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSxcclxuICBTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCxcclxuICBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUyxcclxuICBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gIFNFQVJDSF9LRVlXT1JEX1JFUVVFU1QsXHJcbiAgU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHtcclxuICBBZGRRdWl6RGF0YSxcclxuICBBZGRRdWl6SW50ZXIsXHJcbiAgU2VhcmNoSGFzaHRhZ0RhdGEsXHJcbiAgU2VhcmNoSGFzaHRhZ0ludGVyLFxyXG4gIFNlYXJjaEtleXdvcmREYXRhLFxyXG4gIFNlYXJjaEtleXdvcmRJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRRdWl6QVBJKGRhdGE6IEFkZFF1aXpEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcXVpemAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUXVpeihhY3Rpb246IEFkZFF1aXpJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGFkZFF1aXpBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoS2V5d29yZEFQSShkYXRhOiBTZWFyY2hLZXl3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3NlYXJjaC9gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaEtleXdvcmQoYWN0aW9uOiBTZWFyY2hLZXl3b3JkSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHNlYXJjaEtleXdvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoSGFzaHRhZ0FQSShkYXRhOiBTZWFyY2hIYXNodGFnRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3NlYXJjaC9oYXNodGFnYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hIYXNodGFnKGFjdGlvbjogU2VhcmNoSGFzaHRhZ0ludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChzZWFyY2hIYXNodGFnQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUXVpeigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9RVUlaX1JFUVVFU1QsIGFkZFF1aXopO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEtleXdvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfS0VZV09SRF9SRVFVRVNULCBzZWFyY2hLZXl3b3JkKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hIYXNodGFnKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1QsIHNlYXJjaEhhc2h0YWcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYmxvZ1NhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoQWRkUXVpeiksIGZvcmsod2F0Y2hTZWFyY2hLZXl3b3JkKSwgZm9yayh3YXRjaFNlYXJjaEhhc2h0YWcpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgTElLRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCxcclxuICBFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICBFRElUX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX0NPTU1FTlRfQ0xFQVIsXHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgRURJVF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgRURJVF9DT01NRU5UX0NMRUFSLFxyXG4gIEVESVRfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIExJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkZENvbW1lbnREYXRhLFxyXG4gIEFkZENvbW1lbnRJbnRlcixcclxuICBBZGRTdWJDb21tZW50RGF0YSxcclxuICBBZGRTdWJDb21tZW50SW50ZXIsXHJcbiAgRWRpdENvbW1lbnREYXRhLFxyXG4gIEVkaXRDb21tZW50SW50ZXIsXHJcbiAgRWRpdFN1YkNvbW1lbnRJbnRlcixcclxuICBMaWtlQ29tbWVudERhdGEsXHJcbiAgTGlrZUNvbW1lbnRJbnRlcixcclxuICBSZW1vdmVDb21tZW50SW50ZXIsXHJcbiAgUmVtb3ZlU3ViQ29tbWVudEludGVyLFxyXG4gIFN1YkNvbW1lbnREYXRhLFxyXG4gIFVubGlrZUNvbW1lbnRJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGE6IEFkZENvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudC8ke2RhdGEucG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb246IEFkZENvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb246IFJlbW92ZUNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdENvbW1lbnRBUEkoZGF0YTogRWRpdENvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9jb21tZW50L2VkaXQvJHtkYXRhLkNvbW1lbnRJZH0vYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0Q29tbWVudChhY3Rpb246IEVkaXRDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGVkaXRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbGlrZUNvbW1lbnRBUEkoZGF0YTogTGlrZUNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL2NvbW1lbnQvbGlrZS8ke2RhdGEuVXNlcklkfS8ke2RhdGEuQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZUNvbW1lbnQoYWN0aW9uOiBMaWtlQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsaWtlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZUNvbW1lbnRBUEkoZGF0YTogTGlrZUNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9jb21tZW50L3VubGlrZS8ke2RhdGEuVXNlcklkfS8ke2RhdGEuQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlQ29tbWVudChhY3Rpb246IFVubGlrZUNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodW5saWtlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdWJDb21tZW50QVBJKGRhdGE6IEFkZFN1YkNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudC9zdWIvJHtkYXRhLkNvbW1lbnRJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFN1YkNvbW1lbnQoYWN0aW9uOiBBZGRTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZFN1YkNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN1YkNvbW1lbnRBUEkoZGF0YTogU3ViQ29tbWVudERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL2NvbW1lbnQvc3ViLyR7ZGF0YS5Db21tZW50SWR9LyR7ZGF0YS5TdWJDb21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVTdWJDb21tZW50KGFjdGlvbjogUmVtb3ZlU3ViQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVTdWJDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTdWJDb21tZW50QVBJKGRhdGE6IFN1YkNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9jb21tZW50L3N1Yi9lZGl0LyR7ZGF0YS5Db21tZW50SWR9LyR7ZGF0YS5TdWJDb21tZW50SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0U3ViQ29tbWVudChhY3Rpb246IEVkaXRTdWJDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGVkaXRTdWJDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1NVQl9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0Q29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfQ09NTUVOVF9SRVFVRVNULCBlZGl0Q29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX0NPTU1FTlRfUkVRVUVTVCwgbGlrZUNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZUNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfQ09NTUVOVF9SRVFVRVNULCB1bmxpa2VDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRTdWJDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1NVQl9DT01NRU5UX1JFUVVFU1QsIGFkZFN1YkNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlU3ViQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFN1YkNvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QsIGVkaXRTdWJDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbW1lbnRTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoRWRpdENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaExpa2VDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hBZGRTdWJDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVTdWJDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hFZGl0U3ViQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBibG9nU2FnYSBmcm9tIFwiLi9ibG9nXCI7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBjb21tZW50U2FnYSBmcm9tIFwiLi9jb21tZW50XCI7XHJcbmltcG9ydCB7IEJBQ0tFTkRfVVJMIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIgOiBCQUNLRU5EX1VSTDtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKSwgZm9yayhjb21tZW50U2FnYSksIGZvcmsoYmxvZ1NhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFLFxyXG4gIEVESVRfUE9TVF9SRVFVRVNULFxyXG4gIEVESVRfUE9TVF9GQUlMVVJFLFxyXG4gIEVESVRfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX0NMRUFSLFxyXG4gIExPQURfTU9SRV9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTU9SRV9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTU9SRV9QT1NUU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBBRERfUE9TVF9DTEVBUixcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfQ0xFQVIsXHJcbiAgTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1JFQ0VOVF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCxcclxuICBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTLFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSLFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX0ZBSUxVUkUsXHJcbiAgRURJVF9QT1NUX0NMRUFSLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkZFBvc3RJbnRlcixcclxuICBFZGl0UG9zdEludGVyLFxyXG4gIExpa2VQb3N0RGF0YSxcclxuICBMaWtlUG9zdEludGVyLFxyXG4gIExvYWRDYXRlZ29yeUludGVyLFxyXG4gIExvYWRNb3JlUG9zdHNEYXRhLFxyXG4gIExvYWRNb3JlUG9zdHNJbnRlcixcclxuICBMb2FkUG9zdERhdGEsXHJcbiAgTG9hZFBvc3RJbnRlcixcclxuICBMb2FkUmVjZW50UG9zdEludGVyLFxyXG4gIE5ld1Bvc3REYXRhLFxyXG4gIFJlbW92ZVBvc3REYXRhLFxyXG4gIFJlbW92ZVBvc3RJbnRlcixcclxuICBVcGxvYWRJbWFnZURhdGEsXHJcbiAgVXBsb2FkSW1hZ2VJbnRlcixcclxuICBVcGxvYWRQb3N0SW1hZ2VJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcbmltcG9ydCB7IFVzZXJJbnRlciB9IGZyb20gXCIuLi9AcmVkdWNlcnMvQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhOiBOZXdQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb246IEFkZFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENhdGVnb3J5UG9zdHNBUEkoZGF0YTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L2NhdGVnb3J5LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDYXRlZ29yeVBvc3RzKGFjdGlvbjogTG9hZENhdGVnb3J5SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRDYXRlZ29yeVBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTW9yZVBvc3RzQVBJKGRhdGE6IExvYWRNb3JlUG9zdHNEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L21vcmVwb3N0LyR7ZGF0YS5jYXRlZ29yeX0/bGFzdElkPSR7ZGF0YS5MYXN0SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTW9yZVBvc3RzKGFjdGlvbjogTG9hZE1vcmVQb3N0c0ludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkTW9yZVBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01PUkVfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENsYXNzUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wb3N0L2NsYXNzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ2xhc3NQb3N0cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRDbGFzc1Bvc3RzQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGE6IExvYWRQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdC9vbmVQb3N0LyR7ZGF0YS5wb3N0SWR9LyR7ZGF0YS5Vc2VySWR9LyR7ZGF0YS5jYXRlZ29yeX1gKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uOiBMb2FkUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFJlY2VudFBvc3RzQVBJKGRhdGE6IFVzZXJJbnRlcikge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvcmVjZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRSZWNlbnRQb3N0cyhhY3Rpb246IExvYWRSZWNlbnRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRSZWNlbnRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhOiBMaWtlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9hcGkvcG9zdC9saWtlLyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Vc2VySWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb246IExpa2VQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhOiBMaWtlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL3Bvc3QvbGlrZS8ke2RhdGEuUG9zdElkfS8ke2RhdGEuVXNlcklkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb246IExpa2VQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGE6IFVwbG9hZEltYWdlRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0L2ltYWdlc1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb246IFVwbG9hZEltYWdlSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRQb3N0SW1hZ2VBUEkoZGF0YTogVXBsb2FkSW1hZ2VEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3Bvc3QvaW1hZ2VcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRQb3N0SW1hZ2UoYWN0aW9uOiBVcGxvYWRQb3N0SW1hZ2VJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwodXBsb2FkUG9zdEltYWdlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YTogUmVtb3ZlUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3Bvc3QvZGVsZXRlYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbjogUmVtb3ZlUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQb3N0QVBJKGRhdGE6IE5ld1Bvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9wb3N0L2VkaXRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXRQb3N0KGFjdGlvbjogRWRpdFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoZWRpdFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfUE9TVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkQ2F0ZWdvcnlQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVCwgbG9hZENhdGVnb3J5UG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRNb3JlUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCwgbG9hZE1vcmVQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlY2VudFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVCwgbG9hZFJlY2VudFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkQ2xhc3NQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCwgbG9hZENsYXNzUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9QT1NUX1JFUVVFU1QsIGVkaXRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkUG9zdEltYWdlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCwgdXBsb2FkUG9zdEltYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkQ2F0ZWdvcnlQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNobG9hZE1vcmVQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNobG9hZENsYXNzUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUmVjZW50UG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZFBvc3RJbWFnZSksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoRWRpdFBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9JQ09OX0NMRUFSLFxyXG4gIEFERF9JQ09OX0ZBSUxVUkUsXHJcbiAgQUREX0lDT05fUkVRVUVTVCxcclxuICBBRERfSUNPTl9TVUNDRVNTLFxyXG4gIENIQU5HRV9QQVNTV09SRF9DTEVBUixcclxuICBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSxcclxuICBDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCxcclxuICBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyxcclxuICBDSEFOR0VfTkFNRV9DTEVBUixcclxuICBDSEFOR0VfTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05BTUVfU1VDQ0VTUyxcclxuICBDT05GSVJNX1BBU1NXT1JEX0NMRUFSLFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSxcclxuICBDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gIExPQURfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfSU5GT19SRVFVRVNULFxyXG4gIExPQURfSU5GT19TVUNDRVNTLFxyXG4gIExPR19JTl9DTEVBUixcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fR09PR0xFX0NMRUFSLFxyXG4gIExPR19JTl9HT09HTEVfRkFJTFVSRSxcclxuICBMT0dfSU5fR09PR0xFX1JFUVVFU1QsXHJcbiAgTE9HX0lOX0dPT0dMRV9TVUNDRVNTLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfQ0xFQVIsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0lDT05fQ0xFQVIsXHJcbiAgUkVNT1ZFX0lDT05fRkFJTFVSRSxcclxuICBSRU1PVkVfSUNPTl9SRVFVRVNULFxyXG4gIFJFTU9WRV9JQ09OX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9DTEVBUixcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBXSVRIRFJXQUxfQ0xFQVIsXHJcbiAgV0lUSERSV0FMX0ZBSUxVUkUsXHJcbiAgV0lUSERSV0FMX1JFUVVFU1QsXHJcbiAgV0lUSERSV0FMX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7XHJcbiAgVXNlckRhdGEsXHJcbiAgTG9nSW5JbnRlcixcclxuICBTaWduVXBJbnRlcixcclxuICBBZGRJY29uRGF0YSxcclxuICBBZGRJY29uSW50ZXIsXHJcbiAgUmVtb3ZlSWNvbkludGVyLFxyXG4gIENvbWZpcm1QYXNzd29yZEludGVyLFxyXG4gIENvbWZpcm1QYXNzd29yZERhdGEsXHJcbiAgQ2hhbmdlUGFzc3dvcmREYXRhLFxyXG4gIENoYW5nZVBhc3N3b3JkSW50ZXIsXHJcbiAgV2l0aGRyd2FsSW50ZXIsXHJcbiAgQ2hhbmdlTmFtZURhdGEsXHJcbiAgQ2hhbmdlTmFtZUludGVyLFxyXG59IGZyb20gXCIuL0BzYWdhVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGE6IFVzZXJEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvbG9nSW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb246IExvZ0luSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkdvb2dsZUFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2F1dGgvZ29vZ2xlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW5Hb29nbGUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nSW5Hb29nbGVBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0dPT0dMRV9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9HT09HTEVfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9HT09HTEVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9sb2dPdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YTogVXNlckRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdXNlci9zaWduVXBcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uOiBTaWduVXBJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSg1MDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJY29uQVBJKGRhdGE6IEFkZEljb25EYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvaWNvblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZEljb24oYWN0aW9uOiBBZGRJY29uSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZEljb25BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9JQ09OX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0lDT05fQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9JQ09OX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSWNvbkFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvYXBpL3VzZXIvaWNvbi8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVJY29uKGFjdGlvbjogUmVtb3ZlSWNvbkludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChyZW1vdmVJY29uQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSUNPTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JQ09OX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSUNPTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXBpL3VzZXJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGxvYWRJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maXJtUGFzc3dvcmRBUEkoZGF0YTogQ29tZmlybVBhc3N3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvdXNlci9jb25maXJtYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjb25maXJtUGFzc3dvcmQoYWN0aW9uOiBDb21maXJtUGFzc3dvcmRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoY29uZmlybVBhc3N3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09ORklSTV9QQVNTV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkQVBJKGRhdGE6IENoYW5nZVBhc3N3b3JkRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvdXNlci9wYXNzd29yZGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlUGFzc3dvcmQoYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChjaGFuZ2VQYXNzd29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BBU1NXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOYW1lQVBJKGRhdGE6IENoYW5nZU5hbWVEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS91c2VyL25hbWVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5hbWUoYWN0aW9uOiBDaGFuZ2VOYW1lSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGNoYW5nZU5hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05BTUVfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2l0aGRyYXdhbEFQSShkYXRhOiBudW1iZXIpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGBhcGkvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3aXRoZHJhd2FsKGFjdGlvbjogV2l0aGRyd2FsSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHdpdGhkcmF3YWxBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFdJVEhEUldBTF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFdJVEhEUldBTF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogV0lUSERSV0FMX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luR29vZ2xlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX0dPT0dMRV9SRVFVRVNULCBsb2dJbkdvb2dsZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRJY29uKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0lDT05fUkVRVUVTVCwgYWRkSWNvbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlSWNvbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9JQ09OX1JFUVVFU1QsIHJlbW92ZUljb24pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9JTkZPX1JFUVVFU1QsIGxvYWRJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QsIGNvbmZpcm1QYXNzd29yZCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfUEFTU1dPUkRfUkVRVUVTVCwgY2hhbmdlUGFzc3dvcmQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTkFNRV9SRVFVRVNULCBjaGFuZ2VOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hXaXRoZHJhd2FsKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoV0lUSERSV0FMX1JFUVVFU1QsIHdpdGhkcmF3YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW5Hb29nbGUpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoQWRkSWNvbiksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlSWNvbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSW5mbyksXHJcbiAgICBmb3JrKHdhdGNoQ29uZmlybVBhc3N3b3JkKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VQYXNzd29yZCksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmFtZSksXHJcbiAgICBmb3JrKHdhdGNoV2l0aGRyYXdhbCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9Ac2FnYVwiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmU6IElTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBEaXZpZGVyLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IEdvb2dsZUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgaDMge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICR7QkxVRV9DT0xPUn07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHb29nbGVMb2dpbiA9IGNzc2BcclxuICBtYXJnaW46IDAgMCAwIDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuYDtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xyXG5jb25zdCB2YWxpZGF0ZU1lc3NhZ2VzID0ge1xyXG4gIHJlcXVpcmVkOiBcIiR7bmFtZX0gaXMgcmVxdWlyZWQhXCIsXHJcbiAgdHlwZXM6IHtcclxuICAgIGVtYWlsOiBcIlRoaXMgaXMgbm90IGEgdmFsaWQgJHtuYW1lfSFcIixcclxuICB9LFxyXG4gIG51bWJlcjoge1xyXG4gICAgcmFuZ2U6IFwiJHtuYW1lfSBtdXN0IGJlIHVwcGVyIHRoZSAke21pbn0gc3RyaW5nc1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7XHJcbiAgb25DbGlja1NpZ25VcDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCbG9nTG9naW5TZWN0aW9uOiBGQzxMb2dpblByb3BzPiA9ICh7IG9uQ2xpY2tTaWduVXAgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGxvZ0luRXJyb3IsIGxvZ0luRG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IExvZ2luRm9ybSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBlbWFpbDogdmFsdWVzLmVtYWlsLCBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbWVzc2FnZS5lcnJvcihcIlVuZXhwZWN0ZWQgRXJvcnIhIHBsZWFzZSB0cnkgYWdhaW4gb3IgZmVlZGJhY2sgdG8gdXNcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRG9uZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJMb2cgSW4gU3VjY2VzcyEgSGF2ZSBhIG5pY2UgZGF5IPCfmJlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5Eb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX3RpdGxlXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgTG9naW4gbm93IXtcIiBcIn1cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwibG9naW5faWNvblwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzY0LzAwMDAwMC9sb2dpbi1yb3VuZGVkLXJpZ2h0LnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgzPkFyZSB5b3UgcmVhZHkgZm9yIGp1bXBpbmcgdG8gbXkgd29ybGQ/PC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlcz17dmFsaWRhdGVNZXNzYWdlc31cclxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+RS1tYWlsPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtYWlsXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfT5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlBhc3N3b3JkPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtaW46IDkgfV19PlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEuNXJlbVwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja1NpZ25VcH0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX0+XHJcbiAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxHb29nbGVCdG4+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLm5vYWh3b3JsZC5zaXRlL2F1dGgvZ29vZ2xlXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cImdvb2dsZVwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9nb29nbGUtbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8aDMgY3NzPXtHb29nbGVMb2dpbn0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvR29vZ2xlQnRuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dMb2dpblNlY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBEaXZpZGVyLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IE9OX1NJR05fVVBfUEFHRSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvYmxvZ1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IFNpZ25VcFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDNyZW0gMDtcclxuICBoMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmcgKi9cclxuY29uc3QgdmFsaWRhdGVNZXNzYWdlcyA9IHtcclxuICByZXF1aXJlZDogXCIke25hbWV9IGlzIHJlcXVpcmVkIVwiLFxyXG4gIHR5cGVzOiB7XHJcbiAgICBlbWFpbDogXCJUaGlzIGlzIG5vdCBhIHZhbGlkICR7bmFtZX0hXCIsXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIHJhbmdlOiBcIiR7bmFtZX0gbXVzdCBiZSB1bmRlciB0aGUgJHttaW59IHN0cmluZ3NcIixcclxuICB9LFxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNpZ25VcFByb3BzIHtcclxuICBvbkNsaWNrTG9naW46ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICBOYW1lOiBzdHJpbmc7XHJcbiAgRW1haWw6IHN0cmluZztcclxuICBQYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCbG9nU2lnblVwU2VjdGlvbjogRkM8U2lnblVwUHJvcHM+ID0gbWVtbygoeyBvbkNsaWNrTG9naW4gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpZ25VcEVycm9yLCBzaWduVXBEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlQ2FsbGJhY2soKHZhbHVlczogU2lnblVwRm9ybSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgZW1haWw6IHZhbHVlcy5FbWFpbCwgbmFtZTogdmFsdWVzLk5hbWUsIHBhc3N3b3JkOiB2YWx1ZXMuUGFzc3dvcmQgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBFcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiVW5leHBlY3RlZCBFcm9yciEgUGxlYXNlIHRyeSBhZ2FpbiBvciBmZWVkYmFjayB0byB1c1wiKTtcclxuICAgIH1cclxuICB9LCBbc2lnblVwRXJyb3JdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBEb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkxvZyBJbiBTdWNjZXNzISBFbmpveSB5b3VyIHRpbWUuXCIpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogT05fU0lHTl9VUF9QQUdFLFxyXG4gICAgICAgIGRhdGE6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHNpZ25VcERvbmVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpZ25VcFRpdGxlIGNsYXNzTmFtZT1cImxvZ2luX3RpdGxlXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgU2lnbiBVcCBub3che1wiIFwifVxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJzaWdudXBfaWNvblwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vYnViYmxlcy8xMDAvMDAwMDAwL2FkZC11c2VyLW1hbGUucG5nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDM+RW5qb3kgdmFyaW91cyBDb250ZW50cyBmb3IgZnJlZSE8L2gzPlxyXG4gICAgICA8L1NpZ25VcFRpdGxlPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZXM9e3ZhbGlkYXRlTWVzc2FnZXN9XHJcbiAgICAgICAgbmFtZT1cIm5lc3QtbWVzc2FnZXNcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IGZhbHNlIH19XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+RS1tYWlsPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIkVtYWlsXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCB0eXBlOiBcImVtYWlsXCIgfV19PlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+VXNlciBuYW1lPC9EaXZpZGVyPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIk5hbWVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1heDogMTUgfV19PlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPVwiZGRkXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5QYXNzd29yZDwvRGl2aWRlcj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJQYXNzd29yZFwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWluOiA5IH1dfT5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPkNvbmZpcm0gUGFzc3dvcmQ8L0RpdmlkZXI+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cIkNvbmZpcm1cIlxyXG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbXCJQYXNzd29yZFwiXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZShcIlBhc3N3b3JkXCIpID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcIlRoZSB0d28gcGFzc3dvcmRzIHRoYXQgeW91IGVudGVyZWQgZG8gbm90IG1hdGNoIVwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiwgbWFyZ2luVG9wOiBcIjEuNXJlbVwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTG9naW59IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICBHbyBiYWNrIGxvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dTaWduVXBTZWN0aW9uKTtcclxuIiwiaW1wb3J0IHsgZmFBZGRyZXNzQ2FyZCwgZmFFbnZlbG9wZSwgZmFJbWFnZXMsIGZhTGFwdG9wIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgSlNYRWxlbWVudENvbnN0cnVjdG9yLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENvbmZpZ1xyXG5leHBvcnQgY29uc3QgQkFDS0VORF9VUkwgPSBcImh0dHBzOi8vYXBpLm5vYWh3b3JsZC5zaXRlXCI7XHJcblxyXG4vLyBDb2xvclxyXG5cclxuZXhwb3J0IGNvbnN0IEJMVUVfQ09MT1IgPSBcIiMxMTg3Y2ZcIjtcclxuZXhwb3J0IGNvbnN0IE1BSU5fQ09MT1IgPSBcIiNENUY3RTZcIjtcclxuZXhwb3J0IGNvbnN0IFNVQl9DT0xPUiA9IFwiIzVBRTRBOFwiO1xyXG5leHBvcnQgY29uc3QgR1JBWV9DT0xPUiA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XHJcbmV4cG9ydCBjb25zdCBCR19DT0xPUiA9IFwicmdiKDI0NywgMjQ3LCAyNDcpXCI7XHJcbmV4cG9ydCBjb25zdCBSRURfQ09MT1IgPSBcIiNmMTViNmNcIjtcclxuXHJcbi8vIE1haW5wYWdlIERlc2NcclxuXHJcbmV4cG9ydCBjb25zdCBDQVJEX0RFU0NfUFMgPVxyXG4gIFwi7IOI66Gc7Jq0IOq4sOyIoOydhCDrsLDsmrDquLDsoIQg7ZWt7IOBIOyekOyLoOydmCDquLDrs7jquLDrpbwg7KCQ6rKA7ZWp64uI64ukLiDrmJDtlZwg66y47KCc66W8IOygle2Zle2VmOqyjCDsnbjsi53tlZjqs6Ag67Cw7Jqw6rOgIOq4sOuhne2VqeuLiOuLpC5cIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfREVTQ19DT01VID1cclxuICBcIu2MgOybjO2BrOulvCDstZzsmrDshKDsnLzroZwg7Jes6riw66mwIOyGjO2GteydhCDspJHsi6zsnLzroZwg66ek7Iic6rCEIOyLoOuisOydmCDquLDrsJjsnYQg64uk7KeR64uI64ukLlwiO1xyXG5leHBvcnQgY29uc3QgQ0FSRF9ERVNDX0NPT1AgPVxyXG4gIFwi7L2U65SpIOyekOyytOulvCDsppDquLDrqbAg66ek7Iic6rCEIOyXtOygleydhCDqsIDsp4Dqs6Ag6rOg67mE66W8IOuEmOycvOupsCDri7Tri7TtlZjqsowg64+E7KCE7ZWp64uI64ukLlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50cyA9IFtcclxuICB7XHJcbiAgICBzcXVhcmVUaXRsZTogXCJQcm9ibGVtU29sdmVcIixcclxuICAgIHRpdGxlOiBcIuusuOygnO2VtOqysOuKpeugpeydhCDsnITtlZwg6riw67O46riwXCIsXHJcbiAgICBkZXNjOiBDQVJEX0RFU0NfUFMsXHJcbiAgICBzcmM6IFwiL2ltYWdlcy9Qcm9ibGVtU29sdmUucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcXVhcmVUaXRsZTogXCJDb29wZXJhdGlvblwiLFxyXG4gICAgdGl0bGU6IFwi7Iug66Kw7JeQ7IScIOyYpOuKlCDsp4TsoJXtlZwg7IaM7Ya1XCIsXHJcbiAgICBkZXNjOiBDQVJEX0RFU0NfQ09NVSxcclxuICAgIHNyYzogXCIvaW1hZ2VzL0Nvb3BlcmF0aW9uLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3F1YXJlVGl0bGU6IFwiUGFzc2lvblwiLFxyXG4gICAgdGl0bGU6IFwi7Je07KCVIOq3uOumrOqzoCDrj4TsoIRcIixcclxuICAgIGRlc2M6IENBUkRfREVTQ19DT09QLFxyXG4gICAgc3JjOiBcIi9pbWFnZXMvUGFzc2lvbi5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gTmF2IENvbnRlbnRzXHJcbmV4cG9ydCBjb25zdCBuYXZDb250ZW50cyA9IFtcclxuICB7XHJcbiAgICBpY29uOiBmYUFkZHJlc3NDYXJkLFxyXG4gICAgZXhwbGFpbjogXCJBYm91dCBtZVwiLFxyXG4gICAgbmFtZTogXCJhYm91dG1lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBmYUxhcHRvcCxcclxuICAgIGV4cGxhaW46IFwiU2tpbGxzXCIsXHJcbiAgICBuYW1lOiBcInNraWxsc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogZmFJbWFnZXMsXHJcbiAgICBleHBsYWluOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgbmFtZTogXCJwb3J0Zm9saW9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IGZhRW52ZWxvcGUsXHJcbiAgICBleHBsYWluOiBcIkNvbnRhY3RcIixcclxuICAgIG5hbWU6IFwiY29udGFjdFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBTa2lsbCBwYWdlXHJcbmV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIdG1sICYgQ1NTXCIsXHJcbiAgICBzcmM6IFwiLi9pbWFnZXMvSHRtbENzcy5wbmdcIixcclxuICAgIGRlc2M6IFwi7Ju57ZGc7KSAICwgRE9NLXRyZWUgLCDrsJjsnZHtmJXsm7nqs7wg67iM65287Jqw7KCAIOugjOuUqSDtirnshLHsnYQg7YyM7JWF7ZWY66mwIENTU+ydmCDri6TssYTroZzsmrQg7JWg64uI66mU7J207IWY6rO8IOuNlOu2iOyWtCDsoITsuZjrpqzquLAg7IKs7Jqp7J20IOqwgOuKpe2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUeXBlU2NyaXB0XCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL3R5cGVzY3JpcHQucG5nXCIsXHJcbiAgICBkZXNjOiBcIkVTNiDstZzsi6DrrLjrspXqs7wg7Iuk7ZaJ7Luo7YWN7Iqk7Yq4LO2BtOuhnOyggCzsnbTrsqTtirjro6jtlITrk7Eg64+F7Yq57ZWcIEpT7Yq57ISx7J2EIO2PreuEk+qyjCDsnbTtlbTtlZjrqbAsIOuMgOyEuOyduCDtg4DsnoXsiqTtgazrpr3tirjrpbwg7KCB6re5IO2ZnOyaqe2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9yZWFjdC1uYXRpdmUucG5nXCIsXHJcbiAgICBkZXNjOiBcIkhvb2tzIOusuOuylSwgUm91dGVy7KCB7JqpLCBSZWR1eOyZgCDruYTrj5nquLDrpbwg7JyE7ZWcIHNhZ2EsIHRodW5rIOuYkOuKlCBNb2JYIOuTseuTsSDsl6zrn6wg65287J2067iM65+s66as66W8IOydkeyaqe2VmOupsCDroIzrjZTrp4HstZzshoztmZQg67CPIOyDneuqheyjvOq4sOqwmeydgCBSZWFjdOydmCBTUEEg7Yq57ISx7J2EIOydtO2VtO2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOZXh0LmpzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20va28ta3Ivd2luZG93cy9pbWFnZXMvbmV4dGpzLWxvZ28ucG5nXCIsXHJcbiAgICBkZXNjOiBcIlNFT+ydmCDtmqjsnKjshLHsnYQg64aS7J2064qUIE5leHQuanPsnZggU1NSIO2KueyEseydhCDsnbTtlbTtlZjrqbAsIFNQQSDsmYAgU1NSIOulvCDsnqXri6jsoJDqs7wg7Yq57ISx7J2EIO2MjOyVhe2VmOq4sCDsnITtlbQg64W466Cl7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk15c3FsXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzEwMC8wMDAwMDAvbXlzcWwtbG9nby5wbmdcIixcclxuICAgIGRlc2M6IFwi7Iuc7YCE65287J207KaIICYg7JuM7YGs67Kk7LmY66W8IOyCrOyaqe2VmOupsCwg7Iqk7YKk66eIIOygleydmOyZgCDsvZjshpQg66qF66C57Ja0LCDqt7jrpqzqs6Ag642w7J207YSw67Kg7J207IqkIOq0gOqzhOuPhOulvCDsnbTtlbTtlbQg642w7J207YSw66W8IO2aqOycqOyeiOqyjCDqtIDrpqztlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR2l0XCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9ub2xhbi8xMjgvZ2l0aHViLnBuZ1wiLFxyXG4gICAgZGVzYzogXCLtmJXsg4HqtIDrpqzsnZgg6riw67O47JuQ66as7JmAIOuyhOyghOq0gOumrCzruIzrnpzsuZgs67Cx7JeF65Ox7J2EIOyggeq3uSDtmZzsmqntlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Yl9za2lsbHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTQ1NTXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL3Nhc3MtYXZhdGFyLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkF4aW9zXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzRFMEJBUUdsTjNSSnZLbXdFZy9jb21wYW55LWxvZ29fMjAwXzIwMC8wLzE1NzEyNTM0NDg4MTg/ZT0yMTU5MDI0NDAwJnY9YmV0YSZ0PVZZZnJTb3pxM2tTdzVfNDA0dFI0eFlGTUgwdUZRTm1RTnJ3ZVFjSmtiR3dcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJFeHByZXNzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly93d3cubWVtZW50b3RlY2guaW4vYXNzZXRzL2ltYWdlcy9pY29ucy9leHByZXNzLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkdyYXBoUUxcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvZ3JhcGhxbC5wbmdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbnRkXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0tEcGd2Z3VNcEdmcWFIUGppY1JLLnN2Z1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlN0eWxlZC1jb21wb25lbnRzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIwNjU4ODI1P3M9MjgwJnY9NFwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkVtb3Rpb24uanNcIixcclxuICAgIHNyYzogXCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8xNjAwLzEqZ0d6Um1VS05PQ19YN2tsRmpUazhFQS5wbmdcIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBV1NcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNTJjYTNiNzNlNGIwNGE0NWVmMmM1Y2I2LzE1NTE4ODQ4NjEzMzEtQzlVMlJISlFMT1BMOUYzMzJYNU8va2UxN1p3ZEdCVG9kZEk4cERtNDhrSzZ4OElPaHpYX3JUdFFHS1kxcXAtaFp3LXpQUGdkbjRqVXdWY0pFMVp2V2hjd2hFdFdKWG9zaE5kQTlmMXFEN1hhR1Bza2ZRdFZ1dHVTQTJCLUpXNndrcXFWMDI0WFAtMDU5RFA2d1JZcVlWVUdNenNCeFRvMlVsa1pxMTBHVHJnL0FXU19ibG9nXzAxLlBOR1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBhc3Nwb3J0LmpzXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9sZW9sYW5jaGFzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wNy8wZDE4NGVlMy1mZDhkLTRiOTQtYWNmNC1iNGU2ODZlNTczNzUucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5naW54XCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL25naW54LnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWJlbFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLmltZ2Jpbi5jb20vOC80LzIyL2ltZ2Jpbi1zb3VyY2UtdG8tc291cmNlLWNvbXBpbGVyLWphdmFzY3JpcHQtZWNtYXNjcmlwdC1ub2RlLWpzLXRoYXQtcy1LZnQ5SzRuRTlZSHJNcDZzZHEwQlEwOWNLLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWJwYWNrXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly90MS5kYXVtY2RuLm5ldC9jZmlsZS90aXN0b3J5Lzk5OUFGNTRCNUI5M0Q3OEMyNVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQb3N0bWFuXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzUxMi8xKmZWQkw5bXRMSm1ISUg2WXBVN1d2SFEucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhU291cmNlID0gW1xyXG4gIHtcclxuICAgIGtleTogXCIxXCIsXHJcbiAgICBuYW1lOiBcIu2GoOydtVwiLFxyXG4gICAgZGF0ZTogMjAxOCxcclxuICAgIHN1bW1hcnk6IFwi7JiB7Ja0IOyekOqyqeymnSAo6riw6rCE66eM66OMKVwiLFxyXG4gICAgc2NvcmU6IFwiOTI1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiMlwiLFxyXG4gICAgbmFtZTogXCLrp6Tsnbzqsr3soJzthYzsiqTtirhcIixcclxuICAgIGRhdGU6IDIwMTgsXHJcbiAgICBzdW1tYXJ5OiBcIuqyveygnCzqsr3smIHqtIDroKgg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiM1wiLFxyXG4gICAgbmFtZTogXCLqta3smbjsl6ztlonsnbjshpTsnpAg7J6Q6rKp7KadXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLtlbTsmbjsl5DshJwg7J247KCV7ZWY64qUIO2VnOq1req0gOq0ke2Yke2ajOydmCDqta3smbgg7J247IaU7J6QICDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI0XCIsXHJcbiAgICBuYW1lOiBcIkpMUFRcIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIuydvOuzuOyWtCDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIjHquIlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI1XCIsXHJcbiAgICBuYW1lOiBcIuydvOuzuOyWtCDthrXsl63slYjrgrTsgqwg7J6Q6rKp7KadXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLtlZzqta3sgqwx6riJ7JeQIOykgO2VmOupsCDsnbzrs7jslrQg7Ya167KI7JetIOuKpeugpeydhCDsnoXspp3tlZjripQg6rWt6rCA7KCE66y47J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNlwiLFxyXG4gICAgbmFtZTogXCLsmIHslrQg7Ya17Jet7JWI64K07IKsIOyekOqyqeymnVwiLFxyXG4gICAgZGF0ZTogMjAyMCxcclxuICAgIHN1bW1hcnk6IFwi7ZWc6rWt7IKsMeq4ieyXkCDspIDtlZjrqbAg7JiB7Ja0IO2GteuyiOyXrSDriqXroKXsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOyghOusuOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjdcIixcclxuICAgIG5hbWU6IFwi7KCV67O07LKY66as6riw7IKsXCIsXHJcbiAgICBkYXRlOiAyMDIxLFxyXG4gICAgc3VtbWFyeTogXCJJVOq0gOugqCDshozslpHsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOq4sOyIoOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjhcIixcclxuICAgIG5hbWU6IFwi7ZWZ7KCQ7J2A7ZaJ7KCcIOqyveyYge2VmeyCrFwiLFxyXG4gICAgZGF0ZTogMjAyMSxcclxuICAgIHN1bW1hcnk6IFwiMjAyMeuFhCA27JuUIOyhuOyXheyYiOyglVwiLFxyXG4gICAgc2NvcmU6IFwi7ZWZ7IKsXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXHJcbiAgICBrZXk6IFwibmFtZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRGF0ZVwiLFxyXG4gICAgZGF0YUluZGV4OiBcImRhdGVcIixcclxuICAgIGtleTogXCJkYXRlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTdW1tYXJ5XCIsXHJcbiAgICBkYXRhSW5kZXg6IFwic3VtbWFyeVwiLFxyXG4gICAga2V5OiBcInN1bW1hcnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNjb3JlXCIsXHJcbiAgICBkYXRhSW5kZXg6IFwic2NvcmVcIixcclxuICAgIGtleTogXCJzY29yZVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vL1BvcnRmb2xpb1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnRmb2xpb3MgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIk15IFNlb3VsIEd1aWRlXCIsXHJcbiAgICBkYXRlOiBcIjIwMjEvNH4gMjAyMS81XCIsXHJcbiAgICB0YWdzOiBbXCIjVHlwZVNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNFbW90aW9uXCIsIFwiI0dyYXBoUUxcIl0sXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzQ4NjQ5MjUvMTIwMTIxMzE1LWI0MzE2MDAwLWMxZGQtMTFlYi05ZjliLTA4YzQ1MjI5YzdlOC5wbmdcIixcclxuICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vbm9haDA3MTYxMC9NeS1TZW91bC1HdWlkZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIk5vYWggd29ybGQgQmxvZ1wiLFxyXG4gICAgZGF0ZTogXCIyMDIxLzJ+IDIwMjEvNFwiLFxyXG4gICAgdGFnczogW1wiI1R5cGVTY3JpcHRcIiwgXCIjUmVhY3RcIiwgXCIjTmV4dC5qc1wiLCBcIiNNeXNxbFwiLCBcIiNBV1NcIl0sXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzQ4NjQ5MjUvMTIwMTIxMzE2LWI1NjI4ZDAwLWMxZGQtMTFlYi04N2YyLWRhMDk5OTU2YzcyNS5wbmdcIixcclxuICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vbm9haDA3MTYxMC9OZXh0X05vYWhXb3JsZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIk1vdmllIEFwcCAoQ2xvbmUgQ29kaW5nKVwiLFxyXG4gICAgZGF0ZTogXCIyMDIwLzEyfiAyMDIxLzFcIixcclxuICAgIHRhZ3M6IFtcIiNKYXZhc2NyaXB0XCIsIFwiI1JlYWN0XCIsIFwiI05vZGUuanNcIiwgXCIjTW9uZ29EQlwiXSxcclxuICAgIHNyYzogXCIvaW1hZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW9fbW92aWUuanBnXCIsXHJcbiAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL25vYWgwNzE2MTAvUmVhY3RfTW92aWUtQXBwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICBkYXRlOiBcIjIwMjEvMX4gMjAyMS8yXCIsXHJcbiAgICB0YWdzOiBbXCIjSFRNTFwiLCBcIiNDU1NcIiwgXCIjSmF2YXNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNBdG5kXCJdLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzc0ODY0OTI1LzEyMDEyMTcwNC1lYTZmZGYwMC1jMWRmLTExZWItOTJmNS01Zjc0ZTgxZTI0OWQucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgT05fU0lHTl9VUF9QQUdFIH0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQmxvZ1NpZ25VcFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZy9Mb2dpbi9CbG9nU2luZ1VwU2VjdGlvblwiO1xyXG5pbXBvcnQgQmxvZ0xvZ2luU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nL0xvZ2luL0Jsb2dMb2dpblNlY3Rpb25cIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL0BzdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IExPQURfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL0ByZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZVwiO1xyXG5cclxuY29uc3QgQmxvZ0xvZ2luUGFnZSA9IG1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG9uU2lnblVwUGFnZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrU2lnblVwID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBPTl9TSUdOX1VQX1BBR0UsXHJcbiAgICAgIGRhdGE6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tMb2dpbiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogT05fU0lHTl9VUF9QQUdFLFxyXG4gICAgICBkYXRhOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Tm9haCB3b3JsZCB8IExvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9mb3JtXCI+XHJcbiAgICAgICAgICB7b25TaWduVXBQYWdlID8gKFxyXG4gICAgICAgICAgICA8QmxvZ1NpZ25VcFNlY3Rpb24gb25DbGlja0xvZ2luPXtvbkNsaWNrTG9naW59IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QmxvZ0xvZ2luU2VjdGlvbiBvbkNsaWNrU2lnblVwPXtvbkNsaWNrU2lnblVwfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX2ltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cImxvZ2luX21haW5fcG9zdGVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IHNyYz1cIi9pbWFnZXMvYmxvZy9zaWdudXAuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgKGNvbnRleHQuc3RvcmUgYXMgSVN0b3JlKS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJsb2dMb2dpblBhZ2UpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=