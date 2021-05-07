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

export const SM_Header_Input = (onSearch: Boolean) => css`
  ${onSearch
    ? "transform: translateY(0); transition: all 0.3s; margin-bottom: 1rem"
    : "transform: translateY(-200%); transition: all 0.3s; position: absolute; left: 0 "}
`;

export const SM_Header_Menu = (onMenu: Boolean) => css`
  ${onMenu
    ? "background-color: white; border: 1px solid rgba(0, 0, 0, 0.1); border-bottom: none; overflow: inherit;"
    : "border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden;"}
`;

export const SM_Header_SeachForm = (onSlide: Boolean) => css`
  ${onSlide ? "display: block; overflow: hidden" : "display:none"}
`;

export const SM_Header_Title = (onTitle: Boolean) => css`
  ${onTitle
    ? "transform: translateY(-100%); transition: all 0.5s; width: 70%;"
    : "transform: translateY(0); transition: all 0.5s;"}
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
