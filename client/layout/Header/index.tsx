import React from "react";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import { HeaderWrapper } from "./styles";
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-inner">
        <Link href={"/"}>
          <a className="header-logo">
            {"<"}Noah_World
            <img src="./images/blog/logo_main.png" alt="logo_icon" />
            {">"}
          </a>
        </Link>
      </div>
      <HeaderNav />
    </HeaderWrapper>
  );
};

export default Header;
