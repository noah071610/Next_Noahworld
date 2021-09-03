import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../styles/emotion";

export const HeaderWrapper = styled.header`
  ${tw`relative w-full`}
  .header-inner {
    ${tw`relative pt-12 pb-20 mx-auto`}
    width: 1120px;
    .logo {
      width: 560px;
      &:hover {
        -webkit-animation: pulse 0.5s;
        animation: pulse 0.5s;
      }
    }
    .login-menu {
      ${tw`absolute bottom-4 right-0`}
      a {
        ${tw`ml-5 inline-block`}
        li {
          ${FLEX_STYLE("flex-start", "center")}
          svg, img {
            ${tw`ml-2 w-4 h-4`}
          }
        }
      }
    }
    @media (max-width: 1120px) {
      ${tw`w-full`}
    .login-menu {
      transform:translateX(-1rem);
    }
  }
  @media (max-width: 830px) {
    display:none;
  }
`;
