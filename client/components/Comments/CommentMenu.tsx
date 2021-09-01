import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { LIKE_COMMENT_REQUEST, UNLIKE_COMMENT_REQUEST } from "../../@reducers/post";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message } from "antd";
import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../@reducers";
import { RED_COLOR } from "../../config";
import { CommentsInter, UserInter } from "../../@reducers/@reducerTypes";

interface CommentMenu {
  user: UserInter;
  CommentId: number;
  SubCommentId?: number;
  comment: CommentsInter;
  editText: String;
  editForm: boolean;
  setEditForm: (e: boolean) => void;
  setDeletePopup: (e: boolean) => void;
}

const LikeComment = styled.a`
  margin-right: 0.3rem;
  &:hover {
    color: ${RED_COLOR};
  }
`;

const CommentMenuList = styled.ul`
  margin: 0.5rem 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

const CommentMenu: FC<CommentMenu> = memo(
  ({ user, CommentId, comment, setDeletePopup, SubCommentId }) => {
    const dispatch = useDispatch();
    const { post } = useSelector((state: RootState) => state.post);

    const onClickCommentLike = useCallback(() => {
      if (!user) {
        message.error("You can thumbs up when you are logged in 😿");
        return;
      }
      dispatch({
        type: LIKE_COMMENT_REQUEST,
        data: { CommentId, UserId: user.id },
      });
    }, [CommentId, dispatch, user]);

    const onClickCommentUnlike = useCallback(() => {
      if (!user) {
        message.error("You can thumbs up when you are logged in 😿");
        return;
      }
      dispatch({
        type: UNLIKE_COMMENT_REQUEST,
        data: { CommentId, UserId: user.id },
      });
    }, [CommentId, dispatch, user]);

    let commentLiked =
      user &&
      post?.Comments?.find((v) => v.id === CommentId)?.CommentLikers?.find((v) => v.id === user.id);

    return (
      <CommentMenuList>
        {user?.id === comment.UserId && (
          <a>
            <FontAwesomeIcon onClick={() => setDeletePopup(true)} icon={faTrashAlt} />
          </a>
        )}
        {!SubCommentId && (
          <li>
            {commentLiked ? (
              <HeartFilled
                style={{ color: RED_COLOR, marginRight: "0.3rem" }}
                onClick={onClickCommentUnlike}
              />
            ) : (
              <LikeComment onClick={onClickCommentLike}>
                <HeartOutlined />
              </LikeComment>
            )}
            {comment.CommentLikers ? comment.CommentLikers.length : 0}
          </li>
        )}
      </CommentMenuList>
    );
  }
);

export default CommentMenu;
