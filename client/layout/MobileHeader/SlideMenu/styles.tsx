import { css } from "@emotion/react";
import tw from "twin.macro";
import { FLEX_STYLE, GRID_STYLE } from "../../../styles/emotion";

export const SlideMenuWrapper = (onSlideMenu: boolean) => css`
  ${tw`fixed left-0 bg-white w-full hidden overflow-hidden`}
  top:55px;
  ${onSlideMenu ? "height:auto" : "height:0px"};
  .slide-menu-inner {
    ${tw`w-full py-4`}
    ${GRID_STYLE("", "1fr 1fr")};
    transition: 0.25s all;
    ${onSlideMenu ? "transform: translateY(0);" : "transform: translateY(-100%);"}
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ul {
      a {
        ${tw`block w-full py-4 px-6 hover:text-black text-sm`}
        li {
          ${FLEX_STYLE("flex-start", "center")};
          svg,
          img {
            ${tw`ml-2`}
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: black;
        }
      }
      &:last-of-type {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media (max-width: 830px) {
    display: block;
  }
`;
