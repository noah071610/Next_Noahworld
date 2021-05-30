import React, { FC, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { LOAD_PORTFOLIOS } from "../../../@reducers/blog";
import Articles from "../Articles";
import Title from "../Decorator/Title";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../../../@reducers/user";
import { END } from "@redux-saga/core";
import { IStore } from "../../../types";
import wrapper from "../../../@store/configureStore";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { message } from "antd";

const PortfolioList = dynamic(() => import("./PortfolioList"), { ssr: false });

const PortfolioSmall = styled.a`
  display: none;
  .poster {
    width: 100%;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 606px) {
    display: block;
    width: 100%;
    height: 200px;
    position: relative;
    margin-bottom: 5rem;
    cursor: pointer;
  }
`;

const PortfolioDesc = styled.div`
  display: block;
  text-align: end;
  position: absolute;
  background-color: white;
  bottom: -2rem;
  right: -0.5rem;
  padding: 1.5rem;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  h2 {
    margin: 0;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 606px) {
    .tag {
      font-size: 0.5rem;
    }
  }
`;

const PortfolioSection: FC<{ id: string }> = ({ id }) => {
  const { portfolios } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_PORTFOLIOS,
    });
  }, []);

  const onClickPortfolio = useCallback((git: string) => {
    if (!git) {
      message.success("현재 보고계시는 페이지입니다.");
    }
  }, []);
  return (
    <section id={id}>
      <div className="space" />
      <Articles>
        <Title title="Portfolio" sub="최고가 아니더라도 항상 최선을 다합니다." />
        <PortfolioList portfolios={portfolios} />
        {portfolios.map((v, i: number) => {
          return (
            <PortfolioSmall
              onClick={() => onClickPortfolio(v.git)}
              key={i}
              href={v.git}
              target="_blank"
            >
              <img className="poster" src={v.src} alt="portfolio_image" />
              <PortfolioDesc>
                <h2 className="mobile_port_title">{v.name}</h2>
                {v.tags.map((tag: string, i: number) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </PortfolioDesc>
            </PortfolioSmall>
          );
        })}
      </Articles>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_PORTFOLIOS,
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default PortfolioSection;
