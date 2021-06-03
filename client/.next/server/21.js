exports.ids = [21];
exports.modules = {

/***/ "2lGT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return marginCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return paddingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return noSearchPostCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SM_Header_Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SM_Header_Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SM_Header_SeachForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SM_Header_Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TitleProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoPostProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProfilePointTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComment; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("obyI");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const marginCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:", top, " ", right, " ", bottom, " ", left, ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const paddingCSS = (top, right, bottom, left) =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:", top, " ", right, " ", bottom, " ", left, ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const noSearchPostCSS = true ? {
  name: "1q40upl",
  styles: "width:100%;padding:1rem 0;border-bottom:1px solid rgba(0, 0, 0, 0.07);position:relative;display:flex;flex-direction:column;align-items:center;img{width:80px;opacity:0.3;}h3{text-align:center;}"
} : undefined;
const SM_Header_Input = onSearch =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSearch ? "transform: translateY(0); transition: all 0.3s; margin-bottom: 1rem" : "transform: translateY(-200%); transition: all 0.3s; position: absolute; left: 0 ", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_Menu = onMenu =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onMenu ? "background-color: white; border: 1px solid rgba(0, 0, 0, 0.1); border-bottom: none; overflow: inherit;" : "border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden;", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_SeachForm = onSlide =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onSlide ? "display: block; overflow: hidden" : "display:none", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const SM_Header_Title = onTitle =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])(onTitle ? "transform: translateY(-100%); transition: all 0.5s; width: 70%;" : "transform: translateY(0); transition: all 0.5s;", ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const TitleProfile = true ? {
  name: "1dyrmug",
  styles: "white-space:nowrap;display:inline-block;margin-left:0.5rem;width:100%;overflow:hidden;text-overflow:ellipsis"
} : undefined;
const NoPostProfile = true ? {
  name: "bmscbf",
  styles: "display:flex;align-items:center;flex-direction:column;opacity:0.3;img{width:100px;}"
} : undefined;
const ProfilePointTitle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("color:", _config__WEBPACK_IMPORTED_MODULE_1__[/* BLUE_COLOR */ "c"], ";margin-left:0.3rem;" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);
const DeleteComment = removeModal =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"])("visibility:", removeModal ? "initial" : "hidden", ";animation:", removeModal ? "0.5s fadeIn" : "none", ";h2{text-align:center;color:white;}div{display:flex;justify-content:center;}" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);

/***/ }),

/***/ "KOAa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/react-image-crop/dist/ReactCrop.css
var ReactCrop = __webpack_require__("hzVQ");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./@reducers/user.ts
var _reducers_user = __webpack_require__("N61D");

// EXTERNAL MODULE: ./@reducers/post.ts
var post = __webpack_require__("SDl8");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// CONCATENATED MODULE: ./components/Blog/Profile/WelcomeTable.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const WelcomeTableWrapper = /*#__PURE__*/base_default()(external_antd_["Col"], true ? {
  target: "e1phk6fn0"
} : undefined)(true ? {
  name: "1aalwl1",
  styles: "text-align:center;padding-right:1rem;position:relative"
} : undefined);

const WelcomeTable = ({
  visible
}) => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  return Object(react_["jsx"])(WelcomeTableWrapper, {
    xs: visible ? 24 : 0,
    sm: 8,
    lg: 6
  }, Object(react_["jsx"])("h2", {
    style: {
      margin: "1rem 0"
    }
  }, "Welcome\xA0", user && user.name, "\xA0\uD83D\uDE04"), Object(react_["jsx"])(external_antd_["Divider"], null), Object(react_["jsx"])(external_antd_["Row"], {
    style: {
      margin: "2rem 0"
    }
  }, Object(react_["jsx"])(external_antd_["Col"], {
    style: {
      borderRight: "1px solid rgba(0,0,0,0.1)"
    },
    span: 8
  }, Object(react_["jsx"])("h4", {
    style: {
      fontSize: "0.85rem"
    }
  }, "Comments"), Object(react_["jsx"])("h4", {
    style: {
      margin: "0.5rem 0",
      fontSize: "1rem",
      color: config["c" /* BLUE_COLOR */]
    }
  }, user !== null && user !== void 0 && user.Comments ? user.Comments.length : 0)), Object(react_["jsx"])(external_antd_["Col"], {
    style: {
      borderRight: "1px solid rgba(0,0,0,0.1)"
    },
    span: 8
  }, Object(react_["jsx"])("h4", {
    style: {
      fontSize: "0.85rem"
    }
  }, "Likes"), Object(react_["jsx"])("h4", {
    style: {
      margin: "0.5rem 0",
      fontSize: "1rem",
      color: config["c" /* BLUE_COLOR */]
    }
  }, user !== null && user !== void 0 && user.PostLiked ? user.PostLiked.length : 0)), Object(react_["jsx"])(external_antd_["Col"], {
    span: 8
  }, Object(react_["jsx"])("h4", {
    style: {
      fontSize: "0.85rem"
    }
  }, "Posts"), Object(react_["jsx"])("h4", {
    style: {
      margin: "0.5rem 0",
      fontSize: "1rem",
      color: config["c" /* BLUE_COLOR */]
    }
  }, user !== null && user !== void 0 && user.Posts ? user.Posts.length : 0))), (user === null || user === void 0 ? void 0 : user.id) === 1 && user.admin && Object(react_["jsx"])(link_default.a, {
    href: "/admin"
  }, Object(react_["jsx"])("a", {
    style: {
      padding: "1rem 0"
    }
  }, "Administor Here!")));
};
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: ./styles/emotion.ts
var emotion = __webpack_require__("2lGT");

