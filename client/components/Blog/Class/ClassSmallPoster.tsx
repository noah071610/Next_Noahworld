export default function ClassSmallPoster() {
  return (
    <section className="blog_class_small_poster">
      <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        楽しく始まる韓国語教室
        <img
          alt="class_poster_flag"
          style={{ width: "3rem", marginLeft: "0.5rem" }}
          src="https://img.icons8.com/plasticine/100/000000/south-korea.png"
        />
      </h2>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <img
          alt="class_poster_girl"
          src="/images/blog/class_study.png"
          className="class_poster_girl"
        />
      </div>
    </section>
  );
}
