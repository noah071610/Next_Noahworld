exports.ids = [24];
exports.modules = {

/***/ "Z1vI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nOHt");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const Wrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "esy119b1"
} : undefined)(true ? {
  name: "j0e603",
  styles: "padding:0.5rem;position:relative;display:flex;justify-content:space-between;align-items:center;cursor:pointer;border-bottom:1px solid rgba(0, 0, 0, 0.1);&:hover{background-color:rgba(0, 0, 0, 0.05);h3{font-weight:bold;}}h3{font-weight:normal;font-size:1rem;}ul{margin:0;}"
} : undefined);

const Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h3", true ? {
  target: "esy119b0"
} : undefined)(true ? {
  name: "61mznw",
  styles: "display:-webkit-box;word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis"
} : undefined);

const ArticlePost = ({
  article
}) => {
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Wrapper, {
    onClick: () => {
      router.push(`/${article.category}/post/${article.id}`);
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Title, null, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("ul", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      fontSize: "0.8rem",
      color: "rgba(0,0,0,0.2)"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("li", null, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt).format("YYYY.MM.DD"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticlePost);

/***/ })

};;