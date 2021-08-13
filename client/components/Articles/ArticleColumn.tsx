/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FC } from "react";
import { ArticleInter } from "../../types";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const ArticleColumn: FC<ArticleInter> = ({ article, nocontent }) => {
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
        <article onClick={onClickArticle} className="article article_column">
          <div style={{ marginBottom: "1rem", width: "100%", overflow: "hidden" }}>
            <img
              style={nocontent ? { height: "140px" } : {}}
              className="article_img"
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
          <div>
            <h2 style={{ height: "auto" }} className="article_header">
              {article.title}
            </h2>
            {nocontent ? null : (
              <>
                <ul style={{ marginBottom: "1rem" }}>
                  {article?.Hashtags?.map((v, i) => {
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
                  style={
                    article?.Hashtags
                      ? {
                          margin: 0,
                          WebkitLineClamp: 4,
                          height: "5.1rem",
                          lineHeight: "1.7",
                          fontSize: "0.8rem",
                        }
                      : {
                          height: "6.5rem",
                          WebkitLineClamp: 5,
                          marginBottom: "1.5rem",
                          lineHeight: "1.7",
                          fontSize: "0.8rem",
                        }
                  }
                  className="article_desc"
                >
                  {contentWithoutHTML}
                </p>
              </>
            )}
          </div>
          <ul
            style={article?.Hashtags ? { marginTop: "1rem" } : { marginTop: "1.7rem" }}
            className="article_footer"
          >
            <li>
              {dayjs().to(dayjs(article.createdAt), true)}
              &nbsp;ago
            </li>
            <li>·&nbsp;{article.hit} views</li>
            <li>·&nbsp;{article.PostLikers && article.PostLikers.length} Likes</li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ArticleColumn;
