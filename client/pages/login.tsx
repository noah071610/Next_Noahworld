import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ON_SIGN_UP_PAGE } from "../@reducers/blog";
import { RootState } from "../@reducers";
import Head from "next/head";
import BlogSignUpSection from "../components/Login/BlogSingUpSection";
import BlogLoginSection from "../components/Login/BlogLoginSection";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { IStore } from "../types";
import { END } from "@redux-saga/core";

const BlogLoginPage = () => {
  const dispatch = useDispatch();
  const { onSignUpPage } = useSelector((state: RootState) => state.blog);

  const onClickSignUp = () => {
    dispatch({
      type: ON_SIGN_UP_PAGE,
      data: true,
    });
  };
  const onClickLogin = () => {
    dispatch({
      type: ON_SIGN_UP_PAGE,
      data: false,
    });
  };

  return (
    <>
      <Head>
        <title>Noah world | Login</title>
      </Head>
      <div className="login">
        <div className="login_form">
          {onSignUpPage ? (
            <BlogSignUpSection onClickLogin={onClickLogin} />
          ) : (
            <BlogLoginSection onClickSignUp={onClickSignUp} />
          )}
        </div>
        <div className="login_image">
          <img alt="login_main_poster" style={{ width: "100%" }} src="/images/blog/signup.jpg" />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  store.dispatch(END);
  await (store as IStore).sagaTask.toPromise();
  return {
    props: {},
  };
});

export default BlogLoginPage;
