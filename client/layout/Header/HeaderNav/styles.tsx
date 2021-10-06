import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";
import { BLUE_COLOR } from "../../../config";
import { Input } from "antd";

export const HeaderNavWrapper = styled.nav`
  ${tw`w-full`}
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .nav-inner {
    position: relative;
    transition: all 0.5s;
    height: 60px;
    ${FLEX_STYLE("space-between", "center")};
    ${tw`mx-auto py-3`}
    width: 1120px;
    .nav-left {
      ${tw`inline-block`}
      li {
        ${tw`mr-12 pb-1`}
        background-image: linear-gradient(transparent calc(100% - 1.5px), ${BLUE_COLOR} 5px);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        text-transform: uppercase;
        &:hover {
          a {
            color: black;
          }
          animation: underLining 0.2s forwards;
        }
      }
    }
    .nav-right {
      ${FLEX_STYLE("space-between", "center")};
      a {
        ${FLEX_STYLE("center", "center")};
        font-size: 1.5rem;
        margin-left: 1rem;
      }
    }
    @media (max-width: 1120px) {
      ${tw`w-full px-4`}
    }
  }
  @media (max-width: 830px) {
    display: none;
  }
`;

export const SearchBar = styled(Input.Search)`
  width: 30%;
  z-index: auto;
  overflow: hidden;
`;
