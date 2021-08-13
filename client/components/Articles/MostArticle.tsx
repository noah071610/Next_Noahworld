import React, { FC, memo } from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { AsideHashtags, PostInter } from "../../@reducers/@reducerTypes";
import ArticleSmallAside from "./ArticleSmallAside";
import ArticleAside from "./ArticleAside";

const TitleStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 1rem;
`;

const isBottomMargin = (aside: Boolean) => css`
  ${aside ? "margin-bottom: 1rem;" : null}
`;

interface MostArticleProps {
  mostPost?: PostInter;
  src: string;
  desc: string;
  hashtags?: AsideHashtags[];
  aside?: Boolean;
  type?: string;
}

const MostArticle: FC<MostArticleProps> = memo(({ mostPost, src, desc, hashtags, aside, type }) => {
  return (
    <div css={isBottomMargin(aside)}>
      <h3 css={TitleStyle}>
        <img alt="trophy" className="icon" src={src} />
        {desc}
      </h3>
      {hashtags ? (
        <ul className="blog_aside_tag">
          {hashtags &&
            hashtags.map((v, i) => {
              return (
                <li onClick={() => window.scrollTo({ top: 0 })} key={i}>
                  <Link href={`/hashtag/${v.name}`}>
                    <a>#{v.name}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      ) : aside ? (
        <ArticleAside type={type} article={mostPost} />
      ) : (
        <ArticleSmallAside type={type} article={mostPost} />
      )}
    </div>
  );
});

export default memo(MostArticle);
