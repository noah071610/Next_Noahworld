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
      padding: 1rem;
      li {
        margin: 0.5rem 1rem 0.5rem 0;
        &:last-child {
          margin-right: 0;
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
