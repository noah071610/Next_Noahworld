exports.ids = [1];
exports.modules = {

/***/ "5Ce3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// CONCATENATED MODULE: ./components/Portfolio/Decorator/DividerLeftPoint.tsx





const Divder = base_default()("div", true ? {
  target: "eigt8fb0"
} : undefined)("position:relative;width:100%;margin:0.5rem auto;height:1px;background-color:", config["e" /* GRAY_COLOR */], ";&:before{position:absolute;content:\"\";width:0.5rem;height:0.5rem;left:0;top:-0.2rem;background-color:", config["f" /* MAIN_COLOR */], ";border-radius:50%;}" + (true ? "" : undefined));

function DividerLeftPoint() {
  return Object(react_["jsx"])(Divder, null);
}

/* harmony default export */ var Decorator_DividerLeftPoint = (DividerLeftPoint);
// CONCATENATED MODULE: ./components/Portfolio/Decorator/Title.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const TitleSub = base_default()("h2", true ? {
  target: "ee9sn850"
} : undefined)(true ? {
  name: "s4kn8p",
  styles: "margin:0.5rem 0 3rem 0;@media only screen and (max-width: 576px){font-size:0.8rem;}"
} : undefined);

const Title = props => {
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("h2", {
    style: {
      margin: 0,
      padding: "1.5rem 0 0.5rem 0"
    }
  }, props.title), Object(react_["jsx"])(Decorator_DividerLeftPoint, null), Object(react_["jsx"])(TitleSub, null, props.sub));
};

/* harmony default export */ var Decorator_Title = __webpack_exports__["default"] = (Title);

/***/ })

};;