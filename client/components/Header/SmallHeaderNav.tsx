/* eslint-disable jsx-a11y/anchor-is-valid */

import { faBars, faChevronDown, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, message } from "antd";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SlideMenu from "./SlideMenu";
import { css } from "@emotion/react";
import SlideRemote from "./HeaderRemoteController";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";
import useToggle from "../../util/useToggle";
import { ON_SLIDE_MENU, SEARCH_KEYWORD_REQUEST } from "../../@reducers/blog";
import { REMOVE_POST_REQUEST } from "../../@reducers/post";

const PostTitle = styled.h4`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeaderLogo = css`
  display: flex;
  align-items: center;
  height: 70px;
  .logo_span {
    color: black;
    margin-left: 0.5rem;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

const TitleArrow = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const SM_Header_Input = (onSearch: Boolean) => css`
  ${onSearch
    ? "transform: translateY(0); transition: all 0.3s; margin-bottom: 1rem"
    : "transform: translateY(-200%); transition: all 0.3s; position: absolute; left: 0 "}
`;

const SM_Header_Menu = (onMenu: Boolean) => css`
  ${onMenu
    ? "background-color: white; border: 1px solid rgba(0, 0, 0, 0.1); border-bottom: none; overflow: inherit;"
    : "border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden;"}
`;

const SM_Header_SeachForm = (onSlide: Boolean) => css`
  ${onSlide ? "display: block; overflow: hidden" : "display:none"}
`;

const SM_Header_Title = (onTitle: Boolean) => css`
  ${onTitle
    ? "transform: translateY(-100%); transition: all 0.5s; width: 70%;"
    : "transform: translateY(0); transition: all 0.5s;"}
`;

const SmallHeaderNav = memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { onSlideMenu } = useSelector((state: RootState) => state.blog);
  const { user } = useSelector((state: RootState) => state.user);
  const { post, removePostDone, prevPost, nextPost } = useSelector(
    (state: RootState) => state.post
  );

  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const [onSearchForm, onClickSearchForm] = useToggle(false);
  const [onSlideArrow, onClickonSlideArrow, setonSlideArrow] = useToggle(false);
  const [headerTitle, setHeaderTitle] = useState(false);

  useEffect(() => {
    function scrollCallBack() {
      let pathname = window.location.pathname.split("/");
      if (window.scrollY > 200 && pathname[2] === "post") {
        setHeaderTitle(true);
        return;
      }
      setHeaderTitle(false);
      setonSlideArrow(false);
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchContent = useCallback(() => {
    dispatch({
      type: SEARCH_KEYWORD_REQUEST,
      data: { keyword },
    });
    if (keyword.charAt(0) === "#") {
      router.push(`/search/${keyword.slice(1)}`);
      setKeyword("");
      dispatch({
        type: ON_SLIDE_MENU,
      });
      return;
    }
    router.push(`/search/${keyword}`);
    setKeyword("");
    dispatch({
      type: ON_SLIDE_MENU,
    });
  }, [dispatch, router, keyword, setKeyword]);

  const onClickDeletePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { PostId: post?.id, tags: post?.Hashtags },
    });
  }, [dispatch, post?.Hashtags, post?.id]);

  const onClickSlide = useCallback(() => {
    dispatch({
      type: ON_SLIDE_MENU,
    });
    setonSlideArrow(false);
  }, [dispatch, setonSlideArrow]);

  useEffect(() => {
    if (removePostDone) {
      message.success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);

  return (
    <nav className="blog_header_small">
      <div css={SM_Header_Menu(onSlideMenu || onSlideArrow)} className="blog_header_small_nav">
        <div css={SM_Header_Title(headerTitle)}>
          <Link href={"/"}>
            <a css={HeaderLogo}>
              <img alt="menu_logo" style={{ width: "1.9rem" }} src="/images/blog/logo_icon.png" />
              <span className="logo_span">Noah World</span>
            </a>
          </Link>
          <a onClick={onClickonSlideArrow} css={TitleArrow}>
            <PostTitle>{post?.title}</PostTitle>
            <FontAwesomeIcon
              style={{
                marginLeft: "1rem",
                transition: "all 0.3s",
                transform: `rotate(${onSlideArrow ? "180deg" : "0deg"})`,
              }}
              icon={faChevronDown}
            />
          </a>
        </div>
        <a onClick={onClickSlide} style={{ display: "flex", alignItems: "center" }}>
          {onSlideMenu ? (
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faTimes} />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faBars} />
          )}
        </a>
        {onSlideArrow && headerTitle && (
          <SlideRemote
            onClickDeletePost={onClickDeletePost}
            post={post}
            prevPost={prevPost}
            nextPost={nextPost}
            user={user}
          />
        )}
        <div css={SM_Header_SeachForm(onSlideMenu)} className="slide_menu">
          <Input.Search
            css={SM_Header_Input(onSearchForm)}
            value={keyword}
            onChange={onChangeKeyword}
            onSearch={onSearchContent}
          />
          <SlideMenu onClickSearchForm={onClickSearchForm} user={user} />
        </div>
      </div>
    </nav>
  );
});

export default memo(SmallHeaderNav);
