import { EditFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  EDIT_COMMENT_REQUEST,
  EDIT_SUB_COMMENT_REQUEST,
  LIKE_COMMENT_REQUEST,
  UNLIKE_COMMENT_REQUEST,
} from "../../../@reducers/post";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message } from "antd";
import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../../@reducers";
import { RED_COLOR } from "../../../config";
import { CommentsInter, UserInter } from "../../../@reducers/@reducerTypes";

interface CommentMenu {
  user: UserInter;
  CommentId: number;
  SubCommentId?: number;
  comment: CommentsInter;
  editText: String;
  editForm: boolean;
  setEditForm: (e: boolean) => void;
  setRemoveModal: (e: boolean) => void;
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
  ({ user, CommentId, comment, editText, setEditForm, setRemoveModal, editForm, SubCommentId }) => {
    const dispatch = useDispatch();
    const { post } = useSelector((state: RootState) => state.post);

    const onClickEditComment = useCallback(() => {
      if (SubCommentId) {
        dispatch({
          type: EDIT_SUB_COMMENT_REQUEST,
          data: { CommentId, SubCommentId, content: editText },
        });
        message.success("Successfully edited your reply 👍");
      } else {
        dispatch({
          type: EDIT_COMMENT_REQUEST,
          data: { CommentId, content: editText },
        });
        message.success("Successfully edited your comment 👍");
      }
      setEditForm(false);
    }, [dispatch, CommentId, SubCommentId, editText]);

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
      <>
        {editForm ? (
          <div className="edit_form">
            <Button onClick={onClickEditComment} type="primary" style={{ marginTop: "0.8rem" }}>
              EDIT
            </Button>
            <Button onClick={() => setEditForm(false)} style={{ marginTop: "0.8rem" }}>
              CANCEL
            </Button>
          </div>
        ) : (
          <CommentMenuList>
            {user?.id === comment.UserId && (
              <>
                <li>
                  <a>
                    <EditFilled onClick={() => setEditForm(true)} />
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon onClick={() => setRemoveModal(true)} icon={faTrashAlt} />
                  </a>
                </li>
              </>
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
        )}
      </>
    );
  }
);

export default memo(CommentMenu);
