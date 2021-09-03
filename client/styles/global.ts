import { css } from "@emotion/react";
import { BLUE_COLOR } from "../config";

export const globalStyles = css`
  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: rgb(185, 185, 185);
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgb(153, 153, 153);
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body,
  html {
    line-height: 1.2;
  }
  html {
    overflow-x: hidden;
  }
  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
  }
  li {
    display: inline-block;
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  q {
    quotes: none;
  }

  a {
    color: black;
    font-size: 0.9rem;
    text-decoration: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @keyframes underLining {
    100% {
      background-size: 100% 100%;
    }
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1;
    padding: 0 3rem !important;
    .ant-input {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  }

  .static {
    position: static;
  }

  .body-margin {
    height: 63px;
    display: none;
    @media (max-width: 830px) {
      display: block;
    }
  }

  .selected {
    .ant-timeline-item-head {
      border-color: ${BLUE_COLOR};
    }
  }

  .slick-arrow {
    top: 50%;
    width: 2rem;
    height: 2rem;
    transition: all 0.3s;
    &:before {
      color: white;
      font-size: 2rem;
    }
  }
  .slick-next {
    right: calc(1% + 0.5rem);
    &:hover {
      right: 0.5rem;
      transition: all 0.3s;
    }
  }
  .slick-prev {
    left: 1%;
    z-index: 1;
    &:hover {
      left: 0;
      transition: all 0.3s;
    }
  }

  .public {
    &_btn {
      position: relative;
      border: none;
      background-color: ${BLUE_COLOR};
      color: white;
      border-radius: 3px;
      padding: 0.3rem 0;
      cursor: pointer;
      transition: all 0.1s;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        border: none;
        content: "";
      }
      &:hover:before {
        width: 100%;
        height: 100%;
        content: "";
        border: 1px solid ${BLUE_COLOR};
        border-right: none;
        border-bottom: none;
        transition: height 0.4s, width 0.4s;
      }
      &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border: none;
        content: "";
      }
      &:hover:after {
        width: 100%;
        height: 100%;
        content: "";
        border: 1px solid ${BLUE_COLOR};
        border-left: none;
        border-top: none;
        transition: height 0.4s, width 0.4s;
      }
      &:hover {
        background-color: #fff;
        color: ${BLUE_COLOR};
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
    &_input {
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      transition: all 0.3s;
      background-color: rgba(0, 0, 0, 0);
      &:hover {
        border-bottom: 1px solid ${BLUE_COLOR};
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid ${BLUE_COLOR};
      }
    }
  }
  .ant-divider {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .ant-divider-with-text {
    background-color: rgba(0, 0, 0, 0);
    &::before,
    &::after {
      border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
  }
`;
