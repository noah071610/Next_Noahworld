exports.ids = [28];
exports.modules = {

/***/ "K747":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UIRo");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Square = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e10zwa954"
} : undefined)(true ? {
  name: "t3jzj2",
  styles: "width:120px;position:relative;transition:0.5s;margin:1.5rem auto;&:hover{transform:translateY(-10px);}"
} : undefined);

const ValueShape = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e10zwa953"
} : undefined)(true ? {
  name: "dwskes",
  styles: "@media only screen and (max-width: 768px){width:40%;}"
} : undefined);

const Img = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e10zwa952"
} : undefined)("width:100%;position:relative;transition:0.5s;background-color:", _config__WEBPACK_IMPORTED_MODULE_2__[/* MAIN_COLOR */ "f"], ";transform:skewY(-10deg);&:before{content:\"\";position:absolute;top:-10px;left:0;width:100%;height:10px;background-color:#c3ffe1;transform-origin:bottom;transform:skewX(45deg);transition:0.5s;}&:after{content:\"\";position:absolute;top:-10px;left:-10px;width:10px;height:100%;background-color:#c3ffe1;transform-origin:left;transform:skewY(45deg);transition:0.5s;border-bottom:20px solid #d9d9d9;}" + (true ? "" : undefined));

const SqureTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h4", true ? {
  target: "e10zwa951"
} : undefined)("background-color:white;user-select:none;color:black;&:before{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:130px;background:linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1));transform-origin:bottom;transform:skewX(45deg);transition:0.5s;z-index:-1;}", Square, ":hover &:before{transform:skewX(45deg) translateY(10px);filter:blur(5px);}" + (true ? "" : undefined));

const ValueContent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e10zwa950"
} : undefined)(true ? {
  name: "1icle3i",
  styles: "width:100%;@media only screen and (max-width: 768px){width:60%;padding:1rem 0 0 1rem;text-align:start;p{margin:0;}}@media only screen and (max-width: 600px){width:100%;text-align:center;padding:0;p{margin:0 auto;}}"
} : undefined);

const CardContent = ({
  delay,
  contents
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ValueShape, {
    "data-aos": "flip-up",
    "data-aos-duration": "500",
    "data-aos-delay": delay
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Square, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Img, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    alt: contents.squareTitle,
    src: contents.src,
    style: {
      margin: "1rem 0",
      width: "60px"
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(SqureTitle, null, contents.squareTitle)))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ValueContent, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h4", {
    style: {
      marginTop: "1rem",
      fontWeight: "bold"
    }
  }, contents.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    style: {
      width: "100%",
      lineHeight: "1.5",
      fontSize: "0.8rem",
      margin: "1rem auto"
    }
  }, contents.desc)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardContent);

/***/ })

};;