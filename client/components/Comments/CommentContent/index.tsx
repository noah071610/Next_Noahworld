import dayjs from "dayjs";
import React, { FC, memo } from "react";
import { CommentsInter } from "../../../@reducers/@reducerTypes";
import { DEFAULT_USER_ICON } from "../../../config";
import { handleImgError } from "../../../util/errorHandler";
import { CommentContentWrapper } from "./styles";

interface CommentContent {
  comment: CommentsInter;
}

const CommentContent: FC<CommentContent> = memo(({ comment }) => {
  return (
    <CommentContentWrapper>
      <div className="icon-wrapper">
        <img src={comment.User?.icon || DEFAULT_USER_ICON} onError={handleImgError} alt="profile" />
      </div>
      <div className="comment-content">
        <span>{comment.User.name}</span>
        <span className="date">{dayjs().to(dayjs(comment.createdAt), true)}&nbsp;ago</span>
        <p>{comment.content}</p>
      </div>
    </CommentContentWrapper>
  );
});

export default CommentContent;
