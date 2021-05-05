/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider } from "antd";
import Slider from "react-slick";
import Link from "next/link";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHAGE_HEADER } from "../@reducers/blog";
import { LOAD_POSTS_REQUEST } from "../@reducers/post";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import CountUp from "react-countup";
import { RootState } from "../@reducers";
import UserProfile from "../components/Blog/Profile/UserProfile";
import ArticleRow from "../components/Blog/Articles/ArticleRow";
import ArticleColumn from "../components/Blog/Articles/ArticleColumn";
import ArticleSmall from "../components/Blog/Articles/ArticleSmall";
import ArticleAside from "../components/Blog/Articles/ArticleAside";
import ArticleSmallAside from "../components/Blog/Articles/ArticleSmallAside";
import ClassCard from "../components/Blog/Class/ClassCard";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { IStore } from "../types";

const BlogMainPage = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const {
    techPosts,
    dailyPosts,
    hashtags,
    mostLikedPost,
    mostViewedPost,
    mostCommentedPost,
  } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const smallSizeSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch({
      type: CHAGE_HEADER,
      header: "blog",
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: LOAD_INFO_REQUEST,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user && <UserProfile />}
      <section className="blog">
        <h2 className="blog_category_header header_small_on">
          HOME
          {techPosts && dailyPosts && (
            <span className="blog_category_count">
              <br className="br_category" />
              +&nbsp;
              <CountUp duration={4} start={0} end={techPosts.concat(dailyPosts).length} />
              &nbsp;posts.&nbsp;+&nbsp;
              <CountUp duration={4} start={0} end={hashtags?.length} />
              &nbsp;hashtags.
            </span>
          )}
        </h2>
        {techPosts && dailyPosts && (
          <section className="blog_main">
            <Divider orientation="left">
              <Link href="/tech">
                <a>Information Technology</a>
              </Link>
            </Divider>
            <div className="blog_category_big">
              <ArticleRow article={techPosts && techPosts[0]} />
            </div>
            <div className="blog_category_medium">
              <ArticleColumn article={techPosts && techPosts[0]} />
            </div>
            <div className="blog_category_small">
              <Slider {...smallSizeSettings}>
                {techPosts.slice(0, 3).map((techPost, i) => {
                  return <ArticleColumn key={i} article={techPost} />;
                })}
              </Slider>
            </div>
            <div style={{ marginBottom: "3rem" }} className="blog_main_big">
              <Divider />
              <Slider {...settings}>
                {techPosts.slice(1, 8).map((v, i) => (
                  <ArticleColumn key={i} article={v} />
                ))}
              </Slider>
            </div>
            {techPosts.slice(3, 8).map((techPost, i) => {
              return <ArticleSmall key={i} article={techPost} />;
            })}
            <Divider orientation="left">
              <Link href={"/daily"}>
                <a>Daily</a>
              </Link>
            </Divider>
            <div className="blog_category_big">
              <ArticleRow article={dailyPosts && dailyPosts[0]} />
            </div>
            <div className="blog_category_medium">
              <ArticleColumn article={dailyPosts && dailyPosts[0]} />
            </div>
            <div className="blog_category_small">
              <Slider {...smallSizeSettings}>
                {dailyPosts.slice(0, 3).map((dailyPost, i) => {
                  return <ArticleColumn key={i} article={dailyPost} />;
                })}
              </Slider>
            </div>
            <div className="blog_main_big" style={{ marginBottom: "3rem" }}>
              <Divider />
              <Slider {...settings}>
                {dailyPosts.slice(1, 8).map((v, i) => (
                  <ArticleColumn key={i} article={v} />
                ))}
              </Slider>
            </div>
            {dailyPosts.slice(3, 8).map((dailyPost, i) => {
              return <ArticleSmall key={i} article={dailyPost} />;
            })}
          </section>
        )}
        {/*Aside Manu*/}
        <aside className="blog_aside">
          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                fontSize: "1.2rem",
                padding: "0 1rem",
              }}
            >
              <img
                alt="trophy"
                className="icon"
                src="https://img.icons8.com/doodle/96/000000/trophy--v1.png"
              />
              Most Liked
            </h3>
            {mostLikedPost && <ArticleAside type="like" article={mostLikedPost} />}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                fontSize: "1.2rem",
                padding: "0 1rem",
              }}
            >
              <img
                alt="view_log"
                className="icon"
                src="https://img.icons8.com/doodle/96/000000/goal.png"
              />
              Most View
            </h3>
            {mostViewedPost && <ArticleAside type="view" article={mostViewedPost} />}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                fontSize: "1.2rem",
                padding: "0 1rem",
              }}
            >
              <img
                alt="comment_log"
                className="icon"
                src="https://img.icons8.com/doodle/96/000000/speech-bubble-with-dots.png"
              />
              Most Commented
            </h3>
            {mostCommentedPost && <ArticleAside type="comments" article={mostCommentedPost} />}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                fontSize: "1.2rem",
                padding: "0 1rem",
              }}
            >
              <img
                alt="hash_tag"
                className="icon"
                src="https://img.icons8.com/ios/100/000000/hashtag.png"
              />
              Hashtags
            </h3>
            <ul className="blog_aside_tag">
              {hashtags &&
                hashtags.map((v, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/hashtag/${v.name}`}>
                        <a>#{v.name}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </aside>
      </section>
      <section className="blog_md_aside">
        <Divider />
        <div>
          <h3
            style={{ display: "flex", alignItems: "center", fontSize: "1.2rem", padding: "0 1rem" }}
          >
            <img
              alt="trophy"
              className="icon"
              src="https://img.icons8.com/doodle/96/000000/trophy--v1.png"
            />
            Most Liked
          </h3>
          {mostLikedPost && <ArticleSmallAside type="like" article={mostLikedPost} />}
        </div>
        <div>
          <h3
            style={{ display: "flex", alignItems: "center", fontSize: "1.2rem", padding: "0 1rem" }}
          >
            <img
              alt="view_log"
              className="icon"
              src="https://img.icons8.com/doodle/96/000000/goal.png"
            />
            Most View
          </h3>
          {mostViewedPost && <ArticleSmallAside type="like" article={mostViewedPost} />}
        </div>
        <div>
          <h3
            style={{ display: "flex", alignItems: "center", fontSize: "1.2rem", padding: "0 1rem" }}
          >
            <img
              alt="comment_log"
              className="icon"
              src="https://img.icons8.com/doodle/96/000000/speech-bubble-with-dots.png"
            />
            Most Commented
          </h3>
          {mostCommentedPost && <ArticleSmallAside type="comments" article={mostCommentedPost} />}
        </div>
        <Divider />
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{ display: "flex", alignItems: "center", fontSize: "1.2rem", padding: "0 1rem" }}
          >
            <img
              alt="hashtag"
              className="icon"
              src="https://img.icons8.com/ios/100/000000/hashtag.png"
            />
            Hashtags
          </h3>
          <ul style={{ marginLeft: "0.5rem" }} className="blog_aside_tag">
            {hashtags &&
              hashtags.map((v, i) => {
                return (
                  <li onClick={() => window.scrollTo({ top: 0 })} key={i}>
                    <Link href={`/hashtag/${v.name}`}>
                      <a>#{v.name}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
      <ClassCard />
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
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default memo(BlogMainPage);
