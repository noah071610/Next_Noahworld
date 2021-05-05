/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownCircleOutlined, EditFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, message } from "antd";
import { FC, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SubCommentForm from "./SubCommentForm";
import SubComments from "./SubComments";
import { BLUE_COLOR, RED_COLOR } from "../../../config";
import { RootState } from "../../../@reducers";
import useInput from "../../../util/useInput";
import useToggle from "../../../util/useToggle";
import {
  EDIT_COMMENT_REQUEST,
  LIKE_COMMENT_REQUEST,
  REMOVE_COMMENT_REQUEST,
  UNLIKE_COMMENT_REQUEST,
} from "../../../@reducers/post";
import { CommentProps } from "../../../types";
dayjs.locale("kor");
dayjs.extend(relativeTime);

const CommentWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.2s;
`;

const LikeComment = styled.a`
  margin-right: 0.3rem;
  &:hover {
    color: ${RED_COLOR};
  }
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

const MoreComments = styled.div`
  padding: 1rem 0.5rem 1rem 2rem;
  text-align: end;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: ${BLUE_COLOR};
  }
`;

const Comments: FC<CommentProps> = memo(({ comment }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [removeModal, setRemoveModal] = useState(false);
  const [subCommentForm, setSubCommentForm] = useState(false);
  const [moreSubComments, onClickMoreSubComments, setMoreSubComments] = useToggle(false);
  const [editForm, setEditForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [editText, onChangeEditText] = useInput(comment.content);
  const CommentId = comment?.id;
  let commentLiked =
    user &&
    post?.Comments?.find((v) => v.id === CommentId)?.CommentLikers?.find((v) => v.id === user.id);

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
  const onClickEditComment = useCallback(() => {
    dispatch({
      type: EDIT_COMMENT_REQUEST,
      data: { CommentId, content: editText },
    });
    message.success("Successfully edited your comment 👍");
    setEditForm(false);
  }, [dispatch, CommentId, editText]);

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
        <CommentWrapper
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <MainContentWrapper onClick={onClickComment}>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src={
                    comment.User?.icon
                      ? comment.User.icon.replace(/\/thumb\//, "/original/")
                      : "/images/blog/default-user.png"
                  }
                  alt="profile"
                  onError={handleImgError}
                />
              </div>
              <div style={{ marginLeft: "2rem", width: "100%" }}>
                <a
                  style={{
                    fontSize: "1rem",
                    display: "inline-block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {comment.User.name}{" "}
                </a>
                <span
                  style={{ color: "rgba(0,0,0,0.5)", marginLeft: "0.5rem", fontSize: "0.8rem" }}
                >
                  {dayjs().to(dayjs(comment.createdAt), true)}&nbsp;ago
                </span>

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
            {editForm ? (
              <div
                className="edit_form"
                style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
              >
                <Button onClick={onClickEditComment} type="primary" style={{ marginTop: "0.8rem" }}>
                  EDIT
                </Button>
                <Button onClick={() => setEditForm(false)} style={{ marginTop: "0.8rem" }}>
                  CANCEL
                </Button>
              </div>
            ) : (
              <ul
                style={{
                  margin: "0.5rem 0 0 0",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {user && user.id === comment.UserId ? (
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
                ) : null}
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
              </ul>
            )}
          </MainContentWrapper>
          <div
            style={{
              visibility: removeModal ? "initial" : "hidden",
              animation: removeModal ? "0.5s fadeIn" : "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="blog_comment_deleteModal"
          >
            <h2 style={{ textAlign: "center", color: "white" }}>
              Would you really like to delete? 😢
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a onClick={onClickRemove} className="confirmBtn" style={{ marginRight: "2rem" }}>
                YES
              </a>
              <a onClick={() => setRemoveModal(false)} className="confirmBtn">
                NO
              </a>
            </div>
          </div>
          {subCommentForm ? <SubCommentForm CommentId={comment?.id} /> : null}
          {comment.SubComments && comment.SubComments.length < 3 ? (
            comment.SubComments?.map((subComment, i) => {
              return <SubComments key={i} CommentId={comment.id} subComment={subComment} />;
            })
          ) : (
            <>
              <MoreComments onClick={onClickMoreSubComments}>
                View <span style={{ margin: "0 0.2rem" }}>{comment.SubComments?.length}</span>
                &nbsp;more replies{" "}
                <DownCircleOutlined
                  style={{ marginLeft: "0.5rem", fontSize: "1.1rem" }}
                  rotate={moreSubComments ? 180 : 0}
                />
              </MoreComments>
              {moreSubComments
                ? comment?.SubComments?.map((subComment, i) => {
                    return <SubComments key={i} CommentId={comment.id} subComment={subComment} />;
                  })
                : null}
            </>
          )}
        </CommentWrapper>
      )}
    </>
  );
});

export default memo(Comments);
