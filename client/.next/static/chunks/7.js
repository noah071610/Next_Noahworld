(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

/***/ "./components/Blog/Articles/ArticlePost.tsx":
/*!**************************************************!*\
  !*** ./components/Blog/Articles/ArticlePost.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Articles\\ArticlePost.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

var Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", false ? undefined : {
  target: "esy119b1",
  label: "Wrapper"
})(false ? undefined : {
  name: "j0e603",
  styles: "padding:0.5rem;position:relative;display:flex;justify-content:space-between;align-items:center;cursor:pointer;border-bottom:1px solid rgba(0, 0, 0, 0.1);&:hover{background-color:rgba(0, 0, 0, 0.05);h3{font-weight:bold;}}h3{font-weight:normal;font-size:1rem;}ul{margin:0;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlUG9zdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlUG9zdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZUludGVyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5kYXlqcy5sb2NhbGUoXCJrb3JcIik7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gO1xyXG5cclxuY29uc3QgQXJ0aWNsZVBvc3Q6IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHthcnRpY2xlLmNhdGVnb3J5fS9wb3N0LyR7YXJ0aWNsZS5pZH1gKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFRpdGxlPnthcnRpY2xlLnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLDAsMCwwLjIpXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxsaT57ZGF5anMoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVkuTU0uRERcIil9PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVBvc3Q7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", false ? undefined : {
  target: "esy119b0",
  label: "Title"
})(false ? undefined : {
  name: "61mznw",
  styles: "display:-webkit-box;word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXEFydGljbGVzXFxBcnRpY2xlUG9zdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJ1QiIsImZpbGUiOiJDOlxcVXNlcnNcXE5vYWhcXERlc2t0b3BcXFByb2plY3RcXE5vYWh3b3JsZFxcY2xpZW50XFxjb21wb25lbnRzXFxCbG9nXFxBcnRpY2xlc1xcQXJ0aWNsZVBvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFydGljbGVJbnRlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuZGF5anMubG9jYWxlKFwia29yXCIpO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmNvbnN0IEFydGljbGVQb3N0OiBGQzxBcnRpY2xlSW50ZXI+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUaXRsZT57YXJ0aWNsZS50aXRsZX08L1RpdGxlPlxyXG4gICAgICA8dWxcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bGk+e2RheWpzKGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfTwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQb3N0O1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var ArticlePost = function ArticlePost(_ref) {
  _s();

  var article = _ref.article;
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Wrapper, {
    onClick: function onClick() {
      router.push("/".concat(article.category, "/post/").concat(article.id));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("ul", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      fontSize: "0.8rem",
      color: "rgba(0,0,0,0.2)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt).format("YYYY.MM.DD"))));
};

_s(ArticlePost, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = ArticlePost;
/* harmony default export */ __webpack_exports__["default"] = (ArticlePost);

var _c;

$RefreshReg$(_c, "ArticlePost");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJkYXlqcyIsImxvY2FsZSIsIldyYXBwZXIiLCJUaXRsZSIsIkFydGljbGVQb3N0IiwiYXJ0aWNsZSIsInJvdXRlciIsInVzZVJvdXRlciIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwidGl0bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwiY3JlYXRlZEF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxLQUFiOztBQUVBLElBQU1DLE9BQU8sR0FBRyw2RkFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBYjs7QUF1QkEsSUFBTUMsS0FBSyxHQUFHLDRGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFYOztBQVNBLElBQU1DLFdBQTZCLEdBQUcsU0FBaENBLFdBQWdDLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxTQUNFLDJEQUFDLE9BQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkQsWUFBTSxDQUFDRSxJQUFQLFlBQWdCSCxPQUFPLENBQUNJLFFBQXhCLG1CQUF5Q0osT0FBTyxDQUFDSyxFQUFqRDtBQUNELEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLDJEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxPQUFPLENBQUNNLEtBQWhCLENBTEYsRUFNRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLFlBRlg7QUFHTEMsY0FBUSxFQUFFLFFBSEw7QUFJTEMsV0FBSyxFQUFFO0FBSkYsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZiw0Q0FBSyxDQUFDSyxPQUFPLENBQUNXLFNBQVQsQ0FBTCxDQUF5QkMsTUFBekIsQ0FBZ0MsWUFBaEMsQ0FBTCxDQVJGLENBTkYsQ0FERjtBQW1CRCxDQXJCRDs7R0FBTWIsVztVQUNXRyxpRTs7O0tBRFhILFc7QUF1QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlSW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmA7XHJcblxyXG5jb25zdCBBcnRpY2xlUG9zdDogRkM8QXJ0aWNsZUludGVyPiA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke2FydGljbGUuY2F0ZWdvcnl9L3Bvc3QvJHthcnRpY2xlLmlkfWApO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VGl0bGU+e2FydGljbGUudGl0bGV9PC9UaXRsZT5cclxuICAgICAgPHVsXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpPntkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS5NTS5ERFwiKX08L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==