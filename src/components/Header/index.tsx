import React from "react";
import { FoodyLogo } from "../Icons";
import Navbar from "../Navbar";
import LanguageSwitcher from "../LanguageSwitcher";

function Header() {
  return (
    <header className="w-full bg-mainWhite  flex justify-between  items-center  rounded-md py-10 px-12 my-4 mx-4 cursor-pointer">
      <div className="mx-7">
        <FoodyLogo />
      </div>
      <Navbar />
      <div className="flex items-center">
        <input
          className="w-full py-3 px-6 h-[45px] rounded-xl"
          type="search"
          name="Search"
          placeholder="search"
        />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
