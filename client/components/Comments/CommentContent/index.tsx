import { Input } from "antd";
import dayjs from "dayjs";
import React, { FC, memo } from "react";
import { CommentsInter } from "../../../@reducers/@reducerTypes";
import { CommentContentWrapper } from "./styles";

interface CommentContent {
  comment: CommentsInter;
  editText: string;
  editForm: boolean;
  onChangeEditText: () => void;
}

const CommentContent: FC<CommentContent> = memo(
  ({ comment, editText, editForm, onChangeEditText }) => {
    const handleImgError = (e: React.SyntheticEvent) => {
      (e.target as HTMLImageElement).src = `/images/blog/default-user.png`;
    };

    return (
      <CommentContentWrapper>
        <div className="icon-wrapper">
          <img
            src={
              comment.User?.icon
                ? comment.User.icon.replace(/\/thumb\//, "/original/")
                : "/images/blog/default-user.png"
            }
            onError={handleImgError}
            alt="profile"
          />
        </div>
        <div className="comment-content">
          <span>{comment.User.name}</span>
          <span className="date">{dayjs().to(dayjs(comment.createdAt), true)}&nbsp;ago</span>
          {editForm ? (
            <Input.TextArea
              style={{ width: "100%" }}
              value={editText}
              defaultValue={comment.content}
              onChange={onChangeEditText}
            />
          ) : (
            <p>{comment.content}</p>
          )}
        </div>
      </CommentContentWrapper>
    );
  }
);

export default CommentContent;
