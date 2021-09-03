import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../styles/emotion";

export const FooterWrapper = styled.footer`
  ${tw`mt-20 w-full h-48`}
  ${FLEX_STYLE("center", "center")};
  background-color: #121212;
  .footer-inner {
    ${tw`text-white py-12 px-8`}
    ${FLEX_STYLE("space-between", "center")};
    width: 1120px;
    .footer-menu {
      ${FLEX_STYLE("center", "center")};
      margin: 0;
    }
    li {
      a {
        color: white;
      }
    }
    @media only screen and (max-width: 1120px) {
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      div {
        text-align: center;
      }
      ${tw`p-2 block`}
      .footer-menu {
        ${tw`mt-6`}
        justify-content: center;
        li {
          ${tw`mr-0`}
          a {
            ${tw`text-xs`}
          }
        }
      }
    }
  }
`;

export const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    padding: 0.7rem 1.5rem;
  }
  @media (max-width: 768px) {
    li {
      padding: 0.7rem 1.5rem;
    }
  }
`;
