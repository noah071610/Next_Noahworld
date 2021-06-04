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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
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

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "2lGT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return marginCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return paddingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return noSearchPostCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SM_Header_Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SM_Header_Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SM_Header_SeachForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SM_Header_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TitleProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoPostProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProfilePointTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComment; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("obyI");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const marginCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:", top, " ", right, " ", bottom, " ", left, ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const paddingCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:", top, " ", right, " ", bottom, " ", left, ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const noSearchPostCSS = true ? {
  name: "1q40upl",
  styles: "width:100%;padding:1rem 0;border-bottom:1px solid rgba(0, 0, 0, 0.07);position:relative;display:flex;flex-direction:column;align-items:center;img{width:80px;opacity:0.3;}h3{text-align:center;}"
} : undefined;
const SM_Header_Input = onSearch =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSearch ? "transform: translateY(0); transition: all 0.3s; margin-bottom: 1rem" : "transform: translateY(-200%); transition: all 0.3s; position: absolute; left: 0 ", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_Menu = onMenu =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onMenu ? "background-color: white; border: 1px solid rgba(0, 0, 0, 0.1); border-bottom: none; overflow: inherit;" : "border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden;", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_SeachForm = onSlide =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSlide ? "display: block; overflow: hidden" : "display:none", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_Title = onTitle =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onTitle ? "transform: translateY(-100%); transition: all 0.5s; width: 70%;" : "transform: translateY(0); transition: all 0.5s;", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const TitleProfile = true ? {
  name: "1dyrmug",
  styles: "white-space:nowrap;display:inline-block;margin-left:0.5rem;width:100%;overflow:hidden;text-overflow:ellipsis"
} : undefined;
const NoPostProfile = true ? {
  name: "bmscbf",
  styles: "display:flex;align-items:center;flex-direction:column;opacity:0.3;img{width:100px;}"
} : undefined;
const ProfilePointTitle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _config__WEBPACK_IMPORTED_MODULE_1__[/* BLUE_COLOR */ "c"], ";margin-left:0.3rem;" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const DeleteComment = removeModal =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("visibility:", removeModal ? "initial" : "hidden", ";animation:", removeModal ? "0.5s fadeIn" : "none", ";h2{text-align:center;color:white;}div{display:flex;justify-content:center;}" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "3WeD":
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

/***/ "3wub":
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6Cl6":
/***/ (function(module, exports) {



/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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

/***/ "6n5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mL3h");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);





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
    onCancel: handleCancel
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "This fucntion is for ADMIN only. If you are not a administrator, please go back and feedback to us. Thank you for your cooperatation."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "\uC774 \uAE30\uB2A5\uC740 \uAD00\uB9AC\uC790 \uC804\uC6A9\uC785\uB2C8\uB2E4. \uC608\uAE30\uCE58 \uBABB\uD558\uAC8C \uC624\uC168\uC744\uACBD\uC6B0 \uD53C\uB4DC\uBC31 \uC8FC\uC2DC\uBA74 \uC815\uB9D0 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD611\uB825\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "\u3053\u306E\u6A5F\u80FD\u306F\u7BA1\u7406\u8005\u5C02\u7528\u3067\u3054\u3056\u3044\u307E\u3059\u3001\u4F55\u304C\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u76F4\u63A5\u3054\u9023\u7D61\u3057\u3066\u9802\u3051\u308C\u3070\u5E78\u3044\u3060\u3068\u601D\u3044\u307E\u3059\u3002"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: password,
    onChange: onChangePassword
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AdminModal);

/***/ }),

