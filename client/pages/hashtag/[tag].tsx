import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_HASH_TAG_REQUEST } from "../../@reducers/blog";
import { RootState } from "../../@reducers";
import { useRouter } from "next/dist/client/router";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { marginCSS, noSearchPostCSS } from "../../styles/emotion";
import SearchedPosts from "../../components/Articles/SearchedPosts";

function BlogHashtagPage() {
  const dispatch = useDispatch();
  const { hashtagPosts } = useSelector((state: RootState) => state.blog);
  const router = useRouter();
  const { tag } = router.query;

  useEffect(() => {
    dispatch({
      type: SEARCH_HASH_TAG_REQUEST,
      data: { tag },
    });
  }, [dispatch, tag]);

  return (
    <>
      <h2 className="search_title">
        SEARCH TAGS <br className="br_search" />
        <span>"#{tag}"</span>
        <span>
          +&nbsp;
          <CountUp duration={4} start={0} end={hashtagPosts?.length || 0} />
          &nbsp;posts searched
        </span>
      </h2>
      <Divider style={{ marginBottom: 0 }} />
      <ul css={marginCSS(0, 0, 0, 0)}>
        {hashtagPosts.length > 0 ? (
          hashtagPosts.map((hashtagPost, i) => {
            return <SearchedPosts key={i} posts={hashtagPost} />;
          })
        ) : (
          <div css={noSearchPostCSS}>
            <img
              alt="noComment"
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
            />
            <h3>Couldn't find Hashtags</h3>
          </div>
        )}
      </ul>
      <div style={{ height: "22rem" }} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  let tag = params.tag;
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: SEARCH_HASH_TAG_REQUEST,
    data: { tag },
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

export default BlogHashtagPage;
