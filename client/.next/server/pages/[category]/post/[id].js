module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/[category]/post/[id]": 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[category]/post/[id].tsx");
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

/***/ "./pages/[category]/post/[id].tsx":
/*!****************************************!*\
  !*** ./pages/[category]/post/[id].tsx ***!
  \****************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@reducers/user */ "./@reducers/user.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../config */ "./config.ts");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@store/configureStore */ "./@store/configureStore.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\pages\\[category]\\post\\[id].tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable jsx-a11y/anchor-is-valid */

















dayjs__WEBPACK_IMPORTED_MODULE_8___default.a.locale("kor");
const CommentForm = next_dynamic__WEBPACK_IMPORTED_MODULE_16___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../../components/Blog/Comments/CommentForm */ "./components/Blog/Comments/CommentForm.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../components/Blog/Comments/CommentForm */ "./components/Blog/Comments/CommentForm.tsx")],
    modules: ["[category]\\post\\[id].tsx -> " + "../../../components/Blog/Comments/CommentForm"]
  }
});
const ArticlePost = next_dynamic__WEBPACK_IMPORTED_MODULE_16___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../../components/Blog/Articles/ArticlePost */ "./components/Blog/Articles/ArticlePost.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../components/Blog/Articles/ArticlePost */ "./components/Blog/Articles/ArticlePost.tsx")],
    modules: ["[category]\\post\\[id].tsx -> " + "../../../components/Blog/Articles/ArticlePost"]
  }
});
const RemoteControl = next_dynamic__WEBPACK_IMPORTED_MODULE_16___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../../components/Blog/Comments/RemoteControl */ "./components/Blog/Comments/RemoteControl.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../components/Blog/Comments/RemoteControl */ "./components/Blog/Comments/RemoteControl.tsx")],
    modules: ["[category]\\post\\[id].tsx -> " + "../../../components/Blog/Comments/RemoteControl"]
  }
});

const Heart = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", false ? undefined : {
  target: "e16yzffh1",
  label: "Heart"
})("display:inline-block;margin:0 0.5rem 0 1rem;font-size:1.5rem;&:hover{color:", _config__WEBPACK_IMPORTED_MODULE_10__["RED_COLOR"], ";-webkit-animation:heartBeat 1s;animation:heartBeat 1s;}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QnNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */"));

const HeartLiked = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", false ? undefined : {
  target: "e16yzffh0",
  label: "HeartLiked"
})("display:inline-block;margin:0 0.5rem 0 1rem;font-size:1.5rem;color:", _config__WEBPACK_IMPORTED_MODULE_10__["RED_COLOR"], ";&:hover{color:", _config__WEBPACK_IMPORTED_MODULE_10__["RED_COLOR"], ";span{color:", _config__WEBPACK_IMPORTED_MODULE_10__["RED_COLOR"], ";}}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */"));

