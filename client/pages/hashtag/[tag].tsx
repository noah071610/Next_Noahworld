import { useEffect } from "react";
import CountUp from "react-countup";
import { Divider } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_HASH_TAG_REQUEST } from "../../@reducers/blog";
import { RootState } from "../../@reducers";
import { BLUE_COLOR } from "../../config";
import { useRouter } from "next/dist/client/router";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";

const SearchList = styled.li`
  transition: all 0.3s;
  font-size: 1rem;
  cursor: pointer;
  padding: 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

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
  const searchPostsComponent = () => {
    return hashtagPosts?.map((v, i) => {
      const contentWithoutHTML = v.content.replace(/(<([^>]+)>)/gi, "");
      return (
        <SearchList onClick={() => router.push(`/${v.category}/post/${v.id}`)} key={i}>
          <span style={{ fontWeight: "bold" }}>Post Number</span> :{" "}
          <span style={{ color: BLUE_COLOR }}>{v.id}</span> <Divider type="vertical" />
          <span style={{ fontWeight: "bold" }}>Title</span> : {v.title} <Divider type="vertical" />
          <span style={{ fontWeight: "bold" }}>Category</span> : {v.category}{" "}
          <Divider type="vertical" />
          <span style={{ fontWeight: "bold" }}>Contents</span> :{contentWithoutHTML.slice(0, 50)}
        </SearchList>
      );
    });
  };
  return (
    <>
      <h2 style={{ lineHeight: "1.3" }} className="search_title">
        SEARCH TAGS <br className="br_search" />
        <span style={{ color: BLUE_COLOR }}>"#{tag}"</span>
        <span style={{ color: BLUE_COLOR, margin: "0 1rem", fontSize: "1.2rem" }}>
          +&nbsp;
          <CountUp duration={4} start={0} end={hashtagPosts?.length || 0} />
          &nbsp;posts searched
        </span>
      </h2>
      <Divider style={{ marginBottom: 0 }} />
      <ul style={{ margin: 0 }}>
        {hashtagPosts?.length > 0 ? (
          searchPostsComponent()
        ) : (
          <div
            style={{
              width: "100%",
              padding: "1rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "80px", opacity: "0.3" }}
              alt="noComment"
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
            />
            <h3 style={{ textAlign: "center" }}>Couldn't find Hashtags</h3>
          </div>
        )}
      </ul>
      <div style={{ height: "22rem" }} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  let tag = context.query.tag;
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: SEARCH_HASH_TAG_REQUEST,
    data: { tag },
  });
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default BlogHashtagPage;
