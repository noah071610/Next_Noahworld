import { faSearch, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { LOG_OUT_REQUEST } from "../../../@reducers/user";
import { SlideMenuWrapper } from "./styles";

interface SlideMenuProps {
  onClickSearchForm: () => void;
  onSlideMenu: boolean;
  setOnSlideMenu: (type: boolean) => void;
}

const SlideMenu: FC<SlideMenuProps> = memo(({ onClickSearchForm, onSlideMenu, setOnSlideMenu }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const onClickMenu = useCallback(() => {
    window.scrollTo({ top: 0 });
    setOnSlideMenu(false);
  }, []);
  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    setOnSlideMenu(false);
  }, [dispatch]);

  return (
    <nav css={SlideMenuWrapper(onSlideMenu)}>
      <div className="slide-menu-inner">
        <ul>
          <h2>Blog</h2>
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
          <li>
            <a onClick={onClickSearchForm}>
              - Search <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
        </ul>
        <ul>
          <h2>Direct Link</h2>
          <li onClick={onClickMenu}>
            <a href="https://JShyunsoo.site" target="_blank" rel="noreferrer">
              - Portfolio
            </a>
          </li>
          <li>
            <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
              - Git
            </a>
          </li>
          <li onClick={onClickMenu}>
            <a href="https://api.noahworld.site/auth/google">
              - Google Login{" "}
              <img
                alt="google_icon"
                src="https://img.icons8.com/fluent/16/000000/google-logo.png"
              />
            </a>
          </li>
          {user ? (
            <li>
              <a onClick={onClickLogOut}>
                - Log out <FontAwesomeIcon icon={faSignOutAlt} />
              </a>
            </li>
          ) : (
            <li>
              <Link href={"/login"}>
                <a onClick={onClickMenu}>
                  - Log In & Sign Up <FontAwesomeIcon icon={faSignInAlt} />
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default memo(SlideMenu);
