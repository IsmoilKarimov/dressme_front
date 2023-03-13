import React from "react";
import TopHeader from "./top";
import MediumHeader from "./medium";
import BottomHeader from "./bottom";
import NavMenu from "./nav-menu";

const Header = () => {

  return (
    <header className="border border-searchBgColor">
        <TopHeader />
        <MediumHeader />
        <BottomHeader />
        <NavMenu />
    </header>
  );
};
export default Header;
