import { css } from "@emotion/react";
import { BLUE_COLOR } from "../config";

export const marginCSS = (top, right, bottom, left) => css`
  margin: ${top} ${right} ${bottom} ${left};
`;

export const paddingCSS = (top, right, bottom, left) => css`
  padding: ${top} ${right} ${bottom} ${left};
`;

export const noSearchPostCSS = css`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80px;
    opacity: 0.3;
  }
  h3 {
    text-align: center;
  }
`;

export const TitleProfile = css`
  white-space: nowrap;
  display: inline-block;
  margin-left: 0.5rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoPostProfile = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.3;
  img {
    width: 100px;
  }
`;

export const ProfilePointTitle = css`
  color: ${BLUE_COLOR};
  margin-left: 0.3rem;
`;

export const DeleteComment = (removeModal: boolean) => css`
  visibility: ${removeModal ? "initial" : "hidden"};
  animation: ${removeModal ? "0.5s fadeIn" : "none"};
  h2{
    text-align: center; 
    color: white;
  }
  div{
    display: flex; 
    justify-content: center;
  }
}
`;
