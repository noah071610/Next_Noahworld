exports.ids = [18];
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UIRo");
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
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
  if (false) {}

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

/***/ "pGAn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(initialValue) {
  const {
    0: Value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setValue(prev => !prev);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

/***/ "pT/W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "antd/lib/input/TextArea"
var TextArea_ = __webpack_require__("7QRU");
var TextArea_default = /*#__PURE__*/__webpack_require__.n(TextArea_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./@reducers/post.ts
var _reducers_post = __webpack_require__("SDl8");

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: ./util/useInput.ts
var useInput = __webpack_require__("zpkv");

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__("jYNn");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// CONCATENATED MODULE: ./components/Blog/Comments/SubCommentForm.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-has-content */

/* eslint-disable jsx-a11y/anchor-is-valid */







const CommentFormWrapper = base_default()("div", true ? {
  target: "e9hyjwt0"
} : undefined)(true ? {
  name: "16dmx32",
  styles: "width:100%;position:relative;display:flex;transition:all 0.3s;padding:1rem 0.5rem 1rem 2rem;button{width:20%;}img{width:2rem;height:2rem;border-radius:50%;margin:0 1rem;}div{width:100%;display:flex;}@media only screen and (max-width: 576px){padding-left:0.5rem;padding-right:0;button{width:30%;}}"
} : undefined);

const SubCommentForm = ({
  CommentId
}) => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    post
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [content, onChangeContent, setContent] = Object(useInput["a" /* default */])("");
  const onClickAddComment = Object(external_react_["useCallback"])(() => {
    if (content === "") {
      external_antd_["message"].error("Please write content.");
      return;
    }

    if (!user) {
      external_antd_["message"].error("Please login first.");
      return;
    }

    dispatch({
      type: _reducers_post["k" /* ADD_SUB_COMMENT_REQUEST */],
      data: {
        PostId: post === null || post === void 0 ? void 0 : post.id,
        content,
        CommentId,
        UserId: user.id
      }
    });
    setContent("");
  }, [CommentId, content, dispatch, post === null || post === void 0 ? void 0 : post.id, setContent, user]);
  Object(external_react_["useEffect"])(() => {
    if (!user) {
      setContent("You can comment when you are logged in!");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const handleImgError = e => {
    e.target.src = `/images/blog/default-user.png`;
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(CommentFormWrapper, {
    className: "blog_post_comment"
  }, Object(react_["jsx"])("img", {
    src: user !== null && user !== void 0 && user.icon ? user.icon.replace(/\/thumb\//, "/original/") : "/images/blog/default-user.png",
    alt: "profile",
    onError: handleImgError
  }), Object(react_["jsx"])("div", null, Object(react_["jsx"])("input", {
    className: "public_input",
    value: content,
    onChange: onChangeContent,
    style: {
      width: "100%"
    }
  }), Object(react_["jsx"])("button", {
    style: {
      float: "right"
    },
    onClick: onClickAddComment,
    className: "public_btn"
  }, "REPLY"))));
};

/* harmony default export */ var Comments_SubCommentForm = (SubCommentForm);
// EXTERNAL MODULE: ./util/useToggle.ts
var useToggle = __webpack_require__("pGAn");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./components/Blog/Comments/CommentMenu.tsx


function CommentMenu_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











const LikeComment = base_default()("a", true ? {
  target: "e1inl5371"
} : undefined)("margin-right:0.3rem;&:hover{color:", config["g" /* RED_COLOR */], ";}" + (true ? "" : undefined));

const CommentMenuList = base_default()("ul", true ? {
  target: "e1inl5370"
} : undefined)(true ? {
  name: "gl5gmu",
  styles: "margin:0.5rem 0 0 0;display:flex;justify-content:flex-end"
} : undefined);

const CommentMenu = /*#__PURE__*/Object(external_react_["memo"])(({
  user,
  CommentId,
  comment,
  editText,
  setEditForm,
  setRemoveModal,
  editForm,
  SubCommentId
}) => {
  var _post$Comments, _post$Comments$find, _post$Comments$find$C;

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    post
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const onClickEditComment = Object(external_react_["useCallback"])(() => {
    if (SubCommentId) {
      dispatch({
        type: _reducers_post["w" /* EDIT_SUB_COMMENT_REQUEST */],
        data: {
          CommentId,
          SubCommentId,
          content: editText
        }
      });
      external_antd_["message"].success("Successfully edited your reply 👍");
    } else {
      dispatch({
        type: _reducers_post["o" /* EDIT_COMMENT_REQUEST */],
        data: {
          CommentId,
          content: editText
        }
      });
      external_antd_["message"].success("Successfully edited your comment 👍");
    }

    setEditForm(false);
  }, [dispatch, CommentId, SubCommentId, editText]);
  const onClickCommentLike = Object(external_react_["useCallback"])(() => {
    if (!user) {
      external_antd_["message"].error("You can thumbs up when you are logged in 😿");
      return;
    }

    dispatch({
      type: _reducers_post["z" /* LIKE_COMMENT_REQUEST */],
      data: {
        CommentId,
        UserId: user.id
      }
    });
  }, [CommentId, dispatch, user]);
  const onClickCommentUnlike = Object(external_react_["useCallback"])(() => {
    if (!user) {
      external_antd_["message"].error("You can thumbs up when you are logged in 😿");
      return;
    }

    dispatch({
      type: _reducers_post["hb" /* UNLIKE_COMMENT_REQUEST */],
      data: {
        CommentId,
        UserId: user.id
      }
    });
  }, [CommentId, dispatch, user]);
  let commentLiked = user && (post === null || post === void 0 ? void 0 : (_post$Comments = post.Comments) === null || _post$Comments === void 0 ? void 0 : (_post$Comments$find = _post$Comments.find(v => v.id === CommentId)) === null || _post$Comments$find === void 0 ? void 0 : (_post$Comments$find$C = _post$Comments$find.CommentLikers) === null || _post$Comments$find$C === void 0 ? void 0 : _post$Comments$find$C.find(v => v.id === user.id));
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, editForm ? Object(react_["jsx"])("div", {
    className: "edit_form"
  }, Object(react_["jsx"])(external_antd_["Button"], {
    onClick: onClickEditComment,
    type: "primary",
    style: {
      marginTop: "0.8rem"
    }
  }, "EDIT"), Object(react_["jsx"])(external_antd_["Button"], {
    onClick: () => setEditForm(false),
    style: {
      marginTop: "0.8rem"
    }
  }, "CANCEL")) : Object(react_["jsx"])(CommentMenuList, null, (user === null || user === void 0 ? void 0 : user.id) === comment.UserId && Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", null, Object(react_["jsx"])(icons_["EditFilled"], {
    onClick: () => setEditForm(true)
  }))), Object(react_["jsx"])("li", null, Object(react_["jsx"])("a", null, Object(react_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    onClick: () => setRemoveModal(true),
    icon: free_solid_svg_icons_["faTrashAlt"]
  })))), !SubCommentId && Object(react_["jsx"])("li", null, commentLiked ? Object(react_["jsx"])(icons_["HeartFilled"], {
    style: {
      color: config["g" /* RED_COLOR */],
      marginRight: "0.3rem"
    },
    onClick: onClickCommentUnlike
  }) : Object(react_["jsx"])(LikeComment, {
    onClick: onClickCommentLike
  }, Object(react_["jsx"])(icons_["HeartOutlined"], null)), comment.CommentLikers ? comment.CommentLikers.length : 0)));
});
/* harmony default export */ var Comments_CommentMenu = (/*#__PURE__*/Object(external_react_["memo"])(CommentMenu));
// EXTERNAL MODULE: ./styles/emotion.ts
var emotion = __webpack_require__("2lGT");

