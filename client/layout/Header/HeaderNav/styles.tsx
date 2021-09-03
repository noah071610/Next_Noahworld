import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";
import { BLUE_COLOR } from "../../../config";
import { Input } from "antd";

export const HeaderNavWrapper = styled.nav`
  ${tw`w-full`}
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .nav-inner {
    transition: all 0.5s;
    ${FLEX_STYLE("space-between", "center")};
    ${tw`mx-auto py-5`}
    width: 1120px;
    ul {
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
