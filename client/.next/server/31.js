exports.ids = [31];
exports.modules = {

/***/ "/oz7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3d_react_carousal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kBCF");
/* harmony import */ var _3d_react_carousal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3d_react_carousal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wp9F");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("obyI");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const options = {
  scale: 1.1,
  speed: 700,
  max: 10
};

const Tilt = props => {
  const {
    options
  } = props,
        rest = _objectWithoutProperties(props, ["options"]);

  const tilt = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    vanilla_tilt__WEBPACK_IMPORTED_MODULE_3___default.a.init(tilt.current, options); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", _extends({
    ref: tilt
  }, rest));
};

const PortfolioCard = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(Tilt, true ? {
  target: "eq6g19k2"
} : undefined)(true ? {
  name: "1b7jbg7",
  styles: "transform-style:preserve-3d;position:relative;&:hover{.card_title{transform:translate(-50%) translateZ(30px) scaleY(1);}}@media only screen and (max-width: 765px){&:hover{.card_title{transform:translate(-50%) translateZ(10px) scaleY(1);}}@media only screen and (max-width: 605px){display:none;}}"
} : undefined);

const CardTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "eq6g19k1"
} : undefined)(true ? {
  name: "1bhstu8",
  styles: "cursor:pointer;color:black;position:absolute;bottom:10%;left:50%;transform:translate(-50%) translateZ(0) scaleY(0);transition:all 0.3s;background-color:white;width:80%;box-shadow:4px 8px 21px 1px rgba(0, 0, 0, 0.15);padding:1rem 0;transition:all 0.3;&:hover{.portfolio_search{color:rgba(0, 0, 0, 0.4);}}h2{margin-bottom:1rem 0;color:black;}@media only screen and (max-width: 765px){width:100%;h2{font-size:0.7rem;}p{font-size:0.5rem;}}"
} : undefined);

const CardImg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", true ? {
  target: "eq6g19k0"
} : undefined)(true ? {
  name: "1gy45ua",
  styles: "width:100%;height:380px;border-radius:10px;padding:0.1rem;box-shadow:4px 8px 21px 1px rgba(0, 0, 0, 0.15);@media only screen and (max-width: 913px){height:280px;}"
} : undefined);

const PortfolioList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  let slides = [];
  const onClickPortfolio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(git => {
    if (!git) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].success("현재 보고계시는 페이지입니다.");
    }
  }, []);
  {
    _config__WEBPACK_IMPORTED_MODULE_7__[/* portfolios */ "m"] === null || _config__WEBPACK_IMPORTED_MODULE_7__[/* portfolios */ "m"] === void 0 ? void 0 : _config__WEBPACK_IMPORTED_MODULE_7__[/* portfolios */ "m"].map((v, i) => slides.push(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(PortfolioCard, {
      key: i,
      options: options
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
      onClick: () => onClickPortfolio(v.git),
      href: v.git,
      target: "_blank"
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CardImg, {
      src: v.src,
      alt: "portfolio"
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CardTitle, {
      className: "card_title"
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, v.name, " ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      className: "portfolio_search",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"]
    }), " "), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", null, v.date, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null), v.tags.map((tag, i) => {
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
        key: i,
        className: "tag"
      }, tag);
    })))))));
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_3d_react_carousal__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    slides: slides,
    autoplay: false,
    interval: 1000
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PortfolioList));

/***/ })

};;