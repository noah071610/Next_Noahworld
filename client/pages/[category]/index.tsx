import { Col, Row } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CATEGORY_POSTS_REQUEST, LOAD_MORE_POSTS_REQUEST } from "../../@reducers/post";
import { RootState } from "../../@reducers";
import Head from "next/head";
import wrapper from "../../@store/configureStore";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/router";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";
import axios from "axios";
import styled from "@emotion/styled";
import UserProfile from "../../components/Profile/UserProfile";
import ArticleCardColumn from "../../components/Articles/ArticleCardColumn";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../config";
const CategoryPageHeader = styled.section`
  ${tw`p-4 mt-8`}
  h1 {
    ${tw`mt-0 mb-4 text-3xl`}
    .post-count {
      ${tw`ml-4 text-xl`}
      color:${BLUE_COLOR}
    }
  }
  .hashtag-list {
    ${tw`pb-4 pr-40`}
    button {
      ${tw`text-sm`}
      &:hover {
        color: ${BLUE_COLOR};
      }
    }
  }
`;

const BlogCategoryPage = () => {
  const router = useRouter();
  const category = router.query.category;
  const dispatch = useDispatch();
  const { techPosts, dailyPosts, hasMorePosts, loadMorePostsLoading, countPosts } = useSelector(
    (state: RootState) => state.post
  );
  const [onHashtagFilter, setOnHashtagFilter] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    function onScroll() {
      if (
        //Y축 스크롤 값과 화면에 보이는 페이지 길이
        window.scrollY + document.documentElement.clientHeight >
        //전체 페이지의 길이
        document.documentElement.scrollHeight - 300
      ) {
        if (
          hasMorePosts &&
          !loadMorePostsLoading &&
          (techPosts || dailyPosts).length > 5 &&
          !onHashtagFilter
        ) {
          //포스트가 더 있고 , 포스트를 로딩중이 아니고 , 포스트가 7개 초과이면 ( )
          const LastId = (techPosts || dailyPosts)[(techPosts || dailyPosts).length - 1].id;
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
  }, [hasMorePosts, techPosts, dailyPosts, loadMorePostsLoading, category]);

  const onClickHashtag = useCallback(
    (hashtag: string) => {
      dispatch({
        type: LOAD_CATEGORY_POSTS_REQUEST,
        data: {
          category,
          hashtag,
        },
      });
      setOnHashtagFilter(true);
    },
    [category]
  );

  const onClickAllHashtag = useCallback(() => {
    dispatch({
      type: LOAD_CATEGORY_POSTS_REQUEST,
      data: {
        category,
      },
    });
    setOnHashtagFilter(false);
  }, [category]);

  return (
    <>
      <Head>
        <title>Noah world | {category}</title>
      </Head>
      {user && <UserProfile />}
      <main>
        <CategoryPageHeader>
          <h1>
            {(category as string).toUpperCase() + " POSTS"}
            <span className="post-count">
              +&nbsp;
              {countPosts?.length}
              &nbsp;Posts.
            </span>
          </h1>
          <ul className="hashtag-list">
            {(techPosts || dailyPosts)
              .map((v) => v.Hashtags.map((v) => v.name))
              ?.flat()
              .filter((v, i, arr) => i === arr.findIndex((t) => v === t))
              .map((v, i) => (
                <button onClick={() => onClickHashtag(v)} key={`hashtag_${i}`}>
                  <li>#{v}</li>
                </button>
              ))}
            {onHashtagFilter && (
              <button onClick={onClickAllHashtag} key={`hashtag_viewAll`}>
                <li># View All Posts</li>
              </button>
            )}
          </ul>
        </CategoryPageHeader>
        <Row>
          {(techPosts || dailyPosts).map((v, i) => (
            <Col key={i} xs={24} sm={12} lg={8}>
              <ArticleCardColumn setOnHashtagFilter={setOnHashtagFilter} article={v} />
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  let { category, hashtag } = query;

  if (category === "tech" || category === "daily") {
    store.dispatch({
      type: LOAD_CATEGORY_POSTS_REQUEST,
      data: {
        category,
        hashtag,
      },
    });
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

export default BlogCategoryPage;
