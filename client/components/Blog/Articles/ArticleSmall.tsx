import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { FC } from "react";
import { ArticleInter } from "../../../types";
import { useRouter } from "next/dist/client/router";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const Article = styled.article`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  img {
    transition: all 0.3s;
  }
  p {
    color: black;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    img {
      transform: scale(1.05);
    }
    p {
      color: black;
      text-decoration: underline;
    }
  }
`;

const ArticleSmall: FC<ArticleInter> = ({ article }) => {
  const router = useRouter();
  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/noImage.gif";
  };
  return (
    <Article
      onClick={() => {
        router.push(`/${article.category}/post/${article.id}`);
        window.scrollTo({ top: 0 });
      }}
      className="blog_main_small"
    >
      <img
        style={{ width: "110px", height: "80px" }}
        src={
          article?.thumbnail
            ? article.thumbnail
            : article.imagePath
            ? article.imagePath.replace(/\/thumb\//, "/original/")
            : "/images/blog/noImage.gif"
        }
        alt="thumbnail"
        onError={handleImgError}
      />
      <div>
        <p style={{ margin: "0 0 0.5rem 1rem", height: "100%" }}>{article.title} </p>
        <ul style={{ margin: "0 0 0 1rem" }} className="article_footer">
          <li>
            {dayjs().to(dayjs(article.createdAt), true)}
            &nbsp;ago
          </li>
          <li>·&nbsp;{article.hit} views</li>
          <li>·&nbsp;{article.PostLikers && article.PostLikers.length} Likes</li>
        </ul>
      </div>
    </Article>
  );
};

export default ArticleSmall;
