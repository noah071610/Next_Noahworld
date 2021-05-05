import { Col, Divider, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CATEGORY_POSTS_REQUEST, LOAD_MORE_POSTS_REQUEST } from "../../@reducers/post";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";
import CountUp from "react-countup";
import { RootState } from "../../@reducers";
import Head from "next/head";
import UserProfile from "../../components/Blog/Profile/UserProfile";
import ArticleRow from "../../components/Blog/Articles/ArticleRow";
import ArticleColumn from "../../components/Blog/Articles/ArticleColumn";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/dist/client/router";

function BlogCategoryPage() {
  const {
    techPosts,
    dailyPosts,
    hasMorePosts,
    loadCategoryPostsLoading,
    loadMorePostsLoading,
    countPosts,
  } = useSelector((state: RootState) => state.post);
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  let category = router.query.category;

  useEffect(() => {
    dispatch({
      type: LOAD_CATEGORY_POSTS_REQUEST,
      data: category,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
  }, []);
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadMorePostsLoading && (techPosts || dailyPosts.length > 7)) {
          const LastId =
            (techPosts || dailyPosts) &&
            (techPosts || dailyPosts)[(techPosts || dailyPosts).length - 1].id;
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
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMorePosts, loadCategoryPostsLoading, techPosts, dailyPosts]);

  return (
    <>
      <Head>
        <title>Noah world | {category}</title>
      </Head>
      {user && <UserProfile />}
      {(techPosts || dailyPosts) && (
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
            <Divider />
          </div>
          <div className="blog_category_small">
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
      )}
    </>
  );
}

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

export default BlogCategoryPage;
