import styled from "styled-components";
import { GRAY_COLOR, MAIN_COLOR } from "../../../config";

const Divder = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${GRAY_COLOR};
  &:before {
    position: absolute;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    right: 0;
    top: -0.2rem;
    background-color: ${MAIN_COLOR};
    border-radius: 50%;
  }
`;

function LineRight() {
  return <Divder />;
}

export default LineRight;
