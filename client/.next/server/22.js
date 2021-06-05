exports.ids = [22,0,1];
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

/***/ }),

/***/ "ikFE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WxHd");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/j9D");
/* harmony import */ var _Decorator_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Ce3");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const ContactLinkBox = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], true ? {
  target: "eft0s12"
} : undefined)(true ? {
  name: "1fj76sq",
  styles: "display:flex;flex-direction:column;align-items:flex-start;@media only screen and (min-width: 992px){justify-content:center;align-items:center;}"
} : undefined);

const ContactLink = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", true ? {
  target: "eft0s11"
} : undefined)(true ? {
  name: "v64t66",
  styles: "display:flex;height:50px;margin-bottom:1rem;cursor:pointer;&:hover{opacity:0.5;}"
} : undefined);

const P = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("q", true ? {
  target: "eft0s10"
} : undefined)(true ? {
  name: "v0wp53",
  styles: "font-size:0.9rem;@media only screen and (min-width: 992px){font-size:0.8rem;}"
} : undefined);

const ContactSection = ({
  id
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("section", {
    id: id
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "space"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Articles__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Decorator_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Contact",
    sub: "\uC5B8\uC81C\uB4E0\uC9C0 \uD3B8\uD558\uAC8C \uC5F0\uB77D\uC8FC\uC138\uC694."
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "100%",
      margin: "0 auto",
      padding: "3rem 0 4rem 0"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    lg: 12,
    className: "contact_image_box"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    "data-aos": "flip-up",
    "data-aos-duration": "800",
    alt: "contact_image",
    className: "contact_image",
    src: "/images/contact_inside.png"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(P, {
    "data-aos": "fade-up",
    "data-aos-duration": "1000"
  }, "\uD56D\uC0C1 \uB178\uB825\uD574\uB3C4 \uBD80\uC871\uD558\uB2E4\uACE0 \uB290\uB07C\uB294\uAC8C \uAC1C\uBC1C\uC790\uB77C\uB294 \uC9C1\uC5C5\uC778 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", null), "\uC800\uB294 \uBC30\uC6C0\uC744 \uAC08\uB9DD\uD558\uB294 ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", {
    className: "marker"
  }, "\uC2E0\uB8B0\uBC1B\uB294 \uAC1C\uBC1C\uC790"), "\uAC00 \uB418\uACE0\uC2F6\uC2B5\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", null), "\uAC1C\uC778\uC801\uC778 \uD53C\uB4DC\uBC31\uB3C4 \uC88B\uC73C\uB2C8 \uD3B8\uD558\uAC8C \uC5F0\uB77D \uC8FC\uC2DC\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4! ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", null), "\uBC29\uBB38\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4 \uD83D\uDE04.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ContactLinkBox, {
    "data-aos": "fade-left",
    "data-aos-delay": "500",
    "data-aos-duration": "800",
    xs: 24,
    lg: 12
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ContactLink, {
    href: "mailto:noah071610@naver.com"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    alt: "contact_link",
    style: {
      width: "50px"
    },
    src: "https://img.icons8.com/dusk/64/000000/send-mass-email.png"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      marginLeft: "1rem"
    }
  }, " \uC774\uBA54\uC77C\uB85C \uBCF4\uB0B4\uAE30")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ContactLink, {
    href: "https://www.instagram.com/salmonchobab/",
    target: "_blank",
    rel: "noreferrer"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    alt: "contact_link",
    style: {
      width: "50px",
      paddingBottom: "0.2rem"
    },
    src: "https://img.icons8.com/fluent/144/000000/instagram-new.png"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      marginLeft: "1rem"
    }
  }, "\uC778\uC2A4\uD0C0\uADF8\uB7A8 DM")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__["CopyToClipboard"], {
    text: "01056723486"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ContactLink, {
    onClick: () => antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("전화번호가 복사됬어요! 잘부탁드립니다 ^^"),
    href: "tel:01056723486"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    alt: "contact_link",
    style: {
      width: "50px"
    },
    src: "https://img.icons8.com/fluent/48/000000/outgoing-call.png"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      marginLeft: "1rem"
    }
  }, " \uC804\uD654 \uC5F0\uACB0 ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ })

};;