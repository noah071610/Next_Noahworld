exports.ids = [20];
exports.modules = {

/***/ "6n5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mL3h");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);





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
    onCancel: handleCancel
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "This fucntion is for ADMIN only. If you are not a administrator, please go back and feedback to us. Thank you for your cooperatation."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "\uC774 \uAE30\uB2A5\uC740 \uAD00\uB9AC\uC790 \uC804\uC6A9\uC785\uB2C8\uB2E4. \uC608\uAE30\uCE58 \uBABB\uD558\uAC8C \uC624\uC168\uC744\uACBD\uC6B0 \uD53C\uB4DC\uBC31 \uC8FC\uC2DC\uBA74 \uC815\uB9D0 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD611\uB825\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", null, "\u3053\u306E\u6A5F\u80FD\u306F\u7BA1\u7406\u8005\u5C02\u7528\u3067\u3054\u3056\u3044\u307E\u3059\u3001\u4F55\u304C\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u76F4\u63A5\u3054\u9023\u7D61\u3057\u3066\u9802\u3051\u308C\u3070\u5E78\u3044\u3060\u3068\u601D\u3044\u307E\u3059\u3002"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    value: password,
    onChange: onChangePassword
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AdminModal);

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

/***/ "v+Lg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+Q8Q");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZX5X");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("SDl8");
/* harmony import */ var _util_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zpkv");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nOHt");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("6n5A");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_13__);
/* eslint-disable jsx-a11y/anchor-is-valid */
















const RemoteControlWrapper = FixedRemote =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["css"])("width:270px;padding-left:2rem;flexd-direction:column;height:100%;position:", FixedRemote ? "sticky" : "static", ";top:5.375rem;h2{font-size:1rem;margin-bottom:1rem;line-height:1.5;}ul:first-of-type{overflow:hidden;li{margin:0;}}" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);

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
  const [password, onChangePassword] = Object(_util_useInput__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])("");
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
      }
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
      href: `#${i}`
    }, v)));
  }, [headers]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__[/* REMOVE_POST_REQUEST */ "bb"],
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
    css: RemoteControlWrapper(FixedRemote)
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("h2", null, post === null || post === void 0 ? void 0 : post.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("ul", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HomeFilled"], null)))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => router.push(`/${(post === null || post === void 0 ? void 0 : post.category) === "culture" ? "class" : post === null || post === void 0 ? void 0 : post.category}`)
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RollbackOutlined"], null))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    onClick: onClickList
  }, prevPost[0] ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${prevPost[0].id}`
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], null))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleLeftOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", {
    onClick: onClickList
  }, nextPost[0] ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/${post === null || post === void 0 ? void 0 : post.category}/post/${nextPost[0].id}`
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], null))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DoubleRightOutlined"], {
    style: {
      color: "rgba(0,0,0,0.2)"
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: onClickList
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["VerticalAlignTopOutlined"], null))), (user === null || user === void 0 ? void 0 : user.id) === 1 && user.admin && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => {
      dispatch({
        type: _reducers_blog__WEBPACK_IMPORTED_MODULE_8__[/* POST_EDIT_ON */ "j"]
      });
      router.push("/admin");
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditFilled"], null))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    onClick: () => showModal()
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"]
  }))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    style: {
      margin: "0.5rem 0 3rem 0"
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      margin: 0
    },
    items: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    currentClassName: "blog_post_selected",
    offset: 300
  }, timelineLists(), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Timeline"].Item, {
    style: {
      width: "100%",
      paddingBottom: 0
    },
    className: "ant-timeline-item-last"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    href: `#comment`
  }, "Comments"))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Admin_AdminModal__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    isModalVisible: isModalVisible,
    handleOk: handleOk,
    handleCancel: handleCancel,
    password: password,
    onChangePassword: onChangePassword
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoteControl);

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