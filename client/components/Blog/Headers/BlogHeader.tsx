import { Input, message } from "antd";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { SEARCH_KEYWORD_REQUEST } from "../../../@reducers/blog";
import useInput from "../../../util/useInput";
import { useRouter } from "next/dist/client/router";

const BlogHeader = memo(() => {
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
          <Link href="/aboutme">
            <a>About me</a>
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
          <Link href="/class">
            <a style={{ display: "flex", alignItems: "center" }}>
              Korean Class for &nbsp;
              <img
                style={{ width: "1.5rem" }}
                alt="japan_flag"
                src="https://img.icons8.com/color/48/000000/japan.png"
              />
            </a>
          </Link>
        </li>
      </ul>
      <Input.Search
        value={keyword}
        onChange={onChangeKeyword}
        style={{ width: "30%", zIndex: "auto", overflow: "hidden" }}
        onSearch={onSearchContent}
      />
    </>
  );
});

export default BlogHeader;
