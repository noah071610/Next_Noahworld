import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ON_SIGN_UP_PAGE } from "../@reducers/blog";
import { RootState } from "../@reducers";
import Head from "next/head";
import SignUpForm from "../components/Login/SingUpForm";
import LoginForm from "../components/Login/LoginForm";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { IStore } from "../types";
import { END } from "@redux-saga/core";
import styled from "@emotion/styled";
import { FLEX_STYLE, GRID_STYLE } from "../styles/emotion";
import tw from "twin.macro";
import { useCallback } from "react";

const LoginWrapper = styled.main`
  ${GRID_STYLE("2rem", "1fr 1fr")};
  .login-poster {
    ${FLEX_STYLE("center", "center")};
    img {
      ${tw`w-full`}
    }
  }
  .login-title {
    ${tw`my-12`}
    h1 {
      ${tw`mb-4`}
      ${FLEX_STYLE("flex-start", "center")}
      img {
        ${tw`ml-4 w-20 h-20`}
      }
    }
  }
  .login-form {
    ${tw`w-full`}
  }
  @media (max-width: 830px) {
    ${FLEX_STYLE("flex-start", "center", "column-reverse")}
    gap:0;
    ${tw`px-4 pt-0`}
    .login-poster {
    }
  }
  @media (max-width: 576px) {
    .login-title {
      ${tw`my-6`}
      h1 {
        font-size: 2rem;
        img {
          ${tw`w-10 h-10`}
        }
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;

const BlogLoginPage = () => {
  const dispatch = useDispatch();
  const { onSignUpPage } = useSelector((state: RootState) => state.blog);

  const onClickSignUp = useCallback(() => {
    dispatch({
      type: ON_SIGN_UP_PAGE,
      data: true,
    });
  }, []);
  const onClickLogin = useCallback(() => {
    dispatch({
      type: ON_SIGN_UP_PAGE,
      data: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Noah world | Login</title>
      </Head>
      <LoginWrapper>
        <div className="login-form">
          {onSignUpPage ? (
            <SignUpForm onClickLogin={onClickLogin} />
          ) : (
            <LoginForm onClickSignUp={onClickSignUp} />
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
