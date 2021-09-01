import styled from "@emotion/styled";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../../config";
import { ELLIPSIS_STYLE } from "../../../styles/emotion";

export const ArticleCardRowWrapper = styled.article`
  ${tw`p-4 cursor-pointer grid gap-6 mb-4`}
  grid-template-columns: 1.2fr 1.8fr;
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }
  .image-wrapper {
    ${tw`overflow-hidden`}
    img {
      ${tw`w-full h-full`}
      transition: 0.3s all;
      border: 0.3px solid rgba(0, 0, 0, 0.1);
    }
  }
  .content-wrapper {
    h2 {
      ${tw`mt-0 mb-3 text-lg`}
      ${ELLIPSIS_STYLE(1.5, 1, "1.5rem")}
    }
    .hashtag-list {
      ${tw`mb-3`}
      a {
        color: ${BLUE_COLOR};
        ${tw`hover:font-bold text-sm`}
      }
    }
    .content {
      ${tw`text-sm`}
      ${ELLIPSIS_STYLE(1.7, 7, "7.5rem")}
    }
    .footer {
      color: rgba(0, 0, 0, 0.3);
      ${tw`font-bold text-xs`};
      li:first-of-type {
        color: ${BLUE_COLOR};
      }
    }
  }
  @media (max-width: 576px) {
    ${tw`block p-0 my-10`}
    .image-wrapper {
      ${tw`mb-4 h-44`}
    }
    .content-wrapper {
      .content {
        ${ELLIPSIS_STYLE(1.7, 3, "auto")}
      }
    }
  }
`;
