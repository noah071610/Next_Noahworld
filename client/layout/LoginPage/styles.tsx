import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE, GRID_STYLE } from "../../styles/emotion";

export const LoginWrapper = styled.main`
  ${GRID_STYLE("2rem", "1fr 1fr")};
  .login-poster {
    ${FLEX_STYLE("center", "center")};
    img {
      ${tw`w-full`}
    }
  }
  .login-title {
    ${tw`my-12`}
    h1 {
      ${tw`text-4xl mb-4`}
      ${FLEX_STYLE("flex-start", "center")}
      img {
        ${tw`ml-4 w-20 h-20`}
      }
    }
  }
  .login-form {
    ${tw`w-full`}
  }
  @media (max-width: 830px) {
    ${FLEX_STYLE("flex-start", "center", "column-reverse")}
    gap:0;
    ${tw`px-4 pt-0`}
    .login-poster {
    }
  }
  @media (max-width: 576px) {
    .login-title {
      ${tw`my-6`}
      h1 {
        font-size: 2rem;
        img {
          ${tw`w-10 h-10`}
        }
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;
