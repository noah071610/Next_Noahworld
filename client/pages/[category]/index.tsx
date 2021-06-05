import { Col, Divider, Row } from "antd";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CATEGORY_POSTS_REQUEST, LOAD_MORE_POSTS_REQUEST } from "../../@reducers/post";
import CountUp from "react-countup";
import { RootState } from "../../@reducers";
import Head from "next/head";
import dynamic from "next/dynamic";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/router";

const UserProfile = dynamic(() => import("../../components/Blog/Profile/UserProfile"));
const ArticleRow = dynamic(() => import("../../components/Blog/Articles/ArticleRow"));
const ArticleColumn = dynamic(() => import("../../components/Blog/Articles/ArticleColumn"));

const BlogCategoryPage = memo(() => {
  const router = useRouter();
  const category = router.query.category;
  const dispatch = useDispatch();
  const { techPosts, dailyPosts, hasMorePosts, loadMorePostsLoading, countPosts } = useSelector(
    (state: RootState) => state.post
  );
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    function onScroll() {
      if (
        //Y축 스크롤 값과 화면에 보이는 페이지 길이
        window.scrollY + document.documentElement.clientHeight >
        //전체 페이지의 길이
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadMorePostsLoading && (techPosts || dailyPosts.length > 7)) {
          //포스트가 더 있고 , 포스트를 로딩중이 아니고 , 포스트가 7개 초과이면 ( )
          const LastId =
            (techPosts || dailyPosts) &&
            (techPosts || dailyPosts)[(techPosts || dailyPosts).length - 1].id;
          // 이미 불러온 포스트들(배열)에 마지막값의 아이디를 가져온다.
          dispatch({
            type: LOAD_MORE_POSTS_REQUEST,
            data: {
              LastId,
              category,
            },
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      //메모리릭을 방지하기위해 unmount시 removeEventListner
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts]);

  return (
    <>
      <Head>
        <title>Noah world | {category}</title>
      </Head>
      {user && <UserProfile />}
      <div>
        <h2 className="blog_category_header">
          {(category as string).toUpperCase() + " POSTS"}
          <br className="br_category" />
          <span className="blog_category_count">
            +&nbsp;
            <CountUp duration={4} start={0} end={countPosts?.length} />
            &nbsp;posts.
          </span>
        </h2>
        <div className="blog_category_big">
          <ArticleRow article={dailyPosts[0] || techPosts[0]} />
          <Divider />
        </div>
        <div className="blog_category_medium">
          <ArticleColumn article={dailyPosts[0] || techPosts[0]} />
        </div>
        <div className="blog_category_small">
          <Divider />
          <ArticleColumn article={dailyPosts[0] || techPosts[0]} />
        </div>
        <Row>
          {(techPosts || dailyPosts).slice(1).map((v, i) => (
            <Col key={i} xs={24} sm={12} lg={8}>
              <ArticleColumn article={v} />
            </Col>
          ))}
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
  let { category } = context.query;
  if (category === "tech" || category === "daily" || category === "culture") {
    context.store.dispatch({
      type: LOAD_CATEGORY_POSTS_REQUEST,
      data: category,
    });
  } else {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default memo(BlogCategoryPage);
