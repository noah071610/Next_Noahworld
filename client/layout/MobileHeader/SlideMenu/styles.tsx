import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const SlideMenuWrapper = (onSlideMenu: boolean) => css`
  ${tw`fixed left-0 bg-white w-full hidden overflow-hidden`}
  top:55px;
  ${onSlideMenu ? "height:auto" : "height:0px"};
  .slide-menu-inner {
    ${tw`w-full flex`}
    transition: 0.25s all;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: none;
    ${onSlideMenu ? "transform: translateY(0);" : "transform: translateY(-100%);"}
    ul {
      ${tw`m-0 w-full p-4`}
      li {
        width: 100%;
        a {
          ${tw`block py-4 hover:text-black`}
          ${FLEX_STYLE("flex-start", "center")}
          svg,img {
            ${tw`ml-2`}
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: black;
        }
      }
    }
    h2 {
      ${tw`mt-0 mb-4`}
      text-transform: uppercase;
    }
    ul:last-child {
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 830px) {
    display: block;
  }
`;
