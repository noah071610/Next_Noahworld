exports.ids = [2];
exports.modules = {

/***/ "./components/Blog/Articles/ArticleAside.tsx":
/*!***************************************************!*\
  !*** ./components/Blog/Articles/ArticleAside.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleAside.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

const ArticleAside = ({
  article,
  type
}) => {
  var _article$Comments, _article$PostLikers, _article$Comments2, _article$PostLikers2;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_aside",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "IN ", article.category.toUpperCase()), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    className: "article_md_footer",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "article_footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "view",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "\xA0", article.hit, " views")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    className: "comments",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "\xA0", type === "comments" ? (article === null || article === void 0 ? void 0 : (_article$Comments2 = article.Comments) === null || _article$Comments2 === void 0 ? void 0 : _article$Comments2.length) + " Comments" : (article === null || article === void 0 ? void 0 : (_article$PostLikers2 = article.PostLikers) === null || _article$PostLikers2 === void 0 ? void 0 : _article$PostLikers2.length) + " Likes"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleAside);

/***/ }),

/***/ "./components/Blog/Articles/ArticleSmallAside.tsx":
/*!********************************************************!*\
  !*** ./components/Blog/Articles/ArticleSmallAside.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./config.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleSmallAside.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const Article = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("article", false ? undefined : {
  target: "egtikk0",
  label: "Article"
})(false ? undefined : {
  name: "1yjh3s",
  styles: "transition:all 0.4s;&:hover{text-decoration:underline;background-color:rgba(0, 0, 0, 0.1);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlU21hbGxBc2lkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlU21hbGxBc2lkZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBBcnRpY2xlU21hbGxBc2lkZTogRkM8QXJ0aWNsZUludGVyPiA9ICh7IGFydGljbGUsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9hc2lkZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3NtYWxsX2FzaWRlX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBCTFVFX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSU4ge2FydGljbGUuY2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpY2xlX21kX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5Db21tZW50cz8ubGVuZ3RoICsgXCIgQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSBcImxpa2VcIlxyXG4gICAgICAgICAgICAgICAgPyBhcnRpY2xlLlBvc3RMaWtlcnM/Lmxlbmd0aCArIFwiIExpa2VzXCJcclxuICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5oaXQgKyBcIiB2aWV3c1wifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfYXNpZGVfaGVhZGVyIHNtYWxsX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FydGljbGU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsQXNpZGU7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ArticleSmallAside = ({
  article,
  type
}) => {
  var _article$Comments, _article$PostLikers;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Article, {
    onClick: onClickArticle,
    style: {
      marginLeft: "0.5rem"
    },
    className: "article article_aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_small_aside_title",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "IN ", article.category.toUpperCase()), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", {
    className: "article_md_footer",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, article.title))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleSmallAside);

/***/ }),

/***/ "./components/Blog/Articles/MostArticle.tsx":
/*!**************************************************!*\
  !*** ./components/Blog/Articles/MostArticle.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticleSmallAside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleSmallAside */ "./components/Blog/Articles/ArticleSmallAside.tsx");
