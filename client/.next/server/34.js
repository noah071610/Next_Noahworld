exports.ids = [34];
exports.modules = {

/***/ "2/lA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UIRo");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const Img = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", true ? {
  target: "e1ut9ob04"
} : undefined)("transition:0.3s;border-radius:50%;padding:0.5rem;background-color:", _config__WEBPACK_IMPORTED_MODULE_4__[/* BG_COLOR */ "b"], ";&:hover{transform:scale(1.1);}" + (true ? "" : undefined));

const TdImg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e1ut9ob03"
} : undefined)(true ? {
  name: "178oi4r",
  styles: "width:100%;margin:auto 0;position:relative"
} : undefined);

const Signal = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e1ut9ob02"
} : undefined)(true ? {
  name: "1hwocbf",
  styles: "position:absolute;width:0.8rem;height:0.8rem;border-radius:50%;border:1px solid rgba(0, 0, 0, 0.1);bottom:0rem;right:0rem;background-color:green;&:before{content:\"\";position:absolute;height:0.3rem;top:0;right:1.5px;border-right:3px solid rgba(255, 255, 255, 0.5);border-top-right-radius:10px;}"
} : undefined);

const Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h4", true ? {
  target: "e1ut9ob01"
} : undefined)(true ? {
  name: "19ew3rv",
  styles: "margin-top:0.5rem;font-size:0.8rem;@media only screen and (max-width: 532px){font-size:0.6rem;}"
} : undefined);

const ImageBoxWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, true ? {
  target: "e1ut9ob00"
} : undefined)(true ? {
  name: "ivehcd",
  styles: "display:flex;padding:1rem;@media only screen and (max-width: 532px){padding:0.3rem;}"
} : undefined);

const SkillImageBox = props => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(ImageBoxWrapper, {
    xs: 6,
    md: 4,
    lg: 3
  }, props.popup ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "topLeft",
    content: props.content,
    title: `${props.licenseKor} 통역안내사자격증 보유🔖`,
    className: "focus"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(TdImg, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Img, {
    style: {
      width: "100%"
    },
    alt: props.name,
    src: props.src
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Title, null, props.name), props.level ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Signal, null) : null)) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(TdImg, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      margin: "0 auto",
      width: "100%",
      position: "relative"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Img, {
    style: {
      width: "100%"
    },
    alt: props.name,
    src: props.src
  }), props.level ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Signal, null) : null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Title, null, props.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillImageBox);

/***/ })

};;