// CONCATENATED MODULE: ./components/Blog/Profile/ViewTable.tsx









const RecentTable = /*#__PURE__*/base_default()(external_antd_["Col"], true ? {
  target: "e1bjv22h0"
} : undefined)("transition:all 0.3s;cursor:pointer;&:hover{h2{color:", config["c" /* BLUE_COLOR */], ";}}" + (true ? "" : undefined));

const ViewTable = ({
  visible
}) => {
  const router = Object(client_router["useRouter"])();
  const {
    recentViewPost
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  return Object(react_["jsx"])(RecentTable, {
    style: {
      padding: "0 1rem"
    },
    xs: visible ? 24 : 0,
    sm: 8,
    lg: 6
  }, Object(react_["jsx"])("h2", {
    style: {
      textAlign: "center",
      margin: "1rem 0"
    }
  }, "Recent View \uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F "), Object(react_["jsx"])(external_antd_["Divider"], null), recentViewPost ? Object(react_["jsx"])("div", {
    onClick: () => router.push(`/${recentViewPost === null || recentViewPost === void 0 ? void 0 : recentViewPost.category}/post/${recentViewPost === null || recentViewPost === void 0 ? void 0 : recentViewPost.id}`)
  }, Object(react_["jsx"])("h3", {
    style: {
      margin: "1rem 0"
    }
  }, "\xB7 Post Number: ", Object(react_["jsx"])("span", {
    css: emotion["c" /* ProfilePointTitle */]
  }, recentViewPost === null || recentViewPost === void 0 ? void 0 : recentViewPost.id)), Object(react_["jsx"])("h3", {
    style: {
      margin: "1rem 0"
    }
  }, "\xB7 Post Title: ", Object(react_["jsx"])("br", null)), Object(react_["jsx"])("span", {
    css: emotion["h" /* TitleProfile */]
  }, recentViewPost === null || recentViewPost === void 0 ? void 0 : recentViewPost.title), Object(react_["jsx"])("h3", {
    style: {
      margin: "1rem 0"
    }
  }, "\xB7 Total Post Views:", Object(react_["jsx"])("span", {
    css: emotion["c" /* ProfilePointTitle */]
  }, recentViewPost === null || recentViewPost === void 0 ? void 0 : recentViewPost.hit))) : Object(react_["jsx"])("div", {
    css: emotion["b" /* NoPostProfile */]
  }, Object(react_["jsx"])("img", {
    alt: "noPost",
    src: "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
  }), Object(react_["jsx"])("h4", null, "No Post")));
};
// CONCATENATED MODULE: ./components/Blog/Profile/CommentTable.tsx









const CommentTable_RecentTable = /*#__PURE__*/base_default()(external_antd_["Col"], true ? {
  target: "e152zgd90"
} : undefined)("transition:all 0.3s;cursor:pointer;padding-left:1rem;h2{text-align:center;margin:1rem 0;}&:hover{h2{color:", config["c" /* BLUE_COLOR */], ";}}h3{margin:1rem 0;}" + (true ? "" : undefined));

const CommentTable = ({
  visible
}) => {
  var _recentCommentPost$Co;

  const router = Object(client_router["useRouter"])();
  const {
    recentCommentPost
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  return Object(react_["jsx"])(CommentTable_RecentTable, {
    xs: visible ? 24 : 0,
    sm: 8,
    lg: 6
  }, Object(react_["jsx"])("h2", null, "Recent Comment \uD83D\uDCDD"), Object(react_["jsx"])(external_antd_["Divider"], null), recentCommentPost !== null && recentCommentPost !== void 0 && recentCommentPost.Comments ? Object(react_["jsx"])("div", {
    onClick: () => router.push(`/${recentCommentPost === null || recentCommentPost === void 0 ? void 0 : recentCommentPost.category}/post/${recentCommentPost === null || recentCommentPost === void 0 ? void 0 : recentCommentPost.id}`)
  }, Object(react_["jsx"])("h3", null, "\xB7 Post Number: ", Object(react_["jsx"])("span", {
    css: emotion["c" /* ProfilePointTitle */]
  }, recentCommentPost === null || recentCommentPost === void 0 ? void 0 : recentCommentPost.id), " "), Object(react_["jsx"])("h3", null, "\xB7 Post Title: ", Object(react_["jsx"])("br", null)), Object(react_["jsx"])("span", {
    css: emotion["h" /* TitleProfile */]
  }, recentCommentPost === null || recentCommentPost === void 0 ? void 0 : recentCommentPost.title), Object(react_["jsx"])("h3", null, "\xB7 Your comment:", Object(react_["jsx"])("br", null)), Object(react_["jsx"])("span", {
    css: emotion["h" /* TitleProfile */]
  }, recentCommentPost === null || recentCommentPost === void 0 ? void 0 : (_recentCommentPost$Co = recentCommentPost.Comments[0]) === null || _recentCommentPost$Co === void 0 ? void 0 : _recentCommentPost$Co.content)) : Object(react_["jsx"])("div", {
    css: emotion["b" /* NoPostProfile */]
  }, Object(react_["jsx"])("img", {
    alt: "noPost",
    src: "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
  }), Object(react_["jsx"])("h4", null, "No Post")));
};
// EXTERNAL MODULE: external "antd/lib/modal/Modal"
var Modal_ = __webpack_require__("mL3h");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: external "react-image-crop"
var external_react_image_crop_ = __webpack_require__("i1JB");
var external_react_image_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_image_crop_);

// EXTERNAL MODULE: ./util/useInput.ts
var useInput = __webpack_require__("zpkv");

// CONCATENATED MODULE: ./components/Blog/Profile/CropImageModal.tsx








const CropImageModal = /*#__PURE__*/Object(external_react_["memo"])(({
  isModalVisible,
  setIsModalVisible,
  user
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [url, onChangeUrl, setUrl] = Object(useInput["a" /* default */])("");
  const {
    0: upImg,
    1: setUpImg
  } = Object(external_react_["useState"])(null);
  const imgRef = Object(external_react_["useRef"])(null);
  const previewCanvasRef = Object(external_react_["useRef"])(null);
  const {
    0: completedCrop,
    1: setCompletedCrop
  } = Object(external_react_["useState"])(null);
  const {
    0: blob,
    1: setBlob
  } = Object(external_react_["useState"])(null);
  const {
    0: crop,
    1: setCrop
  } = Object(external_react_["useState"])({
    unit: "px",
    width: 200,
    aspect: 1 / 1
  });
  const handleOk = Object(external_react_["useCallback"])(() => {
    //5. blob 객체와 user id를 서버에 요청하기위해 form을 만듭니다.
    const form = new FormData();
    form.append("image", blob);
    form.append("id", String(user === null || user === void 0 ? void 0 : user.id));
    dispatch({
      type: _reducers_user["c" /* ADD_ICON_REQUEST */],
      data: form
    });
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
  }, [blob, user === null || user === void 0 ? void 0 : user.id]);
  const handleCancel = Object(external_react_["useCallback"])(() => {
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
  }, []);

  const onSelectFile = e => {
    //1-1. React-crop 공식문서의 내용입니다. 이미지를 로드해줍니다.
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = Object(external_react_["useCallback"])(img => {
    imgRef.current = img;
  }, []);
  Object(external_react_["useEffect"])(() => {
    //3. React-crop 공식문서의 내용입니다. canvas에 자른 이미지를 표시하는 함수입니다.
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    new Promise(() => {
      canvas.toBlob( //4. 자른 이미지를 Blob 객체로 바꿔 state에 저장합니다.
      blob => {
        setBlob(blob);
      }, "image/png", 1);
    });
  }, [completedCrop]);
  return Object(react_["jsx"])(Modal_default.a, {
    title: "Icon Upload \uD83D\uDDBC\uFE0F",
    visible: isModalVisible,
    onOk: handleOk,
    onCancel: handleCancel
  }, Object(react_["jsx"])("h3", null, "Set icon from Local storage"), Object(react_["jsx"])("input", {
    style: {
      marginBottom: "1.5rem"
    },
    type: "file",
    accept: "image/*",
    disabled: url ? true : false,
    onChange: onSelectFile
  }), Object(react_["jsx"])("h3", null, "Set icon by using URL"), Object(react_["jsx"])(external_antd_["Input"], {
    disabled: upImg ? true : false,
    value: url,
    onChange: onChangeUrl,
    placeholder: "https://"
  }), (url || upImg) && Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("h3", null, "Crop the image for icon size."), Object(react_["jsx"])(external_react_image_crop_default.a, {
    crossorigin: "anonymous",
    style: {
      width: "100%"
    },
    imageStyle: {
      width: "100%"
    },
    src: upImg || url,
    onImageLoaded: onLoad,
    crop: crop,
    onChange: c => setCrop(c),
    onComplete: c => setCompletedCrop(c)
  }), Object(react_["jsx"])("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, Object(react_["jsx"])("canvas", {
    ref: previewCanvasRef,
    style: {
      width: "50%",
      height: "50%",
      borderRadius: "50%"
    }
  })), Object(react_["jsx"])("h2", {
    style: {
      textAlign: "center"
    }
  }, user === null || user === void 0 ? void 0 : user.name)));
});
/* harmony default export */ var Profile_CropImageModal = (/*#__PURE__*/Object(external_react_["memo"])(CropImageModal));
// CONCATENATED MODULE: ./components/Blog/Profile/UserProfile.tsx


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable jsx-a11y/anchor-has-content */

