import { Col, Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../../@reducers";
import { BLUE_COLOR } from "../../../config";
import { NoPostProfile, ProfilePointTitle, TitleProfile } from "../../../styles/emotion";

const RecentTable = styled(Col)`
  transition: all 0.3s;
  cursor: pointer;
  padding-left: 1rem;
  h2 {
    text-align: center;
    margin: 1rem 0;
  }
  &:hover {
    h2 {
      color: ${BLUE_COLOR};
    }
  }
  h3 {
    margin: 1rem 0;
  }
`;

export const CommentTable: FC<{ visible: Boolean }> = ({ visible }) => {
  const router = useRouter();
  const { recentCommentPost } = useSelector((state: RootState) => state.post);
  return (
    <RecentTable xs={visible ? 24 : 0} sm={8} lg={6}>
      <h2>Recent Comment 📝</h2>
      <Divider />
      {recentCommentPost?.Comments ? (
        <div
          onClick={() =>
            router.push(`/${recentCommentPost?.category}/post/${recentCommentPost?.id}`)
          }
        >
          <h3>
            · Post Number: <span css={ProfilePointTitle}>{recentCommentPost?.id}</span>{" "}
          </h3>
          <h3>
            · Post Title: <br />
          </h3>
          <span css={TitleProfile}>{recentCommentPost?.title}</span>
          <h3>
            · Your comment:
            <br />
          </h3>
          <span css={TitleProfile}>{recentCommentPost?.Comments[0]?.content}</span>
        </div>
      ) : (
        <div css={NoPostProfile}>
          <img
            alt="noPost"
            src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
          />
          <h4>No Post</h4>
        </div>
      )}
    </RecentTable>
  );
};
