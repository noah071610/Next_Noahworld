import React, { useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "../styles/font.css";
import wrapper from "../@store/configureStore";
import { Global } from "@emotion/react";
import AppLayout from "../layout/AppLayout";
import { Router } from "next/dist/client/router";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MoblieHeader from "../layout/MobileHeader";
import LoadingScreen from "../layout/LoadingPage";
import { globalStyles } from "../styles/global";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
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
        <LoadingScreen />
      ) : (
        <>
          <Global styles={globalStyles} />
          <Header />
          <MoblieHeader />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
          <Footer />
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(App);
