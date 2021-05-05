import { DoubleLeftOutlined } from "@ant-design/icons";
import { FC, memo, ReactNode, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const scrollEffect = keyframes`
to {
  opacity: 0.2;
}
`;
const Scroll = styled.div`
  opacity: 0.5;
  position: fixed;
  bottom: 0.5rem;
  right: 2rem;
  font-size: 2rem;
  z-index: 2;
  cursor: pointer;
  animation: ${scrollEffect} 1s linear infinite alternate;
  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

const AppLayout: FC = memo(({ children }: { children: ReactNode }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <Header />
          {children}
        </div>
        <Scroll className="scroll">
          <DoubleLeftOutlined onClick={scrollToTop} rotate={90} />
        </Scroll>
      </div>
      <Footer />
    </>
  );
});

export default AppLayout;
