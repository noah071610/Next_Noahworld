/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../../@reducers";
import { ADD_SUB_COMMENT_REQUEST } from "../../../@reducers/post";
import { SubCommentProps } from "../../../types";
import useInput from "../../../util/useInput";

const CommentFormWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  transition: all 0.3s;
  padding: 1rem 0.5rem 1rem 2rem;
  button {
    width: 20%;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 1rem;
  }
  div {
    width: 100%;
    display: flex;
  }
  @media only screen and (max-width: 576px) {
    padding-left: 0.5rem;
    padding-right: 0;
    button {
      width: 30%;
    }
  }
`;

const SubCommentForm: FC<SubCommentProps> = ({ CommentId }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [content, onChangeContent, setContent] = useInput("");
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
      type: ADD_SUB_COMMENT_REQUEST,
      data: { PostId: post?.id, content, CommentId, UserId: user.id },
    });
    setContent("");
  }, [CommentId, content, dispatch, post?.id, setContent, user]);
  useEffect(() => {
    if (!user) {
      setContent("You can comment when you are logged in!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = `/images/blog/default-user.png`;
  };

  return (
    <>
      <CommentFormWrapper className="blog_post_comment">
        <img
          src={
            user?.icon
              ? user.icon.replace(/\/thumb\//, "/original/")
              : "/images/blog/default-user.png"
          }
          alt="profile"
          onError={handleImgError}
        />
        <div>
          <input
            className="public_input"
            value={content}
            onChange={onChangeContent}
            style={{
              width: "100%",
            }}
          />
          <button
            style={{
              float: "right",
            }}
            onClick={onClickAddComment}
            className="public_btn"
          >
            REPLY
          </button>
        </div>
      </CommentFormWrapper>
    </>
  );
};

export default SubCommentForm;
