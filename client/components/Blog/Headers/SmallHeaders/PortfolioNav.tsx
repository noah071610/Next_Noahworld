import { css } from "@emotion/react";
import { Divider } from "antd";
import Link from "next/link";
import React, { FC, memo } from "react";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { RootState } from "../../../../@reducers";
import { useSelector } from "react-redux";

const PortfolioLink = css`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const Wrapper = css`
  display: flex;
  align-items: center;
  height: 70px;
`;

const PortfolioNav: FC = memo(() => {
  const { portfolio, portfolios } = useSelector((state: RootState) => state.blog);
  return (
    <div css={Wrapper}>
      <Link href={`/portfolio/${portfolio?.id === 1 ? portfolios?.length : portfolio.id - 1}`}>
        <a
          onClick={() => {
            window.scrollTo({ top: 130 });
          }}
          css={PortfolioLink}
        >
          <DoubleLeftOutlined />
          <span className="portfolio_nav_btn">이전 포트폴리오</span>
        </a>
      </Link>
      <Divider type="vertical" />
      <Link href={`/portfolio/${portfolio?.id === portfolios?.length ? 1 : portfolio.id + 1}`}>
        <a
          onClick={() => {
            window.scrollTo({ top: 130 });
          }}
          css={PortfolioLink}
        >
          <span className="portfolio_nav_btn">다음 포트폴리오</span>
          <DoubleRightOutlined />
        </a>
      </Link>
    </div>
  );
});

export default memo(PortfolioNav);
