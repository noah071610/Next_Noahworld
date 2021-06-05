exports.ids = [5];
exports.modules = {

/***/ "./components/Blog/Admin/AdminModal.tsx":
/*!**********************************************!*\
  !*** ./components/Blog/Admin/AdminModal.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal/Modal */ "antd/lib/modal/Modal");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Admin\\AdminModal.tsx";





const AdminModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  onChangePassword,
  password
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Please Enter Admin password",
    visible: isModalVisible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "This fucntion is for ADMIN only. If you are not a administrator, please go back and feedback to us. Thank you for your cooperatation."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\uC774 \uAE30\uB2A5\uC740 \uAD00\uB9AC\uC790 \uC804\uC6A9\uC785\uB2C8\uB2E4. \uC608\uAE30\uCE58 \uBABB\uD558\uAC8C \uC624\uC168\uC744\uACBD\uC6B0 \uD53C\uB4DC\uBC31 \uC8FC\uC2DC\uBA74 \uC815\uB9D0 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD611\uB825\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "\u3053\u306E\u6A5F\u80FD\u306F\u7BA1\u7406\u8005\u5C02\u7528\u3067\u3054\u3056\u3044\u307E\u3059\u3001\u4F55\u304C\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u76F4\u63A5\u3054\u9023\u7D61\u3057\u3066\u9802\u3051\u308C\u3070\u5E78\u3044\u3060\u3068\u601D\u3044\u307E\u3059\u3002"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: password,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminModal);

/***/ }),

/***/ "./components/Blog/Comments/RemoteControl.tsx":
/*!****************************************************!*\
  !*** ./components/Blog/Comments/RemoteControl.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@reducers/blog */ "./@reducers/blog.ts");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var _util_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/useInput */ "./util/useInput.ts");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Admin/AdminModal */ "./components/Blog/Admin/AdminModal.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Comments\\RemoteControl.tsx";

/* eslint-disable jsx-a11y/anchor-is-valid */
















