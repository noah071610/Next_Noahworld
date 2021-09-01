import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const CommentFormWrapper = styled.div`
  ${tw`py-6 px-2 flex relative`}
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  .icon-wrapper {
    ${FLEX_STYLE("flex-start", "center", "column")};
    img {
      ${tw`w-20 h-20 rounded-full shadow-md my-0 mx-auto`}
    }
    h3 {
      ${tw`text-center my-3 text-base`}
    }
  }
  .comment-textarea {
    ${tw`ml-8 w-full`}
    .ant-input {
      ${tw`w-full h-24 shadow-md py-2 px-3`}
    }
    button {
      ${tw`mt-4 py-2 w-1/3`}
      float: right;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media only screen and (max-width: 576px) {
    padding-right: 0;
  }
`;
