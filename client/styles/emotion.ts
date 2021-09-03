import { css } from "@emotion/react";
import { BLUE_COLOR } from "../config";

export const TitleProfile = css`
  white-space: nowrap;
  display: inline-block;
  margin-left: 0.5rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoPostProfile = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0.3;
  img {
    width: 100px;
  }
`;

export const ProfilePointTitle = css`
  color: ${BLUE_COLOR};
  margin-left: 0.3rem;
`;

export const FLEX_STYLE = (justify: string, align: string, flexStyle?: string) => `
  display:flex;
  justify-content:${justify};
  align-items:${align};
  flex-direction:${flexStyle};
`;

export const ELLIPSIS_STYLE = (lineHeight: number, clamp: number, height: string) => `
line-height: ${lineHeight};
-webkit-line-clamp: ${clamp};
height: ${height};
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
word-wrap: break-word;
text-overflow: ellipsis;
`;

export const GRID_STYLE = (gap: string, colums: string, row?: string) => `
  display:grid;
  grid-template-columns:${colums};
  grid-template-rows:${row};
  gap:${gap};
`;
