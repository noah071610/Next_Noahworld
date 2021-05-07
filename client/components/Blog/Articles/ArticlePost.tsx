import styled from "@emotion/styled";
import dayjs from "dayjs";
import React, { FC } from "react";
import { ArticleInter } from "../../../types";
import { useRouter } from "next/dist/client/router";
dayjs.locale("kor");

const Wrapper = styled.div`
  padding: 0.5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    h3 {
      font-weight: bold;
    }
  }
  h3 {
    font-weight: normal;
    font-size: 1rem;
  }
  ul {
    margin: 0;
  }
`;

const Title = styled.h3`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArticlePost: FC<ArticleInter> = ({ article }) => {
  const router = useRouter();
  return (
    <Wrapper
      onClick={() => {
        router.push(`/${article.category}/post/${article.id}`);
      }}
    >
      <Title>{article.title}</Title>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "0.8rem",
          color: "rgba(0,0,0,0.2)",
        }}
      >
        <li>{dayjs(article.createdAt).format("YYYY.MM.DD")}</li>
      </ul>
    </Wrapper>
  );
};

export default ArticlePost;