// CONCATENATED MODULE: ./components/Blog/Comments/CommentContent.tsx




const CommentContent = /*#__PURE__*/Object(external_react_["memo"])(({
  comment,
  editText,
  editForm,
  onChangeEditText
}) => {
  var _comment$User;

  const handleImgError = e => {
    e.target.src = `/images/blog/default-user.png`;
  };

  return Object(react_["jsx"])("div", {
    className: "comment_main_content"
  }, Object(react_["jsx"])("div", null, Object(react_["jsx"])("img", {
    src: (_comment$User = comment.User) !== null && _comment$User !== void 0 && _comment$User.icon ? comment.User.icon.replace(/\/thumb\//, "/original/") : "/images/blog/default-user.png",
    onError: handleImgError,
    alt: "profile"
  })), Object(react_["jsx"])("div", null, Object(react_["jsx"])("a", null, comment.User.name), Object(react_["jsx"])("span", null, external_dayjs_default()().to(external_dayjs_default()(comment.createdAt), true), "\xA0ago"), editForm ? Object(react_["jsx"])(external_antd_["Input"].TextArea, {
    style: {
      width: "100%"
    },
    value: editText,
    defaultValue: comment.content,
    onChange: onChangeEditText
  }) : Object(react_["jsx"])("p", {
    style: {
      width: "100%",
      margin: 0
    }
  }, comment.content)));
});
/* harmony default export */ var Comments_CommentContent = (/*#__PURE__*/Object(external_react_["memo"])(CommentContent));
// CONCATENATED MODULE: ./components/Blog/Comments/SubComments.tsx


function SubComments_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */











external_dayjs_default.a.locale("kor");
external_dayjs_default.a.extend(relativeTime_default.a);

const CommentWrapper = base_default()("div", true ? {
  target: "e1kblrjk1"
} : undefined)(true ? {
  name: "wory5u",
  styles: "width:100%;display:flex;justify-content:flex-end;padding:1rem 0.5rem 1.5rem 2rem;position:relative;transition:all 0.2s;.edit_from{button{width:20%;}}@media only screen and (max-width: 576px){padding:0.5rem 0 1rem 0.5rem;.blog_comment_deleteModal{h2{font-size:1rem;}}.edit_form{button{width:50%;}}}"
} : undefined);

const SpeechBubble = base_default()("div", true ? {
  target: "e1kblrjk0"
} : undefined)(true ? {
  name: "ppb26a",
  styles: "background-color:rgba(0, 0, 0, 0.05);width:90%;padding:1rem 1.5rem;position:relative;border-radius:0.5rem;transition:all 0.3s;&:hover{background-color:rgba(0, 0, 0, 0.1);}&:before{transition:all 0.3s;content:\"\";position:absolute;top:-0.5rem;left:1.8rem;border-top:1rem solid rgba(0, 0, 0, 0.05);border-right:1rem solid transparent;transform:rotate(45deg);}@media only screen and (max-width: 576px){padding:1rem;width:100%;}"
} : undefined);

const SubComments = ({
  subComment,
  CommentId
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: removeModal,
    1: setRemoveModal
  } = Object(external_react_["useState"])(false);
  const {
    0: editForm,
    1: setEditForm
  } = Object(external_react_["useState"])(false); // eslint-disable-next-line no-unused-vars

  const [editText, onChangeEditText] = Object(useInput["a" /* default */])(subComment === null || subComment === void 0 ? void 0 : subComment.content);
  const SubCommentId = subComment === null || subComment === void 0 ? void 0 : subComment.id;

  const onClickRemove = () => {
    if (!user) {
      return;
    }

    if (user.id !== (subComment === null || subComment === void 0 ? void 0 : subComment.UserId)) {
      external_antd_["message"].error("you can not delete another person reply!");
      return;
    }

    external_antd_["message"].success("Completely Deleted your reply");
    setRemoveModal(false);
    dispatch({
      type: _reducers_post["eb" /* REMOVE_SUB_COMMENT_REQUEST */],
      data: {
        CommentId,
        SubCommentId
      }
    });
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, (subComment === null || subComment === void 0 ? void 0 : subComment.User) && Object(react_["jsx"])(CommentWrapper, null, Object(react_["jsx"])(SpeechBubble, null, Object(react_["jsx"])(Comments_CommentContent, {
    comment: subComment,
    editText: editText,
    editForm: editForm,
    onChangeEditText: onChangeEditText
  }), Object(react_["jsx"])(Comments_CommentMenu, {
    user: user,
    SubCommentId: SubCommentId,
    CommentId: CommentId,
    comment: subComment,
    editText: editText,
    editForm: editForm,
    setEditForm: setEditForm,
    setRemoveModal: setRemoveModal
  }), Object(react_["jsx"])("div", {
    css: Object(emotion["a" /* DeleteComment */])(removeModal),
    className: "blog_comment_deleteModal"
  }, Object(react_["jsx"])("h2", null, "Would you really like to delete? \uD83D\uDE22"), Object(react_["jsx"])("div", null, Object(react_["jsx"])("a", {
    onClick: onClickRemove,
    className: "confirmBtn",
    style: {
      marginRight: "2rem"
    }
  }, "YES"), Object(react_["jsx"])("a", {
    onClick: () => setRemoveModal(false),
    className: "confirmBtn"
  }, "NO"))))));
};

/* harmony default export */ var Comments_SubComments = (SubComments);
// CONCATENATED MODULE: ./components/Blog/Comments/SubCommentPreview.tsx







const MoreComments = base_default()("div", true ? {
  target: "ej6z6360"
} : undefined)("padding:1rem 0.5rem 1rem 2rem;text-align:end;font-size:0.9rem;cursor:pointer;transition:all 0.3s;&:hover{background-color:rgba(0, 0, 0, 0.05);color:", config["c" /* BLUE_COLOR */], ";}" + (true ? "" : undefined));

const SubCommentPreview = /*#__PURE__*/Object(external_react_["memo"])(({
  onClickMoreSubComments,
  moreSubComments,
  comment
}) => {
  var _comment$SubComments, _comment$SubComments2, _comment$SubComments3, _comment$SubComments4;

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, (comment === null || comment === void 0 ? void 0 : (_comment$SubComments = comment.SubComments) === null || _comment$SubComments === void 0 ? void 0 : _comment$SubComments.length) < 3 ? (_comment$SubComments2 = comment.SubComments) === null || _comment$SubComments2 === void 0 ? void 0 : _comment$SubComments2.map((subComment, i) => {
    return Object(react_["jsx"])(Comments_SubComments, {
      key: i,
      CommentId: comment.id,
      subComment: subComment
    });
  }) : Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(MoreComments, {
    onClick: onClickMoreSubComments
  }, "View ", Object(react_["jsx"])("span", {
    style: {
      margin: "0 0.2rem"
    }
  }, (_comment$SubComments3 = comment.SubComments) === null || _comment$SubComments3 === void 0 ? void 0 : _comment$SubComments3.length), "\xA0more replies", " ", Object(react_["jsx"])(icons_["DownCircleOutlined"], {
    style: {
      marginLeft: "0.5rem",
      fontSize: "1.1rem"
    },
    rotate: moreSubComments ? 180 : 0
  })), moreSubComments && (comment === null || comment === void 0 ? void 0 : (_comment$SubComments4 = comment.SubComments) === null || _comment$SubComments4 === void 0 ? void 0 : _comment$SubComments4.map((subComment, i) => {
    return Object(react_["jsx"])(Comments_SubComments, {
      key: i,
      CommentId: comment.id,
      subComment: subComment
    });
  }))));
});
/* harmony default export */ var Comments_SubCommentPreview = (/*#__PURE__*/Object(external_react_["memo"])(SubCommentPreview));
// CONCATENATED MODULE: ./components/Blog/Comments/Comments.tsx


