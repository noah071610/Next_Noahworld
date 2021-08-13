exports.ids = [1];
exports.modules = {

/***/ "./components/Articles/ArticleColumn.tsx":
/*!***********************************************!*\
  !*** ./components/Articles/ArticleColumn.tsx ***!
  \***********************************************/
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
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\ArticleColumn.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

const ArticleColumn = ({
  article,
  nocontent
}) => {
  var _article$content, _article$Hashtags;

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
      lineNumber: 31,
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
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 13
    }
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, article === null || article === void 0 ? void 0 : (_article$Hashtags = article.Hashtags) === null || _article$Hashtags === void 0 ? void 0 : _article$Hashtags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/hashtag/${v.name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
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
        columnNumber: 27
      }
    }, "#", v.name)));
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    style: article !== null && article !== void 0 && article.Hashtags ? {
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
    style: article !== null && article !== void 0 && article.Hashtags ? {
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

/***/ "./components/Articles/ArticleRow.tsx":
/*!********************************************!*\
  !*** ./components/Articles/ArticleRow.tsx ***!
  \********************************************/
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\ArticleRow.tsx";

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
  }, article.Hashtags && article.Hashtags.map((v, i) => {
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

/***/ "./components/Articles/ArticleSmall.tsx":
/*!**********************************************!*\
  !*** ./components/Articles/ArticleSmall.tsx ***!
  \**********************************************/
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

var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\ArticleSmall.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const Article = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("article", false ? undefined : {
  target: "en88k9h0",
  label: "Article"
})(false ? undefined : {
  name: "khknaa",
  styles: "width:100%;padding:1rem;border-top:1px solid rgba(0, 0, 0, 0.1);align-items:center;transition:all 0.3s;cursor:pointer;img{transition:all 0.3s;}p{color:black;}&:hover{background-color:rgba(0, 0, 0, 0.1);img{transform:scale(1.05);}p{color:black;text-decoration:underline;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEFydGljbGVzXFxBcnRpY2xlU21hbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVM4QiIsImZpbGUiOiJDOlxcVXNlcnNcXE5vYWhcXERlc2t0b3BcXFByb2plY3RcXE5vYWh3b3JsZFxcY2xpZW50XFxjb21wb25lbnRzXFxBcnRpY2xlc1xcQXJ0aWNsZVNtYWxsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBpbWcge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNtYWxsOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlSW1nRXJyb3IgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIChlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcnRpY2xlXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJibG9nX21haW5fc21hbGxcIlxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTEwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiB9fVxyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsdD1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAwLjVyZW0gMXJlbVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PnthcnRpY2xlLnRpdGxlfSA8L3A+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAgMCAxcmVtXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9mb290ZXJcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAge2RheWpzKCkudG8oZGF5anMoYXJ0aWNsZS5jcmVhdGVkQXQpLCB0cnVlKX1cclxuICAgICAgICAgICAgJm5ic3A7YWdvXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuaGl0fSB2aWV3czwvbGk+XHJcbiAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5Qb3N0TGlrZXJzICYmIGFydGljbGUuUG9zdExpa2Vycy5sZW5ndGh9IExpa2VzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVNtYWxsO1xyXG4iXX0= */",
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

/***/ "./components/Articles/MainArticle.tsx":
/*!*********************************************!*\
  !*** ./components/Articles/MainArticle.tsx ***!
  \*********************************************/
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
/* harmony import */ var _ArticleColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleColumn */ "./components/Articles/ArticleColumn.tsx");
/* harmony import */ var _ArticleRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleRow */ "./components/Articles/ArticleRow.tsx");
/* harmony import */ var _ArticleSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArticleSmall */ "./components/Articles/ArticleSmall.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Articles\\MainArticle.tsx";

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
  }), category === null || category === void 0 ? void 0 : category.slice(0, 3).map((article, i) => {
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
  }), category === null || category === void 0 ? void 0 : category.slice(1, 8).map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ArticleColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    article: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), category === null || category === void 0 ? void 0 : category.slice(3, 8).map((article, i) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGVzL0FydGljbGVDb2x1bW4udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJ0aWNsZXMvQXJ0aWNsZVJvdy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcnRpY2xlcy9BcnRpY2xlU21hbGwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJ0aWNsZXMvTWFpbkFydGljbGUudHN4Il0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwicmVsYXRpdmVUaW1lIiwibG9jYWxlIiwiQXJ0aWNsZUNvbHVtbiIsImFydGljbGUiLCJub2NvbnRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrQXJ0aWNsZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwiY29udGVudFdpdGhvdXRIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsIkhhc2h0YWdzIiwibWFwIiwidiIsImkiLCJuYW1lIiwibWFyZ2luIiwiV2Via2l0TGluZUNsYW1wIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwidG8iLCJjcmVhdGVkQXQiLCJoaXQiLCJQb3N0TGlrZXJzIiwibGVuZ3RoIiwiQXJ0aWNsZVJvdyIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyIiwiY29sb3IiLCJCTFVFX0NPTE9SIiwiZm9udFdlaWdodCIsIkFydGljbGUiLCJBcnRpY2xlU21hbGwiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzbWFsbFNpemVTZXR0aW5ncyIsImF1dG9w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LENBQUVnRCxLQUFWLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCakMsR0FBdEIsQ0FBMEIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQ3pCLDJEQUFDLHNEQUFEO0FBQWUsT0FBRyxFQUFFQSxDQUFwQjtBQUF1QixXQUFPLEVBQUVELENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBRkYsQ0FkRixFQXNCR2hCLFFBdEJILGFBc0JHQSxRQXRCSCx1QkFzQkdBLFFBQVEsQ0FBRWdELEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JqQyxHQUF0QixDQUEwQixDQUFDM0IsT0FBRCxFQUFVNkIsQ0FBVixLQUFnQjtBQUN6QyxXQUFPLDJEQUFDLHFEQUFEO0FBQWMsU0FBRyxFQUFFQSxDQUFuQjtBQUFzQixhQUFPLEVBQUU3QixPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZBLENBdEJILENBREY7QUE0QkQsQ0E3QjZDLENBQTlDO0FBK0JlMkQsOEhBQUksQ0FBQ0QsV0FBRCxDQUFuQixFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlSW50ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGVDb2x1bW46IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlLCBub2NvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICBjb25zdCBjb250ZW50V2l0aG91dEhUTUwgPSBhcnRpY2xlPy5jb250ZW50XHJcbiAgICA/LnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoLygjeW91dHViZTouKikvZywgXCIoWW91dHViZSBWaWRlbyBMaW5rKVwiKVxyXG4gICAgLnJlcGxhY2UoLyYuKjsvZ2ksIFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltZ0Vycm9yID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAoZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxhcnRpY2xlIG9uQ2xpY2s9e29uQ2xpY2tBcnRpY2xlfSBjbGFzc05hbWU9XCJhcnRpY2xlIGFydGljbGVfY29sdW1uXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsIHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17bm9jb250ZW50ID8geyBoZWlnaHQ6IFwiMTQwcHhcIiB9IDoge319XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9pbWdcIlxyXG4gICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZT8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgOiBhcnRpY2xlLmltYWdlUGF0aFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUuaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGhlaWdodDogXCJhdXRvXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAge25vY29udGVudCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7YXJ0aWNsZT8uSGFzaHRhZ3M/Lm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhhc2h0YWdcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPy5IYXNodGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdlYmtpdExpbmVDbGFtcDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNS4xcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdlYmtpdExpbmVDbGFtcDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfZGVzY1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjb250ZW50V2l0aG91dEhUTUx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICBzdHlsZT17YXJ0aWNsZT8uSGFzaHRhZ3MgPyB7IG1hcmdpblRvcDogXCIxcmVtXCIgfSA6IHsgbWFyZ2luVG9wOiBcIjEuN3JlbVwiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfZm9vdGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIHtkYXlqcygpLnRvKGRheWpzKGFydGljbGUuY3JlYXRlZEF0KSwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgJm5ic3A7YWdvXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5Qb3N0TGlrZXJzICYmIGFydGljbGUuUG9zdExpa2Vycy5sZW5ndGh9IExpa2VzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVDb2x1bW47XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQkxVRV9DT0xPUiB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZVJvdzogRkM8QXJ0aWNsZUludGVyPiA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICBjb25zdCBjb250ZW50V2l0aG91dEhUTUwgPSBhcnRpY2xlPy5jb250ZW50XHJcbiAgICA/LnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoLygjeW91dHViZTouKikvZywgXCIoWW91dHViZSBWaWRlbyBMaW5rKVwiKVxyXG4gICAgLnJlcGxhY2UoLyYuKjsvZ2ksIFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltZ0Vycm9yID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAoZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YXJ0aWNsZSAmJiAoXHJcbiAgICAgICAgPGFydGljbGUgb25DbGljaz17b25DbGlja0FydGljbGV9IGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9yb3dcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1hcmdpblJpZ2h0OiBcIjNyZW1cIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2ltZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzAwcHhcIiwgYm9yZGVyOiBcIjAuM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKVwiIH19XHJcbiAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUltZ0Vycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfY29udGVudHNcIj5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGhlaWdodDogXCJhdXRvXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV90YWdcIj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5IYXNodGFncyAmJlxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5IYXNodGFncy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGFzaHRhZ1wiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI3t2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI3LjJyZW1cIixcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjdcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgV2Via2l0TGluZUNsYW1wOiA1LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9kZXNjXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb250ZW50V2l0aG91dEhUTUx9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0gY2xhc3NOYW1lPVwiYXJ0aWNsZV9mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgY29sb3I6IEJMVUVfQ09MT1IsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2RheWpzKCkudG8oZGF5anMoYXJ0aWNsZS5jcmVhdGVkQXQpLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgICZuYnNwO2Fnb1xyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuaGl0fSB2aWV3czwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuUG9zdExpa2VycyAmJiBhcnRpY2xlLlBvc3RMaWtlcnMubGVuZ3RofSBMaWtlczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVJvdztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGltZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBcnRpY2xlU21hbGw6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFydGljbGVcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHthcnRpY2xlLmNhdGVnb3J5fS9wb3N0LyR7YXJ0aWNsZS5pZH1gKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImJsb2dfbWFpbl9zbWFsbFwiXHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMTBweFwiLCBoZWlnaHQ6IFwiODBweFwiIH19XHJcbiAgICAgICAgc3JjPXtcclxuICAgICAgICAgIGFydGljbGU/LnRodW1ibmFpbFxyXG4gICAgICAgICAgICA/IGFydGljbGUudGh1bWJuYWlsXHJcbiAgICAgICAgICAgIDogYXJ0aWNsZS5pbWFnZVBhdGhcclxuICAgICAgICAgICAgPyBhcnRpY2xlLmltYWdlUGF0aC5yZXBsYWNlKC9cXC90aHVtYlxcLy8sIFwiL29yaWdpbmFsL1wiKVxyXG4gICAgICAgICAgICA6IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcclxuICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMCAwIDAuNXJlbSAxcmVtXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+e2FydGljbGUudGl0bGV9IDwvcD5cclxuICAgICAgICA8dWwgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMCAwIDFyZW1cIiB9fSBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAmbmJzcDthZ29cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5oaXR9IHZpZXdzPC9saT5cclxuICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLlBvc3RMaWtlcnMgJiYgYXJ0aWNsZS5Qb3N0TGlrZXJzLmxlbmd0aH0gTGlrZXM8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU21hbGw7XHJcbiIsImltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFydGljbGVDb2x1bW4gZnJvbSBcIi4vQXJ0aWNsZUNvbHVtblwiO1xyXG5pbXBvcnQgQXJ0aWNsZVJvdyBmcm9tIFwiLi9BcnRpY2xlUm93XCI7XHJcbmltcG9ydCBBcnRpY2xlU21hbGwgZnJvbSBcIi4vQXJ0aWNsZVNtYWxsXCI7XHJcbmltcG9ydCB7IFBvc3RJbnRlciB9IGZyb20gXCIuLi8uLi9AcmVkdWNlcnMvQHJlZHVjZXJUeXBlc1wiO1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgZG90czogZmFsc2UsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbn07XHJcbmNvbnN0IHNtYWxsU2l6ZVNldHRpbmdzID0ge1xyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgTWFpbkFydGljbGVQcm9wcyB7XHJcbiAgY2F0ZWdvcnk6IEFycmF5PFBvc3RJbnRlcj47XHJcbn1cclxuXHJcbmNvbnN0IE1haW5BcnRpY2xlOiBGQzxNYWluQXJ0aWNsZVByb3BzPiA9IG1lbW8oKHsgY2F0ZWdvcnkgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfY2F0ZWdvcnlfYmlnXCI+XHJcbiAgICAgICAgPEFydGljbGVSb3cgYXJ0aWNsZT17Y2F0ZWdvcnlbMF19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfY2F0ZWdvcnlfbWVkaXVtXCI+XHJcbiAgICAgICAgPEFydGljbGVDb2x1bW4gYXJ0aWNsZT17Y2F0ZWdvcnlbMF19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfY2F0ZWdvcnlfc21hbGxcIj5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zbWFsbFNpemVTZXR0aW5nc30+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnk/LnNsaWNlKDAsIDMpLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEFydGljbGVDb2x1bW4ga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX21haW5fYmlnXCI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnk/LnNsaWNlKDEsIDgpLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8QXJ0aWNsZUNvbHVtbiBrZXk9e2l9IGFydGljbGU9e3Z9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjYXRlZ29yeT8uc2xpY2UoMywgOCkubWFwKChhcnRpY2xlLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxBcnRpY2xlU21hbGwga2V5PXtpfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oTWFpbkFydGljbGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9