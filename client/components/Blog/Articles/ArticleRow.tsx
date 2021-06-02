/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { BLUE_COLOR } from "../../../config";
import { ArticleInter } from "../../../types";
import { useRouter } from "next/dist/client/router";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const ArticleRow: FC<ArticleInter> = ({ article }) => {
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
    (e.target as HTMLImageElement).src = "/images/blog/noImage.gif";
  };
  return (
    <>
      {article && (
        <article onClick={onClickArticle} className="article article_row">
          <div style={{ width: "60%", marginRight: "3rem", overflow: "hidden" }}>
            <img
              className="article_img"
              style={{ width: "100%", height: "300px", border: "0.3px solid rgba(0,0,0,0.1)" }}
              alt={article.title}
              src={
                article?.thumbnail
                  ? article.thumbnail
                  : article.imagePath
                  ? article.imagePath.replace(/\/thumb\//, "/original/")
                  : "/images/blog/noImage.gif"
              }
              onError={handleImgError}
            />
          </div>
          <div className="article_contents">
            <h2 style={{ height: "auto" }} className="article_header">
              {article.title}
            </h2>
            <ul style={{ marginBottom: "1rem" }} className="article_tag">
              {article.Hashtags &&
                article.Hashtags.map((v, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/hashtag/${v.name}`}>
                        <a className="hashtag" onClick={() => window.scrollTo({ top: 0 })}>
                          #{v.name}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <p
              style={{
                width: "100%",
                height: "7.2rem",
                overflow: "hidden",
                lineHeight: "1.7",
                fontSize: "0.9rem",
                margin: 0,
                WebkitLineClamp: 5,
              }}
              className="article_desc"
            >
              {contentWithoutHTML}
            </p>
            <ul style={{ marginTop: "1rem" }} className="article_footer">
              <li style={{ color: BLUE_COLOR, fontWeight: "bold" }}>
                {dayjs().to(dayjs(article.createdAt), true)}
                &nbsp;ago
              </li>
              <li>·&nbsp;{article.hit} views</li>
              <li>·&nbsp;{article.PostLikers && article.PostLikers.length} Likes</li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};

export default ArticleRow;
