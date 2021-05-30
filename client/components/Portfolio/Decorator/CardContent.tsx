import styled from "@emotion/styled";
import React, { FC } from "react";
import { MAIN_COLOR } from "../../../config";

const Square = styled.div`
  width: 120px;
  position: relative;
  transition: 0.5s;
  margin: 1.5rem auto;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueShape = styled.div`
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;

const Img = styled.div`
  width: 100%;
  position: relative;
  transition: 0.5s;
  background-color: ${MAIN_COLOR};
  transform: skewY(-10deg);
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #c3ffe1;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  &:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 10px;
    height: 100%;
    background-color: #c3ffe1;
    transform-origin: left;
    transform: skewY(45deg);
    transition: 0.5s;
    border-bottom: 20px solid #d9d9d9;
  }
`;

const SqureTitle = styled.h4`
  background-color: white;
  user-select: none;
  color: black;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 130px;
    background: linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1));
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    z-index: -1;
  }
  ${Square}:hover &:before {
    transform: skewX(45deg) translateY(10px);
    filter: blur(5px);
  }
`;

const ValueContent = styled.div`
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 60%;
    padding: 1rem 0 0 1rem;
    text-align: start;
    p {
      margin: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    padding: 0;
    p {
      margin: 0 auto;
    }
  }
`;

interface Contents {
  squareTitle: string;
  src: string;
  title: string;
  desc: string;
}

interface ContentType {
  contents: Contents;
  delay: number;
}

const CardContent: FC<ContentType> = ({ delay, contents }) => {
  return (
    <>
      <ValueShape data-aos="flip-up" data-aos-duration="500" data-aos-delay={delay}>
        <Square>
          <Img>
            <img
              alt={contents.squareTitle}
              src={contents.src}
              style={{
                margin: "1rem 0",
                width: "60px",
              }}
            />
            <SqureTitle>{contents.squareTitle}</SqureTitle>
          </Img>
        </Square>
      </ValueShape>
      <ValueContent>
        <h4 style={{ marginTop: "1rem", fontWeight: "bold" }}>{contents.title}</h4>
        <p style={{ width: "100%", lineHeight: "1.5", fontSize: "0.8rem", margin: "1rem auto" }}>
          {contents.desc}
        </p>
      </ValueContent>
    </>
  );
};

export default CardContent;
