import { Divider } from "antd";
import Slider from "react-slick";
import React, { FC, memo } from "react";
import ArticleColumn from "./ArticleColumn";
import ArticleRow from "./ArticleRow";
import ArticleSmall from "./ArticleSmall";
import { PostInter } from "../../../@reducers/@reducerTypes";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const smallSizeSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface MainArticleProps {
  category: Array<PostInter>;
}

const MainArticle: FC<MainArticleProps> = memo(({ category }) => {
  return (
    <>
      <div className="blog_category_big">
        <ArticleRow article={category[0]} />
      </div>
      <div className="blog_category_medium">
        <ArticleColumn article={category[0]} />
      </div>
      <div className="blog_category_small">
        <Slider {...smallSizeSettings}>
          {category?.slice(0, 3).map((article, i) => {
            return <ArticleColumn key={i} article={article} />;
          })}
        </Slider>
      </div>
      <div className="blog_main_big">
        <Divider />
        <Slider {...settings}>
          {category?.slice(1, 8).map((v, i) => (
            <ArticleColumn key={i} article={v} />
          ))}
        </Slider>
      </div>
      {category?.slice(3, 8).map((article, i) => {
        return <ArticleSmall key={i} article={article} />;
      })}
    </>
  );
});

export default memo(MainArticle);
