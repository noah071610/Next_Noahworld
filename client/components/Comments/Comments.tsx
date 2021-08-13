/* eslint-disable jsx-a11y/anchor-is-valid */

import { Input, message } from "antd";
import React, { FC, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SubCommentForm from "./SubCommentForm";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";
import useToggle from "../../util/useToggle";
import { REMOVE_COMMENT_REQUEST } from "../../@reducers/post";
import { CommentProps } from "../../types";
import CommentMenu from "./CommentMenu";
import SubCommentPreview from "./SubCommentPreview";
import { DeleteComment } from "../../styles/emotion";
import CommentContent from "./CommentContent";
dayjs.locale("kor");
dayjs.extend(relativeTime);

const CommentWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.2s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const MainContentWrapper = styled.div`
  padding: 1rem 0.5rem 0.5rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .edit_form {
    button {
      width: 20%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    .edit_form {
      button {
        width: 50%;
      }
    }
  }
`;

const Comments: FC<CommentProps> = memo(({ comment }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [removeModal, setRemoveModal] = useState(false);
  const [subCommentForm, setSubCommentForm] = useState(false);
  const [moreSubComments, onClickMoreSubComments, setMoreSubComments] = useToggle(false);
  const [editForm, setEditForm] = useState(false);
  const [editText, onChangeEditText] = useInput(comment.content);
  const CommentId = comment?.id;

  const onClickRemove = useCallback(() => {
    if (!user) {
      return;
    }
    if (user.id !== comment.UserId) {
      message.error("you can not delete another person comment!");
      return;
    }
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: CommentId,
    });
    message.success("Completely Deleted Comment");
    setRemoveModal(false);
  }, [CommentId, comment.UserId, dispatch, user]);

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

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/default-user.png";
  };

  return (
    <>
      {comment.User && (
        <CommentWrapper>
          <MainContentWrapper onClick={onClickComment}>
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
              setRemoveModal={setRemoveModal}
            />
          </MainContentWrapper>
          <div css={DeleteComment(removeModal)} className="blog_comment_deleteModal">
            <h2>Would you really like to delete? 😢</h2>
            <div>
              <a onClick={onClickRemove} className="confirmBtn">
                YES
              </a>
              <a onClick={() => setRemoveModal(false)} className="confirmBtn">
                NO
              </a>
            </div>
          </div>
          {subCommentForm && <SubCommentForm CommentId={CommentId} />}
          <SubCommentPreview
            onClickMoreSubComments={onClickMoreSubComments}
            moreSubComments={moreSubComments}
            comment={comment}
          />
        </CommentWrapper>
      )}
    </>
  );
});

export default memo(Comments);
