import React, { useState } from "react";
import Head from "next/head";
import SignUpForm from "../layout/LoginPage/SingUpForm";
import LoginForm from "../layout/LoginPage/LoginForm";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { IStore } from "../types";
import { END } from "@redux-saga/core";
import { LoginWrapper } from "../layout/LoginPage/styles";

const BlogLoginPage = () => {
  const [onSignUpPage, setOnSignUpPage] = useState(false);

  return (
    <>
      <Head>
        <title>Noah world | Login</title>
      </Head>
      <LoginWrapper>
        <div className="login-form">
          {onSignUpPage ? (
            <SignUpForm setOnSignUpPage={setOnSignUpPage} />
          ) : (
            <LoginForm setOnSignUpPage={setOnSignUpPage} />
          )}
        </div>
        <div className="login-poster">
          <img alt="login_main_poster" src="/images/blog/signup.jpg" />
        </div>
      </LoginWrapper>
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
