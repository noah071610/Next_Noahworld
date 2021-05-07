import React from "react";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Head from "next/head";
import { css } from "@emotion/react";

const ImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageChar = css`
  width: 30%;
  animation: fadeInUpBig 1.5s;
`;

const LinkIcon = css`
  font-size: 1.2rem;
  margin: 0 0.5rem;
`;

function BlogAboutPage() {
  return (
    <>
      <Head>
        <title>Noah world | About me</title>
      </Head>
      <h1 className="about_intro">Hello stranger! Great to meet you.</h1>
      <div css={ImageWrapper}>
        <Link href="/portfolio">
          <a className="link_to_port">Would you like to view my portfolio?</a>
        </Link>
        <img
          data-aos="fade-up"
          data-aos-delay="1000"
          css={ImageChar}
          src="/images/blog/logo_cha.png"
          alt="profile"
        />
      </div>
      <div className="intro_wrapper">
        <h2 className="intro_me">I'm Jang Hyun Soo, Web-developer who love world 👍 </h2>
        <img src="/images/blog/profile_aboutme.jpg" alt="image_profile" />
        <ul className="blog_about_ul">
          <li>
            <span>· Gender</span> : Male 👨
          </li>
          <li>
            <span>· Stay</span> : Living in Seoul 🏠
          </li>
          <li>
            <span>· Language</span> : Korean, English, Japanese
          </li>
          <li>
            <span>· Work History</span> : Travel Company MD in Tokyo, Japan. / Hotel GM in Seoul,
            South Korea.
          </li>
          <li>
            <span>· Occupation</span> : Not yet.. 😢{" "}
          </li>
          <li>
            <span>· Hobby</span> : Coding , Foodie , Learning Language, Work out, Travel (Especially
            Japan 🗾)
          </li>

          <li>
            <span>· Social Media</span> :
            <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
              <FontAwesomeIcon css={LinkIcon} icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon css={LinkIcon} icon={faInstagram} />
            </a>
            <Link href="/portfolio">
              <a css={LinkIcon}>Portfolio</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BlogAboutPage;
