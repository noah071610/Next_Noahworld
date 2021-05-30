import React, { FC, memo } from "react";
import { BLUE_COLOR } from "../../../config";
import styled from "@emotion/styled";
import { DownCircleOutlined } from "@ant-design/icons";
import SubComments from "./SubComments";
import { CommentsInter } from "../../../@reducers/@reducerTypes";

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
interface SubCommentPreview {
  onClickMoreSubComments: () => void;
  moreSubComments: Boolean;
  comment: CommentsInter;
}

const SubCommentPreview: FC<SubCommentPreview> = memo(
  ({ onClickMoreSubComments, moreSubComments, comment }) => {
    return (
      <>
        {comment?.SubComments?.length < 3 ? (
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
            {moreSubComments &&
              comment?.SubComments?.map((subComment, i) => {
                return <SubComments key={i} CommentId={comment.id} subComment={subComment} />;
              })}
          </>
        )}
      </>
    );
  }
);

export default memo(SubCommentPreview);
