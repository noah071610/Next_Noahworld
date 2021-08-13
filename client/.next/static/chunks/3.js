(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/Articles/ArticleAside.tsx":
/*!**********************************************!*\
  !*** ./components/Articles/ArticleAside.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\ArticleAside.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

var ArticleAside = function ArticleAside(_ref) {
  _s();

  var _article$Comments, _article$PostLikers, _article$Comments2, _article$PostLikers2;

  var article = _ref.article,
      type = _ref.type;
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var onClickArticle = function onClickArticle(e) {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push("/".concat(article.category, "/post/").concat(article.id));
  };

  var handleImgError = function handleImgError(e) {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_aside",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      marginBottom: "0.5rem",
      width: "100%",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    className: "article_img",
    style: {
      width: "100%",
      height: "150px",
      border: "0.3px solid rgba(0,0,0,0.1)"
    },
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_2__["BLUE_COLOR"],
      fontWeight: "bold",
      fontSize: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "IN ", article.category.toUpperCase()), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    className: "article_md_footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, type === "comments" ? (article === null || article === void 0 ? void 0 : (_article$Comments = article.Comments) === null || _article$Comments === void 0 ? void 0 : _article$Comments.length) + " Comments" : type === "like" ? (article === null || article === void 0 ? void 0 : (_article$PostLikers = article.PostLikers) === null || _article$PostLikers === void 0 ? void 0 : _article$PostLikers.length) + " Likes" : article.hit + " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    style: {
      margin: "0.5rem 0 0.8rem 0",
      height: "1.5rem",
      lineHeight: "1.5"
    },
    className: "article_aside_header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "article_footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "view",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "\xB7", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    style: type === "view" ? {
      color: _config__WEBPACK_IMPORTED_MODULE_2__["BLUE_COLOR"],
      fontWeight: "bold"
    } : {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "\xA0", article.hit, " views")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\xB7", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    style: type === "view" ? {} : {
      color: _config__WEBPACK_IMPORTED_MODULE_2__["BLUE_COLOR"],
      fontWeight: "bold"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "\xA0", type === "comments" ? (article === null || article === void 0 ? void 0 : (_article$Comments2 = article.Comments) === null || _article$Comments2 === void 0 ? void 0 : _article$Comments2.length) + " Comments" : (article === null || article === void 0 ? void 0 : (_article$PostLikers2 = article.PostLikers) === null || _article$PostLikers2 === void 0 ? void 0 : _article$PostLikers2.length) + " Likes"))))));
};

_s(ArticleAside, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = ArticleAside;
/* harmony default export */ __webpack_exports__["default"] = (ArticleAside);

var _c;

$RefreshReg$(_c, "ArticleAside");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Articles/ArticleSmallAside.tsx":
/*!***************************************************!*\
  !*** ./components/Articles/ArticleSmallAside.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\ArticleSmallAside.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

var Article = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("article", false ? undefined : {
  target: "e5emso0",
  label: "Article"
})(false ? undefined : {
  name: "1yjh3s",
  styles: "transition:all 0.4s;&:hover{text-decoration:underline;background-color:rgba(0, 0, 0, 0.1);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxBcnRpY2xlU21hbGxBc2lkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxBcnRpY2xlU21hbGxBc2lkZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBBcnRpY2xlU21hbGxBc2lkZTogRkM8QXJ0aWNsZUludGVyPiA9ICh7IGFydGljbGUsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9hc2lkZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3NtYWxsX2FzaWRlX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBCTFVFX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSU4ge2FydGljbGUuY2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpY2xlX21kX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5Db21tZW50cz8ubGVuZ3RoICsgXCIgQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSBcImxpa2VcIlxyXG4gICAgICAgICAgICAgICAgPyBhcnRpY2xlLlBvc3RMaWtlcnM/Lmxlbmd0aCArIFwiIExpa2VzXCJcclxuICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5oaXQgKyBcIiB2aWV3c1wifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfYXNpZGVfaGVhZGVyIHNtYWxsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsQXNpZGU7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var ArticleSmallAside = function ArticleSmallAside(_ref) {
  _s();

  var _article$Comments, _article$PostLikers;

  var article = _ref.article,
      type = _ref.type;
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var onClickArticle = function onClickArticle(e) {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push("/".concat(article.category, "/post/").concat(article.id));
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Article, {
    onClick: onClickArticle,
    style: {
      marginLeft: "0.5rem"
    },
    className: "article article_aside",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_small_aside_title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_3__["BLUE_COLOR"],
      fontWeight: "bold",
      fontSize: "0.9rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "IN ", article.category.toUpperCase()), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", {
    className: "article_md_footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "\xA0\xA0", type === "comments" ? ((_article$Comments = article.Comments) === null || _article$Comments === void 0 ? void 0 : _article$Comments.length) + " Comments" : type === "like" ? ((_article$PostLikers = article.PostLikers) === null || _article$PostLikers === void 0 ? void 0 : _article$PostLikers.length) + " Likes" : article.hit + " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      marginTop: "1rem"
    },
    className: "article_aside_header small_title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, article.title))));
};

_s(ArticleSmallAside, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ArticleSmallAside;
/* harmony default export */ __webpack_exports__["default"] = (ArticleSmallAside);

var _c;

$RefreshReg$(_c, "ArticleSmallAside");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Articles/MostArticle.tsx":
/*!*********************************************!*\
  !*** ./components/Articles/MostArticle.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _ArticleSmallAside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleSmallAside */ "./components/Articles/ArticleSmallAside.tsx");
