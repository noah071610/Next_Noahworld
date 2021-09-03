import { message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import useInput from "../../../util/useInput";
import { HeaderNavWrapper, SearchBar } from "./styles";
import { SEARCH_POST_REQUEST } from "../../../@reducers/post";

const HeaderNav = ({ setOnProfile }: { setOnProfile: (type: boolean) => void }) => {
  const dispatch = useDispatch();
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const router = useRouter();
  const [keyword, onChangeKeyword, setKeyword] = useInput("");

  useEffect(() => {
    function scrollCallBack() {
      if (window.scrollY >= 275) {
        setFixedNavbar(true);
        setOnProfile(false);
      } else {
        setFixedNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const onSearchContent = useCallback(() => {
    if (keyword.length < 2) {
      message.error("Keyword is required to have more then 1 letter");
      return;
    }
    dispatch({
      type: SEARCH_POST_REQUEST,
      data: { keyword },
    });
    router.push(`/search/${keyword}`);
    setKeyword("");
  }, [dispatch, router, keyword, setKeyword]);
  return (
    <>
      <HeaderNavWrapper className={FixedNavbar ? "fixed" : "static"}>
        <div className="nav-inner">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/tech">
                <a>Info Tech</a>
              </Link>
            </li>
            <li>
              <Link href="/daily">
                <a>Daily</a>
              </Link>
            </li>
            <li>
              <a href="https://JShyunsoo.site" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
          <SearchBar value={keyword} onChange={onChangeKeyword} onSearch={onSearchContent} />
        </div>
      </HeaderNavWrapper>
      {FixedNavbar && <div style={{ height: "70px" }} />}
    </>
  );
};

export default HeaderNav;
