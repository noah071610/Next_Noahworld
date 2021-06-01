exports.ids = [1];
exports.modules = {

/***/ "./components/Blog/Articles/ArticleColumn.tsx":
/*!****************************************************!*\
  !*** ./components/Blog/Articles/ArticleColumn.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleColumn.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

const ArticleColumn = ({
  article,
  nocontent
}) => {
  var _article$content;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  const contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      marginBottom: "1rem",
      width: "100%",
      overflow: "hidden"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    style: nocontent ? {
      height: "140px"
    } : {},
    className: "article_img",
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    style: {
      height: "auto"
    },
    className: "article_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, article.HashTags && article.HashTags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/hashtag/${v.name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 27
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
      className: "hashtag",
      onClick: () => window.scrollTo({
        top: 0
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, "#", v.name)));
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    style: article !== null && article !== void 0 && article.HashTags ? {
      margin: 0,
      WebkitLineClamp: 4,
      height: "5.1rem",
      lineHeight: "1.7",
      fontSize: "0.8rem"
    } : {
      height: "6.5rem",
      WebkitLineClamp: 5,
      marginBottom: "1.5rem",
      lineHeight: "1.7",
      fontSize: "0.8rem"
    },
    className: "article_desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, contentWithoutHTML))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: article !== null && article !== void 0 && article.HashTags ? {
      marginTop: "1rem"
    } : {
      marginTop: "1.7rem"
    },
    className: "article_footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleColumn);

/***/ }),

/***/ "./components/Blog/Articles/ArticleRow.tsx":
/*!*************************************************!*\
  !*** ./components/Blog/Articles/ArticleRow.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleRow.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */







dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const ArticleRow = ({
  article
}) => {
  var _article$content;

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

  const contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      width: "60%",
      marginRight: "3rem",
      overflow: "hidden"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    className: "article_img",
    style: {
      width: "100%",
      height: "300px",
      border: "0.3px solid rgba(0,0,0,0.1)"
    },
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "article_contents",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      height: "auto"
    },
    className: "article_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    className: "article_tag",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, article.HashTags && article.HashTags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/hashtag/${v.name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
      className: "hashtag",
      onClick: () => window.scrollTo({
        top: 0
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "#", v.name)));
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    style: {
      width: "100%",
      height: "7.2rem",
      overflow: "hidden",
      lineHeight: "1.7",
      fontSize: "0.9rem",
      margin: 0,
      WebkitLineClamp: 5
    },
    className: "article_desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, contentWithoutHTML), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    style: {
      marginTop: "1rem"
    },
    className: "article_footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_4__["BLUE_COLOR"],
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleRow);

/***/ }),

/***/ "./components/Blog/Articles/ArticleSmall.tsx":
/*!***************************************************!*\
  !*** ./components/Blog/Articles/ArticleSmall.tsx ***!
  \***************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleSmall.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const Article = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("article", false ? undefined : {
  target: "e9qef4u0",
  label: "Article"
})(false ? undefined : {
  name: "khknaa",
  styles: "width:100%;padding:1rem;border-top:1px solid rgba(0, 0, 0, 0.1);align-items:center;transition:all 0.3s;cursor:pointer;img{transition:all 0.3s;}p{color:black;}&:hover{background-color:rgba(0, 0, 0, 0.1);img{transform:scale(1.05);}p{color:black;text-decoration:underline;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlU21hbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVM4QiIsImZpbGUiOiJDOlxcVXNlcnNcXE5vYWhcXERlc2t0b3BcXFByb2plY3RcXE5vYWh3b3JsZFxcY2xpZW50XFxjb21wb25lbnRzXFxCbG9nXFxBcnRpY2xlc1xcQXJ0aWNsZVNtYWxsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBpbWcge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNtYWxsOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlSW1nRXJyb3IgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIChlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcnRpY2xlXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJibG9nX21haW5fc21hbGxcIlxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTEwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiB9fVxyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAwLjVyZW0gMXJlbVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PnthcnRpY2xlLnRpdGxlfSA8L3A+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgMCAxcmVtXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9mb290ZXJcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAge2RheWpzKCkudG8oZGF5anMoYXJ0aWNsZS5jcmVhdGVkQXQpLCB0cnVlKX1cclxuICAgICAgICAgICAgJm5ic3A7YWdvXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuaGl0fSB2aWV3czwvbGk+XHJcbiAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5Qb3N0TGlrZXJzICYmIGFydGljbGUuUG9zdExpa2Vycy5sZW5ndGh9IExpa2VzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ArticleSmall = ({
  article
}) => {
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Article, {
    onClick: () => {
      router.push(`/${article.category}/post/${article.id}`);
      window.scrollTo({
        top: 0
      });
    },
    className: "blog_main_small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    style: {
      width: "110px",
      height: "80px"
    },
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    alt: "thumbnail",
    onError: handleImgError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    style: {
      margin: "0 0 0.5rem 1rem",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, article.title, " "), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      margin: "0 0 0 1rem"
    },
    className: "article_footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleSmall);

/***/ }),

