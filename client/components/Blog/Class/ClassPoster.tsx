import styled from "styled-components";

const ClassMainPoster = styled.section`
  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(180deg, rgba(251, 255, 253, 1) 15%, rgba(226, 150, 153, 0.8) 100%);
  width: 100%;
  paddingtop: 3rem;
  margin: 3rem 0;
  height: 100%;
`;

export default function ClassPoster() {
  return (
    <ClassMainPoster className="blog_class_poster">
      <img
        data-aos="fade-right"
        alt="class_poster_girl"
        src="/images/blog/class_study.png"
        className="blog_class_poster_girl"
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <h2
          style={{ paddingLeft: "0.5rem", display: "flex", alignItems: "center" }}
          className="blog_class_poster_title"
        >
          楽しく始まる韓国語教室
          <img
            alt="class_poster_flag"
            style={{ width: "3rem", marginLeft: "0.5rem" }}
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
          style={{ width: "70%" }}
          src="./images/blog/kankokugo.png"
        />
      </div>
    </ClassMainPoster>
  );
}