/***/ "9RMS":
/***/ (function(module, exports) {



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

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "Kps4":
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "LEOp":
/***/ (function(module, exports) {



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

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
  if (false) {}

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OdrH":
/***/ (function(module, exports) {



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

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
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
  if (false) {}

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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__("+UYx");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__("6Cl6");

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__("d+3G");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/github.css
var github = __webpack_require__("LEOp");

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.css
var codemirror = __webpack_require__("p77/");

// EXTERNAL MODULE: ./node_modules/@toast-ui/editor/dist/toastui-editor.css
var toastui_editor = __webpack_require__("9RMS");

// EXTERNAL MODULE: ./styles/style.scss
var style = __webpack_require__("OdrH");

// EXTERNAL MODULE: ./@store/configureStore.ts + 6 modules
var configureStore = __webpack_require__("B9PA");

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./@reducers/user.ts
var _reducers_user = __webpack_require__("N61D");

// EXTERNAL MODULE: ./util/useInput.ts
var useInput = __webpack_require__("zpkv");

// CONCATENATED MODULE: ./components/Blog/Profile/InfoModal.tsx







const InfoModal = /*#__PURE__*/Object(external_react_["memo"])(({
  setIsModalVisible,
  setChangePassword,
  setChangeNickname,
  isModalVisible,
  changePassword,
  changeNickname
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
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
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const router = Object(client_router["useRouter"])();
  const userName = user === null || user === void 0 ? void 0 : user.name;
  const [password, onChangePassword] = Object(useInput["a" /* default */])("");
  const [newPassword, onChangeNewPassword] = Object(useInput["a" /* default */])("");
  const [newName, onChangeNewName] = Object(useInput["a" /* default */])(userName);
  Object(external_react_["useEffect"])(() => {
    if (user !== null && user !== void 0 && user.googleId) {
      dispatch({
        type: _reducers_user["p" /* CONFIRM_PASSWORD_SUCCESS */]
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [user]);
  Object(external_react_["useEffect"])(() => {
    if (changePasswordDone) {
      external_antd_["message"].success("Change your password well!");
      router.push("/");
      setIsModalVisible(false);
      setChangePassword(false);
      return;
    }

    if (changeNameDone) {
      external_antd_["message"].success("Change your nickname well!");
      setIsModalVisible(false);
      setChangeNickname(false);
      return;
    }

    if (withdrawalDone) {
      setIsModalVisible(false);
      external_antd_["message"].success("Withdrawed. Thank you for using ! see you next time.");
      router.push("/");
      return;
    }

    if (changePasswordError || changeNameError || withdrawalError) {
      external_antd_["message"].error("Unexpected Error! please try again or feedback to us");
      setChangePassword(false);
      setChangeNickname(false);
      return;
    }

    if (confirmPasswordError) {
      external_antd_["message"].error("Wrong Password! please try again or feedback to us");
      return;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [changePasswordDone, changePasswordError, confirmPasswordError, withdrawalDone, withdrawalError, changeNameDone, changeNameError]);
  const handleOk = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["o" /* CONFIRM_PASSWORD_REQUEST */],
      data: {
        password,
        user
      }
    });
  }, [password, user]);
  const handleCancel = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(false);
    setChangePassword(false);
    setChangeNickname(false);
  }, []);
  const onSubmitChangePassword = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["k" /* CHANGE_PASSWORD_REQUEST */],
      data: {
        newPassword,
        user
      }
    });
    dispatch({
      type: _reducers_user["D" /* LOG_OUT_REQUEST */]
    });
  }, [newPassword, user]);
  const onsubmitChangeName = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["g" /* CHANGE_NAME_REQUEST */],
      data: {
        newName,
        UserId: user === null || user === void 0 ? void 0 : user.id
      }
    });
  }, [newName, user]);
  const onSubmitWithdrawal = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["P" /* WITHDRWAL_REQUEST */],
      data: user === null || user === void 0 ? void 0 : user.id
    });
    dispatch({
      type: _reducers_user["D" /* LOG_OUT_REQUEST */]
    });
  }, [user]);
  return Object(react_["jsx"])(external_antd_["Modal"], {
    title: "User Infomation",
    visible: isModalVisible,
    onOk: confirmPassword ? changePassword ? onSubmitChangePassword : changeNickname ? onsubmitChangeName : onSubmitWithdrawal : handleOk,
    onCancel: handleCancel
  }, confirmPassword ? changePassword ? Object(react_["jsx"])(external_antd_["Form"], {
    name: "nest-messages",
    initialValues: {
      remember: false
    }
  }, Object(react_["jsx"])("p", null, "Please write your new password."), Object(react_["jsx"])("br", null), Object(react_["jsx"])(external_antd_["Form"].Item, {
    name: "Password",
    rules: [{
      required: true
    }]
  }, Object(react_["jsx"])(external_antd_["Input"].Password, {
    value: newPassword,
    onChange: onChangeNewPassword
  })), Object(react_["jsx"])(external_antd_["Form"].Item, {
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

    })]
  }, Object(react_["jsx"])(external_antd_["Input"].Password, null))) : changeNickname ? Object(react_["jsx"])(external_antd_["Form"], {
    name: "nest-messages"
  }, Object(react_["jsx"])("p", null, "Please write your new nickname."), Object(react_["jsx"])("br", null), Object(react_["jsx"])(external_antd_["Form"].Item, {
    name: "name",
    rules: [{
      required: true
    }]
  }, Object(react_["jsx"])(external_antd_["Input"], {
    value: newName,
    onChange: onChangeNewName
  }))) : Object(react_["jsx"])("h2", null, "Would you really like to withdraw? \uD83D\uDE3F") : Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("p", null, "Confirm your password."), Object(react_["jsx"])("br", null), Object(react_["jsx"])(external_antd_["Input"].Password, {
    value: password,
    onChange: onChangePassword
  })));
});
/* harmony default export */ var Profile_InfoModal = (/*#__PURE__*/Object(external_react_["memo"])(InfoModal));
// CONCATENATED MODULE: ./components/Footer.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */







const FooterDivider = /*#__PURE__*/base_default()(external_antd_["Divider"], true ? {
  target: "e1lffojk0"
} : undefined)(true ? {
  name: "lte6q6",
  styles: "background-color:white;margin:0 1rem"
} : undefined);

const Footer = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: changePassword,
    1: setChangePassword
  } = Object(external_react_["useState"])(false);
  const {
    0: changeNickname,
    1: setChangeNickname
  } = Object(external_react_["useState"])(false);
  const showModal = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(true);
  }, []);
  const onClickList = Object(external_react_["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  const onClickNicknameBtn = Object(external_react_["useCallback"])(() => {
    if (!user) {
      external_antd_["message"].error("Only for user who signed in.");
      return;
    }

    showModal();
    setChangeNickname(true);
  }, []);

  const social_content = Object(react_["jsx"])("ul", {
    className: "blog_footer_content"
  }, Object(react_["jsx"])("a", {
    href: "https://github.com/noah071610",
    target: "_blank",
    rel: "noreferrer"
  }, Object(react_["jsx"])("li", null, "- Git")), Object(react_["jsx"])("a", {
    href: "https://www.instagram.com/salmonchobab/",
    target: "_blank",
    rel: "noreferrer"
  }, Object(react_["jsx"])("li", null, "- Instagram")));

  const info_content = Object(react_["jsx"])("ul", {
    className: "blog_footer_content"
  }, Object(react_["jsx"])("a", {
    onClick: () => {
      if (!user) {
        external_antd_["message"].error("Only for user who signed in.");
        return;
      }

      showModal();
      setChangePassword(false);
    }
  }, Object(react_["jsx"])("li", null, "- Withdrawal")), Object(react_["jsx"])("a", {
    onClick: () => {
      if (!user) {
        external_antd_["message"].error("Only for user who signed in.");
        return;
      }

      if (user.googleId) {
        external_antd_["message"].error("Only for user who signed up with home-page directly.");
        return;
      }

      showModal();
      setChangePassword(true);
    }
  }, Object(react_["jsx"])("li", null, "- Change Password")), Object(react_["jsx"])("a", {
    onClick: onClickNicknameBtn
  }, Object(react_["jsx"])("li", null, "- Change Nickname")));

  const quickview_content = Object(react_["jsx"])("ul", {
    className: "blog_footer_content"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])("li", {
    onClick: onClickList
  }, "- Home"))), Object(react_["jsx"])(link_default.a, {
    href: "/tech"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])("li", {
    onClick: onClickList
  }, "- Info Tech"))), Object(react_["jsx"])(link_default.a, {
    href: "/daily"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])("li", {
    onClick: onClickList
  }, "- Daily"))), Object(react_["jsx"])(link_default.a, {
    href: "/class"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])("li", {
    onClick: onClickList
  }, "- Korean Class"))));

  return Object(react_["jsx"])("footer", {
    className: "blog_footer"
  }, Object(react_["jsx"])("div", {
    className: "blog_footer_wrapper"
  }, Object(react_["jsx"])("div", null, "\u24D2 2021, Jang Hyun Soo. All Rights Resrved."), Object(react_["jsx"])("ul", {
    className: "blog_footer_list"
  }, Object(react_["jsx"])("li", {
    onClick: onClickList
  }, Object(react_["jsx"])(link_default.a, {
    href: "/portfolio"
  }, Object(react_["jsx"])("a", null, "Portfolio"))), Object(react_["jsx"])(FooterDivider, {
    type: "vertical"
  }), Object(react_["jsx"])(external_antd_["Popover"], {
    content: quickview_content
  }, Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", null, "Quick view"))), Object(react_["jsx"])(FooterDivider, {
    type: "vertical"
  }), Object(react_["jsx"])(external_antd_["Popover"], {
    content: social_content
  }, Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", null, "Social Media"))), Object(react_["jsx"])(FooterDivider, {
    type: "vertical"
  }), Object(react_["jsx"])(external_antd_["Popover"], {
    placement: "topRight",
    content: info_content
  }, Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", null, "Infomation"))))), Object(react_["jsx"])(Profile_InfoModal, {
    setIsModalVisible: setIsModalVisible,
    setChangePassword: setChangePassword,
    setChangeNickname: setChangeNickname,
    isModalVisible: isModalVisible,
    changePassword: changePassword,
    changeNickname: changeNickname
  }));
});
/* harmony default export */ var components_Footer = (/*#__PURE__*/Object(external_react_["memo"])(Footer));
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./@reducers/blog.ts
var blog = __webpack_require__("ZX5X");