function Comments_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */














external_dayjs_default.a.locale("kor");
external_dayjs_default.a.extend(relativeTime_default.a);

const Comments_CommentWrapper = base_default()("div", true ? {
  target: "e1g2paj81"
} : undefined)(true ? {
  name: "v9yiwj",
  styles: "width:100%;position:relative;transition:all 0.2s;border-bottom:1px solid rgba(0, 0, 0, 0.07)"
} : undefined);

const MainContentWrapper = base_default()("div", true ? {
  target: "e1g2paj80"
} : undefined)(true ? {
  name: "1wnmdfw",
  styles: "padding:1rem 0.5rem 0.5rem 2rem;cursor:pointer;&:hover{background-color:rgba(0, 0, 0, 0.05);}.edit_form{button{width:20%;}}@media only screen and (max-width: 576px){padding:1rem 0.5rem 0.5rem 0.5rem;.edit_form{button{width:50%;}}}"
} : undefined);

const Comments = /*#__PURE__*/Object(external_react_["memo"])(({
  comment
}) => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: removeModal,
    1: setRemoveModal
  } = Object(external_react_["useState"])(false);
  const {
    0: subCommentForm,
    1: setSubCommentForm
  } = Object(external_react_["useState"])(false);
  const [moreSubComments, onClickMoreSubComments, setMoreSubComments] = Object(useToggle["a" /* default */])(false);
  const {
    0: editForm,
    1: setEditForm
  } = Object(external_react_["useState"])(false);
  const [editText, onChangeEditText] = Object(useInput["a" /* default */])(comment.content);
  const CommentId = comment === null || comment === void 0 ? void 0 : comment.id;
  const onClickRemove = Object(external_react_["useCallback"])(() => {
    if (!user) {
      return;
    }

    if (user.id !== comment.UserId) {
      external_antd_["message"].error("you can not delete another person comment!");
      return;
    }

    dispatch({
      type: _reducers_post["X" /* REMOVE_COMMENT_REQUEST */],
      data: CommentId
    });
    external_antd_["message"].success("Completely Deleted Comment");
    setRemoveModal(false);
  }, [CommentId, comment.UserId, dispatch, user]);
  const onClickComment = Object(external_react_["useCallback"])(e => {
    if (e.target.className) {
      return;
    }

    if (comment.SubComments && comment.SubComments.length >= 3) {
      setMoreSubComments(prev => !prev);
    }

    if (moreSubComments && !subCommentForm) {
      setMoreSubComments(true);
      setSubCommentForm(true);
      return;
    }

    if (!moreSubComments && subCommentForm) {
      setMoreSubComments(false);
      setSubCommentForm(false);
      return;
    }

    setSubCommentForm(prev => !prev);
  }, [comment.SubComments, moreSubComments, setMoreSubComments, subCommentForm]);

  const handleImgError = e => {
    e.target.src = "/images/blog/default-user.png";
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, comment.User && Object(react_["jsx"])(Comments_CommentWrapper, null, Object(react_["jsx"])(MainContentWrapper, {
    onClick: onClickComment
  }, Object(react_["jsx"])(Comments_CommentContent, {
    comment: comment,
    editText: editText,
    editForm: editForm,
    onChangeEditText: onChangeEditText
  }), Object(react_["jsx"])(Comments_CommentMenu, {
    user: user,
    CommentId: CommentId,
    comment: comment,
    editText: editText,
    editForm: editForm,
    setEditForm: setEditForm,
    setRemoveModal: setRemoveModal
  })), Object(react_["jsx"])("div", {
    css: Object(emotion["a" /* DeleteComment */])(removeModal),
    className: "blog_comment_deleteModal"
  }, Object(react_["jsx"])("h2", null, "Would you really like to delete? \uD83D\uDE22"), Object(react_["jsx"])("div", null, Object(react_["jsx"])("a", {
    onClick: onClickRemove,
    className: "confirmBtn"
  }, "YES"), Object(react_["jsx"])("a", {
    onClick: () => setRemoveModal(false),
    className: "confirmBtn"
  }, "NO"))), subCommentForm && Object(react_["jsx"])(Comments_SubCommentForm, {
    CommentId: CommentId
  }), Object(react_["jsx"])(Comments_SubCommentPreview, {
    onClickMoreSubComments: onClickMoreSubComments,
    moreSubComments: moreSubComments,
    comment: comment
  })));
});
/* harmony default export */ var Comments_Comments = (/*#__PURE__*/Object(external_react_["memo"])(Comments));
// CONCATENATED MODULE: ./components/Blog/Comments/CommentForm.tsx


