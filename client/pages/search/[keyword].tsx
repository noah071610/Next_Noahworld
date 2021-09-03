import React from "react";
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
import { SEARCH_POST_REQUEST } from "../../@reducers/post";
import { FLEX_STYLE } from "../../styles/emotion";
import SearchCard from "../../components/Articles/SearchCard";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../config";

const SearchPageTitle = styled.h1`
  ${tw`my-20 mx-4`}
  font-size: 2.3rem;
  line-height: 1.3;
  .title-count {
    color: ${BLUE_COLOR};
    margin-left: 1rem;
    font-size: 1.2rem;
  }
  @media (max-width: 576px) {
    .title-main {
      ${tw`block`}
    }
    .title-count {
      ${tw`m-0`}
    }
    margin: 3rem 1rem;
    font-size: 1.4rem;
  }
`;

const NoSearchPost = styled.li`
  ${tw`w-full py-16 relative`}
  ${FLEX_STYLE("flex-start", "center", "column")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  img {
    ${tw`opacity-30 w-32`}
  }
  h3 {
    text-align: center;
  }
`;

const BlogSearchPage = () => {
  const { searchedKeyword, searchPosts } = useSelector((state: RootState) => state.post);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Noah world | {router.query.keyword}</title>
      </Head>
      <SearchPageTitle>
        <span className="title-main">SEARCH POSTS "{searchedKeyword && searchedKeyword}"</span>
        <span className="title-count">
          +&nbsp;
          <CountUp duration={4} start={0} end={searchPosts?.length || 0} />
          &nbsp;posts searched
        </span>
      </SearchPageTitle>
      <Divider style={{ marginBottom: 0 }} />
      <ul>
        {searchPosts.length > 0 ? (
          searchPosts.map((searchPost, i) => {
            return <SearchCard key={i} posts={searchPost} />;
          })
        ) : (
          <NoSearchPost>
            <img
              alt="noComment"
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
            />
            <h3>Couldn't find posts with your keyword.</h3>
          </NoSearchPost>
        )}
      </ul>
      <div style={{ height: "10rem" }} />
    </>
  );
};

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
    type: SEARCH_POST_REQUEST,
    data: { keyword },
  });
  store.dispatch(END);
  await (store as IStore).sagaTask.toPromise();
  return {
    props: {},
  };
});

export default BlogSearchPage;
