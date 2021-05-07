/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Divider } from "antd";
import React, { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const ClassCard = memo(() => {
  const router = useRouter();
  return (
    <section style={{ width: "100%", marginRight: "2rem" }}>
      <Divider orientation="left">
        <Link href={"/class"}>
          <a style={{ display: "flex", alignItems: "center" }}>
            Korean Class for &nbsp;
            <img
              alt="japan_flag"
              style={{ width: "1.5rem" }}
              src="https://img.icons8.com/color/48/000000/japan.png"
            />
          </a>
        </Link>
      </Divider>

      <div className="blog_bottom">
        <div
          onClick={() => {
            router.push("/class");
            window.scrollTo({ top: 0 });
          }}
          className="blog_bottom_card"
          style={{ gridArea: "hd" }}
        >
          <a className="blog_bottom_cover" />
          <h2 className="blog_bottom_card_title">韓国語基礎</h2>
          <img
            className="blog_bottom_img"
            alt="korean_class_basic"
            src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=556&q=80"
          />
        </div>
        <div
          onClick={() => {
            router.push("/class");
            window.scrollTo({ top: 0 });
          }}
          className="blog_bottom_card"
          style={{ gridArea: "sub1" }}
        >
          <a className="blog_bottom_cover" />
          <h2 className="blog_bottom_card_title">文化</h2>
          <img
            className="blog_bottom_img"
            alt="korean_class_culture"
            src="https://images.unsplash.com/photo-1485186667901-c039c19ecac3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=274&q=80"
          />
        </div>
        <div
          onClick={() => {
            router.push("/class");
            window.scrollTo({ top: 0 });
          }}
          className="blog_bottom_card"
          style={{ gridArea: "sub2" }}
        >
          <a className="blog_bottom_cover" />
          <h2 className="blog_bottom_card_title">今どき</h2>
          <img
            className="blog_bottom_img"
            alt="korean_class_hotword"
            src="https://images.unsplash.com/photo-1550177205-89d100b75c34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=274&q=80"
          />
        </div>
        <div
          onClick={() => {
            router.push("/class");
            window.scrollTo({ top: 0 });
          }}
          className="blog_bottom_card"
          style={{ gridArea: "sub3" }}
        >
          <a className="blog_bottom_cover" />
          <h2 className="blog_bottom_card_title">会話</h2>
          <img
            className="blog_bottom_img"
            alt="korean_class_conversation"
            src="https://images.unsplash.com/photo-1531496244015-67bec2b9952b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=274&q=80"
          />
        </div>
      </div>
    </section>
  );
});

export default memo(ClassCard);
