import { Input } from "antd";
import dayjs from "dayjs";
import React, { FC, memo } from "react";
import { CommentsInter } from "../../@reducers/@reducerTypes";

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
      <div className="comment_main_content">
        <div>
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
        <div>
          <a>{comment.User.name}</a>
          <span>{dayjs().to(dayjs(comment.createdAt), true)}&nbsp;ago</span>
          {editForm ? (
            <Input.TextArea
              style={{ width: "100%" }}
              value={editText}
              defaultValue={comment.content}
              onChange={onChangeEditText}
            />
          ) : (
            <p style={{ width: "100%", margin: 0 }}>{comment.content}</p>
          )}
        </div>
      </div>
    );
  }
);

export default memo(CommentContent);
