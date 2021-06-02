import React, { useEffect, useState } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import "animate.css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "highlight.js/styles/github.css";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "../styles/style.scss";
import wrapper from "../@store/configureStore";
import { css, Global } from "@emotion/react";
import AppLayout from "../components/AppLayout";
import { Router } from "next/dist/client/router";

const reset = css`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-table-pagination {
    display: none !important;
  }
  p {
    margin: 0.5rem auto;
  }
  h1,
  h2,
  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.1rem;
  }
  a {
    color: black;
    text-decoration: none;
  }
  blockquote {
    border-color: #1187cf !important;
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

const loadingScreen = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    var aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src = " https://js.stripe.com/v3/";
    document.head.appendChild(aScript);
    aScript.onload = () => {};
    Aos.init();
  }, []);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Noah world</title>
      </Head>
      {loading ? (
        <div css={loadingScreen}>
          <div className="bouncer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Global styles={reset} />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(App);
