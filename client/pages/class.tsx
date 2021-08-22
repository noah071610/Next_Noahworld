/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { memo } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { LOAD_CLASS_POSTS_REQUEST } from "../@reducers/post";
import Link from "next/link";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { RootState } from "../@reducers";
import Head from "next/head";
import UserProfile from "../components/Profile/UserProfile";
import ClassSmallPoster from "../components/Class/ClassSmallPoster";
import ClassPoster from "../components/Class/ClassPoster";
import WordForm from "../components/Class/WordForm";
import ArticleColumn from "../components/Articles/ArticleColumn";
import QuizForm from "../components/Class/QuizForm";
import QuizFormSmall from "../components/Class/QuizFormSmall";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { IStore } from "../types";
import { END } from "@redux-saga/core";
import { marginCSS, paddingCSS } from "../styles/emotion";
import { Col, Divider, Row } from "antd";

const ClassLists = styled.div`
  -ms-overflow-style: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 330px;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogClassPage = memo(() => {
  const { culturePosts, classPosts } = useSelector((state: RootState) => state.post);
  return (
    <>
      <Head>
        <title>Noah world | Korean Class</title>
      </Head>
      <div>
        <UserProfile />
        <ClassPoster />
        <ClassSmallPoster />
        <Row>
          <Col className="blog_class_basic" xs={24} md={24} lg={12}>
            <h2 className="blog_class_title">韓国語基礎</h2>
            <ClassLists>
              {classPosts &&
                classPosts.map((v, i) => (
                  <div className="blog_class_card" key={i}>
                    <Link href={`/class/post/${v.id}`}>
                      <a className="blog_class_list">
                        <span>0{i + 1}</span>
                        <p>{v.title}</p>
                      </a>
                    </Link>
                    <Divider style={{ margin: "0" }} />
                  </div>
                ))}
            </ClassLists>
          </Col>
          <WordForm />
          <Col span={24} css={marginCSS("2rem", 0, 0, 0)}>
            <h2 css={paddingCSS(0, 0, 0, "1rem")} className="blog_class_title">
              日韓の文化
            </h2>
            <div css={marginCSS(0, 0, "3rem", 0)}>
              <Slider {...settings}>
                {culturePosts?.map((v, i) => (
                  <ArticleColumn key={i} article={v} />
                ))}
              </Slider>
            </div>
          </Col>
          <Col span={24} css={marginCSS("2rem", 0, 0, 0)}>
            <h2 css={paddingCSS(0, 0, 0, "1rem")} className="blog_class_title">
              韓国語会話
            </h2>
            <QuizForm />
            <QuizFormSmall />
          </Col>
        </Row>
      </div>
    </>
  );
});

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_CLASS_POSTS_REQUEST,
  });
  store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  store.dispatch(END);
  await (store as IStore).sagaTask.toPromise();
  return {
    props: {},
  };
});

export default memo(BlogClassPage);