/* harmony import */ var _ArticleAside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleAside */ "./components/Blog/Articles/ArticleAside.tsx");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\MostArticle.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const TitleStyle = false ? undefined : {
  name: "1kdadf6-TitleStyle",
  styles: "display:flex;align-items:center;font-size:1.2rem;padding:0 1rem;label:TitleStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQXNpZGVIYXNodGFncywgUG9zdEludGVyIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGxBc2lkZSBmcm9tIFwiLi9BcnRpY2xlU21hbGxBc2lkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUFzaWRlIGZyb20gXCIuL0FydGljbGVBc2lkZVwiO1xyXG5cclxuY29uc3QgVGl0bGVTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgaXNCb3R0b21NYXJnaW4gPSAoYXNpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke2FzaWRlID8gXCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiIDogbnVsbH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNb3N0QXJ0aWNsZVByb3BzIHtcclxuICBtb3N0UG9zdD86IFBvc3RJbnRlcjtcclxuICBzcmM6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZ3M/OiBBc2lkZUhhc2h0YWdzW107XHJcbiAgYXNpZGU/OiBCb29sZWFuO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vc3RBcnRpY2xlOiBGQzxNb3N0QXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgbW9zdFBvc3QsIHNyYywgZGVzYywgaGFzaHRhZ3MsIGFzaWRlLCB0eXBlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2lzQm90dG9tTWFyZ2luKGFzaWRlKX0+XHJcbiAgICAgIDxoMyBjc3M9e1RpdGxlU3R5bGV9PlxyXG4gICAgICAgIDxpbWcgYWx0PVwidHJvcGh5XCIgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17c3JjfSAvPlxyXG4gICAgICAgIHtkZXNjfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7aGFzaHRhZ3MgPyAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfYXNpZGVfdGFnXCI+XHJcbiAgICAgICAgICB7aGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgaGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4je3YubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSA6IGFzaWRlID8gKFxyXG4gICAgICAgIDxBcnRpY2xlQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFydGljbGVTbWFsbEFzaWRlIHR5cGU9e3R5cGV9IGFydGljbGU9e21vc3RQb3N0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1vc3RBcnRpY2xlKTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const isBottomMargin = aside =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(aside ? "margin-bottom: 1rem;" : null, ";" + (false ? undefined : ";label:isBottomMargin;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzhDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxNb3N0QXJ0aWNsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQXNpZGVIYXNodGFncywgUG9zdEludGVyIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGxBc2lkZSBmcm9tIFwiLi9BcnRpY2xlU21hbGxBc2lkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUFzaWRlIGZyb20gXCIuL0FydGljbGVBc2lkZVwiO1xyXG5cclxuY29uc3QgVGl0bGVTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgaXNCb3R0b21NYXJnaW4gPSAoYXNpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke2FzaWRlID8gXCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiIDogbnVsbH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNb3N0QXJ0aWNsZVByb3BzIHtcclxuICBtb3N0UG9zdD86IFBvc3RJbnRlcjtcclxuICBzcmM6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZ3M/OiBBc2lkZUhhc2h0YWdzW107XHJcbiAgYXNpZGU/OiBCb29sZWFuO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vc3RBcnRpY2xlOiBGQzxNb3N0QXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgbW9zdFBvc3QsIHNyYywgZGVzYywgaGFzaHRhZ3MsIGFzaWRlLCB0eXBlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2lzQm90dG9tTWFyZ2luKGFzaWRlKX0+XHJcbiAgICAgIDxoMyBjc3M9e1RpdGxlU3R5bGV9PlxyXG4gICAgICAgIDxpbWcgYWx0PVwidHJvcGh5XCIgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17c3JjfSAvPlxyXG4gICAgICAgIHtkZXNjfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7aGFzaHRhZ3MgPyAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfYXNpZGVfdGFnXCI+XHJcbiAgICAgICAgICB7aGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgaGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4je3YubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSA6IGFzaWRlID8gKFxyXG4gICAgICAgIDxBcnRpY2xlQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFydGljbGVTbWFsbEFzaWRlIHR5cGU9e3R5cGV9IGFydGljbGU9e21vc3RQb3N0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1vc3RBcnRpY2xlKTtcclxuIl19 */", false ? undefined : ";label:isBottomMargin;");

const MostArticle = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  mostPost,
  src,
  desc,
  hashtags,
  aside,
  type
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: isBottomMargin(aside),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    css: TitleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    alt: "trophy",
    className: "icon",
    src: src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), desc), hashtags ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", {
    className: "blog_aside_tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, hashtags && hashtags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
      onClick: () => window.scrollTo({
        top: 0
      }),
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/hashtag/${v.name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "#", v.name)));
  })) : aside ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ArticleAside__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    article: mostPost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ArticleSmallAside__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: type,
    article: mostPost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(MostArticle));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZXMvQXJ0aWNsZUFzaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZXMvQXJ0aWNsZVNtYWxsQXNpZGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9BcnRpY2xlcy9Nb3N0QXJ0aWNsZS50c3giXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJyZWxhdGl2ZVRpbWUiLCJsb2NhbGUiLCJBcnRpY2xlQXNpZGUiLCJhcnRpY2xlIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tBcnRpY2xlIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwicHVzaCIsImNhdGVnb3J5IiwiaWQiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJib3JkZXIiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsInJlcGxhY2UiLCJjb2xvciIsIkJMVUVfQ09MT1IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0b1VwcGVyQ2FzZSIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiUG9zdExpa2VycyIsImhpdCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJ0byIsImNyZWF0ZWRBdCIsIkFydGljbGUiLCJBcnRpY2xlU21hbGxBc2lkZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJUaXRsZVN0eWxlIiwiaXNCb3R0b21NYXJnaW4iLCJhc2lkZSIsImNzcyIsIk1vc3RBcnRpY2xlIiwibWVtbyIsIm1vc3RQb3N0IiwiZGVzYyIsImhhc2h0YWdzIiwibWFwIiwidiIsImkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBQSw0Q0FBSyxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosQ0FERjtBQTBCRCxDQTNCNkMsQ0FBOUM7QUE2QmVELDhIQUFJLENBQUNELFdBQUQsQ0FBbkIsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZUFzaWRlOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25DbGlja0FydGljbGUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKChlLnRhcmdldCBhcyBFbGVtZW50KS5jbGFzc05hbWUgPT09IFwiaGFzaHRhZ1wiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KTtcclxuICAgIHJvdXRlci5wdXNoKGAvJHthcnRpY2xlLmNhdGVnb3J5fS9wb3N0LyR7YXJ0aWNsZS5pZH1gKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUltZ0Vycm9yID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAoZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YXJ0aWNsZSAmJiAoXHJcbiAgICAgICAgPGFydGljbGUgb25DbGljaz17b25DbGlja0FydGljbGV9IGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9hc2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMC41cmVtXCIsIHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2ltZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTUwcHhcIiwgYm9yZGVyOiBcIjAuM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKVwiIH19XHJcbiAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUltZ0Vycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQkxVRV9DT0xPUixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJTiB7YXJ0aWNsZS5jYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGljbGVfbWRfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAge3R5cGUgPT09IFwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgPyBhcnRpY2xlPy5Db21tZW50cz8ubGVuZ3RoICsgXCIgQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSBcImxpa2VcIlxyXG4gICAgICAgICAgICAgICAgPyBhcnRpY2xlPy5Qb3N0TGlrZXJzPy5sZW5ndGggKyBcIiBMaWtlc1wiXHJcbiAgICAgICAgICAgICAgICA6IGFydGljbGUuaGl0ICsgXCIgdmlld3NcIn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMC41cmVtIDAgMC44cmVtIDBcIiwgaGVpZ2h0OiBcIjEuNXJlbVwiLCBsaW5lSGVpZ2h0OiBcIjEuNVwiIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9hc2lkZV9oZWFkZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgJm5ic3A7YWdvXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlld1wiPlxyXG4gICAgICAgICAgICAgICAgwrdcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt0eXBlID09PSBcInZpZXdcIiA/IHsgY29sb3I6IEJMVUVfQ09MT1IsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH0gOiB7fX0+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO3thcnRpY2xlLmhpdH0gdmlld3NcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgwrdcclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt0eXBlID09PSBcInZpZXdcIiA/IHt9IDogeyBjb2xvcjogQkxVRV9DT0xPUiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlPy5Db21tZW50cz8ubGVuZ3RoICsgXCIgQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogYXJ0aWNsZT8uUG9zdExpa2Vycz8ubGVuZ3RoICsgXCIgTGlrZXNcIn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVBc2lkZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgeyBCTFVFX0NPTE9SIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQXJ0aWNsZVNtYWxsQXNpZGU6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthcnRpY2xlICYmIChcclxuICAgICAgICA8QXJ0aWNsZVxyXG4gICAgICAgICAgb25DbGljaz17b25DbGlja0FydGljbGV9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlIGFydGljbGVfYXNpZGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19zbWFsbF9hc2lkZV90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQkxVRV9DT0xPUixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIElOIHthcnRpY2xlLmNhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aWNsZV9tZF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICA/IGFydGljbGUuQ29tbWVudHM/Lmxlbmd0aCArIFwiIENvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJsaWtlXCJcclxuICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5Qb3N0TGlrZXJzPy5sZW5ndGggKyBcIiBMaWtlc1wiXHJcbiAgICAgICAgICAgICAgICA6IGFydGljbGUuaGl0ICsgXCIgdmlld3NcIn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fSBjbGFzc05hbWU9XCJhcnRpY2xlX2FzaWRlX2hlYWRlciBzbWFsbF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcnRpY2xlPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVTbWFsbEFzaWRlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgQXNpZGVIYXNodGFncywgUG9zdEludGVyIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9AcmVkdWNlclR5cGVzXCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGxBc2lkZSBmcm9tIFwiLi9BcnRpY2xlU21hbGxBc2lkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZUFzaWRlIGZyb20gXCIuL0FydGljbGVBc2lkZVwiO1xyXG5cclxuY29uc3QgVGl0bGVTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgaXNCb3R0b21NYXJnaW4gPSAoYXNpZGU6IEJvb2xlYW4pID0+IGNzc2BcclxuICAke2FzaWRlID8gXCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiIDogbnVsbH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNb3N0QXJ0aWNsZVByb3BzIHtcclxuICBtb3N0UG9zdD86IFBvc3RJbnRlcjtcclxuICBzcmM6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZ3M/OiBBc2lkZUhhc2h0YWdzW107XHJcbiAgYXNpZGU/OiBCb29sZWFuO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1vc3RBcnRpY2xlOiBGQzxNb3N0QXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgbW9zdFBvc3QsIHNyYywgZGVzYywgaGFzaHRhZ3MsIGFzaWRlLCB0eXBlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2lzQm90dG9tTWFyZ2luKGFzaWRlKX0+XHJcbiAgICAgIDxoMyBjc3M9e1RpdGxlU3R5bGV9PlxyXG4gICAgICAgIDxpbWcgYWx0PVwidHJvcGh5XCIgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17c3JjfSAvPlxyXG4gICAgICAgIHtkZXNjfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7aGFzaHRhZ3MgPyAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2dfYXNpZGVfdGFnXCI+XHJcbiAgICAgICAgICB7aGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgaGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT4je3YubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKSA6IGFzaWRlID8gKFxyXG4gICAgICAgIDxBcnRpY2xlQXNpZGUgdHlwZT17dHlwZX0gYXJ0aWNsZT17bW9zdFBvc3R9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFydGljbGVTbWFsbEFzaWRlIHR5cGU9e3R5cGV9IGFydGljbGU9e21vc3RQb3N0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1vc3RBcnRpY2xlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==