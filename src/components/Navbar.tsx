import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNav = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setToggle(false); // Close the mobile menu when a link is clicked
  };

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="w-full">
      <div className="text-black p-4 gap-5 flex items-center justify-around shadow-md shadow-black ">
        <div className="md:text-2xl lg:text-2xl font-semibold cursor-pointer hover:text-blue-500">
          Dec Gaming Studio
        </div>
        <div>
          <ul className="hidden md:flex cursor-pointer lg:flex md:text-xl lg:text-lg gap-5 text-black">
            <li
              className="hover:text-blue-500"
              onClick={() => handleNav("home")}
            >
              Home
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => handleNav("about")}
            >
              About
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => handleNav("careers")}
            >
              Careers
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => handleNav("training")}
            >
              Training Program
            </li>
            <li
              className="hover:text-blue-500"
              onClick={() => handleNav("contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div
          className="block lg:hidden md:hidden transition transform ease-in delay-1000"
          onClick={handleToggle}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer transition-transform ease-in duretion-1000 transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer transition-transform ease-in duration-200 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      {toggle && (
        <div className="w-full absolute top-[54px] z-20 backdrop-blur-md flex lg:hidden md:hidden bg-white h-[300px]">
          <ul className="list-none text-black w-full items-center font-bold justify-start gap-5 flex flex-col cursor-pointer">
            <li className="py-2 px-3 w-full" onClick={() => handleNav("home")}>
              Home
            </li>
            <li className="py-2 px-3 w-full" onClick={() => handleNav("about")}>
              About
            </li>
            <li
              className="py-2 px-3 w-full"
              onClick={() => handleNav("career")}
            >
              Careers
            </li>
            <li
              className="py-2 px-3 w-full"
              onClick={() => handleNav("training")}
            >
              Training Program
            </li>
            <li
              className="py-2 px-3 w-full"
              onClick={() => handleNav("contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
