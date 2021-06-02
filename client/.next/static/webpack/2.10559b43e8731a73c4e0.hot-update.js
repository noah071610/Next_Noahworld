webpackHotUpdate_N_E(2,{

/***/ "./components/Blog/Articles/ArticleColumn.tsx":
/*!****************************************************!*\
  !*** ./components/Blog/Articles/ArticleColumn.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleColumn.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

var ArticleColumn = function ArticleColumn(_ref) {
  _s();

  var _article$content;

  var article = _ref.article,
      nocontent = _ref.nocontent;
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var onClickArticle = function onClickArticle(e) {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push("/".concat(article.category, "/post/").concat(article.id));
  };

  var contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  var handleImgError = function handleImgError(e) {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_column",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, article === null || article === void 0 ? void 0 : article.HashTags.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/hashtag/".concat(v.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
      className: "hashtag",
      onClick: function onClick() {
        return window.scrollTo({
          top: 0
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 27
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, contentWithoutHTML))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: article !== null && article !== void 0 && article.HashTags ? {
      marginTop: "1rem"
    } : {
      marginTop: "1.7rem"
    },
    className: "article_footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes"))));
};

_s(ArticleColumn, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ArticleColumn;
/* harmony default export */ __webpack_exports__["default"] = (ArticleColumn);

var _c;

$RefreshReg$(_c, "ArticleColumn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVDb2x1bW4udHN4Il0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwicmVsYXRpdmVUaW1lIiwibG9jYWxlIiwiQXJ0aWNsZUNvbHVtbiIsImFydGljbGUiLCJub2NvbnRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrQXJ0aWNsZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwiY29udGVudFdpdGhvdXRIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsIkhhc2hUYWdzIiwibWFwIiwidiIsImkiLCJuYW1lIiwibWFyZ2luIiwiV2Via2l0TGluZUNsYW1wIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwidG8iLCJjcmVhdGVkQXQiLCJoaXQiLCJQb3N0TGlrZXJzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyxnRUFBYjtBQUNBRiw0Q0FBSyxDQUFDRyxNQUFOLENBQWEsS0FBYjs7QUFFQSxJQUFNQyxhQUErQixHQUFHLFNBQWxDQSxhQUFrQyxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2xFLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFE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QUFBQSxpQkFBWXRDLE9BQU8sQ0FBQ3VDLFVBQVIsSUFBc0J2QyxPQUFPLENBQUN1QyxVQUFSLENBQW1CQyxNQUFyRCxXQVRGLENBNURGLENBRkosQ0FERjtBQThFRCxDQTlGRDs7R0FBTXpDLGE7VUFDV0ksaUU7OztLQURYSixhO0FBZ0dTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8yLjEwNTU5YjQzZTg3MzFhNzNjNGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlSW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGVDb2x1bW46IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlLCBub2NvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICBjb25zdCBjb250ZW50V2l0aG91dEhUTUwgPSBhcnRpY2xlPy5jb250ZW50XHJcbiAgICA/LnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoLygjeW91dHViZTouKikvZywgXCIoWW91dHViZSBWaWRlbyBMaW5rKVwiKVxyXG4gICAgLnJlcGxhY2UoLyYuKjsvZ2ksIFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltZ0Vycm9yID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAoZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YXJ0aWNsZSAmJiAoXHJcbiAgICAgICAgPGFydGljbGUgb25DbGljaz17b25DbGlja0FydGljbGV9IGNsYXNzTmFtZT1cImFydGljbGUgYXJ0aWNsZV9jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiwgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXtub2NvbnRlbnQgPyB7IGhlaWdodDogXCIxNDBweFwiIH0gOiB7fX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2ltZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlPy50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA6IGFydGljbGUuaW1hZ2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZVBhdGgucmVwbGFjZSgvXFwvdGh1bWJcXC8vLCBcIi9vcmlnaW5hbC9cIilcclxuICAgICAgICAgICAgICAgICAgOiBcIi9pbWFnZXMvYmxvZy9ub0ltYWdlLmdpZlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUltZ0Vycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiB9fSBjbGFzc05hbWU9XCJhcnRpY2xlX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB7bm9jb250ZW50ID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlPy5IYXNoVGFncy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoYXNodGFnXCIgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT8uSGFzaFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUuMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2LjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Rlc2NcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgc3R5bGU9e2FydGljbGU/Lkhhc2hUYWdzID8geyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH0gOiB7IG1hcmdpblRvcDogXCIxLjdyZW1cIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAgICZuYnNwO2Fnb1xyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5oaXR9IHZpZXdzPC9saT5cclxuICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuUG9zdExpa2VycyAmJiBhcnRpY2xlLlBvc3RMaWtlcnMubGVuZ3RofSBMaWtlczwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9