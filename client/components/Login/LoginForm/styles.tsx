import styled from "@emotion/styled";
import { BLUE_COLOR } from "../../../config";

export const GoogleBtn = styled.button`
  box-sizing: border-box;
  outline: none;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  div {
    width: 360px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    h3 {
      transition: all 0.3s;
      margin: 0 0 0 1rem;
      font-weight: normal;
    }
    img {
      width: 30px;
    }
  }
  &:hover {
    h3 {
      color: ${BLUE_COLOR};
    }
  }
  @media only screen and (max-width: 576px) {
    div {
      width: 200px;
      img {
        width: 20px;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;