/* eslint-disable jsx-a11y/anchor-is-valid */

















const Camera = /*#__PURE__*/base_default()(icons_["CameraFilled"], true ? {
  target: "e19kxldl1"
} : undefined)("position:absolute;bottom:0;right:0;font-size:2rem;float:right;cursor:pointer;transition:all 0.3s;&:hover{transform:scale(1.1);color:", config["c" /* BLUE_COLOR */], ";}" + (true ? "" : undefined));

const Close = /*#__PURE__*/base_default()(react_fontawesome_["FontAwesomeIcon"], true ? {
  target: "e19kxldl0"
} : undefined)("position:absolute;bottom:0;right:0;font-size:2rem;float:right;cursor:pointer;transition:all 0.3s;&:hover{transform:scale(1.1);color:", config["c" /* BLUE_COLOR */], ";}" + (true ? "" : undefined));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const UserProfile = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    user,
    addIconDone,
    removeIconDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (addIconDone) {
      external_antd_["message"].success("Successfully added your own icon 👍");
    }

    if (removeIconDone) {
      external_antd_["message"].success("Successfully removed your icon.");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [addIconDone, removeIconDone]);
  Object(external_react_["useEffect"])(() => {
    if (!user) {
      return;
    }

    dispatch({
      type: post["U" /* LOAD_RECENT_POSTS_REQUEST */],
      data: user
    });
  }, [dispatch, user]);

  const handleImgError = e => {
    e.target.src = "/images/blog/default-user.png";
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, user && Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(external_antd_["Row"], {
    className: "blog_header_profile"
  }, Object(react_["jsx"])(external_antd_["Col"], {
    style: {
      paddingRight: "1rem",
      marginBottom: "1.5rem"
    },
    xs: 24,
    lg: 6
  }, Object(react_["jsx"])("div", {
    style: {
      position: "relative",
      width: "200px",
      height: "200px",
      margin: "0 auto"
    }
  }, Object(react_["jsx"])("img", {
    style: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      boxShadow: "4px 8px 21px 1px rgba(0, 0, 0, 0.15)"
    },
    src: user === null || user === void 0 ? void 0 : user.icon.replace(/\/thumb\//, "/original/"),
    onError: handleImgError,
    alt: "profile_img"
  }), (user === null || user === void 0 ? void 0 : user.icon) === "/images/blog/default-user.png" ? Object(react_["jsx"])(Camera, {
    onClick: () => setIsModalVisible(true)
  }) : Object(react_["jsx"])(Close, {
    onClick: () => dispatch({
      type: _reducers_user["H" /* REMOVE_ICON_REQUEST */],
      data: user.id
    }),
    icon: free_solid_svg_icons_["faTrashAlt"]
  }))), Object(react_["jsx"])(WelcomeTable, {
    visible: false
  }), Object(react_["jsx"])(ViewTable, {
    visible: false
  }), Object(react_["jsx"])(CommentTable, {
    visible: false
  })), Object(react_["jsx"])(external_react_slick_default.a, _extends({
    className: "profile_table"
  }, settings), Object(react_["jsx"])(WelcomeTable, {
    visible: true
  }), Object(react_["jsx"])(ViewTable, {
    visible: true
  }), Object(react_["jsx"])(CommentTable, {
    visible: true
  }))), Object(react_["jsx"])(Profile_CropImageModal, {
    setIsModalVisible: setIsModalVisible,
    isModalVisible: isModalVisible,
    user: user
  }));
});
/* harmony default export */ var Profile_UserProfile = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(UserProfile));

/***/ }),

/***/ "hzVQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "zpkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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