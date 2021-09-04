/* eslint-disable jsx-a11y/anchor-is-valid */

import { faBars, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import SlideMenu from "./SlideMenu";
import SlideRemoteControl from "./SlideRemoteControl";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";
import useToggle from "../../util/useToggle";
import { SEARCH_POST_REQUEST } from "../../@reducers/post";
import { HeaderMainWrapper, MoblieHeaderWrapper } from "./styles";
import Profile from "../../components/Profile";

const MoblieHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const [onSearchForm, onClickSearchForm, setSearchForm] = useToggle(false);
  const [onRemoteControl, setOnRemoteControl] = useState(false);
  const [onPostHeader, setOnPostHeader] = useState(false);
  const [onProfile, setOnProfile] = useState(false);
  const [onSlideMenu, setOnSlideMenu] = useState(false);
  const { post } = useSelector((state: RootState) => state.post);
  useEffect(() => {
    function scrollCallBack() {
      let pathname = window.location.pathname.split("/");
      if (window.scrollY > 200 && pathname[2] === "post") {
        setOnPostHeader(true);
        return;
      }
      setOnPostHeader(false);
      setOnRemoteControl(false);
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const onSearchContent = useCallback(() => {
    dispatch({
      type: SEARCH_POST_REQUEST,
      data: { keyword },
    });
    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      return;
    }
    router.push(`/search/${keyword}`);
    setKeyword("");
    setOnSlideMenu(false);
  }, [router, keyword, setKeyword]);

  const onClickRemoteControlBtn = useCallback(() => {
    setOnRemoteControl((prev) => !prev);
    setOnSlideMenu(false);
    setOnProfile(false);
  }, []);

  const onClickProfileBtn = useCallback(() => {
    setOnProfile((prev) => !prev);
    setOnSlideMenu(false);
    setOnRemoteControl(false);
  }, []);

  const onClickSlideMenuBtn = useCallback(() => {
    if (onProfile) {
      setOnProfile(false);
      setSearchForm(false);
      return;
    }
    setOnSlideMenu((prev) => !prev);
    setOnRemoteControl(false);
    setSearchForm(false);
  }, [onProfile]);

  return (
    <>
      <MoblieHeaderWrapper
        style={
          onSlideMenu || onProfile
            ? { borderBottom: "none" }
            : { borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }
        }
      >
        <div css={HeaderMainWrapper(onPostHeader, onSearchForm)}>
          <div className="header-main-inner">
            <Link href={"/"}>
              <a className="logo">
                <img alt="header_logo" src="/images/blog/logo_icon.png" />
                <span className="logo_span">Noah World</span>
              </a>
            </Link>
            <button className="post-title" onClick={onClickRemoteControlBtn}>
              <h1>{post?.title}</h1>
              <FontAwesomeIcon
                style={{
                  transform: `rotate(${onRemoteControl ? "180deg" : "0deg"})`,
                }}
                icon={faChevronDown}
              />
            </button>
            <Input.Search
              style={{ width: "100%", paddingRight: "1rem", margin: "0.05rem 0" }}
              value={keyword}
              onChange={onChangeKeyword}
              onSearch={onSearchContent}
            />
          </div>
        </div>
        <button className="header-menu-btn" onClick={onClickSlideMenuBtn}>
          {onSlideMenu || onProfile ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <SlideMenu
          onSlideMenu={onSlideMenu}
          onClickSearchForm={onClickSearchForm}
          setOnSlideMenu={setOnSlideMenu}
          onClickProfileBtn={onClickProfileBtn}
        />
        {onRemoteControl && onPostHeader && <SlideRemoteControl />}
        {onProfile && <Profile isMobile={true} />}
      </MoblieHeaderWrapper>
      <div className="body-margin" />
    </>
  );
};

export default MoblieHeader;