const RemoteControlWrapper = FixedRemote =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["css"])("width:270px;padding-left:2rem;flexd-direction:column;height:100%;position:", FixedRemote ? "sticky" : "static", ";top:5.375rem;h2{font-size:1rem;margin-bottom:1rem;line-height:1.5;}ul:first-of-type{overflow:hidden;li{margin:0;}}" + (false ? undefined : ";label:RemoteControlWrapper;"), false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXENvbW1lbnRzXFxSZW1vdGVDb250cm9sLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjBEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTm9haFxcRGVza3RvcFxcUHJvamVjdFxcTm9haHdvcmxkXFxjbGllbnRcXGNvbXBvbmVudHNcXEJsb2dcXENvbW1lbnRzXFxSZW1vdGVDb250cm9sLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQge1xyXG4gIERvdWJsZUxlZnRPdXRsaW5lZCxcclxuICBEb3VibGVSaWdodE91dGxpbmVkLFxyXG4gIEVkaXRGaWxsZWQsXHJcbiAgSG9tZUZpbGxlZCxcclxuICBSb2xsYmFja091dGxpbmVkLFxyXG4gIFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgZmFUcmFzaCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBtZXNzYWdlLCBUaW1lbGluZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNjcm9sbHNweSBmcm9tIFwicmVhY3Qtc2Nyb2xsc3B5XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUE9TVF9FRElUX09OIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vycy9ibG9nXCI7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi8uLi91dGlsL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgQWRtaW5Nb2RhbCBmcm9tIFwiLi4vQWRtaW4vQWRtaW5Nb2RhbFwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlbW90ZUNvbnRyb2xXcmFwcGVyID0gKEZpeGVkUmVtb3RlOiBib29sZWFuKSA9PiBjc3NgXHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBmbGV4ZC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246ICR7Rml4ZWRSZW1vdGUgPyBcInN0aWNreVwiIDogXCJzdGF0aWNcIn07XHJcbiAgdG9wOiA1LjM3NXJlbTtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgdWw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVtb3RlQ29udHJvbDogRkM8eyBGdWxsY29udGVudDogc3RyaW5nIH0+ID0gKHsgRnVsbGNvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHBvc3QsIHByZXZQb3N0LCBuZXh0UG9zdCwgcmVtb3ZlUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbRml4ZWRSZW1vdGUsIHNldEZpeGVkUmVtb3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZGVycywgc2V0SGVhZGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxDYWxsQmFjaygpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNDAwKSB7XHJcbiAgICAgICAgc2V0Rml4ZWRSZW1vdGUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Rml4ZWRSZW1vdGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjayk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb250ZW50SGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnR1aS1lZGl0b3ItY29udGVudHMgaDEsIC50dWktZWRpdG9yLWNvbnRlbnRzIGgyXCJcclxuICAgICk7XHJcbiAgICBsZXQgYXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29udGVudEhlYWRlcnMuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICB2LnNldEF0dHJpYnV0ZShcImlkXCIsIFN0cmluZyhpKSk7XHJcbiAgICAgIGFyci5wdXNoKHYuaW5uZXJIVE1MKTtcclxuICAgIH0pO1xyXG4gICAgc2V0SGVhZGVycyhhcnIpO1xyXG4gIH0sIFtGdWxsY29udGVudF0pO1xyXG5cclxuICBjb25zdCB0aW1lbGluZUxpc3RzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcmV0dXJuIGhlYWRlcnMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgIDxUaW1lbGluZS5JdGVtIGNvbG9yPVwiZ3JheVwiIGtleT17aX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxhIGhyZWY9e2AjJHtpfWB9Pnt2fTwvYT5cclxuICAgICAgPC9UaW1lbGluZS5JdGVtPlxyXG4gICAgKSk7XHJcbiAgfSwgW2hlYWRlcnNdKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgUG9zdElkOiBwb3N0Py5pZCwgcGFzc3dvcmQsIHRhZ3M6IHBvc3Q/Lkhhc2h0YWdzIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZW1vdmVQb3N0RG9uZSkge1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJSZW1vdmVkIFBvc3QgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoLCByb3V0ZXIsIHJlbW92ZVBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb2NvbnRyb2xcIiBjc3M9e1JlbW90ZUNvbnRyb2xXcmFwcGVyKEZpeGVkUmVtb3RlKX0+XHJcbiAgICAgIDxoMj57cG9zdD8udGl0bGV9PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEhvbWVGaWxsZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtwb3N0Py5jYXRlZ29yeSA9PT0gXCJjdWx0dXJlXCIgPyBcImNsYXNzXCIgOiBwb3N0Py5jYXRlZ29yeX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrTGlzdH0+XHJcbiAgICAgICAgICB7cHJldlBvc3RbMF0gPyAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0Py5jYXRlZ29yeX0vcG9zdC8ke3ByZXZQb3N0WzBdLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPERvdWJsZUxlZnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPERvdWJsZUxlZnRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIiB9fSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaXN0fT5cclxuICAgICAgICAgIHtuZXh0UG9zdFswXSA/IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7bmV4dFBvc3RbMF0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPERvdWJsZVJpZ2h0T3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgwLDAsMCwwLjIpXCIgfX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tMaXN0fT5cclxuICAgICAgICAgICAgPFZlcnRpY2FsQWxpZ25Ub3BPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3VzZXI/LmlkID09PSAxICYmIHVzZXIuYWRtaW4gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VESVRfT04sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZG1pblwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRGaWxsZWQgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2h9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjAuNXJlbSAwIDNyZW0gMFwiIH19IC8+XHJcbiAgICAgIDxTY3JvbGxzcHlcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IDAgfX1cclxuICAgICAgICBpdGVtcz17W1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdfVxyXG4gICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJibG9nX3Bvc3Rfc2VsZWN0ZWRcIlxyXG4gICAgICAgIG9mZnNldD17MzAwfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpbWVsaW5lTGlzdHMoKX1cclxuICAgICAgICA8VGltZWxpbmUuSXRlbVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nQm90dG9tOiAwIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbnQtdGltZWxpbmUtaXRlbS1sYXN0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBocmVmPXtgI2NvbW1lbnRgfT5Db21tZW50czwvYT5cclxuICAgICAgICA8L1RpbWVsaW5lLkl0ZW0+XHJcbiAgICAgIDwvU2Nyb2xsc3B5PlxyXG4gICAgICA8QWRtaW5Nb2RhbFxyXG4gICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICBoYW5kbGVPaz17aGFuZGxlT2t9XHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlUGFzc3dvcmQ9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVtb3RlQ29udHJvbDtcclxuIl19 */", false ? undefined : ";label:RemoteControlWrapper;");

const RemoteControl = ({
  Fullcontent
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    post,
    prevPost,
    nextPost,
    removePostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const [password, onChangePassword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])("");
  const {
    0: FixedRemote,
    1: setFixedRemote
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: headers,
    1: setHeaders
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    function scrollCallBack() {
      if (window.scrollY > 400) {
        setFixedRemote(true);
      } else {
        setFixedRemote(false);
      }
    }

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    let contentHeaders = document.querySelectorAll(".tui-editor-contents h1, .tui-editor-contents h2");
    let arr = [];
    contentHeaders.forEach((v, i) => {
      v.setAttribute("id", String(i));
      arr.push(v.innerHTML);
    });
    setHeaders(arr);
  }, [Fullcontent]);
  const timelineLists = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    return headers.map((v, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Timeline"].Item, {
      color: "gray",
      key: i,
      style: {
        width: "100%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
      href: `#${i}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, v)));
  }, [headers]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        password,
        tags: post === null || post === void 0 ? void 0 : post.Hashtags
      }
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (removePostDone) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);
  const onClickList = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "remocontrol",
    css: RemoteControlWrapper(FixedRemote),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, post === null || post === void 0 ? void 0 : post.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HomeFilled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => router.push(`/${(post === null || post === void 0 ? void 0 : post.category) === "culture" ? "class" : post === null || post === void 0 ? void 0 : post.category}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RollbackOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, prevPost[0] ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${prevPost[0].id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, nextPost[0] ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${nextPost[0].id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: onClickList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["VerticalAlignTopOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }))), (user === null || user === void 0 ? void 0 : user.id) === 1 && user.admin && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => {
      dispatch({
        type: _reducers_blog__WEBPACK_IMPORTED_MODULE_8__["POST_EDIT_ON"]
      });
      router.push("/admin");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditFilled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => showModal(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    style: {
      margin: "0.5rem 0 3rem 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      margin: 0
    },
    items: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    currentClassName: "blog_post_selected",
    offset: 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, timelineLists(), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Timeline"].Item, {
    style: {
      width: "100%",
      paddingBottom: 0
    },
    className: "ant-timeline-item-last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    href: `#comment`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, "Comments"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isModalVisible: isModalVisible,
    handleOk: handleOk,
    handleCancel: handleCancel,
    password: password,
    onChangePassword: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoteControl);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./util/useInput.ts":
/*!**************************!*\
  !*** ./util/useInput.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInput(initialValue) {
  const {
    0: Value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [Value, handler, setValue];
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQWRtaW4vQWRtaW5Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CbG9nL0NvbW1lbnRzL1JlbW90ZUNvbnRyb2wudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3V0aWwvdXNlSW5wdXQudHMiXSwibmFtZXMiOlsiQWRtaW5Nb2RhbCIsImlzTW9kYWxWaXNpYmxlIiwiaGFuZGxlT2siLCJoYW5kbGVDYW5jZWwiLCJvbkNoYW5nZVBhc3N3b3JkIiwicGFzc3dvcmQiLCJSZW1vdGVDb250cm9sV3JhcHBlciIsIkZpeGVkUmVtb3RlIiwiY3NzIiwiUmVtb3RlQ29udHJvbCIsIkZ1bGxjb250ZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInBvc3QiLCJwcmV2UG9zdCIsIm5leHRQb3N0IiwicmVtb3ZlUG9zdERvbmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZUlucHV0Iiwic2V0Rml4ZWRSZW1vdGUiLCJ1c2VTdGF0ZSIsImhlYWRlcnMiLCJzZXRIZWFkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2V0SXNNb2RhbFZpc2libGUiLCJ1c2VFZmZlY3QiLCJzY3JvbGxDYWxsQmFjayIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRlbnRIZWFkZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJyIiwiZm9yRWFjaCIsInYiLCJpIiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwicHVzaCIsImlubmVySFRNTCIsInRpbWVsaW5lTGlzdHMiLCJ1c2VDYWxsYmFjayIsIm1hcCIsIndpZHRoIiwic2hvd01vZGFsIiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiUG9zdElkIiwiaWQiLCJ0YWdzIiwiSGFzaHRhZ3MiLCJtZXNzYWdlIiwic3VjY2VzcyIsIm9uQ2xpY2tMaXN0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJ0aXRsZSIsImNhdGVnb3J5IiwiY29sb3IiLCJhZG1pbiIsIlBPU1RfRURJVF9PTiIsImZhVHJhc2giLCJtYXJnaW4iLCJwYWRkaW5nQm90dG9tIiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwiVmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFVQSxNQUFNQSxVQUEwQixHQUFHLENBQUM7QUFDbENDLGdCQURrQztBQUVsQ0MsVUFGa0M7QUFHbENDLGNBSGtDO0FBSWxDQyxrQkFKa0M7QUFLbENDO0FBTGtDLENBQUQsS0FNN0I7QUFDSixTQUNFLDJEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFDLDZCQURSO0FBRUUsV0FBTyxFQUFFSixjQUZYO0FBR0UsUUFBSSxFQUFFQyxRQUhSO0FBSUUsWUFBUSxFQUFFQyxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZJQU5GLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2VEFWRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1VBZEYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRSwyREFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBSyxFQUFFRSxRQUF2QjtBQUFpQyxZQUFRLEVBQUVELGdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBREY7QUFzQkQsQ0E3QkQ7O0FBK0JlSix5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7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QSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTFDOztBQUNBLFVBQUlDLFFBQVEsSUFBWixXQUEyQjtBQUN6QkEsZ0JBQVEsQ0FBUkEsU0FBUSxDQUFSQTtBQUVIO0FBTkRGO0FBRGUsS0FBakIsT0FBaUIsQ0FBakI7QUFVQUYsV0FBUyxDQUFUQSxRQUVHQyxRQUFRLEdBQUc7QUFBQTtBQUFBO0FBRmREO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7O0FDM0dELGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2xILFFBQVQsQ0FBa0J1SCxZQUFsQixFQUFxQztBQUNsRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0J2SCxzREFBUSxDQUFDcUgsWUFBRCxDQUFsQztBQUNBLFFBQU1HLE9BQU8sR0FBR2hHLHlEQUFXLENBQUUrQixDQUFELElBQTRDO0FBQ3RFZ0UsWUFBUSxDQUFDaEUsQ0FBQyxDQUFDRCxNQUFGLENBQVNtRSxLQUFWLENBQVI7QUFDRCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjtBQUdBLFNBQU8sQ0FBQ0gsS0FBRCxFQUFRRSxPQUFSLEVBQWlCRCxRQUFqQixDQUFQO0FBQ0QsQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcImFudGQvbGliL21vZGFsL01vZGFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG4gIGhhbmRsZU9rOiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNhbmNlbDogKCkgPT4gdm9pZDtcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlUGFzc3dvcmQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEFkbWluTW9kYWw6IEZDPE1vZGFsUHJvcHM+ID0gKHtcclxuICBpc01vZGFsVmlzaWJsZSxcclxuICBoYW5kbGVPayxcclxuICBoYW5kbGVDYW5jZWwsXHJcbiAgb25DaGFuZ2VQYXNzd29yZCxcclxuICBwYXNzd29yZCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9XCJQbGVhc2UgRW50ZXIgQWRtaW4gcGFzc3dvcmRcIlxyXG4gICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICA+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoaXMgZnVjbnRpb24gaXMgZm9yIEFETUlOIG9ubHkuIElmIHlvdSBhcmUgbm90IGEgYWRtaW5pc3RyYXRvciwgcGxlYXNlIGdvIGJhY2sgYW5kIGZlZWRiYWNrXHJcbiAgICAgICAgdG8gdXMuIFRoYW5rIHlvdSBmb3IgeW91ciBjb29wZXJhdGF0aW9uLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIOydtCDquLDriqXsnYAg6rSA66as7J6QIOyghOyaqeyeheuLiOuLpC4g7JiI6riw7LmYIOuqu+2VmOqyjCDsmKTshajsnYTqsr3smrAg7ZS865Oc67CxIOyjvOyLnOuptCDsoJXrp5Ag6rCQ7IKs7ZWY6rKg7Iq164uI64ukLlxyXG4gICAgICAgIO2Ykeugpe2VtOyjvOyFlOyEnCDqsJDsgqztlanri4jri6QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAg44GT44Gu5qmf6IO944Gv566h55CG6ICF5bCC55So44Gn44GU44GW44GE44G+44GZ44CB5L2V44GM5ZWP6aGM44GM55m655Sf44GX44Gf5aC05ZCI44Gv566h55CG6ICF44Gr55u05o6l44GU6YCj57Wh44GX44Gm6aCC44GR44KM44Gw5bm444GE44Gg44Go5oCd44GE44G+44GZ44CCXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxJbnB1dC5QYXNzd29yZCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Nb2RhbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCB7XHJcbiAgRG91YmxlTGVmdE91dGxpbmVkLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZWQsXHJcbiAgRWRpdEZpbGxlZCxcclxuICBIb21lRmlsbGVkLFxyXG4gIFJvbGxiYWNrT3V0bGluZWQsXHJcbiAgVmVydGljYWxBbGlnblRvcE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBmYVRyYXNoIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIG1lc3NhZ2UsIFRpbWVsaW5lIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gXCJyZWFjdC1zY3JvbGxzcHlcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL0ByZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBQT1NUX0VESVRfT04gfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzL2Jsb2dcIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBBZG1pbk1vZGFsIGZyb20gXCIuLi9BZG1pbi9BZG1pbk1vZGFsXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3QgUmVtb3RlQ29udHJvbFdyYXBwZXIgPSAoRml4ZWRSZW1vdGU6IGJvb2xlYW4pID0+IGNzc2BcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIGZsZXhkLWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogJHtGaXhlZFJlbW90ZSA/IFwic3RpY2t5XCIgOiBcInN0YXRpY1wifTtcclxuICB0b3A6IDUuMzc1cmVtO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICB1bDpmaXJzdC1vZi10eXBlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZW1vdGVDb250cm9sOiBGQzx7IEZ1bGxjb250ZW50OiBzdHJpbmcgfT4gPSAoeyBGdWxsY29udGVudCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgcG9zdCwgcHJldlBvc3QsIG5leHRQb3N0LCByZW1vdmVQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtGaXhlZFJlbW90ZSwgc2V0Rml4ZWRSZW1vdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoZWFkZXJzLCBzZXRIZWFkZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNjcm9sbENhbGxCYWNrKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA0MDApIHtcclxuICAgICAgICBzZXRGaXhlZFJlbW90ZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRGaXhlZFJlbW90ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENhbGxCYWNrKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNvbnRlbnRIZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIudHVpLWVkaXRvci1jb250ZW50cyBoMSwgLnR1aS1lZGl0b3ItY29udGVudHMgaDJcIlxyXG4gICAgKTtcclxuICAgIGxldCBhcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb250ZW50SGVhZGVycy5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgIHYuc2V0QXR0cmlidXRlKFwiaWRcIiwgU3RyaW5nKGkpKTtcclxuICAgICAgYXJyLnB1c2godi5pbm5lckhUTUwpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRIZWFkZXJzKGFycik7XHJcbiAgfSwgW0Z1bGxjb250ZW50XSk7XHJcblxyXG4gIGNvbnN0IHRpbWVsaW5lTGlzdHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICByZXR1cm4gaGVhZGVycy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgPFRpbWVsaW5lLkl0ZW0gY29sb3I9XCJncmF5XCIga2V5PXtpfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgPGEgaHJlZj17YCMke2l9YH0+e3Z9PC9hPlxyXG4gICAgICA8L1RpbWVsaW5lLkl0ZW0+XHJcbiAgICApKTtcclxuICB9LCBbaGVhZGVyc10pO1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBQb3N0SWQ6IHBvc3Q/LmlkLCBwYXNzd29yZCwgdGFnczogcG9zdD8uSGFzaHRhZ3MgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlbW92ZVBvc3REb25lKSB7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlJlbW92ZWQgUG9zdCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2gsIHJvdXRlciwgcmVtb3ZlUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xpc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vY29udHJvbFwiIGNzcz17UmVtb3RlQ29udHJvbFdyYXBwZXIoRml4ZWRSZW1vdGUpfT5cclxuICAgICAgPGgyPntwb3N0Py50aXRsZX08L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8SG9tZUZpbGxlZCAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke3Bvc3Q/LmNhdGVnb3J5ID09PSBcImN1bHR1cmVcIiA/IFwiY2xhc3NcIiA6IHBvc3Q/LmNhdGVnb3J5fWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFJvbGxiYWNrT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tMaXN0fT5cclxuICAgICAgICAgIHtwcmV2UG9zdFswXSA/IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3Q/LmNhdGVnb3J5fS9wb3N0LyR7cHJldlBvc3RbMF0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8RG91YmxlTGVmdE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiIH19IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICA8bGkgb25DbGljaz17b25DbGlja0xpc3R9PlxyXG4gICAgICAgICAge25leHRQb3N0WzBdID8gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdD8uY2F0ZWdvcnl9L3Bvc3QvJHtuZXh0UG9zdFswXS5pZH1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxEb3VibGVSaWdodE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8RG91YmxlUmlnaHRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuMilcIiB9fSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xpc3R9PlxyXG4gICAgICAgICAgICA8VmVydGljYWxBbGlnblRvcE91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7dXNlcj8uaWQgPT09IDEgJiYgdXNlci5hZG1pbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRURJVF9PTixcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FkbWluXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEZpbGxlZCAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbCgpfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiMC41cmVtIDAgM3JlbSAwXCIgfX0gLz5cclxuICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMCB9fVxyXG4gICAgICAgIGl0ZW1zPXtbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl19XHJcbiAgICAgICAgY3VycmVudENsYXNzTmFtZT1cImJsb2dfcG9zdF9zZWxlY3RlZFwiXHJcbiAgICAgICAgb2Zmc2V0PXszMDB9XHJcbiAgICAgID5cclxuICAgICAgICB7dGltZWxpbmVMaXN0cygpfVxyXG4gICAgICAgIDxUaW1lbGluZS5JdGVtXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdCb3R0b206IDAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFudC10aW1lbGluZS1pdGVtLWxhc3RcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhIGhyZWY9e2AjY29tbWVudGB9PkNvbW1lbnRzPC9hPlxyXG4gICAgICAgIDwvVGltZWxpbmUuSXRlbT5cclxuICAgICAgPC9TY3JvbGxzcHk+XHJcbiAgICAgIDxBZG1pbk1vZGFsXHJcbiAgICAgICAgaXNNb2RhbFZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIGhhbmRsZU9rPXtoYW5kbGVPa31cclxuICAgICAgICBoYW5kbGVDYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2VQYXNzd29yZD17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW1vdGVDb250cm9sO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VJbnB1dChpbml0aWFsVmFsdWU6IGFueSkge1xyXG4gIGNvbnN0IFtWYWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbVmFsdWUsIGhhbmRsZXIsIHNldFZhbHVlXTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9