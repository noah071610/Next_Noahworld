import styled from "@emotion/styled";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../config";
import { FLEX_STYLE } from "../../styles/emotion";

export const PostPageWrapper = styled.main`
  .post-title {
    font-size: 2.5rem;
    line-height: 1.5;
  }
  .post-desc {
    ${tw`text-base mb-20 text-gray-300`}
    ${FLEX_STYLE("flex-start", "center")};
  }
  .post-main-wrapper {
    width: 1120px;
    ${tw`relative`}
    ${FLEX_STYLE("space-between", "flex-start")};
    .post-main {
      padding: 0 1rem;
      width: 840px;
      .post-tumbnail {
        ${tw`w-full mb-24`}
      }
    }
    .post-content {
      margin-bottom: 3rem;
      h1 {
        font-size: 1.6rem;
        margin: 1.5rem 0;
      }
      h2 {
        font-size: 1.4rem;
        margin: 1.5rem 0;
      }
      h3 {
        font-size: 1.2rem;
        margin: 1.5rem 0;
      }
      h4 {
        margin: 1.5rem 0;
      }
      a {
        color: ${BLUE_COLOR};
      }
      img {
        width: 65%;
      }
      p {
        font-size: 0.9rem;
        line-height: 1.8;
        margin: 0;
        padding-bottom: 1rem;
      }
      blockquote {
        border-left: 5px solid ${BLUE_COLOR};
        margin-bottom: 1rem;
        padding: 0.5rem 0 0.5rem 1rem;
        p {
          padding: 0;
        }
      }
      ul {
        list-style-type: disc;
        list-style: inherit;
        list-style-position: inside;
        padding-bottom: 1rem;
      }
      ol {
        list-style-type: decimal;
        list-style: decimal;
        list-style-position: inside;
        padding-bottom: 1rem;
      }
      li {
        display: list-item;
        list-style: inherit;
        list-style-position: inside;
        p {
          padding: 0;
          display: initial;
        }
      }
      span {
        font-size: 1rem;
      }
      [data-backticks] {
        background-color: ${BLUE_COLOR};
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 3px;
        margin-right: 0.2rem;
        font-size: 0.7rem;
      }
      pre {
        margin: 1rem 0 2rem 0;
        padding: 1rem;
        font-size: 0.83rem;
        span {
          font-size: 0.83rem;
        }
        line-height: 1.9;
        background-color: #f4f7f8;
      }
      .youtube {
        width: 100%;
        height: 500px;
      }
    }
  }

  @media (max-width: 830px) {
    .post-title {
      font-size: 1.7rem;
    }
    .post-main-wrapper {
      ${tw`w-full`}
      .post-main {
        ${tw`w-full p-0`}
        .post-content {
          img {
            width: 100%;
          }
          p {
            ${tw`text-sm leading-7`}
          }
          span {
            ${tw`text-sm`}
          }
          .youtube {
            height: 300px;
          }
        }
      }
    }
  }
`;
