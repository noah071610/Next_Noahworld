import styled from "styled-components";
import { GRAY_COLOR, MAIN_COLOR } from "../../../config";

const Divder = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem auto;
  height: 1px;
  background-color: ${GRAY_COLOR};
  &:before {
    position: absolute;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    left: 0;
    top: -0.2rem;
    background-color: ${MAIN_COLOR};
    border-radius: 50%;
  }
`;

function DividerLeftPoint() {
  return <Divder />;
}

export default DividerLeftPoint;
