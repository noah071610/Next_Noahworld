/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { FC } from "react";
import { useRouter } from "next/dist/client/router";
import { ArticleInter } from "../../../types";
import { TopArticleCardWrapper } from "./styles";
import { BLUE_COLOR } from "../../../config";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const TopArticleCard: FC<ArticleInter> = ({ article, type, image_src }) => {
  const router = useRouter();
  const onClickArticle = (e: React.MouseEvent) => {
    if ((e.target as Element).className === "hashtag") {
      return;
    }
    window.scrollTo({ top: 0 });
    router.push(`/${article.category}/post/${article.id}`);
  };
  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/noImage.gif";
  };
  return (
    <>
      {article && (
        <TopArticleCardWrapper onClick={onClickArticle}>
          <h1>
            <img alt={image_src} src={image_src} />
            <span>IN {article.category.toUpperCase()}</span>
            <span>
              {type === "comments"
                ? article?.Comments?.length + " Comments"
                : type === "like"
                ? article?.PostLikers?.length + " Likes"
                : article.hit + " views"}
            </span>
          </h1>
          <h2>{article.title}</h2>
          <ul>
            <li className="date">
              {dayjs().to(dayjs(article.createdAt), true)}
              &nbsp;ago
            </li>
            <li className="view">
              ·
              <span style={type === "view" ? { color: BLUE_COLOR, fontWeight: "bold" } : {}}>
                &nbsp;{article.hit} views
              </span>
            </li>
            <li className="comments">
              ·
              <span style={type === "view" ? {} : { color: BLUE_COLOR, fontWeight: "bold" }}>
                &nbsp;
                {type === "comments"
                  ? article?.Comments?.length + " Comments"
                  : article?.PostLikers?.length + " Likes"}
              </span>
            </li>
          </ul>
        </TopArticleCardWrapper>
      )}
    </>
  );
};

export default TopArticleCard;
