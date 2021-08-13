/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SubCommentProps } from "../../types";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";
import { REMOVE_SUB_COMMENT_REQUEST } from "../../@reducers/post";
import { DeleteComment } from "../../styles/emotion";
import CommentContent from "./CommentContent";
import CommentMenu from "./CommentMenu";
dayjs.locale("kor");
dayjs.extend(relativeTime);

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0.5rem 1.5rem 2rem;
  position: relative;
  transition: all 0.2s;
  .edit_from {
    button {
      width: 20%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 0.5rem 0 1rem 0.5rem;
    .blog_comment_deleteModal {
      h2 {
        font-size: 1rem;
      }
    }
    .edit_form {
      button {
        width: 50%;
      }
    }
  }
`;

const SpeechBubble = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 90%;
  padding: 1rem 1.5rem;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:before {
    transition: all 0.3s;
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 1.8rem;
    border-top: 1rem solid rgba(0, 0, 0, 0.05);
    border-right: 1rem solid transparent;
    transform: rotate(45deg);
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem;
    width: 100%;
  }
`;

const SubComments: FC<SubCommentProps> = ({ subComment, CommentId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [removeModal, setRemoveModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [editText, onChangeEditText] = useInput(subComment?.content);
  const SubCommentId = subComment?.id;
  const onClickRemove = () => {
    if (!user) {
      return;
    }
    if (user.id !== subComment?.UserId) {
      message.error("you can not delete another person reply!");
      return;
    }
    message.success("Completely Deleted your reply");
    setRemoveModal(false);
    dispatch({
      type: REMOVE_SUB_COMMENT_REQUEST,
      data: { CommentId, SubCommentId },
    });
  };

  return (
    <>
      {subComment?.User && (
        <CommentWrapper>
          <SpeechBubble>
            <CommentContent
              comment={subComment}
              editText={editText}
              editForm={editForm}
              onChangeEditText={onChangeEditText}
            />
            <CommentMenu
              user={user}
              SubCommentId={SubCommentId}
              CommentId={CommentId}
              comment={subComment}
              editText={editText}
              editForm={editForm}
              setEditForm={setEditForm}
              setRemoveModal={setRemoveModal}
            />
            <div css={DeleteComment(removeModal)} className="blog_comment_deleteModal">
              <h2>Would you really like to delete? 😢</h2>
              <div>
                <a onClick={onClickRemove} className="confirmBtn" style={{ marginRight: "2rem" }}>
                  YES
                </a>
                <a onClick={() => setRemoveModal(false)} className="confirmBtn">
                  NO
                </a>
              </div>
            </div>
          </SpeechBubble>
        </CommentWrapper>
      )}
    </>
  );
};

export default SubComments;
