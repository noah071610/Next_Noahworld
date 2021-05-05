import { FC, useEffect, useRef } from "react";
// // @ts-ignore
// import { Carousel } from "3d-react-carousal";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { LOAD_PORTFOLIOS } from "../../../@reducers/blog";
import Articles from "../Articles";
import Title from "../Decorator/Title";
import { useRouter } from "next/dist/client/router";
import { portfolioInter } from "../../../@reducers/@reducerTypes";
import axios from "axios";
import { LOAD_INFO_REQUEST } from "../../../@reducers/user";
import { END } from "@redux-saga/core";
import { IStore } from "../../../types";
import wrapper from "../../../@store/configureStore";

const options = {
  scale: 1.1,
  speed: 700,
  max: 10,
};

const Tilt = (props: any) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current!, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={tilt} {...rest} />;
};

const PortfolioCard = styled(Tilt)`
  transform-style: preserve-3d;
  position: relative;
  margin: 3rem 0;
  &:hover {
    .card_title {
      transform: translate(-50%) translateZ(30px) scaleY(1);
    }
    
  }
  @media only screen and (max-width: 765px) {
    &:hover {
      .card_title {
        transform: translate(-50%) translateZ(10px) scaleY(1);
      }
  }
  @media only screen and (max-width: 605px) {
    display:none;
  }
`;
const CardTitle = styled.div`
  cursor: pointer;
  color: black;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%) translateZ(0) scaleY(0);
  transition: all 0.3s;
  background-color: white;
  width: 50%;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  padding: 1rem 0;
  transition: all 0.3;
  &:hover {
    .portfolio_search {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  @media only screen and (max-width: 765px) {
    width: 65%;
    h2 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

const CardImg = styled.img`
  width: 70%;
  height: 380px;
  border-radius: 10px;
  padding: 0.1rem;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 915px) {
    width: 80%;
    height: 250px;
  }
`;

const PortfolioSmall = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
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
  }
`;

const PortfolioSection: FC<{ id: string }> = ({ id }) => {
  const { portfolios } = useSelector((state: RootState) => state.blog);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_PORTFOLIOS,
    });
  }, [dispatch]);

  return (
    <section id={id}>
      <div className="space" />
      <Articles>
        <Title title="Portfolio" sub="최고가 아니더라도 항상 최선을 다합니다." />
        {portfolios?.map((v, i) => (
          <PortfolioCard key={i} options={options}>
            <Link href={`/portfolio/${v.id}`}>
              <a>
                <CardImg src={v.src} alt="portfolio" />
                <CardTitle className="card_title">
                  <h2 style={{ marginBottom: "1rem 0", color: "black" }}>
                    {v.name} <FontAwesomeIcon className="portfolio_search" icon={faSearch} />{" "}
                  </h2>
                  <p>
                    {v.date}
                    <br />
                    {v.tags.map((tag: string, i: number) => {
                      return (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      );
                    })}
                  </p>
                </CardTitle>
              </a>
            </Link>
          </PortfolioCard>
        ))}
        {portfolios?.map((v, i: number) => {
          return (
            <PortfolioSmall
              key={i}
              onClick={() => {
                router.push(`/portfolio/${v.id}`);
              }}
            >
              <img
                style={{ width: "100%", height: "200px", border: "1px solid rgba(0,0,0,0.1)" }}
                src={v.src}
                alt="portfolio_image"
              />
              <PortfolioDesc>
                <Link href={`/portfolio/${v.id}`}>
                  <a>
                    <h2
                      style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
                      className="mobile_port_title"
                    >
                      {v.name}
                    </h2>
                  </a>
                </Link>
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
    id: context.query.id,
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default PortfolioSection;
