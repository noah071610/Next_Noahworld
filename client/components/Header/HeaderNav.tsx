import { Input, message } from "antd";
import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styled from "@emotion/styled";
import useInput from "../../util/useInput";
import { SEARCH_KEYWORD_REQUEST } from "../../@reducers/blog";

const SearchInput = styled(Input.Search)`
  width: 30%;
  z-index: auto;
  overflow: hidden;
`;

const HeaderNav = memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const onSearchContent = useCallback(() => {
    if (keyword.length < 2) {
      message.error("Keyword is required to have more then 1 letter");
      return;
    }
    dispatch({
      type: SEARCH_KEYWORD_REQUEST,
      data: { keyword },
    });
    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      return;
    }
    router.push(`/search/${keyword}`);
    setKeyword("");
  }, [dispatch, router, keyword, setKeyword]);
  return (
    <>
      <ul className="blog_header_ul">
        <li className="blog_header_li">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="blog_header_li">
          <Link href="/tech">
            <a>Info Tech</a>
          </Link>
        </li>
        <li className="blog_header_li">
          <Link href="/daily">
            <a>Daily</a>
          </Link>
        </li>
        <li className="blog_header_li">
          <a href="https://JShyunsoo.site" target="_blank" rel="noreferrer">
            Portfolio ⭐
          </a>
        </li>
      </ul>
      <SearchInput value={keyword} onChange={onChangeKeyword} onSearch={onSearchContent} />
    </>
  );
});

export default memo(HeaderNav);
