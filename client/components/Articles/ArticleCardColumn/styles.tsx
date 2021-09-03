import { css } from "@emotion/react";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../../config";
import { ELLIPSIS_STYLE } from "../../../styles/emotion";

export const ArticleCardColumnWrapper = (smallSize: Boolean) => css`
  ${tw`cursor-pointer`}
  ${smallSize ? tw`pr-2` : tw`p-4`}
  &:hover {
    .image-wrapper {
      img {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }
  .image-wrapper {
    ${tw`overflow-hidden w-full h-52 mb-4`}
    ${smallSize ? tw`h-44` : tw`h-52`}
    img {
      ${tw`w-full h-full`}
      transition: 0.3s all;
      border: 0.3px solid rgba(0, 0, 0, 0.1);
    }
  }
  .content-wrapper {
    h2 {
      ${tw`mt-0 mb-2 text-lg`}
      ${ELLIPSIS_STYLE(1.5, 1, "auto")}
    }
    .hashtag-list {
      ${tw`mb-2`}
      button {
        color: ${BLUE_COLOR};
        ${tw`p-0 hover:font-bold text-sm`}
      }
    }
    .content {
      ${tw`text-xs`}
      ${smallSize ? ELLIPSIS_STYLE(1.8, 3, "auto") : ELLIPSIS_STYLE(1.8, 4, "5.5rem")}
    }
    .content-notags {
      ${tw`text-xs mt-4 mb-3`}
      ${smallSize ? ELLIPSIS_STYLE(1.8, 3, "auto") : ELLIPSIS_STYLE(1.8, 5, "6.7rem")}
    }
  }
  .footer {
    color: rgba(0, 0, 0, 0.3);
    ${tw`font-bold text-xs`};
    li:first-of-type {
      color: ${BLUE_COLOR};
    }
  }
  @media (max-width: 576px) {
    ${tw`px-0`}
  }
`;
