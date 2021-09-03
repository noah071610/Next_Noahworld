import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import { LOG_OUT_REQUEST } from "../../@reducers/user";
import { RootState } from "../../@reducers";
import { useRouter } from "next/dist/client/router";
import HeaderNav from "./HeaderNav";
import { HeaderWrapper } from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, logOutDone, logOutError } = useSelector((state: RootState) => state.user);
  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (logOutDone) {
      message.success("Log out is done, Thank you for visiting.");
      router.push("/");
    }
    if (logOutError) {
      message.error("Unexpected Erorr! please try again or feedback to us");
    }
  }, [logOutDone, logOutError]);

  return (
    <HeaderWrapper>
      <div className="header-inner">
        <Link href={"/"}>
          <a>
            <img className="logo" src="/images/blog/logo_main.jpg" />
          </a>
        </Link>
        <ul className="login-menu">
          {user ? (
            <a onClick={onClickLogOut}>
              <li>
                Log out <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignOutAlt} />
              </li>
            </a>
          ) : (
            <>
              <Link href={"/login"}>
                <a>
                  <li>
                    Login & Sign Up <FontAwesomeIcon icon={faSignInAlt} />
                  </li>
                </a>
              </Link>
              <a href="https://api.noahworld.site/auth/google">
                <li>
                  Google Login
                  <img
                    alt="google_icon"
                    src="https://img.icons8.com/fluent/18/000000/google-logo.png"
                  />
                </li>
              </a>
            </>
          )}
        </ul>
      </div>
      <HeaderNav />
    </HeaderWrapper>
  );
};

export default Header;
