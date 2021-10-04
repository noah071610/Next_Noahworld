import { css } from "@emotion/react";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../../config";

export const PostRemoteControlWrapper = (FixedRemote: boolean) => css`
  ${tw`w-72 pl-8 top-24 h-full`}
  position: ${FixedRemote ? "sticky" : "static"};
  h1 {
    ${tw`mb-4 leading-6`}
  }
  ul:first-of-type {
    ${tw`mb-6`}
    overflow: hidden;
    li {
      margin: 0;
    }
  }
  .remote-header-large {
    ${tw`block py-3 pl-4`}
    border-left:3px solid rgba(0,0,0,0.15);
  }
  .remote-header-small {
    ${tw`block py-1 pl-8 text-sm`}
    border-left:3px solid rgba(0,0,0,0.15);
  }
  .selected {
    border-left: 3px solid ${BLUE_COLOR};
  }
  @media (max-width: 830px) {
    display: none;
  }
`;
