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

  var _article$content, _article$Hashtags;

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
      lineNumber: 31,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, article === null || article === void 0 ? void 0 : (_article$Hashtags = article.Hashtags) === null || _article$Hashtags === void 0 ? void 0 : _article$Hashtags.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/hashtag/".concat(v.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVDb2x1bW4udHN4Il0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwicmVsYXRpdmVUaW1lIiwibG9jYWxlIiwiQXJ0aWNsZUNvbHVtbiIsImFydGljbGUiLCJub2NvbnRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrQXJ0aWNsZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwiY29udGVudFdpdGhvdXRIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsIkhhc2h0YWdzIiwibWFwIiwidiIsImkiLCJuYW1lIiwibWFyZ2luIiwiV2Via2l0TGluZUNsYW1wIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwidG8iLCJjcmVhdGVkQXQiLCJoaXQiLCJQb3N0TGlrZXJzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyxnRUFBYjtBQUNBRiw0Q0FBSyxDQUFDRyxNQUFOLENBQWEsS0FBYjs7QUFFQSxJQUFNQyxhQUErQixHQUFHLFNBQWxDQSxhQUFrQyxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2xFLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFE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QTtBQUFBO0FBQUEsaUJBQVl0QyxPQUFPLENBQUN1QyxVQUFSLElBQXNCdkMsT0FBTyxDQUFDdUMsVUFBUixDQUFtQkMsTUFBckQsV0FURixDQTVERixDQUZKLENBREY7QUE4RUQsQ0EvRkQ7O0dBQU16QyxhO1VBQ1dJLGlFOzs7S0FEWEosYTtBQWlHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMi5iM2U4NjNiNTNmYjExNjY5ZTE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5kYXlqcy5sb2NhbGUoXCJrb3JcIik7XHJcblxyXG5jb25zdCBBcnRpY2xlQ29sdW1uOiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSwgbm9jb250ZW50IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgY29udGVudFdpdGhvdXRIVE1MID0gYXJ0aWNsZT8uY29udGVudFxyXG4gICAgPy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcclxuICAgIC5yZXBsYWNlKC8oI3lvdXR1YmU6LiopL2csIFwiKFlvdXR1YmUgVmlkZW8gTGluaylcIilcclxuICAgIC5yZXBsYWNlKC8mLio7L2dpLCBcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthcnRpY2xlICYmIChcclxuICAgICAgICA8YXJ0aWNsZSBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX0gY2xhc3NOYW1lPVwiYXJ0aWNsZSBhcnRpY2xlX2NvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLCB3aWR0aDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e25vY29udGVudCA/IHsgaGVpZ2h0OiBcIjE0MHB4XCIgfSA6IHt9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfaW1nXCJcclxuICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIGFydGljbGU/LnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUudGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5pbWFnZVBhdGhcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLmltYWdlUGF0aC5yZXBsYWNlKC9cXC90aHVtYlxcLy8sIFwiL29yaWdpbmFsL1wiKVxyXG4gICAgICAgICAgICAgICAgICA6IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19IGNsYXNzTmFtZT1cImFydGljbGVfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHtub2NvbnRlbnQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2FydGljbGU/Lkhhc2h0YWdzPy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoYXNodGFnXCIgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT8uSGFzaHRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUuMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2LjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Rlc2NcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgc3R5bGU9e2FydGljbGU/Lkhhc2h0YWdzID8geyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH0gOiB7IG1hcmdpblRvcDogXCIxLjdyZW1cIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAgICZuYnNwO2Fnb1xyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5oaXR9IHZpZXdzPC9saT5cclxuICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuUG9zdExpa2VycyAmJiBhcnRpY2xlLlBvc3RMaWtlcnMubGVuZ3RofSBMaWtlczwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9