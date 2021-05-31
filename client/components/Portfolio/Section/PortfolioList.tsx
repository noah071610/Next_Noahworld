import React, { FC, memo, useCallback, useEffect, useRef } from "react";
import { Carousel } from "3d-react-carousal";
import VanillaTilt from "vanilla-tilt";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { message } from "antd";
import { portfolios } from "../../../config";

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
  width: 80%;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  padding: 1rem 0;
  transition: all 0.3;
  &:hover {
    .portfolio_search {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  h2 {
    margin-bottom: 1rem 0;
    color: black;
  }
  @media only screen and (max-width: 765px) {
    width: 100%;
    h2 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 380px;
  border-radius: 10px;
  padding: 0.1rem;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 913px) {
    height: 280px;
  }
`;

const PortfolioList: FC = memo(() => {
  let slides = [];
  const onClickPortfolio = useCallback((git: string) => {
    if (!git) {
      message.success("현재 보고계시는 페이지입니다.");
    }
  }, []);

  {
    portfolios?.map((v, i) =>
      slides.push(
        <PortfolioCard key={i} options={options}>
          <a onClick={() => onClickPortfolio(v.git)} href={v.git} target="_blank">
            <CardImg src={v.src} alt="portfolio" />
            <CardTitle className="card_title">
              <h2>
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
        </PortfolioCard>
      )
    );
  }

  return (
    <>
      <Carousel slides={slides} autoplay={false} interval={1000} />
    </>
  );
});

export default memo(PortfolioList);
