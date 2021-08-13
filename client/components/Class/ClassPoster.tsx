import styled from "@emotion/styled";
import React, { memo } from "react";
const ClassMainPoster = styled.section`
  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(180deg, rgba(251, 255, 253, 1) 15%, rgba(226, 150, 153, 0.8) 100%);
  width: 100%;
  paddingtop: 3rem;
  margin: 3rem 0;
  height: 100%;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    h2 {
      padding-left: 0.5rem;
      display: flex;
      align-items: center;
      img {
        width: 3rem;
        margin-left: 0.5rem;
      }
    }
    .class_intro_text {
      width: 70%;
    }
  }
`;

const ClassPoster = memo(() => {
  return (
    <ClassMainPoster className="blog_class_poster">
      <img
        data-aos="fade-right"
        alt="class_poster_girl"
        src="/images/blog/class_study.png"
        className="blog_class_poster_girl"
      />
      <div>
        <h2 className="blog_class_poster_title">
          楽しく始まる韓国語教室
          <img
            alt="class_poster_flag"
            src="https://img.icons8.com/plasticine/100/000000/south-korea.png"
          />
        </h2>
        <img
          className="blog_class_poster_cha"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          alt="class_intro_cha"
          src="./images/blog/logo_cha.png"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="700"
          alt="class_intro_text"
          className="class_intro_text"
          src="./images/blog/kankokugo.png"
        />
      </div>
    </ClassMainPoster>
  );
});

export default memo(ClassPoster);
