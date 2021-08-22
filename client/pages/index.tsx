import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import Link from "next/link";
import { LOAD_POSTS_REQUEST } from "../@reducers/post";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import CountUp from "react-countup";
import { RootState } from "../@reducers";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { IStore } from "../types";
import dynamic from "next/dynamic";

const MainArticle = dynamic(() => import("../components/Articles/MainArticle"));
const MostArticle = dynamic(() => import("../components/Articles/MostArticle"));
const UserProfile = dynamic(() => import("../components/Profile/UserProfile"));
const ClassCard = dynamic(() => import("../components/Class/ClassCard"));

const BlogMainPage = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const { techPosts, dailyPosts, hashtags, mostLikedPost, mostViewedPost, mostCommentedPost } =
    useSelector((state: RootState) => state.post);

  return (
    <>
      {user && <UserProfile />}
      <div className="blog">
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
        {/*Main Manu*/}
        <section className="blog_main">
          <Divider orientation="left">
            <Link href="/tech">
              <a>Information Technology</a>
            </Link>
          </Divider>
          <MainArticle category={techPosts} />
          <Divider orientation="left">
            <Link href="/daily">
              <a>Daily</a>
            </Link>
          </Divider>
          <MainArticle category={dailyPosts} />
        </section>
        {/*Aside Manu*/}
        <aside className="blog_aside">
          <MostArticle
            mostPost={mostLikedPost}
            src="https://img.icons8.com/doodle/96/000000/trophy--v1.png"
            desc="Most Liked"
            type="like"
            aside={true}
          />
          <MostArticle
            mostPost={mostViewedPost}
            src="https://img.icons8.com/doodle/96/000000/goal.png"
            desc="Most View"
            type="view"
            aside={true}
          />
          <MostArticle
            mostPost={mostCommentedPost}
            src="https://img.icons8.com/doodle/96/000000/speech-bubble-with-dots.png"
            desc="Most Commented"
            type="comments"
            aside={true}
          />
          <Divider />
          <MostArticle
            hashtags={hashtags}
            src="https://img.icons8.com/ios/100/000000/hashtag.png"
            desc="Hashtags"
          />
        </aside>
      </div>
      {/*Aside Manu When SM*/}
      <section className="blog_md_aside">
        <Divider />
        <MostArticle
          mostPost={mostLikedPost}
          src="https://img.icons8.com/doodle/96/000000/trophy--v1.png"
          desc="Most Liked"
          type="like"
        />
        <MostArticle
          mostPost={mostViewedPost}
          src="https://img.icons8.com/doodle/96/000000/goal.png"
          desc="Most View"
          type="view"
        />
        <MostArticle
          mostPost={mostCommentedPost}
          src="https://img.icons8.com/doodle/96/000000/speech-bubble-with-dots.png"
          desc="Most Commented"
          type="comments"
        />
        <Divider />
        <MostArticle
          hashtags={hashtags}
          src="https://img.icons8.com/ios/100/000000/hashtag.png"
          desc="Hashtags"
        />
      </section>
      <ClassCard />
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
    type: LOAD_POSTS_REQUEST,
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

export default BlogMainPage;
