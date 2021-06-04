exports.ids = [23,0,1];
exports.modules = {

/***/ "/j9D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




const Div = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "euzpx0s0"
} : undefined)(true ? {
  name: "c39870",
  styles: "padding:1rem 1rem 2rem 1rem;.articles_div{width:90%;margin:0 auto;@media only screen and (max-width: 660px){width:100%;}}"
} : undefined);

const Articles = ({
  children
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Div, {
    className: "articles"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "articles_div"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

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

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

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

/***/ }),

/***/ "La+q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/j9D");
/* harmony import */ var _Decorator_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Ce3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("obyI");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const PortfolioList = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "/oz7")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("/oz7")],
    modules: ["..\\components\\Portfolio\\Section\\PortfolioSection.tsx -> " + "./PortfolioList"]
  }
});

const PortfolioSmall = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", true ? {
  target: "e1mxqjao1"
} : undefined)(true ? {
  name: "oigydy",
  styles: "display:none;.poster{width:100%;height:200px;border:1px solid rgba(0, 0, 0, 0.1);}@media only screen and (max-width: 606px){display:block;width:100%;height:200px;position:relative;margin-bottom:5rem;cursor:pointer;}"
} : undefined);

const PortfolioDesc = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e1mxqjao0"
} : undefined)(true ? {
  name: "mh6dsn",
  styles: "display:block;text-align:end;position:absolute;background-color:white;bottom:-2rem;right:-0.5rem;padding:1.5rem;box-shadow:4px 8px 21px 1px rgba(0, 0, 0, 0.15);h2{margin:0;font-size:1rem;margin-bottom:0.5rem;}@media only screen and (max-width: 606px){.tag{font-size:0.5rem;}}"
} : undefined);

const PortfolioSection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  id
}) => {
  const onClickPortfolio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(git => {
    if (!git) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("현재 보고계시는 페이지입니다.");
    }
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("section", {
    id: id
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    className: "space"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Articles__WEBPACK_IMPORTED_MODULE_2__["default"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Decorator_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Portfolio",
    sub: "\uCD5C\uACE0\uAC00 \uC544\uB2C8\uB354\uB77C\uB3C4 \uD56D\uC0C1 \uCD5C\uC120\uC744 \uB2E4\uD569\uB2C8\uB2E4."
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(PortfolioList, null), _config__WEBPACK_IMPORTED_MODULE_5__[/* portfolios */ "m"].map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(PortfolioSmall, {
      onClick: () => onClickPortfolio(v.git),
      key: i,
      href: v.git,
      target: "_blank"
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
      className: "poster",
      src: v.src,
      alt: "portfolio_image"
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(PortfolioDesc, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h2", {
      className: "mobile_port_title"
    }, v.name), v.tags.map((tag, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
      key: i,
      className: "tag"
    }, tag))));
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PortfolioSection));

/***/ })

};;