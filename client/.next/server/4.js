exports.ids = [4];
exports.modules = {

/***/ "./components/Admin/Editor.tsx":
/*!*************************************!*\
  !*** ./components/Admin/Editor.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @toast-ui/react-editor */ "@toast-ui/react-editor");
/* harmony import */ var _toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toast_ui_react_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Admin\\Editor.tsx";






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
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_POST_IMAGE_REQUEST"],
          data: imageFormData
        });
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PostEditor);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkbWluL0VkaXRvci50c3giXSwibmFtZXMiOlsiUG9zdEVkaXRvciIsInBvc3QiLCJlZGl0b3JSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicG9zdEVkaXRPbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJibG9nIiwiY29udGVudCIsImFkZEltYWdlQmxvYkhvb2siLCJibG9iIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNBLFVBQVQsQ0FBb0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQXBCLEVBQXNEO0FBQ3BELFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBaUJDLCtEQUFXLENBQUVDLEtBQUQsSUFBc0JBLEtBQUssQ0FBQ0MsSUFBN0IsQ0FBbEM7QUFDQSxTQUNFLDJEQUFDLDZEQUFEO0FBQ0UsZUFBVyxFQUFDLGVBRGQ7QUFFRSxVQUFNLEVBQUMsT0FGVDtBQUdFLGdCQUFZLEVBQUVILFVBQVUsSUFBSUEsVUFBZCxHQUEyQkosSUFBM0IsYUFBMkJBLElBQTNCLHVCQUEyQkEsSUFBSSxDQUFFUSxPQUFqQyxHQUEyQyxJQUgzRDtBQUlFLG1CQUFlLEVBQUMsVUFKbEI7QUFLRSxzQkFBa0IsRUFBRSxJQUx0QjtBQU1FLG1CQUFlLEVBQUUsS0FObkI7QUFPRSxPQUFHLEVBQUVQLFNBUFA7QUFRRSxTQUFLLEVBQUU7QUFDTFEsc0JBQWdCLEVBQUUsTUFBT0MsSUFBUCxJQUFnQjtBQUNoQyxjQUFNQyxhQUFhLEdBQUcsSUFBSUMsUUFBSixFQUF0QjtBQUNBRCxxQkFBYSxDQUFDRSxNQUFkLENBQXFCLE9BQXJCLEVBQThCSCxJQUE5QjtBQUNBUixnQkFBUSxDQUFDO0FBQ1BZLGNBQUksRUFBRUMsd0VBREM7QUFFUEMsY0FBSSxFQUFFTDtBQUZDLFNBQUQsQ0FBUjtBQUlEO0FBUkksS0FSVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFxQkQ7O0FBRWNaLHlFQUFmLEUiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIkB0b2FzdC11aS9yZWFjdC1lZGl0b3JcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVQTE9BRF9QT1NUX0lNQUdFX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vQHJlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL0ByZWR1Y2Vyc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdEVkaXRvcih7IHBvc3QsIGVkaXRvclJlZiB9KTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHBvc3RFZGl0T24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5ibG9nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEVkaXRvclxyXG4gICAgICBwbGFjZWhvbGRlcj1cIldlbGNvbWUgTm9haCFcIlxyXG4gICAgICBoZWlnaHQ9XCI2MDBweFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZT17cG9zdEVkaXRPbiAmJiBwb3N0RWRpdE9uID8gcG9zdD8uY29udGVudCA6IG51bGx9XHJcbiAgICAgIGluaXRpYWxFZGl0VHlwZT1cIm1hcmtkb3duXCJcclxuICAgICAgdXNlQ29tbWFuZFNob3J0Y3V0PXt0cnVlfVxyXG4gICAgICB1c2FnZVN0YXRpc3RpY3M9e2ZhbHNlfVxyXG4gICAgICByZWY9e2VkaXRvclJlZn1cclxuICAgICAgaG9va3M9e3tcclxuICAgICAgICBhZGRJbWFnZUJsb2JIb29rOiBhc3luYyAoYmxvYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBibG9iKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RFZGl0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=