// CONCATENATED MODULE: ./components/Blog/Headers/BlogHeader.tsx


function BlogHeader_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const SearchInput = /*#__PURE__*/base_default()(external_antd_["Input"].Search, true ? {
  target: "e1u3yexk0"
} : undefined)(true ? {
  name: "u3u729",
  styles: "width:30%;z-index:auto;overflow:hidden"
} : undefined);

const BlogHeader = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(client_router["useRouter"])();
  const [keyword, onChangeKeyword, setKeyword] = Object(useInput["a" /* default */])("");
  const onSearchContent = Object(external_react_["useCallback"])(() => {
    if (keyword.length < 2) {
      external_antd_["message"].error("Keyword is required to have more then 1 letter");
      return;
    }

    dispatch({
      type: blog["q" /* SEARCH_KEYWORD_REQUEST */],
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
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("ul", {
    className: "blog_header_ul"
  }, Object(react_["jsx"])("li", {
    className: "blog_header_li"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", null, "Home"))), Object(react_["jsx"])("li", {
    className: "blog_header_li"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/tech"
  }, Object(react_["jsx"])("a", null, "Info Tech"))), Object(react_["jsx"])("li", {
    className: "blog_header_li"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/daily"
  }, Object(react_["jsx"])("a", null, "Daily"))), Object(react_["jsx"])("li", {
    className: "blog_header_li"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/class"
  }, Object(react_["jsx"])("a", null, "Korean Class for \xA0", Object(react_["jsx"])("img", {
    style: {
      width: "1.2rem"
    },
    alt: "japan_flag",
    src: "https://img.icons8.com/color/48/000000/japan.png"
  })))), Object(react_["jsx"])("li", {
    className: "blog_header_li"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/portfolio"
  }, Object(react_["jsx"])("a", null, "Portfolio \u2B50")))), Object(react_["jsx"])(SearchInput, {
    value: keyword,
    onChange: onChangeKeyword,
    onSearch: onSearchContent
  }));
});
/* harmony default export */ var Headers_BlogHeader = (/*#__PURE__*/Object(external_react_["memo"])(BlogHeader));
// EXTERNAL MODULE: ./@reducers/post.ts
var _reducers_post = __webpack_require__("SDl8");

// EXTERNAL MODULE: ./util/useToggle.ts
var useToggle = __webpack_require__("pGAn");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Blog/Admin/AdminModal.tsx
var AdminModal = __webpack_require__("6n5A");

// EXTERNAL MODULE: ./styles/emotion.ts
var emotion = __webpack_require__("2lGT");

// CONCATENATED MODULE: ./components/Blog/Headers/SmallHeaders/SlideMenu.tsx
function SlideMenu_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











