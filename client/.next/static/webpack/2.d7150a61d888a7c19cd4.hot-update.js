webpackHotUpdate_N_E(2,{

/***/ "./components/Blog/Articles/ArticleRow.tsx":
/*!*************************************************!*\
  !*** ./components/Blog/Articles/ArticleRow.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticleRow.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable jsx-a11y/anchor-is-valid */







dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

var ArticleRow = function ArticleRow(_ref) {
  _s();

  var _article$content;

  var article = _ref.article;
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

  var contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  var handleImgError = function handleImgError(e) {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_row",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "article_contents",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, article.Hashtags && article.Hashtags.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/hashtag/".concat(v.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
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
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes")))));
};

_s(ArticleRow, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ArticleRow;
/* harmony default export */ __webpack_exports__["default"] = (ArticleRow);

var _c;

$RefreshReg$(_c, "ArticleRow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVSb3cudHN4Il0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwicmVsYXRpdmVUaW1lIiwibG9jYWxlIiwiQXJ0aWNsZVJvdyIsImFydGljbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrQXJ0aWNsZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwiY29udGVudFdpdGhvdXRIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJvdmVyZmxvdyIsImhlaWdodCIsImJvcmRlciIsInRpdGxlIiwidGh1bWJuYWlsIiwiaW1hZ2VQYXRoIiwibWFyZ2luQm90dG9tIiwiSGFzaHRhZ3MiLCJtYXAiLCJ2IiwiaSIsIm5hbWUiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJXZWJraXRMaW5lQ2xhbXAiLCJtYXJnaW5Ub3AiLCJjb2xvciIsIkJMVUVfQ09MT1IiLCJmb250V2VpZ2h0IiwidG8iLCJjcmVhdGVkQXQiLCJoaXQiLCJQb3N0TGlrZXJzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyxnRUFBYjtBQUNBRiw0Q0FBSyxDQUFDRyxNQUFOLENBQWEsS0FBYjs7QUFFQSxJQUFNQyxVQUE0QixHQUFHLFNBQS9CQSxVQUErQixPQUFpQjtBQUFBOztBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNwRCxNQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIs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aUU7OztLQURYSCxVO0FBa0ZTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8yLmQ3MTUwYTYxZDg4OGE3YzE5Y2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJMVUVfQ09MT1IgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGVSb3c6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrQXJ0aWNsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmNsYXNzTmFtZSA9PT0gXCJoYXNodGFnXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgY29udGVudFdpdGhvdXRIVE1MID0gYXJ0aWNsZT8uY29udGVudFxyXG4gICAgPy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcclxuICAgIC5yZXBsYWNlKC8oI3lvdXR1YmU6LiopL2csIFwiKFlvdXR1YmUgVmlkZW8gTGluaylcIilcclxuICAgIC5yZXBsYWNlKC8mLio7L2dpLCBcIlwiKTtcclxuICBjb25zdCBoYW5kbGVJbWdFcnJvciA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCI7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FydGljbGUgJiYgKFxyXG4gICAgICAgIDxhcnRpY2xlIG9uQ2xpY2s9e29uQ2xpY2tBcnRpY2xlfSBjbGFzc05hbWU9XCJhcnRpY2xlIGFydGljbGVfcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtYXJnaW5SaWdodDogXCIzcmVtXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9pbWdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwMHB4XCIsIGJvcmRlcjogXCIwLjNweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSlcIiB9fVxyXG4gICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZT8udGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS50aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgOiBhcnRpY2xlLmltYWdlUGF0aFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUuaW1hZ2VQYXRoLnJlcGxhY2UoL1xcL3RodW1iXFwvLywgXCIvb3JpZ2luYWwvXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWdFcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX2NvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19IGNsYXNzTmFtZT1cImFydGljbGVfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfdGFnXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuSGFzaHRhZ3MgJiZcclxuICAgICAgICAgICAgICAgIGFydGljbGUuSGFzaHRhZ3MubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2Lm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhhc2h0YWdcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICN7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNy4ycmVtXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIFdlYmtpdExpbmVDbGFtcDogNSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfZGVzY1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGNsYXNzTmFtZT1cImFydGljbGVfZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGNvbG9yOiBCTFVFX0NPTE9SLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtkYXlqcygpLnRvKGRheWpzKGFydGljbGUuY3JlYXRlZEF0KSwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDthZ29cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLmhpdH0gdmlld3M8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7CtyZuYnNwO3thcnRpY2xlLlBvc3RMaWtlcnMgJiYgYXJ0aWNsZS5Qb3N0TGlrZXJzLmxlbmd0aH0gTGlrZXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVSb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=