import React from "react";
import { BsXLg } from "react-icons/bs";
const Sidebar = ({ handleClick, click }) => {
  return (
    <>
      <div
        className={`fixed  top-0 bottom-0 h-screen w-[50%] bg-white dark:bg-slate-800 dark:text-white duration-300 ease-in-out -translate-x-full `}
      >
        <div className="mx-10 my-7 font-bold text-2xl">
          <div className="flex justify-between ">
            <div>Menu</div>
            <div>
              <BsXLg
                style={{ color: "black", fontSize: "1.5em" }}
                size={25}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                onClick={() => {
                  handleClick();
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-4 text-xl">
            <ul className="grid gap-2">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2">
                <a href="/">HOME</a>
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2">
                <a href="profile">PROFILE</a>
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2">
                <a href="project">PROJECT</a>
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2">
                <a href="skills">SKILLS</a>
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2">
                <a href="dashboard">DASHBOARD</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
