import React from "react";

import logo from "../../public/img/Group 427319793.png";

const Header = () => {
  return (
    <header className=" bg-slate-500">
      <div className="container mx-auto flex justify-between items-center pt-4  md:pt-10 md:pb-8 pb-3 px-3 md:px-0 ">
        <img src={logo} alt="Logo" className=" hidden md:inline mr-3" />
        <div>
          <img src={logo} alt="Logo" className="  md:hidden mr-3" />
        </div>

        <nav className="space-x-8 hidden  md:flex flex-row justify-center items-center">
          <div className=" flex justify-center items-center flex-row gap-1">
            <p className=" font-helvetica">Features</p>
            <img src="/public/icons/Vector.svg" />
          </div>
          <div className=" flex justify-center items-center flex-row gap-1">
            <p className=" font-helvetica">Apps</p>
            <img src="/public/icons/Vector.svg" />
          </div>
          <a href="#" className=" font-helvetica">
            Pricing
          </a>
          <a href="#" className=" font-helvetica">
            Blog
          </a>
          <button className=" py-3 px-8  bg-regal-orange rounded-xl text-paper">
            Sign In
          </button>
          <button className=" py-3 px-8  text-regal-orange border border-regal-orange rounded-xl">
            Log In
          </button>
        </nav>
        <img
          className=" md:hidden"
          src="/public/icons/menu.svg"
          height={32}
          width={32}
        />
      </div>
    </header>
  );
};

export default Header;
