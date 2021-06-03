exports.ids = [4];
exports.modules = {

/***/ "./components/Blog/Admin/Editor.tsx":
/*!******************************************!*\
  !*** ./components/Blog/Admin/Editor.tsx ***!
  \******************************************/
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@reducers/post */ "./@reducers/post.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Noah\\Desktop\\Project\\Noahworld\\client\\components\\Blog\\Admin\\Editor.tsx";






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2cvQWRtaW4vRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJQb3N0RWRpdG9yIiwicG9zdCIsImVkaXRvclJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJwb3N0RWRpdE9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImJsb2ciLCJjb250ZW50IiwiYWRkSW1hZ2VCbG9iSG9vayIsImJsb2IiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBcEIsRUFBc0Q7QUFDcEQsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFpQkMsK0RBQVcsQ0FBRUMsS0FBRCxJQUFzQkEsS0FBSyxDQUFDQyxJQUE3QixDQUFsQztBQUNBLFNBQ0UsMkRBQUMsNkRBQUQ7QUFDRSxlQUFXLEVBQUMsZUFEZDtBQUVFLFVBQU0sRUFBQyxPQUZUO0FBR0UsZ0JBQVksRUFBRUgsVUFBVSxJQUFJQSxVQUFkLEdBQTJCSixJQUEzQixhQUEyQkEsSUFBM0IsdUJBQTJCQSxJQUFJLENBQUVRLE9BQWpDLEdBQTJDLElBSDNEO0FBSUUsbUJBQWUsRUFBQyxVQUpsQjtBQUtFLHNCQUFrQixFQUFFLElBTHRCO0FBTUUsbUJBQWUsRUFBRSxLQU5uQjtBQU9FLE9BQUcsRUFBRVAsU0FQUDtBQVFFLFNBQUssRUFBRTtBQUNMUSxzQkFBZ0IsRUFBRSxNQUFPQyxJQUFQLElBQWdCO0FBQ2hDLGNBQU1DLGFBQWEsR0FBRyxJQUFJQyxRQUFKLEVBQXRCO0FBQ0FELHFCQUFhLENBQUNFLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEJILElBQTlCO0FBQ0FSLGdCQUFRLENBQUM7QUFDUFksY0FBSSxFQUFFQyx3RUFEQztBQUVQQyxjQUFJLEVBQUVMO0FBRkMsU0FBRCxDQUFSO0FBSUQ7QUFSSSxLQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQXFCRDs7QUFFY1oseUVBQWYsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiQHRvYXN0LXVpL3JlYWN0LWVkaXRvclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVVBMT0FEX1BPU1RfSU1BR0VfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi9AcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vQHJlZHVjZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0RWRpdG9yKHsgcG9zdCwgZWRpdG9yUmVmIH0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgcG9zdEVkaXRPbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmJsb2cpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RWRpdG9yXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiV2VsY29tZSBOb2FoIVwiXHJcbiAgICAgIGhlaWdodD1cIjYwMHB4XCJcclxuICAgICAgaW5pdGlhbFZhbHVlPXtwb3N0RWRpdE9uICYmIHBvc3RFZGl0T24gPyBwb3N0Py5jb250ZW50IDogbnVsbH1cclxuICAgICAgaW5pdGlhbEVkaXRUeXBlPVwibWFya2Rvd25cIlxyXG4gICAgICB1c2VDb21tYW5kU2hvcnRjdXQ9e3RydWV9XHJcbiAgICAgIHVzYWdlU3RhdGlzdGljcz17ZmFsc2V9XHJcbiAgICAgIHJlZj17ZWRpdG9yUmVmfVxyXG4gICAgICBob29rcz17e1xyXG4gICAgICAgIGFkZEltYWdlQmxvYkhvb2s6IGFzeW5jIChibG9iKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGJsb2IpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfUE9TVF9JTUFHRV9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEVkaXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==