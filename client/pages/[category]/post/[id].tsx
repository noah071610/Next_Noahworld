/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { memo, useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import { Divider, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_POST_REQUEST, LOAD_POST_REQUEST, UNLIKE_POST_REQUEST } from "../../../@reducers/post";
import styled from "@emotion/styled";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { LOAD_INFO_REQUEST } from "../../../@reducers/user";
import dayjs from "dayjs";
import { RootState } from "../../../@reducers";
import Head from "next/head";
import { RED_COLOR } from "../../../config";
import wrapper from "../../../@store/configureStore";
import axios from "axios";
import { IStore } from "../../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";
import dynamic from "next/dynamic";
dayjs.locale("kor");

const CommentForm = dynamic(() => import("../../../components/Blog/Comments/CommentForm"));
const ArticlePost = dynamic(() => import("../../../components/Blog/Articles/ArticlePost"));
const RemoteControl = dynamic(() => import("../../../components/Blog/Comments/RemoteControl"));

const Heart = styled.a`
  display: inline-block;
  margin: 0 0.5rem 0 1rem;
  font-size: 1.5rem;
  &:hover {
    color: ${RED_COLOR};
    -webkit-animation: heartBeat 1s;
    animation: heartBeat 1s;
  }
`;

const HeartLiked = styled.a`
  display: inline-block;
  margin: 0 0.5rem 0 1rem;
  font-size: 1.5rem;
  color: ${RED_COLOR};
  &:hover {
    color: ${RED_COLOR};
    span {
      color: ${RED_COLOR};
    }
  }
`;
const PostDesc = css`
  display: flex;
  justify-content: flex-start;
  font-size: 1.1rem;
  margin-bottom: 5rem;
  color: rgba(0, 0, 0, 0.2);
`;

const PostSubTitle = css`
  margin: 5rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MorePostWrapper = css`
  overflow: auto;
  height: 280px;
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  div:first-of-type {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PostWrapper = css`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const BlogPostPage = memo(() => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const {
    post,
    unlikePostDone,
    likePostDone,
    addCommentDone,
    removeCommentDone,
    removeSubCommentDone,
    prevPost,
    nextPost,
  } = useSelector((state: RootState) => state.post);
  const { user } = useSelector((state: RootState) => state.user);
  const [Fullcontent, setFullcontent] = useState("");

  useEffect(() => {
    if (user && post?.PostLikers?.find((v) => v.id === user.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [router.pathname, post?.PostLikers]);

  const onClickUnlike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: { PostId: post?.id, UserId: user?.id },
    });
  }, []);

  useEffect(() => {
    const tagContent = post?.content?.split(/(#[^\s#+^<]+)/g).map((v) => {
      if (v.match(/(#.*")/g)) {
        return v;
      }
      if (v.match(/(#youtube:)/g)) {
        return `<iframe class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/${v.slice(
          9
        )}"></iframe>`;
      }
      if (v.match(/(#[^\s#+^<]+)/g)) {
        return `<a class="hashtag">${v}</a>`;
      }
      return v;
    });
    const fullContentRemoveComma = post && tagContent?.join("");
    fullContentRemoveComma && setFullcontent(fullContentRemoveComma);
  }, [post]);

  useEffect(() => {
    const postId = router.pathname;
    if (!postId) {
      router.push("/");
    }
  }, [router.pathname]);

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: { postId: router.query.id, UserId: user?.id, category: router.query.category },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addCommentDone, unlikePostDone, likePostDone, removeCommentDone, removeSubCommentDone]);

  useEffect(() => {
    if (addCommentDone) {
      message.success("Added comment 🥰");
    }
  }, [addCommentDone]);

  const onClickLike = useCallback(() => {
    if (!user) {
      message.error("You can thumbs up when you are logged in 😿");
      return;
    }
    dispatch({
      type: LIKE_POST_REQUEST,
      data: { PostId: post?.id, UserId: user.id },
    });
  }, []);

  const handleImgError = useCallback((e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/noImage.gif";
  }, []);

  return (
    <>
      <Head>
        <title>Noah world | {post?.title.slice(0, 10)}...</title>
      </Head>
      <h1 style={{ lineHeight: "1.5" }} className="post_main_title">
        {post.title}
      </h1>
      <Divider className="blog_post_divier" />
      <ul css={PostDesc}>
        <li>{dayjs(post.createdAt).format("YYYY.MM.DD")}</li>
        <li>·&nbsp;{post.hit} views</li>
        <li>·&nbsp;{post.PostLikers?.length} likes</li>
      </ul>
      <div css={PostWrapper}>
        <div className="blog_post_article">
          <div className="tui-editor-contents" style={{ marginBottom: "3rem" }}>
            <img
              alt={post.title}
              style={{ width: "100%", marginBottom: "6rem" }}
              src={
                post?.thumbnail
                  ? post.thumbnail
                  : post.imagePath
                  ? post.imagePath.replace(/\/thumb\//, "/original/")
                  : "/images/blog/noImage.gif"
              }
              onError={handleImgError}
            />
            {Fullcontent && parse(Fullcontent)}
          </div>
          <h4 css={PostSubTitle}>
            Do you like this Post?{" "}
            {liked ? (
              <HeartLiked onClick={onClickUnlike}>
                <HeartFilled />
              </HeartLiked>
            ) : (
              <Heart onClick={onClickLike}>
                <HeartOutlined />
              </Heart>
            )}
            <span style={{ fontSize: "1rem" }}>{post.PostLikers?.length}</span>
          </h4>
          <CommentForm />
          <h4 css={PostSubTitle}>More posts</h4>
          <div css={MorePostWrapper}>
            <div>
              <span>Title</span>
              <span>Date</span>
            </div>
            {prevPost?.map((article, i) => (
              <ArticlePost key={i} article={article} />
            ))}
            {nextPost?.map((article, i) => (
              <ArticlePost key={i} article={article} />
            ))}
          </div>
        </div>
        <RemoteControl Fullcontent={Fullcontent} />
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
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: { postId: context.params.id, category: context.query.category },
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default memo(BlogPostPage);
