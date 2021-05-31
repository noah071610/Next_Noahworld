import React, { useCallback, useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
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
import Aos from "aos";
import { css, Global, keyframes } from "@emotion/react";
import Header from "../components/Header";
import { DoubleLeftOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Router from "next/dist/next-server/lib/router/router";

const scrollEffect = keyframes`
to {
  opacity: 0.2;
}
`;
const Scroll = styled.div`
  opacity: 0.5;
  position: fixed;
  bottom: 0.5rem;
  right: 2rem;
  font-size: 2rem;
  z-index: 2;
  cursor: pointer;
  animation: ${scrollEffect} 1s linear infinite alternate;
  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

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

function App({ Component, pageProps }: AppProps) {
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

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          <div className="pageWrapper">
            <div className="page">
              <Header />
              <Component {...pageProps} />
            </div>
            <Scroll className="scroll">
              <DoubleLeftOutlined onClick={scrollToTop} rotate={90} />
            </Scroll>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(App);
