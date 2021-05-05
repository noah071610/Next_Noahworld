/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import { LOG_OUT_REQUEST } from "../@reducers/user";
import { RootState } from "../@reducers";
import BlogHeader from "./Blog/Headers/BlogHeader";
import BlogSmallHeader from "./Blog/Headers/BlogSmallHeader";
import { navContents } from "../config";
import { useRouter } from "next/dist/client/router";
import { PortfolioHeader } from "./Blog/Headers/PortfolioHeader";
import PortfolioPostHeader from "./Blog/Headers/PortfolioPostHeader";
const LogoMain = styled.img`
  &:hover {
    -webkit-animation: pulse 0.5s;
    animation: pulse 0.5s;
  }
`;

const Header = memo(() => {
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const { header } = useSelector((state: RootState) => state.blog);
  const { user, logOutDone, logOutError } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    function scrollCallBack() {
      if (window.scrollY >= 275) {
        setFixedNavbar(true);
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
  }, [dispatch]);

  useEffect(() => {
    if (logOutDone) {
      message.success("Log out is done, Thank you for visiting.");
      router.push("/");
    }
    if (logOutError) {
      message.error("Unexpected Erorr! please try again or feedback to us");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logOutDone, logOutError]);

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
      }}
      className="header"
    >
      <div className="space_small_on" />
      <div className="header_logo">
        <Link href={"/"}>
          <a>
            <LogoMain className="logo" src="/images/blog/logo_main.png" />
          </a>
        </Link>
        {user ? (
          <a className="blog_header_loginout" onClick={onClickLogOut}>
            Log out <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignOutAlt} />
          </a>
        ) : (
          <Link href={"/login"}>
            <a className="blog_header_loginout">
              Log In & Sign Up{" "}
              <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignInAlt} />
            </a>
          </Link>
        )}
      </div>
      <nav className={FixedNavbar ? "blog_header_nav fixed" : "blog_header_nav static"}>
        {header === "blog" ? (
          <BlogHeader />
        ) : header === "portfolio" ? (
          <PortfolioHeader navContents={navContents} />
        ) : (
          <PortfolioPostHeader />
        )}
      </nav>
      <BlogSmallHeader />
      {FixedNavbar ? <div style={{ height: "70px" }} /> : null}
    </header>
  );
});

export default memo(Header);
