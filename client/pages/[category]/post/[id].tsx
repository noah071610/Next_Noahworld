/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { memo, useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import { Divider, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  LIKE_POST_REQUEST,
  LOAD_POST_REQUEST,
  LOAD_SIDE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from "../../../@reducers/post";
import styled from "@emotion/styled";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { LOAD_INFO_REQUEST } from "../../../@reducers/user";
import dayjs from "dayjs";
import { RootState } from "../../../@reducers";
import Head from "next/head";
import { NO_POST_URL, RED_COLOR } from "../../../config";
import wrapper from "../../../@store/configureStore";
import axios from "axios";
import { IStore } from "../../../types";
import { END } from "@redux-saga/core";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";
import Slider from "react-slick";
import ArticleCardColumn from "../../../components/Articles/ArticleCardColumn";
import ArticleCardRow from "../../../components/Articles/ArticleCardRow";
import CommentForm from "../../../components/Comments/CommentForm";
import Comment from "../../../components/Comments/Comment";
import { PostPageWrapper } from "../../../layout/PostPage/styles";
import PostRemoteControl from "../../../layout/PostPage/PostRemoteControl";
import { handleImgError } from "../../../util/errorHandler";
dayjs.locale("kor");

const Heart = styled.a`
  display: inline-block;
  margin: 0 0.5rem 0 1rem;
  font-size: 1.5rem;
  &:hover {
    color: ${RED_COLOR};
    -webkit-animation: heartBeat 1s;
    animation: heartBeat 1s;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const NoComment = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const PostSubTitle = css`
  margin: 5rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 574,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogPostPage = () => {
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
  }, [post?.id, user?.id]);

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
        return `<a href="/${post.category}?hashtag=${v?.replace("#", "")}">${v}</a>`;
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
      data: { postId: router.query.id, category: router.query.category },
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
  }, [post?.id, user?.id]);

  return (
    <>
      <Head>
        <title>{post?.title.slice(0, 30)}... | Noah world</title>
        <meta
          name="description"
          content={Fullcontent?.replace(/(<([^>]+)>)/gi, "")
            .replace(/&nbsp;|&amp;/gi, "")
            .slice(0, 150)}
        />
        <meta property="og:title" content={`${post?.title} | Noah world`} />
        <meta
          property="og:description"
          content={Fullcontent?.replace(/(<([^>]+)>)/gi, "")
            .replace(/&nbsp;|&amp;/gi, "")
            .slice(0, 150)}
        />
        <meta property="og:image" content={post?.thumbnail || NO_POST_URL} />
        <meta
          property="og:url"
          content={`https://noahworld.site/${post?.category}/post/${post?.id}`}
        />
      </Head>
      <PostPageWrapper>
        <h1 className="post-title">{post?.title}</h1>
        <Divider />
        <ul className="post-desc">
          <li>{dayjs(post?.createdAt).format("YYYY.MM.DD")}</li>
          <li>·&nbsp;{post?.hit} views</li>
          <li>·&nbsp;{post?.PostLikers?.length} likes</li>
        </ul>
        <div className="post-main-wrapper">
          <div className="post-main">
            <img
              className="post-tumbnail"
              alt={post?.title}
              src={post?.thumbnail?.replace(/\/thumb\//, "/original/") || NO_POST_URL}
              onError={(e) => handleImgError(e, "post")}
            />
            <article className="post-content">{Fullcontent && parse(Fullcontent)}</article>
            <h4 css={PostSubTitle}>Another posts</h4>
            {nextPost.length + prevPost.length > 2 ? (
              <Slider {...settings}>
                {nextPost?.map((v, i) => (
                  <ArticleCardColumn smallSize={true} article={v} key={`nextPost_${i}`} />
                ))}
                {prevPost?.map((v, i) => (
                  <ArticleCardColumn smallSize={true} article={v} key={`prevPost_${i}`} />
                ))}
              </Slider>
            ) : (
              nextPost
                .concat(prevPost)
                .map((v, i) => <ArticleCardRow smallSize={true} key={i} article={v} />)
            )}
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
              <span style={{ fontSize: "1rem" }}>{post?.PostLikers?.length}</span>
            </h4>
            <CommentForm />
            {post?.Comments.length > 0 ? (
              post.Comments.map((v, i) => <Comment key={i} comment={v} />)
            ) : (
              <NoComment>
                <img
                  style={{ width: "80px", opacity: "0.3" }}
                  alt="noComment"
                  src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
                />
                <h3>No Comments</h3>
              </NoComment>
            )}
          </div>
          <PostRemoteControl Fullcontent={Fullcontent} />
        </div>
      </PostPageWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POST_REQUEST,
    data: { postId: params.id, category: params.category, ssr: true },
  });
  store.dispatch({
    type: LOAD_SIDE_POST_REQUEST,
    data: { postId: params.id, category: params.category },
  });
  store.dispatch(END);
  await (store as IStore).sagaTask.toPromise();
  return {
    props: {},
  };
});

export default BlogPostPage;
