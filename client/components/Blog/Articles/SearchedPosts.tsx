import { Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { FC, memo, useCallback } from "react";
import styled from "@emotion/styled";
import { SearchPostInter } from "../../../@reducers/@reducerTypes";
import { BLUE_COLOR } from "../../../config";

const SearchList = styled.li`
  transition: all 0.3s;
  font-size: 1rem;
  cursor: pointer;
  padding: 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
interface SearchedPostProps {
  posts: SearchPostInter;
}

const SearchedPosts: FC<SearchedPostProps> = memo(({ posts }) => {
  const router = useRouter();
  const onClickList = useCallback(() => {
    () => router.push(`/${posts.category}/post/${posts.id}`);
  }, []);
  return (
    <SearchList onClick={onClickList}>
      <span style={{ fontWeight: "bold" }}>Post Number</span> :{" "}
      <span style={{ color: BLUE_COLOR }}>{posts.id}</span> <Divider type="vertical" />
      <span style={{ fontWeight: "bold" }}>Title</span> : {posts.title} <Divider type="vertical" />
      <span style={{ fontWeight: "bold" }}>Category</span> : {posts.category}{" "}
      <Divider type="vertical" />
      <span style={{ fontWeight: "bold" }}>Contents</span> :
      {posts.content.replace(/(<([^>]+)>)/gi, "").slice(0, 50)}
    </SearchList>
  );
});

export default memo(SearchedPosts);
