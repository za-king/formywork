import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full h-[80px] left-0 right-0 top-0 border-b  container">
      <div className="flex justify-between h-full">
        <div className="flex items-center justify-items-center">
          <p className="text-2xl font-bold font-poppins">zaKing</p>
        </div>
        <ul className="flex items-center justify-items-center justify-center text-base font-bold font-poppins">
          <li className="mx-5">Home</li>
          <li className="mx-5">Blog</li>
          <li className="mx-5">Project</li>
        </ul>

        <div className="flex items-center justify-items-center justify-center">
          <button className=" text-base font-medium font-poppins bg-[#E01111] w-28 h-10 font text-white rounded-tl-xl rounded-br-xl shadow-lg">
            Contac Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
