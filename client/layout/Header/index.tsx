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
            <img
              src="https://user-images.githubusercontent.com/74864925/139014844-b2688658-6367-420d-93fe-5df81b91c85c.png"
              alt="logo_icon"
            />
            {">"}
          </a>
        </Link>
      </div>
      <HeaderNav />
    </HeaderWrapper>
  );
};

export default Header;
