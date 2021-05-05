import { FC, ReactNode } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 98%;
  margin: 1rem 0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.1);
`;

interface Wrapper {
  children: ReactNode;
}

const PageWrapper: FC<Wrapper> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default PageWrapper;