/***/ "./components/Blog/Articles/MainArticle.tsx":
/*!**************************************************!*\
  !*** ./components/Blog/Articles/MainArticle.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticleColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleColumn */ "./components/Blog/Articles/ArticleColumn.tsx");
/* harmony import */ var _ArticleRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleRow */ "./components/Blog/Articles/ArticleRow.tsx");
/* harmony import */ var _ArticleSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArticleSmall */ "./components/Blog/Articles/ArticleSmall.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\MainArticle.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};
const smallSizeSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const MainArticle = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({
  category
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_category_big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    article: category[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_category_medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    article: category[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_category_small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, smallSizeSettings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), category.slice(0, 3).map((article, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      article: article,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 20
      }
    });
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "blog_main_big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), category.slice(1, 8).map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    article: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), category.slice(3, 8).map((article, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleSmall__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      article: article,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }
    });
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(MainArticle));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQXJ0aWNsZXMvQXJ0aWNsZUNvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVSb3cudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9BcnRpY2xlcy9BcnRpY2xlU21hbGwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmxvZy9BcnRpY2xlcy9NYWluQXJ0aWNsZS50c3giXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJyZWxhdGl2ZVRpbWUiLCJsb2NhbGUiLCJBcnRpY2xlQ29sdW1uIiwiYXJ0aWNsZSIsIm5vY29udGVudCIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tBcnRpY2xlIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwicHVzaCIsImNhdGVnb3J5IiwiaWQiLCJjb250ZW50V2l0aG91dEhUTUwiLCJjb250ZW50IiwicmVwbGFjZSIsImhhbmRsZUltZ0Vycm9yIiwic3JjIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJvdmVyZmxvdyIsImhlaWdodCIsInRpdGxlIiwidGh1bWJuYWlsIiwiaW1hZ2VQYXRoIiwiSGFzaFRhZ3MiLCJtYXAiLCJ2IiwiaSIsIm5hbWUiLCJtYXJnaW4iLCJXZWJraXRMaW5lQ2xhbXAiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJ0byIsImNyZWF0ZWRBdCIsImhpdCIsIlBvc3RMaWtlcnMiLCJsZW5ndGgiLCJBcnRpY2xlUm93IiwibWFyZ2luUmlnaHQiLCJib3JkZXIiLCJjb2xvciIsIkJMVUVfQ09MT1IiLCJmb250V2VpZ2h0IiwiQXJ0aWNsZSIsIkFydGljbGVTbWFsbCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNtYWxsU2l6ZVNldHRpbmdzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiTWFpbkFydGljbGUiLCJtZW1vIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLGdFQUFiO0FBQ0FGLDRDQUFLLENBQUNHLE1BQU4sQ0FBYSxLQUFiOztBQUVBLE1BQU1DLGFBQStCLEdBQUcsQ0FBQztBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBRCxLQUE0QjtBQUFBOztBQUNsRSxRQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCOztBQUNBLFFBQU1DLGNBQWMsR0FBSUMsQ0FBRCxJQUF5QjtBQUM5QyxRQUFLQSxDQUFDLENBQUNDLE1BQUgsQ0FBc0JDLFNBQXRCLEtBQW9DLFNBQXhDLEVBQW1EO0FBQ2pEO0FBQ0Q7O0FBQ0RDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFoQjtBQUNBUixVQUFNLENBQUNTLElBQVAsQ0FBYSxJQUFHWCxPQUFPLENBQUNZLFFBQVMsU0FBUVosT0FBTyxDQUFDYSxFQUFHLEVBQXBEO0FBQ0QsR0FORDs7QUFPQSxRQUFNQyxrQkFBa0IsR0FBR2QsT0FBSCxhQUFHQSxPQUFILDJDQUFHQSxPQUFPLENBQUVlLE9BQVoscURBQUcsaUJBQ3ZCQyxPQUR1QixDQUNmLGVBRGUsRUFDRSxFQURGLEVBRXhCQSxPQUZ3QixDQUVoQixnQkFGZ0IsRUFFRSxzQkFGRixFQUd4QkEsT0FId0IsQ0FHaEIsUUFIZ0IsRUFHTixFQUhNLENBQTNCOztBQUlBLFFBQU1DLGNBQWMsR0FBSVosQ0FBRCxJQUE2QjtBQUNqREEsS0FBQyxDQUFDQyxNQUFILENBQStCWSxHQUEvQixHQUFxQywwQkFBckM7QUFDRCxHQUZEOztBQUdBLFNBQ0Usd0hBQ0dsQixPQUFPLElBQ047QUFBUyxXQUFPLEVBQUVJLGNBQWxCO0FBQWtDLGFBQVMsRUFBQyx3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LEVBQXFCakMsR0FBckIsQ0FBeUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQ3hCLDJEQUFDLHNEQUFEO0FBQWUsT0FBRyxFQUFFQSxDQUFwQjtBQUF1QixXQUFPLEVBQUVELENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBRkYsQ0FkRixFQXNCR2hCLFFBQVEsQ0FBQ2dELEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCakMsR0FBckIsQ0FBeUIsQ0FBQzNCLE9BQUQsRUFBVTZCLENBQVYsS0FBZ0I7QUFDeEMsV0FBTywyREFBQyxxREFBRDtBQUFjLFNBQUcsRUFBRUEsQ0FBbkI7QUFBc0IsYUFBTyxFQUFFN0IsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGQSxDQXRCSCxDQURGO0FBNEJELENBN0I2QyxDQUE5QztBQStCZTJELDhIQUFJLENBQUNELFdBQUQsQ0FBbkIsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5kYXlqcy5sb2NhbGUoXCJrb3JcIik7XHJcblxyXG5jb25zdCBBcnRpY2xlQ29sdW1uOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSwgbm9jb250ZW50IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgY29udGVudFdpdGhvdXRIVE1MID0gYXJ0aWNsZT8uY29udGVudFxyXG4gICAgPy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcclxuICAgIC5yZXBsYWNlKC8oI3lvdXR1YmU6LiopL2csIFwiKFlvdXR1YmUgVmlkZW8gTGluaylcIilcclxuICAgIC5yZXBsYWNlKC8mLio7L2dpLCBcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxhcnRpY2xlIG9uQ2xpY2s9e29uQ2xpY2tBcnRpY2xlfSBjbGFzc05hbWU9XCJhcnRpY2xlIGFydGljbGVfY29sdW1uXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsIHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17bm9jb250ZW50ID8geyBoZWlnaHQ6IFwiMTQwcHhcIiB9IDoge319XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9pbWdcIlxyXG4gICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZT8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgOiBhcnRpY2xlLmltYWdlUGF0aFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUuaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGhlaWdodDogXCJhdXRvXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAge25vY29udGVudCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5IYXNoVGFncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuSGFzaFRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2Lm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoYXNodGFnXCIgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT8uSGFzaFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUuMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2LjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Rlc2NcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgc3R5bGU9e2FydGljbGU/Lkhhc2hUYWdzID8geyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH0gOiB7IG1hcmdpblRvcDogXCIxLjdyZW1cIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAgICZuYnNwO2Fnb1xyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5oaXR9IHZpZXdzPC9saT5cclxuICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuUG9zdExpa2VycyAmJiBhcnRpY2xlLlBvc3RMaWtlcnMubGVuZ3RofSBMaWtlczwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29sdW1uO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGVSb3c6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgY29udGVudFdpdGhvdXRIVE1MID0gYXJ0aWNsZT8uY29udGVudFxyXG4gICAgPy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcclxuICAgIC5yZXBsYWNlKC8oI3lvdXR1YmU6LiopL2csIFwiKFlvdXR1YmUgVmlkZW8gTGluaylcIilcclxuICAgIC5yZXBsYWNlKC8mLio7L2dpLCBcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxhcnRpY2xlIG9uQ2xpY2s9e29uQ2xpY2tBcnRpY2xlfSBjbGFzc05hbWU9XCJhcnRpY2xlIGFydGljbGVfcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtYXJnaW5SaWdodDogXCIzcmVtXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9pbWdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwMHB4XCIsIGJvcmRlcjogXCIwLjNweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSlcIiB9fVxyXG4gICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZT8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgOiBhcnRpY2xlLmltYWdlUGF0aFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUuaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19IGNsYXNzTmFtZT1cImFydGljbGVfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfdGFnXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuSGFzaFRhZ3MgJiZcclxuICAgICAgICAgICAgICAgIGFydGljbGUuSGFzaFRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2Lm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhhc2h0YWdcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICN7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNy4ycmVtXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIFdlYmtpdExpbmVDbGFtcDogNSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfZGVzY1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGNvbG9yOiBCTFVFX0NPTE9SLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtkYXlqcygpLnRvKGRheWpzKGFydGljbGUuY3JlYXRlZEF0KSwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDthZ29cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLlBvc3RMaWtlcnMgJiYgYXJ0aWNsZS5Qb3N0TGlrZXJzLmxlbmd0aH0gTGlrZXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVSb3c7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBpbWcge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNtYWxsOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlSW1nRXJyb3IgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIChlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcnRpY2xlXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJibG9nX21haW5fc21hbGxcIlxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTEwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiB9fVxyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAwLjVyZW0gMXJlbVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PnthcnRpY2xlLnRpdGxlfSA8L3A+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgMCAxcmVtXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9mb290ZXJcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAge2RheWpzKCkudG8oZGF5anMoYXJ0aWNsZS5jcmVhdGVkQXQpLCB0cnVlKX1cclxuICAgICAgICAgICAgJm5ic3A7YWdvXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuaGl0fSB2aWV3czwvbGk+XHJcbiAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5Qb3N0TGlrZXJzICYmIGFydGljbGUuUG9zdExpa2Vycy5sZW5ndGh9IExpa2VzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsO1xyXG4iLCJpbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcnRpY2xlQ29sdW1uIGZyb20gXCIuL0FydGljbGVDb2x1bW5cIjtcclxuaW1wb3J0IEFydGljbGVSb3cgZnJvbSBcIi4vQXJ0aWNsZVJvd1wiO1xyXG5pbXBvcnQgQXJ0aWNsZVNtYWxsIGZyb20gXCIuL0FydGljbGVTbWFsbFwiO1xyXG5pbXBvcnQgeyBQb3N0SW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL0ByZWR1Y2VyVHlwZXNcIjtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNwZWVkOiA1MDAsXHJcbiAgc2xpZGVzVG9TaG93OiAyLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG59O1xyXG5jb25zdCBzbWFsbFNpemVTZXR0aW5ncyA9IHtcclxuICBkb3RzOiBmYWxzZSxcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gIHNwZWVkOiA1MDAsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG59O1xyXG5cclxuaW50ZXJmYWNlIE1haW5BcnRpY2xlUHJvcHMge1xyXG4gIGNhdGVnb3J5OiBBcnJheTxQb3N0SW50ZXI+O1xyXG59XHJcblxyXG5jb25zdCBNYWluQXJ0aWNsZTogRkM8TWFpbkFydGljbGVQcm9wcz4gPSBtZW1vKCh7IGNhdGVnb3J5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X2JpZ1wiPlxyXG4gICAgICAgIDxBcnRpY2xlUm93IGFydGljbGU9e2NhdGVnb3J5WzBdfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X21lZGl1bVwiPlxyXG4gICAgICAgIDxBcnRpY2xlQ29sdW1uIGFydGljbGU9e2NhdGVnb3J5WzBdfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2NhdGVnb3J5X3NtYWxsXCI+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc21hbGxTaXplU2V0dGluZ3N9PlxyXG4gICAgICAgICAge2NhdGVnb3J5LnNsaWNlKDAsIDMpLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEFydGljbGVDb2x1bW4ga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX21haW5fYmlnXCI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkuc2xpY2UoMSwgOCkubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpY2xlQ29sdW1uIGtleT17aX0gYXJ0aWNsZT17dn0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NhdGVnb3J5LnNsaWNlKDMsIDgpLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8QXJ0aWNsZVNtYWxsIGtleT17aX0gYXJ0aWNsZT17YXJ0aWNsZX0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1haW5BcnRpY2xlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==