function CommentForm_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-has-content */

/* eslint-disable jsx-a11y/anchor-is-valid */












const LoginLink = /*#__PURE__*/base_default()(link_default.a, true ? {
  target: "e1c590xf1"
} : undefined)("margin-top:1rem;padding:0.5rem 1rem;border-radius:5px;transition:all 0.3s;border:1px solid rgba(0, 0, 0, 0.2);font-weight:bold;&:hover{color:white;background-color:", config["c" /* BLUE_COLOR */], ";}" + (true ? "" : undefined));

const LoginSuggestModal = loginModal =>
/*#__PURE__*/

/*#__PURE__*/
Object(react_["css"])("display:flex;position:absolute;width:100%;height:100%;top:0;left:0;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.3);", loginModal ? "visibility:initial; animation:0.5s fadeIn;" : "visibility: hidden; animation:none;", "@media only screen and (max-width: 576px){h2{font-size:0.9rem;}}" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);

const CommentForm_CommentFormWrapper = base_default()("div", true ? {
  target: "e1c590xf0"
} : undefined)(true ? {
  name: "hq209f",
  styles: "padding:1.5rem 0.5rem;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);display:flex;position:relative;transition:all 0.3s;.comment_icon_wrapper{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;h3{font-size:0.9rem;text-align:center;margin-top:0.8rem;}}&:hover{background-color:rgba(0, 0, 0, 0.05);}@media only screen and (max-width: 576px){padding-right:0;}"
} : undefined);

