/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import React, { FC, memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { ADD_SUB_COMMENT_REQUEST } from "../../../@reducers/post";
import { DEFAULT_USER_ICON } from "../../../config";
import { SubCommentProps } from "../../../types";
import { handleImgError } from "../../../util/errorHandler";
import useInput from "../../../util/useInput";
import { SubCommentFormWrapper } from "./styles";

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

  return (
    <SubCommentFormWrapper>
      <img src={user?.icon || DEFAULT_USER_ICON} alt="profile" onError={handleImgError} />
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
    </SubCommentFormWrapper>
  );
};

export default memo(SubCommentForm);
