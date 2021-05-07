/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";

const NoMatchWrapper = css`
  width: 100%;
  height: 80vh;
  padding-top: 7rem;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  h2 {
    text-align: center;
    a {
      font-size: 1.5rem;
      margin: 0 1rem;
    }
  }
`;

function NoMatch() {
  const router = useRouter();
  return (
    <div css={NoMatchWrapper}>
      <h1>
        Oops!! "" which isn't a registered route.{" "}
        <img alt="not_found_img" src="https://img.icons8.com/officel/80/000000/crying-baby.png" />
      </h1>
      <br />
      <h2>
        You can <a onClick={() => router.back()}>go back↩️</a> to the page wheere you come.
      </h2>
    </div>
  );
}

export default NoMatch;
