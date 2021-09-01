/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SubCommentForm from "../SubCommentForm";
import { RootState } from "../../../@reducers";
import useInput from "../../../util/useInput";
import useToggle from "../../../util/useToggle";
import { CommentProps } from "../../../types";
import CommentMenu from "../CommentMenu";
import SubCommentPreview from "../SubCommentPreview";
import CommentContent from "../CommentContent";
import { CommentWrapper, EntireCommentWrapper } from "./styles";
import CommentPopup from "../CommentPopup";
import { REMOVE_COMMENT_REQUEST } from "../../../@reducers/post";
import { message } from "antd";
dayjs.locale("kor");
dayjs.extend(relativeTime);

const Comment: FC<CommentProps> = memo(({ comment }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [deletePopup, setDeletePopup] = useState(false);
  const [subCommentForm, setSubCommentForm] = useState(false);
  const [moreSubComments, onClickMoreSubComments, setMoreSubComments] = useToggle(false);
  const [editForm, setEditForm] = useState(false);
  const [editText, onChangeEditText] = useInput(comment.content);
  const CommentId = comment?.id;

  const onClickRemoveComment = useCallback(() => {
    if (!user) {
      return;
    }
    if (user.id !== comment.UserId) {
      message.error("you can not delete another person comment!");
      return;
    }
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: comment.id,
    });
    message.success("Completely Deleted Comment");
    setDeletePopup(false);
  }, [comment, dispatch, user]);

  const onClickComment = useCallback(
    (e) => {
      if (e.target.className) {
        return;
      }
      if (comment.SubComments && comment.SubComments.length >= 3) {
        setMoreSubComments((prev) => !prev);
      }
      if (moreSubComments && !subCommentForm) {
        setMoreSubComments(true);
        setSubCommentForm(true);
        return;
      }
      if (!moreSubComments && subCommentForm) {
        setMoreSubComments(false);
        setSubCommentForm(false);
        return;
      }
      setSubCommentForm((prev) => !prev);
    },
    [comment.SubComments, moreSubComments, setMoreSubComments, subCommentForm]
  );

  return (
    <>
      {comment.User && (
        <EntireCommentWrapper>
          <CommentWrapper onClick={onClickComment}>
            <CommentContent
              comment={comment}
              editText={editText}
              editForm={editForm}
              onChangeEditText={onChangeEditText}
            />
            <CommentMenu
              user={user}
              CommentId={CommentId}
              comment={comment}
              editText={editText}
              editForm={editForm}
              setEditForm={setEditForm}
              setDeletePopup={setDeletePopup}
            />
            {deletePopup && (
              <CommentPopup
                popup_message="Would you really like to delete? 😢"
                setDeletePopup={setDeletePopup}
                onClickRemoveComment={onClickRemoveComment}
              />
            )}
          </CommentWrapper>
          {subCommentForm && <SubCommentForm CommentId={CommentId} />}
          <SubCommentPreview
            onClickMoreSubComments={onClickMoreSubComments}
            moreSubComments={moreSubComments}
            comment={comment}
          />
        </EntireCommentWrapper>
      )}
    </>
  );
});

export default Comment;
