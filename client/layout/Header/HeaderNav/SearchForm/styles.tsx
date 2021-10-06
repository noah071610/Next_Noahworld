import styled from "@emotion/styled";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../../../config";
import { FLEX_STYLE } from "../../../../styles/emotion";

export const SearchFormWrapper = styled.div`
  .searchForm-inner {
    transition: all 0.3s;
    background: white;
    ${tw`w-0 p-0 rounded-xl`}
    font-size: 1.5rem;
    ${FLEX_STYLE("flex-end", "center")};
    input {
      width: 100%;
      font-size: 0.85rem;
      ${tw`py-1.5 pl-1.5`}
      border: none;
      background: none;
      &:focus {
        outline: none;
        border: none;
      }
    }
    button {
      transition: 0.3s all;
      &:hover {
        color: ${BLUE_COLOR};
      }
      padding: 0;
    }
  }
  .onSearch {
    animation: slideOn 0.3s forwards;
    padding: 0.25rem 0.5rem;
    button {
      ${tw`p-0`}
    }
  }
  @keyframes slideOn {
    from {
      width: 0;
    }
    to {
      width: 300px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
