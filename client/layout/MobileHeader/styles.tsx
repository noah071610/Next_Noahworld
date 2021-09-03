import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { ELLIPSIS_STYLE, FLEX_STYLE } from "../../styles/emotion";

export const MoblieHeaderWrapper = styled.header`
  ${tw`w-full p-4 fixed top-0 left-0 z-20 bg-white`}
  ${FLEX_STYLE("space-between", "center")};
  .header-menu-btn {
    ${tw`p-0`}
    svg {
      ${tw`text-2xl`}
    }
  }
  @media (min-width: 830px) {
    display: none;
  }
`;

export const HeaderMainWrapper = (onPostHeader: boolean, onSearchForm: Boolean) => css`
  ${tw`h-8 overflow-hidden`}
  .header-main-inner {
    ${onSearchForm
      ? "transform:translateY(-66%)"
      : onPostHeader
      ? "transform:translateY(-32%)"
      : "transform:translateY(0)"};
    transition: 0.3s all;
    .logo {
      ${FLEX_STYLE("flex-start", "center")};
      span {
        ${tw`font-bold text-xl ml-2`}
      }
      &:hover {
        color: black;
      }
    }
    .post-title {
      ${tw`h-8 w-full p-0 pr-8`}
      ${FLEX_STYLE("flex-start", "center")};
      svg {
        ${tw`ml-4`}
        transition: 0.3s;
      }
      h1 {
        ${tw`text-sm`}
        ${ELLIPSIS_STYLE(1.5, 1, "auto")}
      }
    }
  }
`;
