exports.ids = [23];
exports.modules = {

/***/ "sOL2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eyoT");
/* harmony import */ var _toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SDl8");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);






function PostEditor({
  post,
  editorRef
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    postEditOn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.blog);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    placeholder: "Welcome Noah!",
    height: "600px",
    initialValue: postEditOn && postEditOn ? post === null || post === void 0 ? void 0 : post.content : null,
    initialEditType: "markdown",
    useCommandShortcut: true,
    usageStatistics: false,
    ref: editorRef,
    hooks: {
      addImageBlobHook: async blob => {
        const imageFormData = new FormData();
        imageFormData.append("image", blob);
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* UPLOAD_POST_IMAGE_REQUEST */ "sb"],
          data: imageFormData
        });
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PostEditor);

/***/ })

};;