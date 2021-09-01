/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/dist/client/router";
import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOAD_CATEGORY_POSTS_REQUEST } from "../../../@reducers/post";
import { ArticleInter } from "../../../types";
import { ArticleCardColumnWrapper } from "./styles";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const ArticleCardColumn: FC<ArticleInter> = ({ setOnHashtagFilter, article, smallSize }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onClickArticle = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as Element).className === "hashtag") {
        return;
      }
      window.scrollTo({ top: 0 });
      router.push(`/${article.category}/post/${article.id}`);
    },
    [article]
  );
  const contentWithoutHTML = article?.content
    ?.replace(/(<([^>]+)>)/gi, "")
    .replace(/(#youtube:.*)/g, "(Youtube Video Link)")
    .replace(/&.*;/gi, "");
  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/noImage.gif";
  };

  const onClickHashtag = useCallback(
    (hashtag: string) => {
      if (setOnHashtagFilter) {
        dispatch({
          type: LOAD_CATEGORY_POSTS_REQUEST,
          data: {
            category: article.category,
            hashtag,
          },
        });
        setOnHashtagFilter(true);
      } else {
        router.push(`/tech?hashtag=${hashtag}`);
      }
    },
    [setOnHashtagFilter, article]
  );
  return (
    <>
      {article && (
        <ArticleCardColumnWrapper
          style={smallSize ? { padding: "0 0.5rem 0 0" } : {}}
          onClick={onClickArticle}
        >
          <div style={smallSize ? { height: "180px" } : {}} className="image-wrapper">
            <img
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
          <div className="content-wrapper">
            <h2>{article.title}</h2>
            <ul className="hashtag-list">
              {article?.Hashtags?.map((v, i) => {
                return (
                  <li key={i}>
                    <button onClick={() => onClickHashtag(v.name)} className="hashtag">
                      #{v.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p
              style={smallSize ? { WebkitLineClamp: 3, height: "auto" } : {}}
              className={article?.Hashtags?.length > 0 ? "content" : "content-notags"}
            >
              {contentWithoutHTML.slice(0, 250)}
            </p>
          </div>
          <ul className="footer">
            <li>
              {dayjs().to(dayjs(article.createdAt), true)}
              &nbsp;ago
            </li>
            <li>·&nbsp;{article.hit} views</li>
            <li>·&nbsp;{article.PostLikers && article.PostLikers.length} Likes</li>
          </ul>
        </ArticleCardColumnWrapper>
      )}
    </>
  );
};

export default ArticleCardColumn;
