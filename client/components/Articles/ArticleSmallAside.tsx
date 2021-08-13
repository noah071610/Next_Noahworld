/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BLUE_COLOR } from "../../config";
import styled from "@emotion/styled";
import React, { FC } from "react";
import { ArticleInter } from "../../types";
import { useRouter } from "next/dist/client/router";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const Article = styled.article`
  transition: all 0.4s;
  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ArticleSmallAside: FC<ArticleInter> = ({ article, type }) => {
  const router = useRouter();
  const onClickArticle = (e: React.MouseEvent) => {
    if ((e.target as Element).className === "hashtag") {
      return;
    }
    window.scrollTo({ top: 0 });
    router.push(`/${article.category}/post/${article.id}`);
  };
  return (
    <>
      {article && (
        <Article
          onClick={onClickArticle}
          style={{ marginLeft: "0.5rem" }}
          className="article article_aside"
        >
          <div className="blog_small_aside_title">
            <span
              style={{
                color: BLUE_COLOR,
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              IN {article.category.toUpperCase()}
            </span>
            <span className="article_md_footer">
              &nbsp;&nbsp;
              {type === "comments"
                ? article.Comments?.length + " Comments"
                : type === "like"
                ? article.PostLikers?.length + " Likes"
                : article.hit + " views"}
            </span>
            <h2 style={{ marginTop: "1rem" }} className="article_aside_header small_title">
              {article.title}
            </h2>
          </div>
        </Article>
      )}
    </>
  );
};

export default ArticleSmallAside;
