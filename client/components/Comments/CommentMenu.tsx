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
import { FLEX_STYLE } from "../../styles/emotion";

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
  svg {
    margin-right: 0.2rem;
  }
  .liked {
    color: ${RED_COLOR};
  }
  &:hover {
    color: ${RED_COLOR};
  }
`;

const CommentMenuList = styled.ul`
  ${FLEX_STYLE("flex-end", "center")}
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
        {!SubCommentId && (
          <li>
            <LikeComment onClick={onClickCommentLike}>
              {commentLiked ? (
                <HeartFilled className="liked" onClick={onClickCommentUnlike} />
              ) : (
                <HeartOutlined />
              )}
              {comment.CommentLikers ? comment.CommentLikers.length : 0}
            </LikeComment>
          </li>
        )}
        {user?.id === comment.UserId && (
          <li>
            <a>
              <FontAwesomeIcon onClick={() => setDeletePopup(true)} icon={faTrashAlt} />
            </a>
          </li>
        )}
      </CommentMenuList>
    );
  }
);

export default CommentMenu;
