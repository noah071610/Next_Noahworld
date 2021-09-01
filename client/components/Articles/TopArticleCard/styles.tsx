import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const TopArticleCardWrapper = styled.article`
  ${tw`p-4 cursor-pointer`}
  &:hover {
    h2 {
      ${tw`underline`}
    }
  }
  h1 {
    ${tw`h-auto text-base mb-3`}
    ${FLEX_STYLE("flex-start", "center")};
    img {
      ${tw`w-10 h-10`}
    }
    span {
      ${tw`text-base inline-block font-bold`}
    }
    span:first-of-type {
      ${tw`mx-2`}
    }
  }
  h2 {
    ${tw`leading-6`}
  }
  ul {
    ${tw`text-xs mt-3`}
  }
  @media (max-width: 576px) {
    ${tw`px-0`}
  }
`;