const SlideMenuWrapper = true ? {
  name: "1lzhkj8",
  styles: "display:flex;margin-top:1rem;ul:first-of-type{margin:0;width:50%;padding-right:1rem;}ul:last-child{margin:0;width:50%;padding-left:1rem;border-left:1px solid rgba(0, 0, 0, 0.1);}a{display:block;padding:1rem 0;&:hover{color:black;}}.image_list{display:flex;align-items:center;}"
} : undefined;
const SlideMenu = /*#__PURE__*/Object(external_react_["memo"])(({
  onClickSearchForm,
  user
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onClickMenu = Object(external_react_["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
    dispatch({
      type: blog["h" /* ON_SLIDE_MENU */]
    });
  }, []);
  const onClickLogOut = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["D" /* LOG_OUT_REQUEST */]
    });
    dispatch({
      type: blog["h" /* ON_SLIDE_MENU */]
    });
  }, [dispatch]);
  return Object(react_["jsx"])("div", {
    css: SlideMenuWrapper
  }, Object(react_["jsx"])("ul", null, Object(react_["jsx"])("h2", {
    css: Object(emotion["i" /* marginCSS */])(0, 0, "1rem", 0)
  }, "Blog"), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", null, "- Home"))), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])(link_default.a, {
    href: "/tech"
  }, Object(react_["jsx"])("a", null, "- Info Tech"))), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])(link_default.a, {
    href: "/daily"
  }, Object(react_["jsx"])("a", null, "- Daily"))), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])(link_default.a, {
    href: "/class"
  }, Object(react_["jsx"])("a", {
    className: "image_list"
  }, Object(react_["jsx"])("span", null, "- Korean Class for \xA0"), Object(react_["jsx"])("img", {
    style: {
      width: "1.5rem"
    },
    alt: "japan_flag",
    src: "https://img.icons8.com/color/48/000000/japan.png"
  })))), Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", {
    onClick: onClickSearchForm
  }, " ", "- Search ", Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.5rem"
    },
    icon: free_solid_svg_icons_["faSearch"]
  })))), Object(react_["jsx"])("ul", null, Object(react_["jsx"])("h2", {
    css: Object(emotion["i" /* marginCSS */])(0, 0, "1rem", 0)
  }, "Direct Link"), Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", {
    href: "https://github.com/noah071610",
    target: "_blank",
    rel: "noreferrer"
  }, "- Git")), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])(link_default.a, {
    href: "/portfolio"
  }, Object(react_["jsx"])("a", null, "- Portfolio \u2B50"))), Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", {
    href: "https://www.instagram.com/salmonchobab/",
    target: "_blank",
    rel: "noreferrer"
  }, "- Instagram")), Object(react_["jsx"])("li", {
    onClick: onClickMenu
  }, Object(react_["jsx"])("a", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    href: "https://api.noahworld.site/auth/google"
  }, "- Google Login", " ", Object(react_["jsx"])("img", {
    style: {
      width: "0.9rem",
      marginLeft: "0.4rem"
    },
    alt: "google_icon",
    src: "https://img.icons8.com/fluent/48/000000/google-logo.png"
  }))), user ? Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", {
    onClick: onClickLogOut
  }, "- Log out ", Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: free_solid_svg_icons_["faSignOutAlt"]
  }))) : Object(react_["jsx"])("li", null, Object(react_["jsx"])(link_default.a, {
    href: "/login"
  }, Object(react_["jsx"])("a", {
    onClick: onClickMenu
  }, "- Log In & Sign Up", " ", Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: free_solid_svg_icons_["faSignInAlt"]
  }))))));
});
/* harmony default export */ var SmallHeaders_SlideMenu = (/*#__PURE__*/Object(external_react_["memo"])(SlideMenu));
// CONCATENATED MODULE: ./components/Blog/Headers/SmallHeaders/SlideRemote.tsx
function SlideRemote_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












const marginZero = true ? {
  name: "ti75j2",
  styles: "margin:0"
} : undefined;
const SlideRemote = /*#__PURE__*/Object(external_react_["memo"])(({
  showModal,
  post,
  prevPost,
  nextPost,
  user
}) => {
  var _nextPost$, _prevPost$;

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(client_router["useRouter"])();
  const onClickLink = Object(external_react_["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return Object(react_["jsx"])("ul", {
    className: "slide_title"
  }, Object(react_["jsx"])("li", {
    css: marginZero
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])(icons_["HomeFilled"], null)))), Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    css: marginZero
  }, Object(react_["jsx"])(link_default.a, {
    href: `/${(post === null || post === void 0 ? void 0 : post.category) === "culture" ? "class" : post === null || post === void 0 ? void 0 : post.category}`
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])(icons_["RollbackOutlined"], null)))), Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    onClick: onClickLink,
    css: marginZero
  }, nextPost.length > 0 ? Object(react_["jsx"])(link_default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${(_nextPost$ = nextPost[0]) === null || _nextPost$ === void 0 ? void 0 : _nextPost$.id}`
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])(icons_["DoubleLeftOutlined"], null))) : Object(react_["jsx"])(icons_["DoubleLeftOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    }
  })), Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    onClick: onClickLink,
    css: marginZero
  }, prevPost.length > 0 ? Object(react_["jsx"])(link_default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${(_prevPost$ = prevPost[0]) === null || _prevPost$ === void 0 ? void 0 : _prevPost$.id}`
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])(icons_["DoubleRightOutlined"], null))) : Object(react_["jsx"])(icons_["DoubleRightOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    }
  })), Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    css: marginZero
  }, Object(react_["jsx"])("a", {
    onClick: onClickLink
  }, Object(react_["jsx"])(icons_["VerticalAlignTopOutlined"], null))), (user === null || user === void 0 ? void 0 : user.admin) && Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    css: marginZero
  }, Object(react_["jsx"])("a", {
    onClick: () => {
      dispatch({
        type: blog["j" /* POST_EDIT_ON */]
      });
      router.push("/admin");
    }
  }, Object(react_["jsx"])(icons_["EditFilled"], null))), Object(react_["jsx"])(external_antd_["Divider"], {
    type: "vertical"
  }), Object(react_["jsx"])("li", {
    css: marginZero
  }, Object(react_["jsx"])("a", {
    onClick: showModal
  }, Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTrash"]
  })))));
});
/* harmony default export */ var SmallHeaders_SlideRemote = (/*#__PURE__*/Object(external_react_["memo"])(SlideRemote));
// CONCATENATED MODULE: ./components/Blog/Headers/SmallHeaders/BlogSmallHeader.tsx


