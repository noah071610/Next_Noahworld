import React, { memo } from "react";
import CountUp from "react-countup";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../@reducers";
import Head from "next/head";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/dist/client/router";
import { SEARCH_KEYWORD_REQUEST } from "../../@reducers/blog";
import { marginCSS, noSearchPostCSS } from "../../styles/emotion";
import SearchedPosts from "../../components/Articles/SearchedPosts";

const BlogSearchPage = memo(() => {
  const { searchedKeyword, searchPosts } = useSelector((state: RootState) => state.blog);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Noah world | {router.query.keyword}</title>
      </Head>
      <h2 className="search_title">
        SEARCH POSTS <br className="br_search" />
        <span>"{searchedKeyword && searchedKeyword}"</span>
        <span>
          +&nbsp;
          <CountUp duration={4} start={0} end={searchPosts?.length || 0} />
          &nbsp;posts searched
        </span>
      </h2>
      <Divider style={{ marginBottom: 0 }} />
      <ul css={marginCSS(0, 0, 0, 0)}>
        {searchPosts.length > 0 ? (
          searchPosts.map((searchPost, i) => {
            return <SearchedPosts key={i} posts={searchPost} />;
          })
        ) : (
          <li css={noSearchPostCSS}>
            <img
              alt="noComment"
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
            />
            <h3>Couldn't find posts with your keyword.</h3>
          </li>
        )}
      </ul>
      <div style={{ height: "22rem" }} />
    </>
  );
});

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  let keyword = params.keyword;
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  store.dispatch({
    type: SEARCH_KEYWORD_REQUEST,
    data: { keyword },
  });
  store.dispatch(END);
  await (store as IStore).sagaTask.toPromise();
  return {
    props: {},
  };
});

export default memo(BlogSearchPage);
