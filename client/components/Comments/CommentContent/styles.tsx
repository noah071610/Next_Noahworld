import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const CommentContentWrapper = styled.div`
  width: 100%;
  display: flex;
  .icon-wrapper {
    img {
      ${tw`w-12 h-12 rounded-full`}
    }
  }
  .comment-content {
    ${tw`ml-8 w-full`}
    .date {
      color: rgba(0, 0, 0, 0.5);
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
    p {
      ${tw`text-sm pr-8 mt-2`}
    }
  }
  @media (max-width: 576px) {
    .comment-content {
      ${tw`ml-4`}
      p {
        ${tw`p-0`}
      }
    }
  }
`;
