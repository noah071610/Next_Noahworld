/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BLUE_COLOR } from "../../../config";
import { FC } from "react";
import { ArticleInter } from "../../../types";
import { useRouter } from "next/dist/client/router";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const ArticleAside: FC<ArticleInter> = ({ article, type }) => {
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
        <article onClick={onClickArticle} className="article article_aside">
          <div style={{ marginBottom: "0.5rem", width: "100%", overflow: "hidden" }}>
            <img
              className="article_img"
              style={{ width: "100%", height: "150px", border: "0.3px solid rgba(0,0,0,0.1)" }}
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
            <span
              style={{
                color: BLUE_COLOR,
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              IN {article.category.toUpperCase()}
            </span>
            <span className="article_md_footer">
              {type === "comments"
                ? article?.Comments?.length + " Comments"
                : type === "like"
                ? article?.PostLikers?.length + " Likes"
                : article.hit + " views"}
            </span>
            <h2
              style={{ margin: "0.5rem 0 0.8rem 0", height: "1.5rem", lineHeight: "1.5" }}
              className="article_aside_header"
            >
              {article.title}
            </h2>
            <ul className="article_footer">
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
          </div>
        </article>
      )}
    </>
  );
};

export default ArticleAside;
