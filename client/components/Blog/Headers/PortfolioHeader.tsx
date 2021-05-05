/* eslint-disable jsx-a11y/anchor-is-valid */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, memo } from "react";
import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { NavInter } from "../../../types";

export const PortfolioHeader: FC<NavInter> = memo(({ navContents }) => {
  return (
    <>
      <Link href={"/"}>
        <a
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          className="blog_header_li"
        >
          <FontAwesomeIcon style={{ marginRight: "0.8rem" }} icon={faHome} />
          Blog
        </a>
      </Link>
      <Scrollspy
        items={["aboutme", "skills", "portfolio", "contact"]}
        currentClassName="is-current"
        className="blog_header_ul"
        offset={0}
      >
        {navContents.map((v, i) => (
          <li key={i} className="blog_header_li" style={{ transition: "all 0.3s" }}>
            <a href={`#${v.name}`}>
              <FontAwesomeIcon icon={v.icon} />
              <span style={{ marginLeft: "1rem" }}>{v.explain}</span>
            </a>
          </li>
        ))}
      </Scrollspy>
    </>
  );
});
