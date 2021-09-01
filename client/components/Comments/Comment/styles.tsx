import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const EntireCommentWrapper = styled.article`
  ${tw`w-full relative`}
  transition: all 0.2s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

export const CommentWrapper = styled.div`
  ${tw`py-4 pr-2 pb-2 pl-6 cursor-pointer`}
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .edit_form {
    ${tw`w-full`}
    ${FLEX_STYLE("flex-end", "center")};
    button {
      width: 20%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    .edit_form {
      button {
        width: 50%;
      }
    }
  }
`;
