import { css } from "@emotion/react";
import { faSearch, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { UserInter } from "../../../@reducers/@reducerTypes";
import { ON_SLIDE_MENU } from "../../../@reducers/blog";
import { LOG_OUT_REQUEST } from "../../../@reducers/user";
import { marginCSS } from "../../../styles/emotion";

interface SlideMenuProps {
  onClickSearchForm: () => void;
  user: UserInter;
}

const SlideMenuWrapper = css`
  display: flex;
  margin-top: 1rem;
  ul:first-of-type {
    margin: 0;
    width: 50%;
    padding-right: 1rem;
  }
  ul:last-child {
    margin: 0;
    width: 50%;
    padding-left: 1rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  a {
    display: block;
    padding: 1rem 0;
    &:hover {
      color: black;
    }
  }
  .image_list {
    display: flex;
    align-items: center;
  }
`;

const SlideMenu: FC<SlideMenuProps> = memo(({ onClickSearchForm, user }) => {
  const dispatch = useDispatch();
  const onClickMenu = useCallback(() => {
    window.scrollTo({ top: 0 });
    dispatch({
      type: ON_SLIDE_MENU,
    });
  }, []);
  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    dispatch({
      type: ON_SLIDE_MENU,
    });
  }, [dispatch]);

  return (
    <div css={SlideMenuWrapper}>
      <ul>
        <h2 css={marginCSS(0, 0, "1rem", 0)}>Blog</h2>
        <li onClick={onClickMenu}>
          <Link href={"/"}>
            <a>- Home</a>
          </Link>
        </li>
        <li onClick={onClickMenu}>
          <Link href={"/tech"}>
            <a>- Info Tech</a>
          </Link>
        </li>
        <li onClick={onClickMenu}>
          <Link href={"/daily"}>
            <a>- Daily</a>
          </Link>
        </li>
        <li onClick={onClickMenu}>
          <Link href={"/class"}>
            <a className="image_list">
              <span>- Korean Class for &nbsp;</span>
              <img
                style={{ width: "1.5rem" }}
                alt="japan_flag"
                src="https://img.icons8.com/color/48/000000/japan.png"
              />
            </a>
          </Link>
        </li>
        <li>
          <a onClick={onClickSearchForm}>
            {" "}
            - Search <FontAwesomeIcon style={{ marginLeft: "0.5rem" }} icon={faSearch} />
          </a>
        </li>
      </ul>
      <ul>
        <h2 css={marginCSS(0, 0, "1rem", 0)}>Direct Link</h2>
        <li>
          <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
            - Git
          </a>
        </li>
        <li onClick={onClickMenu}>
          <a href="http://JShyunsoo.com" target="_blank" rel="noreferrer">
            - Portfolio
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
            - Instagram
          </a>
        </li>
        <li onClick={onClickMenu}>
          <a
            style={{ display: "flex", alignItems: "center" }}
            href="https://api.noahworld.site/auth/google"
          >
            - Google Login{" "}
            <img
              style={{ width: "0.9rem", marginLeft: "0.4rem" }}
              alt="google_icon"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
          </a>
        </li>
        {user ? (
          <li>
            <a onClick={onClickLogOut}>
              - Log out <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignOutAlt} />
            </a>
          </li>
        ) : (
          <li>
            <Link href={"/login"}>
              <a onClick={onClickMenu}>
                - Log In & Sign Up{" "}
                <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignInAlt} />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
});

export default memo(SlideMenu);
