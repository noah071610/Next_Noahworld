/* eslint-disable jsx-a11y/anchor-is-valid */
import { EditFilled } from "@ant-design/icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, message } from "antd";
import { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SubCommentProps } from "../../../types";
import { RootState } from "../../../@reducers";
import useInput from "../../../util/useInput";
import { EDIT_SUB_COMMENT_REQUEST, REMOVE_SUB_COMMENT_REQUEST } from "../../../@reducers/post";
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
    &:before {
      border-top: 1rem solid rgba(0, 0, 0, 0.1);
    }
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

  const onClickEditComment = useCallback(() => {
    dispatch({
      type: EDIT_SUB_COMMENT_REQUEST,
      data: { CommentId, SubCommentId, content: editText },
    });
    message.success("Successfully edited your reply 👍");
    setEditForm(false);
  }, [dispatch, CommentId, SubCommentId, editText]);

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = `/images/blog/default-user.png`;
  };

  return (
    <>
      {subComment?.User && (
        <CommentWrapper>
          <SpeechBubble>
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
                    subComment.User?.icon
                      ? subComment.User.icon.replace(/\/thumb\//, "/original/")
                      : "/images/blog/default-user.png"
                  }
                  onError={handleImgError}
                  alt="profile"
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
                  {subComment.User.name}{" "}
                </a>
                <span
                  style={{ color: "rgba(0,0,0,0.5)", marginLeft: "0.5rem", fontSize: "0.8rem" }}
                >
                  {dayjs().to(dayjs(subComment.createdAt), true)}&nbsp;ago
                </span>

                {editForm ? (
                  <Input.TextArea
                    style={{ width: "100%" }}
                    value={editText}
                    defaultValue={subComment.content}
                    onChange={onChangeEditText}
                  />
                ) : (
                  <p style={{ width: "100%", margin: 0 }}>{subComment.content}</p>
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
                {user && user.id === subComment.UserId ? (
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
              </ul>
            )}
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
          </SpeechBubble>
        </CommentWrapper>
      )}
    </>
  );
};

export default SubComments;
