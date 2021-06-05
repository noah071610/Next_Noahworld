exports.ids = [32];
exports.modules = {

/***/ "D5ud":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UIRo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const SkillBox = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, "iFkp")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("iFkp")],
    modules: ["..\\components\\Portfolio\\Section\\SkillSection.tsx -> " + "../SkillBox/SkillBox"]
  }
});
const SkillImageBox = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, "2/lA")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("2/lA")],
    modules: ["..\\components\\Portfolio\\Section\\SkillSection.tsx -> " + "../SkillBox/SkillImageBox"]
  }
});
const Articles = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "/j9D")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("/j9D")],
    modules: ["..\\components\\Portfolio\\Section\\SkillSection.tsx -> " + "../Articles"]
  }
});
const Title = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "5Ce3")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("5Ce3")],
    modules: ["..\\components\\Portfolio\\Section\\SkillSection.tsx -> " + "../Decorator/Title"]
  }
});

const SkillDescDivider = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", true ? {
  target: "e1hpdx491"
} : undefined)(true ? {
  name: "16ht9uo",
  styles: "font-size:0.8rem"
} : undefined);

const CertificateTable = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], true ? {
  target: "e1hpdx490"
} : undefined)(true ? {
  name: "1k51uiq",
  styles: "@media only screen and (max-width: 515px){td{font-size:0.7rem;}}"
} : undefined);

const eng_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: TOEIC 925\uC810(2018\uB144 \uCDE8\uB4DD)"));

const jap_desc = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, "\xB7 \uAC1C\uC694: \uBB38\uD654\uCCB4\uC721\uAD00\uAD11\uBD80\uC5D0\uC11C \uC2E4\uC2DC\uD558\uB294 \uD1B5\uC5ED\uBD84\uC57C\uC758 \uC720\uC77C\uD55C \uAD6D\uAC00\uACF5\uC778\uC790\uACA9\uC99D(\uCD9C\uCC98:Q-Net)"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, "\xB7 \uCDE8\uB4DD\uB2F9\uC2DC \uC5B4\uD559\uC810\uC218: JLPT1\uAE09(2019\uB144 \uCDE8\uB4DD)"));

const languages = [{
  name: "English",
  src: "https://img.icons8.com/color/96/000000/usa-circular.png",
  popup: true,
  licenseKor: "2020년 영어",
  content: eng_desc
}, {
  name: "Japanese",
  src: "https://img.icons8.com/color/96/000000/japan-circular.png",
  popup: true,
  licenseKor: "2019년 일본어",
  content: jap_desc
}];
const SkillSection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(({
  id
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
    id: id
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "space"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Articles, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Title, {
    title: "Main Skills",
    sub: "\uC6B0\uC120\uC21C\uC704\uB97C \uB450\uACE0 \uC9D1\uC911\uC801\uC73C\uB85C \uACF5\uBD80\uD55C \uC2A4\uD0AC\uC785\uB2C8\uB2E4."
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    "data-aos": "fade-in",
    "data-aos-duration": "500",
    style: {
      paddingBottom: "1rem"
    }
  }, _config__WEBPACK_IMPORTED_MODULE_2__[/* skills */ "m"].map((skill, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillBox, {
      key: "skill" + i,
      name: skill.name,
      src: skill.src,
      desc: skill.desc,
      level: skill.level
    });
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "space"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "left"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", {
    style: {
      textAlign: "start"
    }
  }, "Language skills"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillDescDivider, null, "\uD1B5\uC5ED\uC0AC\uAD6D\uAC00\uC790\uACA9\uC99D\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    "data-aos": "fade-in",
    "data-aos-duration": "500"
  }, languages.map((lan, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillImageBox, {
      key: "lan" + i,
      name: lan.name,
      src: lan.src,
      licenseKor: lan.licenseKor,
      popup: lan.popup,
      content: lan.content
    });
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "left"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", {
    style: {
      textAlign: "start"
    }
  }, "Sub skills"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillDescDivider, null, "\uC8FC\uC2A4\uD0AC\uACFC \uC5F0\uACC4\uD574 \uACF5\uBD80\uD55C \uC2A4\uD0AC\uC785\uB2C8\uB2E4.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    "data-aos": "fade-in",
    "data-aos-duration": "500",
    style: {
      marginTop: "2rem"
    }
  }, _config__WEBPACK_IMPORTED_MODULE_2__[/* sub_skills */ "n"].map((skill, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillImageBox, {
      key: "skill" + i,
      name: skill.name,
      src: skill.src,
      level: skill.level
    });
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    style: {
      margin: "3rem 0"
    },
    orientation: "left"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", {
    style: {
      textAlign: "start"
    }
  }, "Certificate"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SkillDescDivider, null, "\uCDE8\uB4DD \uC790\uACA9\uC99D \uC785\uB2C8\uB2E4.")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CertificateTable, {
    "data-aos": "fade-in",
    "data-aos-duration": "500",
    dataSource: _config__WEBPACK_IMPORTED_MODULE_2__[/* dataSource */ "j"],
    columns: _config__WEBPACK_IMPORTED_MODULE_2__[/* columns */ "i"]
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(SkillSection));

/***/ })

};;