/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import { RootState } from "../../../@reducers";
import { ADD_COMMENT_REQUEST } from "../../../@reducers/post";
import { BLUE_COLOR } from "../../../config";
import useInput from "../../../util/useInput";
import Comments from "./Comments";

const LoginLink = styled(Link)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: bold;
  &:hover {
    color: white;
    background-color: ${BLUE_COLOR};
  }
`;

const LoginSuggestModal = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 576px) {
    h2 {
      font-size: 0.9rem;
    }
  }
`;
const CommentFormWrapper = styled.div`
  padding: 1.5rem 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  position: relative;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media only screen and (max-width: 576px) {
    padding-right: 0;
  }
`;
const CommentForm = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [content, onChangeContent, setContent] = useInput("");
  const [loginModal, setLoginModal] = useState(false);
  const onClickAddComment = useCallback(() => {
    if (content === "") {
      message.error("Please write content.");
      return;
    }
    if (!user) {
      message.error("Please login first.");
      return;
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content, postId: post?.id, userId: user.id },
    });
    setContent("");
  }, [content, dispatch, post?.id, setContent, user]);
  useEffect(() => {
    if (!user) {
      setContent("You can comment when you are logged in!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const commentComponent = useCallback(() => {
    return post?.Comments?.map((v, i) => {
      return <Comments key={i} comment={v} />;
    });
  }, [post?.Comments]);

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = `/images/blog/default-user.png`;
  };

  const onClickModal = useCallback(() => {
    if (!user) {
      setLoginModal(true);
    }
  }, [user]);
  return (
    <>
      <CommentFormWrapper onClick={onClickModal} className="blog_post_comment" id="comment">
        <div>
          <img
            className="comment_img"
            src={
              user?.icon
                ? user.icon.replace(/\/thumb\//, "/original/")
                : "/images/blog/default-user.png"
            }
            alt="profile"
            onError={handleImgError}
          />
          <h3 style={{ textAlign: "center" }}>{user ? user.name : "Guest"}</h3>
        </div>
        <div style={{ marginLeft: "2rem", width: "100%" }}>
          <TextArea value={content} onChange={onChangeContent} className="comment_textArea" />
          <button
            style={{ padding: "0.5rem 0" }}
            onClick={onClickAddComment}
            className="public_btn comment_btn"
          >
            COMMENT
          </button>
        </div>
        <LoginSuggestModal
          style={{
            visibility: loginModal ? "initial" : "hidden",
            animation: loginModal ? "0.5s fadeIn" : "none",
          }}
        >
          <h2>You can comment when you are logged in 😢</h2>
          <LoginLink href="/login">
            <a>GO TO LOGIN PAGE</a>
          </LoginLink>
        </LoginSuggestModal>
      </CommentFormWrapper>
      {post?.Comments ? (
        commentComponent()
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
          <h3>No Comments...</h3>
        </div>
      )}
    </>
  );
});

export default memo(CommentForm);
