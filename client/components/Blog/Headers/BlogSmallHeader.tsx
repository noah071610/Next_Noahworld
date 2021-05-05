/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  EditFilled,
  HomeFilled,
  RollbackOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import {
  faBars,
  faChevronDown,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Input, message } from "antd";
import Modal from "antd/lib/modal/Modal";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import { RootState } from "../../../@reducers";
import { ON_SLIDE_MENU, POST_EDIT_ON, SEARCH_KEYWORD_REQUEST } from "../../../@reducers/blog";
import { REMOVE_POST_REQUEST } from "../../../@reducers/post";
import { LOG_OUT_REQUEST } from "../../../@reducers/user";
import useInput from "../../../util/useInput";
import useToggle from "../../../util/useToggle";
import { useRouter } from "next/dist/client/router";

const PostTitle = styled.h4`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BlogSmallHeader = memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { onSlideMenu, portfolios, portfolio } = useSelector((state: RootState) => state.blog);
  const { user } = useSelector((state: RootState) => state.user);
  const { post, removePostDone, prevPost, nextPost } = useSelector(
    (state: RootState) => state.post
  );

  const [password, onChangePassword] = useInput("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const [onSearchForm, onClickSearchForm] = useToggle(false);
  const [slideTitle, onClickSlideTitle, setSlideTitle] = useToggle(false);
  const [headerTitle, setHeaderTitle] = useState(false);
  const [portfolioTitle, setPortfolioTitle] = useState(false);

  useEffect(() => {
    function scrollCallBack() {
      let pathname = window.location.pathname.split("/");
      if (window.scrollY > 200 && pathname[2] === "post") {
        setHeaderTitle(true);
        return;
      }
      if (window.scrollY > 200 && pathname[1] === "portfolio" && !isNaN(parseInt(pathname[2]))) {
        setHeaderTitle(true);
        setPortfolioTitle(true);
        return;
      }
      setHeaderTitle(false);
      setSlideTitle(false);
      setPortfolioTitle(false);
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    dispatch({
      type: ON_SLIDE_MENU,
    });
  }, [dispatch]);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { PostId: post?.id, password, tags: post?.HashTags },
    });
  }, [dispatch, password, post?.HashTags, post?.id]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const onClickSlide = useCallback(() => {
    dispatch({
      type: ON_SLIDE_MENU,
    });
    setSlideTitle(false);
  }, [dispatch, setSlideTitle]);

  useEffect(() => {
    if (removePostDone) {
      message.success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);

  return (
    <nav className="blog_header_small">
      <div
        style={
          onSlideMenu || slideTitle
            ? {
                backgroundColor: "white",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderBottom: "none",
                overflow: "inherit",
              }
            : {
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }
        }
        className="blog_header_small_nav"
      >
        <div
          style={
            headerTitle
              ? { transform: "translateY(-100%)", transition: "all 0.5s", width: "70%" }
              : { transform: "translateY(0)", transition: "all 0.5s" }
          }
        >
          <Link href={"/"}>
            <a style={{ display: "flex", alignItems: "center", height: "70px" }}>
              <img alt="menu_logo" style={{ width: "1.9rem" }} src="/images/blog/logo_icon.png" />
              <span
                style={{
                  color: "black",
                  marginLeft: "0.5rem",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Noah World
              </span>
            </a>
          </Link>
          {portfolioTitle ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "70px",
              }}
            >
              {portfolios && (
                <Link
                  href={`/portfolio/${
                    portfolio?.id === 1 ? portfolios.length : portfolio && portfolio.id - 1
                  }`}
                >
                  <a
                    onClick={() => {
                      window.scrollTo({ top: 130 });
                    }}
                    style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}
                  >
                    <DoubleLeftOutlined />
                    <span className="portfolio_nav_btn">이전 포트폴리오</span>
                  </a>
                </Link>
              )}
              <Divider type="vertical" />
              {portfolios && (
                <Link
                  href={`/portfolio/${
                    portfolio?.id === portfolios.length ? 1 : portfolio && portfolio.id + 1
                  }`}
                >
                  <a
                    onClick={() => {
                      window.scrollTo({ top: 130 });
                    }}
                    style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}
                  >
                    <span className="portfolio_nav_btn">다음 포트폴리오</span>
                    <DoubleRightOutlined />
                  </a>
                </Link>
              )}
            </div>
          ) : (
            <a
              onClick={onClickSlideTitle}
              style={{ display: "flex", alignItems: "center", width: "100%", height: "70px" }}
            >
              <PostTitle>{post?.title}</PostTitle>
              <FontAwesomeIcon
                style={{
                  marginLeft: "1rem",
                  transition: "all 0.3s",
                  transform: `rotate(${slideTitle ? "180deg" : "0deg"})`,
                }}
                icon={faChevronDown}
              />
            </a>
          )}
        </div>
        <a onClick={onClickSlide} style={{ display: "flex", alignItems: "center" }}>
          {onSlideMenu ? (
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faTimes} />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faBars} />
          )}
        </a>
        {slideTitle && headerTitle ? (
          <ul className="slide_title">
            <li style={{ margin: 0 }}>
              <Link href={"/"}>
                <a>
                  <HomeFilled />
                </a>
              </Link>
            </li>
            <Divider type="vertical" />
            <li style={{ margin: 0 }}>
              <Link href={`/${post?.category === "culture" ? "class" : post?.category}`}>
                <a>
                  <RollbackOutlined />
                </a>
              </Link>
            </li>
            <Divider type="vertical" />
            <li onClick={() => window.scrollTo({ top: 0 })} style={{ margin: 0 }}>
              {nextPost ? (
                <Link href={`/${post?.category}/post/${nextPost[0]?.id}`}>
                  <a>
                    <DoubleLeftOutlined />
                  </a>
                </Link>
              ) : (
                <DoubleLeftOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
              )}
            </li>
            <Divider type="vertical" />
            <li onClick={() => window.scrollTo({ top: 0 })} style={{ margin: 0 }}>
              {prevPost ? (
                <Link href={`/${post?.category}/post/${prevPost[0]?.id}`}>
                  <a>
                    <DoubleRightOutlined />
                  </a>
                </Link>
              ) : (
                <DoubleRightOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
              )}
            </li>
            <Divider type="vertical" />
            <li style={{ margin: 0 }}>
              <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <VerticalAlignTopOutlined />
              </a>
            </li>
            {user && user.admin && (
              <>
                <Divider type="vertical" />
                <li style={{ margin: 0 }}>
                  <a
                    onClick={() => {
                      dispatch({
                        type: POST_EDIT_ON,
                      });
                      router.push("/admin");
                    }}
                  >
                    <EditFilled />
                  </a>
                </li>
                <Divider type="vertical" />
                <li style={{ margin: 0 }}>
                  <a onClick={showModal}>
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </li>
              </>
            )}
          </ul>
        ) : null}
        <Modal
          title="Please Enter Admin password"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            This fucntion is for ADMIN only. If you are not a administrator, please go back and
            feedback to us. Thank you for your cooperation.
          </p>
          <p>
            이 기능은 관리자 전용이며 관리자용 비밀번호가 필요합니다. 예상치 못하게 접근하셨을 경우
            피드백 주시면 정말 감사하겠습니다. 협력해주셔서 감사합니다.
          </p>
          <p>
            この機能は管理者専用でございます、何が問題が発生した場合は管理者にご連絡して頂ければ幸いだと思います。
          </p>
          <br />
          <Input.Password value={password} onChange={onChangePassword} />
        </Modal>
        <div
          style={
            onSlideMenu
              ? {
                  display: "block",
                  overflow: "hidden",
                }
              : { display: "none" }
          }
          className="slide_menu"
        >
          <Input.Search
            style={
              onSearchForm
                ? { transform: "translateY(0)", transition: "all 0.3s", marginBottom: "1rem" }
                : {
                    transform: "translateY(-200%)",
                    transition: "all 0.3s",
                    position: "absolute",
                    left: 0,
                  }
            }
            value={keyword}
            onChange={onChangeKeyword}
            onSearch={onSearchContent}
          />
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <ul style={{ margin: 0, width: "50%", paddingRight: "1rem" }}>
              <h2 style={{ margin: "0 0 1rem 0" }}>Blog</h2>
              <Link href={"/"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                  >
                    {" "}
                    - Home
                  </li>
                </a>
              </Link>
              <Link href={"/tech"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                  >
                    {" "}
                    - Info Tech
                  </li>
                </a>
              </Link>
              <Link href={"/daily"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                  >
                    {" "}
                    - Daily
                  </li>
                </a>
              </Link>
              <Link href={"/class"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    - Korean Class for &nbsp;
                    <img
                      style={{ width: "1.5rem" }}
                      alt="japan_flag"
                      src="https://img.icons8.com/color/48/000000/japan.png"
                    />
                  </li>
                </a>
              </Link>
              <a onClick={onClickSearchForm}>
                <li>
                  {" "}
                  - Search <FontAwesomeIcon style={{ marginLeft: "0.5rem" }} icon={faSearch} />
                </li>
              </a>
            </ul>
            <ul
              style={{
                margin: 0,
                width: "50%",
                paddingLeft: "1rem",
                borderLeft: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ margin: "0 0 1rem 0" }}>Direct Link</h2>
              <Link href={"/aboutme"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                  >
                    {" "}
                    - About me
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio"}>
                <a>
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                      dispatch({
                        type: ON_SLIDE_MENU,
                      });
                    }}
                  >
                    {" "}
                    - Portfolio
                  </li>
                </a>
              </Link>
              <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
                <li> - Instagram</li>
              </a>
              <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
                <li> - Git</li>
              </a>
              {user ? (
                <a onClick={onClickLogOut}>
                  <li>
                    - Log out{" "}
                    <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignOutAlt} />
                  </li>
                </a>
              ) : (
                <Link href={"/login"}>
                  <a>
                    <li
                      onClick={() =>
                        dispatch({
                          type: ON_SLIDE_MENU,
                        })
                      }
                    >
                      - Log In & Sign Up{" "}
                      <FontAwesomeIcon style={{ marginLeft: "0.3rem" }} icon={faSignInAlt} />
                    </li>
                  </a>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default BlogSmallHeader;
