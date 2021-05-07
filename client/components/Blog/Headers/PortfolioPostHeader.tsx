/* eslint-disable jsx-a11y/anchor-is-valid */
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { faHome, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../../@reducers";

export const PortfolioPostHeader: FC = memo(() => {
  const { portfolios, portfolio } = useSelector((state: RootState) => state.blog);

  return (
    <>
      <div>
        <Link href={"/"}>
          <a
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
            className="blog_header_li"
          >
            <FontAwesomeIcon style={{ marginRight: "0.8rem" }} icon={faHome} />
            Blog
          </a>
        </Link>
        <Link href={"/portfolio"}>
          <a className="blog_header_li">
            <FontAwesomeIcon style={{ marginRight: "0.8rem" }} icon={faPaste} />
            Portfolio Main
          </a>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {portfolios && (
          <Link href={`/portfolio/${portfolio?.id === 1 ? portfolios.length : portfolio.id - 1}`}>
            <a
              onClick={() => {
                window.scrollTo({ top: 276 });
              }}
              style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}
            >
              <DoubleLeftOutlined />
              <span style={{ fontSize: "0.8rem", margin: "0 0.5rem" }}>이전 포트폴리오</span>
            </a>
          </Link>
        )}
        <Divider type="vertical" />
        {portfolios && (
          <Link href={`/portfolio/${portfolio?.id === portfolios.length ? 1 : portfolio.id + 1}`}>
            <a
              onClick={() => {
                window.scrollTo({ top: 276 });
              }}
              style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}
            >
              <span style={{ fontSize: "0.8rem", margin: "0 0.5rem" }}>다음 포트폴리오</span>
              <DoubleRightOutlined />
            </a>
          </Link>
        )}
      </div>
    </>
  );
});

export default PortfolioPostHeader;
