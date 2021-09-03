import { faSearch, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
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
  onClickProfileBtn: () => void;
}

const SlideMenu: FC<SlideMenuProps> = memo(
  ({ onClickSearchForm, onSlideMenu, setOnSlideMenu, onClickProfileBtn }) => {
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
    }, []);

    return (
      <nav css={SlideMenuWrapper(onSlideMenu)}>
        <div className="slide-menu-inner">
          <ul>
            <Link href={"/"}>
              <a>
                <li onClick={onClickMenu}>Home</li>
              </a>
            </Link>
            <Link href={"/tech"}>
              <a>
                {" "}
                <li onClick={onClickMenu}>Info Tech</li>
              </a>
            </Link>
            <Link href={"/daily"}>
              <a>
                <li onClick={onClickMenu}>Daily</li>
              </a>
            </Link>
            <a href="https://JShyunsoo.site" target="_blank" rel="noreferrer">
              <li onClick={onClickMenu}>Portfolio</li>
            </a>
          </ul>
          <ul>
            <a onClick={onClickSearchForm}>
              <li>
                Search <FontAwesomeIcon icon={faSearch} />
              </li>
            </a>
            {user ? (
              <>
                <a onClick={onClickProfileBtn}>
                  <li>
                    View Profile <FontAwesomeIcon icon={faUser} />
                  </li>
                </a>
                <a onClick={onClickLogOut}>
                  <li>
                    Log out <FontAwesomeIcon icon={faSignOutAlt} />
                  </li>
                </a>
              </>
            ) : (
              <>
                <a href="https://api.noahworld.site/auth/google">
                  <li onClick={onClickMenu}>
                    Google Login{" "}
                    <img
                      alt="google_icon"
                      src="https://img.icons8.com/fluent/16/000000/google-logo.png"
                    />
                  </li>
                </a>
                <Link href={"/login"}>
                  <a onClick={onClickMenu}>
                    <li>
                      Log In & Sign Up <FontAwesomeIcon icon={faSignInAlt} />
                    </li>
                  </a>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
);

export default SlideMenu;
