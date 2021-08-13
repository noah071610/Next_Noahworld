import { Col, Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../@reducers";
import { BLUE_COLOR } from "../../config";
import { NoPostProfile, ProfilePointTitle, TitleProfile } from "../../styles/emotion";

const RecentTable = styled(Col)`
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    h2 {
      color: ${BLUE_COLOR};
    }
  }
`;

export const ViewTable: FC<{ visible: Boolean }> = ({ visible }) => {
  const router = useRouter();
  const { recentViewPost } = useSelector((state: RootState) => state.post);
  return (
    <RecentTable style={{ padding: "0 1rem" }} xs={visible ? 24 : 0} sm={8} lg={6}>
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Recent View 👁️‍🗨️ </h2>
      <Divider />
      {recentViewPost ? (
        <div onClick={() => router.push(`/${recentViewPost?.category}/post/${recentViewPost?.id}`)}>
          <h3 style={{ margin: "1rem 0" }}>
            · Post Number: <span css={ProfilePointTitle}>{recentViewPost?.id}</span>
          </h3>
          <h3 style={{ margin: "1rem 0" }}>
            · Post Title: <br />
          </h3>
          <span css={TitleProfile}>{recentViewPost?.title}</span>
          <h3 style={{ margin: "1rem 0" }}>
            · Total Post Views:
            <span css={ProfilePointTitle}>{recentViewPost?.hit}</span>
          </h3>
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
