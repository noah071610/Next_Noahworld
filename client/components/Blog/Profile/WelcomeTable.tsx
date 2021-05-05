import { Col, Divider, Row } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import { RootState } from "../../../@reducers";
import { BLUE_COLOR } from "../../../config";

const WelcomeTableWrapper = styled(Col)`
  text-align: center;
  padding-right: 1rem;
  position: relative;
`;

export const WelcomeTable: FC<{ visible: Boolean }> = ({ visible }) => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <WelcomeTableWrapper xs={visible ? 24 : 0} sm={8} lg={6}>
      <h2 style={{ margin: "1rem 0" }}>
        Welcome&nbsp;
        {user && user.name}&nbsp;😄
      </h2>
      <Divider />
      <Row style={{ margin: "2rem 0" }}>
        <Col style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }} span={8}>
          <h4 style={{ fontSize: "0.85rem" }}>Comments</h4>
          <h4 style={{ margin: "0.5rem 0", fontSize: "1rem", color: BLUE_COLOR }}>
            {user?.Comments ? user.Comments.length : 0}
          </h4>
        </Col>
        <Col style={{ borderRight: "1px solid rgba(0,0,0,0.1)" }} span={8}>
          <h4 style={{ fontSize: "0.85rem" }}>Likes</h4>
          <h4 style={{ margin: "0.5rem 0", fontSize: "1rem", color: BLUE_COLOR }}>
            {user?.PostLiked ? user.PostLiked.length : 0}
          </h4>
        </Col>
        <Col span={8}>
          <h4 style={{ fontSize: "0.85rem" }}>Posts</h4>
          <h4 style={{ margin: "0.5rem 0", fontSize: "1rem", color: BLUE_COLOR }}>
            {user?.Posts ? user.Posts.length : 0}
          </h4>
        </Col>
      </Row>
      {user?.id === 1 && user.admin && (
        <Link href="/admin">
          <a style={{ padding: "1rem 0" }}>Administor Here!</a>
        </Link>
      )}
    </WelcomeTableWrapper>
  );
};