const NoComment = true ? {
  name: "bwf6vw",
  styles: "width:100%;padding:1rem 0;border-bottom:1px solid rgba(0, 0, 0, 0.07);position:relative;display:flex;flex-direction:column;align-items:center"
} : undefined;
const CommentForm = /*#__PURE__*/Object(external_react_["memo"])(() => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    post
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [content, onChangeContent, setContent] = Object(useInput["a" /* default */])("");
  const {
    0: loginModal,
    1: setLoginModal
  } = Object(external_react_["useState"])(false);
  const onClickAddComment = Object(external_react_["useCallback"])(() => {
    if (content === "") {
      external_antd_["message"].error("Please write content.");
      return;
    }

    if (!user) {
      external_antd_["message"].error("Please login first.");
      return;
    }

    dispatch({
      type: _reducers_post["c" /* ADD_COMMENT_REQUEST */],
      data: {
        content,
        postId: post === null || post === void 0 ? void 0 : post.id,
        userId: user.id
      }
    });
    setContent("");
  }, [content, dispatch, post === null || post === void 0 ? void 0 : post.id, setContent, user]);

  const handleImgError = e => {
    e.target.src = `/images/blog/default-user.png`;
  };

  const onClickModal = Object(external_react_["useCallback"])(() => {
    if (!user) {
      setLoginModal(true);
    }
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    if (!user) {
      setContent("You can comment when you are logged in!");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  const commentComponent = Object(external_react_["useCallback"])(() => {
    var _post$Comments;

    return post === null || post === void 0 ? void 0 : (_post$Comments = post.Comments) === null || _post$Comments === void 0 ? void 0 : _post$Comments.map((v, i) => {
      return Object(react_["jsx"])(Comments_Comments, {
        key: i,
        comment: v
      });
    });
  }, [post === null || post === void 0 ? void 0 : post.Comments]);
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])(CommentForm_CommentFormWrapper, {
    onClick: onClickModal,
    className: "blog_post_comment",
    id: "comment"
  }, Object(react_["jsx"])("div", {
    className: "comment_icon_wrapper"
  }, Object(react_["jsx"])("img", {
    className: "comment_img",
    src: user !== null && user !== void 0 && user.icon ? user.icon.replace(/\/thumb\//, "/original/") : "/images/blog/default-user.png",
    alt: "profile",
    onError: handleImgError
  }), Object(react_["jsx"])("h3", null, user ? user.name : "Guest")), Object(react_["jsx"])("div", {
    style: {
      marginLeft: "2rem",
      width: "100%"
    }
  }, Object(react_["jsx"])(TextArea_default.a, {
    value: content,
    onChange: onChangeContent,
    className: "comment_textArea"
  }), Object(react_["jsx"])("button", {
    style: {
      padding: "0.5rem 0"
    },
    onClick: onClickAddComment,
    className: "public_btn comment_btn"
  }, "COMMENT")), Object(react_["jsx"])("div", {
    css: LoginSuggestModal(loginModal)
  }, Object(react_["jsx"])("h2", null, "You can comment when you are logged in \uD83D\uDE22"), Object(react_["jsx"])(LoginLink, {
    href: "/login"
  }, Object(react_["jsx"])("a", null, "GO TO LOGIN PAGE")))), post !== null && post !== void 0 && post.Comments ? commentComponent() : Object(react_["jsx"])("div", {
    css: NoComment
  }, Object(react_["jsx"])("img", {
    style: {
      width: "80px",
      opacity: "0.3"
    },
    alt: "noComment",
    src: "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
  }), Object(react_["jsx"])("h3", null, "No Comments...")));
});
/* harmony default export */ var Comments_CommentForm = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(CommentForm));

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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