exports.ids = [33];
exports.modules = {

/***/ "iFkp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UIRo");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const TdText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("td", true ? {
  target: "ekszq3"
} : undefined)(true ? {
  name: "quuqf4",
  styles: "width:100%;display:flex;align-items:flex-start;padding-left:0.5rem;p{line-height:1.5;}"
} : undefined);

const Signal = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "ekszq2"
} : undefined)(true ? {
  name: "dihko6",
  styles: "position:absolute;width:0.8rem;height:0.8rem;border-radius:50%;border:1px solid rgba(0, 0, 0, 0.1);bottom:0rem;right:0rem;background-color:green;&:before{content:\"\";position:absolute;height:0.3rem;top:0;right:1.8px;border-right:3px solid rgba(255, 255, 255, 0.5);border-top-right-radius:10px;}"
} : undefined);

const TdImg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("td", true ? {
  target: "ekszq1"
} : undefined)("width:40%;margin:auto 0;position:relative;.img_box{margin:0 auto;width:60%;position:relative;img{transition:0.3s;border-radius:50%;padding:0.5rem;width:100%;background-color:", _config__WEBPACK_IMPORTED_MODULE_3__[/* BG_COLOR */ "b"], ";&:hover{transform:scale(1.1);}}}h4{margin-top:0.5rem;}@media only screen and (max-width: 768px){width:25%;padding-right:0.2rem;h4{font-size:0.7rem;}}@media only screen and (max-width: 420px){width:30%;}" + (true ? "" : undefined));

const Table = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("table", true ? {
  target: "ekszq0"
} : undefined)(true ? {
  name: "1yhw567",
  styles: "width:100%;margin:1.5rem auto;tr{display:flex;align-items:center;}p{width:100%;font-size:0.8rem;text-align:start;margin:0;}@media only screen and (max-width: 768px){margin:0.7rem auto;}@media only screen and (max-width: 400px){p{font-size:0.7rem;}}"
} : undefined);

const SkillBox = props => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 24,
    md: 12,
    style: {
      display: "flex"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Table, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("tbody", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("tr", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(TdImg, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "img_box"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("img", {
    alt: props.name,
    src: props.src
  }), props.level ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Signal, null) : null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h4", null, props.name)), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(TdText, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", null, props.desc))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillBox);

/***/ })

};;