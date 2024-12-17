import React, { useState } from "react";
import pic from "../../public/abdullah-pict-3.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Abdulla<span className="text-green-500 text-2xl">h</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => {
                return (
                  <li
                    className="hover:scale-105 duration-200 cursor-pointer"
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      activeClass="active"
                    >
                      {" "}
                      {text}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/*mobile navbar*/}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl ">
              {navItems.map(({ id, text }) => {
                return (
                  <li
                    className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                    key={id}
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      activeClass="active"
                    >
                      {" "}
                      {text}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
