import { message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { HeaderNavWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faUserCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { LOG_OUT_REQUEST } from "../../../@reducers/user";
import { RootState } from "../../../@reducers";
import Profile from "../../../components/Profile";
import SearchForm from "./SearchForm";

const HeaderNav = () => {
  const dispatch = useDispatch();
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const router = useRouter();
  const [onProfile, setOnProfile] = useState(false);
  const { user, logOutDone, logOutError } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (logOutDone) {
      message.success("Log out is done, Thank you for visiting.");
      router.push("/");
    }
    if (logOutError) {
      message.error("Unexpected Erorr! please try again or feedback to us");
    }
  }, [logOutDone, logOutError]);

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

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  const onClickProfile = useCallback(() => {
    setOnProfile((prev) => !prev);
  }, []);
  return (
    <>
      <HeaderNavWrapper className={FixedNavbar ? "fixed" : "static"}>
        <div className="nav-inner">
          <ul className="nav-left">
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/tech">
                <a>post</a>
              </Link>
            </li>
            <li>
              <a href="https://JShyunsoo.site" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
          <ul className="nav-right">
            <SearchForm />
            {user ? (
              <>
                <a onClick={onClickProfile}>
                  <li>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </li>
                </a>
                <a onClick={onClickLogOut}>
                  <li>
                    <FontAwesomeIcon icon={faPowerOff} />
                  </li>
                </a>
              </>
            ) : (
              <Link href="/login">
                <a>
                  <li>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </li>
                </a>
              </Link>
            )}
          </ul>
          {onProfile && <Profile />}
        </div>
      </HeaderNavWrapper>
      {FixedNavbar && <div style={{ height: "70px" }} />}
    </>
  );
};

export default HeaderNav;
