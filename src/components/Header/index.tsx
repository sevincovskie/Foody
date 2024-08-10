import React from "react";
import { FoodyLogo } from "../Icons";
import Navbar from "../Navbar";
import LanguageSwitcher from "../LanguageSwitcher";

function Header() {
  return (
    <header className="w-full h-[122px] bg-mainWhite  flex justify-between  items-center  rounded-md  px-10 cursor-pointer">
      <div className="mx-7">
        <FoodyLogo />
      </div>
      <Navbar />
      <div className="flex items-center gap-3">
        <input
          className="w-full py-3 px-6 h-[45px] rounded-xl"
          type="search"
          name="Search"
          placeholder="search"
        />
        <LanguageSwitcher />
        <button className=" bg-mainRed px-2 mx-auto  rounded-[30px] w-[100px] h-[30px]  text-white  ">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;



