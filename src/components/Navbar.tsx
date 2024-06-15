import React from "react";

function Navbar() {
  return (
    <div className="w-[100%]">
      <div className=" text-Black p-4 gap-5 flex items-center justify-around shadow-md shadow-blac">
        <div className="md:text-2xl lg:text-2xl font-Semibold cursor-pointer hover:text-blue-500">
          Dec Gaming Studio{" "}
        </div>
        <div>
          <ul className="hidden md:flex cursor-pointer lg:flex md:text-xl lg:text-lg gap-5 text-black ">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">About</li>
            <li className="hover:text-blue-500">Careers</li>
            <li className="hover:text-blue-500">Training Program</li>
            <li className="hover:text-blue-500">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
