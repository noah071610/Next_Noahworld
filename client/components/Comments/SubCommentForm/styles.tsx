import styled from "@emotion/styled";
import tw from "twin.macro";

export const SubCommentFormWrapper = styled.div`
  ${tw`py-4 pr-2 pl-8 flex relative`}
  transition: all 0.3s;
  button {
    width: 20%;
  }
  img {
    ${tw`w-8 h-8 rounded-full my-0 mx-4`}
  }
  div {
    ${tw`flex w-full`}
  }
  @media only screen and (max-width: 576px) {
    ${tw`pl-2 pr-0`}
    img {
      ${tw`ml-0 mr-2`}
    }
    button {
      ${tw`w-2/5 text-sm`}
    }
  }
`;
