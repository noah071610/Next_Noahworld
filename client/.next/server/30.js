exports.ids = [30];
exports.modules = {

/***/ "qJCU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const rotatingRight = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["keyframes"]`
 to {
   transform: rotateZ(360deg);
 }
`;
const rotatingLeft = _emotion_react__WEBPACK_IMPORTED_MODULE_3__["keyframes"]`
 to {
   transform: rotateZ(-360deg);
 }
`;

const PosterWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e19ub9p4"
} : undefined)(true ? {
  name: "lyr6u2",
  styles: "position:relative;width:100%;display:flex;align-items:center;justify-content:center;@media only screen and (min-width: 992px){h2{font-size:1.1rem;}}@media only screen and (max-width: 768px){flex-direction:column;margin-bottom:2rem;}"
} : undefined);

const PosterImg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e19ub9p3"
} : undefined)(true ? {
  name: "2371ou",
  styles: "display:flex;justify-content:center;max-width:450px;position:relative;.poster_img{width:80%;@media only screen and (max-width: 400px){height:250px;}}"
} : undefined);

const Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", true ? {
  target: "e19ub9p2"
} : undefined)(true ? {
  name: "1i5vdyg",
  styles: "width:100%;display:flex;justify-content:center;cursor:default;display:inline-block"
} : undefined);

const Gear = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", true ? {
  target: "e19ub9p1"
} : undefined)("position:absolute;width:8%;top:20%;left:20%;animation:", rotatingRight, " 3s infinite linear;" + (true ? "" : undefined));

const GearRight = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", true ? {
  target: "e19ub9p0"
} : undefined)("position:absolute;width:5%;top:25%;left:25.8%;animation:", rotatingLeft, " 2.6s infinite linear;" + (true ? "" : undefined));

const Poster = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PosterWrapper, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PosterImg, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    className: "poster_img",
    src: "/images/poster/Skills.png",
    alt: "poster"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Gear, {
    src: "/images/poster/skills_decoration.png"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(GearRight, {
    src: "/images/poster/skills_decoration.png"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Title, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "portfolio_poster_name"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
    style: {
      fontSize: "2rem"
    }
  }, "Jang Hyun Soo")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    className: "poster_slider"
  }, settings), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h4", {
    style: {
      padding: "1rem 0",
      textAlign: "center"
    }
  }, "Hi! I'm a Web-developer \uD83D\uDCBB")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h4", {
    style: {
      padding: "1rem 0",
      textAlign: "center"
    }
  }, "Step up every second \uD83D\uDC68\u200D\uD83D\uDCBB")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h4", {
    style: {
      padding: "1rem 0",
      textAlign: "center"
    }
  }, "Ability , Passion and \"Faith\" \uD83E\uDD1D"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    className: "portfolio_intro"
  }, "\uB178\uB825\uC740 \uC131\uACF5\uACFC \uBE44\uB840\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null), " \uD558\uC9C0\uB9CC \uC131\uACF5\uD55C \uC0AC\uB78C\uC911\uC5D0 \uB178\uB825\uD558\uC9C0\uC54A\uB294 \uC0AC\uB78C\uC740 \uC5C6\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4. ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null), " \uC800\uB610\uD55C \uCD5C\uACE0\uAC00 \uC544\uB2C8\uB354\uB77C\uB3C4 \uCD5C\uC120\uC744 \uB2E4\uD558\uBA70 \uC990\uAC81\uAC8C \uCF54\uB529\uC911\uC785\uB2C8\uB2E4. \uD83D\uDE38")));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Poster));

/***/ })

};;