function BlogSmallHeader_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */


















const PostTitle = base_default()("h4", true ? {
  target: "egx4thb0"
} : undefined)(true ? {
  name: "61mznw",
  styles: "display:-webkit-box;word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis"
} : undefined);

const HeaderLogo = true ? {
  name: "1mppn5u",
  styles: "display:flex;align-items:center;height:70px;.logo_span{color:black;margin-left:0.5rem;font-weight:bold;font-size:1.3rem;}"
} : undefined;
const TitleArrow = true ? {
  name: "alh9i9",
  styles: "display:flex;align-items:center;width:100%;height:70px"
} : undefined;
const BlogSmallHeader = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    onSlideMenu
  } = Object(external_react_redux_["useSelector"])(state => state.blog);
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    post,
    removePostDone,
    prevPost,
    nextPost
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const [password, onChangePassword] = Object(useInput["a" /* default */])("");
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(external_react_["useState"])(false);
  const [keyword, onChangeKeyword, setKeyword] = Object(useInput["a" /* default */])("");
  const [onSearchForm, onClickSearchForm] = Object(useToggle["a" /* default */])(false);
  const [onSlideArrow, onClickonSlideArrow, setonSlideArrow] = Object(useToggle["a" /* default */])(false);
  const {
    0: headerTitle,
    1: setHeaderTitle
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
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
  const onSearchContent = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: blog["q" /* SEARCH_KEYWORD_REQUEST */],
      data: {
        keyword
      }
    });

    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      dispatch({
        type: blog["h" /* ON_SLIDE_MENU */]
      });
      return;
    }

    router.push(`/search/${keyword}`);
    setKeyword("");
    dispatch({
      type: blog["h" /* ON_SLIDE_MENU */]
    });
  }, [dispatch, router, keyword, setKeyword]);
  const showModal = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(true);
  }, []);
  const handleOk = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(false);
    dispatch({
      type: _reducers_post["bb" /* REMOVE_POST_REQUEST */],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        password,
        tags: post === null || post === void 0 ? void 0 : post.Hashtags
      }
    });
  }, [dispatch, password, post === null || post === void 0 ? void 0 : post.Hashtags, post === null || post === void 0 ? void 0 : post.id]);
  const handleCancel = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(false);
  }, []);
  const onClickSlide = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: blog["h" /* ON_SLIDE_MENU */]
    });
    setonSlideArrow(false);
  }, [dispatch, setonSlideArrow]);
  Object(external_react_["useEffect"])(() => {
    if (removePostDone) {
      external_antd_["message"].success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);
  return Object(react_["jsx"])("nav", {
    className: "blog_header_small"
  }, Object(react_["jsx"])("div", {
    css: Object(emotion["e" /* SM_Header_Menu */])(onSlideMenu || onSlideArrow),
    className: "blog_header_small_nav"
  }, Object(react_["jsx"])("div", {
    css: Object(emotion["g" /* SM_Header_Title */])(headerTitle)
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", {
    css: HeaderLogo
  }, Object(react_["jsx"])("img", {
    alt: "menu_logo",
    style: {
      width: "1.9rem"
    },
    src: "/images/blog/logo_icon.png"
  }), Object(react_["jsx"])("span", {
    className: "logo_span"
  }, "Noah World"))), Object(react_["jsx"])("a", {
    onClick: onClickonSlideArrow,
    css: TitleArrow
  }, Object(react_["jsx"])(PostTitle, null, post === null || post === void 0 ? void 0 : post.title), Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "1rem",
      transition: "all 0.3s",
      transform: `rotate(${onSlideArrow ? "180deg" : "0deg"})`
    },
    icon: free_solid_svg_icons_["faChevronDown"]
  }))), Object(react_["jsx"])("a", {
    onClick: onClickSlide,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, onSlideMenu ? Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      fontSize: "1.5rem"
    },
    icon: free_solid_svg_icons_["faTimes"]
  }) : Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      fontSize: "1.5rem"
    },
    icon: free_solid_svg_icons_["faBars"]
  })), onSlideArrow && headerTitle && Object(react_["jsx"])(SmallHeaders_SlideRemote, {
    showModal: showModal,
    post: post,
    prevPost: prevPost,
    nextPost: nextPost,
    user: user
  }), Object(react_["jsx"])("div", {
    css: Object(emotion["f" /* SM_Header_SeachForm */])(onSlideMenu),
    className: "slide_menu"
  }, Object(react_["jsx"])(external_antd_["Input"].Search, {
    css: Object(emotion["d" /* SM_Header_Input */])(onSearchForm),
    value: keyword,
    onChange: onChangeKeyword,
    onSearch: onSearchContent
  }), Object(react_["jsx"])(SmallHeaders_SlideMenu, {
    onClickSearchForm: onClickSearchForm,
    user: user
  }))), Object(react_["jsx"])(AdminModal["a" /* default */], {
    isModalVisible: isModalVisible,
    handleOk: handleOk,
    handleCancel: handleCancel,
    password: password,
    onChangePassword: onChangePassword
  }));
});
/* harmony default export */ var SmallHeaders_BlogSmallHeader = (/*#__PURE__*/Object(external_react_["memo"])(BlogSmallHeader));
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// CONCATENATED MODULE: ./components/Blog/Headers/PortfolioHeader.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */






const PortfolioHeader = /*#__PURE__*/Object(external_react_["memo"])(({
  navContents
}) => {
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", {
    onClick: () => {
      window.scrollTo({
        top: 0
      });
    },
    className: "blog_header_li"
  }, Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginRight: "0.8rem"
    },
    icon: free_solid_svg_icons_["faHome"]
  }), "Blog")), Object(react_["jsx"])(external_react_scrollspy_default.a, {
    items: ["aboutme", "skills", "portfolio", "contact"],
    currentClassName: "is-current",
    className: "blog_header_ul",
    offset: 0
  }, navContents.map((v, i) => Object(react_["jsx"])("li", {
    key: i,
    className: "blog_header_li",
    style: {
      transition: "all 0.3s"
    }
  }, Object(react_["jsx"])("a", {
    href: `#${v.name}`
  }, Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    icon: v.icon
  }), Object(react_["jsx"])("span", {
    style: {
      marginLeft: "1rem"
    }
  }, v.explain))))));
});
// CONCATENATED MODULE: ./components/Header.tsx


function Header_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */














const LogoMain = base_default()("img", true ? {
  target: "e1h1448s0"
} : undefined)(true ? {
  name: "hpzzuv",
  styles: "&:hover{-webkit-animation:pulse 0.5s;animation:pulse 0.5s;}"
} : undefined);

const Header = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(client_router["useRouter"])();
  const {
    0: FixedNavbar,
    1: setFixedNavbar
  } = Object(external_react_["useState"])(false);
  const {
    header
  } = Object(external_react_redux_["useSelector"])(state => state.blog);
  const {
    user,
    logOutDone,
    logOutError
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const onClickLogOut = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: _reducers_user["D" /* LOG_OUT_REQUEST */]
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
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
  Object(external_react_["useEffect"])(() => {
    if (logOutDone) {
      external_antd_["message"].success("Log out is done, Thank you for visiting.");
      router.push("/");
    }

    if (logOutError) {
      external_antd_["message"].error("Unexpected Erorr! please try again or feedback to us");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [logOutDone, logOutError]);
  return Object(react_["jsx"])("header", {
    className: "header"
  }, Object(react_["jsx"])("div", {
    className: "space_small_on"
  }), Object(react_["jsx"])("div", {
    className: "header_logo"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/"
  }, Object(react_["jsx"])("a", null, Object(react_["jsx"])(LogoMain, {
    className: "logo",
    src: "/images/blog/logo_main.png"
  }))), user ? Object(react_["jsx"])("a", {
    className: "blog_header_logout",
    onClick: onClickLogOut
  }, "Log out ", Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: free_solid_svg_icons_["faSignOutAlt"]
  })) : Object(react_["jsx"])("div", {
    className: "blog_header_login"
  }, Object(react_["jsx"])(link_default.a, {
    href: "/login"
  }, Object(react_["jsx"])("a", {
    className: "btn_login"
  }, "Login & Sign Up", " ", Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    style: {
      marginLeft: "0.3rem"
    },
    icon: free_solid_svg_icons_["faSignInAlt"]
  }))), Object(react_["jsx"])("a", {
    href: "https://api.noahworld.site/auth/google",
    className: "btn_google"
  }, "Google Login", " ", Object(react_["jsx"])("img", {
    alt: "google_icon",
    src: "https://img.icons8.com/fluent/48/000000/google-logo.png"
  })))), Object(react_["jsx"])("nav", {
    className: FixedNavbar ? "blog_header_nav fixed" : "blog_header_nav static"
  }, header === "blog" ? Object(react_["jsx"])(Headers_BlogHeader, null) : Object(react_["jsx"])(PortfolioHeader, {
    navContents: config["l" /* navContents */]
  })), Object(react_["jsx"])(SmallHeaders_BlogSmallHeader, null), FixedNavbar ? Object(react_["jsx"])("div", {
    style: {
      height: "70px"
    }
  }) : null);
});
/* harmony default export */ var components_Header = (/*#__PURE__*/Object(external_react_["memo"])(Header));
// CONCATENATED MODULE: ./components/AppLayout.tsx