const PostDesc = false ? undefined : {
  name: "1y4tyzg-PostDesc",
  styles: "display:flex;justify-content:flex-start;font-size:1.1rem;margin-bottom:5rem;color:rgba(0, 0, 0, 0.2);label:PostDesc;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRG9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const PostSubTitle = false ? undefined : {
  name: "1r150g0-PostSubTitle",
  styles: "margin:5rem 0 1rem 0;font-size:1.5rem;font-weight:bold;label:PostSubTitle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRHdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const MorePostWrapper = false ? undefined : {
  name: "1o09cgs-MorePostWrapper",
  styles: "overflow:auto;height:280px;margin-top:1rem;border-top:1px solid rgba(0, 0, 0, 0.1);div:first-of-type{padding:1rem 0.5rem;display:flex;justify-content:space-between;border-bottom:1px solid rgba(0, 0, 0, 0.1);};label:MorePostWrapper;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRTJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const PostWrapper = false ? undefined : {
  name: "14a0h1n-PostWrapper",
  styles: "position:relative;display:flex;justify-content:space-between;label:PostWrapper;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RXVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXHBhZ2VzXFxbY2F0ZWdvcnldXFxwb3N0XFxbaWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const BlogPostPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  var _post$PostLikers2, _post$PostLikers3;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    post,
    unlikePostDone,
    likePostDone,
    addCommentDone,
    removeCommentDone,
    removeSubCommentDone,
    prevPost,
    nextPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: Fullcontent,
    1: setFullcontent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _post$PostLikers;

    if (user && post !== null && post !== void 0 && (_post$PostLikers = post.PostLikers) !== null && _post$PostLikers !== void 0 && _post$PostLikers.find(v => v.id === user.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [router.pathname, post === null || post === void 0 ? void 0 : post.PostLikers]);
  const onClickUnlike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UNLIKE_POST_REQUEST"],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        UserId: user === null || user === void 0 ? void 0 : user.id
      }
    });
  }, [post === null || post === void 0 ? void 0 : post.id, user === null || user === void 0 ? void 0 : user.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _post$content;

    const tagContent = post === null || post === void 0 ? void 0 : (_post$content = post.content) === null || _post$content === void 0 ? void 0 : _post$content.split(/(#[^\s#+^<]+)/g).map(v => {
      if (v.match(/(#.*")/g)) {
        return v;
      }

      if (v.match(/(#youtube:)/g)) {
        return `<iframe class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/${v.slice(9)}"></iframe>`;
      }

      if (v.match(/(#[^\s#+^<]+)/g)) {
        return `<a class="hashtag">${v}</a>`;
      }

      return v;
    });
    const fullContentRemoveComma = post && (tagContent === null || tagContent === void 0 ? void 0 : tagContent.join(""));
    fullContentRemoveComma && setFullcontent(fullContentRemoveComma);
  }, [post]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const postId = router.pathname;

    if (!postId) {
      router.push("/");
    }
  }, [router.pathname]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"],
      data: {
        postId: router.query.id,
        UserId: user === null || user === void 0 ? void 0 : user.id,
        category: router.query.category
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addCommentDone, unlikePostDone, likePostDone, removeCommentDone, removeSubCommentDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addCommentDone) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Added comment 🥰");
    }
  }, [addCommentDone]);
  const onClickLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!user) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].error("You can thumbs up when you are logged in 😿");
      return;
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LIKE_POST_REQUEST"],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        UserId: user.id
      }
    });
  }, [post === null || post === void 0 ? void 0 : post.id, user === null || user === void 0 ? void 0 : user.id]);
  const handleImgError = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.target.src = "/images/blog/noImage.gif";
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "Noah world | ", post === null || post === void 0 ? void 0 : post.title.slice(0, 10), "...")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("h1", {
    style: {
      lineHeight: "1.5"
    },
    className: "post_main_title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, post === null || post === void 0 ? void 0 : post.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    className: "blog_post_divier",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("ul", {
    css: PostDesc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_8___default()(post === null || post === void 0 ? void 0 : post.createdAt).format("YYYY.MM.DD")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, "\xB7\xA0", post === null || post === void 0 ? void 0 : post.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, "\xB7\xA0", post === null || post === void 0 ? void 0 : (_post$PostLikers2 = post.PostLikers) === null || _post$PostLikers2 === void 0 ? void 0 : _post$PostLikers2.length, " likes")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    css: PostWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    className: "blog_post_article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    className: "tui-editor-contents",
    style: {
      marginBottom: "3rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("img", {
    alt: post === null || post === void 0 ? void 0 : post.title,
    style: {
      width: "100%",
      marginBottom: "6rem"
    },
    src: post !== null && post !== void 0 && post.thumbnail ? post === null || post === void 0 ? void 0 : post.thumbnail : post !== null && post !== void 0 && post.imagePath ? post === null || post === void 0 ? void 0 : post.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }), Fullcontent && html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(Fullcontent)), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("h4", {
    css: PostSubTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, "Do you like this Post?", " ", liked ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(HeartLiked, {
    onClick: onClickUnlike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HeartFilled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  })) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(Heart, {
    onClick: onClickLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HeartOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("span", {
    style: {
      fontSize: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, post === null || post === void 0 ? void 0 : (_post$PostLikers3 = post.PostLikers) === null || _post$PostLikers3 === void 0 ? void 0 : _post$PostLikers3.length)), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(CommentForm, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("h4", {
    css: PostSubTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, "More posts"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    css: MorePostWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, "Title"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, "Date")), prevPost === null || prevPost === void 0 ? void 0 : prevPost.map((article, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(ArticlePost, {
    key: i,
    article: article,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  })), nextPost === null || nextPost === void 0 ? void 0 : nextPost.map((article, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(ArticlePost, {
    key: i,
    article: article,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(RemoteControl, {
    Fullcontent: Fullcontent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  })));
});
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_11__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"],
    data: {
      postId: context.params.id,
      category: context.query.category
    }
  });
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_13__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(BlogPostPage));

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

/***/ "antd/lib/input/TextArea":
/*!******************************************!*\
  !*** external "antd/lib/input/TextArea" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/TextArea");

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

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9AcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHJlZHVjZXJzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvYmxvZy50cyIsIndlYnBhY2s6Ly8vLi9Ac2FnYS9jb21tZW50LnRzIiwid2VicGFjazovLy8uL0BzYWdhL2luZGV4LnRzIiwid2VicGFjazovLy8uL0BzYWdhL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vQHNhZ2EvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9Ac3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9bY2F0ZWdvcnldL3Bvc3QvLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0L1RleHRBcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtcmVhY3QtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0aGVtZSIsImhlYWRlciIsInByZVBvcnRmb2xpbyIsInBvc3RQb3J0Zm9saW8iLCJwb3N0cyIsIm9uQWJvdXQiLCJvblNpZ25VcFBhZ2UiLCJwb3N0RWRpdE9uIiwic2VhcmNoUG9zdHMiLCJoYXNodGFnUG9zdHMiLCJvblNsaWRlTWVudSIsIm9uSGVhZGVyVGl0bGUiLCJzZWFyY2hlZEtleXdvcmQiLCJzZWFyY2hLZXl3b3JkTG9hZGluZyIsInNlYXJjaEtleXdvcmREb25lIiwic2VhcmNoS2V5d29yZEVycm9yIiwic2VhcmNoSGFzaFRhZ0xvYWRpbmciLCJzZWFyY2hIYXNoVGFnRG9uZSIsInNlYXJjaEhhc2hUYWdFcnJvciIsImFkZFF1aXpMb2FkaW5nIiwiYWRkUXVpekRvbmUiLCJhZGRRdWl6RXJyb3IiLCJNT0RFX0NIQU5HRSIsIkxPQURfUE9SVEZPTElPUyIsIkxPQURfUE9SVEZPTElPIiwiTE9BRF9QUkVQT1JURk9MSU8iLCJMT0FEX1BPU1RQT1JURk9MSU8iLCJDSEFHRV9IRUFERVIiLCJTV0lUQ0hfQUJPVVQiLCJPTl9BQk9VVCIsIk9GRl9BQk9VVCIsIk9OX1NJR05fVVBfUEFHRSIsIlJFTU9WRV9JTUFHRSIsIlBPU1RfRURJVF9PTiIsIlBPU1RfRURJVF9PRkYiLCJDTElDS19IQVNIX1RBRyIsIk9OX1NMSURFX01FTlUiLCJPTl9IRUFERVJfVElUTEUiLCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUIiwiU0VBUkNIX0tFWVdPUkRfU1VDQ0VTUyIsIlNFQVJDSF9LRVlXT1JEX0ZBSUxVUkUiLCJTRUFSQ0hfS0VZV09SRF9DTEVBUiIsIlNFQVJDSF9IQVNIX1RBR19SRVFVRVNUIiwiU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MiLCJTRUFSQ0hfSEFTSF9UQUdfRkFJTFVSRSIsIlNFQVJDSF9IQVNIX1RBR19DTEVBUiIsIkFERF9RVUlaX1JFUVVFU1QiLCJBRERfUVVJWl9TVUNDRVNTIiwiQUREX1FVSVpfRkFJTFVSRSIsIkFERF9RVUlaX0NMRUFSIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidHlwZSIsImRhdGEiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwiYmxvZyIsInVzZXIiLCJ0ZWNoUG9zdHMiLCJkYWlseVBvc3RzIiwiY2xhc3NQb3N0cyIsImN1bHR1cmVQb3N0cyIsInF1aXp6ZXMiLCJ3b3JkcyIsImhhc2h0YWdzIiwibW9zdExpa2VkUG9zdCIsIm1vc3RWaWV3ZWRQb3N0IiwibW9zdENvbW1lbnRlZFBvc3QiLCJwcmV2UG9zdCIsIm5leHRQb3N0IiwiY291bnRQb3N0cyIsImltYWdlUGF0aCIsInBvc3RJbWFnZVBhdGgiLCJyZWNlbnRWaWV3UG9zdCIsInJlY2VudENvbW1lbnRQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1cGxvYWRQb3N0SW1hZ2VMb2FkaW5nIiwidXBsb2FkUG9zdEltYWdlRG9uZSIsInVwbG9hZFBvc3RJbWFnZUVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImVkaXRQb3N0TG9hZGluZyIsImVkaXRQb3N0RG9uZSIsImVkaXRQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFJlY2VudFBvc3RzTG9hZGluZyIsImxvYWRSZWNlbnRQb3N0c0RvbmUiLCJsb2FkUmVjZW50UG9zdHNFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsb2FkQ2F0ZWdvcnlQb3N0c0xvYWRpbmciLCJsb2FkQ2F0ZWdvcnlQb3N0c0RvbmUiLCJsb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yIiwibG9hZE1vcmVQb3N0c0xvYWRpbmciLCJsb2FkTW9yZVBvc3RzRG9uZSIsImxvYWRNb3JlUG9zdHNFcnJvciIsImxvYWRDbGFzc1Bvc3RzTG9hZGluZyIsImxvYWRDbGFzc1Bvc3RzRG9uZSIsImxvYWRDbGFzc1Bvc3RzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJlZGl0Q29tbWVudExvYWRpbmciLCJlZGl0Q29tbWVudERvbmUiLCJlZGl0Q29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VDb21tZW50TG9hZGluZyIsImxpa2VDb21tZW50RG9uZSIsImxpa2VDb21tZW50RXJyb3IiLCJ1bmxpa2VDb21tZW50TG9hZGluZyIsInVubGlrZUNvbW1lbnREb25lIiwidW5saWtlQ29tbWVudEVycm9yIiwiYWRkU3ViQ29tbWVudExvYWRpbmciLCJhZGRTdWJDb21tZW50RG9uZSIsImFkZFN1YkNvbW1lbnRFcnJvciIsImVkaXRTdWJDb21tZW50TG9hZGluZyIsImVkaXRTdWJDb21tZW50RG9uZSIsImVkaXRTdWJDb21tZW50RXJyb3IiLCJyZW1vdmVTdWJDb21tZW50TG9hZGluZyIsInJlbW92ZVN1YkNvbW1lbnREb25lIiwicmVtb3ZlU3ViQ29tbWVudEVycm9yIiwiaGFzTW9yZVBvc3RzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19DTEVBUiIsIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QiLCJVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTIiwiVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSIsIlVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfQ0xFQVIiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUIiwiTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCIsIkxPQURfTU9SRV9QT1NUU19TVUNDRVNTIiwiTE9BRF9NT1JFX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkUiLCJFRElUX1BPU1RfUkVRVUVTVCIsIkVESVRfUE9TVF9TVUNDRVNTIiwiRURJVF9QT1NUX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ0xFQVIiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9DTEVBUiIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxJS0VfQ09NTUVOVF9SRVFVRVNUIiwiTElLRV9DT01NRU5UX1NVQ0NFU1MiLCJMSUtFX0NPTU1FTlRfRkFJTFVSRSIsIlVOTElLRV9DT01NRU5UX1JFUVVFU1QiLCJVTkxJS0VfQ09NTUVOVF9TVUNDRVNTIiwiVU5MSUtFX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX1JFUVVFU1QiLCJFRElUX0NPTU1FTlRfU1VDQ0VTUyIsIkVESVRfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9DT01NRU5UX0NMRUFSIiwiQUREX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1NVQl9DT01NRU5UX0NMRUFSIiwiUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfU1VCX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNUIiwiRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTIiwiRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFIiwiRURJVF9TVUJfQ09NTUVOVF9DTEVBUiIsImNhdGVnb3J5IiwidW5zaGlmdCIsImxlbmd0aCIsIm1vcmVUZWNoUG9zdHMiLCJjb25jYXQiLCJtb3JlUG9zdHMiLCJtb3JlRGFpbHlQb3N0cyIsImNsYXNzUG9zdHNfY2xhc3MiLCJjdWx0dXJlUG9zdHNfY2xhc3MiLCJDb21tZW50cyIsInB1c2giLCJQb3N0TGlrZXJzIiwiaWQiLCJVc2VySWQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIkNvbW1lbnRJZCIsImNvbnRlbnQiLCJuZXdDb21tZW50IiwiQ29tbWVudExpa2VycyIsIkNvbW1lbnRzV2l0aG91dERlbGV0ZWQiLCJTdWJDb21tZW50cyIsImZ1bGxTdWJDb21tZW50IiwiU3ViQ29tbWVudElkIiwiY29uZmlybVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ0luR29vZ2xlTG9hZGluZyIsImxvZ0luR29vZ2xlRG9uZSIsImxvZ0luR29vZ2xlRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibG9hZEluZm9Mb2FkaW5nIiwibG9hZEluZm9Eb25lIiwibG9hZEluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJhZGRJY29uTG9hZGluZyIsImFkZEljb25Eb25lIiwiYWRkSWNvbkVycm9yIiwicmVtb3ZlSWNvbkxvYWRpbmciLCJyZW1vdmVJY29uRG9uZSIsInJlbW92ZUljb25FcnJvciIsImNvbmZpcm1QYXNzd29yZExvYWRpbmciLCJjb25maXJtUGFzc3dvcmREb25lIiwiY29uZmlybVBhc3N3b3JkRXJyb3IiLCJ3aXRoZHJhd2FsTG9hZGluZyIsIndpdGhkcmF3YWxEb25lIiwid2l0aGRyYXdhbEVycm9yIiwiY2hhbmdlUGFzc3dvcmRMb2FkaW5nIiwiY2hhbmdlUGFzc3dvcmREb25lIiwiY2hhbmdlUGFzc3dvcmRFcnJvciIsImNoYW5nZU5hbWVMb2FkaW5nIiwiY2hhbmdlTmFtZURvbmUiLCJjaGFuZ2VOYW1lRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfSU5fQ0xFQVIiLCJMT0dfSU5fR09PR0xFX1JFUVVFU1QiLCJMT0dfSU5fR09PR0xFX1NVQ0NFU1MiLCJMT0dfSU5fR09PR0xFX0ZBSUxVUkUiLCJMT0dfSU5fR09PR0xFX0NMRUFSIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9DTEVBUiIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfQ0xFQVIiLCJMT0FEX0lORk9fUkVRVUVTVCIsIkxPQURfSU5GT19TVUNDRVNTIiwiTE9BRF9JTkZPX0ZBSUxVUkUiLCJBRERfSUNPTl9SRVFVRVNUIiwiQUREX0lDT05fU1VDQ0VTUyIsIkFERF9JQ09OX0ZBSUxVUkUiLCJBRERfSUNPTl9DTEVBUiIsIlJFTU9WRV9JQ09OX1JFUVVFU1QiLCJSRU1PVkVfSUNPTl9TVUNDRVNTIiwiUkVNT1ZFX0lDT05fRkFJTFVSRSIsIlJFTU9WRV9JQ09OX0NMRUFSIiwiQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QiLCJDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyIsIkNIQU5HRV9QQVNTV09SRF9GQUlMVVJFIiwiQ0hBTkdFX1BBU1NXT1JEX0NMRUFSIiwiQ0hBTkdFX05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05BTUVfQ0xFQVIiLCJXSVRIRFJXQUxfUkVRVUVTVCIsIldJVEhEUldBTF9TVUNDRVNTIiwiV0lUSERSV0FMX0ZBSUxVUkUiLCJXSVRIRFJXQUxfQ0xFQVIiLCJDT05GSVJNX1BBU1NXT1JEX1JFUVVFU1QiLCJDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MiLCJDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUiLCJDT05GSVJNX1BBU1NXT1JEX0NMRUFSIiwiaWNvbiIsIm5hbWUiLCJuZXdOYW1lIiwiYWRkUXVpekFQSSIsImF4aW9zIiwiYWRkUXVpeiIsImNhbGwiLCJwdXQiLCJkZWxheSIsImVyciIsInJlc3BvbnNlIiwic2VhcmNoS2V5d29yZEFQSSIsInNlYXJjaEtleXdvcmQiLCJzZWFyY2hIYXNodGFnQVBJIiwic2VhcmNoSGFzaHRhZyIsIndhdGNoQWRkUXVpeiIsInRha2VMYXRlc3QiLCJ3YXRjaFNlYXJjaEtleXdvcmQiLCJ3YXRjaFNlYXJjaEhhc2h0YWciLCJibG9nU2FnYSIsImFsbCIsImZvcmsiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21tZW50QVBJIiwiZGVsZXRlIiwicmVtb3ZlQ29tbWVudCIsImVkaXRDb21tZW50QVBJIiwiZWRpdENvbW1lbnQiLCJsaWtlQ29tbWVudEFQSSIsInBhdGNoIiwibGlrZUNvbW1lbnQiLCJ1bmxpa2VDb21tZW50QVBJIiwidW5saWtlQ29tbWVudCIsImFkZFN1YkNvbW1lbnRBUEkiLCJhZGRTdWJDb21tZW50IiwicmVtb3ZlU3ViQ29tbWVudEFQSSIsInJlbW92ZVN1YkNvbW1lbnQiLCJlZGl0U3ViQ29tbWVudEFQSSIsImVkaXRTdWJDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21tZW50Iiwid2F0Y2hFZGl0Q29tbWVudCIsIndhdGNoTGlrZUNvbW1lbnQiLCJ3YXRjaFVubGlrZUNvbW1lbnQiLCJ3YXRjaEFkZFN1YkNvbW1lbnQiLCJ3YXRjaFJlbW92ZVN1YkNvbW1lbnQiLCJ3YXRjaEVkaXRTdWJDb21tZW50IiwiY29tbWVudFNhZ2EiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJCQUNLRU5EX1VSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwibG9hZENhdGVnb3J5UG9zdHNBUEkiLCJsb2FkQ2F0ZWdvcnlQb3N0cyIsImxvYWRNb3JlUG9zdHNBUEkiLCJMYXN0SWQiLCJsb2FkTW9yZVBvc3RzIiwibG9hZENsYXNzUG9zdHNBUEkiLCJsb2FkQ2xhc3NQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJsb2FkUmVjZW50UG9zdHNBUEkiLCJsb2FkUmVjZW50UG9zdHMiLCJsaWtlUG9zdEFQSSIsIlBvc3RJZCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJ1cGxvYWRQb3N0SW1hZ2VBUEkiLCJ1cGxvYWRQb3N0SW1hZ2UiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImVkaXRQb3N0QVBJIiwiZWRpdFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNobG9hZENhdGVnb3J5UG9zdHMiLCJ3YXRjaGxvYWRNb3JlUG9zdHMiLCJ3YXRjaExvYWRSZWNlbnRQb3N0cyIsIndhdGNobG9hZENsYXNzUG9zdHMiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoRWRpdFBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoVXBsb2FkUG9zdEltYWdlIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ0luR29vZ2xlQVBJIiwibG9nSW5Hb29nbGUiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJhZGRJY29uQVBJIiwiYWRkSWNvbiIsInJlbW92ZUljb25BUEkiLCJyZW1vdmVJY29uIiwibG9hZEluZm9BUEkiLCJsb2FkSW5mbyIsImNvbmZpcm1QYXNzd29yZEFQSSIsImNoYW5nZVBhc3N3b3JkQVBJIiwiY2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VOYW1lQVBJIiwiY2hhbmdlTmFtZSIsIndpdGhkcmF3YWxBUEkiLCJ3aXRoZHJhd2FsIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nSW5Hb29nbGUiLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hBZGRJY29uIiwid2F0Y2hSZW1vdmVJY29uIiwid2F0Y2hMb2FkSW5mbyIsIndhdGNoQ29uZmlybVBhc3N3b3JkIiwid2F0Y2hDaGFuZ2VQYXNzd29yZCIsIndhdGNoQ2hhbmdlTmFtZSIsIndhdGNoV2l0aGRyYXdhbCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJCTFVFX0NPTE9SIiwiTUFJTl9DT0xPUiIsIlNVQl9DT0xPUiIsIkdSQVlfQ09MT1IiLCJCR19DT0xPUiIsIlJFRF9DT0xPUiIsIkNBUkRfREVTQ19QUyIsIkNBUkRfREVTQ19DT01VIiwiQ0FSRF9ERVNDX0NPT1AiLCJDYXJkQ29udGVudHMiLCJzcXVhcmVUaXRsZSIsInRpdGxlIiwiZGVzYyIsInNyYyIsIm5hdkNvbnRlbnRzIiwiZmFBZGRyZXNzQ2FyZCIsImV4cGxhaW4iLCJmYUxhcHRvcCIsImZhSW1hZ2VzIiwiZmFFbnZlbG9wZSIsInNraWxscyIsImxldmVsIiwic3ViX3NraWxscyIsImRhdGFTb3VyY2UiLCJrZXkiLCJkYXRlIiwic3VtbWFyeSIsInNjb3JlIiwiY29sdW1ucyIsImRhdGFJbmRleCIsInBvcnRmb2xpb3MiLCJ0YWdzIiwiZ2l0IiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiaHJlZiIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJPYmplY3QiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsInByZWZldGNoIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJlYWN0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJwYXRobmFtZSIsImxvY2FsZXMiLCJsb2NhbGUiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInJlc29sdmVkQXMiLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsImUiLCJzaGFsbG93Iiwib3B0aW9ucyIsImluaXRpYWwiLCJwcm9wcyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwicmVwbGFjZSIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJ0YXJnZXQiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZGF5anMiLCJDb21tZW50Rm9ybSIsImR5bmFtaWMiLCJBcnRpY2xlUG9zdCIsIlJlbW90ZUNvbnRyb2wiLCJIZWFydCIsIkhlYXJ0TGlrZWQiLCJQb3N0RGVzYyIsIlBvc3RTdWJUaXRsZSIsIk1vcmVQb3N0V3JhcHBlciIsIlBvc3RXcmFwcGVyIiwiQmxvZ1Bvc3RQYWdlIiwibWVtbyIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsaWtlZCIsInNldExpa2VkIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIkZ1bGxjb250ZW50Iiwic2V0RnVsbGNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrVW5saWtlIiwidXNlQ2FsbGJhY2siLCJ0YWdDb250ZW50Iiwic3BsaXQiLCJtYXRjaCIsInNsaWNlIiwiZnVsbENvbnRlbnRSZW1vdmVDb21tYSIsImpvaW4iLCJzdWNjZXNzIiwib25DbGlja0xpa2UiLCJoYW5kbGVJbWdFcnJvciIsImxpbmVIZWlnaHQiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJoaXQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsInRodW1ibmFpbCIsInBhcnNlIiwiZm9udFNpemUiLCJhcnRpY2xlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJDb29raWUiLCJFTkQiLCJ0b1Byb21pc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9bY2F0ZWdvcnldL3Bvc3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL1tjYXRlZ29yeV0vcG9zdC9baWRdXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1tjYXRlZ29yeV0vcG9zdC9baWRdLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgQmxvZ1N0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgaGVhZGVyOiBcImJsb2dcIixcclxuICBwcmVQb3J0Zm9saW86IFtdLFxyXG4gIHBvc3RQb3J0Zm9saW86IFtdLFxyXG4gIHBvc3RzOiBbXSxcclxuICBvbkFib3V0OiBmYWxzZSxcclxuICBvblNpZ25VcFBhZ2U6IGZhbHNlLFxyXG4gIHBvc3RFZGl0T246IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3RzOiBbXSxcclxuICBoYXNodGFnUG9zdHM6IFtdLFxyXG4gIG9uU2xpZGVNZW51OiBmYWxzZSxcclxuICBvbkhlYWRlclRpdGxlOiBmYWxzZSxcclxuXHJcbiAgc2VhcmNoZWRLZXl3b3JkOiBudWxsLFxyXG5cclxuICBzZWFyY2hLZXl3b3JkTG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoS2V5d29yZERvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaEtleXdvcmRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHNlYXJjaEhhc2hUYWdMb2FkaW5nOiBmYWxzZSxcclxuICBzZWFyY2hIYXNoVGFnRG9uZTogZmFsc2UsXHJcbiAgc2VhcmNoSGFzaFRhZ0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgYWRkUXVpekxvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFF1aXpEb25lOiBmYWxzZSxcclxuICBhZGRRdWl6RXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREVfQ0hBTkdFID0gXCJNT0RFX0NIQU5HRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1JURk9MSU9TID0gXCJMT0FEX1BPUlRGT0xJT1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9SVEZPTElPID0gXCJMT0FEX1BPUlRGT0xJT1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUkVQT1JURk9MSU8gPSBcIkxPQURfUFJFUE9SVEZPTElPXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RQT1JURk9MSU8gPSBcIkxPQURfUFNUUE9SVEZPTElPXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFHRV9IRUFERVIgPSBcIkNIQUdFX0hFQURFUlwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0FCT1VUID0gXCJTV0lUQ0hfQUJPVVRcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX0FCT1VUID0gXCJPTl9BQk9VVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT0ZGX0FCT1VUID0gXCJPRkZfQUJPVVRcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IE9OX1NJR05fVVBfUEFHRSA9IFwiT05fU0lHTl9VUF9QQUdFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUE9TVF9FRElUX09OID0gXCJQT1NUX0VESVRfT05cIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFBPU1RfRURJVF9PRkYgPSBcIlBPU1RfRURJVF9PRkZcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENMSUNLX0hBU0hfVEFHID0gXCJDTElDS19IQVNIX1RBR1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fU0xJREVfTUVOVSA9IFwiT05fU0xJREVfTUVOVVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgT05fSEVBREVSX1RJVExFID0gXCJPTl9IRUFERVJfVElUTEVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9SRVFVRVNUID0gXCJTRUFSQ0hfS0VZV09SRF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTID0gXCJTRUFSQ0hfS0VZV09SRF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFID0gXCJTRUFSQ0hfS0VZV09SRF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfS0VZV09SRF9DTEVBUiA9IFwiU0VBUkNIX0tFWVdPUkRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVCA9IFwiU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTID0gXCJTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkUgPSBcIlNFQVJDSF9IQVNIX1RBR19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIgPSBcIlNFQVJDSF9IQVNIX1RBR19DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX1JFUVVFU1QgPSBcIkFERF9RVUlaX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX1NVQ0NFU1MgPSBcIkFERF9RVUlaX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX0ZBSUxVUkUgPSBcIkFERF9RVUlaX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9RVUlaX0NMRUFSID0gXCJBRERfUVVJWl9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogQmxvZ1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBNT0RFX0NIQU5HRTpcclxuICAgICAgICBkcmFmdC50aGVtZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQUdFX0hFQURFUjpcclxuICAgICAgICBkcmFmdC5oZWFkZXIgPSBhY3Rpb24uaGVhZGVyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNXSVRDSF9BQk9VVDpcclxuICAgICAgICBkcmFmdC5vbkFib3V0ID0gIWRyYWZ0Lm9uQWJvdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT05fQUJPVVQ6XHJcbiAgICAgICAgZHJhZnQub25BYm91dCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgT0ZGX0FCT1VUOlxyXG4gICAgICAgIGRyYWZ0Lm9uQWJvdXQgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9TSUdOX1VQX1BBR0U6XHJcbiAgICAgICAgZHJhZnQub25TaWduVXBQYWdlID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUE9TVF9FRElUX09OOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RFZGl0T24gPSAhZHJhZnQucG9zdEVkaXRPbjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBPTl9TTElERV9NRU5VOlxyXG4gICAgICAgIGRyYWZ0Lm9uU2xpZGVNZW51ID0gIWRyYWZ0Lm9uU2xpZGVNZW51O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE9OX0hFQURFUl9USVRMRTpcclxuICAgICAgICBkcmFmdC5vbkhlYWRlclRpdGxlID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUE9TVF9FRElUX09GRjpcclxuICAgICAgICBkcmFmdC5wb3N0RWRpdE9uID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0VBUkNIX0tFWVdPUkRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHMgPSBhY3Rpb24uZGF0YS5zZWFyY2hQb3N0cztcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hlZEtleXdvcmQgPSBhY3Rpb24uZGF0YS5zZWFyY2hlZEtleXdvcmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9LRVlXT1JEX0NMRUFSOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEtleXdvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoS2V5d29yZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hLZXl3b3JkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRUFSQ0hfSEFTSF9UQUdfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmhhc2h0YWdQb3N0cyA9IGFjdGlvbi5kYXRhLmhhc2h0YWdQb3N0cztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFQVJDSF9IQVNIX1RBR19DTEVBUjpcclxuICAgICAgICBkcmFmdC5zZWFyY2hIYXNoVGFnTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaEhhc2hUYWdEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoSGFzaFRhZ0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRRdWl6TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUVVJWl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9RVUlaX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1FVSVpfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkUXVpekxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRRdWl6RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFF1aXpFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgYmxvZyBmcm9tIFwiLi9ibG9nXCI7XHJcbmltcG9ydCB7IEJsb2dTdGF0ZSwgUG9zdFN0YXRlLCBVc2VyU3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XHJcbiAgYmxvZzogQmxvZ1N0YXRlO1xyXG4gIHVzZXI6IFVzZXJTdGF0ZTtcclxuICBwb3N0OiBQb3N0U3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlOiBSb290U3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgICBibG9nLFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudHNJbnRlciwgUG9zdFN0YXRlIH0gZnJvbSBcIi4vQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRlY2hQb3N0czogW10sXHJcbiAgZGFpbHlQb3N0czogW10sXHJcbiAgY2xhc3NQb3N0czogW10sXHJcbiAgY3VsdHVyZVBvc3RzOiBbXSxcclxuICBxdWl6emVzOiBbXSxcclxuICB3b3JkczogW10sXHJcbiAgaGFzaHRhZ3M6IFtdLFxyXG4gIG1vc3RMaWtlZFBvc3Q6IG51bGwsXHJcbiAgbW9zdFZpZXdlZFBvc3Q6IG51bGwsXHJcbiAgbW9zdENvbW1lbnRlZFBvc3Q6IG51bGwsXHJcbiAgcG9zdDogbnVsbCxcclxuICBwcmV2UG9zdDogW10sXHJcbiAgbmV4dFBvc3Q6IFtdLFxyXG4gIGNvdW50UG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aDogbnVsbCxcclxuICBwb3N0SW1hZ2VQYXRoOiBudWxsLFxyXG4gIHJlY2VudFZpZXdQb3N0OiBudWxsLFxyXG4gIHJlY2VudENvbW1lbnRQb3N0OiBudWxsLFxyXG5cclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgdXBsb2FkUG9zdEltYWdlTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkUG9zdEltYWdlRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkUG9zdEltYWdlRXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGVkaXRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgZWRpdFBvc3REb25lOiBmYWxzZSxcclxuICBlZGl0UG9zdEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkUmVjZW50UG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUmVjZW50UG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUmVjZW50UG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZENhdGVnb3J5UG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkQ2F0ZWdvcnlQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRDYXRlZ29yeVBvc3RzRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2FkTW9yZVBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZE1vcmVQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNb3JlUG9zdHNFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvYWRDbGFzc1Bvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZENsYXNzUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkQ2xhc3NQb3N0c0Vycm9yOiBmYWxzZSxcclxuXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IGZhbHNlLFxyXG5cclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogZmFsc2UsXHJcblxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgZWRpdENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBlZGl0Q29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGVkaXRDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxpa2VDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICBsaWtlQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgdW5saWtlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICB1bmxpa2VDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBhZGRTdWJDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkU3ViQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZFN1YkNvbW1lbnRFcnJvcjogZmFsc2UsXHJcblxyXG4gIGVkaXRTdWJDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgZWRpdFN1YkNvbW1lbnREb25lOiBmYWxzZSxcclxuICBlZGl0U3ViQ29tbWVudEVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlU3ViQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVN1YkNvbW1lbnREb25lOiBmYWxzZSxcclxuICByZW1vdmVTdWJDb21tZW50RXJyb3I6IGZhbHNlLFxyXG5cclxuICBoYXNNb3JlUG9zdHM6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfQ0xFQVIgPSBcIlVQTE9BRF9JTUFHRVNfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNUID0gXCJVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTID0gXCJVUExPQURfUE9TVF9JTUFHRV9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFID0gXCJVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfUE9TVF9JTUFHRV9DTEVBUiA9IFwiVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9DTEVBUiA9IFwiQUREX1BPU1RfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gXCJMT0FEX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9SRUNFTlRfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9SRUNFTlRfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfQ0FURUdPUllfUE9TVFNfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTID0gXCJMT0FEX0NBVEVHT1JZX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0FURUdPUllfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfTU9SRV9QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9QT1NUU19GQUlMVVJFID0gXCJMT0FEX01PUkVfUE9TVFNfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0xBU1NfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9DTEFTU19QT1NUU19SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfQ0xBU1NfUE9TVFNfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFID0gXCJMT0FEX0NMQVNTX1BPU1RTX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfUkVRVUVTVCA9IFwiRURJVF9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9TVUNDRVNTID0gXCJFRElUX1BPU1RfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0ZBSUxVUkUgPSBcIkVESVRfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ0xFQVIgPSBcIkVESVRfUE9TVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0NMRUFSID0gXCJSRU1PVkVfUE9TVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9DT01NRU5UX1JFUVVFU1QgPSBcIkxJS0VfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMSUtFX0NPTU1FTlRfU1VDQ0VTUyA9IFwiTElLRV9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfQ09NTUVOVF9GQUlMVVJFID0gXCJMSUtFX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9DT01NRU5UX1JFUVVFU1QgPSBcIlVOTElLRV9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9DT01NRU5UX1NVQ0NFU1MgPSBcIlVOTElLRV9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9DT01NRU5UX0ZBSUxVUkUgPSBcIlVOTElLRV9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9DTEVBUiA9IFwiQUREX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gXCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gXCJSRU1PVkVfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFID0gXCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX1JFUVVFU1QgPSBcIkVESVRfQ09NTUVOVF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX0NPTU1FTlRfU1VDQ0VTUyA9IFwiRURJVF9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfQ09NTUVOVF9GQUlMVVJFID0gXCJFRElUX0NPTU1FTlRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9DT01NRU5UX0NMRUFSID0gXCJFRElUX0NPTU1FTlRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX1NVQl9DT01NRU5UX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9TVUJfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfU1VCX0NPTU1FTlRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1NVQl9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9TVUJfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfU1VCX0NPTU1FTlRfQ0xFQVIgPSBcIkFERF9TVUJfQ09NTUVOVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9TVUJfQ09NTUVOVF9SRVFVRVNUID0gXCJSRU1PVkVfU1VCX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1MgPSBcIlJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRSA9IFwiUkVNT1ZFX1NVQl9DT01NRU5UX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX1JFUVVFU1QgPSBcIkVESVRfU1VCX0NPTU1FTlRfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTID0gXCJFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRSA9IFwiRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBFRElUX1NVQl9DT01NRU5UX0NMRUFSID0gXCJFRElUX1NVQl9DT01NRU5UX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBQb3N0U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdDogYW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcInRlY2hcIiAmJiBkcmFmdC50ZWNoUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiZGFpbHlcIiAmJiBkcmFmdC5kYWlseVBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcImNsYXNzXCIgJiYgZHJhZnQuY2xhc3NQb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhY3Rpb24uZGF0YS5jYXRlZ29yeSA9PT0gXCJjdWx0dXJlXCIgJiYgZHJhZnQuY3VsdHVyZVBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC50ZWNoUG9zdHMgPSBhY3Rpb24uZGF0YS50ZWNoUG9zdHM7XHJcbiAgICAgICAgZHJhZnQuZGFpbHlQb3N0cyA9IGFjdGlvbi5kYXRhLmRhaWx5UG9zdHM7XHJcbiAgICAgICAgZHJhZnQuaGFzaHRhZ3MgPSBhY3Rpb24uZGF0YS5oYXNodGFncztcclxuICAgICAgICBkcmFmdC5tb3N0Vmlld2VkUG9zdCA9IGFjdGlvbi5kYXRhLm1vc3RWaWV3ZWRQb3N0O1xyXG4gICAgICAgIGRyYWZ0Lm1vc3RMaWtlZFBvc3QgPSBhY3Rpb24uZGF0YS5tb3N0TGlrZWRQb3N0O1xyXG4gICAgICAgIGRyYWZ0Lm1vc3RDb21tZW50ZWRQb3N0ID0gYWN0aW9uLmRhdGEubW9zdENvbW1lbnRlZFBvc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucG9zdCA9IGFjdGlvbi5kYXRhLnBvc3Q7XHJcbiAgICAgICAgZHJhZnQucHJldlBvc3QgPSBhY3Rpb24uZGF0YS5wcmV2UG9zdDtcclxuICAgICAgICBkcmFmdC5uZXh0UG9zdCA9IGFjdGlvbi5kYXRhLm5leHRQb3N0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2F0ZWdvcnlQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDYXRlZ29yeVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudGVjaFBvc3RzID0gYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwidGVjaFwiID8gYWN0aW9uLmRhdGEucG9zdHMgOiBmYWxzZTtcclxuICAgICAgICBkcmFmdC5kYWlseVBvc3RzID0gYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiZGFpbHlcIiA/IGFjdGlvbi5kYXRhLnBvc3RzIDogZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY291bnRQb3N0cyA9IGFjdGlvbi5kYXRhLmNvdW50UG9zdHM7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEucG9zdHMubGVuZ3RoID4gNjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZENhdGVnb3J5UG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01PUkVfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE1vcmVQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01PUkVfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAvL+y5tO2FjOqzoOumrOyXkCDrp57ripQg7Y+s7Iqk7Yq466W8IOuEo+yWtOykgOuLpC5cclxuICAgICAgICBjb25zdCBtb3JlVGVjaFBvc3RzID1cclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmNhdGVnb3J5ID09PSBcInRlY2hcIiAmJiBkcmFmdC50ZWNoUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhLm1vcmVQb3N0cyk7XHJcbiAgICAgICAgY29uc3QgbW9yZURhaWx5UG9zdHMgPVxyXG4gICAgICAgICAgYWN0aW9uLmRhdGEuY2F0ZWdvcnkgPT09IFwiZGFpbHlcIiAmJiBkcmFmdC5kYWlseVBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YS5tb3JlUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0LnRlY2hQb3N0cyA9IG1vcmVUZWNoUG9zdHM7XHJcbiAgICAgICAgZHJhZnQuZGFpbHlQb3N0cyA9IG1vcmVEYWlseVBvc3RzO1xyXG4gICAgICAgIC8v67aI65+s7JioIO2PrOyKpO2KuOqwgCBsaW1pdOqwkuyduCA26rCc652864qU6rKD7J2AIOu2iOufrOyYqCDtj6zsiqTtirjqsIAg642UIOyeiOuLpOuKlCDsnZjrr7jsnbTri6QuXHJcbiAgICAgICAgLy/rp4zslb0g6rCv7IiY6rCAIOuUsSDrp57slYTshJwg64uk7J2MIOqwkuydtCDsl4bri6Tqs6Ag7ZW064+EIOq3uCDsmpTssq3snYAgMOqwnOyehOycvOuhnCBmYWxzZeqwgCDrkJzri6QuXHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubW9yZVBvc3RzLmxlbmd0aCA9PT0gNjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkTW9yZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNb3JlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZENsYXNzUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkQ2xhc3NQb3N0c0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2xhc3NQb3N0cyA9IGFjdGlvbi5kYXRhLmNsYXNzUG9zdHNfY2xhc3M7XHJcbiAgICAgICAgZHJhZnQuY3VsdHVyZVBvc3RzID0gYWN0aW9uLmRhdGEuY3VsdHVyZVBvc3RzX2NsYXNzO1xyXG4gICAgICAgIGRyYWZ0LnF1aXp6ZXMgPSBhY3Rpb24uZGF0YS5xdWl6emVzO1xyXG4gICAgICAgIGRyYWZ0LndvcmRzID0gYWN0aW9uLmRhdGEud29yZHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DTEFTU19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRDbGFzc1Bvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uQ29tbWVudHM/LnB1c2goYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uUG9zdExpa2Vycz8ucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdD8uUG9zdExpa2Vycz8uZmlsdGVyKCh2OiBhbnkpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVESVRfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX1BPU1RfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3QuQ29tbWVudHMuZmluZCgodjogQ29tbWVudHNJbnRlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZDtcclxuICAgICAgICB9KS5jb250ZW50ID0gYWN0aW9uLmRhdGEubmV3Q29tbWVudDtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0Q29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgRURJVF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRElUX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZWRpdENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5maW5kKCh2OiBhbnkpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCkuQ29tbWVudExpa2Vycy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExJS0VfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAvL1JFUVVFU1QgLCBTVUNDRVNTICwgRkFJTFVSRSDroZwgUmVkdWNlcuulvCDsqrzqsJzshJwg7Jik66WY6rSA66as66W8IOuztOuLpCDsib3qsowg7ZaI7Iq164uI64ukLlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAvL2ltbWVyIOyggeyaqeycvOuhnCDrtojrs4DshLHsnYQg7JWI7KeA7Lyc64+EIOuQqC5cclxuICAgICAgICBsZXQgQ29tbWVudHNXaXRob3V0RGVsZXRlZCA9IGRyYWZ0LnBvc3Q/LkNvbW1lbnRzPy5maW5kKFxyXG4gICAgICAgICAgKHY6IENvbW1lbnRzSW50ZXIpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZFxyXG4gICAgICAgICkuQ29tbWVudExpa2Vycy5maWx0ZXIoKHY6IGFueSkgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC5wb3N0LkNvbW1lbnRzLmZpbmQoXHJcbiAgICAgICAgICAodjogQ29tbWVudHNJbnRlcikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkXHJcbiAgICAgICAgKS5Db21tZW50TGlrZXJzID0gQ29tbWVudHNXaXRob3V0RGVsZXRlZDtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1NVQl9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0Py5Db21tZW50cz8uZmluZCgodjogYW55KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Db21tZW50SWQpLlN1YkNvbW1lbnRzLnB1c2goXHJcbiAgICAgICAgICBhY3Rpb24uZGF0YS5mdWxsU3ViQ29tbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfU1VCX0NPTU1FTlRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBFRElUX1NVQl9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZWRpdFN1YkNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9TVUJfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQucG9zdC5Db21tZW50cy5maW5kKCh2OiBDb21tZW50c0ludGVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkO1xyXG4gICAgICAgIH0pLlN1YkNvbW1lbnRzLmZpbmQoKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHYuaWQgPT09IGFjdGlvbi5kYXRhLlN1YkNvbW1lbnRJZDtcclxuICAgICAgICB9KS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVkaXRTdWJDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURJVF9TVUJfQ09NTUVOVF9DTEVBUjpcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lZGl0U3ViQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5yZW1vdmVTdWJDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVN1YkNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlU3ViQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGggPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9QT1NUX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5wb3N0SW1hZ2VQYXRoID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX1BPU1RfSU1BR0VfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZFBvc3RJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1JFQ0VOVF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFJlY2VudFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlY2VudFZpZXdQb3N0ID0gYWN0aW9uLmRhdGEucmVjZW50Vmlld1Bvc3Q7XHJcbiAgICAgICAgZHJhZnQucmVjZW50Q29tbWVudFBvc3QgPSBhY3Rpb24uZGF0YS5yZWNlbnRDb21tZW50UG9zdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRSZWNlbnRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUmVjZW50UG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBVc2VyU3RhdGUgfSBmcm9tIFwiLi9AcmVkdWNlclR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogbnVsbCxcclxuICBpbWFnZVBhdGg6IG51bGwsXHJcbiAgY29uZmlybVBhc3N3b3JkOiBmYWxzZSxcclxuXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IGZhbHNlLFxyXG5cclxuICBsb2dJbkdvb2dsZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luR29vZ2xlRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5Hb29nbGVFcnJvcjogZmFsc2UsXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBmYWxzZSxcclxuXHJcbiAgbG9hZEluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkSW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRJbmZvRXJyb3I6IGZhbHNlLFxyXG5cclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogZmFsc2UsXHJcblxyXG4gIGFkZEljb25Mb2FkaW5nOiBmYWxzZSxcclxuICBhZGRJY29uRG9uZTogZmFsc2UsXHJcbiAgYWRkSWNvbkVycm9yOiBmYWxzZSxcclxuXHJcbiAgcmVtb3ZlSWNvbkxvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUljb25Eb25lOiBmYWxzZSxcclxuICByZW1vdmVJY29uRXJyb3I6IGZhbHNlLFxyXG5cclxuICBjb25maXJtUGFzc3dvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBjb25maXJtUGFzc3dvcmREb25lOiBmYWxzZSxcclxuICBjb25maXJtUGFzc3dvcmRFcnJvcjogZmFsc2UsXHJcblxyXG4gIHdpdGhkcmF3YWxMb2FkaW5nOiBmYWxzZSxcclxuICB3aXRoZHJhd2FsRG9uZTogZmFsc2UsXHJcbiAgd2l0aGRyYXdhbEVycm9yOiBmYWxzZSxcclxuXHJcbiAgY2hhbmdlUGFzc3dvcmRMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VQYXNzd29yZERvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZVBhc3N3b3JkRXJyb3I6IGZhbHNlLFxyXG5cclxuICBjaGFuZ2VOYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5hbWVFcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0NMRUFSID0gXCJMT0dfSU5fQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX1JFUVVFU1QgPSBcIkxPR19JTl9HT09HTEVfUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0dPT0dMRV9TVUNDRVNTID0gXCJMT0dfSU5fR09PR0xFX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9HT09HTEVfRkFJTFVSRSA9IFwiTE9HX0lOX0dPT0dMRV9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fR09PR0xFX0NMRUFSID0gXCJMT0dfSU5fR09PR0xFX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9DTEVBUiA9IFwiTE9HX09VVF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfQ0xFQVIgPSBcIlNJR05fVVBfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9JTkZPX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfSU5GT19TVUNDRVNTID0gXCJMT0FEX0lORk9fU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfSU5GT19GQUlMVVJFXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0lDT05fUkVRVUVTVCA9IFwiQUREX0lDT05fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0lDT05fU1VDQ0VTUyA9IFwiQUREX0lDT05fU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0lDT05fRkFJTFVSRSA9IFwiQUREX0lDT05fRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0lDT05fQ0xFQVIgPSBcIkFERF9JQ09OX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lDT05fUkVRVUVTVCA9IFwiUkVNT1ZFX0lDT05fUkVRVUVTVFwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lDT05fU1VDQ0VTUyA9IFwiUkVNT1ZFX0lDT05fU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lDT05fRkFJTFVSRSA9IFwiUkVNT1ZFX0lDT05fRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lDT05fQ0xFQVIgPSBcIlJFTU9WRV9JQ09OX0NMRUFSXCIgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QgPSBcIkNIQU5HRV9QQVNTV09SRF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUyA9IFwiQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1NcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QQVNTV09SRF9GQUlMVVJFID0gXCJDSEFOR0VfUEFTU1dPUkRfRkFJTFVSRVwiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX0NMRUFSID0gXCJDSEFOR0VfUEFTU1dPUkRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTkFNRV9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTkFNRV9TVUNDRVNTXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTkFNRV9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTkFNRV9DTEVBUiA9IFwiQ0hBTkdFX05BTUVfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfUkVRVUVTVCA9IFwiV0lUSERSV0FMX1JFUVVFU1RcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFdJVEhEUldBTF9TVUNDRVNTID0gXCJXSVRIRFJXQUxfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgV0lUSERSV0FMX0ZBSUxVUkUgPSBcIldJVEhEUldBTF9GQUlMVVJFXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBXSVRIRFJXQUxfQ0xFQVIgPSBcIldJVEhEUldBTF9DTEVBUlwiIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfUkVRVUVTVCA9IFwiQ09ORklSTV9QQVNTV09SRF9SRVFVRVNUXCIgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNX1BBU1NXT1JEX1NVQ0NFU1MgPSBcIkNPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTU1wiIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ09ORklSTV9QQVNTV09SRF9GQUlMVVJFID0gXCJDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkVcIiBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENPTkZJUk1fUEFTU1dPUkRfQ0xFQVIgPSBcIkNPTkZJUk1fUEFTU1dPUkRfQ0xFQVJcIiBhcyBjb25zdDtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFVzZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0OiBhbnkpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0dPT0dMRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9HT09HTEVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YS5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9HT09HTEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkdvb2dsZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9HT09HTEVfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Hb29nbGVFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luR29vZ2xlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSW5mb0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5vblNpZ25VcFBhZ2UgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRJY29uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSUNPTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZEljb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXIuaWNvbiA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9JQ09OX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0lDT05fQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuYWRkSWNvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRJY29uRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JQ09OX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyLmljb24gPSBcIi9pbWFnZXMvYmxvZy9kZWZhdWx0LXVzZXIucG5nXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lDT05fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSUNPTl9DTEVBUjpcclxuICAgICAgICBkcmFmdC5yZW1vdmVJY29uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUljb25Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlSWNvbkVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09ORklSTV9QQVNTV09SRF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jb25maXJtUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTkZJUk1fUEFTU1dPUkRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbmZpcm1QYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29uZmlybVBhc3N3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QQVNTV09SRF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVBhc3N3b3JkRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUEFTU1dPUkRfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VyLm5hbWUgPSBhY3Rpb24uZGF0YS5uZXdOYW1lO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05BTUVfQ0xFQVI6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5hbWVFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFdJVEhEUldBTF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFdJVEhEUldBTF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFdJVEhEUldBTF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQud2l0aGRyYXdhbEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFdJVEhEUldBTF9DTEVBUjpcclxuICAgICAgICBkcmFmdC53aXRoZHJhd2FsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LndpdGhkcmF3YWxEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBRERfUVVJWl9DTEVBUixcclxuICBBRERfUVVJWl9GQUlMVVJFLFxyXG4gIEFERF9RVUlaX1JFUVVFU1QsXHJcbiAgQUREX1FVSVpfU1VDQ0VTUyxcclxuICBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIsXHJcbiAgU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkUsXHJcbiAgU0VBUkNIX0hBU0hfVEFHX1JFUVVFU1QsXHJcbiAgU0VBUkNIX0hBU0hfVEFHX1NVQ0NFU1MsXHJcbiAgU0VBUkNIX0tFWVdPUkRfQ0xFQVIsXHJcbiAgU0VBUkNIX0tFWVdPUkRfRkFJTFVSRSxcclxuICBTRUFSQ0hfS0VZV09SRF9SRVFVRVNULFxyXG4gIFNFQVJDSF9LRVlXT1JEX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkUXVpekRhdGEsXHJcbiAgQWRkUXVpekludGVyLFxyXG4gIFNlYXJjaEhhc2h0YWdEYXRhLFxyXG4gIFNlYXJjaEhhc2h0YWdJbnRlcixcclxuICBTZWFyY2hLZXl3b3JkRGF0YSxcclxuICBTZWFyY2hLZXl3b3JkSW50ZXIsXHJcbn0gZnJvbSBcIi4vQHNhZ2FUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkUXVpekFQSShkYXRhOiBBZGRRdWl6RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3F1aXpgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFF1aXooYWN0aW9uOiBBZGRRdWl6SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChhZGRRdWl6QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9RVUlaX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUVVJWl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1FVSVpfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEtleXdvcmRBUEkoZGF0YTogU2VhcmNoS2V5d29yZERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9zZWFyY2gvYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hLZXl3b3JkKGFjdGlvbjogU2VhcmNoS2V5d29yZEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChzZWFyY2hLZXl3b3JkQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9LRVlXT1JEX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfS0VZV09SRF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0tFWVdPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEhhc2h0YWdBUEkoZGF0YTogU2VhcmNoSGFzaHRhZ0RhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9zZWFyY2gvaGFzaHRhZ2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoSGFzaHRhZyhhY3Rpb246IFNlYXJjaEhhc2h0YWdJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoc2VhcmNoSGFzaHRhZ0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFQVJDSF9IQVNIX1RBR19DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VBUkNIX0hBU0hfVEFHX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfSEFTSF9UQUdfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFF1aXooKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUVVJWl9SRVFVRVNULCBhZGRRdWl6KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hLZXl3b3JkKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0tFWVdPUkRfUkVRVUVTVCwgc2VhcmNoS2V5d29yZCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoSGFzaHRhZygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9IQVNIX1RBR19SRVFVRVNULCBzZWFyY2hIYXNodGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGJsb2dTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaEFkZFF1aXopLCBmb3JrKHdhdGNoU2VhcmNoS2V5d29yZCksIGZvcmsod2F0Y2hTZWFyY2hIYXNodGFnKV0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIExJS0VfQ09NTUVOVF9SRVFVRVNULFxyXG4gIFVOTElLRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX1NVQl9DT01NRU5UX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QsXHJcbiAgRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgRURJVF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0NMRUFSLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEVESVRfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEVESVRfQ09NTUVOVF9DTEVBUixcclxuICBFRElUX0NPTU1FTlRfRkFJTFVSRSxcclxuICBMSUtFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBMSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICBVTkxJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gIEFERF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9TVUJfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBFRElUX1NVQl9DT01NRU5UX0NMRUFSLFxyXG4gIEVESVRfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtcclxuICBBZGRDb21tZW50RGF0YSxcclxuICBBZGRDb21tZW50SW50ZXIsXHJcbiAgQWRkU3ViQ29tbWVudERhdGEsXHJcbiAgQWRkU3ViQ29tbWVudEludGVyLFxyXG4gIEVkaXRDb21tZW50RGF0YSxcclxuICBFZGl0Q29tbWVudEludGVyLFxyXG4gIEVkaXRTdWJDb21tZW50SW50ZXIsXHJcbiAgTGlrZUNvbW1lbnREYXRhLFxyXG4gIExpa2VDb21tZW50SW50ZXIsXHJcbiAgUmVtb3ZlQ29tbWVudEludGVyLFxyXG4gIFJlbW92ZVN1YkNvbW1lbnRJbnRlcixcclxuICBTdWJDb21tZW50RGF0YSxcclxuICBVbmxpa2VDb21tZW50SW50ZXIsXHJcbn0gZnJvbSBcIi4vQHNhZ2FUeXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhOiBBZGRDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL2NvbW1lbnQvJHtkYXRhLnBvc3RJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uOiBBZGRDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9jb21tZW50LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUNvbW1lbnQoYWN0aW9uOiBSZW1vdmVDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRDb21tZW50QVBJKGRhdGE6IEVkaXRDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvY29tbWVudC9lZGl0LyR7ZGF0YS5Db21tZW50SWR9L2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZWRpdENvbW1lbnQoYWN0aW9uOiBFZGl0Q29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChlZGl0Q29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9DT01NRU5UX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGxpa2VDb21tZW50QVBJKGRhdGE6IExpa2VDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL2FwaS9jb21tZW50L2xpa2UvJHtkYXRhLlVzZXJJZH0vJHtkYXRhLkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VDb21tZW50KGFjdGlvbjogTGlrZUNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobGlrZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VDb21tZW50QVBJKGRhdGE6IExpa2VDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvY29tbWVudC91bmxpa2UvJHtkYXRhLlVzZXJJZH0vJHtkYXRhLkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZUNvbW1lbnQoYWN0aW9uOiBVbmxpa2VDb21tZW50SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVubGlrZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3ViQ29tbWVudEFQSShkYXRhOiBBZGRTdWJDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL2NvbW1lbnQvc3ViLyR7ZGF0YS5Db21tZW50SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRTdWJDb21tZW50KGFjdGlvbjogQWRkU3ViQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRTdWJDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfU1VCX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfU1VCX0NPTU1FTlRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdWJDb21tZW50QVBJKGRhdGE6IFN1YkNvbW1lbnREYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9jb21tZW50L3N1Yi8ke2RhdGEuQ29tbWVudElkfS8ke2RhdGEuU3ViQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlU3ViQ29tbWVudChhY3Rpb246IFJlbW92ZVN1YkNvbW1lbnRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocmVtb3ZlU3ViQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfU1VCX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0U3ViQ29tbWVudEFQSShkYXRhOiBTdWJDb21tZW50RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvY29tbWVudC9zdWIvZWRpdC8ke2RhdGEuQ29tbWVudElkfS8ke2RhdGEuU3ViQ29tbWVudElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZWRpdFN1YkNvbW1lbnQoYWN0aW9uOiBFZGl0U3ViQ29tbWVudEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChlZGl0U3ViQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1NVQl9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9TVUJfQ09NTUVOVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9TVUJfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX0NPTU1FTlRfUkVRVUVTVCwgZWRpdENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9DT01NRU5UX1JFUVVFU1QsIGxpa2VDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX0NPTU1FTlRfUkVRVUVTVCwgdW5saWtlQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkU3ViQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9TVUJfQ09NTUVOVF9SRVFVRVNULCBhZGRTdWJDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVTdWJDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1NVQl9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZVN1YkNvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRTdWJDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9TVUJfQ09NTUVOVF9SRVFVRVNULCBlZGl0U3ViQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjb21tZW50U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaEVkaXRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hMaWtlQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoQWRkU3ViQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlU3ViQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoRWRpdFN1YkNvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmxvZ1NhZ2EgZnJvbSBcIi4vYmxvZ1wiO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbWVudFNhZ2EgZnJvbSBcIi4vY29tbWVudFwiO1xyXG5pbXBvcnQgeyBCQUNLRU5EX1VSTCB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiIDogQkFDS0VORF9VUkw7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSksIGZvcmsoY29tbWVudFNhZ2EpLCBmb3JrKGJsb2dTYWdhKV0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9DQVRFR09SWV9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfQ0FURUdPUllfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9DTEFTU19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRSxcclxuICBFRElUX1BPU1RfUkVRVUVTVCxcclxuICBFRElUX1BPU1RfRkFJTFVSRSxcclxuICBFRElUX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9DTEVBUixcclxuICBMT0FEX01PUkVfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX01PUkVfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX01PUkVfUE9TVFNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfQ0xFQVIsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX0NMRUFSLFxyXG4gIExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1JFQ0VOVF9QT1NUU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QsXHJcbiAgVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUyxcclxuICBVUExPQURfUE9TVF9JTUFHRV9DTEVBUixcclxuICBVUExPQURfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gIEVESVRfUE9TVF9DTEVBUixcclxufSBmcm9tIFwiLi4vQHJlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtcclxuICBBZGRQb3N0SW50ZXIsXHJcbiAgRWRpdFBvc3RJbnRlcixcclxuICBMaWtlUG9zdERhdGEsXHJcbiAgTGlrZVBvc3RJbnRlcixcclxuICBMb2FkQ2F0ZWdvcnlJbnRlcixcclxuICBMb2FkTW9yZVBvc3RzRGF0YSxcclxuICBMb2FkTW9yZVBvc3RzSW50ZXIsXHJcbiAgTG9hZFBvc3REYXRhLFxyXG4gIExvYWRQb3N0SW50ZXIsXHJcbiAgTG9hZFJlY2VudFBvc3RJbnRlcixcclxuICBOZXdQb3N0RGF0YSxcclxuICBSZW1vdmVQb3N0RGF0YSxcclxuICBSZW1vdmVQb3N0SW50ZXIsXHJcbiAgVXBsb2FkSW1hZ2VEYXRhLFxyXG4gIFVwbG9hZEltYWdlSW50ZXIsXHJcbiAgVXBsb2FkUG9zdEltYWdlSW50ZXIsXHJcbn0gZnJvbSBcIi4vQHNhZ2FUeXBlc1wiO1xyXG5pbXBvcnQgeyBVc2VySW50ZXIgfSBmcm9tIFwiLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YTogTmV3UG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uOiBBZGRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDYXRlZ29yeVBvc3RzQVBJKGRhdGE6IHN0cmluZykge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdC9jYXRlZ29yeS8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ2F0ZWdvcnlQb3N0cyhhY3Rpb246IExvYWRDYXRlZ29yeUludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkQ2F0ZWdvcnlQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DQVRFR09SWV9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NBVEVHT1JZX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1vcmVQb3N0c0FQSShkYXRhOiBMb2FkTW9yZVBvc3RzRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdC9tb3JlcG9zdC8ke2RhdGEuY2F0ZWdvcnl9P2xhc3RJZD0ke2RhdGEuTGFzdElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE1vcmVQb3N0cyhhY3Rpb246IExvYWRNb3JlUG9zdHNJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZE1vcmVQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NT1JFX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTU9SRV9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDbGFzc1Bvc3RzQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9hcGkvcG9zdC9jbGFzc2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZENsYXNzUG9zdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkQ2xhc3NQb3N0c0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0NMQVNTX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0xBU1NfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhOiBMb2FkUG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL3Bvc3Qvb25lUG9zdC8ke2RhdGEucG9zdElkfS8ke2RhdGEuVXNlcklkfS8ke2RhdGEuY2F0ZWdvcnl9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbjogTG9hZFBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRSZWNlbnRQb3N0c0FQSShkYXRhOiBVc2VySW50ZXIpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0L3JlY2VudGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUmVjZW50UG9zdHMoYWN0aW9uOiBMb2FkUmVjZW50UG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkUmVjZW50UG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVDRU5UX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVDRU5UX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YTogTGlrZVBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvYXBpL3Bvc3QvbGlrZS8ke2RhdGEuUG9zdElkfS8ke2RhdGEuVXNlcklkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uOiBMaWtlUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YTogTGlrZVBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS9wb3N0L2xpa2UvJHtkYXRhLlBvc3RJZH0vJHtkYXRhLlVzZXJJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uOiBMaWtlUG9zdEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhOiBVcGxvYWRJbWFnZURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdC9pbWFnZXNcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uOiBVcGxvYWRJbWFnZUludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkUG9zdEltYWdlQVBJKGRhdGE6IFVwbG9hZEltYWdlRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9wb3N0L2ltYWdlXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkUG9zdEltYWdlKGFjdGlvbjogVXBsb2FkUG9zdEltYWdlSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKHVwbG9hZFBvc3RJbWFnZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9QT1NUX0lNQUdFX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGE6IFJlbW92ZVBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYGFwaS9wb3N0L2RlbGV0ZWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb246IFJlbW92ZVBvc3RJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UG9zdEFQSShkYXRhOiBOZXdQb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvcG9zdC9lZGl0YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0UG9zdChhY3Rpb246IEVkaXRQb3N0SW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGVkaXRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX1BPU1RfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZENhdGVnb3J5UG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NBVEVHT1JZX1BPU1RTX1JFUVVFU1QsIGxvYWRDYXRlZ29yeVBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkTW9yZVBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NT1JFX1BPU1RTX1JFUVVFU1QsIGxvYWRNb3JlUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSZWNlbnRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVDRU5UX1BPU1RTX1JFUVVFU1QsIGxvYWRSZWNlbnRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZENsYXNzUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NMQVNTX1BPU1RTX1JFUVVFU1QsIGxvYWRDbGFzc1Bvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfUE9TVF9SRVFVRVNULCBlZGl0UG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZFBvc3RJbWFnZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QsIHVwbG9hZFBvc3RJbWFnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNobG9hZENhdGVnb3J5UG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaGxvYWRNb3JlUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaGxvYWRDbGFzc1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlY2VudFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRQb3N0SW1hZ2UpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEVkaXRQb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBRERfSUNPTl9DTEVBUixcclxuICBBRERfSUNPTl9GQUlMVVJFLFxyXG4gIEFERF9JQ09OX1JFUVVFU1QsXHJcbiAgQUREX0lDT05fU1VDQ0VTUyxcclxuICBDSEFOR0VfUEFTU1dPUkRfQ0xFQVIsXHJcbiAgQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX1BBU1NXT1JEX1NVQ0NFU1MsXHJcbiAgQ0hBTkdFX05BTUVfQ0xFQVIsXHJcbiAgQ0hBTkdFX05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OQU1FX1NVQ0NFU1MsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9DTEVBUixcclxuICBDT05GSVJNX1BBU1NXT1JEX0ZBSUxVUkUsXHJcbiAgQ09ORklSTV9QQVNTV09SRF9SRVFVRVNULFxyXG4gIENPTkZJUk1fUEFTU1dPUkRfU1VDQ0VTUyxcclxuICBMT0FEX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX0lORk9fU1VDQ0VTUyxcclxuICBMT0dfSU5fQ0xFQVIsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX0dPT0dMRV9DTEVBUixcclxuICBMT0dfSU5fR09PR0xFX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX0dPT0dMRV9SRVFVRVNULFxyXG4gIExPR19JTl9HT09HTEVfU1VDQ0VTUyxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0NMRUFSLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9JQ09OX0NMRUFSLFxyXG4gIFJFTU9WRV9JQ09OX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0lDT05fUkVRVUVTVCxcclxuICBSRU1PVkVfSUNPTl9TVUNDRVNTLFxyXG4gIFNJR05fVVBfQ0xFQVIsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgV0lUSERSV0FMX0NMRUFSLFxyXG4gIFdJVEhEUldBTF9GQUlMVVJFLFxyXG4gIFdJVEhEUldBTF9SRVFVRVNULFxyXG4gIFdJVEhEUldBTF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJEYXRhLFxyXG4gIExvZ0luSW50ZXIsXHJcbiAgU2lnblVwSW50ZXIsXHJcbiAgQWRkSWNvbkRhdGEsXHJcbiAgQWRkSWNvbkludGVyLFxyXG4gIFJlbW92ZUljb25JbnRlcixcclxuICBDb21maXJtUGFzc3dvcmRJbnRlcixcclxuICBDb21maXJtUGFzc3dvcmREYXRhLFxyXG4gIENoYW5nZVBhc3N3b3JkRGF0YSxcclxuICBDaGFuZ2VQYXNzd29yZEludGVyLFxyXG4gIFdpdGhkcndhbEludGVyLFxyXG4gIENoYW5nZU5hbWVEYXRhLFxyXG4gIENoYW5nZU5hbWVJbnRlcixcclxufSBmcm9tIFwiLi9Ac2FnYVR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhOiBVc2VyRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL2xvZ0luXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uOiBMb2dJbkludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5Hb29nbGVBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hdXRoL2dvb2dsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luR29vZ2xlKCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ0luR29vZ2xlQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9HT09HTEVfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fR09PR0xFX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fR09PR0xFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvbG9nT3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGRlbGF5KDMwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGE6IFVzZXJEYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VzZXIvc2lnblVwXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbjogU2lnblVwSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoNTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSWNvbkFQSShkYXRhOiBBZGRJY29uRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91c2VyL2ljb25cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRJY29uKGFjdGlvbjogQWRkSWNvbkludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChhZGRJY29uQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfSUNPTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9JQ09OX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfSUNPTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUljb25BUEkoZGF0YTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL2FwaS91c2VyL2ljb24vJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlSWNvbihhY3Rpb246IFJlbW92ZUljb25JbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwocmVtb3ZlSWNvbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lDT05fU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSUNPTl9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lDT05fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSW5mb0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS91c2VyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEluZm8oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChsb2FkSW5mb0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlybVBhc3N3b3JkQVBJKGRhdGE6IENvbWZpcm1QYXNzd29yZERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3VzZXIvY29uZmlybWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY29uZmlybVBhc3N3b3JkKGFjdGlvbjogQ29tZmlybVBhc3N3b3JkSW50ZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB5aWVsZCBjYWxsKGNvbmZpcm1QYXNzd29yZEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09ORklSTV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTkZJUk1fUEFTU1dPUkRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQYXNzd29yZEFQSShkYXRhOiBDaGFuZ2VQYXNzd29yZERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgYXBpL3VzZXIvcGFzc3dvcmRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZVBhc3N3b3JkKGFjdGlvbjogQ2hhbmdlUGFzc3dvcmRJbnRlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHlpZWxkIGNhbGwoY2hhbmdlUGFzc3dvcmRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QQVNTV09SRF9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QQVNTV09SRF9DTEVBUixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BBU1NXT1JEX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmFtZUFQSShkYXRhOiBDaGFuZ2VOYW1lRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGBhcGkvdXNlci9uYW1lYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOYW1lKGFjdGlvbjogQ2hhbmdlTmFtZUludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbChjaGFuZ2VOYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OQU1FX0NMRUFSLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpdGhkcmF3YWxBUEkoZGF0YTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgYXBpL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2l0aGRyYXdhbChhY3Rpb246IFdpdGhkcndhbEludGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0geWllbGQgY2FsbCh3aXRoZHJhd2FsQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBXSVRIRFJXQUxfU1VDQ0VTUyxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBXSVRIRFJXQUxfQ0xFQVIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFdJVEhEUldBTF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbkdvb2dsZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9HT09HTEVfUkVRVUVTVCwgbG9nSW5Hb29nbGUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkSWNvbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9JQ09OX1JFUVVFU1QsIGFkZEljb24pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUljb24oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfSUNPTl9SRVFVRVNULCByZW1vdmVJY29uKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSU5GT19SRVFVRVNULCBsb2FkSW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ09ORklSTV9QQVNTV09SRF9SRVFVRVNULCBjb25maXJtUGFzc3dvcmQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZVBhc3N3b3JkKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QsIGNoYW5nZVBhc3N3b3JkKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05BTUVfUkVRVUVTVCwgY2hhbmdlTmFtZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoV2l0aGRyYXdhbCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFdJVEhEUldBTF9SRVFVRVNULCB3aXRoZHJhd2FsKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ0luR29vZ2xlKSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaEFkZEljb24pLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUljb24pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEluZm8pLFxyXG4gICAgZm9yayh3YXRjaENvbmZpcm1QYXNzd29yZCksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlUGFzc3dvcmQpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZU5hbWUpLFxyXG4gICAgZm9yayh3YXRjaFdpdGhkcmF3YWwpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vQHJlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vQHNhZ2FcIjtcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlOiBJU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJpbXBvcnQgeyBmYUFkZHJlc3NDYXJkLCBmYUVudmVsb3BlLCBmYUltYWdlcywgZmFMYXB0b3AgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBKU1hFbGVtZW50Q29uc3RydWN0b3IsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQ29uZmlnXHJcbmV4cG9ydCBjb25zdCBCQUNLRU5EX1VSTCA9IFwiaHR0cHM6Ly9hcGkubm9haHdvcmxkLnNpdGVcIjtcclxuXHJcbi8vIENvbG9yXHJcblxyXG5leHBvcnQgY29uc3QgQkxVRV9DT0xPUiA9IFwiIzExODdjZlwiO1xyXG5leHBvcnQgY29uc3QgTUFJTl9DT0xPUiA9IFwiI0Q1RjdFNlwiO1xyXG5leHBvcnQgY29uc3QgU1VCX0NPTE9SID0gXCIjNUFFNEE4XCI7XHJcbmV4cG9ydCBjb25zdCBHUkFZX0NPTE9SID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcclxuZXhwb3J0IGNvbnN0IEJHX0NPTE9SID0gXCJyZ2IoMjQ3LCAyNDcsIDI0NylcIjtcclxuZXhwb3J0IGNvbnN0IFJFRF9DT0xPUiA9IFwiI2YxNWI2Y1wiO1xyXG5cclxuLy8gTWFpbnBhZ2UgRGVzY1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUkRfREVTQ19QUyA9XHJcbiAgXCLsg4jroZzsmrQg6riw7Iig7J2EIOuwsOyasOq4sOyghCDtla3sg4Eg7J6Q7Iug7J2YIOq4sOuzuOq4sOulvCDsoJDqsoDtlanri4jri6QuIOuYkO2VnCDrrLjsoJzrpbwg7KCV7ZmV7ZWY6rKMIOyduOyLne2VmOqzoCDrsLDsmrDqs6Ag6riw66Gd7ZWp64uI64ukLlwiO1xyXG5leHBvcnQgY29uc3QgQ0FSRF9ERVNDX0NPTVUgPVxyXG4gIFwi7YyA7JuM7YGs66W8IOy1nOyasOyEoOycvOuhnCDsl6zquLDrqbAg7IaM7Ya17J2EIOykkeyLrOycvOuhnCDrp6TsiJzqsIQg7Iug66Kw7J2YIOq4sOuwmOydhCDri6Tsp5Hri4jri6QuXCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0RFU0NfQ09PUCA9XHJcbiAgXCLsvZTrlKkg7J6Q7LK066W8IOymkOq4sOupsCDrp6TsiJzqsIQg7Je07KCV7J2EIOqwgOyngOqzoCDqs6DruYTrpbwg64SY7Jy866mwIOuLtOuLtO2VmOqyjCDrj4TsoITtlanri4jri6QuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnRzID0gW1xyXG4gIHtcclxuICAgIHNxdWFyZVRpdGxlOiBcIlByb2JsZW1Tb2x2ZVwiLFxyXG4gICAgdGl0bGU6IFwi66y47KCc7ZW06rKw64ql66Cl7J2EIOychO2VnCDquLDrs7jquLBcIixcclxuICAgIGRlc2M6IENBUkRfREVTQ19QUyxcclxuICAgIHNyYzogXCIvaW1hZ2VzL1Byb2JsZW1Tb2x2ZS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNxdWFyZVRpdGxlOiBcIkNvb3BlcmF0aW9uXCIsXHJcbiAgICB0aXRsZTogXCLsi6DrorDsl5DshJwg7Jik64qUIOynhOygle2VnCDshozthrVcIixcclxuICAgIGRlc2M6IENBUkRfREVTQ19DT01VLFxyXG4gICAgc3JjOiBcIi9pbWFnZXMvQ29vcGVyYXRpb24ucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcXVhcmVUaXRsZTogXCJQYXNzaW9uXCIsXHJcbiAgICB0aXRsZTogXCLsl7TsoJUg6re466as6rOgIOuPhOyghFwiLFxyXG4gICAgZGVzYzogQ0FSRF9ERVNDX0NPT1AsXHJcbiAgICBzcmM6IFwiL2ltYWdlcy9QYXNzaW9uLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBOYXYgQ29udGVudHNcclxuZXhwb3J0IGNvbnN0IG5hdkNvbnRlbnRzID0gW1xyXG4gIHtcclxuICAgIGljb246IGZhQWRkcmVzc0NhcmQsXHJcbiAgICBleHBsYWluOiBcIkFib3V0IG1lXCIsXHJcbiAgICBuYW1lOiBcImFib3V0bWVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IGZhTGFwdG9wLFxyXG4gICAgZXhwbGFpbjogXCJTa2lsbHNcIixcclxuICAgIG5hbWU6IFwic2tpbGxzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBmYUltYWdlcyxcclxuICAgIGV4cGxhaW46IFwiUG9ydGZvbGlvXCIsXHJcbiAgICBuYW1lOiBcInBvcnRmb2xpb1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogZmFFbnZlbG9wZSxcclxuICAgIGV4cGxhaW46IFwiQ29udGFjdFwiLFxyXG4gICAgbmFtZTogXCJjb250YWN0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIFNraWxsIHBhZ2VcclxuZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkh0bWwgJiBDU1NcIixcclxuICAgIHNyYzogXCIuL2ltYWdlcy9IdG1sQ3NzLnBuZ1wiLFxyXG4gICAgZGVzYzogXCLsm7ntkZzspIAgLCBET00tdHJlZSAsIOuwmOydke2YleybueqzvCDruIzrnbzsmrDsoIAg66CM65SpIO2KueyEseydhCDtjIzslYXtlZjrqbAgQ1NT7J2YIOuLpOyxhOuhnOyatCDslaDri4jrqZTsnbTshZjqs7wg642U67aI7Ja0IOyghOy5mOumrOq4sCDsgqzsmqnsnbQg6rCA64ql7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR5cGVTY3JpcHRcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvdHlwZXNjcmlwdC5wbmdcIixcclxuICAgIGRlc2M6IFwiRVM2IOy1nOyLoOusuOuyleqzvCDsi6Ttlonsu6jthY3siqTtirgs7YG066Gc7KCALOydtOuypO2KuOujqO2UhOuTsSDrj4XtirntlZwgSlPtirnshLHsnYQg7Y+t64ST6rKMIOydtO2VtO2VmOupsCwg64yA7IS47J24IO2DgOyeheyKpO2BrOumve2KuOulvCDsoIHqt7kg7Zmc7Jqp7ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlYWN0XCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jb2xvci8xNDQvMDAwMDAwL3JlYWN0LW5hdGl2ZS5wbmdcIixcclxuICAgIGRlc2M6IFwiSG9va3Mg66y467KVLCBSb3V0ZXLsoIHsmqksIFJlZHV47JmAIOu5hOuPmeq4sOulvCDsnITtlZwgc2FnYSwgdGh1bmsg65iQ64qUIE1vYlgg65Ox65OxIOyXrOufrCDrnbzsnbTruIzrn6zrpqzrpbwg7J2R7Jqp7ZWY66mwIOugjOuNlOungey1nOyGjO2ZlCDrsI8g7IOd66qF7KO86riw6rCZ7J2AIFJlYWN07J2YIFNQQSDtirnshLHsnYQg7J207ZW07ZWp64uI64ukLlwiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5leHQuanNcIixcclxuICAgIHNyYzogXCJodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9rby1rci93aW5kb3dzL2ltYWdlcy9uZXh0anMtbG9nby5wbmdcIixcclxuICAgIGRlc2M6IFwiU0VP7J2YIO2aqOycqOyEseydhCDrhpLsnbTripQgTmV4dC5qc+ydmCBTU1Ig7Yq57ISx7J2EIOydtO2VtO2VmOupsCwgU1BBIOyZgCBTU1Ig66W8IOyepeuLqOygkOqzvCDtirnshLHsnYQg7YyM7JWF7ZWY6riwIOychO2VtCDrhbjroKXtlanri4jri6QuXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTXlzcWxcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvMTAwLzAwMDAwMC9teXNxbC1sb2dvLnBuZ1wiLFxyXG4gICAgZGVzYzogXCLsi5ztgITrnbzsnbTspoggJiDsm4ztgazrsqTsuZjrpbwg7IKs7Jqp7ZWY66mwLCDsiqTtgqTrp4gg7KCV7J2Y7JmAIOy9mOyGlCDrqoXroLnslrQsIOq3uOumrOqzoCDrjbDsnbTthLDrsqDsnbTsiqQg6rSA6rOE64+E66W8IOydtO2VtO2VtCDrjbDsnbTthLDrpbwg7Zqo7Jyo7J6I6rKMIOq0gOumrO2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHaXRcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL25vbGFuLzEyOC9naXRodWIucG5nXCIsXHJcbiAgICBkZXNjOiBcIu2YleyDgeq0gOumrOydmCDquLDrs7jsm5DrpqzsmYAg67KE7KCE6rSA66asLOu4jOuenOy5mCzrsLHsl4Xrk7HsnYQg7KCB6re5IO2ZnOyaqe2VqeuLiOuLpC5cIixcclxuICAgIGxldmVsOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3ViX3NraWxscyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNDU1NcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvc2Fzcy1hdmF0YXIucG5nXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXhpb3NcIixcclxuICAgIHNyYzogXCJodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL2Rtcy9pbWFnZS9DNEUwQkFRR2xOM1JKdkttd0VnL2NvbXBhbnktbG9nb18yMDBfMjAwLzAvMTU3MTI1MzQ0ODgxOD9lPTIxNTkwMjQ0MDAmdj1iZXRhJnQ9VllmclNvenEza1N3NV80MDR0UjR4WUZNSDB1RlFObVFOcndlUWNKa2JHd1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkV4cHJlc3NcIixcclxuICAgIHNyYzogXCJodHRwczovL3d3dy5tZW1lbnRvdGVjaC5pbi9hc3NldHMvaW1hZ2VzL2ljb25zL2V4cHJlc3MucG5nXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JhcGhRTFwiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1nLmljb25zOC5jb20vY29sb3IvMTQ0LzAwMDAwMC9ncmFwaHFsLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFudGRcIixcclxuICAgIHNyYzogXCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS0RwZ3ZndU1wR2ZxYUhQamljUksuc3ZnXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3R5bGVkLWNvbXBvbmVudHNcIixcclxuICAgIHNyYzogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjA2NTg4MjU/cz0yODAmdj00XCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRW1vdGlvbi5qc1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzE2MDAvMSpnR3pSbVVLTk9DX1g3a2xGalRrOEVBLnBuZ1wiLFxyXG4gICAgbGV2ZWw6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFXU1wiLFxyXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81MmNhM2I3M2U0YjA0YTQ1ZWYyYzVjYjYvMTU1MTg4NDg2MTMzMS1DOVUyUkhKUUxPUEw5RjMzMlg1Ty9rZTE3WndkR0JUb2RkSThwRG00OGtLNng4SU9oelhfclR0UUdLWTFxcC1oWnctelBQZ2RuNGpVd1ZjSkUxWnZXaGN3aEV0V0pYb3NoTmRBOWYxcUQ3WGFHUHNrZlF0VnV0dVNBMkItSlc2d2txcVYwMjRYUC0wNTlEUDZ3UllxWVZVR016c0J4VG8yVWxrWnExMEdUcmcvQVdTX2Jsb2dfMDEuUE5HXCIsXHJcbiAgICBsZXZlbDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGFzc3BvcnQuanNcIixcclxuICAgIHNyYzogXCJodHRwczovL2xlb2xhbmNoYXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzA3LzBkMTg0ZWUzLWZkOGQtNGI5NC1hY2Y0LWI0ZTY4NmU1NzM3NS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTmdpbnhcIixcclxuICAgIHNyYzogXCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzE0NC8wMDAwMDAvbmdpbngucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJhYmVsXCIsXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uaW1nYmluLmNvbS84LzQvMjIvaW1nYmluLXNvdXJjZS10by1zb3VyY2UtY29tcGlsZXItamF2YXNjcmlwdC1lY21hc2NyaXB0LW5vZGUtanMtdGhhdC1zLUtmdDlLNG5FOVlIck1wNnNkcTBCUTA5Y0suanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIldlYnBhY2tcIixcclxuICAgIHNyYzogXCJodHRwczovL3QxLmRhdW1jZG4ubmV0L2NmaWxlL3Rpc3RvcnkvOTk5QUY1NEI1QjkzRDc4QzI1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBvc3RtYW5cIixcclxuICAgIHNyYzogXCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNTEyLzEqZlZCTDltdExKbUhJSDZZcFU3V3ZIUS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFTb3VyY2UgPSBbXHJcbiAge1xyXG4gICAga2V5OiBcIjFcIixcclxuICAgIG5hbWU6IFwi7Yag7J21XCIsXHJcbiAgICBkYXRlOiAyMDE4LFxyXG4gICAgc3VtbWFyeTogXCLsmIHslrQg7J6Q6rKp7KadICjquLDqsITrp4zro4wpXCIsXHJcbiAgICBzY29yZTogXCI5MjVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCIyXCIsXHJcbiAgICBuYW1lOiBcIuunpOydvOqyveygnO2FjOyKpO2KuFwiLFxyXG4gICAgZGF0ZTogMjAxOCxcclxuICAgIHN1bW1hcnk6IFwi6rK97KCcLOqyveyYgeq0gOugqCDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCIzXCIsXHJcbiAgICBuYW1lOiBcIuq1reyZuOyXrO2WieyduOyGlOyekCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIu2VtOyZuOyXkOyEnCDsnbjsoJXtlZjripQg7ZWc6rWt6rSA6rSR7ZiR7ZqM7J2YIOq1reyZuCDsnbjshpTsnpAgIOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjRcIixcclxuICAgIG5hbWU6IFwiSkxQVFwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7J2867O47Ja0IOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiMeq4iVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjVcIixcclxuICAgIG5hbWU6IFwi7J2867O47Ja0IO2GteyXreyViOuCtOyCrCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMTksXHJcbiAgICBzdW1tYXJ5OiBcIu2VnOq1reyCrDHquInsl5Ag7KSA7ZWY66mwIOydvOuzuOyWtCDthrXrsojsl60g64ql66Cl7J2EIOyeheymne2VmOuKlCDqta3qsIDsoITrrLjsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI2XCIsXHJcbiAgICBuYW1lOiBcIuyYgeyWtCDthrXsl63slYjrgrTsgqwg7J6Q6rKp7KadXCIsXHJcbiAgICBkYXRlOiAyMDIwLFxyXG4gICAgc3VtbWFyeTogXCLtlZzqta3sgqwx6riJ7JeQIOykgO2VmOupsCDsmIHslrQg7Ya167KI7JetIOuKpeugpeydhCDsnoXspp3tlZjripQg6rWt6rCA7KCE66y47J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiN1wiLFxyXG4gICAgbmFtZTogXCLsoJXrs7TsspjrpqzquLDsgqxcIixcclxuICAgIGRhdGU6IDIwMjEsXHJcbiAgICBzdW1tYXJ5OiBcIklU6rSA66CoIOyGjOyWkeydhCDsnoXspp3tlZjripQg6rWt6rCA6riw7Iig7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiOFwiLFxyXG4gICAgbmFtZTogXCLtlZnsoJDsnYDtlonsoJwg6rK97JiB7ZWZ7IKsXCIsXHJcbiAgICBkYXRlOiAyMDIxLFxyXG4gICAgc3VtbWFyeTogXCIyMDIx64WEIDbsm5Qg7KG47JeF7JiI7KCVXCIsXHJcbiAgICBzY29yZTogXCLtlZnsgqxcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTmFtZVwiLFxyXG4gICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgIGtleTogXCJuYW1lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJEYXRlXCIsXHJcbiAgICBkYXRhSW5kZXg6IFwiZGF0ZVwiLFxyXG4gICAga2V5OiBcImRhdGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlN1bW1hcnlcIixcclxuICAgIGRhdGFJbmRleDogXCJzdW1tYXJ5XCIsXHJcbiAgICBrZXk6IFwic3VtbWFyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2NvcmVcIixcclxuICAgIGRhdGFJbmRleDogXCJzY29yZVwiLFxyXG4gICAga2V5OiBcInNjb3JlXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vUG9ydGZvbGlvXHJcblxyXG5leHBvcnQgY29uc3QgcG9ydGZvbGlvcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiTXkgU2VvdWwgR3VpZGVcIixcclxuICAgIGRhdGU6IFwiMjAyMS80fiAyMDIxLzVcIixcclxuICAgIHRhZ3M6IFtcIiNUeXBlU2NyaXB0XCIsIFwiI1JlYWN0XCIsIFwiI0Vtb3Rpb25cIiwgXCIjR3JhcGhRTFwiXSxcclxuICAgIHNyYzogXCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS83NDg2NDkyNS8xMjAxMjEzMTUtYjQzMTYwMDAtYzFkZC0xMWViLTlmOWItMDhjNDUyMjljN2U4LnBuZ1wiLFxyXG4gICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwL015LVNlb3VsLUd1aWRlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwiTm9haCB3b3JsZCBCbG9nXCIsXHJcbiAgICBkYXRlOiBcIjIwMjEvMn4gMjAyMS80XCIsXHJcbiAgICB0YWdzOiBbXCIjVHlwZVNjcmlwdFwiLCBcIiNSZWFjdFwiLCBcIiNOZXh0LmpzXCIsIFwiI015c3FsXCIsIFwiI0FXU1wiXSxcclxuICAgIHNyYzogXCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS83NDg2NDkyNS8xMjAxMjEzMTYtYjU2MjhkMDAtYzFkZC0xMWViLTg3ZjItZGEwOTk5NTZjNzI1LnBuZ1wiLFxyXG4gICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ub2FoMDcxNjEwL05leHRfTm9haFdvcmxkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6IFwiTW92aWUgQXBwIChDbG9uZSBDb2RpbmcpXCIsXHJcbiAgICBkYXRlOiBcIjIwMjAvMTJ+IDIwMjEvMVwiLFxyXG4gICAgdGFnczogW1wiI0phdmFzY3JpcHRcIiwgXCIjUmVhY3RcIiwgXCIjTm9kZS5qc1wiLCBcIiNNb25nb0RCXCJdLFxyXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpb19tb3ZpZS5qcGdcIixcclxuICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vbm9haDA3MTYxMC9SZWFjdF9Nb3ZpZS1BcHBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgIGRhdGU6IFwiMjAyMS8xfiAyMDIxLzJcIixcclxuICAgIHRhZ3M6IFtcIiNIVE1MXCIsIFwiI0NTU1wiLCBcIiNKYXZhc2NyaXB0XCIsIFwiI1JlYWN0XCIsIFwiI0F0bmRcIl0sXHJcbiAgICBzcmM6IFwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzQ4NjQ5MjUvMTIwMTIxNzA0LWVhNmZkZjAwLWMxZGYtMTFlYi05MmY1LTVmNzRlODFlMjQ5ZC5wbmdcIixcclxuICB9LFxyXG5dO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBMT0FEX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSRURfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi8uLi9Ac3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL0Jsb2cvQ29tbWVudHMvQ29tbWVudEZvcm1cIikpO1xyXG5jb25zdCBBcnRpY2xlUG9zdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0XCIpKTtcclxuY29uc3QgUmVtb3RlQ29udHJvbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2xcIikpO1xyXG5cclxuY29uc3QgSGVhcnQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtSRURfQ09MT1J9O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0QmVhdCAxcztcclxuICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYXJ0TGlrZWQgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke1JFRF9DT0xPUn07XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR7UkVEX0NPTE9SfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFBvc3REZXNjID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RTdWJUaXRsZSA9IGNzc2BcclxuICBtYXJnaW46IDVyZW0gMCAxcmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBNb3JlUG9zdFdyYXBwZXIgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBCbG9nUG9zdFBhZ2UgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgcG9zdCxcclxuICAgIHVubGlrZVBvc3REb25lLFxyXG4gICAgbGlrZVBvc3REb25lLFxyXG4gICAgYWRkQ29tbWVudERvbmUsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZSxcclxuICAgIHJlbW92ZVN1YkNvbW1lbnREb25lLFxyXG4gICAgcHJldlBvc3QsXHJcbiAgICBuZXh0UG9zdCxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtGdWxsY29udGVudCwgc2V0RnVsbGNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciAmJiBwb3N0Py5Qb3N0TGlrZXJzPy5maW5kKCh2KSA9PiB2LmlkID09PSB1c2VyLmlkKSkge1xyXG4gICAgICBzZXRMaWtlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpa2VkKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lLCBwb3N0Py5Qb3N0TGlrZXJzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgVXNlcklkOiB1c2VyPy5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQ29udGVudCA9IHBvc3Q/LmNvbnRlbnQ/LnNwbGl0KC8oI1teXFxzIytePF0rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjLipcIikvZykpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodi5tYXRjaCgvKCN5b3V0dWJlOikvZykpIHtcclxuICAgICAgICByZXR1cm4gYDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3Yuc2xpY2UoXHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKX1cIj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzIytePF0rKS9nKSkge1xyXG4gICAgICAgIHJldHVybiBgPGEgY2xhc3M9XCJoYXNodGFnXCI+JHt2fTwvYT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmdWxsQ29udGVudFJlbW92ZUNvbW1hID0gcG9zdCAmJiB0YWdDb250ZW50Py5qb2luKFwiXCIpO1xyXG4gICAgZnVsbENvbnRlbnRSZW1vdmVDb21tYSAmJiBzZXRGdWxsY29udGVudChmdWxsQ29udGVudFJlbW92ZUNvbW1hKTtcclxuICB9LCBbcG9zdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgaWYgKCFwb3N0SWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgcG9zdElkOiByb3V0ZXIucXVlcnkuaWQsIFVzZXJJZDogdXNlcj8uaWQsIGNhdGVnb3J5OiByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthZGRDb21tZW50RG9uZSwgdW5saWtlUG9zdERvbmUsIGxpa2VQb3N0RG9uZSwgcmVtb3ZlQ29tbWVudERvbmUsIHJlbW92ZVN1YkNvbW1lbnREb25lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiQWRkZWQgY29tbWVudCDwn6WwXCIpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiWW91IGNhbiB0aHVtYnMgdXAgd2hlbiB5b3UgYXJlIGxvZ2dlZCBpbiDwn5i/XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFBvc3RJZDogcG9zdD8uaWQsIFVzZXJJZDogdXNlci5pZCB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3Q/LmlkLCB1c2VyPy5pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vYWggd29ybGQgfCB7cG9zdD8udGl0bGUuc2xpY2UoMCwgMTApfS4uLjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiMS41XCIgfX0gY2xhc3NOYW1lPVwicG9zdF9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJibG9nX3Bvc3RfZGl2aWVyXCIgLz5cclxuICAgICAgPHVsIGNzcz17UG9zdERlc2N9PlxyXG4gICAgICAgIDxsaT57ZGF5anMocG9zdD8uY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgICAgPGxpPsK3Jm5ic3A7e3Bvc3Q/LmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgIDxsaT7CtyZuYnNwO3twb3N0Py5Qb3N0TGlrZXJzPy5sZW5ndGh9IGxpa2VzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjc3M9e1Bvc3RXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfcG9zdF9hcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1aS1lZGl0b3ItY29udGVudHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PXtwb3N0Py50aXRsZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCI2cmVtXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogcG9zdD8uaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gcG9zdD8uaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge0Z1bGxjb250ZW50ICYmIHBhcnNlKEZ1bGxjb250ZW50KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNzcz17UG9zdFN1YlRpdGxlfT5cclxuICAgICAgICAgICAgRG8geW91IGxpa2UgdGhpcyBQb3N0P3tcIiBcIn1cclxuICAgICAgICAgICAge2xpa2VkID8gKFxyXG4gICAgICAgICAgICAgIDxIZWFydExpa2VkIG9uQ2xpY2s9e29uQ2xpY2tVbmxpa2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+XHJcbiAgICAgICAgICAgICAgPC9IZWFydExpa2VkPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydCBvbkNsaWNrPXtvbkNsaWNrTGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT57cG9zdD8uUG9zdExpa2Vycz8ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgIDxoNCBjc3M9e1Bvc3RTdWJUaXRsZX0+TW9yZSBwb3N0czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17TW9yZVBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ByZXZQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge25leHRQb3N0Py5tYXAoKGFydGljbGUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QXJ0aWNsZVBvc3Qga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW1vdGVDb250cm9sIEZ1bGxjb250ZW50PXtGdWxsY29udGVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YTogeyBwb3N0SWQ6IGNvbnRleHQucGFyYW1zLmlkLCBjYXRlZ29yeTogY29udGV4dC5xdWVyeS5jYXRlZ29yeSB9LFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBJU3RvcmUpLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmxvZ1Bvc3RQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbW9kYWwvTW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXJlYWN0LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxzcHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=