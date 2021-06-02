webpackHotUpdate_N_E("pages/class",{

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

  var _article$content, _article$HashTags;

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

  console.log(article === null || article === void 0 ? void 0 : article.HashTags);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 13
    }
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, article === null || article === void 0 ? void 0 : (_article$HashTags = article.HashTags) === null || _article$HashTags === void 0 ? void 0 : _article$HashTags.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/hashtag/".concat(v.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 59,
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
      lineNumber: 67,
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
      lineNumber: 92,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0FydGljbGVzL0FydGljbGVDb2x1bW4udHN4Il0sIm5hbWVzIjpbImRheWpzIiwiZXh0ZW5kIiwicmVsYXRpdmVUaW1lIiwibG9jYWxlIiwiQXJ0aWNsZUNvbHVtbiIsImFydGljbGUiLCJub2NvbnRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkNsaWNrQXJ0aWNsZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsInB1c2giLCJjYXRlZ29yeSIsImlkIiwiY29udGVudFdpdGhvdXRIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJoYW5kbGVJbWdFcnJvciIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJIYXNoVGFncyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0aXRsZSIsInRodW1ibmFpbCIsImltYWdlUGF0aCIsIm1hcCIsInYiLCJpIiwibmFtZSIsIm1hcmdpbiIsIldlYmtpdExpbmVDbGFtcCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInRvIiwiY3JlYXRlZEF0IiwiaGl0IiwiUG9zdExpa2VycyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsZ0VBQWI7QUFDQUYsNENBQUssQ0FBQ0csTUFBTixDQUFhLEtBQWI7O0FBRUEsSUFBTUMsYUFBK0IsR0FBRyxTQUFsQ0EsYUFBa0MsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNsRSxNQUFNQyxNQUFNLEdBQUdDLHlFQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUF5QjtBQUM5QyxRQUFLQSxDQUFDLENBQUNDLE1BQUgsQ0FBc0JDLFNBQXRCLEtBQW9DLFNBQXhDLEVBQW1EO0FBQ2pEO0FBQ0Q7O0FBQ0RDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFoQjtBQUNBUixVQUFNLENBQUNTLElBQVAsWUFBZ0JYLE9BQU8sQ0FBQ1ksUUFBeEIsbUJBQXlDWixPQUFPLENBQUNhLEVBQWpEO0FBQ0QsR0FORDs7QUFPQSxNQUFNQyxrQkFBa0IsR0FBR2QsT0FBSCxhQUFHQSxPQUFILDJDQUFHQSxPQUFPLENBQUVlLE9BQVoscURBQUcsaUJBQ3ZCQyxPQUR1QixDQUNmLGVBRGUsRUFDRSxFQURGLEVBRXhCQSxPQUZ3QixDQUVoQixnQkFGZ0IsRUFFRSxzQkFGRixFQUd4QkEsT0FId0IsQ0FHaEIsUUFIZ0IsRUFHTixFQUhNLENBQTNCOztBQUlBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1osQ0FBRCxFQUE2QjtBQUNqREEsS0FBQyxDQUFDQyxNQUFILENBQStCWSxHQUEvQixHQUFxQywwQkFBckM7QUFDRCxHQUZEOztBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWXBCLE9BQVosYUFBWUEsT0FBWix1QkFBWUEsT0FBTyxDQUFFcUIsUUFBckI7QUFFQSxTQUNFLHdIQUNHckIsT0FBTyxJQUNOO0FBQVMsV0FBTyxFQUFFSSxjQUFsQjtBQUFrQyxhQUFTLEVBQUMsd0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFa0Isa0JBQVksRUFBRSxNQUFoQjtBQUF3QkMsV0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxjQUFRLEVBQUU7QUFBakQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUV2QixTQUFTLEdBQUc7QUFBRXdCLFlBQU0sRUFBRTtBQUFWLEtBQUgsR0FBeUIsRUFEM0M7QUFFRSxhQUFTLEVBQUMsYUFGWjtBQUdFLE9BQUcsRUFBRXpCLE9BQU8sQ0FBQzBCLEtBSGY7QUFJRSxPQUFHLEVBQ0QxQixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLElBQUFBLE9BQU8sQ0FBRTJCLFNBQVQsR0FDSTNCLE9BQU8sQ0FBQzJCLFNBRFosR0FFSTNCLE9BQU8sQ0FBQzRCLFNBQVIsR0FDQTVCLE9BQU8sQ0FBQzRCLFNBQVIsQ0FBa0JaLE9BQWxCLENBQTBCLFdBQTFCLEVBQXVDLFlBQXZDLENBREEsR0FFQSwwQkFUUjtBQVdFLFdBQU8sRUFBRUMsY0FYWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRVEsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUErQixhQUFTLEVBQUMsZ0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3pCLE9BQU8sQ0FBQzBCLEtBRFgsQ0FERixFQUlHekIsU0FBUyxHQUFHLElBQUgsR0FDUix3SEFDRTtBQUFJLFNBQUssRUFBRTtBQUFFcUIsa0JBQVksRUFBRTtBQUFoQixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3RCLE9BREgsYUFDR0EsT0FESCw0Q0FDR0EsT0FBTyxDQUFFcUIsUUFEWixzREFDRyxrQkFBbUJRLEdBQW5CLENBQXVCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2hDLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLDJEQUFDLGdEQUFEO0FBQU0sVUFBSSxxQkFBY0QsQ0FBQyxDQUFDRSxJQUFoQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQXVCLGFBQU8sRUFBRTtBQUFBLGVBQU14QixNQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FBaEIsQ0FBTjtBQUFBLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDSW9CLENBQUMsQ0FBQ0UsSUFETixDQURGLENBREYsQ0FERjtBQVNELEdBVkEsQ0FESCxDQURGLEVBY0U7QUFDRSxTQUFLLEVBQ0hoQyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLElBQUFBLE9BQU8sQ0FBRXFCLFFBQVQsR0FDSTtBQUNFWSxZQUFNLEVBQUUsQ0FEVjtBQUVFQyxxQkFBZSxFQUFFLENBRm5CO0FBR0VULFlBQU0sRUFBRSxRQUhWO0FBSUVVLGdCQUFVLEVBQUUsS0FKZDtBQUtFQyxjQUFRLEVBQUU7QUFMWixLQURKLEdBUUk7QUFDRVgsWUFBTSxFQUFFLFFBRFY7QUFFRVMscUJBQWUsRUFBRSxDQUZuQjtBQUdFWixrQkFBWSxFQUFFLFFBSGhCO0FBSUVhLGdCQUFVLEVBQUUsS0FKZDtBQUtFQyxjQUFRLEVBQUU7QUFMWixLQVZSO0FBa0JFLGFBQVMsRUFBQyxjQWxCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBb0JHdEIsa0JBcEJILENBZEYsQ0FMSixDQWhCRixFQTRERTtBQUNFLFNBQUssRUFBRWQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxJQUFBQSxPQUFPLENBQUVxQixRQUFULEdBQW9CO0FBQUVnQixlQUFTLEVBQUU7QUFBYixLQUFwQixHQUE0QztBQUFFQSxlQUFTLEVBQUU7QUFBYixLQURyRDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHMUMsNENBQUssR0FBRzJDLEVBQVIsQ0FBVzNDLDRDQUFLLENBQUNLLE9BQU8sQ0FBQ3VDLFNBQVQsQ0FBaEIsRUFBcUMsSUFBckMsQ0FESCxZQUpGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWXZDLE9BQU8sQ0FBQ3dDLEdBQXBCLFdBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFZeEMsT0FBTyxDQUFDeUMsVUFBUixJQUFzQnpDLE9BQU8sQ0FBQ3lDLFVBQVIsQ0FBbUJDLE1BQXJELFdBVEYsQ0E1REYsQ0FGSixDQURGO0FBOEVELENBaEdEOztHQUFNM0MsYTtVQUNXSSxpRTs7O0tBRFhKLGE7QUFrR1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NsYXNzLmFmMGZlYTEwNTY1ZjM2MTdlZjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlSW50ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcbmRheWpzLmxvY2FsZShcImtvclwiKTtcclxuXHJcbmNvbnN0IEFydGljbGVDb2x1bW46IEZDPEFydGljbGVJbnRlcj4gPSAoeyBhcnRpY2xlLCBub2NvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tBcnRpY2xlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICgoZS50YXJnZXQgYXMgRWxlbWVudCkuY2xhc3NOYW1lID09PSBcImhhc2h0YWdcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgLyR7YXJ0aWNsZS5jYXRlZ29yeX0vcG9zdC8ke2FydGljbGUuaWR9YCk7XHJcbiAgfTtcclxuICBjb25zdCBjb250ZW50V2l0aG91dEhUTUwgPSBhcnRpY2xlPy5jb250ZW50XHJcbiAgICA/LnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoLygjeW91dHViZTouKikvZywgXCIoWW91dHViZSBWaWRlbyBMaW5rKVwiKVxyXG4gICAgLnJlcGxhY2UoLyYuKjsvZ2ksIFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUltZ0Vycm9yID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAoZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvaW1hZ2VzL2Jsb2cvbm9JbWFnZS5naWZcIjtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGFydGljbGU/Lkhhc2hUYWdzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthcnRpY2xlICYmIChcclxuICAgICAgICA8YXJ0aWNsZSBvbkNsaWNrPXtvbkNsaWNrQXJ0aWNsZX0gY2xhc3NOYW1lPVwiYXJ0aWNsZSBhcnRpY2xlX2NvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLCB3aWR0aDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e25vY29udGVudCA/IHsgaGVpZ2h0OiBcIjE0MHB4XCIgfSA6IHt9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfaW1nXCJcclxuICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIGFydGljbGU/LnRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICA/IGFydGljbGUudGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIDogYXJ0aWNsZS5pbWFnZVBhdGhcclxuICAgICAgICAgICAgICAgICAgPyBhcnRpY2xlLmltYWdlUGF0aC5yZXBsYWNlKC9cXC90aHVtYlxcLy8sIFwiL29yaWdpbmFsL1wiKVxyXG4gICAgICAgICAgICAgICAgICA6IFwiL2ltYWdlcy9ibG9nL25vSW1hZ2UuZ2lmXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlSW1nRXJyb3J9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19IGNsYXNzTmFtZT1cImFydGljbGVfaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHtub2NvbnRlbnQgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2FydGljbGU/Lkhhc2hUYWdzPy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3YubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoYXNodGFnXCIgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT8uSGFzaFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUuMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2LjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRMaW5lQ2xhbXA6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Rlc2NcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y29udGVudFdpdGhvdXRIVE1MfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgc3R5bGU9e2FydGljbGU/Lkhhc2hUYWdzID8geyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH0gOiB7IG1hcmdpblRvcDogXCIxLjdyZW1cIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX2Zvb3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICB7ZGF5anMoKS50byhkYXlqcyhhcnRpY2xlLmNyZWF0ZWRBdCksIHRydWUpfVxyXG4gICAgICAgICAgICAgICZuYnNwO2Fnb1xyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+wrcmbmJzcDt7YXJ0aWNsZS5oaXR9IHZpZXdzPC9saT5cclxuICAgICAgICAgICAgPGxpPsK3Jm5ic3A7e2FydGljbGUuUG9zdExpa2VycyAmJiBhcnRpY2xlLlBvc3RMaWtlcnMubGVuZ3RofSBMaWtlczwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9