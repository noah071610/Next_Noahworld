import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import Link from "next/link";
import { LOAD_POSTS_REQUEST } from "../@reducers/post";
import { LOAD_INFO_REQUEST } from "../@reducers/user";
import { RootState } from "../@reducers";
import wrapper from "../@store/configureStore";
import axios from "axios";
import { END } from "@redux-saga/core";
import { IStore } from "../types";
import ArticleCardRow from "../components/Articles/ArticleCardRow";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../styles/emotion";
import { BLUE_COLOR } from "../config";
import TopArticleCard from "../components/Articles/TopArticleCard";
import CountUp from "react-countup";
import { MainPageWrapper } from "../layout/MainPage/styles";

const MoreBtn = styled.a`
  ${tw`p-4 mt-4 w-full`}
  ${FLEX_STYLE("center", "center")};
  &:hover {
    ${tw`font-bold`}
    color:${BLUE_COLOR};
  }
`;

const MainPage = memo(() => {
  const { techPosts, dailyPosts, hashtags, mostLikedPost, mostViewedPost, mostCommentedPost } =
    useSelector((state: RootState) => state.post);

  return (
    <MainPageWrapper>
      <section>
        <h2 className="main-title">
          HOME
          {techPosts && dailyPosts && (
            <span className="post-count">
              +
              <CountUp duration={2} start={0} end={techPosts.concat(dailyPosts).length} />
              &nbsp;posts.&nbsp;+
              <CountUp duration={2} start={0} end={hashtags?.length} />
              &nbsp;hashtags.
            </span>
          )}
        </h2>
        <Divider orientation="left">
          <Link href="/tech">
            <a>Information Technology</a>
          </Link>
        </Divider>
        {techPosts?.slice(0, 4).map((v, i) => (
          <ArticleCardRow key={i} article={v} />
        ))}
        {techPosts.length > 4 && (
          <Link href="/tech">
            <MoreBtn>
              <span>View More Articles</span>
            </MoreBtn>
          </Link>
        )}
        <Divider orientation="left">
          <Link href="/daily">
            <a>Daily</a>
          </Link>
        </Divider>
        {dailyPosts?.slice(0, 4).map((v, i) => (
          <ArticleCardRow key={i} article={v} />
        ))}
        {dailyPosts.length > 4 && (
          <Link href="/daily">
            <MoreBtn>
              <span>View More Articles</span>
            </MoreBtn>
          </Link>
        )}
      </section>
      {/*Aside Manu*/}
      <aside>
        <TopArticleCard
          image_src="https://img.icons8.com/doodle/48/000000/trophy--v1.png"
          type="like"
          article={mostLikedPost}
        />
        <TopArticleCard
          image_src="https://img.icons8.com/doodle/96/000000/goal.png"
          type="view"
          article={mostViewedPost}
        />
        <TopArticleCard
          image_src="https://img.icons8.com/doodle/96/000000/speech-bubble-with-dots.png"
          type="comments"
          article={mostCommentedPost}
        />
        <Divider />
        <ul className="hashtag-list">
          {hashtags &&
            hashtags.map((v, i) => {
              return (
                <li onClick={() => window.scrollTo({ top: 0 })} key={i}>
                  <Link href={`/${v.category}?hashtag=${v.name}`}>
                    <a>#{v.name}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </aside>
    </MainPageWrapper>
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

export default MainPage;
