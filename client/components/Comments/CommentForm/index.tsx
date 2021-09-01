/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { ADD_COMMENT_REQUEST } from "../../../@reducers/post";
import useInput from "../../../util/useInput";
import { CommentFormWrapper } from "./styles";
import CommentPopup from "../CommentPopup";

const CommentForm = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [content, onChangeContent, setContent] = useInput("");
  const [loginSuggestPopup, setLoginSuggestPopup] = useState(false);
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

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = `/images/blog/default-user.png`;
  };

  const onClickComment = useCallback(() => {
    if (!user) {
      setLoginSuggestPopup(true);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      setContent("You can comment when you are logged in :)");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommentFormWrapper onClick={onClickComment} id="comment">
      <div className="icon-wrapper">
        <img
          src={
            user?.icon
              ? user.icon.replace(/\/thumb\//, "/original/")
              : "/images/blog/default-user.png"
          }
          alt="profile"
          onError={handleImgError}
        />
        <h3>{user ? user.name : "Guest"}</h3>
      </div>
      <div className="comment-textarea">
        <TextArea value={content} onChange={onChangeContent} />
        <button onClick={onClickAddComment} className="public_btn">
          COMMENT
        </button>
      </div>
      {loginSuggestPopup && (
        <CommentPopup popup_message="You can comment when you are logged in 😢" />
      )}
    </CommentFormWrapper>
  );
});

export default CommentForm;
