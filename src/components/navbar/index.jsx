import { useState, useEffect } from "react";
import { BsList, BsXLg, BsSun, BsMoonFill } from "react-icons/bs";
import Sidebar from "../sidebar/index";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      localStorage.theme = "light";
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleClick = () => {
    setClick(!click);
  };

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.theme = theme === "dark" ? "light" : "dark";
  };

  const handleNavigate = (id) =>{
    navigate(`/${id}`)
  }
  console.log(click)
  return (
    <nav className="bg-white dark:bg-slate-800 dark:text-white  max-w-full  h-[80px] left-0 right-0 top-0 border-b  container ">
      <div className="flex justify-between h-full">
        <div className="flex items-center justify-items-center cursor-pointer">
          <p className="text-2xl font-bold font-poppins hover:text-[#E01111]">zaKing</p>
        </div>
        <ul className="hidden md:flex items-center justify-items-center justify-center text-base font-bold font-poppins ">
          <li className="mx-5 cursor-pointer hover:text-[#E01111]" onClick={() =>{handleNavigate("")}}>Home</li>
          <li className="mx-5 cursor-pointer hover:text-[#E01111]" onClick={() =>{handleNavigate("profile")}}>Profile</li>
          <li className="mx-5 cursor-pointer hover:text-[#E01111]"  onClick={() =>{handleNavigate("project")}}> Project</li>
          <li className="mx-5 cursor-pointer hover:text-[#E01111]" onClick={() =>{handleNavigate("skills")}}> Skills</li>
          <li className="mx-5 cursor-pointer hover:text-[#E01111]" onClick={() =>{handleNavigate("dashboard")}}> Dashboard</li>
        </ul>

        <div className="hidden md:flex items-center justify-items-center justify-center  ">
          {theme === "dark" ? (
            <BsSun
              size={30}
              onClick={handleTheme}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "white")}
              className="cursor-pointer mr-4"
            />
          ) : (
            <BsMoonFill
              size={30}
              onClick={handleTheme}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              className="cursor-pointer mr-4"
            />
          )}
          <a
            href="https://api.whatsapp.com/send?phone=85155154616&text=zaky"
            target="blank"
          >
            <button className=" text-base font-medium font-poppins bg-[#E01111] w-28 h-10 font text-white rounded-tl-xl rounded-br-xl shadow-lg cursor-pointer">
              Contac Me
            </button>
          </a>
        </div>
        
        <div className="md:hidden my-auto flex">
          <div>
            {theme === "dark" ? (
              <BsSun
                size={30}
                onClick={handleTheme}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="cursor-pointer mr-4"
              />
            ) : (
              <BsMoonFill
                size={30}
                onClick={handleTheme}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer mr-4"
              />
            )}
          </div>

          <div>
            {click ? (
              <BsList
                style={{ color: "black", fontSize: "1.5em" }}
                size={30}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer"
              />
            ) : (
              <div className={`fixed ${!click ? "-translate-x-[100%] ease-in-out duration-500" :"-translate-x-[0%] ease-in-out duration-500"} top-0 bottom-0 h-screen w-[50%] bg-white dark:bg-slate-800 dark:text-white z-40 `}>
        <div className="mx-10 my-7 font-bold text-2xl">
          <div className="flex justify-between ">
            <div>Menu</div>
            <div>
              <BsXLg
                style={{ color: "black", fontSize: "1.5em" }}
                size={25}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                onClick={() =>{handleClick()}}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-4 text-xl">
            <ul className="grid gap-2">
            
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2"><a href="/">HOME</a></li>
              <li  className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2"><a href="profile">PROFILE</a></li>
              <li  className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2"><a href="project">PROJECT</a></li>
              <li  className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2"><a href="skills">SKILLS</a></li>
              <li  className="hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg h-12 grid items-center pl-2"><a href="dashboard">DASHBOARD</a></li>
            </ul>
          </div>
        </div>
      </div>

              // <div><Sidebar click={click} handleClick={handleClick}/></div>
            )}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
