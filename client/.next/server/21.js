exports.ids = [21];
exports.modules = {

/***/ "Blc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jYNn");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("obyI");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nOHt");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable jsx-a11y/anchor-is-valid */







dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("kor");

const ArticleRow = ({
  article
}) => {
  var _article$content;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  const contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_row"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      width: "60%",
      marginRight: "3rem",
      overflow: "hidden"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img", {
    className: "article_img",
    style: {
      width: "100%",
      height: "300px",
      border: "0.3px solid rgba(0,0,0,0.1)"
    },
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "article_contents"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    style: {
      height: "auto"
    },
    className: "article_header"
  }, article.title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    },
    className: "article_tag"
  }, article.Hashtags && article.Hashtags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
      key: i
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/hashtag/${v.name}`
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
      className: "hashtag",
      onClick: () => window.scrollTo({
        top: 0
      })
    }, "#", v.name)));
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
    style: {
      width: "100%",
      height: "7.2rem",
      overflow: "hidden",
      lineHeight: "1.7",
      fontSize: "0.9rem",
      margin: 0,
      WebkitLineClamp: 5
    },
    className: "article_desc"
  }, contentWithoutHTML), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
    style: {
      marginTop: "1rem"
    },
    className: "article_footer"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_4__[/* BLUE_COLOR */ "c"],
      fontWeight: "bold"
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", null, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", null, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleRow);

/***/ }),

/***/ "QLkm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jYNn");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nOHt");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kps4");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable jsx-a11y/anchor-is-valid */






dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("kor");

const ArticleColumn = ({
  article,
  nocontent
}) => {
  var _article$content, _article$Hashtags;

  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  const contentWithoutHTML = article === null || article === void 0 ? void 0 : (_article$content = article.content) === null || _article$content === void 0 ? void 0 : _article$content.replace(/(<([^>]+)>)/gi, "").replace(/(#youtube:.*)/g, "(Youtube Video Link)").replace(/&.*;/gi, "");

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, article && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_column"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      marginBottom: "1rem",
      width: "100%",
      overflow: "hidden"
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    style: nocontent ? {
      height: "140px"
    } : {},
    className: "article_img",
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
    style: {
      height: "auto"
    },
    className: "article_header"
  }, article.title), nocontent ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: {
      marginBottom: "1rem"
    }
  }, article === null || article === void 0 ? void 0 : (_article$Hashtags = article.Hashtags) === null || _article$Hashtags === void 0 ? void 0 : _article$Hashtags.map((v, i) => {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      key: i
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/hashtag/${v.name}`
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
      className: "hashtag",
      onClick: () => window.scrollTo({
        top: 0
      })
    }, "#", v.name)));
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
    style: article !== null && article !== void 0 && article.Hashtags ? {
      margin: 0,
      WebkitLineClamp: 4,
      height: "5.1rem",
      lineHeight: "1.7",
      fontSize: "0.8rem"
    } : {
      height: "6.5rem",
      WebkitLineClamp: 5,
      marginBottom: "1.5rem",
      lineHeight: "1.7",
      fontSize: "0.8rem"
    },
    className: "article_desc"
  }, contentWithoutHTML))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    style: article !== null && article !== void 0 && article.Hashtags ? {
      marginTop: "1rem"
    } : {
      marginTop: "1.7rem"
    },
    className: "article_footer"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", null, dayjs__WEBPACK_IMPORTED_MODULE_0___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(article.createdAt), true), "\xA0ago"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", null, "\xB7\xA0", article.hit, " views"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", null, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleColumn);

/***/ }),

/***/ "rEWd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Blog/Articles/ArticleColumn.tsx
var ArticleColumn = __webpack_require__("QLkm");

// EXTERNAL MODULE: ./components/Blog/Articles/ArticleRow.tsx
var ArticleRow = __webpack_require__("Blc5");

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__("jYNn");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// CONCATENATED MODULE: ./components/Blog/Articles/ArticleSmall.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






external_dayjs_default.a.extend(relativeTime_default.a);
external_dayjs_default.a.locale("kor");

const Article = base_default()("article", true ? {
  target: "e9qef4u0"
} : undefined)(true ? {
  name: "khknaa",
  styles: "width:100%;padding:1rem;border-top:1px solid rgba(0, 0, 0, 0.1);align-items:center;transition:all 0.3s;cursor:pointer;img{transition:all 0.3s;}p{color:black;}&:hover{background-color:rgba(0, 0, 0, 0.1);img{transform:scale(1.05);}p{color:black;text-decoration:underline;}}"
} : undefined);

const ArticleSmall = ({
  article
}) => {
  const router = Object(client_router["useRouter"])();

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(react_["jsx"])(Article, {
    onClick: () => {
      router.push(`/${article.category}/post/${article.id}`);
      window.scrollTo({
        top: 0
      });
    },
    className: "blog_main_small"
  }, Object(react_["jsx"])("img", {
    style: {
      width: "110px",
      height: "80px"
    },
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    alt: "thumbnail",
    onError: handleImgError
  }), Object(react_["jsx"])("div", null, Object(react_["jsx"])("p", {
    style: {
      margin: "0 0 0.5rem 1rem",
      height: "100%"
    }
  }, article.title, " "), Object(react_["jsx"])("ul", {
    style: {
      margin: "0 0 0 1rem"
    },
    className: "article_footer"
  }, Object(react_["jsx"])("li", null, external_dayjs_default()().to(external_dayjs_default()(article.createdAt), true), "\xA0ago"), Object(react_["jsx"])("li", null, "\xB7\xA0", article.hit, " views"), Object(react_["jsx"])("li", null, "\xB7\xA0", article.PostLikers && article.PostLikers.length, " Likes"))));
};

/* harmony default export */ var Articles_ArticleSmall = (ArticleSmall);
// CONCATENATED MODULE: ./components/Blog/Articles/MainArticle.tsx







const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};
const smallSizeSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const MainArticle = /*#__PURE__*/Object(external_react_["memo"])(({
  category
}) => {
  return Object(react_["jsx"])(external_react_default.a.Fragment, null, Object(react_["jsx"])("div", {
    className: "blog_category_big"
  }, Object(react_["jsx"])(ArticleRow["default"], {
    article: category[0]
  })), Object(react_["jsx"])("div", {
    className: "blog_category_medium"
  }, Object(react_["jsx"])(ArticleColumn["default"], {
    article: category[0]
  })), Object(react_["jsx"])("div", {
    className: "blog_category_small"
  }, Object(react_["jsx"])(external_react_slick_default.a, smallSizeSettings, category === null || category === void 0 ? void 0 : category.slice(0, 3).map((article, i) => {
    return Object(react_["jsx"])(ArticleColumn["default"], {
      key: i,
      article: article
    });
  }))), Object(react_["jsx"])("div", {
    className: "blog_main_big"
  }, Object(react_["jsx"])(external_antd_["Divider"], null), Object(react_["jsx"])(external_react_slick_default.a, settings, category === null || category === void 0 ? void 0 : category.slice(1, 8).map((v, i) => Object(react_["jsx"])(ArticleColumn["default"], {
    key: i,
    article: v
  })))), category === null || category === void 0 ? void 0 : category.slice(3, 8).map((article, i) => {
    return Object(react_["jsx"])(Articles_ArticleSmall, {
      key: i,
      article: article
    });
  }));
});
/* harmony default export */ var Articles_MainArticle = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(MainArticle));

/***/ })

};;