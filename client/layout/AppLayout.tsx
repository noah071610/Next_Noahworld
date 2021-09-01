import { DoubleLeftOutlined } from "@ant-design/icons";
import React, { memo, useCallback } from "react";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "../components/Header";
import { keyframes } from "@emotion/react";
import tw from "twin.macro";

const scrollEffect = keyframes`
to {
  opacity: 0.2;
}
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  .page {
    max-width: 1120px;
    margin: 0 auto;
  }
  @media (max-width: 830px) {
    padding: 0 0.5rem;
  }
`;

const Scroll = styled.div`
  ${tw`opacity-50 fixed bottom-4 right-8 text-4xl z-20 cursor-pointer`}
  animation: ${scrollEffect} 1s linear infinite alternate;
  @media (max-width: 430px) {
    display: none;
  }
`;

const AppLayout = ({ children }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Wrapper>
      <div className="page">
        <Header />
        {children}
      </div>
      <Scroll className="scroll">
        <DoubleLeftOutlined onClick={scrollToTop} rotate={90} />
      </Scroll>
    </Wrapper>
  );
};

export default AppLayout;
