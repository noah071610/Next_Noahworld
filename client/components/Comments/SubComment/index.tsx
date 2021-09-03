/* eslint-disable jsx-a11y/anchor-is-valid */
import { message } from "antd";
import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SubCommentProps } from "../../../types";
import { RootState } from "../../../@reducers";
import { REMOVE_SUB_COMMENT_REQUEST } from "../../../@reducers/post";
import CommentContent from "../CommentContent";
import CommentMenu from "../CommentMenu";
import CommentPopup from "../CommentPopup";
import { SpeechBubble, SubCommentWrapper } from "./styles";
dayjs.locale("kor");
dayjs.extend(relativeTime);

const SubComments: FC<SubCommentProps> = ({ subComment, CommentId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [deletePopup, setDeletePopup] = useState(false);
  const SubCommentId = subComment?.id;
  const onClickRemoveComment = useCallback(() => {
    if (!user) {
      return;
    }
    if (user.id !== subComment?.UserId) {
      message.error("you can not delete another person reply!");
      return;
    }
    message.success("Completely Deleted your reply");
    setDeletePopup(false);
    dispatch({
      type: REMOVE_SUB_COMMENT_REQUEST,
      data: { CommentId, SubCommentId },
    });
  }, [user, CommentId, SubCommentId]);

  return (
    <>
      {subComment?.User && (
        <SubCommentWrapper>
          <SpeechBubble>
            <CommentContent comment={subComment} />
            <CommentMenu
              SubCommentId={SubCommentId}
              comment={subComment}
              setDeletePopup={setDeletePopup}
            />
            {deletePopup && (
              <CommentPopup
                popup_message="Would you really like to delete? 😢"
                setDeletePopup={setDeletePopup}
                onClickRemoveComment={onClickRemoveComment}
              />
            )}
          </SpeechBubble>
        </SubCommentWrapper>
      )}
    </>
  );
};

export default SubComments;
