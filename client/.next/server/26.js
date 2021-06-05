exports.ids = [26];
exports.modules = {

/***/ "n4j1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__("w8No");
var base_default = /*#__PURE__*/__webpack_require__.n(base_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__("jYNn");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// CONCATENATED MODULE: ./components/Blog/Articles/ArticleSmallAside.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/anchor-is-valid */






external_dayjs_default.a.extend(relativeTime_default.a);
external_dayjs_default.a.locale("kor");

const Article = base_default()("article", true ? {
  target: "egtikk0"
} : undefined)(true ? {
  name: "1yjh3s",
  styles: "transition:all 0.4s;&:hover{text-decoration:underline;background-color:rgba(0, 0, 0, 0.1);}"
} : undefined);

const ArticleSmallAside = ({
  article,
  type
}) => {
  var _article$Comments, _article$PostLikers;

  const router = Object(client_router["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, article && Object(react_["jsx"])(Article, {
    onClick: onClickArticle,
    style: {
      marginLeft: "0.5rem"
    },
    className: "article article_aside"
  }, Object(react_["jsx"])("div", {
    className: "blog_small_aside_title"
  }, Object(react_["jsx"])("span", {
    style: {
      color: config["c" /* BLUE_COLOR */],
      fontWeight: "bold",
      fontSize: "0.9rem"
    }
  }, "IN ", article.category.toUpperCase()), Object(react_["jsx"])("span", {
    className: "article_md_footer"
  }, "\xA0\xA0", type === "comments" ? ((_article$Comments = article.Comments) === null || _article$Comments === void 0 ? void 0 : _article$Comments.length) + " Comments" : type === "like" ? ((_article$PostLikers = article.PostLikers) === null || _article$PostLikers === void 0 ? void 0 : _article$PostLikers.length) + " Likes" : article.hit + " views"), Object(react_["jsx"])("h2", {
    style: {
      marginTop: "1rem"
    },
    className: "article_aside_header small_title"
  }, article.title))));
};

/* harmony default export */ var Articles_ArticleSmallAside = (ArticleSmallAside);
// CONCATENATED MODULE: ./components/Blog/Articles/ArticleAside.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */






external_dayjs_default.a.extend(relativeTime_default.a);
external_dayjs_default.a.locale("kor");

const ArticleAside = ({
  article,
  type
}) => {
  var _article$Comments, _article$PostLikers, _article$Comments2, _article$PostLikers2;

  const router = Object(client_router["useRouter"])();

  const onClickArticle = e => {
    if (e.target.className === "hashtag") {
      return;
    }

    window.scrollTo({
      top: 0
    });
    router.push(`/${article.category}/post/${article.id}`);
  };

  const handleImgError = e => {
    e.target.src = "/images/blog/noImage.gif";
  };

  return Object(react_["jsx"])(external_react_default.a.Fragment, null, article && Object(react_["jsx"])("article", {
    onClick: onClickArticle,
    className: "article article_aside"
  }, Object(react_["jsx"])("div", {
    style: {
      marginBottom: "0.5rem",
      width: "100%",
      overflow: "hidden"
    }
  }, Object(react_["jsx"])("img", {
    className: "article_img",
    style: {
      width: "100%",
      height: "150px",
      border: "0.3px solid rgba(0,0,0,0.1)"
    },
    alt: article.title,
    src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : article.imagePath ? article.imagePath.replace(/\/thumb\//, "/original/") : "/images/blog/noImage.gif",
    onError: handleImgError
  })), Object(react_["jsx"])("div", null, Object(react_["jsx"])("span", {
    style: {
      color: config["c" /* BLUE_COLOR */],
      fontWeight: "bold",
      fontSize: "1rem"
    }
  }, "IN ", article.category.toUpperCase()), Object(react_["jsx"])("span", {
    className: "article_md_footer"
  }, type === "comments" ? (article === null || article === void 0 ? void 0 : (_article$Comments = article.Comments) === null || _article$Comments === void 0 ? void 0 : _article$Comments.length) + " Comments" : type === "like" ? (article === null || article === void 0 ? void 0 : (_article$PostLikers = article.PostLikers) === null || _article$PostLikers === void 0 ? void 0 : _article$PostLikers.length) + " Likes" : article.hit + " views"), Object(react_["jsx"])("h2", {
    style: {
      margin: "0.5rem 0 0.8rem 0",
      height: "1.5rem",
      lineHeight: "1.5"
    },
    className: "article_aside_header"
  }, article.title), Object(react_["jsx"])("ul", {
    className: "article_footer"
  }, Object(react_["jsx"])("li", {
    className: "date"
  }, external_dayjs_default()().to(external_dayjs_default()(article.createdAt), true), "\xA0ago"), Object(react_["jsx"])("li", {
    className: "view"
  }, "\xB7", Object(react_["jsx"])("span", {
    style: type === "view" ? {
      color: config["c" /* BLUE_COLOR */],
      fontWeight: "bold"
    } : {}
  }, "\xA0", article.hit, " views")), Object(react_["jsx"])("li", {
    className: "comments"
  }, "\xB7", Object(react_["jsx"])("span", {
    style: type === "view" ? {} : {
      color: config["c" /* BLUE_COLOR */],
      fontWeight: "bold"
    }
  }, "\xA0", type === "comments" ? (article === null || article === void 0 ? void 0 : (_article$Comments2 = article.Comments) === null || _article$Comments2 === void 0 ? void 0 : _article$Comments2.length) + " Comments" : (article === null || article === void 0 ? void 0 : (_article$PostLikers2 = article.PostLikers) === null || _article$PostLikers2 === void 0 ? void 0 : _article$PostLikers2.length) + " Likes"))))));
};

/* harmony default export */ var Articles_ArticleAside = (ArticleAside);
// CONCATENATED MODULE: ./components/Blog/Articles/MostArticle.tsx
function MostArticle_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const TitleStyle = true ? {
  name: "7xjfxr",
  styles: "display:flex;align-items:center;font-size:1.2rem;padding:0 1rem"
} : undefined;

const isBottomMargin = aside =>
/*#__PURE__*/

/*#__PURE__*/
Object(react_["css"])(aside ? "margin-bottom: 1rem;" : null, ";" + (true ? "" : undefined), true ? "" : undefined, true ? "" : undefined);

const MostArticle = /*#__PURE__*/Object(external_react_["memo"])(({
  mostPost,
  src,
  desc,
  hashtags,
  aside,
  type
}) => {
  return Object(react_["jsx"])("div", {
    css: isBottomMargin(aside)
  }, Object(react_["jsx"])("h3", {
    css: TitleStyle
  }, Object(react_["jsx"])("img", {
    alt: "trophy",
    className: "icon",
    src: src
  }), desc), hashtags ? Object(react_["jsx"])("ul", {
    className: "blog_aside_tag"
  }, hashtags && hashtags.map((v, i) => {
    return Object(react_["jsx"])("li", {
      onClick: () => window.scrollTo({
        top: 0
      }),
      key: i
    }, Object(react_["jsx"])(link_default.a, {
      href: `/hashtag/${v.name}`
    }, Object(react_["jsx"])("a", null, "#", v.name)));
  })) : aside ? Object(react_["jsx"])(Articles_ArticleAside, {
    type: type,
    article: mostPost
  }) : Object(react_["jsx"])(Articles_ArticleSmallAside, {
    type: type,
    article: mostPost
  }));
});
/* harmony default export */ var Articles_MostArticle = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(MostArticle));

/***/ })

};;