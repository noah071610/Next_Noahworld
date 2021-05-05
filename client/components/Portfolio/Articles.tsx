import { FC, ReactNode } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  .articles_div {
    width: 90%;
    margin: 0 auto;
    @media only screen and (max-width: 660px) {
      width:100%;
  }
`;

const Articles: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Div className="articles">
      <div className="articles_div">{children}</div>
    </Div>
  );
};

export default Articles;