/* harmony import */ var _ArticleAside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleAside */ "./components/Articles/ArticleAside.tsx");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\MostArticle.tsx",
    _this = undefined;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var TitleStyle = false ? undefined : {
  name: "1kdadf6-TitleStyle",
  styles: "display:flex;align-items:center;font-size:1.2rem;padding:0 1rem;label:TitleStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQXNpZGVIYXNodGFncywgUG9zdEludGVyIH0gZnJvbSBcIi4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGxBc2lkZSBmcm9tIFwiLi9BcnRpY2xlU21hbGxBc2lkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUFzaWRlIGZyb20gXCIuL0FydGljbGVBc2lkZVwiO1xyXG5cclxuY29uc3QgVGl0bGVTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgaXNCb3R0b21NYXJnaW4gPSAoYXNpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke2FzaWRlID8gXCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiIDogbnVsbH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNb3N0QXJ0aWNsZVByb3BzIHtcclxuICBtb3N0UG9zdD86IFBvc3RJbnRlcjtcclxuICBzcmM6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZ3M/OiBBc2lkZUhhc2h0YWdzW107XHJcbiAgYXNpZGU/OiBCb29sZWFuO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vc3RBcnRpY2xlOiBGQzxNb3N0QXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgbW9zdFBvc3QsIHNyYywgZGVzYywgaGFzaHRhZ3MsIGFzaWRlLCB0eXBlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2lzQm90dG9tTWFyZ2luKGFzaWRlKX0+XHJcbiAgICAgIDxoMyBjc3M9e1RpdGxlU3R5bGV9PlxyXG4gICAgICAgIDxpbWcgYWx0PVwidHJvcGh5XCIgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17c3JjfSAvPlxyXG4gICAgICAgIHtkZXNjfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7aGFzaHRhZ3MgPyAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfYXNpZGVfdGFnXCI+XHJcbiAgICAgICAgICB7aGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgaGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4je3YubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSA6IGFzaWRlID8gKFxyXG4gICAgICAgIDxBcnRpY2xlQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFydGljbGVTbWFsbEFzaWRlIHR5cGU9e3R5cGV9IGFydGljbGU9e21vc3RQb3N0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1vc3RBcnRpY2xlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var isBottomMargin = function isBottomMargin(aside) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(aside ? "margin-bottom: 1rem;" : null, ";" + (false ? undefined : ";label:isBottomMargin;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzhDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQXNpZGVIYXNodGFncywgUG9zdEludGVyIH0gZnJvbSBcIi4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGxBc2lkZSBmcm9tIFwiLi9BcnRpY2xlU21hbGxBc2lkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUFzaWRlIGZyb20gXCIuL0FydGljbGVBc2lkZVwiO1xyXG5cclxuY29uc3QgVGl0bGVTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgaXNCb3R0b21NYXJnaW4gPSAoYXNpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke2FzaWRlID8gXCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiIDogbnVsbH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNb3N0QXJ0aWNsZVByb3BzIHtcclxuICBtb3N0UG9zdD86IFBvc3RJbnRlcjtcclxuICBzcmM6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZ3M/OiBBc2lkZUhhc2h0YWdzW107XHJcbiAgYXNpZGU/OiBCb29sZWFuO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vc3RBcnRpY2xlOiBGQzxNb3N0QXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgbW9zdFBvc3QsIHNyYywgZGVzYywgaGFzaHRhZ3MsIGFzaWRlLCB0eXBlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2lzQm90dG9tTWFyZ2luKGFzaWRlKX0+XHJcbiAgICAgIDxoMyBjc3M9e1RpdGxlU3R5bGV9PlxyXG4gICAgICAgIDxpbWcgYWx0PVwidHJvcGh5XCIgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17c3JjfSAvPlxyXG4gICAgICAgIHtkZXNjfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7aGFzaHRhZ3MgPyAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfYXNpZGVfdGFnXCI+XHJcbiAgICAgICAgICB7aGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgaGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4je3YubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSA6IGFzaWRlID8gKFxyXG4gICAgICAgIDxBcnRpY2xlQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFydGljbGVTbWFsbEFzaWRlIHR5cGU9e3R5cGV9IGFydGljbGU9e21vc3RQb3N0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1vc3RBcnRpY2xlKTtcclxuIl19 */", false ? undefined : ";label:isBottomMargin;")
  );
};

var MostArticle = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = function _c(_ref) {
  var mostPost = _ref.mostPost,
      src = _ref.src,
      desc = _ref.desc,
      hashtags = _ref.hashtags,
      aside = _ref.aside,
      type = _ref.type;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: isBottomMargin(aside),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    css: TitleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    alt: "trophy",
    className: "icon",
    src: src,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), desc), hashtags ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", {
    className: "blog_aside_tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, hashtags && hashtags.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
      onClick: function onClick() {
        return window.scrollTo({
          top: 0
        });
      },
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/hashtag/".concat(v.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "#", v.name)));
  })) : aside ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ArticleAside__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    article: mostPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ArticleSmallAside__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: type,
    article: mostPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }));
});
_c2 = MostArticle;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(MostArticle));

