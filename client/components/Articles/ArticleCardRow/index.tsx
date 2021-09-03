/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { ArticleInter } from "../../../types";
import { useRouter } from "next/dist/client/router";
import { ArticleCardRowWrapper } from "./styles";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const ArticleCardRow: FC<ArticleInter> = ({ article }) => {
  const router = useRouter();
  const onClickArticle = (e: React.MouseEvent) => {
    if ((e.target as Element).className === "hashtag") {
      return;
    }
    window.scrollTo({ top: 0 });
    router.push(`/${article.category}/post/${article.id}`);
  };
  const contentWithoutHTML = article?.content
    ?.replace(/(<([^>]+)>)/gi, "")
    .replace(/(#youtube:.*)/g, "(Youtube Video Link)")
    .replace(/&.*;/gi, "");
  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src =
      "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png";
  };
  return (
    <>
      {article && (
        <ArticleCardRowWrapper onClick={onClickArticle}>
          <div className="image-wrapper">
            <img
              alt={article.title}
              src={
                article?.thumbnail
                  ? article.thumbnail
                  : article.imagePath
                  ? article.imagePath.replace(/\/thumb\//, "/original/")
                  : "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png"
              }
              onError={handleImgError}
            />
          </div>
          <div className="content-wrapper">
            <h2>{article.title}</h2>
            <ul className="hashtag-list">
              {article.Hashtags &&
                article.Hashtags.map((v, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/${article.category}?hashtag=${v.name}`}>
                        <a className="hashtag" onClick={() => window.scrollTo({ top: 0 })}>
                          #{v.name}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <p className="content">{contentWithoutHTML}</p>
            <ul className="footer">
              <li>
                {dayjs().to(dayjs(article.createdAt), true)}
                &nbsp;ago
              </li>
              <li>·&nbsp;{article.hit} views</li>
              <li>·&nbsp;{article.PostLikers && article.PostLikers.length} Likes</li>
            </ul>
          </div>
        </ArticleCardRowWrapper>
      )}
    </>
  );
};

export default ArticleCardRow;
