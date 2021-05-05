/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Divider, Row } from "antd";
import { memo, useEffect } from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CLASS_POSTS_REQUEST } from "../@reducers/post";
import Link from "next/link";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { RootState } from "../@reducers";
import Head from "next/head";
import UserProfile from "../components/Blog/Profile/UserProfile";
import ClassSmallPoster from "../components/Blog/Class/ClassSmallPoster";
import ClassPoster from "../components/Blog/Class/ClassPoster";
import WordForm from "../components/Blog/Class/WordForm";
import ArticleColumn from "../components/Blog/Articles/ArticleColumn";
import QuizForm from "../components/Blog/Class/QuizForm";
import QuizFormSmall from "../components/Blog/Class/QuizFormSmall";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { IStore } from "../types";
import { END } from "@redux-saga/core";

const mixinStyles = css`
  -ms-overflow-style: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 330px;
`;

const ClassLists = styled.div`
  ${mixinStyles};
`;

const BlogClassPage = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const { culturePosts, classPosts } = useSelector((state: RootState) => state.post);

  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch({
      type: LOAD_CLASS_POSTS_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Noah world | Korean Class</title>
      </Head>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        {user && (
          <div style={{ width: "100%", overflowX: "hidden" }}>
            <UserProfile />
          </div>
        )}
        <ClassPoster />
        <ClassSmallPoster />
        <Row style={{ overflow: "hidden" }}>
          <Col style={{ padding: "1rem" }} md={24} lg={12}>
            <h2 className="blog_class_title">韓国語基礎</h2>
            <ClassLists>
              {classPosts &&
                classPosts.map((v, i) => (
                  <div className="blog_class_card" key={i}>
                    <Link href={`/class/post/${v.id}`}>
                      <a
                        onClick={() => window.scrollTo({ top: 0 })}
                        className="blog_class_list"
                        style={{ alignItems: "center" }}
                      >
                        <div style={{ fontSize: "2rem", marginRight: "1rem" }}>0{i + 1}</div>
                        <span
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            height: "0.9rem",
                            WebkitLineClamp: 1,
                            lineHeight: 1.1,
                            wordWrap: "break-word",
                            overflow: "hidden",
                            fontSize: "0.9rem",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {v.title}
                        </span>
                      </a>
                    </Link>
                    <Divider style={{ margin: "0" }} />
                  </div>
                ))}
            </ClassLists>
          </Col>
          <WordForm />
          <Col span={24} style={{ marginTop: "2rem" }}>
            <h2 style={{ paddingLeft: "1rem" }} className="blog_class_title">
              日韓の文化
            </h2>
            <div style={{ marginBottom: "3rem" }}>
              <Slider {...settings}>
                {culturePosts?.map((v, i) => (
                  <ArticleColumn key={i} article={v} />
                ))}
              </Slider>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: "2rem" }}>
            <h2 style={{ paddingLeft: "1rem" }} className="blog_class_title">
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

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_CLASS_POSTS_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default memo(BlogClassPage);