var _c, _c2, _c3;

$RefreshReg$(_c, "MostArticle$memo");
$RefreshReg$(_c2, "MostArticle");
$RefreshReg$(_c3, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: BACKEND_URL, BLUE_COLOR, MAIN_COLOR, SUB_COLOR, GRAY_COLOR, BG_COLOR, RED_COLOR, dataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_COLOR", function() { return BLUE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_COLOR", function() { return MAIN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_COLOR", function() { return SUB_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAY_COLOR", function() { return GRAY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BG_COLOR", function() { return BG_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_COLOR", function() { return RED_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSource", function() { return dataSource; });
// Config
var BACKEND_URL = "https://api.noahworld.site"; // Color

var BLUE_COLOR = "#1187cf";
var MAIN_COLOR = "#D5F7E6";
var SUB_COLOR = "#5AE4A8";
var GRAY_COLOR = "rgba(0, 0, 0, 0.2)";
var BG_COLOR = "rgb(247, 247, 247)";
var RED_COLOR = "#f15b6c";
var dataSource = [{
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@emotion/styled/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
      }

      if (typeof props.className === 'string') {
        className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/styled/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@emotion/styled/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (isPropValid);


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,e){ true?module.exports=e():undefined}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlcy9BcnRpY2xlQXNpZGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVzL0FydGljbGVTbWFsbEFzaWRlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlcy9Nb3N0QXJ0aWNsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9iYXNlL2Rpc3QvZW1vdGlvbi1zdHlsZWQtYmFzZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJyZWxhdGl2ZVRpbWUiLCJsb2NhbGUiLCJBcnRpY2xlQXNpZGUiLCJhcnRpY2xlIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tBcnRpY2xlIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwicHVzaCIsImNhdGVnb3J5IiwiaWQiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJib3JkZXIiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsInJlcGxhY2UiLCJjb2xvciIsIkJMVUVfQ09MT1IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0b1VwcGVyQ2FzZSIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiUG9zdExpa2VycyIsImhpdCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJ0byIsImNyZWF0ZWRBdCIsIkFydGljbGUiLCJBcnRpY2xlU21hbGxBc2lkZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJUaXRsZVN0eWxlIiwiaXNCb3R0b21NYXJnaW4iLCJhc2lkZSIsImNzcyIsIk1vc3RBcnRpY2xlIiwibWVtbyIsIm1vc3RQb3N0IiwiZGVzYyIsImhhc2h0YWdzIiwibWFwIiwidiIsImkiLCJuYW1lIiwiQkFDS0VORF9VUkwiLCJNQUlOX0NPTE9SIiwiU1VCX0NPTE9SIiwiR1JBWV9DT0xPUiIsIkJHX0NPTE9SIiwiUkVEX0NPTE9SIiwiZGF0YVNvdXJjZSIsImtleSIsImRhdGUiLCJzdW1tYXJ5Iiwic2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsZ0VBQWI7QUFDQUYsNENBQUssQ0FBQ0csTUFBTixDQUFhLEtBQWI7O0FBRUEsSUFBTUMsWUFBOEIsR0FBRyxTQUFqQ0EsWUFBaUMsT0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVELE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQXlCO0FBQzlDLFFBQUtBLENBQUMsQ0FBQ0MsTUFBSCxDQUFzQkMsU0FBdEIsS0FBb0MsU0FBeEMsRUFBbUQ7QUFDakQ7QUFDRDs7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QUFPLGNBQWMsd0JBQXdCLGtEQUFrRCxvQkFBb0Isc0JBQXNCLHNCQUFzQixvQkFBb0Isa0JBQWtCLHlCQUF5QixvQkFBb0IsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsRyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlSW50ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5kYXlqcy5sb2NhbGUoXCJrb3JcIik7XHJcblxyXG5jb25zdCBBcnRpY2xlQXNpZGU6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW1nRXJyb3IgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIChlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthcnRpY2xlICYmIChcclxuICAgICAgICA8YXJ0aWNsZSBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX0gY2xhc3NOYW1lPVwiYXJ0aWNsZSBhcnRpY2xlX2FzaWRlXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwLjVyZW1cIiwgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfaW1nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNTBweFwiLCBib3JkZXI6IFwiMC4zcHggc29saWQgcmdiYSgwLDAsMCwwLjEpXCIgfX1cclxuICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIGFydGljbGU/LnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUudGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5pbWFnZVBhdGhcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLmltYWdlUGF0aC5yZXBsYWNlKC9cXC90aHVtYlxcLy8sIFwiL29yaWdpbmFsL1wiKVxyXG4gICAgICAgICAgICAgICAgICA6IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBCTFVFX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIElOIHthcnRpY2xlLmNhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aWNsZV9tZF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICA/IGFydGljbGU/LkNvbW1lbnRzPy5sZW5ndGggKyBcIiBDb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICA6IHR5cGUgPT09IFwibGlrZVwiXHJcbiAgICAgICAgICAgICAgICA/IGFydGljbGU/LlBvc3RMaWtlcnM/Lmxlbmd0aCArIFwiIExpa2VzXCJcclxuICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5oaXQgKyBcIiB2aWV3c1wifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwLjVyZW0gMCAwLjhyZW0gMFwiLCBoZWlnaHQ6IFwiMS41cmVtXCIsIGxpbmVIZWlnaHQ6IFwiMS41XCIgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2FzaWRlX2hlYWRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFydGljbGVfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIHtkYXlqcygpLnRvKGRheWpzKGFydGljbGUuY3JlYXRlZEF0KSwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDthZ29cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICDCt1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3R5cGUgPT09IFwidmlld1wiID8geyBjb2xvcjogQkxVRV9DT0xPUiwgZm9udFdlaWdodDogXCJib2xkXCIgfSA6IHt9fT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7e2FydGljbGUuaGl0fSB2aWV3c1xyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICDCt1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3R5cGUgPT09IFwidmlld1wiID8ge30gOiB7IGNvbG9yOiBCTFVFX0NPTE9SLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGFydGljbGU/LkNvbW1lbnRzPy5sZW5ndGggKyBcIiBDb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhcnRpY2xlPy5Qb3N0TGlrZXJzPy5sZW5ndGggKyBcIiBMaWtlc1wifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUFzaWRlO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBBcnRpY2xlU21hbGxBc2lkZTogRkM8QXJ0aWNsZUludGVyPiA9ICh7IGFydGljbGUsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9hc2lkZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3NtYWxsX2FzaWRlX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBCTFVFX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSU4ge2FydGljbGUuY2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpY2xlX21kX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5Db21tZW50cz8ubGVuZ3RoICsgXCIgQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSBcImxpa2VcIlxyXG4gICAgICAgICAgICAgICAgPyBhcnRpY2xlLlBvc3RMaWtlcnM/Lmxlbmd0aCArIFwiIExpa2VzXCJcclxuICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5oaXQgKyBcIiB2aWV3c1wifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfYXNpZGVfaGVhZGVyIHNtYWxsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsQXNpZGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBc2lkZUhhc2h0YWdzLCBQb3N0SW50ZXIgfSBmcm9tIFwiLi4vLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuaW1wb3J0IEFydGljbGVTbWFsbEFzaWRlIGZyb20gXCIuL0FydGljbGVTbWFsbEFzaWRlXCI7XHJcbmltcG9ydCBBcnRpY2xlQXNpZGUgZnJvbSBcIi4vQXJ0aWNsZUFzaWRlXCI7XHJcblxyXG5jb25zdCBUaXRsZVN0eWxlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBpc0JvdHRvbU1hcmdpbiA9IChhc2lkZTogQm9vbGVhbikgPT4gY3NzYFxyXG4gICR7YXNpZGUgPyBcIm1hcmdpbi1ib3R0b206IDFyZW07XCIgOiBudWxsfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIE1vc3RBcnRpY2xlUHJvcHMge1xyXG4gIG1vc3RQb3N0PzogUG9zdEludGVyO1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIGRlc2M6IHN0cmluZztcclxuICBoYXNodGFncz86IEFzaWRlSGFzaHRhZ3NbXTtcclxuICBhc2lkZT86IEJvb2xlYW47XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTW9zdEFydGljbGU6IEZDPE1vc3RBcnRpY2xlUHJvcHM+ID0gbWVtbygoeyBtb3N0UG9zdCwgc3JjLCBkZXNjLCBoYXNodGFncywgYXNpZGUsIHR5cGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17aXNCb3R0b21NYXJnaW4oYXNpZGUpfT5cclxuICAgICAgPGgzIGNzcz17VGl0bGVTdHlsZX0+XHJcbiAgICAgICAgPGltZyBhbHQ9XCJ0cm9waHlcIiBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtzcmN9IC8+XHJcbiAgICAgICAge2Rlc2N9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIHtoYXNodGFncyA/IChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmxvZ19hc2lkZV90YWdcIj5cclxuICAgICAgICAgIHtoYXNodGFncyAmJlxyXG4gICAgICAgICAgICBoYXNodGFncy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPiN7di5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApIDogYXNpZGUgPyAoXHJcbiAgICAgICAgPEFydGljbGVBc2lkZSB0eXBlPXt0eXBlfSBhcnRpY2xlPXttb3N0UG9zdH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QXJ0aWNsZVNtYWxsQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oTW9zdEFydGljbGUpO1xyXG4iLCIvLyBDb25maWdcclxuZXhwb3J0IGNvbnN0IEJBQ0tFTkRfVVJMID0gXCJodHRwczovL2FwaS5ub2Fod29ybGQuc2l0ZVwiO1xyXG5cclxuLy8gQ29sb3JcclxuXHJcbmV4cG9ydCBjb25zdCBCTFVFX0NPTE9SID0gXCIjMTE4N2NmXCI7XHJcbmV4cG9ydCBjb25zdCBNQUlOX0NPTE9SID0gXCIjRDVGN0U2XCI7XHJcbmV4cG9ydCBjb25zdCBTVUJfQ09MT1IgPSBcIiM1QUU0QThcIjtcclxuZXhwb3J0IGNvbnN0IEdSQVlfQ09MT1IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xyXG5leHBvcnQgY29uc3QgQkdfQ09MT1IgPSBcInJnYigyNDcsIDI0NywgMjQ3KVwiO1xyXG5leHBvcnQgY29uc3QgUkVEX0NPTE9SID0gXCIjZjE1YjZjXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YVNvdXJjZSA9IFtcclxuICB7XHJcbiAgICBrZXk6IFwiMVwiLFxyXG4gICAgbmFtZTogXCLthqDsnbVcIixcclxuICAgIGRhdGU6IDIwMTgsXHJcbiAgICBzdW1tYXJ5OiBcIuyYgeyWtCDsnpDqsqnspp0gKOq4sOqwhOunjOujjClcIixcclxuICAgIHNjb3JlOiBcIjkyNVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjJcIixcclxuICAgIG5hbWU6IFwi66ek7J286rK97KCc7YWM7Iqk7Yq4XCIsXHJcbiAgICBkYXRlOiAyMDE4LFxyXG4gICAgc3VtbWFyeTogXCLqsr3soJws6rK97JiB6rSA66CoIOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjNcIixcclxuICAgIG5hbWU6IFwi6rWt7Jm47Jes7ZaJ7J247IaU7J6QIOyekOqyqeymnVwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7ZW07Jm47JeQ7IScIOyduOygle2VmOuKlCDtlZzqta3qtIDqtJHtmJHtmozsnZgg6rWt7Jm4IOyduOyGlOyekCAg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCJQYXNzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNFwiLFxyXG4gICAgbmFtZTogXCJKTFBUXCIsXHJcbiAgICBkYXRlOiAyMDE5LFxyXG4gICAgc3VtbWFyeTogXCLsnbzrs7jslrQg7J6Q6rKp7KadXCIsXHJcbiAgICBzY29yZTogXCIx6riJXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiNVwiLFxyXG4gICAgbmFtZTogXCLsnbzrs7jslrQg7Ya17Jet7JWI64K07IKsIOyekOqyqeymnVwiLFxyXG4gICAgZGF0ZTogMjAxOSxcclxuICAgIHN1bW1hcnk6IFwi7ZWc6rWt7IKsMeq4ieyXkCDspIDtlZjrqbAg7J2867O47Ja0IO2GteuyiOyXrSDriqXroKXsnYQg7J6F7Kad7ZWY64qUIOq1reqwgOyghOusuOyekOqyqeymnVwiLFxyXG4gICAgc2NvcmU6IFwiUGFzc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIjZcIixcclxuICAgIG5hbWU6IFwi7JiB7Ja0IO2GteyXreyViOuCtOyCrCDsnpDqsqnspp1cIixcclxuICAgIGRhdGU6IDIwMjAsXHJcbiAgICBzdW1tYXJ5OiBcIu2VnOq1reyCrDHquInsl5Ag7KSA7ZWY66mwIOyYgeyWtCDthrXrsojsl60g64ql66Cl7J2EIOyeheymne2VmOuKlCDqta3qsIDsoITrrLjsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI3XCIsXHJcbiAgICBuYW1lOiBcIuygleuztOyymOumrOq4sOyCrFwiLFxyXG4gICAgZGF0ZTogMjAyMSxcclxuICAgIHN1bW1hcnk6IFwiSVTqtIDroKgg7IaM7JaR7J2EIOyeheymne2VmOuKlCDqta3qsIDquLDsiKDsnpDqsqnspp1cIixcclxuICAgIHNjb3JlOiBcIlBhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCI4XCIsXHJcbiAgICBuYW1lOiBcIu2VmeygkOydgO2WieygnCDqsr3smIHtlZnsgqxcIixcclxuICAgIGRhdGU6IDIwMjEsXHJcbiAgICBzdW1tYXJ5OiBcIjIwMjHrhYQgNuyblCDsobjsl4XsmIjsoJVcIixcclxuICAgIHNjb3JlOiBcIu2VmeyCrFwiLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNQcm9wVmFsaWQgZnJvbSAnQGVtb3Rpb24vaXMtcHJvcC12YWxpZCc7XG5pbXBvcnQgeyB3aXRoRW1vdGlvbkNhY2hlLCBUaGVtZUNvbnRleHQgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG52YXIgdGVzdE9taXRQcm9wc09uU3RyaW5nVGFnID0gaXNQcm9wVmFsaWQ7XG5cbnZhciB0ZXN0T21pdFByb3BzT25Db21wb25lbnQgPSBmdW5jdGlvbiB0ZXN0T21pdFByb3BzT25Db21wb25lbnQoa2V5KSB7XG4gIHJldHVybiBrZXkgIT09ICd0aGVtZSc7XG59O1xuXG52YXIgZ2V0RGVmYXVsdFNob3VsZEZvcndhcmRQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFNob3VsZEZvcndhcmRQcm9wKHRhZykge1xuICByZXR1cm4gdHlwZW9mIHRhZyA9PT0gJ3N0cmluZycgJiYgLy8gOTYgaXMgb25lIGxlc3MgdGhhbiB0aGUgY2hhciBjb2RlXG4gIC8vIGZvciBcImFcIiBzbyB0aGlzIGlzIGNoZWNraW5nIHRoYXRcbiAgLy8gaXQncyBhIGxvd2VyY2FzZSBjaGFyYWN0ZXJcbiAgdGFnLmNoYXJDb2RlQXQoMCkgPiA5NiA/IHRlc3RPbWl0UHJvcHNPblN0cmluZ1RhZyA6IHRlc3RPbWl0UHJvcHNPbkNvbXBvbmVudDtcbn07XG52YXIgY29tcG9zZVNob3VsZEZvcndhcmRQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvc2VTaG91bGRGb3J3YXJkUHJvcHModGFnLCBvcHRpb25zLCBpc1JlYWwpIHtcbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnNTaG91bGRGb3J3YXJkUHJvcCA9IG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3A7XG4gICAgc2hvdWxkRm9yd2FyZFByb3AgPSB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wICYmIG9wdGlvbnNTaG91bGRGb3J3YXJkUHJvcCA/IGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZy5fX2Vtb3Rpb25fZm9yd2FyZFByb3AocHJvcE5hbWUpICYmIG9wdGlvbnNTaG91bGRGb3J3YXJkUHJvcChwcm9wTmFtZSk7XG4gICAgfSA6IG9wdGlvbnNTaG91bGRGb3J3YXJkUHJvcDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2hvdWxkRm9yd2FyZFByb3AgIT09ICdmdW5jdGlvbicgJiYgaXNSZWFsKSB7XG4gICAgc2hvdWxkRm9yd2FyZFByb3AgPSB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wO1xuICB9XG5cbiAgcmV0dXJuIHNob3VsZEZvcndhcmRQcm9wO1xufTtcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcblxudmFyIGNyZWF0ZVN0eWxlZCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlZCh0YWcsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodGFnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFyZSB0cnlpbmcgdG8gY3JlYXRlIGEgc3R5bGVkIGVsZW1lbnQgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LlxcbllvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc1JlYWwgPSB0YWcuX19lbW90aW9uX3JlYWwgPT09IHRhZztcbiAgdmFyIGJhc2VUYWcgPSBpc1JlYWwgJiYgdGFnLl9fZW1vdGlvbl9iYXNlIHx8IHRhZztcbiAgdmFyIGlkZW50aWZpZXJOYW1lO1xuICB2YXIgdGFyZ2V0Q2xhc3NOYW1lO1xuXG4gIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZGVudGlmaWVyTmFtZSA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGFyZ2V0Q2xhc3NOYW1lID0gb3B0aW9ucy50YXJnZXQ7XG4gIH1cblxuICB2YXIgc2hvdWxkRm9yd2FyZFByb3AgPSBjb21wb3NlU2hvdWxkRm9yd2FyZFByb3BzKHRhZywgb3B0aW9ucywgaXNSZWFsKTtcbiAgdmFyIGRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wIHx8IGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcChiYXNlVGFnKTtcbiAgdmFyIHNob3VsZFVzZUFzID0gIWRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCgnYXMnKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3R5bGVzID0gaXNSZWFsICYmIHRhZy5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQgPyB0YWcuX19lbW90aW9uX3N0eWxlcy5zbGljZSgwKSA6IFtdO1xuXG4gICAgaWYgKGlkZW50aWZpZXJOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0eWxlcy5wdXNoKFwibGFiZWw6XCIgKyBpZGVudGlmaWVyTmFtZSArIFwiO1wiKTtcbiAgICB9XG5cbiAgICBpZiAoYXJnc1swXSA9PSBudWxsIHx8IGFyZ3NbMF0ucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0eWxlcy5wdXNoLmFwcGx5KHN0eWxlcywgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3NbMF1bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzLnB1c2goYXJnc1swXVswXSk7XG4gICAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgICB2YXIgaSA9IDE7XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnc1swXVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZXMucHVzaChhcmdzW2ldLCBhcmdzWzBdW2ldKTtcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWU6IHdlIG5lZWQgdG8gY2FzdCBTdGF0ZWxlc3NGdW5jdGlvbmFsQ29tcG9uZW50IHRvIG91ciBQcml2YXRlU3R5bGVkQ29tcG9uZW50IGNsYXNzXG5cblxuICAgIHZhciBTdHlsZWQgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUsIHJlZikge1xuICAgICAgdmFyIGZpbmFsVGFnID0gc2hvdWxkVXNlQXMgJiYgcHJvcHMuYXMgfHwgYmFzZVRhZztcbiAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgIHZhciBjbGFzc0ludGVycG9sYXRpb25zID0gW107XG4gICAgICB2YXIgbWVyZ2VkUHJvcHMgPSBwcm9wcztcblxuICAgICAgaWYgKHByb3BzLnRoZW1lID09IG51bGwpIHtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICBtZXJnZWRQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lcmdlZFByb3BzLnRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCBjbGFzc0ludGVycG9sYXRpb25zLCBwcm9wcy5jbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoc3R5bGVzLmNvbmNhdChjbGFzc0ludGVycG9sYXRpb25zKSwgY2FjaGUucmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpO1xuICAgICAgdmFyIHJ1bGVzID0gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCB0eXBlb2YgZmluYWxUYWcgPT09ICdzdHJpbmcnKTtcbiAgICAgIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICAgICAgaWYgKHRhcmdldENsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRVc2VBcyAmJiBzaG91bGRGb3J3YXJkUHJvcCA9PT0gdW5kZWZpbmVkID8gZ2V0RGVmYXVsdFNob3VsZEZvcndhcmRQcm9wKGZpbmFsVGFnKSA6IGRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcDtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChzaG91bGRVc2VBcyAmJiBfa2V5ID09PSAnYXMnKSBjb250aW51ZTtcblxuICAgICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgICAgZmluYWxTaG91bGRGb3J3YXJkUHJvcChfa2V5KSkge1xuICAgICAgICAgIG5ld1Byb3BzW19rZXldID0gcHJvcHNbX2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgbmV3UHJvcHMucmVmID0gcmVmO1xuICAgICAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KGZpbmFsVGFnLCBuZXdQcm9wcyk7XG5cbiAgICAgIHJldHVybiBlbGU7XG4gICAgfSk7XG4gICAgU3R5bGVkLmRpc3BsYXlOYW1lID0gaWRlbnRpZmllck5hbWUgIT09IHVuZGVmaW5lZCA/IGlkZW50aWZpZXJOYW1lIDogXCJTdHlsZWQoXCIgKyAodHlwZW9mIGJhc2VUYWcgPT09ICdzdHJpbmcnID8gYmFzZVRhZyA6IGJhc2VUYWcuZGlzcGxheU5hbWUgfHwgYmFzZVRhZy5uYW1lIHx8ICdDb21wb25lbnQnKSArIFwiKVwiO1xuICAgIFN0eWxlZC5kZWZhdWx0UHJvcHMgPSB0YWcuZGVmYXVsdFByb3BzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fcmVhbCA9IFN0eWxlZDtcbiAgICBTdHlsZWQuX19lbW90aW9uX2Jhc2UgPSBiYXNlVGFnO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fc3R5bGVzID0gc3R5bGVzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fZm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3R5bGVkLCAndG9TdHJpbmcnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgPT09IHVuZGVmaW5lZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuICdOT19DT01QT05FTlRfU0VMRUNUT1InO1xuICAgICAgICB9IC8vICRGbG93Rml4TWU6IGNvZXJjZSB1bmRlZmluZWQgdG8gc3RyaW5nXG5cblxuICAgICAgICByZXR1cm4gXCIuXCIgKyB0YXJnZXRDbGFzc05hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBTdHlsZWQud2l0aENvbXBvbmVudCA9IGZ1bmN0aW9uIChuZXh0VGFnLCBuZXh0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlZChuZXh0VGFnLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywgbmV4dE9wdGlvbnMsIHtcbiAgICAgICAgc2hvdWxkRm9yd2FyZFByb3A6IGNvbXBvc2VTaG91bGRGb3J3YXJkUHJvcHMoU3R5bGVkLCBuZXh0T3B0aW9ucywgdHJ1ZSlcbiAgICAgIH0pKS5hcHBseSh2b2lkIDAsIHN0eWxlcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBTdHlsZWQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdHlsZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0cmFuc2xhdGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxmYWxsYmFja3xpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258b3B0aW9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGlzUHJvcFZhbGlkID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpc1Byb3BWYWxpZDtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLCQ9XCJJbnZhbGlkIERhdGVcIixsPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSxnPXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsZikscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxmKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Zix5OmMsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmh9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxEPVwiZW5cIix2PXt9O3ZbRF09TTt2YXIgcD1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF99LFM9ZnVuY3Rpb24odCxlLG4pe3ZhciByO2lmKCF0KXJldHVybiBEO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXZbdF0mJihyPXQpLGUmJih2W3RdPWUscj10KTtlbHNle3ZhciBpPXQubmFtZTt2W2ldPXQscj1pfXJldHVybiFuJiZyJiYoRD1yKSxyfHwhbiYmRH0sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxPPWc7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaChsKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09JCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsaD1PLnAodCksJD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsZz1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGgpe2Nhc2UgYzpyZXR1cm4gcj8kKDEsMCk6JCgzMSwxMSk7Y2FzZSBmOnJldHVybiByPyQoMSxNKTokKDAsTSsxKTtjYXNlIG86dmFyIEQ9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLHY9KHk8RD95Kzc6eSktRDtyZXR1cm4gJChyP20tdjptKyg2LXYpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuIGwoZytcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiBsKGcrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiBsKGcrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiBsKGcrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGg9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLCQ9KG49e30sblthXT1oK1wiRGF0ZVwiLG5bZF09aCtcIkRhdGVcIixuW2ZdPWgrXCJNb250aFwiLG5bY109aCtcIkZ1bGxZZWFyXCIsblt1XT1oK1wiSG91cnNcIixuW3NdPWgrXCJNaW51dGVzXCIsbltpXT1oK1wiU2Vjb25kc1wiLG5bcl09aCtcIk1pbGxpc2Vjb25kc1wiLG4pW29dLGw9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1mfHxvPT09Yyl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbJF0obCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSAkJiZ0aGlzLiRkWyRdKGwpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsaCl7dmFyIGQsJD10aGlzO3I9TnVtYmVyKHIpO3ZhciBsPU8ucChoKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcoJCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSwkKX07aWYobD09PWYpcmV0dXJuIHRoaXMuc2V0KGYsdGhpcy4kTStyKTtpZihsPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiR5K3IpO2lmKGw9PT1hKXJldHVybiB5KDEpO2lmKGw9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpW2xdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gJDt2YXIgbj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1PLnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPWkud2Vla2RheXMsZj1pLm1vbnRocyxoPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChlLG4pKXx8aVtyXS5zdWJzdHIoMCxzKX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gTy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSxkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOk8ucyhhKzEsMixcIjBcIiksTU1NOmgoaS5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOk8ucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgoaS53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Ty5zKHMsMixcIjBcIiksaDpjKDEpLGhoOmMoMiksYTpkKHMsdSwhMCksQTpkKHMsdSwhMSksbTpTdHJpbmcodSksbW06Ty5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Ty5zKHRoaXMuJHMsMixcIjBcIiksU1NTOk8ucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBuLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8bFt0XXx8ci5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLCQpe3ZhciBsLHk9Ty5wKGQpLE09dyhyKSxtPShNLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLU0sRD1PLm0odGhpcyxNKTtyZXR1cm4gRD0obD17fSxsW2NdPUQvMTIsbFtmXT1ELGxbaF09RC8zLGxbb109KGctbSkvNjA0OGU1LGxbYV09KGctbSkvODY0ZTUsbFt1XT1nL24sbFtzXT1nL2UsbFtpXT1nL3QsbClbeV18fGcsJD9EOk8uYShEKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGYpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gdlt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj1TKHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gTy53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxiPV8ucHJvdG90eXBlO3JldHVybiB3LnByb3RvdHlwZT1iLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsZl0sW1wiJHlcIixjXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtiW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksdy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLHcpLHQuJGk9ITApLHd9LHcubG9jYWxlPVMsdy5pc0RheWpzPXAsdy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB3KDFlMyp0KX0sdy5lbj12W0RdLHcuTHM9dix3LnA9e30sd30pKTsiLCIhZnVuY3Rpb24ocixlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToocj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnJ8fHNlbGYpLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihyLGUsdCl7cj1yfHx7fTt2YXIgbj1lLnByb3RvdHlwZSxvPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTtmdW5jdGlvbiBpKHIsZSx0LG8pe3JldHVybiBuLmZyb21Ub0Jhc2UocixlLHQsbyl9dC5lbi5yZWxhdGl2ZVRpbWU9byxuLmZyb21Ub0Jhc2U9ZnVuY3Rpb24oZSxuLGksZCx1KXtmb3IodmFyIGYsYSxzLGw9aS4kbG9jYWxlKCkucmVsYXRpdmVUaW1lfHxvLGg9ci50aHJlc2hvbGRzfHxbe2w6XCJzXCIscjo0NCxkOlwic2Vjb25kXCJ9LHtsOlwibVwiLHI6ODl9LHtsOlwibW1cIixyOjQ0LGQ6XCJtaW51dGVcIn0se2w6XCJoXCIscjo4OX0se2w6XCJoaFwiLHI6MjEsZDpcImhvdXJcIn0se2w6XCJkXCIscjozNX0se2w6XCJkZFwiLHI6MjUsZDpcImRheVwifSx7bDpcIk1cIixyOjQ1fSx7bDpcIk1NXCIscjoxMCxkOlwibW9udGhcIn0se2w6XCJ5XCIscjoxN30se2w6XCJ5eVwiLGQ6XCJ5ZWFyXCJ9XSxtPWgubGVuZ3RoLGM9MDtjPG07Yys9MSl7dmFyIHk9aFtjXTt5LmQmJihmPWQ/dChlKS5kaWZmKGkseS5kLCEwKTppLmRpZmYoZSx5LmQsITApKTt2YXIgcD0oci5yb3VuZGluZ3x8TWF0aC5yb3VuZCkoTWF0aC5hYnMoZikpO2lmKHM9Zj4wLHA8PXkucnx8IXkucil7cDw9MSYmYz4wJiYoeT1oW2MtMV0pO3ZhciB2PWxbeS5sXTt1JiYocD11KFwiXCIrcCkpLGE9XCJzdHJpbmdcIj09dHlwZW9mIHY/di5yZXBsYWNlKFwiJWRcIixwKTp2KHAsbix5Lmwscyk7YnJlYWt9fWlmKG4pcmV0dXJuIGE7dmFyIE09cz9sLmZ1dHVyZTpsLnBhc3Q7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgTT9NKGEpOk0ucmVwbGFjZShcIiVzXCIsYSl9LG4udG89ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzKX07dmFyIGQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIuJHU/dC51dGMoKTp0KCl9O24udG9Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMudG8oZCh0aGlzKSxyKX0sbi5mcm9tTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmZyb20oZCh0aGlzKSxyKX19fSkpOyJdLCJzb3VyY2VSb290IjoiIn0=