const scrollEffect = react_["keyframes"]`
to {
  opacity: 0.2;
}
`;

const Scroll = base_default()("div", true ? {
  target: "e1akl9kh0"
} : undefined)("opacity:0.5;position:fixed;bottom:0.5rem;right:2rem;font-size:2rem;z-index:2;cursor:pointer;animation:", scrollEffect, " 1s linear infinite alternate;@media only screen and (max-width: 430px){display:none;}" + (true ? "" : undefined));

const AppLayout = /*#__PURE__*/Object(external_react_["memo"])(({
  children
}) => {
  const scrollToTop = Object(external_react_["useCallback"])(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("div", {
    className: "pageWrapper"
  }, Object(react_["jsx"])("div", {
    className: "page"
  }, Object(react_["jsx"])(components_Header, null), children), Object(react_["jsx"])(Scroll, {
    className: "scroll"
  }, Object(react_["jsx"])(icons_["DoubleLeftOutlined"], {
    onClick: scrollToTop,
    rotate: 90
  }))), Object(react_["jsx"])(components_Footer, null));
});
/* harmony default export */ var components_AppLayout = (/*#__PURE__*/Object(external_react_["memo"])(AppLayout));
// CONCATENATED MODULE: ./pages/_app.tsx
function _app_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


















const _app_reset = true ? {
  name: "1c11g04",
  styles: ".ant-row{margin-right:0!important;margin-left:0!important;}.ant-table-pagination{display:none!important;}p{margin:0.5rem auto;}h1,h2,h3{margin-top:0.5rem;margin-bottom:0.5rem;font-weight:600;}h2{font-size:1.1rem;}a{color:black;text-decoration:none;}blockquote{border-color:#1187cf!important;}.ant-divider{background-color:rgba(0, 0, 0, 0.1);}.ant-divider-with-text{background-color:rgba(0, 0, 0, 0);&::before,&::after{border-top:1px solid rgba(0, 0, 0, 0.1)!important;}}"
} : undefined;
const loadingScreen = true ? {
  name: "1jn10y0",
  styles: "width:100%;height:100vh;display:flex;justify-content:center;align-items:center"
} : undefined;

function App({
  Component,
  pageProps
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.init();
  }, []);
  Object(external_react_["useEffect"])(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    client_router["Router"].events.on("routeChangeStart", start);
    client_router["Router"].events.on("routeChangeComplete", end);
    client_router["Router"].events.on("routeChangeError", end);
    return () => {
      client_router["Router"].events.off("routeChangeStart", start);
      client_router["Router"].events.off("routeChangeComplete", end);
      client_router["Router"].events.off("routeChangeError", end);
    };
  }, []);
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(head_default.a, null, Object(react_["jsx"])("title", null, "Noah world")), loading ? Object(react_["jsx"])("div", {
    css: loadingScreen
  }, Object(react_["jsx"])("div", {
    className: "bouncer"
  }, Object(react_["jsx"])("div", null), Object(react_["jsx"])("div", null), Object(react_["jsx"])("div", null), Object(react_["jsx"])("div", null))) : Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(react_["Global"], {
    styles: _app_reset
  }), Object(react_["jsx"])(components_AppLayout, null, Object(react_["jsx"])(Component, pageProps))));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (configureStore["a" /* default */].withRedux(App));

/***/ }),

/***/ "d+3G":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

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
      if (false) {}

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
          if (false) {}

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

      if (false) {} // shallow routing is only allowed for same page URL changes.


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
    if (false) {}

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

      if (false) {}

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

    if (false) {}

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

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
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

/***/ "mL3h":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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
  desc: "Hooks 문법, Router적용, Redux와 비동기를 위한 saga, thunk 또는 MobX 등등 여러 라이브러리를 응용하며 렌더링최소화 및 생명주기같은 React의 SPA 특성을 이해합니다.",
  level: true
}, {
  name: "Next.js",
  src: "https://docs.microsoft.com/ko-kr/windows/images/nextjs-logo.png",
  desc: "SEO의 효율성을 높아는 Next.js의 SSR 특성을 이해하며 React에 적용하며, SPA 와 SSR 를 장단점을 파악하기 위해 노력합니다.",
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

/***/ "p77/":
/***/ (function(module, exports) {



/***/ }),

/***/ "pGAn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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

/***/ "w8No":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zpkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });