import styled from "@emotion/styled";
import tw from "twin.macro";
import { FLEX_STYLE } from "../../../styles/emotion";

export const CommentPopupWrapper = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 z-10`};
  background-color: rgba(0, 0, 0, 0.5);
  h2 {
    ${tw`text-white`}
  }
  ${FLEX_STYLE("center", "center", "column")};
  .popup-btn {
    ${tw`py-2 px-4 rounded-md font-bold text-white hover:text-blue-500`}
    transition: all 0.3s;
  }
  @media only screen and (max-width: 576px) {
    h2 {
      font-size: 0.9rem;
    }
  }
`;
