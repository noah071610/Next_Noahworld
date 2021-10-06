import styled from "@emotion/styled";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../config";
import { GRID_STYLE } from "../../styles/emotion";

export const MainPageWrapper = styled.main`
  ${tw`mt-8 flex`}
  ${GRID_STYLE("2rem", "2.5fr 1fr")};
  .main-title {
    ${tw`px-4 mb-8 text-3xl`}
    .post-count {
      ${tw`text-base ml-4`}
      color: ${BLUE_COLOR};
    }
  }
  aside {
    .hashtag-list {
      padding: 0 1rem;
      a {
        li {
          transition: 0.15s all;
          margin-bottom: 0.35rem;
          margin-right: 0.25rem;
          background: #50586c;
          font-size: 0.75rem;
          ${tw`rounded-md text-white py-1 px-4`}
          &:hover {
            ${tw`bg-blue-100`}
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    ${tw`block`}
    aside {
      ${tw`mt-8`}
    }
  }
`;
