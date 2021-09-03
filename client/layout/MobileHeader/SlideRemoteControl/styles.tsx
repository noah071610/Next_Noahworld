import styled from "@emotion/styled";
import tw from "twin.macro";

export const SlideRemoteControlWrapper = styled.div`
  ${tw`w-full p-4 pt-0 bg-white fixed left-0 z-10`};
  top: 55px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  svg,
  li {
    margin: 0;
  }
`;
