import { Col, Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../@reducers";
import { BLUE_COLOR } from "../../../config";

const RecentTable = styled(Col)`
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    h2 {
      color: ${BLUE_COLOR};
    }
  }
`;

export const CommentTable: FC<{ visible: Boolean }> = ({ visible }) => {
  const router = useRouter();
  const { recentCommentPost } = useSelector((state: RootState) => state.post);
  return (
    <RecentTable style={{ paddingLeft: "1rem" }} xs={visible ? 24 : 0} sm={8} lg={6}>
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Recent Comment 📝</h2>
      <Divider />
      {/* length Check */}
      {recentCommentPost?.Comments ? (
        <div
          onClick={() =>
            router.push(`/${recentCommentPost?.category}/post/${recentCommentPost?.id}`)
          }
        >
          <h3 style={{ margin: "1rem 0" }}>
            · Post Number:{" "}
            <span style={{ color: BLUE_COLOR, marginLeft: "0.3rem" }}>{recentCommentPost?.id}</span>{" "}
          </h3>
          <h3 style={{ margin: "1rem 0" }}>
            · Post Title: <br />
          </h3>
          <span
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              marginLeft: "0.5rem",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {recentCommentPost?.title}
          </span>
          <h3 style={{ margin: "1rem 0" }}>
            · Your comment:
            <br />
          </h3>
          <span
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              marginLeft: "0.5rem",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {recentCommentPost?.Comments[0]?.content}
          </span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            opacity: "0.3",
          }}
        >
          <img
            style={{ width: "100px" }}
            alt="noPost"
            src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
          />
          <h4>No Post</h4>
        </div>
      )}
    </RecentTable>
  );
};
